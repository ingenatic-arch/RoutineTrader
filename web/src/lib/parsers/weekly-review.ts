import type {
  ClosedTrade,
  OpenPosition,
  WeeklyReview,
  WeeklyStats,
} from '../../types/schema';

const WEEK_HEADER =
  /^###\s+Week of\s+(\d{4}-\d{2}-\d{2})\s*(?:→|->)\s*(\d{4}-\d{2}-\d{2})\s*$/;

const HEADER_LINE =
  /\*\*Week return:\*\*\s*([+-]?[\d.]+)%\s*\|\s*\*\*S&P 500 week:\*\*\s*([+-]?[\d.]+)%\s*\|\s*\*\*Alpha:\*\*\s*([+-]?[\d.]+)%/;

const PHASE_LINE = /\*\*Phase-to-date return:\*\*\s*([+-]?[\d.]+)%/;
const GRADE_LINE = /\*\*Grade:\s*([A-F])\*\*/;

function splitTable(block: string): string[][] {
  const rows: string[][] = [];
  for (const raw of block.split('\n')) {
    const line = raw.trim();
    if (!line.startsWith('|')) continue;
    if (/^\|\s*:?-+/.test(line)) continue; // separator row
    const cells = line
      .replace(/^\||\|$/g, '')
      .split('|')
      .map((c) => c.trim());
    rows.push(cells);
  }
  return rows;
}

function pctOrUndefined(s?: string): number | undefined {
  if (!s) return undefined;
  const m = s.replace(/−/g, '-').match(/([+-]?[\d.]+)/);
  return m ? Number(m[1]) : undefined;
}

function parseStatsTable(md: string): Partial<WeeklyStats> {
  const rows = splitTable(md);
  const stats: Partial<WeeklyStats> = {};
  for (const [metric, value] of rows.slice(1)) {
    if (!metric || !value || /^x+%?$/i.test(value)) continue;
    const num = Number(value.replace(/[^0-9.+-]/g, ''));
    if (Number.isNaN(num)) continue;
    const m = metric.toLowerCase();
    if (/opened/.test(m)) stats.opened = num;
    else if (/closed/.test(m)) stats.closed = num;
    else if (/win rate/.test(m)) stats.winRatePct = num;
    else if (/best/.test(m)) stats.bestPct = num;
    else if (/worst/.test(m)) stats.worstPct = num;
    else if (/avg hold/.test(m)) stats.avgHoldDays = num;
    else if (/profit factor/.test(m)) stats.profitFactor = num;
    else if (/open positions/.test(m)) stats.openEow = num;
  }
  return stats;
}

function parseClosed(md: string): ClosedTrade[] {
  const rows = splitTable(md).slice(1);
  const trades: ClosedTrade[] = [];
  for (const r of rows) {
    if (!r[0] || r[0] === '…') continue;
    const t: ClosedTrade = { symbol: r[0] };
    if (r[1]) t.assetClass = r[1];
    if (r[2]) t.holdDays = r[2];
    const pnl = pctOrUndefined(r[3]);
    if (pnl !== undefined) t.pnlPct = pnl;
    if (r[4]) t.reason = r[4];
    trades.push(t);
  }
  return trades;
}

function parseOpen(md: string): OpenPosition[] {
  const rows = splitTable(md).slice(1);
  const positions: OpenPosition[] = [];
  for (const r of rows) {
    if (!r[0] || r[0] === '…') continue;
    const p: OpenPosition = { symbol: r[0] };
    if (r[1]) p.assetClass = r[1];
    const w = pctOrUndefined(r[2]);
    if (w !== undefined) p.weightPct = w;
    const u = pctOrUndefined(r[3]);
    if (u !== undefined) p.unrealizedPct = u;
    if (r[4]) p.stop = r[4];
    positions.push(p);
  }
  return positions;
}

function collectBullets(md: string): string[] {
  return md
    .split('\n')
    .map((l) => l.trim())
    .filter((l) => l.startsWith('- ') && !/^-\s*…\s*$/.test(l))
    .map((l) => l.replace(/^-\s+/, ''))
    .filter((l) => !l.includes('$'));
}

// Drop any line that contains `$` so the percentages-only rule survives
// island serialization. AlphaVsSpx receives the whole weekly[] array as a
// React prop — if a body contains "$10,020.59" (from the routine's Context
// paragraph) it would be serialized into the HTML even though nothing
// renders it. Scrub at parse time to keep rendered payloads clean.
function scrubDollarLines(md: string): string {
  if (!md) return md;
  return md
    .split('\n')
    .filter((line) => !line.includes('$'))
    .join('\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

function extractSection(body: string, label: string): string {
  const re = new RegExp(`\\*\\*${label}\\*\\*[^\\n]*\\n([\\s\\S]*?)(?=\\n\\*\\*[A-Z]|\\n###|$)`, 'i');
  return body.match(re)?.[1]?.trim() ?? '';
}

export function parseWeeklyReview(md: string): WeeklyReview[] {
  const templateIdx = md.search(/^##\s+Template/m);
  const content = templateIdx >= 0 ? md.slice(0, templateIdx) : md;

  const entries: WeeklyReview[] = [];
  const lines = content.split('\n');
  let current: { start: number; match: RegExpMatchArray } | null = null;

  const commit = (end: number) => {
    if (!current) return;
    const body = lines.slice(current.start + 1, end).join('\n').trim();
    const [, weekStart, weekEnd] = current.match;
    if (!/^\d{4}-\d{2}-\d{2}$/.test(weekStart) || !/^\d{4}-\d{2}-\d{2}$/.test(weekEnd)) {
      current = null;
      return;
    }
    const hdr = body.match(HEADER_LINE);
    const phase = body.match(PHASE_LINE);
    const grade = body.match(GRADE_LINE);

    const statsMd = extractSection(body, 'Stats');
    const closedMd = extractSection(body, 'Closed trades');
    const openMd = extractSection(body, 'Open positions EOW');
    const workedMd = extractSection(body, 'What worked');
    const didntMd = extractSection(body, "What didn't");
    const lessonsMd = extractSection(body, 'Lessons');
    const adjustmentsMd = extractSection(body, 'Adjustments for next week');

    entries.push({
      weekStart,
      weekEnd,
      returnPct: hdr ? Number(hdr[1]) : NaN,
      spxPct: hdr ? Number(hdr[2]) : NaN,
      alphaPct: hdr ? Number(hdr[3]) : NaN,
      phaseToDatePct: phase ? Number(phase[1]) : NaN,
      grade: grade ? (grade[1] as WeeklyReview['grade']) : null,
      stats: parseStatsTable(statsMd),
      closed: parseClosed(closedMd),
      openEow: parseOpen(openMd),
      worked: collectBullets(workedMd),
      didnt: collectBullets(didntMd),
      lessons: collectBullets(lessonsMd),
      adjustments: collectBullets(adjustmentsMd),
      bodyMd: scrubDollarLines(body),
    });
    current = null;
  };

  for (let i = 0; i < lines.length; i++) {
    const m = lines[i].match(WEEK_HEADER);
    if (m) {
      commit(i);
      current = { start: i, match: m };
    }
  }
  commit(lines.length);

  entries.sort((a, b) => b.weekStart.localeCompare(a.weekStart));
  return entries;
}
