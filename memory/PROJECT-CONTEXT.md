# Project Context — RoutineTrader

## Mission
An autonomous trading bot managing an **eToro agent-portfolio** on a fixed
**$10,000 virtual balance** (user real investment $1,000, 10% proportional
mirror). Executes five Claude Code cloud routines on a weekday cron against
this GitHub repo. Git is the only memory.

Blueprint: Nate Herk's "Opus 4.7 Trading Bot" (Alpaca), ported to eToro's
Agent-Portfolio REST API.

## Architecture
- **Routines** (cloud, cron-scheduled, stateless):
  - `pre-market`    — `0 8 * * 1-5`   America/New_York
  - `market-open`   — `35 9 * * 1-5`  America/New_York (5 min after open)
  - `midday`        — `30 12 * * 1-5` America/New_York
  - `daily-summary` — `15 16 * * 1-5` America/New_York (15 min after close)
  - `weekly-review` — `30 16 * * 5`   America/New_York (Fridays)
- **Memory** (git-committed markdown under `memory/`):
  - `TRADING-STRATEGY.md` — the rulebook (this is the brain's rule set)
  - `TRADE-LOG.md` — every trade + every EOD snapshot
  - `RESEARCH-LOG.md` — pre-market research (read next morning for exit logic)
  - `WEEKLY-REVIEW.md` — Friday recap + strategy adjustments
  - `PROJECT-CONTEXT.md` — this file
- **Scripts** (the only way the agent touches the outside world):
  - `scripts/etoro.sh` — eToro Public API wrapper
  - `scripts/perplexity.sh` — research (WebSearch fallback if key unset)
  - `scripts/clickup.sh` — notifications (local `DAILY-SUMMARY.md` fallback if vars unset)
- **Slash commands** (local Claude Code, `.claude/commands/`):
  - Ad-hoc snapshot + manual trade helpers; local mirrors of the 5 routines.

## Platform notes (eToro vs. Alpaca)
- **Auth**: `x-api-key` (constant public) + `x-user-key` (agent-portfolio token)
  + fresh `x-request-id` UUIDv4 per request.
- **Open by amount**: USD, not shares. `Amount` field is dollars (virtual scale).
- **Close by positionID**: not symbol — resolve from `/trading/info/real/pnl.positions[]`.
- **Instrument resolution**: MUST hit `/market-data/search?internalSymbolFull=<SYM>`
  per call. Never hardcode IDs — they can be reassigned.
- **StopLossRate at open**: eToro has NO modify-position endpoint, so the stop
  must be set correctly at entry. No trailing-stop tightening in v1.
- **Rate limits**: 60 RPM reads, 20 RPM writes, ≥3s spacing between writes,
  15s→30s→60s backoff on 429.
- **PnL cache**: 60 seconds. After any close, sleep 60 before next pnl call.
- **Key-type check**: `GET /agent-portfolios` returns **403** with an
  agent-portfolio key; **200** means main-account key — ABORT.

## Conventions
- **User-facing numbers = percentages of equity**, never dollars.
- **Persistence = git**: every routine ends with `git add memory/… && git commit && git push origin main`.
  No commit → the next run will never see today's state.
- **Commit messages**: `routine: pre-market YYYY-MM-DD`,
  `routine: market-open YYYY-MM-DD (opened AAPL, MSFT)`, etc. One-line summary.
- **Failure mode**: if a required env var is missing, ClickUp-alert (or fall back
  to local) and exit cleanly. Never create a .env at runtime.
- **No dry-run flag**: cloud routines always execute. For dry-run, use the local
  `/trade` slash command, which has an interactive confirm gate.

## Key files (for first-read orientation)
- `CLAUDE.md` — loaded every session; persona, rules, wrapper usage.
- `memory/TRADING-STRATEGY.md` — the hard guardrails. Read before every trade decision.
- `memory/TRADE-LOG.md` — running state + yesterday's equity baseline.
- `memory/RESEARCH-LOG.md` — today's pre-market thesis (required before any open).
- `scripts/etoro.sh` — every eToro interaction goes through here.
- `eToroSKILL.md` (repo root, untouched reference) — canonical trading-flow playbook.
- `etoro-rest-api-agent-portfolios-claude-context.md` (repo root, untouched reference) — REST endpoint reference.
