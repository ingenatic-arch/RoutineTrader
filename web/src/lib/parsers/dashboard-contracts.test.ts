import { describe, expect, it } from 'vitest';

import { detectIssues } from '../issues';
import { parseResearchLog } from './research-log';
import { parseTradeLog } from './trade-log';
import { parseWeeklyReview } from './weekly-review';

describe('dashboard parser contracts', () => {
  it('parses dated daily-summary EOD snapshots with positions', () => {
    const md = `# Trade Log

---

## 2026-04-20 — EOD Snapshot (Day 1, Monday)

**Equity:** 100.2% of start | **Cash:** 55.0% | **Day P&L:** +0.2% | **Phase P&L:** +0.2%

| Sym | Class  | Weight% | Entry  | Close  | Unrealized% | Stop   |
|-----|--------|---------|--------|--------|-------------|--------|
| AAPL| stocks |  20.0%  |$185.42 |$188.10 |    +1.4%    |$166.88 |
| BTC | crypto |  25.0%  |$75000  |$76000  |    -0.5%    |$67500  |

**Notes:** opened 2, closed 0.

_Internal (reconciliation only, not shown to user):_
- Virtual equity: $10,020.00
- Virtual cash: $5,511.00
- Opens this week: 2
- Real mirror (10%): $1,002.00

---

## Day 0 — EOD Snapshot (pre-launch baseline)

**Equity:** 100.0% of start | **Cash:** 100.0% | **Day P&L:** 0.0% | **Phase P&L:** 0.0%
`;

    const parsed = parseTradeLog(md);

    expect(parsed.snapshots).toHaveLength(2);
    expect(parsed.snapshots[1]).toMatchObject({
      day: 1,
      date: '2026-04-20',
      equityPct: 100.2,
      cashPct: 55,
      dayPnlPct: 0.2,
      phasePnlPct: 0.2,
      opensThisWeek: 2,
      note: 'opened 2, closed 0.',
    });
    expect(parsed.snapshots[1].positions).toEqual([
      { symbol: 'AAPL', assetClass: 'stocks', weightPct: 20, unrealizedPct: 1.4 },
      { symbol: 'BTC', assetClass: 'crypto', weightPct: 25, unrealizedPct: -0.5 },
    ]);
  });

  it('parses inline research decisions and none-today ideas', () => {
    const md = `# Research Log

---

### 2026-04-17 — Friday Pre-Market (08:00 ET refresh)

**Snapshot:** Equity 100.2% of start | Cash 100.0% | Open positions: 0 | Week opens so far: 0

**Trade ideas** (0-3 per day; HOLD is the default)
- **None today.** No catalyst.

**Decision:** **HOLD.** No new opens today.

---

## Template
`;

    const [entry] = parseResearchLog(md);

    expect(entry.decisionKind).toBe('HOLD');
    expect(entry.decision).toBe('HOLD. No new opens today.');
    expect(entry.tradeIdeas).toEqual([]);
  });

  it('ignores weekly placeholder rows when no positions are open', () => {
    const md = `# Weekly Review

---

### Week of 2026-04-13 → 2026-04-17

**Week return:** +0.2% | **S&P 500 week:** +1.1% | **Alpha:** −0.9%
**Phase-to-date return:** +0.2%
**Grade: B**

**Stats**
| Metric              | Value |
|---------------------|-------|
| Trades opened       |   0   |
| Trades closed       |   0*  |
| Win rate            |  n/a  |
| Best trade          |  n/a  |
| Worst trade         |  n/a  |
| Open positions EOW  |   0   |

**Closed trades**
| Symbol | Class | Hold | P&L % | Reason closed |
|--------|-------|------|-------|---------------|
| —      | —     | —    | —     | No closes.    |

**Open positions EOW**
| Symbol | Class | Weight% | Unrealized% | Stop |
|--------|-------|---------|-------------|------|
| —      | —     |   0%    |     —       |  —   |
`;

    const [entry] = parseWeeklyReview(md);

    expect(entry.returnPct).toBe(0.2);
    expect(entry.spxPct).toBe(1.1);
    expect(entry.alphaPct).toBe(-0.9);
    expect(entry.phaseToDatePct).toBe(0.2);
    expect(entry.stats).toEqual({ opened: 0, closed: 0, openEow: 0 });
    expect(entry.closed).toEqual([]);
    expect(entry.openEow).toEqual([]);
  });

  it('only detects missed routines on or after the first routine commit day', () => {
    const issues = detectIssues({
      events: [],
      trades: [],
      commits: [
        {
          sha: 'abc',
          ts: '2026-04-17T13:10:22Z',
          message: 'routine: pre-market 2026-04-17',
          routine: 'pre-market',
        },
      ],
      now: new Date('2026-04-20T22:00:00Z'),
    });

    expect(issues.some((i) => i.title.includes('2026-04-16'))).toBe(false);
    expect(issues.some((i) => i.title === 'daily-summary did not run on 2026-04-17')).toBe(true);
    expect(issues.some((i) => i.title === 'daily-summary did not run on 2026-04-20')).toBe(true);
  });
});
