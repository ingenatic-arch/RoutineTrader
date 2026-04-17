import type { ResearchEntry, ResearchSnapshot, TradeIdea } from '../../types/schema';

const DATE_HEADER =
  /^###\s+(\d{4}-\d{2}-\d{2})\s+—\s+([A-Za-z]+)\s+Pre-Market(?:\s*\(([^)]+)\))?\s*$/;

const SNAPSHOT_LINE =
  /\*\*Snapshot:\*\*\s*Equity\s+([+-]?[\d.]+)%[^|]*\|\s*Cash\s+([+-]?[\d.]+)%\s*\|\s*Open positions:\s*(\d+)\s*\|\s*Week opens so far:\s*(\d+)/i;

function splitSections(body: string): Map<string, string> {
  const sections = new Map<string, string>();
  const re = /^\*\*([^*]+)\*\*\s*$/gm;
  const matches: Array<{ name: string; start: number; end: number }> = [];
  let m: RegExpExecArray | null;
  while ((m = re.exec(body)) !== null) {
    matches.push({ name: m[1].trim(), start: m.index + m[0].length, end: body.length });
  }
  for (let i = 0; i < matches.length; i++) {
    matches[i].end = i + 1 < matches.length ? matches[i + 1].start - matches[i + 1].name.length - 4 : body.length;
    sections.set(matches[i].name.toLowerCase(), body.slice(matches[i].start, matches[i].end).trim());
  }
  return sections;
}

function parseTradeIdeas(md: string): TradeIdea[] {
  if (!md) return [];
  if (/^\s*\*\*?None today/i.test(md) || /No new opens|no new positions/i.test(md)) return [];

  const ideas: TradeIdea[] = [];
  const blocks = md.split(/\n(?=\d+\.\s+\*\*)/g);
  for (const block of blocks) {
    const header = block.match(/^\d+\.\s+\*\*([A-Z][A-Z0-9.]{0,9})\*\*(?:\s*\(([^)]+)\))?(?:\s*—\s*instrumentId[:\s]+`?([^`\s]+)`?)?/m);
    if (!header) continue;
    const [, symbol, assetClass, instrumentId] = header;
    const idea: TradeIdea = { symbol };
    if (assetClass) idea.assetClass = assetClass.trim();
    if (instrumentId) idea.instrumentId = instrumentId.trim();

    const grab = (label: string): string | undefined => {
      const rx = new RegExp(`^\\s*-\\s*${label}\\s*[:\\-]\\s*(.+)$`, 'im');
      return block.match(rx)?.[1]?.trim();
    };

    const entry = grab('Entry');
    const stop = grab('Stop(?:\\s*\\(−?-?\\d+%\\))?');
    const target = grab('Target(?:\\s*\\([^)]*\\))?');
    const size = grab('Size');
    const catalyst = grab('Catalyst');
    const rr = grab('R:R');

    if (entry) idea.entryText = entry;
    if (stop) idea.stopText = stop;
    if (target) idea.targetText = target;
    if (catalyst) idea.catalyst = catalyst;
    if (rr) idea.rr = rr;
    if (size) {
      const n = size.match(/([\d.]+)\s*%/);
      if (n) idea.sizePct = Number(n[1]);
    }

    ideas.push(idea);
  }
  return ideas;
}

/**
 * Strip any line containing a `$` character. The CLAUDE.md rule is
 * percentages-only in user-facing text; research narratives occasionally
 * quote dollar numbers (e.g. "credit: $10,020.59", "~$91.4 breakout"). We
 * drop those lines wholesale so nothing dollar-shaped reaches the rendered
 * page. The `check-no-dollars` CI gate enforces this at build time.
 */
function scrubDollarLines(md: string): string {
  if (!md) return md;
  return md
    .split('\n')
    .filter((line) => !line.includes('$'))
    .join('\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

function classifyDecision(decision: string): ResearchEntry['decisionKind'] {
  const d = decision.toUpperCase();
  if (/^HOLD\b/.test(d.trim())) return 'HOLD';
  if (/\bOPEN\b/.test(d)) return 'OPEN';
  if (/\bTRIM\b/.test(d)) return 'TRIM';
  return 'OTHER';
}

function isValidDate(s: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(s)) return false;
  const [y, m, d] = s.split('-').map(Number);
  if (m < 1 || m > 12 || d < 1 || d > 31) return false;
  return !Number.isNaN(new Date(s + 'T00:00:00Z').getTime());
}

export function parseResearchLog(md: string): ResearchEntry[] {
  // Strip out the Template section entirely — it uses literal `YYYY-MM-DD`.
  const templateIdx = md.search(/^##\s+Template/m);
  const content = templateIdx >= 0 ? md.slice(0, templateIdx) : md;

  const entries: ResearchEntry[] = [];
  const lines = content.split('\n');
  let current: { start: number; header: RegExpMatchArray } | null = null;

  const commit = (endLine: number) => {
    if (!current) return;
    const body = lines.slice(current.start + 1, endLine).join('\n').trim();
    const [, date, weekday] = current.header;
    if (!isValidDate(date)) {
      current = null;
      return;
    }
    const snapMatch = body.match(SNAPSHOT_LINE);
    const snapshot: ResearchSnapshot | null = snapMatch
      ? {
          equityPct: Number(snapMatch[1]),
          cashPct: Number(snapMatch[2]),
          openPositions: Number(snapMatch[3]),
          weekOpensSoFar: Number(snapMatch[4]),
        }
      : null;

    const sections = splitSections(body);
    const marketContextMd = sections.get('market context') ?? '';
    const holdingsCheckMd = sections.get('holdings check') ?? '';
    const tradeIdeasMd = sections.get('trade ideas') ?? sections.get('trade ideas (0–3 per day; hold is the default)') ?? '';
    const riskFactorsMd = sections.get('risk factors') ?? '';
    const decisionBlock = sections.get('decision') ?? '';
    const decision = decisionBlock.split('\n')[0]?.trim() ?? '';

    entries.push({
      date,
      weekday,
      rawHeader: lines[current.start],
      snapshot,
      marketContextMd: scrubDollarLines(marketContextMd),
      holdingsCheckMd: scrubDollarLines(holdingsCheckMd),
      tradeIdeas: parseTradeIdeas(tradeIdeasMd),
      riskFactorsMd: scrubDollarLines(riskFactorsMd),
      decision: scrubDollarLines(decision),
      decisionKind: classifyDecision(decision),
      bodyMd: scrubDollarLines(body),
    });
    current = null;
  };

  for (let i = 0; i < lines.length; i++) {
    const header = lines[i].match(DATE_HEADER);
    if (header) {
      commit(i);
      current = { start: i, header };
    }
  }
  commit(lines.length);

  entries.sort((a, b) => b.date.localeCompare(a.date));
  return entries;
}
