# Events Log

Structured, machine-readable event stream for the dashboard. Append-only.
One event per line, pipe-delimited, in this exact format:

```
<ISO8601 UTC> | <routine-name> | <status> | <message>
```

Status is one of `ok`, `warn`, `alert`, `abort`.

Routines append here before their final `git commit`. `scripts/clickup.sh`
also mirrors every ClickUp notification here as a defence so observability
doesn't depend on the ClickUp side-channel.

Keep messages on a single line and free of the `|` character (use `/` or `—`).
Percentages only — no dollar references.

<!-- Events below; newest appended at the bottom. Do not edit historic lines. -->
2026-04-17T00:00:00Z | system | ok | events-log initialized
2026-04-17T20:47:48Z | unknown | ok | 📅 Weekly review — week of 2026-04-13 → 2026-04-17 Return: +0.2% / S&P 500: +1.1% / Alpha: −0.9% / Phase: +0.2% 60/40 proxy: +1.5% / Alpha vs 60/40: −1.3% Grade: B Stats: 0 opened / 0 closed (via routines) / Win rate n/a / No rout
2026-04-17T20:47:55Z | weekly-review | ok | Week committed; grade=B; return=+0.2%; alpha=-0.9% vs SPX; alpha=-1.3% vs 60/40; 0 routine trades
2026-04-20T13:24:48Z | pre-market | ok | Research committed; decision=HOLD; ideas=0; watchlist=XLP/XLU/BAC/MS
