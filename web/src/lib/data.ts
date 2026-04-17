import { readFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

import type { DashboardData, CommitRecord } from '../types/schema';
import { parseTradeLog } from './parsers/trade-log';
import { parseResearchLog } from './parsers/research-log';
import { parseWeeklyReview } from './parsers/weekly-review';
import { parseEventsLog } from './parsers/events-log';
import { detectIssues } from './issues';

const HERE = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = resolve(HERE, '..', '..', '..');
const MEMORY = resolve(REPO_ROOT, 'memory');
const COMMITS_JSON = resolve(HERE, '..', 'data', 'commits.json');

function readOrEmpty(path: string): string {
  try {
    return readFileSync(path, 'utf8');
  } catch {
    return '';
  }
}

function readCommits(): CommitRecord[] {
  if (!existsSync(COMMITS_JSON)) return [];
  try {
    const raw = readFileSync(COMMITS_JSON, 'utf8');
    const parsed = JSON.parse(raw) as CommitRecord[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

let cached: DashboardData | null = null;

export function loadAll(): DashboardData {
  if (cached) return cached;

  const tradeLog = readOrEmpty(resolve(MEMORY, 'TRADE-LOG.md'));
  const researchLog = readOrEmpty(resolve(MEMORY, 'RESEARCH-LOG.md'));
  const weeklyReview = readOrEmpty(resolve(MEMORY, 'WEEKLY-REVIEW.md'));
  const eventsLog = readOrEmpty(resolve(MEMORY, 'EVENTS-LOG.md'));
  const strategyMd = readOrEmpty(resolve(MEMORY, 'TRADING-STRATEGY.md'));

  const { snapshots, trades } = parseTradeLog(tradeLog);
  const research = parseResearchLog(researchLog);
  const weekly = parseWeeklyReview(weeklyReview);
  const events = parseEventsLog(eventsLog);
  const commits = readCommits();
  const issues = detectIssues({ commits, events, trades });

  cached = {
    snapshots,
    trades,
    research,
    weekly,
    events,
    commits,
    issues,
    strategyMd,
    buildTs: new Date().toISOString(),
    latestSnapshot: snapshots[snapshots.length - 1] ?? null,
    latestResearch: research[0] ?? null,
  };
  return cached;
}
