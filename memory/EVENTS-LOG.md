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
2026-04-20T13:39:10Z | market-open | ok | Opened: none; positions=0; reason=research HOLD (no catalyst today)
2026-04-20T20:29:23Z | unknown | warn | ⚠️ daily-summary: key-check inconclusive — retrying next cron.
2026-04-20T20:29:49Z | daily-summary | abort | key-check inconclusive (HTTP 503 x6); retrying next cron
2026-04-21T13:21:05Z | pre-market | ok | Research committed; decision=HOLD; ideas=0; screened=6 (XLP/XLU/XLE/BAC-MS/QBTS/crypto) all rejected — defensive rotation cooling + catalyst direction unknown pre-Retail-Sales
2026-04-21T13:37:28Z | market-open | ok | Opened: none; HOLD per RESEARCH-LOG (all 6 candidates rejected); positions=0
2026-04-21T15:31:43Z | midday | ok | No-op; positions=0; no cuts/trims/thesis-exits (account flat)
2026-04-21T20:30:26Z | unknown | ok | 📊 Daily summary 2026-04-21 (Day 2) Equity: 100.2% of start / Day P&L: +0.2% / Phase: +0.2% Cash: 100.0% / Positions: 0 / Opens this week: 0/5 Positions: none — account flat. Today: opened 0, closed 0, trimmed 0. Pre-market HOLD (6 cand
2026-04-21T20:30:47Z | daily-summary | ok | EOD snapshot committed; day P&L +0.2%; equity 100.2%; positions 0; opens-this-week 0/5
2026-04-22T13:09:10Z | unknown | warn | ⚠️ pre-market: key-check inconclusive (503) — retrying next cron.
2026-04-22T13:15:05Z | pre-market | abort | key-check inconclusive (HTTP 503); ClickUp also 503 / fell back to DAILY-SUMMARY; no research written
2026-04-22T13:37:35Z | unknown | warn | ⚠️ market-open skipped: no RESEARCH-LOG entry for 2026-04-22 (pre-market aborted on 503 earlier)
2026-04-22T13:37:41Z | market-open | abort | No RESEARCH-LOG entry for 2026-04-22 (pre-market aborted on 503); no trades placed
2026-04-22T13:43:39Z | pre-market | ok | Research committed; decision=OPEN 1 (BTC 15%); ideas=1 A-grade / 5 screened (late — market-open already aborted 13:37Z; trade will not auto-fire today)
2026-04-22T13:56:25Z | market-open | ok | Opened: BTC; positions=1
2026-04-22T13:56:36Z | unknown | ok | Market-open 2026-04-22 — opened 1 position. • BTC 15% (stop −10%, target +20%, R:R 2.0:1) Post-fill: equity 100.2% of start / cash 85.0% / positions 1.
2026-04-22T15:41:09Z | midday | ok | Closed: none; trimmed: none; positions=1 (BTC +0.7%)
2026-04-22T20:27:55Z | unknown | ok | 📊 Daily summary 2026-04-22 (Day 3) Equity: 100.0% of start / Day P&L: −0.2% / Phase: +0.0% Cash: 85.0% / Positions: 1 / Opens this week: 1/5 Positions: • BTC (crypto) 15% / −0.2% / stop −10% Today: opened 1 (BTC), closed 0, trimm
2026-04-22T20:27:58Z | daily-summary | ok | EOD snapshot committed; day P&L -0.2%; equity 100.0%
2026-04-23T13:36:08Z | unknown | warn | ⚠️ pre-market: key-check inconclusive (503) — retrying next cron.
2026-04-23T13:37:49Z | unknown | warn | ⚠️ market-open skipped: no RESEARCH-LOG entry for 2026-04-23
2026-04-23T13:37:57Z | market-open | abort | No RESEARCH-LOG entry for 2026-04-23; no trades placed
2026-04-23T13:39:20Z | pre-market | abort | key-check inconclusive (HTTP 503) after 6 retries; alerted ClickUp; no research written
2026-04-23T14:57:08Z | pre-market | ok | Research committed; decision=HOLD; ideas=0 (BTC held intact /-1.0% unrealized); flagged oil narrative conflict
2026-04-23T14:59:25Z | market-open | ok | Opened: none; HOLD per RESEARCH-LOG (6 candidates screened/rejected: ETH/XLK-QQQ/BAC-MS/TSLA/XLE-XOM/biotech); positions=1 (BTC intact)
2026-04-23T15:39:14Z | midday | ok | No-op: 1 position (BTC -0.27%); crypto 15%; no rule trips, thesis intact
2026-04-23T20:28:33Z | unknown | ok | 📊 Daily summary 2026-04-23 (Day 4) Equity: 99.9% of start / Day P&L: −0.2% / Phase: −0.1% Cash: 85.1% / Positions: 1 / Opens this week: 1/5 Positions: • BTC (crypto) 14.9% / −1.2% / stop −10% Today: opened 0, closed 0, trimmed 
2026-04-23T20:28:42Z | daily-summary | ok | EOD snapshot committed; day P&L -0.2%; equity 99.9%
2026-04-24T13:20:09Z | pre-market | ok | Research committed; decision=HOLD; ideas=0; BTC thesis intact unrealized -0.49%
2026-04-24T13:37:17Z | market-open | ok | Opened: none; positions=1 (BTC held); research decision=HOLD
2026-04-24T15:39:14Z | midday | ok | Closed: none; trimmed: none; positions=1
2026-04-24T20:27:47Z | unknown | ok | 📊 Daily summary 2026-04-24 (Day 5) Equity: 99.8% of start / Day P&L: −0.1% / Phase: −0.2% Cash: 85.2% / Positions: 1 / Opens this week: 1/5 Positions: • BTC (crypto) 14.8% / −1.6% / stop −10% Today: opened 0, closed 0, trimmed 
2026-04-24T20:27:53Z | daily-summary | ok | EOD snapshot committed; day P&L -0.1%; equity 99.8%; positions 1; opens-this-week 1/5
2026-04-24T20:40:40Z | unknown | ok | 📅 Weekly review — week of 2026-04-20 → 2026-04-24 Return: −0.4% / S&P 500: +0.5% / Alpha: −0.9% / Phase: −0.2% 60/40 proxy: +1.5% / Alpha vs 60/40: −1.9% Grade: B Stats: 1 opened / 0 closed / Win rate n/a / Best n/a / Worst n
2026-04-24T20:40:47Z | weekly-review | ok | Week committed; grade=B; return=-0.4%; alpha=-0.9% vs SPX; alpha=-1.9% vs 60/40; 1 routine open (BTC); 0 closes
2026-04-27T13:14:20Z | pre-market | ok | Research committed; decision=OPEN 1 (XLE ~10%); ideas=1
