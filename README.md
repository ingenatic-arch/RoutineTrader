# RoutineTrader

Autonomous eToro agent-portfolio trading bot, driven by five Claude Code cloud
routines firing against this repo on a weekday cron. $10k virtual balance
(eToro platform constant), user real investment $1,000 (mirrors at 10%
proportional sizing). All user-facing numbers are **percentages of equity**.

Blueprint: Nate Herk's "Opus 4.7 Trading Bot" — ported from Alpaca to eToro's
Agent-Portfolio REST API.

## Quick start

### 0. Prerequisites
- `bash`, `curl`, `python3` (for UUID + JSON shaping in the wrapper).
- `gh` CLI (for one-time GitHub repo setup).
- An eToro **agent-portfolio** already created against your account, with the
  one-time token you captured at creation. This is NOT your main-account key.

### 1. Local smoke test
```bash
cp env.template .env
# Edit .env: set ETORO_USER_KEY (your agent-portfolio token) + optional Perplexity/ClickUp.
chmod +x scripts/*.sh

bash scripts/etoro.sh agent-portfolios
# Expect the last line to be:  HTTP_CODE=403
# If you see HTTP_CODE=200, the token is a MAIN-ACCOUNT key — STOP and replace it.
# Trading with a main-account key moves real money outside the agent-portfolio scope.

bash scripts/etoro.sh pnl
# → JSON with credit, positions, orders, mirrors, etc.
```

In the terminal, open this repo with Claude Code and try:
```
/portfolio           # read-only snapshot (percentages only)
/trade AAPL 15 buy   # dry-run gate; asks for y/N before writing
```

### 2. Push to GitHub
```bash
gh repo create RoutineTrader --private --source . --push
```
Then install the Claude GitHub App on the new repo when the Routines UI prompts you.

### 3. Create the five routines
In the Claude Routines UI, for EACH of the five files under `routines/`:
1. New routine → paste the file's contents as the prompt (verbatim).
2. Cron: as listed in the table below (America/New_York).
3. Env vars: set per the table in the next section.
4. **Toggle "Allow unrestricted branch pushes" ON** — otherwise
   `git push origin main` silently fails and no state persists.

| File                          | Cron (America/New_York) |
|-------------------------------|-------------------------|
| `routines/pre-market.md`      | `0 8 * * 1-5`           |
| `routines/market-open.md`     | `35 9 * * 1-5`          |
| `routines/midday.md`          | `30 12 * * 1-5`         |
| `routines/daily-summary.md`   | `15 16 * * 1-5`         |
| `routines/weekly-review.md`   | `30 16 * * 5`           |

### 4. Smoke-test the cloud routine
- Hit **Run Now** on `pre-market` before the first scheduled fire.
- Watch logs: env-var check passes, pnl fetches, research pulled, a new commit
  on `memory/RESEARCH-LOG.md` appears on `main`.
- `git pull` locally to confirm.

## Environment variables

| Var                     | Where             | Required for                 | Notes |
|-------------------------|-------------------|------------------------------|-------|
| `ETORO_API_KEY`         | all 5 routines    | every eToro call             | Constant public key (see `env.template`) |
| `ETORO_USER_KEY`        | all 5 routines    | every eToro call             | **Agent-portfolio token** — HTTP 403 on `/agent-portfolios` |
| `ETORO_API_BASE`        | optional          | override for staging         | Default `https://public-api.etoro.com/api/v1` |
| `PERPLEXITY_API_KEY`    | pre-market, midday, weekly-review | research; fallback to WebSearch if unset | — |
| `PERPLEXITY_MODEL`      | optional          | —                            | Default `sonar` |
| `CLICKUP_API_KEY`       | all 5 routines    | notifications; local-falls-back if unset | — |
| `CLICKUP_WORKSPACE_ID`  | all 5 routines    | —                            | Numeric workspace ID |
| `CLICKUP_CHANNEL_ID`    | all 5 routines    | —                            | Format `4-XXXXXXX-X` |

ClickUp: all three must be set together; if any missing, messages append to a
local `DAILY-SUMMARY.md` (gitignored) instead of crashing the routine.

Perplexity: if the API key is unset, `perplexity.sh` exits 3 and the prompt
falls back to native `WebSearch` — no hard failure.

## Architecture

- **Git is the only memory.** Every routine reads the markdown files under
  `memory/`, does its work, and commits + pushes before exiting. No
  `memory/` change is persisted unless pushed.
- **Scripts are the only outside world.** All eToro / Perplexity / ClickUp
  interaction is through `scripts/*.sh`. This keeps prompts short and the
  surface easy to audit.
- **Prompts are terse + self-contained.** Each routine file is a complete
  prompt; paste verbatim, no edits needed.

See `memory/PROJECT-CONTEXT.md` for the fuller architectural context and
`CLAUDE.md` for the rules auto-loaded every session.

## Safety posture

- Leverage = 1 always. Longs only. StopLossRate set at open (10% below entry ask).
- Max 5–6 positions, max 20% per position, max 50% per asset class,
  max 3 new opens per week, 15–25% cash buffer.
- Pre-buy gate enforced in the prompt path before every open order.
- No trade is placed without a documented catalyst in today's RESEARCH-LOG.
- Key-type sanity check on every run — main-account token aborts the routine.

## Known v1 limitations

- **No trailing-stop tightening.** eToro has no modify-position endpoint; PDF's
  "trail 7% at +15%, 5% at +20%" rule is out of scope. Revisit via
  close-and-reopen if weekly review shows winners giving back gains.
- **No short selling.** Longs only in v1. Enable by adding `IsBuy: false` to
  `market-open.md` and opting in via `TRADING-STRATEGY.md`.
- **Crypto is 24/7 but routines are US-market-aligned.** If crypto exposure
  grows, add a weekend midday run.

## Files

```
CLAUDE.md                       # loaded every session: rules + wrapper usage
README.md                       # this file
env.template                    # local .env template (gitignored)
.gitignore
.claude/commands/
  portfolio.md                  # read-only snapshot
  trade.md                      # manual single-trade helper with gate + confirm
  pre-market.md                 # local-mode mirrors of the 5 routines
  market-open.md
  midday.md
  daily-summary.md
  weekly-review.md
routines/
  README.md                     # cloud routine quickstart
  pre-market.md                 # cron: 0 8 * * 1-5   America/New_York
  market-open.md                # cron: 35 9 * * 1-5
  midday.md                     # cron: 30 12 * * 1-5
  daily-summary.md              # cron: 15 16 * * 1-5
  weekly-review.md              # cron: 30 16 * * 5
scripts/
  etoro.sh                      # eToro API wrapper
  perplexity.sh                 # research wrapper
  clickup.sh                    # notification wrapper
memory/
  TRADING-STRATEGY.md           # rulebook (edit to tune strategy)
  TRADE-LOG.md                  # trades + EOD snapshots (append-only)
  RESEARCH-LOG.md               # daily pre-market research
  WEEKLY-REVIEW.md              # Friday recaps
  PROJECT-CONTEXT.md            # mission + platform notes
eToroSKILL.md                                         # reference (untouched)
etoro-rest-api-agent-portfolios-claude-context.md     # reference (untouched)
Opus 4.7 Trading Bot — Setup Guide.pdf                # reference (untouched)
```
