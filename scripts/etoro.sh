#!/usr/bin/env bash
# scripts/etoro.sh — eToro Public API v1 wrapper for RoutineTrader agent-portfolio.
#
# Reads ETORO_API_KEY + ETORO_USER_KEY from env. If both are unset and a .env
# file exists at the repo root, sources it (local-mode convenience). Never
# creates or writes .env. Never logs secrets.
#
# Every write call sleeps 3 seconds before returning — eToro's trading-write
# rate limit is 20/min, and the skill enforces ≥3s spacing. 429 backoff
# (15s→30s→60s) is handled by the calling prompt, not this script.
#
# Exit codes: 0 on HTTP 2xx; 1 on !2xx or bad args (except `agent-portfolios`
# which always exits 0 and prints HTTP_CODE=<n> so the caller can distinguish
# 403 (agent-portfolio key, OK) from 200 (main-account key, ABORT).
#
# Usage:
#   pnl                                  # GET /trading/info/real/pnl
#   positions                            # pnl.positions[] filtered to mirrorID=0
#   search SYMBOL                        # resolve instrumentId via exact match
#   rates ID[,ID,...]                    # current rates for one or more ids
#   candles ID INTERVAL COUNT            # historical candles
#   instrument ID                        # instrument metadata
#   agent-portfolios                     # key-type sanity check (expect HTTP 403)
#   open '<json>'                        # POST /market-open-orders/by-amount
#   close POSITION_ID INSTRUMENT_ID      # full close
#   close-partial PID IID UNITS          # partial close via UnitsToDeduct

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_DIR="$(cd "${SCRIPT_DIR}/.." && pwd)"

# Local mode: source .env if present AND required vars not already exported.
if [[ -f "${REPO_DIR}/.env" && ( -z "${ETORO_API_KEY:-}" || -z "${ETORO_USER_KEY:-}" ) ]]; then
  set -a
  # shellcheck disable=SC1091
  source "${REPO_DIR}/.env"
  set +a
fi

ETORO_API_BASE="${ETORO_API_BASE:-https://public-api.etoro.com/api/v1}"

_die() { printf 'etoro.sh: %s\n' "$*" >&2; exit 1; }

# Help works without credentials so users can discover the script before
# filling .env; credential checks are deferred to the first API-calling path.
cmd="${1:-}"
if [[ -z "$cmd" || "$cmd" == "help" || "$cmd" == "-h" || "$cmd" == "--help" ]]; then
  sed -n '2,/^$/p' "${BASH_SOURCE[0]}" | sed 's/^# \{0,1\}//'
  exit 0
fi

[[ -n "${ETORO_API_KEY:-}"  ]] || _die "ETORO_API_KEY not set"
[[ -n "${ETORO_USER_KEY:-}" ]] || _die "ETORO_USER_KEY not set"
command -v curl    >/dev/null 2>&1 || _die "curl not found"
command -v python3 >/dev/null 2>&1 || _die "python3 not found"

_uuid() {
  if command -v uuidgen >/dev/null 2>&1; then
    uuidgen | tr 'A-Z' 'a-z'
  else
    python3 -c 'import uuid;print(uuid.uuid4())'
  fi
}

# _curl METHOD PATH [DATA] → prints "<body>\n<http_code>" (newline-delimited).
#
# On transient failures (curl transport error, or HTTP 5xx from eToro /
# its edge — "DNS cache overflow" 503s happen intermittently on the Claude
# Routines egress path), retries up to 3 times with 15s → 30s → 60s backoff.
# 429 is NOT retried here — the calling prompt owns write-rate backoff so it
# can re-sequence the batch. 4xx is not transient — returned immediately.
_curl() {
  local method="$1" path="$2" data="${3:-}"
  local url="${ETORO_API_BASE}${path}"
  local args=(
    -sS
    -X "$method"
    -H "x-api-key: ${ETORO_API_KEY}"
    -H "x-user-key: ${ETORO_USER_KEY}"
    -H "x-request-id: $(_uuid)"
    -H "Accept: application/json"
    -w $'\n%{http_code}'
  )
  if [[ -n "$data" ]]; then
    args+=(-H "Content-Type: application/json" --data "$data")
  fi

  local attempt out code backoff
  for attempt in 1 2 3 4; do
    if out=$(curl "${args[@]}" "$url" 2>/dev/null); then
      code="${out##*$'\n'}"
      if [[ ! "$code" =~ ^5 ]]; then
        printf '%s' "$out"
        return 0
      fi
      printf 'etoro.sh: HTTP %s on %s %s (attempt %d/4)\n' "$code" "$method" "$path" "$attempt" >&2
    else
      printf 'etoro.sh: curl transport error on %s %s (attempt %d/4)\n' "$method" "$path" "$attempt" >&2
    fi
    case "$attempt" in
      1) backoff=15 ;;
      2) backoff=30 ;;
      3) backoff=60 ;;
      *) backoff=0  ;;
    esac
    [[ $backoff -gt 0 ]] && sleep "$backoff"
  done
  # All 4 attempts failed — return last response (caller inspects code).
  if [[ -n "${out:-}" ]]; then
    printf '%s' "$out"
    return 0
  fi
  return 1
}

# _read METHOD PATH [DATA] — print body on stdout, exit nonzero on !2xx.
_read() {
  local out code body
  out=$(_curl "$@") || _die "curl transport error"
  code="${out##*$'\n'}"
  body="${out%$'\n'*}"
  printf '%s\n' "$body"
  if [[ ! "$code" =~ ^2 ]]; then
    printf 'etoro.sh: HTTP %s on %s %s\n' "$code" "$1" "$2" >&2
    exit 1
  fi
}

# _write METHOD PATH DATA — same as _read + 3s trailing sleep.
_write() {
  _read "$@"
  sleep 3
}

shift || true

case "$cmd" in
  pnl)
    _read GET "/trading/info/real/pnl"
    ;;
  positions)
    body=$(_read GET "/trading/info/real/pnl")
    printf '%s\n' "$body" | python3 -c '
import json, sys
d = json.load(sys.stdin)
print(json.dumps([p for p in d.get("positions", []) if p.get("mirrorID", 0) == 0], indent=2))
'
    ;;
  search)
    sym="${1:-}"
    [[ -n "$sym" ]] || _die "search: missing SYMBOL"
    _read GET "/market-data/search?internalSymbolFull=${sym}"
    ;;
  rates)
    ids="${1:-}"
    [[ -n "$ids" ]] || _die "rates: missing instrument id(s)"
    _read GET "/market-data/instruments/rates?ids=${ids}"
    ;;
  candles)
    id="${1:-}"; interval="${2:-}"; count="${3:-}"
    [[ -n "$id" && -n "$interval" && -n "$count" ]] \
      || _die "candles: need ID INTERVAL COUNT"
    _read GET "/market-data/instruments/${id}/history/candles/${interval}/${count}"
    ;;
  instrument)
    id="${1:-}"
    [[ -n "$id" ]] || _die "instrument: missing ID"
    _read GET "/market-data/instruments?instrumentIds=${id}"
    ;;
  agent-portfolios)
    # Sanity check. HTTP 403 = agent-portfolio key (OK). HTTP 200 = main-account
    # key (ABORT — wrong scope for trading). We do NOT exit nonzero on 4xx here.
    out=$(_curl GET "/agent-portfolios")
    code="${out##*$'\n'}"
    body="${out%$'\n'*}"
    printf '%s\n'  "$body"
    printf 'HTTP_CODE=%s\n' "$code"
    ;;
  open)
    data="${1:-}"
    [[ -n "$data" ]] || _die "open: missing JSON body"
    _write POST "/trading/execution/market-open-orders/by-amount" "$data"
    ;;
  close)
    pid="${1:-}"; iid="${2:-}"
    [[ -n "$pid" && -n "$iid" ]] || _die "close: need POSITION_ID INSTRUMENT_ID"
    _write POST "/trading/execution/market-close-orders/positions/${pid}" \
      "$(printf '{"InstrumentID":%s}' "$iid")"
    ;;
  close-partial)
    pid="${1:-}"; iid="${2:-}"; units="${3:-}"
    [[ -n "$pid" && -n "$iid" && -n "$units" ]] \
      || _die "close-partial: need POSITION_ID INSTRUMENT_ID UNITS"
    _write POST "/trading/execution/market-close-orders/positions/${pid}" \
      "$(printf '{"InstrumentID":%s,"UnitsToDeduct":%s}' "$iid" "$units")"
    ;;
  *)
    _die "unknown subcommand: '${cmd}'. Run: bash scripts/etoro.sh help"
    ;;
esac
