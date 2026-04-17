---
description: Local-mode EOD summary — computes today's P&L and writes the EOD snapshot.
---

Run the daily-summary workflow locally. Same steps as `routines/daily-summary.md`:

- **Reads `.env`.** Skip the env-export-check block.
- **Do the key-type sanity check** first.
- Compute today's Day P&L from yesterday's `_Internal (reconciliation only)_`
  dollar baseline in `memory/TRADE-LOG.md`.
- Append the EOD snapshot to `memory/TRADE-LOG.md` — same shape as the routine.
- Render a **percentages-only** summary in the terminal (skip ClickUp locally
  unless the user asks for it).
- **No auto-commit** — but remind the user: "The cloud routine commits this
  nightly. If you are running this instead of the routine, `git add
  memory/TRADE-LOG.md && git commit && git push origin main` so tomorrow's
  Day-P&L baseline lands."

Full step list is in `routines/daily-summary.md`.
