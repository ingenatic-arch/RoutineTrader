/**
 * Returns a dollar-scrubbed summary of the trading strategy.
 * We do NOT render the full file in the UI because prose may contain
 * dollar references that the no-dollars CI gate would flag.
 * Instead we pull the headers + top-level bullets for a "Rules at a glance"
 * sidebar and keep everything dollar-bearing off the page.
 */
export function summarizeStrategy(md: string): { headings: string[]; topBullets: string[] } {
  const headings: string[] = [];
  const topBullets: string[] = [];
  for (const raw of md.split('\n')) {
    const line = raw.trim();
    if (!line) continue;
    if (line.startsWith('$')) continue;
    if (line.includes('$')) continue;
    if (/^#{2,3}\s+/.test(line)) {
      headings.push(line.replace(/^#+\s+/, ''));
    } else if (/^[-*]\s+/.test(line) && topBullets.length < 12) {
      topBullets.push(line.replace(/^[-*]\s+/, ''));
    }
  }
  return { headings, topBullets };
}
