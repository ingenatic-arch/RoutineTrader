# Trade Log

Append-only record. Entries in reverse chronological order (newest at top of
each section). `## Day N — EOD Snapshot` entries are written by the
`daily-summary` routine. Individual trade entries are written by `market-open`
and `midday` routines.

All user-facing rendering (ClickUp, weekly review) uses the percentages only.
The dollar figures below are for internal reconciliation of tomorrow's Day-P&L math.

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
