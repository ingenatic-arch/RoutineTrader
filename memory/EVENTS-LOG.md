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
2026-04-27T13:42:19Z | unknown | ok | Market-open 2026-04-27 — opened 1 position. • XLE 10% (stop −10%, target +20%, R:R 2.0:1) Post-fill: equity 99.9% of start / cash 75.1% / positions 2.
2026-04-27T13:42:23Z | market-open | ok | Opened: XLE; positions=2
2026-04-27T13:43:43Z | market-open | ok | Duplicate-run no-op: today's XLE was already filled by 13:42:19Z cron run (commit 595a564); detected pos 3417170896 in pnl, no new orders placed; positions=2
2026-04-27T15:45:03Z | midday | ok | Closed: none; trimmed: none; positions=2 (XLE -1.2%, BTC -2.2%); thesis intact
2026-04-27T20:26:53Z | unknown | ok | 📊 Daily summary 2026-04-27 (Day 6) Equity: 99.6% of start / Day P&L: −0.2% / Phase: −0.4% Cash: 75.3% / Positions: 2 / Opens this week: 1/5 Positions: • XLE (etf) 9.9% / −1.3% / stop −10% • BTC (crypto) 14.8% / −2.3% / stop
2026-04-27T20:26:55Z | daily-summary | ok | EOD snapshot committed; day P&L -0.2%; equity 99.6%
2026-04-28T13:21:50Z | pre-market | ok | Research committed; decision=HOLD; ideas=0 (FOMC eve); held BTC -3.3% / XLE -1.3% theses intact
2026-04-28T13:39:13Z | market-open | ok | Opened: none (research HOLD pre-FOMC); positions=2
2026-04-28T15:38:47Z | midday | ok | Closed: none; trimmed: none; positions=2 (XLE +0.9%, BTC -3.7%); thesis intact pre-FOMC
2026-04-28T20:27:18Z | unknown | ok | 📊 Daily summary 2026-04-28 (Day 7) Equity: 99.6% of start / Day P&L: +0.0% / Phase: −0.4% Cash: 75.3% / Positions: 2 / Opens this week: 1/5 Positions: • XLE (etf) 10.1% / +0.3% / stop −10% • BTC (crypto) 14.6% / −3.0% / stop �
2026-04-28T20:27:23Z | daily-summary | ok | EOD snapshot committed; day P&L +0.0%; equity 99.6%
2026-04-29T13:25:19Z | pre-market | ok | Research committed; decision=HOLD; ideas=0; FOMC day (14:00 ET); XLE +0.3% / BTC -2.1% both intact
2026-04-29T13:39:40Z | market-open | ok | Opened: none (research HOLD pre-FOMC); positions=2
2026-04-29T15:39:49Z | midday | ok | Closed: none; trimmed: none; positions=2 (XLE +1.6%, BTC -3.3%); cash=75.2%; no rule trips, theses intact
2026-04-29T20:27:43Z | unknown | ok | 📊 Daily summary 2026-04-29 (Day 8) Equity: 99.7% of start / Day P&L: +0.1% / Phase: −0.3% Cash: 75.2% / Positions: 2 / Opens this week: 1/5 Positions: • XLE (etf) 10.3% / +2.6% / stop −10% • BTC (crypto) 14.5% / −4.0% / stop �
2026-04-29T20:27:48Z | daily-summary | ok | EOD snapshot committed; day P&L +0.1%; equity 99.7%
2026-04-30T13:10:09Z | pre-market | ok | Research committed; decision=HOLD; ideas=0 (post-FOMC oil-shock tape); 7 candidates screened (XOM/CVX/USO/XLE-add/GLD/ETH/XLK) all rejected — energy entries late after WTI +7% / Friday XOM-CVX earnings binary; BTC -3.1% / XLE +2.6% theses intact
2026-04-30T13:39:12Z | market-open | ok | Opened: none; positions=2 (BTC, XLE); decision HOLD per RESEARCH-LOG
2026-04-30T13:46:31Z | pre-market | ok | Duplicate invocation noop / today's pre-market already ran 13:10Z (decision=HOLD, ideas=0) / RESEARCH-LOG intact / market-open at 13:39Z already consumed it / positions=2 (XLE +2.4% / BTC -2.9%) theses intact
2026-04-30T15:38:30Z | midday | ok | no-op; XLE +3.75% (thesis intact), BTC -2.89% (thesis intact); positions=2; cash=75.0%
2026-04-30T20:28:38Z | unknown | ok | 📊 Daily summary 2026-04-30 (Day 9) Equity: 100.0% of start / Day P&L: +0.3% / Phase: −0.0% Cash: 75.0% / Positions: 2 / Opens this week: 1/5 Positions: • XLE (etf) 10.4% / +3.7% / stop −10% • BTC (crypto) 14.6% / −3.0% / stop �
2026-04-30T20:28:43Z | daily-summary | ok | EOD snapshot committed; day P&L +0.3%; equity 100.0%; positions 2; opens-this-week 1/5
2026-05-01T13:24:10Z | pre-market | ok | Research committed; decision=HOLD; ideas=0; XOM/CVX earnings + ISM + possible NFP today; XLE +3.7% / BTC -0.6% theses intact
2026-05-01T13:45:45Z | market-open | ok | Opened: none; positions=2 (BTC, XLE); decision HOLD — XLE conditional add gated >$60.00 not met (live ask $59.46); BTC -0.7%, XLE +3.3% theses intact
2026-05-01T15:34:22Z | midday | ok | no-op; BTC -0.3% (thesis intact), XLE +2.2% (thesis intact, off intraday +3.3% on WTI -3% pullback / XOM-CVX earnings binary); positions=2; cash=74.9%; class crypto=15.0% etf=10.2%
2026-05-01T20:29:30Z | unknown | ok | 📊 Daily summary 2026-05-01 (Day 10) Equity: 100.2% of start / Day P&L: +0.2% / Phase: +0.2% Cash: 74.9% / Positions: 2 / Opens this week: 1/5 Positions: • XLE (etf) 10.2% / +2.2% / stop −10% • BTC (crypto) 14.9% / −0.8% / stop �
2026-05-01T20:29:35Z | daily-summary | ok | EOD snapshot committed; day P&L +0.2%; equity 100.2%
2026-05-01T20:45:23Z | unknown | ok | 📅 Weekly review — week of 2026-04-27 → 2026-05-01 Return: +0.3% / S&P 500: +1.0% / Alpha: −0.6% / Phase: +0.2% 60/40 proxy: +0.8% / Alpha vs 60/40: −0.5% Grade: B+ Stats: 1 opened (XLE) / 0 closed / Win rate n/a / Best n/a / Wors
2026-05-01T20:45:30Z | weekly-review | ok | Week committed; grade=B+; return=+0.3%; alpha=-0.6% vs SPX; alpha=-0.5% vs 60/40; 1 routine open (XLE); 0 closes; strategy rule 6 (cash buffer) reframed
2026-05-04T13:15:01Z | pre-market | ok | Research committed; decision=HOLD; ideas=0 actionable / 1 watchlist (XOM mean-rev)
2026-05-04T13:55:20Z | market-open | ok | Opened: none; positions=2 (BTC, XLE); decision HOLD — XOM watchlist trigger not fired (live ask 151.48 vs Fri close 151.63 = -0.10%, no gap-down to reverse); BTC +0.13%, XLE +2.14% theses intact
2026-05-04T15:38:18Z | midday | ok | no-op; XLE +3.25% (thesis intact, reinforced by XOM beat), BTC +0.99% (thesis intact, ETF-inflow tailwind); positions=2; cash=74.6%; class crypto=15.1% etf=10.3%; no rule trips
2026-05-04T20:33:30Z | unknown | ok | 📊 Daily summary 2026-05-04 (Day 11) Equity: 100.6% of start / Day P&L: +0.4% / Phase: +0.6% Cash: 74.6% / Positions: 2 / Opens this week: 0/5 Positions: • XLE (etf) 10.2% / +3.2% / stop −10% • BTC (crypto) 15.2% / +1.6% / stop −1
2026-05-04T20:33:35Z | daily-summary | ok | EOD snapshot committed; day P&L +0.4%; equity 100.6%; positions 2; opens-this-week 0/5
2026-05-05T13:20:29Z | pre-market | ok | Research committed; decision=HOLD; ideas=0; positions=2 (BTC +3.5% / XLE +3.2%); cash=74.4%
2026-05-05T13:36:52Z | market-open | ok | Opened: none; positions=2 (BTC, XLE); decision HOLD per RESEARCH-LOG (7 candidates screened — MSTR/XLE-add/XLK/ETH/XLI/XLF-XLV/defensives all rejected); BTC +3.4% / XLE +2.7% theses intact; cash 74.4%
2026-05-05T15:39:51Z | midday | ok | no-op; BTC +3.61% (thesis intact, BTC at $81610 — first close above $81k since late January, MSTR-earnings catalyst supportive), XLE +3.11% (thesis intact, WTI consolidating ~$104, Hormuz premium structurally bid); positions=2; cash=74.4%; class crypto=15.4% etf=10.2%; no rule trips
2026-05-05T20:17:02Z | unknown | ok | 📊 Daily summary 2026-05-05 (Day 12) Equity: 100.9% of start / Day P&L: +0.3% / Phase: +0.9% Cash: 74.3% / Positions: 2 / Opens this week: 0/5 Positions: • XLE (etf) 10.2% / +3.3% / stop −10% • BTC (crypto) 15.4% / +3.7% / stop −1
2026-05-05T20:17:07Z | daily-summary | ok | EOD snapshot committed; day P&L +0.3%; equity 100.9%; positions 2; opens-this-week 0/5
2026-05-06T13:10:29Z | pre-market | ok | Research committed; decision=HOLD; ideas=0; rejected=10; held=BTC+4.2% / XLE+3.3%; cash=74.3%; opens-this-week=0 of 5; data-quality flag (1 hallucinated WTI crash claim, cross-checked false)
2026-05-06T13:37:06Z | market-open | ok | Opened: none; positions=2 (BTC, XLE); decision HOLD per RESEARCH-LOG (10 candidates screened — pre-earnings binaries DIS/UBER/CVS/ARM/APP/DASH/FTNT/MAR + MSTR + BTC-add + XLK + XLI + XLE-add + ETH + GLD + XLF/XLV + defensives all rejected); BTC +4.06% / XLE +0.31% theses intact; cash 74.5%; opens-this-week 0 of 5
2026-05-06T15:40:45Z | midday | ok | no-op; BTC +3.59% (thesis intact and strengthening, BTC at $81,596 — multi-month high reinforced by MSTR Q1 ~145k BTC accumulation print), XLE -1.01% (thesis intact, WTI consolidating ~$102 with Hormuz premium structurally bid, EIA inventories at 10:30 ET pending); positions=2; cash=74.7%; class crypto=15.5% etf=9.8%; no rule trips
2026-05-06T20:16:59Z | unknown | ok | 📊 Daily summary 2026-05-06 (Day 13) Equity: 100.5% of start / Day P&L: −0.4% / Phase: +0.5% Cash: 74.7% / Positions: 2 / Opens this week: 0/5 Positions: • BTC (crypto) 15.5% / +3.7% / stop −10% • XLE (etf) 9.8% / −1.0% / stop �
2026-05-06T20:17:04Z | daily-summary | ok | EOD snapshot committed; day P&L -0.4%; equity 100.5%; positions 2; opens-this-week 0/5
2026-05-07T13:19:31Z | unknown | warn | ⚠️ pre-market 2026-05-07: XLE thesis under pressure. WTI ~−10% over 2 sessions on US-Iran ceasefire-optimism (Hormuz risk-premium thesis breaking). XLE position −1.0% unrealized, well above −7% rule line; midday routine to evaluat
2026-05-07T13:19:37Z | pre-market | alert | Research committed; decision=HOLD; ideas=0 actionable; XLE thesis-watch flagged to ClickUp on Iran-ceasefire WTI -10pct
2026-05-07T13:36:31Z | market-open | ok | Opened: none; positions=2 (research decision: HOLD pre-NFP, all 12 candidates rejected)
2026-05-07T15:34:24Z | unknown | ok | 📉 Midday 2026-05-07 — closed 1 (thesis-exit), trimmed 0. • Closed XLE @ −3.6% (thesis broken: Iran-ceasefire WTI −10%/2d, XLE below $56 trigger from pre-market) • BTC held at +1.3% — thesis intact, stop untouched Post-action:
2026-05-07T15:36:14Z | midday | alert | Closed: XLE (thesis-exit, Iran-ceasefire WTI -10%); trimmed: none; positions=1 (BTC); equity=99.9%; cash=84.8%
2026-05-07T20:16:35Z | unknown | ok | 📊 Daily summary 2026-05-07 (Day 14) Equity: 99.9% of start / Day P&L: −0.6% / Phase: −0.1% Cash: 84.7% / Positions: 1 / Opens this week: 0/5 Positions: • BTC (crypto) 15.3% / +1.8% / stop −10% Today: opened 0, closed 1 (XLE — r
2026-05-07T20:16:39Z | daily-summary | ok | EOD snapshot committed; day P&L -0.6%; equity 99.9%
2026-05-08T13:36:12Z | unknown | warn | ⚠️ market-open skipped: no RESEARCH-LOG entry for 2026-05-08
2026-05-08T13:36:18Z | market-open | warn | Skipped: no RESEARCH-LOG entry for 2026-05-08
2026-05-08T15:39:30Z | midday | ok | No-op: BTC +1.35% (rules clear); positions=1; equity=99.9%; cash=84.7%; crypto-class=15.3%
2026-05-14T20:17:27Z | unknown | ok | 📊 Daily summary 2026-05-14 (Day 19) Equity: 100.2% of start / Day P&L: +0.2% / Phase: +0.2% Cash: 84.5% / Positions: 1 / Opens this week: 0/5 Positions: • BTC (crypto) 15.5% / +3.4% / stop −10% Today: opened 0, closed 0, trimmed 0. N
2026-05-14T20:17:38Z | daily-summary | ok | EOD snapshot committed; day P&L +0.2% (vs 2026-05-07 baseline; routine gap 5/8-5/13); equity 100.2%; positions 1; opens-this-week 0/5
2026-05-15T13:10:17Z | pre-market | ok | Research committed; decision=HOLD; ideas=0 actionable / 2 market-open watchlist triggers (XLE re-entry primary on WTI +3.61pct Hormuz-back, BTC add secondary on CLARITY-markup advance); routine-gap 5/8-5/13 flagged
2026-05-15T13:37:26Z | market-open | ok | Opened: none; positions=1 (BTC); XLE primary trigger SKIPPED (30-min-bid-hold unverifiable at 09:36 ET, B+ grade not A, weekend headline risk, entry ask 58.80 above already-flagged 58.08 chase concern); BTC secondary trigger SKIPPED (live 79622 below 81500 breakout threshold); opens-this-week=0/5
2026-05-15T15:34:25Z | midday | ok | No-op: BTC +0.45% (thesis intact per 5/15 pre-market: CLARITY Act tape + ETH/BTC ratio 10-month low + Powell→Warsh dovish tilt); positions=1; equity=99.7%; cash=84.9%; crypto-class=15.1%; no rule trips
2026-05-15T20:16:41Z | unknown | ok | 📊 Daily summary 2026-05-15 (Day 20) Equity: 99.7% of start / Day P&L: −0.4% / Phase: −0.3% Cash: 84.9% / Positions: 1 / Opens this week: 0/5 Positions: • BTC (crypto) 15.1% / +0.4% / stop −10% Today: opened 0, closed 0, trimmed 0
2026-05-15T20:16:46Z | daily-summary | ok | EOD snapshot committed; day P&L -0.4%; equity 99.7%; positions 1 (BTC); opens-this-week 0/5; week closes flat
2026-05-15T20:37:12Z | unknown | ok | 📅 Weekly review — week of 2026-05-11 → 2026-05-15 Return: −0.2% / S&P 500: −0.4% / Alpha: +0.2% / Phase: −0.3% 60/40 proxy: −1.5% / Alpha vs 60/40: +1.3% Grade: B Stats: 0 opened / 0 closed / Win rate n/a / Best n/a / Worst n
2026-05-15T20:37:18Z | weekly-review | ok | Week committed; grade=B; return=-0.2%; alpha=+0.2% vs SPX; alpha=+1.3% vs 60/40; 0 opens; 0 closes; rule-6 reframe validated in first down-week; no strategy edits; flagged operational routine-gap 5/8-5/13 as P1 engineering follow-up
2026-05-18T13:13:27Z | pre-market | ok | Research committed; decision=OPEN 1 (XLE re-entry 10%) + HOLD BTC; ideas=1 A-grade actionable / 1 conditional watchlist
2026-05-18T13:37:49Z | market-open | ok | Opened: none; positions=1 (BTC); XLE quality-gate fail at 09:36 ET — ask 58.82 vs Fri close 59.44 = −1.04% gap-down (research required green or flat); WTI/Hormuz thesis intact but entry-print fails; opens-this-week 0/5
2026-05-18T15:37:39Z | midday | warn | Closed: none; trimmed: none; positions=1 (BTC -3.4%, thesis intact, 6.88% stop headroom)
2026-05-18T20:17:04Z | unknown | ok | 📊 Daily summary 2026-05-18 (Day 21) Equity: 99.3% of start / Day P&L: −0.4% / Phase: −0.7% Cash: 85.2% / Positions: 1 / Opens this week: 0/5 Positions: • BTC (crypto) 14.8% / −2.2% / stop −10% Today: opened 0 (XLE primary trigg
2026-05-18T20:17:11Z | daily-summary | ok | EOD snapshot committed; day P&L -0.4%; equity 99.3%; positions 1 (BTC -2.2%); opens-this-week 0/5 (XLE primary trigger failed gap-down quality-gate at 09:36 ET; WTI/Hormuz thesis intact for Tue/Wed re-entry)
2026-05-19T13:15:39Z | pre-market | ok | Research committed; decision=HOLD; ideas=0 actionable / 2 conditional (XLE collapse-only, BTC-add CLARITY+80K only); regime=Iran-strike-cancel+14pt-proposal
2026-05-19T13:36:36Z | market-open | ok | Opened: none; positions=1 (BTC); both watchlist triggers (XLE collapse, BTC>$80K) NOT MET
2026-05-19T15:38:25Z | midday | warn | Closed: none; trimmed: none; positions=1 (BTC -2.8%, thesis intact per 5/19 pre-market, 7.6% stop headroom); equity=99.2%; cash=85.3%; crypto-class=14.7%; no rule trips
2026-05-19T20:17:36Z | unknown | ok | 📊 Daily summary 2026-05-19 (Day 22) Equity: 99.3% of start / Day P&L: −0.0% / Phase: −0.7% Cash: 85.2% / Positions: 1 / Opens this week: 0/5 Positions: • BTC (crypto) 14.8% / −2.4% / stop −10% Today: opened 0, closed 0, trimmed
2026-05-19T20:17:43Z | daily-summary | ok | EOD snapshot committed; day P&L -0.0%; equity 99.3%; positions 1 (BTC -2.4%); opens-this-week 0/5; XLE re-entry thesis broken on Iran de-escalation
2026-05-20T13:12:42Z | pre-market | ok | Research committed; decision=HOLD; ideas=0 actionable (2 conditional watchlist triggers: XLE collapse-only / BTC-add CLARITY+$80K only); 10Y at 4.69% 16-mo high; Iran de-escalation accelerating (Trump early-next-week deadline); FOMC Minutes 2pm ET; BTC held -1.6% thesis intact
2026-05-20T13:37:36Z | market-open | ok | Opened: none; positions=1 (BTC 14.8% -1.6%); both conditional triggers NOT MET (XLE: no Iran-collapse headline / WTI not >=105; BTC-add: live ask 77036 << 80K, no CLARITY follow-through); opens-this-week 0/5; cash 85.2%; FOMC Minutes 2pm ET pending
2026-05-20T15:38:05Z | midday | warn | Closed: none; trimmed: none; positions=1 (BTC -1.5%, thesis intact per 5/20 pre-market, 8.7% stop headroom); equity=99.4%; cash=85.1%; crypto-class=14.9%; no rule trips; pre-FOMC-Minutes (2pm ET)
2026-05-20T20:16:32Z | unknown | ok | 📊 Daily summary 2026-05-20 (Day 23) Equity: 99.5% of start / Day P&L: +0.1% / Phase: −0.5% Cash: 85.1% / Positions: 1 / Opens this week: 0/5 Positions: • BTC (crypto) 14.9% / −1.4% / stop −10% Today: opened 0, closed 0, trimmed 0
2026-05-20T20:16:37Z | daily-summary | ok | EOD snapshot committed; day P&L +0.1%; equity 99.5%; positions 1 (BTC -1.4%); opens-this-week 0/5; quiet pre/post-FOMC-Minutes session; both conditional triggers NOT MET
2026-05-21T13:14:19Z | pre-market | ok | Research committed; decision=HOLD; ideas=0 actionable; 10Y back to 4.57% (-10bp from 4.69% 16-mo high); ES +0.96% O/N post-FOMC-Minutes; WTI -4.25% O/N (Iran de-escalation continues); WMT/DE/Philly Fed/Initial Claims today; BTC held -1.97% thesis intact; XLE re-entry / BTC-add triggers still NOT MET
2026-05-21T13:36:13Z | market-open | ok | Opened: none; positions=1 (BTC 14.8% -2.0%); ideas=0 per today's RESEARCH-LOG (HOLD); XLE re-entry NOT MET (WTI -4.25% O/N continues Iran de-escalation, ~10% below 5/18 peak); BTC-add NOT MET (live ask ~77.2K well below 80K, no CLARITY follow-through); opens-this-week 0/5; cash 85.2%; meta-rule patience>activity in force
2026-05-21T15:33:15Z | midday | warn | Closed: none; trimmed: none; positions=1 (BTC -2.0%, thesis intact per 5/21 pre-market, 8.0% stop headroom); equity=99.4%; cash=85.2%; crypto-class=14.8%; no rule trips; post-FOMC-Minutes bounce session
2026-05-21T20:17:36Z | unknown | ok | 📊 Daily summary 2026-05-21 (Day 24) Equity: 99.5% of start / Day P&L: −0.0% / Phase: −0.5% Cash: 85.1% / Positions: 1 / Opens this week: 0/5 Positions: • BTC (crypto) 14.9% / −1.4% / stop −10% Today: opened 0, closed 0, trimmed
2026-05-21T20:17:38Z | daily-summary | ok | EOD snapshot committed; day P&L -0.0%; equity 99.5%; positions 1 (BTC -1.4%); opens-this-week 0/5; quiet post-FOMC-Minutes Thursday; both conditional triggers NOT MET
2026-05-22T13:19:16Z | pre-market | ok | Research committed; decision=HOLD; ideas=0 actionable / 0 conditional; DXY at 6-wk high + ES -0.40 O/N + Iran narrowed-the-gaps continued de-escalation; WTI +3.2 O/N technical bounce (XLE thesis still dead); BTC ~77.4K (-1.7 unrealized thesis intact 8.4 stop headroom); ETH +4-6 O/N bid (watchlist next week); week closes 0/5 opens consistent with patience-meta-rule
2026-05-22T13:36:23Z | market-open | ok | Opened: none; positions=1 (HOLD per RESEARCH-LOG)
2026-05-22T15:40:15Z | midday | warn | Closed: none; trimmed: none; positions=1 (BTC -2.45%, thesis intact per 5/22 pre-market, 7.5% stop headroom); equity=99.3%; cash=85.2%; crypto-class=15.1%; no rule trips; DXY 6-wk high + Iran narrowed-the-gaps de-escalation continued; Friday last-day-of-week closes 0/5 opens
2026-05-22T20:16:53Z | unknown | ok | 📊 Daily summary 2026-05-22 (Day 25) Equity: 99.1% of start / Day P&L: −0.3% / Phase: −0.9% Cash: 85.4% / Positions: 1 / Opens this week: 0/5 Positions: • BTC (crypto) 14.6% / −3.7% / stop −10% Today: opened 0, closed 0, trimmed
2026-05-22T20:16:56Z | daily-summary | ok | EOD snapshot committed; day P&L -0.3%; equity 99.1%; positions 1 (BTC -3.7%); opens-this-week 0/5 (week closes flat — XLE thesis dead on Iran narrowed-the-gaps, BTC-add NOT MET all week); BTC -2.32% intraday on DXY 6-wk high; 4th consecutive low-activity week
2026-05-22T20:45:51Z | unknown | ok | 📅 Weekly review — week of 2026-05-18 → 2026-05-22 Return: −0.6% / S&P 500: ~+0.7% / Alpha: −1.3% / Phase: −0.9% 60/40 proxy: −1.2% / Alpha vs 60/40: +0.6% Grade: B Stats: 0 opened / 0 closed / Win rate n/a / Best n/a / Worst 
2026-05-22T20:45:57Z | weekly-review | ok | Week committed; grade=B; return=-0.6%; alpha=-1.3% vs SPX; alpha=+0.6% vs 60/40; 0 opens; 0 closes; rule-6 reframe validated 2nd consecutive down-BTC week; full routine cadence restored (20/20 slots); opens-cadence flag carries to week 7
2026-05-25T13:11:40Z | pre-market | ok | Research committed; decision=HOLD (US markets closed - Memorial Day); ideas=0; held BTC -1.8% thesis on-watch (74344 break = cut)
2026-05-25T13:36:25Z | market-open | ok | Opened: none; positions=1 (BTC 14.8% -1.9%); ideas=0 per today RESEARCH-LOG (HOLD - US equity markets CLOSED Memorial Day); crypto in active deleveraging (BTC -2.7% wk, ETF outflows) no A-grade add; opens-this-week 0/5; cash 85.2%; BTC thesis on-watch, 74344 weekend-low break = rule-9 cut
2026-05-25T15:33:14Z | midday | warn | Closed: none; trimmed: none; positions=1 (BTC -1.58%, thesis intact per 5/25 pre-market, 8.5% stop headroom, closeRate 77518 >> 74344 weekend-low watch level); equity=99.4%; cash=85.1%; crypto-class=14.9%; no rule trips; US equities closed Memorial Day; crypto deleveraging but BTC holding above weekend low
2026-05-25T20:17:11Z | unknown | ok | 📊 Daily summary 2026-05-25 (Day 26) Equity: 99.4% of start / Day P&L: +0.3% / Phase: −0.6% Cash: 85.1% / Positions: 1 / Opens this week: 0/5 Positions: • BTC (crypto) 14.9% / −1.8% / stop −10% Today: opened 0, closed 0, trimmed 0
2026-05-25T20:17:16Z | daily-summary | ok | EOD snapshot committed; day P&L +0.3%; equity 99.4%; positions 1 (BTC -1.8%); opens-this-week 0/5; Memorial Day US equities closed; BTC +2.0% off Friday close, position improved -3.7% to -1.8%; no rule trips
2026-05-26T13:18:39Z | pre-market | ok | Research committed; decision=HOLD; ideas=0; held BTC -2.3% (watch $74344 break); fresh week 0/5 opens
2026-05-26T13:37:18Z | market-open | ok | Opened: none; positions=1 (BTC 14.8% -2.6%); ideas=0 per today RESEARCH-LOG (HOLD - named catalysts are binary earnings prints AZO BMO/ZS AMC, no longs-only macro expression, crypto in deleveraging no A-grade add); opens-this-week 0/5; cash 85.2%; BTC closeRate 76747 well above 74344 thesis-break watch + both stops, no rule trips
2026-05-26T15:33:33Z | midday | warn | Closed: none; trimmed: none; positions=1 (BTC -3.14%, thesis on-watch per 5/26 pre-market - weakening not broken, closeRate 76295 well above 74344 thesis-break watch + stop 70889 ~7.1% headroom); equity=99.2%; cash=85.3%; crypto-class=14.7%; no rule trips; BTC news check no fresh adverse catalyst (weekend liquidation flush already priced, Nasdaq BTC index-options approval constructive)
2026-05-26T20:17:18Z | unknown | ok | 📊 Daily summary 2026-05-26 (Day 27) Equity: 99.1% of start / Day P&L: −0.3% / Phase: −0.9% Cash: 85.4% / Positions: 1 / Opens this week: 0/5 Positions: • BTC (crypto) 14.6% / −3.5% / stop −10% Today: opened 0, closed 0, trimmed
2026-05-26T20:17:26Z | daily-summary | ok | EOD snapshot committed; day P&L -0.3%; equity 99.1%; positions 1 (BTC -3.5%); opens-this-week 0/5; first regular session post-Memorial-Day; BTC -1.78% intraday vs yesterday close, thesis on-watch above 74344; no rule trips
2026-05-27T13:12:58Z | pre-market | ok | Research committed; decision=HOLD; ideas=0; low-catalyst session ahead of Thurs PCE + Q1-GDP; only named catalyst CRM after close; ES ~+0.1-0.7 O/N / VIX ~17 / 10Y easing ~4.5 / WTI -2.3 O/N Iran de-escalation / DXY ~99.1; held BTC -4.3 (thesis weakening not broken - 74344 watch only ~1.4 below spot = rule-9 cut); crypto deleveraging (6-day ETF outflow ~1.55B + ~1B liquidations sub-75K); week 0/5 opens
2026-05-27T13:36:58Z | market-open | ok | Opened: none; positions=1 (BTC 14.5% -4.6%); ideas=0 per today RESEARCH-LOG (HOLD - only named catalyst CRM after close, real macro PCE+Q1-GDP Thursday, no longs-only macro expression, crypto in deleveraging no A-grade add); opens-this-week 0/5; cash 85.5%; equity 99.0%; BTC closeRate 75134 still ~1.1% above 74344 thesis-break watch + stop 70889 well below; no rule trips
2026-05-27T15:34:15Z | midday | warn | Closed: none; trimmed: none; positions=1 (BTC -4.4%, thesis on-watch per 5/27 pre-market - weakening not broken, closeRate 75275 ~1.25% above 74344 thesis-break watch + stop 70889 ~5.8% headroom); equity=99.0%; cash=85.5%; crypto-class=14.5%; no rule trips; BTC news check no fresh adverse catalyst (continuation of May ETF-outflow correction, 75K support defended, no single-day catalyst)
2026-05-27T20:16:43Z | unknown | ok | 📊 Daily summary 2026-05-27 (Day 28) Equity: 99.0% of start / Day P&L: −0.2% / Phase: −1.0% Cash: 85.5% / Positions: 1 / Opens this week: 0/5 Positions: • BTC (crypto) 14.5% / −4.5% / stop −10% Today: opened 0, closed 0, trimmed
2026-05-27T20:16:53Z | daily-summary | ok | EOD snapshot committed; day P&L -0.2%; equity 99.0%; positions 1 (BTC -4.5%); opens-this-week 0/5; quiet low-catalyst session ahead of Thurs PCE+Q1-GDP; BTC -1.03% intraday vs yesterday close, thesis on-watch 74344 ~1.2% below close; no rule trips
2026-05-28T13:20:53Z | unknown | warn | ⚠️ BTC at −7.0% unrealized (right at the manual cut line) and the $74,344 weekend-low watch trigger is breached — thesis broken. Market-open routine will cut on rule 9 (thesis-exit); stop $70,888.59 holds ~3.2% below as backstop. To
2026-05-28T13:22:17Z | pre-market | alert | Research committed; decision=CLOSE-BTC-at-market-open (rule 9 thesis-exit / rule 8 −7pct manual-cut effectively at trigger); ideas=0; ClickUp alert posted (BTC thesis broken: 74344 watch breached; spot 73258 ≈ −7.0pct unrealized; PCE + Q1-GDP both 08:30 ET)
2026-05-28T13:37:24Z | unknown | ok | 📉 Market-open 2026-05-28 — closed 1 position (no opens). • BTC closed on rule 9 (thesis broken) — backstopped by rule 8 (−7% manual cut, triggered) · realized −7.6% on the leg (~−1.1% of equity) · weekend-low watch $74,344 
2026-05-28T13:37:27Z | market-open | ok | Opened: none; Closed: BTC (rule 9 thesis-exit + rule 8 backstop, realized -7.6% on leg / ~-1.1% of equity); positions=0
2026-05-28T15:32:58Z | midday | ok | No-op; positions=0 (BTC closed at market-open on rule 9 thesis-exit); cash=100%; no rule trips; no rebalance; no thesis checks needed
2026-05-28T20:18:19Z | daily-summary | ok | EOD snapshot appended (local run); day P&L -0.6%; equity 98.4%; positions 0 (BTC closed at market-open on rule 9 + rule 8 backstop, realized -7.6% on leg / -1.1% on equity); opens-this-week 0/5; book 100% cash into Friday; no auto-commit (local)
2026-05-29T13:14:39Z | pre-market | ok | Research committed; decision=HOLD; ideas=0; book 100pct cash post 5/28 BTC rule-9 close; SPX +0.6 / NDX +0.9 to record highs Thu on soft April PCE (headline +0.4 vs +0.5 exp / core +0.2 vs +0.3 exp / core 3.3 YoY in line); 10Y eased ~4.47 / DXY ~99.14 / ES +0.07 O/N quiet; today catalysts Chicago PMI 9:45 + Michigan Sentiment final 10:00 = binary event risk not thesis; no major earnings; Iran regime now MIXED (5/27 US strike on Iranian mil site = limited escalation but 60-day-ceasefire + Hormuz-reopen talks active); BTC ~73-74K still deleveraging (re-entry gate BTC reclaims 74-75K + positive ETF flows NOT MET); crypto add off table; record-high chase on Friday into weekend = no setup; week fresh 0/5 patience > activity meta-rule applies; weekly-review afternoon
2026-05-29T13:36:06Z | market-open | ok | Opened: none; positions=0; ideas=0 per today RESEARCH-LOG (HOLD - PCE tailwind already monetized at Thu record close / today catalysts Chicago PMI 9:45 + Michigan Sentiment 10:00 = binary event risk not directional thesis / record-high chase on Friday into weekend + Iran mixed regime = no setup / crypto re-entry gate BTC >=74-75K + positive ETF flows NOT MET / no longs-only macro expression for mixed-Iran tape); book 100pct cash; opens-this-week 0/5; week budget 5/5 intact; patience>activity meta-rule applies
2026-05-29T15:33:51Z | midday | ok | No-op; positions=0; cash=100%; book flat since 5/28 BTC rule-9 close; no rule trips; nothing to cut/thesis-check/rebalance; pre-market HOLD + market-open opened-none today (PCE tailwind monetized Thu / Friday into weekend / mixed-Iran tape / crypto re-entry gate not met); opens-this-week 0/5; patience>activity
