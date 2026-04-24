import type { EodSnapshot, OpenPosition, TradeEntry } from '../../types/schema';

const LEGACY_SNAPSHOT_HEADER = /^##\s+Day\s+(\d+)\s+—\s+EOD Snapshot(?:\s*\(([^)]+)\))?\s*$/m;
const DATED_SNAPSHOT_HEADER =
  /^##\s+(\d{4}-\d{2}-\d{2})\s+—\s+EOD Snapshot\s*\(Day\s+(\d+)(?:,\s*([^)]+))?\)\s*$/m;
const METRICS_LINE =
  /\*\*Equity:\*\*\s*([+−-]?[\d.]+)%[^|]*\|\s*\*\*Cash:\*\*\s*([+−-]?[\d.]+)%\s*\|\s*\*\*Day P&L:\*\*\s*([+−-]?[\d.]+)%\s*\|\s*\*\*Phase P&L:\*\*\s*([+−-]?[\d.]+)%/;

/**
 * Strip every dollar-sensitive construct from a block before returning it
 * as renderable text. The CLAUDE.md rule is that user-facing output must
 * be percentages only; this is the enforcement point.
 *
 * - Removes the fenced `_Internal (reconciliation only...)_` block and the
 *   bullet list that follows it.
 * - Removes any line containing a `$` sign as a defence-in-depth.
 */
function scrubDollars(block: string): string {
  const lines = block.split('\n');
  const out: string[] = [];
  let inInternal = false;
  for (const line of lines) {
    if (/^_Internal\s*\(reconciliation/i.test(line.trim())) {
      inInternal = true;
      continue;
    }
    if (inInternal) {
      if (line.trim() === '' && out.length && out[out.length - 1]?.trim() === '') {
        inInternal = false;
        continue;
      }
      if (/^-\s/.test(line.trim()) || line.trim() === '') {
        continue;
      }
      inInternal = false;
    }
    if (line.includes('$')) continue;
    out.push(line);
  }
  return out.join('\n').replace(/\n{3,}/g, '\n\n').trim();
}

function splitByRule(md: string): string[] {
  return md.split(/^\s*---\s*$/m).map((s) => s.trim()).filter(Boolean);
}

function pctOrUndefined(s?: string): number | undefined {
  if (!s) return undefined;
  const m = s.replace(/−/g, '-').match(/([+-]?[\d.]+)/);
  return m ? Number(m[1]) : undefined;
}

function splitTable(block: string): string[][] {
  const rows: string[][] = [];
  for (const raw of block.split('\n')) {
    const line = raw.trim();
    if (!line.startsWith('|')) continue;
    if (/^\|\s*:?-+/.test(line)) continue;
    const cells = line
      .replace(/^\||\|$/g, '')
      .split('|')
      .map((c) => c.trim());
    rows.push(cells);
  }
  return rows;
}

function isPlaceholder(s?: string): boolean {
  return !s || /^[-—…]+$/.test(s.trim());
}

function parseSnapshotHeader(block: string): Pick<EodSnapshot, 'day' | 'date' | 'note'> | null {
  const dated = block.match(DATED_SNAPSHOT_HEADER);
  if (dated) {
    const [, date, day, weekday] = dated;
    return {
      day: Number(day),
      date,
      ...(weekday ? { note: weekday.trim() } : {}),
    };
  }

  const legacy = block.match(LEGACY_SNAPSHOT_HEADER);
  if (!legacy) return null;
  const [, day, note] = legacy;
  return {
    day: Number(day),
    ...(note ? { note: note.trim() } : {}),
  };
}

function parseSnapshotPositions(block: string): OpenPosition[] | undefined {
  const rows = splitTable(block);
  const headerIdx = rows.findIndex((r) => /^sym(?:bol)?$/i.test(r[0] ?? ''));
  if (headerIdx < 0) return undefined;

  const positions: OpenPosition[] = [];
  for (const r of rows.slice(headerIdx + 1)) {
    const symbol = r[0]?.trim();
    if (isPlaceholder(symbol)) continue;
    const weightPct = pctOrUndefined(r[2]);
    if (weightPct === undefined || weightPct <= 0) continue;

    const position: OpenPosition = { symbol };
    if (!isPlaceholder(r[1])) position.assetClass = r[1];
    position.weightPct = weightPct;
    const unrealizedPct = pctOrUndefined(r[5]);
    if (unrealizedPct !== undefined) position.unrealizedPct = unrealizedPct;

    // Keep dollar-denominated stop prices out of serialized dashboard props.
    if (r[6] && !r[6].includes('$') && !isPlaceholder(r[6])) position.stop = r[6];
    positions.push(position);
  }
  return positions;
}

function parseNote(block: string, fallback?: string): string | undefined {
  const notes = block.match(/\*\*Notes:\*\*\s*([\s\S]*?)(?:\n\n|$)/i)?.[1]?.trim();
  const clean = scrubDollars(notes ?? '').replace(/\*\*/g, '').trim();
  return clean || fallback;
}

function parseSnapshotBlock(block: string): EodSnapshot | null {
  const header = parseSnapshotHeader(block);
  if (!header) return null;
  const metrics = block.match(METRICS_LINE);
  if (!metrics) return null;
  const [, equityPct, cashPct, dayPnlPct, phasePnlPct] = metrics;
  const equityValue = pctOrUndefined(equityPct);
  const cashValue = pctOrUndefined(cashPct);
  const dayPnlValue = pctOrUndefined(dayPnlPct);
  const phasePnlValue = pctOrUndefined(phasePnlPct);
  if (
    equityValue === undefined ||
    cashValue === undefined ||
    dayPnlValue === undefined ||
    phasePnlValue === undefined
  ) {
    return null;
  }
  const opensThisWeek = block.match(/-\s*Opens this week:\s*(\d+)/i)?.[1];
  const positions = parseSnapshotPositions(block);
  const note = parseNote(block, header.note);
  return {
    day: header.day,
    ...(header.date ? { date: header.date } : {}),
    equityPct: equityValue,
    cashPct: cashValue,
    dayPnlPct: dayPnlValue,
    phasePnlPct: phasePnlValue,
    ...(opensThisWeek ? { opensThisWeek: Number(opensThisWeek) } : {}),
    ...(positions !== undefined ? { positions } : {}),
    ...(note ? { note } : {}),
  };
}

/**
 * Trade-entry blocks (written by market-open / midday routines). Current
 * TRADE-LOG has none yet; this is a best-effort parser keyed off `**SYMBOL**`
 * or explicit open/close/partial markers. It will evolve with the format.
 */
function parseTradeEntries(tail: string): TradeEntry[] {
  const entries: TradeEntry[] = [];
  const blocks = tail.split(/\n(?=###\s|####\s|\*\*\w+\*\*\s)/g);
  for (const raw of blocks) {
    const body = scrubDollars(raw).trim();
    if (!body) continue;
    const symMatch =
      body.match(/^###\s+(\d{4}-\d{2}-\d{2})\s+—\s+(OPEN|CLOSE|PARTIAL|MIDDAY ACTIONS)\s+([A-Z][A-Z0-9.]{0,9})/im) ??
      body.match(/\*\*([A-Z][A-Z0-9.]{0,9})\*\*/);
    if (!symMatch) continue;
    const headingSide = symMatch.length >= 4 ? symMatch[2]?.toLowerCase() : '';
    const symbol = symMatch.length >= 4 ? symMatch[3] : symMatch[1];
    const lower = body.toLowerCase();
    let side: TradeEntry['side'] = 'unknown';
    if (headingSide === 'open' || /\bopened?\b|\bopen\s+long\b|\bbuy\b/.test(lower)) side = 'open';
    else if (headingSide === 'close' || /\bclosed?\b|\bexited?\b|\bsold\b/.test(lower)) side = 'close';
    else if (headingSide === 'partial' || /\bpartial|\btrim/.test(lower)) side = 'partial';

    const dateMatch = body.match(/\b(\d{4}-\d{2}-\d{2})\b/);
    const sizeMatch = body.match(/(?:Size|amount_pct_equity)[:\s]+([\d.]+)%/i);
    const pnlMatch = body.match(/(?:P&L|realized|unrealized)[:\s]+([+-]?[\d.]+)%/i);
    const reasonMatch = body.match(/(?:Reason(?:\s+closed)?|reason):\s*(.+)$/im);

    entries.push({
      symbol,
      side,
      body,
      ...(dateMatch ? { date: dateMatch[1] } : {}),
      ...(sizeMatch ? { sizePct: Number(sizeMatch[1]) } : {}),
      ...(pnlMatch ? { pnlPct: Number(pnlMatch[1]) } : {}),
      ...(reasonMatch ? { reason: reasonMatch[1].trim() } : {}),
    });
  }
  return entries;
}

export interface TradeLogParseResult {
  snapshots: EodSnapshot[];
  trades: TradeEntry[];
}

export function parseTradeLog(md: string): TradeLogParseResult {
  const blocks = splitByRule(md);
  const snapshotBlocks: Array<{ snapshot: EodSnapshot; sourceIndex: number }> = [];
  let tradeEntriesTail = '';

  for (const [sourceIndex, block] of blocks.entries()) {
    if (parseSnapshotHeader(block)) {
      const snap = parseSnapshotBlock(block);
      if (snap) snapshotBlocks.push({ snapshot: snap, sourceIndex });
      continue;
    }
    if (/^##\s+Trade entries/m.test(block)) {
      tradeEntriesTail = block.replace(/^##\s+Trade entries[\s\S]*?\n\n/, '');
      continue;
    }
  }

  const trades = tradeEntriesTail ? parseTradeEntries(tradeEntriesTail) : [];
  const snapshots = snapshotBlocks
    .sort((a, b) => a.snapshot.day - b.snapshot.day || b.sourceIndex - a.sourceIndex)
    .map(({ snapshot }) => snapshot);
  return { snapshots, trades };
}

export { scrubDollars };
