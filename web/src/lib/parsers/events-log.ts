import type { EventEntry, EventStatus } from '../../types/schema';

const STATUSES: EventStatus[] = ['ok', 'warn', 'alert', 'abort'];

function normalizeStatus(s: string): EventStatus {
  const lower = s.trim().toLowerCase();
  if ((STATUSES as string[]).includes(lower)) return lower as EventStatus;
  if (/err|fail|crash/.test(lower)) return 'alert';
  return 'ok';
}

export function parseEventsLog(md: string): EventEntry[] {
  if (!md) return [];
  const entries: EventEntry[] = [];
  const lines = md.split('\n');
  for (const raw of lines) {
    const line = raw.trim();
    if (!line || line.startsWith('#') || line.startsWith('<!--')) continue;
    if (!line.includes('|')) continue;
    const parts = line.split('|').map((p) => p.trim());
    if (parts.length < 4) continue;
    const [ts, routine, status, ...rest] = parts;
    if (!/^\d{4}-\d{2}-\d{2}T/.test(ts)) continue;
    entries.push({
      ts,
      routine,
      status: normalizeStatus(status),
      message: rest.join(' | '),
      raw: line,
    });
  }
  entries.sort((a, b) => b.ts.localeCompare(a.ts));
  return entries;
}
