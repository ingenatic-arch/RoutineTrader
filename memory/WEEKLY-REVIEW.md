# Weekly Review

Friday-afternoon recaps written by the `weekly-review` routine. Most-recent week
at the top. The grade (A–F) is honest self-assessment against the strategy rules
and the 60/40 benchmark — not just P&L.

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
