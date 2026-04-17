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
2026-04-17T20:46:26Z | unknown | ok | 📊 Daily summary 2026-04-17 (Day 1) Equity: 100.2% of start / Day P&L: +0.2% / Phase: +0.2% Cash: 100.0% / Positions: 0 / Opens this week: 0/3 Positions: none. Today: opened 0, closed 0, trimmed 0. HOLD held — first operational EOD; no 
2026-04-17T20:46:28Z | daily-summary | ok | EOD snapshot committed; day P&L +0.2%; equity 100.2%
