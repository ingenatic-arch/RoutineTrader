---
description: Local-mode Friday weekly review — stats, grade, optional strategy amendment.
---

Run the weekly-review workflow locally. Same steps as `routines/weekly-review.md`:

- **Reads `.env`.** Skip the env-export-check block.
- **Do the key-type sanity check** first.
- Aggregate this week's stats from `memory/TRADE-LOG.md`.
- Benchmark the week's return vs. S&P 500 (Perplexity → WebSearch fallback).
- Write a graded review section at the top of `memory/WEEKLY-REVIEW.md`.
- **If a strategy rule should be amended** based on 2+ weeks of evidence or a
  bad miss, ask the user first (`AskUserQuestion`) with the proposed edit to
  `memory/TRADING-STRATEGY.md` before writing it. Local mode is human-in-loop
  for strategy changes.
- **No auto-commit.** Print the diff and the suggested git command.

Full step list is in `routines/weekly-review.md`.
