---
description: Local-mode pre-market research run (uses .env, commits optional).
---

Run the pre-market workflow locally. Same shape as `routines/pre-market.md`
but reads `.env` instead of process env, and the commit+push at the end is
optional (I'll tell you the git command; you run it if you want).

Before starting:
- Confirm `.env` exists with `ETORO_API_KEY` + `ETORO_USER_KEY` set. If not,
  tell the user to `cp env.template .env` and fill it.

Follow every step in `routines/pre-market.md` (read that file — it's
self-contained), with these local-mode tweaks:

- **Skip** the `IMPORTANT — ENVIRONMENT VARIABLES` export-check block. The
  wrapper handles `.env` loading. If a wrapper errors with `ETORO_*_KEY not
  set`, tell the user to populate `.env`.
- **Do** the key-type sanity check (step 0 of the routine).
- **Do not auto-commit** at the end. Instead, print the RESEARCH-LOG diff and
  say:
  `"Run: git add memory/RESEARCH-LOG.md && git commit -m 'local: pre-market $(date +%Y-%m-%d)' && git push origin main"`
- ClickUp alerts are optional locally — prefer printing to terminal.
