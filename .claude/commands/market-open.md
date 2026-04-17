---
description: Local-mode market-open run with interactive confirm before each trade.
---

Run the market-open workflow locally. Same steps as `routines/market-open.md`,
with these differences:

- **Reads `.env`** (wrapper handles it). Skip the env-export-check block.
- **Interactive confirm BEFORE every order placement.** For each approved idea
  from today's RESEARCH-LOG, show the plan (percentages only) and ask
  `Proceed with SYMBOL? [y/N]` via `AskUserQuestion`. Default N.
- **Do the key-type sanity check** first.
- **No auto-commit.** After the run, print the TRADE-LOG diff and the git
  command for the user to run:
  `"Run: git add memory/TRADE-LOG.md && git commit -m 'local: market-open $(date +%Y-%m-%d) (opened: SYM1)' && git push origin main"`

All the guardrails, gates, rate-limit rules, and StopLossRate math stay the
same as in `routines/market-open.md`. Read that file for the full steps.
