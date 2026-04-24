# Trade Log

Append-only record. Entries in reverse chronological order (newest at top of
each section). `## Day N — EOD Snapshot` entries are written by the
`daily-summary` routine. Individual trade entries are written by `market-open`
and `midday` routines.

All user-facing rendering (ClickUp, weekly review) uses the percentages only.
The dollar figures below are for internal reconciliation of tomorrow's Day-P&L math.

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

### 2026-04-22 — OPEN BTC (Crypto)
- instrumentID: 100000 | order token: 26e1629d-0a21-4b8a-9eaf-08c0e8bb781f | orderID: 1435392803
- side: long | leverage: 1
- amount_usd (internal): $1,503.00 | amount_pct_equity: 15.0%
- entry ask: $78,785.25 | stop: $70,906.7250 (−10%) | target: $94,542.30 (+20%) | R:R: 2.0:1
- thesis: Iran-ceasefire-indefinite + MicroStrategy $2.54B BTC buy + 3mo-high breakout w/ $330M squeeze liqs (research-log 2026-04-22)
