---
description: Local-mode midday scan with interactive confirm before each close.
---

Run the midday workflow locally. Same steps as `routines/midday.md`, with:

- **Reads `.env`.** Skip the env-export-check block.
- **Interactive confirm BEFORE every close / trim.** Show the proposed action
  (symbol, reason, post-action class exposure) and ask `Proceed? [y/N]`.
  Default N.
- **Do the key-type sanity check** first.
- **After any close, still `sleep 60` before re-reading pnl.** The 60s PnL
  cache is a platform fact, local mode doesn't bypass it.
- **No auto-commit.** Print the diff and the git command for the user to run.

Full step list is in `routines/midday.md`. Read that file for the details.
