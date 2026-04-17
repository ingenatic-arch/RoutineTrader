# Cloud routines — quickstart

Each `*.md` file in this directory is a self-contained Claude Code prompt you
paste verbatim into the Claude Routines UI. No edits required per routine —
all tuning lives in `memory/TRADING-STRATEGY.md`.

## Prerequisites (one-time)

1. Push this repo to GitHub (private):
   ```bash
   gh repo create RoutineTrader --private --source . --push
   ```
2. Install the **Claude GitHub App** on the repo (the Routines UI will prompt you).
3. Have your **agent-portfolio token** (not main-account) handy — it's the one
   eToro showed you once when you created the agent-portfolio.

## Per-routine setup

For each file in this directory, create ONE routine in the Claude UI:

| File                     | Cron (America/New_York)     | Notes                                |
|--------------------------|-----------------------------|--------------------------------------|
| `pre-market.md`          | `0 8 * * 1-5`               | No trades; writes RESEARCH-LOG.md    |
| `market-open.md`         | `35 9 * * 1-5`              | ONLY routine that OPENS positions    |
| `midday.md`              | `30 12 * * 1-5`             | Cuts losers, rebalances classes      |
| `daily-summary.md`       | `15 16 * * 1-5`             | EOD snapshot — commit is mandatory   |
| `weekly-review.md`       | `30 16 * * 5`               | Fridays only; graded recap           |

Configuration for each routine:
- **Prompt**: paste the contents of the corresponding `.md` file verbatim.
- **Schedule**: cron expression from the table above; timezone `America/New_York`.
- **Repo**: this repo, branch `main`.
- **Environment variables** (all five routines need these):

  | Var                     | Value / Source                                   |
  |-------------------------|--------------------------------------------------|
  | `ETORO_API_KEY`         | Copy from `env.template` — constant public key   |
  | `ETORO_USER_KEY`        | **Your agent-portfolio token** (one-time secret) |
  | `PERPLEXITY_API_KEY`    | Your Perplexity key (research; optional — falls back to WebSearch) |
  | `PERPLEXITY_MODEL`      | `sonar` (optional)                               |
  | `CLICKUP_API_KEY`       | Your ClickUp personal token                      |
  | `CLICKUP_WORKSPACE_ID`  | Numeric workspace ID                             |
  | `CLICKUP_CHANNEL_ID`    | Format `4-XXXXXXX-X` (Chat v3 channel)           |

- **"Allow unrestricted branch pushes"**: **ON**. If this is off, `git push
  origin main` silently fails and no memory persists. This is the #1 first-run
  gotcha.

## Smoke test

After creating the `pre-market` routine:
1. Hit **Run Now** once.
2. Watch the run log:
   - env-var check passes (all vars `set`, not `MISSING`)
   - `agent-portfolios` sanity check returns `HTTP_CODE=403`
   - `pnl` returns JSON
   - A new commit on `main`: `routine: pre-market YYYY-MM-DD`
3. `git pull` locally and confirm the new entry in `memory/RESEARCH-LOG.md`.

Only after pre-market runs clean, create the other four.

## Failure modes (what each does)

- **ETORO_API_KEY or ETORO_USER_KEY missing** → ClickUp-alert + exit.
- **Key-type sanity fails (HTTP 200 on `/agent-portfolios`)** → ClickUp-alert,
  no trades, exit. The token is main-account scope — fix in routine config.
- **HTTP 429** → 15s → 30s → 60s backoff per write; if 4th attempt still fails,
  skip that order and log.
- **`git push` fails** → `git pull --rebase origin main` then push. Never
  force-push.
- **No RESEARCH-LOG entry for today** (`market-open` only) → skip trading, alert.

## Tuning

Edit `memory/TRADING-STRATEGY.md` and commit. All routines re-read the strategy
every run — changes take effect on the next routine fire. The `weekly-review`
routine may also amend this file with its own audit trail.
