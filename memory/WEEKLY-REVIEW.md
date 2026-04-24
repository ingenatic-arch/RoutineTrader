# Weekly Review

Friday-afternoon recaps written by the `weekly-review` routine. Most-recent week
at the top. The grade (A–F) is honest self-assessment against the strategy rules
and the 60/40 benchmark — not just P&L.

---

### Week of 2026-04-20 → 2026-04-24

**Week return:** −0.4% | **S&P 500 week:** +0.5% | **Alpha:** −0.9%
**60/40 proxy (0.6·SPX + 0.4·BTC):** +1.5% | **Alpha vs 60/40:** −1.9%
**Phase-to-date return:** −0.2%
**Grade: B** _(discipline perfect, one A-grade entry executed cleanly; trailed benchmark as the single crypto long drifted intraweek, well inside the stop band)_

**Context.** First week with a routine-sourced fill. Research fired A-grade on
Wednesday (BTC long, Iran-ceasefire-indefinite + MicroStrategy $2.54B buy +
3mo-high breakout with $330M squeeze liqs) and market-open converted it to a
15%-weight position with the server-side −10% stop at $70,888.59 and an implicit
+20% target. The other four sessions held cash against macro-light / binary /
no-confirmed-catalyst tapes — all HOLDs were well-reasoned against the rulebook,
none were default-inaction. Three routine runs aborted on transient eToro HTTP
503 storms during key-check (Monday daily-summary, Wednesday pre-market,
Thursday pre-market); each recovered on a same-day re-run. The BTC fill itself
landed via a manual re-fire after Wednesday's 13:15Z pre-market aborted and the
13:37Z market-open correctly refused to trade without a research entry.

**Stats**
| Metric              | Value |
|---------------------|-------|
| Trades opened       |   1   |
| Trades closed       |   0   |
| Win rate            |  n/a  |
| Best trade          |  n/a  |
| Worst trade         |  n/a  |
| Avg hold (days)     |  n/a  |
| Profit factor       |  n/a  |
| Open positions EOW  |   1   |

**Closed trades**
| Symbol | Class | Hold | P&L % | Reason closed                 |
|--------|-------|------|-------|-------------------------------|
| —      | —     | —    | —     | No closes this week.          |

**Open positions EOW**
| Symbol | Class  | Weight% | Unrealized% | Stop       |
|--------|--------|---------|-------------|------------|
| BTC    | crypto |  14.8%  |    −1.6%    | $70,888.59 |

Cash: 85.2% of equity. Deployed: 14.8%. Opens-this-week: 1 of 5 budget. Class
exposure: crypto 14.8% (cap 50%).

**What worked**
- A-grade setup recognized and executed. The BTC thesis on 4/22 (three concurrent
  independent catalysts in the prior 24h) was correctly sized at 15% (inside
  both the 30% name cap and 50% class cap), with a server-side −10% stop
  committed at open, a 2:1 R:R profile, and a catalyst block in the research
  log. Pre-buy gate was walked line-by-line — not skipped.
- Discipline held across four HOLDs. Monday (empty calendar, oil re-rate
  invalidated the energy thesis), Tuesday (Retail-Sales binary direction
  unknown), Thursday (ETH/BTC ratio contracting — named watchlist trigger
  did not fire), Friday (BTC below $79k break-and-hold threshold — same).
  Every HOLD had a named reason, not "nothing obvious."
- Data-quality skepticism paid off twice. Thursday flagged a Perplexity oil/Iran
  narrative hallucination (Hormuz-disruption claim contradicting our ceasefire
  thesis); Friday caught a ~$4.6k-stale Perplexity BTC print. Live eToro rates
  were treated as the operative truth both days — correctly.
- Key-check sanity gate worked as designed. Three 503 storms produced
  KEY=unknown responses; each routine aborted correctly and did not trade into
  an ambiguous key state. No false-positive main-account fills.

**What didn't**
- Benchmark miss. Week return −0.4% vs S&P +0.5% and a 60/40 proxy of +1.5%
  (crypto +3.1% was the week's big bid). Our single crypto long drifted
  −1.6% intraweek from the $78,765 fill to $77,500 on broad crypto softness —
  nothing broke the thesis, but entry was early in the local trend.
- Platform-side 503 storms are killing cron runs. Three of fifteen routine
  firings this week aborted on transient eToro 503s during key-check (20%
  failure rate). The wrapper's retry logic is sound, but the fresh-clone
  container has no ability to self-re-fire within the same cron. Wednesday's
  A-grade BTC thesis required a manual re-fire to convert to a fill — the
  cron path alone would have missed it.
- Opens-cadence still low. 1 of 5 budget used, second week in a row at or below
  1 routine-opened trade. Each HOLD was defensible in isolation, but the
  pattern suggests the entry bar may be calibrated slightly above the actual
  rate at which A-grade setups appear on ordinary tapes. Watch over weeks 3–4.

**Lessons**
- Sizing is the backstop when entry timing is imperfect. A 15% weight drifting
  −1.6% = a −0.24% hit to virtual equity. The strategy's size caps are doing
  exactly what they were designed to do — absorb normal post-entry chop without
  forcing a thesis-exit or stop-out. Keep them.
- Named watchlist triggers > vibes. Thursday (ETH/BTC ratio) and Friday (BTC
  $79k break-and-hold) both offered plausible crypto-add ideas; both failed a
  named, pre-committed condition; both were correctly deferred. The
  reject-reasons in the research log create an auditable chain — this is what
  stops a good week from becoming an over-traded one.
- One A-grade entry is allowed to trail the benchmark in a crypto-up week.
  The trade is still alive (−1.6% unrealized, stop at −10%, thesis intact);
  the grade shouldn't over-weight a single week's unrealized drift.

**Adjustments for next week**
- **No strategy change.** Two weeks in (one fully flat, one with a single
  A-grade entry), the signal-to-noise ratio is still too low to amend
  `TRADING-STRATEGY.md`. Continue to grade discipline above P&L through at
  least weeks 3–4.
- **Operational flag (not a rule change):** the eToro-503 / key-check-unknown
  abort path cost us an auto-fired Wednesday entry. If the pattern persists
  through next week, consider a wrapper-level "one-shot re-fire 5 minutes after
  key-check abort" so the routine can self-heal through transient storms
  within the same cron window. Engineering follow-up, not a strategy edit.

---

### Week of 2026-04-13 → 2026-04-17

**Week return:** +0.2% | **S&P 500 week:** +1.1% | **Alpha:** −0.9%
**60/40 proxy (0.6·SPX + 0.4·BTC):** +1.5% | **Alpha vs 60/40:** −1.3%
**Phase-to-date return:** +0.2%
**Grade: B** _(disciplined HOLD on a no-catalyst Friday; legacy anomalies cleared; trailed benchmark as the cost of dry powder)_

**Context.** This was the first live weekly review. The routines opened zero
new positions this week. At Monday's start the account held two pre-cron
anomaly positions (SPY ~35%, QQQ ~30%) with broken `stopLossRate=0.0001` —
both violated the 20% per-name cap and the "stop set at open" rule. Neither
was opened by these routines; they predate the Monday pre-market fire. By
Friday pre-market those positions were off the account (manual or
platform-side action, not logged through the routines), leaving `positions:[]`
and credit ≈ $10,020.59. Friday's pre-market correctly decided HOLD (empty US
calendar, Iran-truce expiry next week, energy extended). Week-start equity
was taken as the Day 0 baseline since no Monday EOD snapshot exists yet.

**Stats**
| Metric              | Value |
|---------------------|-------|
| Trades opened       |   0   |
| Trades closed       |   0*  |
| Win rate            |  n/a  |
| Best trade          |  n/a  |
| Worst trade         |  n/a  |
| Avg hold (days)     |  n/a  |
| Profit factor       |  n/a  |
| Open positions EOW  |   0   |

_*Two legacy positions (SPY, QQQ) left the account during the week but were
not closed via the routines, so they are not counted in routine stats. The
residual +0.2% equity bump is what those round-trips left behind._

**Closed trades**
| Symbol | Class | Hold | P&L % | Reason closed                        |
|--------|-------|------|-------|--------------------------------------|
| —      | —     | —    | —     | No routine-driven closes this week.  |

**Open positions EOW**
| Symbol | Class | Weight% | Unrealized% | Stop |
|--------|-------|---------|-------------|------|
| —      | —     |   0%    |     —       |  —   |

Cash: 100% of equity (above the 15–25% target band by design, since we were
fully flat going into a no-catalyst Friday).

**What worked**
- Friday's HOLD call was the right read of a no-catalyst tape. Not chasing
  extended energy (+25% YTD) or a quiet bid into the Iran-truce expiry
  window preserved optionality for Monday.
- Pre-market research captured the anomaly-clearing event correctly and flagged
  the reconciliation gap for `daily-summary` instead of papering over it.
- Key-check sanity gate ran cleanly each routine; no KEY=main false alarm.

**What didn't**
- We trailed both the S&P (+1.1%) and the 60/40 proxy (+1.5%) — being 100%
  cash on an up week is the mechanical cost of discipline, but it is still
  the cost.
- TRADE-LOG still shows only Day 0 by EOW Friday. The two legacy closes
  happened outside the routine path and were not logged, so reconciliation
  depends on `daily-summary` catching up. This is a gap in observability,
  not a rule we broke, but it is worth naming.
- We have no market-open routine-sourced fills yet, so the Monday-through-
  Thursday attempts did not convert any of the research log's ideas into
  positions. Worth watching whether the entry bar is calibrated too high.

**Lessons**
- "Patience > activity" is priced: a quiet-tape HOLD is allowed to trail the
  benchmark in a single week. The grade must weight discipline above P&L
  until we have enough weeks to judge the strategy on returns.
- Pre-existing account state can violate the rulebook even before a routine
  has opened a single trade. The key-check and Monday-pre-market holdings
  review are the only chance to catch that — both need to keep being the
  first thing we do, not skipped on "should be flat" assumptions.

**Adjustments for next week**
- No strategy change. One week of data (and zero routine-opened trades) is
  not enough signal to amend `TRADING-STRATEGY.md`. Re-evaluate after 2–3
  weeks of actual routine-driven activity.
- Operational nudge (not a rule change): if `daily-summary` sees a position
  disappear that was not closed via the routine path, it should append a
  synthetic trade entry to `TRADE-LOG.md` with reason `"reconciled (off-routine close)"`
  so the weekly stats table doesn't have to caveat legacy closes next week.

---

## Template (copy for each new week)

### Week of YYYY-MM-DD → YYYY-MM-DD

**Week return:** ±X.X% | **S&P 500 week:** ±X.X% | **Alpha:** ±X.X%
**Phase-to-date return:** ±X.X%
**Grade: X** _(A excellent / B good / C okay / D poor / F broken discipline)_

**Stats**
| Metric              | Value |
|---------------------|-------|
| Trades opened       |   N   |
| Trades closed       |   N   |
| Win rate            |  X%   |
| Best trade          | +X.X% |
| Worst trade         | −X.X% |
| Avg hold (days)     |  X.X  |
| Profit factor       |  X.XX |
| Open positions EOW  |   N   |

**Closed trades**
| Symbol | Class | Hold | P&L % | Reason closed |
|--------|-------|------|-------|---------------|
| …      | …     | …d   | ±X%   | …             |

**Open positions EOW**
| Symbol | Class | Weight% | Unrealized% | Stop |
|--------|-------|---------|-------------|------|
| …      | …     |  X%     |    ±X%      |  …   |

**What worked** (3–5 bullets)
- …

**What didn't** (3–5 bullets)
- …

**Lessons**
- …

**Adjustments for next week**
- (If a rule proved out over 2+ weeks or failed badly, edit TRADING-STRATEGY.md and note the change here.)

---
