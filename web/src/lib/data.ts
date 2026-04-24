import { readFileSync, existsSync } from 'node:fs';
import { basename, resolve } from 'node:path';

import type { DashboardData, CommitRecord } from '../types/schema';
import { parseTradeLog } from './parsers/trade-log';
import { parseResearchLog } from './parsers/research-log';
import { parseWeeklyReview } from './parsers/weekly-review';
import { parseEventsLog } from './parsers/events-log';
import { detectIssues } from './issues';

const CWD = process.cwd();
const REPO_ROOT = basename(CWD) === 'web' ? resolve(CWD, '..') : resolve(CWD);
const MEMORY = resolve(REPO_ROOT, 'memory');
const COMMITS_JSON = resolve(REPO_ROOT, 'web', 'src', 'data', 'commits.json');

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
  const latestSnapshot = snapshots[snapshots.length - 1] ?? null;
  const currentPositions = latestSnapshot?.positions ?? weekly[0]?.openEow ?? [];

  cached = {
    snapshots,
    trades,
    currentPositions,
    research,
    weekly,
    events,
    commits,
    issues,
    strategyMd,
    buildTs: new Date().toISOString(),
    latestSnapshot,
    latestResearch: research[0] ?? null,
  };
  return cached;
}
