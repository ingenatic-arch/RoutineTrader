#!/usr/bin/env bash
# scripts/perplexity.sh — Perplexity API wrapper for pre-market research.
#
# Usage: bash scripts/perplexity.sh "your query here"
#
# Reads PERPLEXITY_API_KEY (required) and PERPLEXITY_MODEL (default: sonar).
# Sources .env locally if env vars not already set.
#
# Exit codes:
#   0 — success, answer printed to stdout
#   2 — bad args (empty query)
#   3 — PERPLEXITY_API_KEY not set (caller should fall back to WebSearch)
#   1 — API error (body printed to stderr)

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_DIR="$(cd "${SCRIPT_DIR}/.." && pwd)"

if [[ -f "${REPO_DIR}/.env" && -z "${PERPLEXITY_API_KEY:-}" ]]; then
  set -a
  # shellcheck disable=SC1091
  source "${REPO_DIR}/.env"
  set +a
fi

query="${1:-}"
if [[ -z "$query" ]]; then
  printf 'perplexity.sh: missing query\nusage: perplexity.sh "your question"\n' >&2
  exit 2
fi

if [[ -z "${PERPLEXITY_API_KEY:-}" ]]; then
  printf 'perplexity.sh: PERPLEXITY_API_KEY not set — fall back to WebSearch\n' >&2
  exit 3
fi

MODEL="${PERPLEXITY_MODEL:-sonar}"

body=$(python3 -c '
import json, sys
q = sys.argv[1]; m = sys.argv[2]
print(json.dumps({
  "model": m,
  "messages": [
    {"role": "system", "content": "Be concise. Cite sources inline."},
    {"role": "user",   "content": q}
  ]
}))
' "$query" "$MODEL")

# Retry policy for transient 5xx / transport errors (matches etoro.sh):
# 6 attempts, backoffs 15 / 30 / 60 / 90 / 180 with ±20% jitter (~8 min
# worst-case, fits inside Bash 10-min max so the routine doesn't switch
# to background/Monitor). 4xx is non-transient — returned immediately.
backoffs=(15 30 60 90 180)
max_attempts=$(( ${#backoffs[@]} + 1 ))
resp=""
code=""
for (( attempt=1; attempt<=max_attempts; attempt++ )); do
  if resp=$(curl -sS -X POST "https://api.perplexity.ai/chat/completions" \
      -H "Authorization: Bearer ${PERPLEXITY_API_KEY}" \
      -H "Content-Type: application/json" \
      -H "Accept: application/json" \
      --data "$body" \
      -w $'\n%{http_code}' 2>/dev/null); then
    code="${resp##*$'\n'}"
    # 2xx or 4xx → done (4xx is non-transient; don't burn retries on auth/validation)
    [[ "$code" =~ ^[24] ]] && break
    printf 'perplexity.sh: HTTP %s on POST (attempt %d/%d)\n' \
      "$code" "$attempt" "$max_attempts" >&2
  else
    printf 'perplexity.sh: curl transport error on POST (attempt %d/%d)\n' \
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

if [[ -z "$resp" ]]; then
  printf 'perplexity.sh: curl transport error after retries\n' >&2
  exit 1
fi

payload="${resp%$'\n'*}"

if [[ ! "$code" =~ ^2 ]]; then
  printf 'perplexity.sh: HTTP %s after retries\n%s\n' "${code:-???}" "$payload" >&2
  exit 1
fi

printf '%s\n' "$payload" | python3 -c '
import json, sys
d = json.load(sys.stdin)
try:
    print(d["choices"][0]["message"]["content"])
except (KeyError, IndexError):
    print(json.dumps(d, indent=2))
    sys.exit(1)
'
