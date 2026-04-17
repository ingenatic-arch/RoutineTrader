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

# Retry policy for transient 5xx / transport errors (matches etoro.sh):
# 8 attempts, backoffs 15 / 30 / 60 / 90 / 120 / 180 / 240 with ±20% jitter
# (~12 min worst-case). 4xx is non-transient — falls back to local log.
backoffs=(15 30 60 90 120 180 240)
max_attempts=$(( ${#backoffs[@]} + 1 ))
resp=""
code=""
for (( attempt=1; attempt<=max_attempts; attempt++ )); do
  if resp=$(curl -sS -X POST "$url" \
      -H "Authorization: ${CLICKUP_API_KEY}" \
      -H "Content-Type: application/json" \
      -H "Accept: application/json" \
      --data "$body" \
      -w $'\n%{http_code}' 2>/dev/null); then
    code="${resp##*$'\n'}"
    # 2xx or 4xx → done (4xx is non-transient; don't burn retries on auth/validation)
    [[ "$code" =~ ^[24] ]] && break
    printf 'clickup.sh: HTTP %s on POST (attempt %d/%d)\n' \
      "$code" "$attempt" "$max_attempts" >&2
  else
    printf 'clickup.sh: curl transport error on POST (attempt %d/%d)\n' \
      "$attempt" "$max_attempts" >&2
  fi
  if (( attempt < max_attempts )); then
    base=${backoffs[$((attempt - 1))]}
    jitter=$(( (RANDOM % (base * 2 / 5 + 1)) - (base / 5) ))
    sleep_time=$(( base + jitter ))
    (( sleep_time < 1 )) && sleep_time=1
    sleep "$sleep_time"
  fi
done

payload="${resp%$'\n'*}"

if [[ ! "$code" =~ ^2 ]]; then
  printf 'clickup.sh: HTTP %s after retries\n%s\nFalling back to DAILY-SUMMARY.md.\n' \
    "${code:-???}" "$payload" >&2
  {
    printf '\n---\n## %s (ClickUp HTTP %s)\n\n%s\n' \
      "$(date -u +'%Y-%m-%dT%H:%M:%SZ')" "${code:-???}" "$msg"
  } >> "${REPO_DIR}/DAILY-SUMMARY.md"
  exit 0
fi

printf 'clickup.sh: posted (HTTP %s)\n' "$code" >&2
