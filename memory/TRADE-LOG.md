# Trade Log

Append-only record. Entries in reverse chronological order (newest at top of
each section). `## Day N — EOD Snapshot` entries are written by the
`daily-summary` routine. Individual trade entries are written by `market-open`
and `midday` routines.

All user-facing rendering (ClickUp, weekly review) uses the percentages only.
The dollar figures below are for internal reconciliation of tomorrow's Day-P&L math.

---

## 2026-05-11 — EOD Snapshot (Day 16, Monday)

**Equity:** 100.3% of start | **Cash:** 84.4% | **Day P&L:** +0.3% | **Phase P&L:** +0.3%

| Sym | Class  | Weight% | Entry      | Close      | Unrealized% | Stop       |
|-----|--------|---------|------------|------------|-------------|------------|
| BTC | crypto |  15.6%  |$78,765.12  |$81,900.90  |    +4.0%    |$70,888.59  |

**Notes:** Quiet Monday open to the new week — no opens, no closes, no trims;
EVENTS-LOG shows no pre-market / market-open / midday entries today (the
upstream routines did not run / log), so this daily-summary is the only
routine on record for today. Day P&L spans 2 trading sessions: Friday's
2026-05-08 daily-summary did not run (last EOD snapshot is 2026-05-07's
$9,993.61), so the +0.3% Day P&L combines Friday's drift + today's drift in
one print. BTC firmed from the 2026-05-07 close $80,158.73 → $81,900.90
(+2.2% over Fri+Mon, position now +4.0% unrealized — fresh multi-month high
reinforced by continued spot-ETF-inflow tailwind, no adverse catalyst), stop
$70,888.59 untouched and well below the −10% floor. No rule trips. 0 opens
this week (cap 5 — week reset Monday); 1 position (cap 8); 15.6% crypto =
15.6% invested (cap 50% per class); 84.4% cash buffer (well above the 5%
floor; meta-rule patience > activity holds).

_Internal (reconciliation only, not shown to user):_
- Virtual equity: $10,026.86
- Virtual cash: $8,464.02
- Opens this week: 0
- Real mirror (10%): $1,002.69

---

## 2026-05-07 — EOD Snapshot (Day 14, Thursday)

**Equity:** 99.9% of start | **Cash:** 84.7% | **Day P&L:** −0.6% | **Phase P&L:** −0.1%

| Sym | Class  | Weight% | Entry      | Close      | Unrealized% | Stop       |
|-----|--------|---------|------------|------------|-------------|------------|
| BTC | crypto |  15.3%  |$78,765.12  |$80,158.73  |    +1.8%    |$70,888.59  |

**Notes:** Active Thursday — midday closed XLE on the rule-9 thesis-exit (Iran-ceasefire
WTI −10% over two sessions; pre-market handed midday an explicit trigger
"WTI not stabilizing ≥$93 + XLE not holding $56 area" — both met at 15:30Z with
WTI ~$92–93 and XLE $55.47, exit at $55.47 vs $57.55 entry, realized −3.6% on
the leg / ~−0.4% on equity / −$37.04 incl. $1.50 fee). No opens, no trims.
Pre-market HOLD on non-XLE candidates (12 screened — DIS/UBER/CVS/MRNA/RIVN/
ARM/APP/DASH/FTNT post-earnings + MSTR-add + XLF/XLV + GLD — all rejected;
ideas=0 actionable; research-log 2026-05-07 with the explicit XLE-exit trigger
that fired at midday). Market-open opened nothing. BTC softened from
$81,665.99 → $80,158.73 (−1.8% from yesterday's close, position now +1.8%
unrealized — pulled back from yesterday's multi-month high) on a modest
crypto-tape pullback alongside risk-off oil tape, no adverse BTC catalyst,
stop $70,888.59 untouched. Day P&L −0.6% on virtual equity (XLE realized
−$37.04 plus BTC mark-to-market −$28.87 = net −$55.91 vs $10,049.52
yesterday). Rule 9 trip (thesis-exit) — clean execution at the pre-market
trigger. 0 opens this week (cap 5 — week reset Monday); 1 position (cap 8);
15.3% crypto = 15.3% invested (cap 50% per class); 84.7% cash buffer (well
above the 5% floor; meta-rule patience > activity in force).

_Internal (reconciliation only, not shown to user):_
- Virtual equity: $9,993.61
- Virtual cash: $8,464.02
- Opens this week: 0
- Real mirror (10%): $999.36

---

### 2026-05-07 — MIDDAY ACTIONS

**Closed:** XLE (thesis broken — Iran-ceasefire WTI −10%/2 sessions, pre-market
handed an explicit midday trigger "WTI not stabilizing ≥$93 + XLE not holding
$56 area"; both conditions met at 15:30Z — WTI ~$92–93 and XLE $55.47).
**Trimmed:** none.
**Cuts (rule −7%):** none (XLE was at −3.6%, exited on rule 9 thesis-exit, not the rule cut).
**Post-action:** equity 99.9% of start | cash 84.8% | positions 1 (BTC 15.0%) |
crypto class 15.0% / ETF 0% / cash buffer 84.8%. BTC thesis intact at +1.3%
unrealized, stop $70,888.59 untouched.

_Internal (reconciliation only, not shown to user):_
- Virtual equity (post-close): $9,986.69
- Virtual cash (post-close): $8,464.02
- XLE realized P&L: −$37.04 (incl. $1.50 platform fee) on $999.00 cost; ~−3.6% on the leg, ~−0.4% on equity
- Opens this week: 0
- Real mirror (10%): $998.67

---

## 2026-05-06 — EOD Snapshot (Day 13, Wednesday)

**Equity:** 100.5% of start | **Cash:** 74.7% | **Day P&L:** −0.4% | **Phase P&L:** +0.5%

| Sym | Class  | Weight% | Entry      | Close      | Unrealized% | Stop       |
|-----|--------|---------|------------|------------|-------------|------------|
| BTC | crypto |  15.5%  |$78,765.12  |$81,665.99  |    +3.7%    |$70,888.59  |
| XLE | etf    |   9.8%  |$57.55      |$56.98      |    −1.0%    |$51.79      |

**Notes:** Mildly negative Wednesday — no opens, no closes, no trims. Pre-market
HOLD (10 candidates screened — pre-earnings binaries DIS/UBER/CVS/ARM/APP/DASH/
FTNT/MAR + MSTR + BTC-add + XLK + XLI + XLE-add + ETH + GLD + XLF/XLV +
defensives all rejected; ideas=0 actionable; research-log 2026-05-06 with a
data-quality flag for one hallucinated WTI-crash claim cross-checked false).
Market-open opened nothing; midday no-op (both theses intact). XLE softened
materially from $59.44 → $56.98 (−4.1% from yesterday's close, position
flipped from +3.3% → −1.0% unrealized) on WTI giving back to ~$102 plus a
post-EIA-inventory bid that didn't hold; thesis intact (Hormuz risk-premium
structurally bid, well above the −10% stop band at $51.79). BTC essentially
flat at $81,650.33 → $81,665.99 (+0.02% from yesterday's close, position
holds +3.7% unrealized) — multi-month high reinforced by MSTR Q1 ~145k BTC
accumulation print, no adverse catalyst. Day P&L −0.4% on virtual equity
(XLE mark-to-market loss of −$42.70 partially offset by BTC +$0.30, net
−$42.40). No rule trips. 0 opens this week (cap 5 — week reset Monday); 2
positions (cap 8); 15.5% crypto + 9.8% ETF = 25.3% invested (cap 50% per
class); 74.7% cash buffer.

_Internal (reconciliation only, not shown to user):_
- Virtual equity: $10,049.52
- Virtual cash: $7,502.06
- Opens this week: 0
- Real mirror (10%): $1,004.95

---

## 2026-05-05 — EOD Snapshot (Day 12, Tuesday)

**Equity:** 100.9% of start | **Cash:** 74.3% | **Day P&L:** +0.3% | **Phase P&L:** +0.9%

| Sym | Class  | Weight% | Entry      | Close      | Unrealized% | Stop       |
|-----|--------|---------|------------|------------|-------------|------------|
| XLE | etf    |  10.2%  |$57.55      |$59.44      |    +3.3%    |$51.79      |
| BTC | crypto |  15.4%  |$78,765.12  |$81,650.33  |    +3.7%    |$70,888.59  |

**Notes:** Constructive Tuesday — no opens, no closes, no trims. Pre-market
HOLD (7 candidates screened — MSTR/XLE-add/XLK/ETH/XLI/XLF-XLV/defensives —
all rejected; ideas=0 actionable, research-log 2026-05-05). Market-open opened
nothing; midday no-op (both theses intact and reinforcing). BTC firmed sharply
from $79,999.57 → $81,650.33 (+2.1% from yesterday's close, position now +3.7%
unrealized — first close above $81k since late January) on continued
spot-ETF-inflow tailwind plus a supportive MSTR-earnings catalyst, no adverse
news. XLE essentially unchanged from $59.39 → $59.44 (+0.1% from yesterday's
close, position now +3.3% unrealized) on WTI consolidating ~$104 with the
Hormuz risk-premium structurally bid; thesis intact, stop untouched. Day P&L
+0.3% on virtual equity (BTC mark-to-market gain of +$31.50 plus XLE +$0.87,
net +$32.37). No rule trips. 0 opens this week (cap 5 — week reset Monday); 2
positions (cap 8); 15.4% crypto + 10.2% ETF = 25.6% invested (cap 50% per
class); 74.3% cash buffer.

_Internal (reconciliation only, not shown to user):_
- Virtual equity: $10,091.92
- Virtual cash: $7,502.06
- Opens this week: 0
- Real mirror (10%): $1,009.19

---

## 2026-05-04 — EOD Snapshot (Day 11, Monday)

**Equity:** 100.6% of start | **Cash:** 74.6% | **Day P&L:** +0.4% | **Phase P&L:** +0.6%

| Sym | Class  | Weight% | Entry      | Close      | Unrealized% | Stop       |
|-----|--------|---------|------------|------------|-------------|------------|
| XLE | etf    |  10.2%  |$57.55      |$59.39      |    +3.2%    |$51.79      |
| BTC | crypto |  15.2%  |$78,765.12  |$79,999.57  |    +1.6%    |$70,888.59  |

**Notes:** Constructive Monday open to the new week — no opens, no closes, no
trims. Pre-market decision HOLD (ideas=0 actionable; 1 watchlist — XOM
mean-reversion gated on a gap-down reversal that never fired). Market-open
opened nothing (XOM live ask $151.48 vs Friday close $151.63 = −0.10%, no
gap-down to reverse). Midday no-op (both theses intact and reinforcing). XLE
firmed from $58.84 → $59.39 (+0.9% from Friday's close, position now +3.2%
unrealized) on XOM-earnings-beat follow-through and steady WTI tape. BTC
firmed sharply from $78,173.16 → $79,999.57 (+2.3% from Friday's close,
position now +1.6% unrealized — first close in the green since the 2026-04-22
open) on a broader crypto-tape bid plus continued spot-ETF-inflow tailwind,
no adverse catalyst. Day P&L +0.4% on virtual equity (BTC mark-to-market gain
of +$34.85 plus XLE +$9.55, net +$44.40). No rule trips. 0 opens this week
(cap 5 — week reset Monday); 2 positions (cap 8); 15.2% crypto + 10.2% ETF =
25.4% invested (cap 50% per class); 74.6% cash buffer.

_Internal (reconciliation only, not shown to user):_
- Virtual equity: $10,059.55
- Virtual cash: $7,502.06
- Opens this week: 0
- Real mirror (10%): $1,005.96

---

## 2026-05-01 — EOD Snapshot (Day 10, Friday)

**Equity:** 100.2% of start | **Cash:** 74.9% | **Day P&L:** +0.2% | **Phase P&L:** +0.2%

| Sym | Class  | Weight% | Entry      | Close      | Unrealized% | Stop       |
|-----|--------|---------|------------|------------|-------------|------------|
| XLE | etf    |  10.2%  |$57.55      |$58.84      |    +2.2%    |$51.79      |
| BTC | crypto |  14.9%  |$78,765.12  |$78,173.16  |    −0.8%    |$70,888.59  |

**Notes:** Quiet Friday close to the week — no opens, no closes, no trims.
Pre-market HOLD on the fresh slate; market-open opened nothing; midday no-op
(both theses intact, both stops well untouched). BTC firmed sharply from
$76,435.32 → $78,173.16 (+2.3% from yesterday's close, position now −0.8%
unrealized — recovered most of the prior softness, well inside the −10% stop
band) on a broader crypto-tape bid, no adverse catalyst. XLE softened from
$59.68 → $58.84 (−1.4% from yesterday's close, position now +2.2% unrealized)
on light Friday profit-taking around XOM/CVX earnings; thesis intact, stop
untouched. Day P&L +0.2% on virtual equity (BTC mark-to-market gain of
+$33.16 partially offset by XLE pullback of −$14.58, net +$18.58). No rule
trips. 1 open this week (cap 5); 2 positions (cap 8); 14.9% crypto + 10.2%
ETF = 25.1% invested (cap 50% per class); 74.9% cash buffer.

_Internal (reconciliation only, not shown to user):_
- Virtual equity: $10,015.15
- Virtual cash: $7,502.06
- Opens this week: 1
- Real mirror (10%): $1,001.52

---

## 2026-04-30 — EOD Snapshot (Day 9, Thursday)

**Equity:** 100.0% of start | **Cash:** 75.0% | **Day P&L:** +0.3% | **Phase P&L:** −0.0%

| Sym | Class  | Weight% | Entry      | Close      | Unrealized% | Stop       |
|-----|--------|---------|------------|------------|-------------|------------|
| XLE | etf    |  10.4%  |$57.55      |$59.68      |    +3.7%    |$51.79      |
| BTC | crypto |  14.6%  |$78,765.12  |$76,435.32  |    −3.0%    |$70,888.59  |

**Notes:** Quiet Thursday — no opens, no closes, no trims. Pre-market HOLD on
the post-FOMC oil-shock tape (7 candidates screened — XOM/CVX/USO/XLE-add/
GLD/ETH/XLK — all rejected; energy entries late after WTI +7% with Friday
XOM/CVX earnings binary; research-log 2026-04-30, ideas=0). Market-open
opened nothing; midday no-op (XLE thesis intact and strengthening at +3.7%,
BTC thesis intact and well inside the −10% stop band). XLE firmed from
$59.05 → $59.68 (+1.1% from yesterday's close, position now +3.7% unrealized
on continued WTI/Hormuz risk-premium tailwind). BTC firmed from $75,604.00 →
$76,435.32 (position-level −3.0%, recovered from yesterday's −4.0%, still
well inside the −10% stop band) on a modest crypto-tape bid, no adverse
catalyst. Day P&L +0.3% on virtual equity (XLE mark-to-market gain of
+$11.00 plus BTC recovery of +$15.66, net +$26.79). No rule trips. 1 open
this week (cap 5); 2 positions (cap 8); 14.6% crypto + 10.4% ETF = 25.0%
invested (cap 50% per class); 75.0% cash buffer.

_Internal (reconciliation only, not shown to user):_
- Virtual equity: $9,996.57
- Virtual cash: $7,502.06
- Opens this week: 1
- Real mirror (10%): $999.66

---

## 2026-04-29 — EOD Snapshot (Day 8, Wednesday)

**Equity:** 99.7% of start | **Cash:** 75.2% | **Day P&L:** +0.1% | **Phase P&L:** −0.3%

| Sym | Class  | Weight% | Entry      | Close      | Unrealized% | Stop       |
|-----|--------|---------|------------|------------|-------------|------------|
| XLE | etf    |  10.3%  |$57.55      |$59.05      |    +2.6%    |$51.79      |
| BTC | crypto |  14.5%  |$78,765.12  |$75,604.00  |    −4.0%    |$70,888.59  |

**Notes:** Quiet Wednesday — no opens, no closes, no trims. Pre-market HOLD on
the fresh slate (no A-grade ideas cleared the gate). Market-open opened
nothing; midday no-op (XLE thesis intact and strengthening at +2.6%, BTC
thesis intact and well inside the −10% stop band). XLE firmed sharply from
$57.71 → $59.05 (+2.3% from yesterday's close, position now +2.6% unrealized
on continued WTI/Hormuz risk-premium tailwind). BTC softened further from
$76,380.72 → $75,604.00 (position-level −4.0%, still well inside the −10% stop
band) on continued broad crypto-tape weakness, no adverse catalyst. Day P&L
+0.1% on virtual equity (XLE mark-to-market gain of +$22.94 partially offset
by BTC weakness of −$14.66, net +$8.28). No rule trips. 1 open this week
(cap 5); 2 positions (cap 8); 14.5% crypto + 10.3% ETF = 24.8% invested
(cap 50% per class); 75.2% cash buffer.

_Internal (reconciliation only, not shown to user):_
- Virtual equity: $9,969.78
- Virtual cash: $7,502.06
- Opens this week: 1
- Real mirror (10%): $996.98

---

## 2026-04-28 — EOD Snapshot (Day 7, Tuesday)

**Equity:** 99.6% of start | **Cash:** 75.3% | **Day P&L:** +0.0% | **Phase P&L:** −0.4%

| Sym | Class  | Weight% | Entry      | Close      | Unrealized% | Stop       |
|-----|--------|---------|------------|------------|-------------|------------|
| XLE | etf    |  10.1%  |$57.55      |$57.71      |    +0.3%    |$51.79      |
| BTC | crypto |  14.6%  |$78,765.12  |$76,380.72  |    −3.0%    |$70,888.59  |

**Notes:** Quiet Tuesday — no opens, no closes, no trims. Pre-market HOLD on
the fresh slate (no A-grade ideas cleared the gate). Market-open opened
nothing; midday no-op (XLE thesis intact at +0.3%, BTC thesis intact and
well inside the −10% stop band). XLE firmed from $56.78 → $57.71 (+1.6% from
yesterday's close, position now +0.3% unrealized). BTC softened further from
$76,978.13 → $76,380.72 (position-level −3.0%, still well inside the −10% stop
band) on continued broad crypto-tape weakness, no adverse catalyst. Day P&L
+0.0% on virtual equity (small +$4.91 mark-to-market drift from XLE
appreciation partially offset by BTC weakness). No rule trips. 1 open this
week (cap 5); 2 positions (cap 8); 14.6% crypto + 10.1% ETF = 24.7% invested
(cap 50% per class); 75.3% cash buffer.

_Internal (reconciliation only, not shown to user):_
- Virtual equity: $9,961.50
- Virtual cash: $7,502.06
- Opens this week: 1
- Real mirror (10%): $996.15

---

## 2026-04-27 — EOD Snapshot (Day 6, Monday)

**Equity:** 99.6% of start | **Cash:** 75.3% | **Day P&L:** −0.2% | **Phase P&L:** −0.4%

| Sym | Class  | Weight% | Entry      | Close      | Unrealized% | Stop       |
|-----|--------|---------|------------|------------|-------------|------------|
| XLE | etf    |   9.9%  |$57.55      |$56.78      |    −1.3%    |$51.79      |
| BTC | crypto |  14.8%  |$78,765.12  |$76,978.13  |    −2.3%    |$70,888.59  |

**Notes:** Active Monday — market-open added XLE long at 10% weight on the
WTI +2% / Iran-talks-stalled / Hormuz-disruption thesis (research-log
2026-04-27, A-grade). Fill 57.54 ask vs 57.55 open rate (~0bp slippage). BTC
drifted from $77,500.39 → $76,978.13 (position-level −2.3% unrealized) on
broad crypto softness, no adverse catalyst; XLE softened from $57.55 entry
→ $56.78 (−1.3%). Both well inside the −10% stop band. Midday no-op (BTC
thesis intact, XLE just opened). Day P&L −0.2% on virtual equity. No rule
trips. 1 open this week (cap 5); 2 positions (cap 8); 14.8% crypto + 9.9%
ETF = 24.7% invested (cap 50% per class); 75.3% cash buffer.

_Internal (reconciliation only, not shown to user):_
- Virtual equity: $9,956.59
- Virtual cash: $7,502.06
- Opens this week: 1
- Real mirror (10%): $995.66

---

## 2026-04-24 — EOD Snapshot (Day 5, Friday)

**Equity:** 99.8% of start | **Cash:** 85.2% | **Day P&L:** −0.1% | **Phase P&L:** −0.2%

| Sym | Class  | Weight% | Entry      | Close      | Unrealized% | Stop       |
|-----|--------|---------|------------|------------|-------------|------------|
| BTC | crypto |  14.8%  |$78,765.12  |$77,500.39  |    −1.6%    |$70,888.59  |

**Notes:** Quiet close to the week — pre-market HOLD (ideas=0; BTC thesis
intact), market-open opened none, midday no-op. BTC drifted from $77,790.71 →
$77,500.39 on broad crypto softness (position-level −1.6% unrealized, well
inside the 10% stop band). No adverse BTC catalysts, no rule trips. Day P&L
−0.1% on virtual equity. 1 open this week (cap 5); 1 position (cap 8); 14.8%
crypto exposure (cap 50%); 85.2% cash buffer — supersedes the intra-day
08:38Z reconciliation entry for today.

_Internal (reconciliation only, not shown to user):_
- Virtual equity: $9,981.43
- Virtual cash: $8,502.56
- Opens this week: 1
- Real mirror (10%): $998.14

---

## 2026-04-23 — EOD Snapshot (Day 4, Thursday)

**Equity:** 99.9% of start | **Cash:** 85.1% | **Day P&L:** −0.2% | **Phase P&L:** −0.1%

| Sym | Class  | Weight% | Entry      | Close      | Unrealized% | Stop       |
|-----|--------|---------|------------|------------|-------------|------------|
| BTC | crypto |  14.9%  |$78,765.12  |$77,790.71  |    −1.2%    |$70,888.59  |

**Notes:** Quiet day — no opens, no closes, no trims. Pre-market HOLD on the
fresh slate (RESEARCH-LOG flagged macro-quiet tape, no A-grade non-BTC ideas).
Market-open opened nothing; midday no-op (BTC thesis intact, stop untouched at
−10%). BTC drifted from $78,626.33 → $77,790.71 (position-level −1.24%, well
inside the 10% stop band) on broad crypto-tape softness, no adverse catalyst.
Day P&L −0.16% on virtual equity. No rule trips. 1 open this week (cap 5);
1 position (cap 8); 14.9% crypto exposure (cap 50%); 85.1% cash buffer.

_Internal (reconciliation only, not shown to user):_
- Virtual equity: $9,986.97
- Virtual cash: $8,502.56
- Opens this week: 1
- Real mirror (10%): $998.70

---

## 2026-04-22 — EOD Snapshot (Day 3, Wednesday)

**Equity:** 100.0% of start | **Cash:** 85.0% | **Day P&L:** −0.2% | **Phase P&L:** +0.0%

| Sym | Class  | Weight% | Entry      | Close      | Unrealized% | Stop       |
|-----|--------|---------|------------|------------|-------------|------------|
| BTC | crypto |  15.0%  |$78,765.12  |$78,626.33  |    −0.2%    |$70,888.59  |

**Notes:** First position of the phase opened at 13:55 UTC — BTC long at 15%
weight on Iran-ceasefire + MicroStrategy $2.54B-BTC-buy + 3mo-high breakout
thesis (A-grade, research-log 2026-04-22). Fill 78,765.12 vs pre-buy ask
78,785.25 (~2bp slippage). Midday no-op; thesis intact, stop untouched. Day
drifted −0.2% on a BTC quote pullback to 78,626.33 (position-level −0.18%,
well inside the 10% stop band). Market-wide character: post-Retail-Sales
tone, no adverse BTC catalysts. No rule trips. 1 open this week (cap 5);
1 position (cap 8); 15% crypto exposure (cap 50%).

_Internal (reconciliation only, not shown to user):_
- Virtual equity: $10,002.91
- Virtual cash: $8,502.56
- Opens this week: 1
- Real mirror (10%): $1,000.29

---

## 2026-04-21 — EOD Snapshot (Day 2, Tuesday)

**Equity:** 100.2% of start | **Cash:** 100.0% | **Day P&L:** +0.2% | **Phase P&L:** +0.2%

_No open positions._

**Notes:** Account flat for the second trading session in a row. Pre-market
flagged HOLD (all 6 candidates — XLP/XLU/XLE/BAC/MS/QBTS + crypto set —
rejected pending Retail-Sales print). Market-open opened nothing; midday
no-op. The small +0.2% drift on virtual equity vs the Day 0 baseline is a
platform-side credit adjustment (the Day 1 EOD snapshot never committed
because 2026-04-20's daily-summary aborted on an inconclusive key-check).
No rule trips. 0 opens this week (cap 5); 0 positions (cap 8).

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

### 2026-05-07 — CLOSE XLE (ETF — Energy) — thesis broken
- positionID: 3417170896 | close orderID: 1454219275 | close token: eaeb987a-49a6-467c-8434-79cf41da4833
- side closed: long 17.358818 units | leverage: 1
- exit rate: $55.47 | open rate: $57.55 | holding period: 10 days (2026-04-27 → 2026-05-07)
- realized %: −3.6% on the leg (~−0.4% of equity)
- realized P&L (internal): −$37.04 (incl. $1.50 platform fee); cash returned $961.96 vs $999.00 cost
- reason: thesis broken — Iran-ceasefire optimism drove WTI −10% over two sessions (Wed close −7.0% then ~−2.5% Thu morning); the Hormuz-risk-premium thesis underwriting the 2026-04-27 long has reversed (de-escalation = "war ending" framing, not escalation). Pre-market 2026-05-07 handed midday an explicit thesis-exit trigger: "WTI not stabilizing ≥$93 + XLE not holding $56 area." Live midday read: WTI ~$92–93 (below $93), XLE close rate $55.47 (below $56) — both conditions met. Strategy rule 9 (thesis-exit overrides the −7% rule) → full close.

### 2026-04-27 — OPEN XLE (ETF — Energy)
- instrumentID: 3008 | order token: a17f9f5f-7a7a-4296-b9c2-b9e51a16c94d | orderID: 1439795801
- side: long | leverage: 1
- amount_usd (internal): $999.00 | amount_pct_equity: 10.0%
- entry ask: $57.54 | stop: $51.7860 (−10%) | target: $69.0480 (+20%) | R:R: 2.0:1
- thesis: WTI +2% overnight on Iran-talks-stalled + Hormuz disruptions; XLE pulled back ~7% from highs while still YTD leader at +28% (research-log 2026-04-27)

### 2026-04-22 — OPEN BTC (Crypto)
- instrumentID: 100000 | order token: 26e1629d-0a21-4b8a-9eaf-08c0e8bb781f | orderID: 1435392803
- side: long | leverage: 1
- amount_usd (internal): $1,503.00 | amount_pct_equity: 15.0%
- entry ask: $78,785.25 | stop: $70,906.7250 (−10%) | target: $94,542.30 (+20%) | R:R: 2.0:1
- thesis: Iran-ceasefire-indefinite + MicroStrategy $2.54B BTC buy + 3mo-high breakout w/ $330M squeeze liqs (research-log 2026-04-22)
