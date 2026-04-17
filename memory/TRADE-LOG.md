# Trade Log

Append-only record. Entries in reverse chronological order (newest at top of
each section). `## Day N — EOD Snapshot` entries are written by the
`daily-summary` routine. Individual trade entries are written by `market-open`
and `midday` routines.

All user-facing rendering (ClickUp, weekly review) uses the percentages only.
The dollar figures below are for internal reconciliation of tomorrow's Day-P&L math.

---

## 2026-04-17 — EOD Snapshot (Day 1, Friday)

**Equity:** 100.2% of start | **Cash:** 100.0% | **Day P&L:** +0.2% | **Phase P&L:** +0.2%

_(no positions)_

**Notes:** First operational EOD. No positions opened or closed today; cash fully unallocated. Equity drift +0.2% reflects platform credit accrual on the idle virtual balance, not trading activity. HOLD remains the default — strategy caps respected by definition.

_Internal (reconciliation only, not shown to user):_
- Virtual equity: $10,020.59
- Virtual cash: $10,020.59
- Opens this week: 0
- Real mirror (10%): $1,002.06

---

## Day 0 — EOD Snapshot (pre-launch baseline)

**Equity:** 100.0% of start | **Cash:** 100.0% | **Day P&L:** 0.0% | **Phase P&L:** 0.0%

_Internal (reconciliation only, not shown to user):_
- Virtual equity: $10,000.00
- Virtual cash: $10,000.00
- Real mirror: $1,000.00

No positions yet. Routines activate on next scheduled fire.

---

## Trade entries

_(market-open and midday routines append under here. Newest on top.)_
