import type { EodSnapshot, TradeEntry } from '../../types/schema';

const SNAPSHOT_HEADER = /^##\s+Day\s+(\d+)\s+—\s+EOD Snapshot(?:\s*\(([^)]+)\))?\s*$/m;
const METRICS_LINE =
  /\*\*Equity:\*\*\s*([+-]?[\d.]+)%[^|]*\|\s*\*\*Cash:\*\*\s*([+-]?[\d.]+)%\s*\|\s*\*\*Day P&L:\*\*\s*([+-]?[\d.]+)%\s*\|\s*\*\*Phase P&L:\*\*\s*([+-]?[\d.]+)%/;

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

function parseSnapshotBlock(block: string): EodSnapshot | null {
  const header = block.match(SNAPSHOT_HEADER);
  if (!header) return null;
  const day = Number(header[1]);
  const note = header[2]?.trim();
  const metrics = block.match(METRICS_LINE);
  if (!metrics) return null;
  const [, equityPct, cashPct, dayPnlPct, phasePnlPct] = metrics;
  return {
    day,
    equityPct: Number(equityPct),
    cashPct: Number(cashPct),
    dayPnlPct: Number(dayPnlPct),
    phasePnlPct: Number(phasePnlPct),
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
    const symMatch = body.match(/\*\*([A-Z][A-Z0-9.]{0,9})\*\*/);
    if (!symMatch) continue;
    const lower = body.toLowerCase();
    let side: TradeEntry['side'] = 'unknown';
    if (/\bopened?\b|\bopen\s+long\b|\bbuy\b/.test(lower)) side = 'open';
    else if (/\bclosed?\b|\bexited?\b|\bsold\b/.test(lower)) side = 'close';
    else if (/\bpartial|\btrim/.test(lower)) side = 'partial';

    const dateMatch = body.match(/\b(\d{4}-\d{2}-\d{2})\b/);
    const sizeMatch = body.match(/Size[:\s]+([\d.]+)%/i);
    const pnlMatch = body.match(/P&L[:\s]+([+-]?[\d.]+)%/i);
    const reasonMatch = body.match(/Reason(?:\s+closed)?:\s*(.+)$/im);

    entries.push({
      symbol: symMatch[1],
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
  const snapshots: EodSnapshot[] = [];
  let tradeEntriesTail = '';

  for (const block of blocks) {
    if (SNAPSHOT_HEADER.test(block)) {
      const snap = parseSnapshotBlock(block);
      if (snap) snapshots.push(snap);
      continue;
    }
    if (/^##\s+Trade entries/m.test(block)) {
      tradeEntriesTail = block.replace(/^##\s+Trade entries[\s\S]*?\n\n/, '');
      continue;
    }
  }

  const trades = tradeEntriesTail ? parseTradeEntries(tradeEntriesTail) : [];
  snapshots.sort((a, b) => a.day - b.day);
  return { snapshots, trades };
}

export { scrubDollars };
