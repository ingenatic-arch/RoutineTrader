#!/usr/bin/env bash
# scripts/clickup.sh — post a markdown message to a ClickUp Chat channel.
#
# Usage: bash scripts/clickup.sh "markdown-formatted message"
#
# Env vars (all three required together):
#   CLICKUP_API_KEY, CLICKUP_WORKSPACE_ID, CLICKUP_CHANNEL_ID
#
# Graceful fallback: if ANY of the three are missing, appends the message to
# a local DAILY-SUMMARY.md (gitignored) and exits 0. Never crashes the agent.
# This keeps notification failures from aborting the trading routine.

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_DIR="$(cd "${SCRIPT_DIR}/.." && pwd)"

if [[ -f "${REPO_DIR}/.env" ]] && {
     [[ -z "${CLICKUP_API_KEY:-}"      ]] \
  || [[ -z "${CLICKUP_WORKSPACE_ID:-}" ]] \
  || [[ -z "${CLICKUP_CHANNEL_ID:-}"   ]]; }
then
  set -a
  # shellcheck disable=SC1091
  source "${REPO_DIR}/.env"
  set +a
fi

msg="${1:-}"
if [[ -z "$msg" ]]; then
  printf 'clickup.sh: missing message\n' >&2
  exit 2
fi

# Local fallback if any var is missing.
if [[ -z "${CLICKUP_API_KEY:-}" \
   || -z "${CLICKUP_WORKSPACE_ID:-}" \
   || -z "${CLICKUP_CHANNEL_ID:-}" ]]; then
  {
    printf '\n---\n## %s\n\n%s\n' "$(date -u +'%Y-%m-%dT%H:%M:%SZ')" "$msg"
  } >> "${REPO_DIR}/DAILY-SUMMARY.md"
  printf 'clickup.sh: ClickUp vars not set — appended to DAILY-SUMMARY.md\n' >&2
  exit 0
fi

body=$(python3 -c '
import json, sys
print(json.dumps({"type": "message", "content": sys.argv[1], "content_format": "text/md"}))
' "$msg")

url="https://api.clickup.com/api/v3/workspaces/${CLICKUP_WORKSPACE_ID}/chat/channels/${CLICKUP_CHANNEL_ID}/messages"

resp=$(curl -sS -X POST "$url" \
  -H "Authorization: ${CLICKUP_API_KEY}" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json" \
  --data "$body" \
  -w $'\n%{http_code}') || { printf 'clickup.sh: curl transport error — falling back to local\n' >&2; \
    printf '\n---\n## %s\n\n%s\n' "$(date -u +'%Y-%m-%dT%H:%M:%SZ')" "$msg" >> "${REPO_DIR}/DAILY-SUMMARY.md"; \
    exit 0; }

code="${resp##*$'\n'}"
payload="${resp%$'\n'*}"

if [[ ! "$code" =~ ^2 ]]; then
  printf 'clickup.sh: HTTP %s\n%s\nFalling back to DAILY-SUMMARY.md.\n' "$code" "$payload" >&2
  {
    printf '\n---\n## %s (ClickUp HTTP %s)\n\n%s\n' "$(date -u +'%Y-%m-%dT%H:%M:%SZ')" "$code" "$msg"
  } >> "${REPO_DIR}/DAILY-SUMMARY.md"
  exit 0
fi

printf 'clickup.sh: posted (HTTP %s)\n' "$code" >&2
