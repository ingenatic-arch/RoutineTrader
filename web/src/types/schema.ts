export type RoutineName =
  | 'pre-market'
  | 'market-open'
  | 'midday'
  | 'daily-summary'
  | 'weekly-review';

export type EventStatus = 'ok' | 'warn' | 'alert' | 'abort';

export interface EodSnapshot {
  day: number;
  date?: string;
  equityPct: number;
  cashPct: number;
  dayPnlPct: number;
  phasePnlPct: number;
  note?: string;
}

export interface TradeEntry {
  date?: string;
  side: 'open' | 'close' | 'partial' | 'unknown';
  symbol: string;
  sizePct?: number;
  pnlPct?: number;
  reason?: string;
  body: string;
}

export interface TradeIdea {
  symbol: string;
  assetClass?: string;
  instrumentId?: string;
  catalyst?: string;
  entryText?: string;
  stopText?: string;
  targetText?: string;
  sizePct?: number;
  rr?: string;
}

export interface ResearchSnapshot {
  equityPct: number;
  cashPct: number;
  openPositions: number;
  weekOpensSoFar: number;
}

export interface ResearchEntry {
  date: string;
  weekday: string;
  rawHeader: string;
  snapshot: ResearchSnapshot | null;
  marketContextMd: string;
  holdingsCheckMd: string;
  tradeIdeas: TradeIdea[];
  riskFactorsMd: string;
  decision: string;
  decisionKind: 'HOLD' | 'OPEN' | 'TRIM' | 'OTHER';
  bodyMd: string;
}

export interface ClosedTrade {
  symbol: string;
  assetClass?: string;
  holdDays?: string;
  pnlPct?: number;
  reason?: string;
}

export interface OpenPosition {
  symbol: string;
  assetClass?: string;
  weightPct?: number;
  unrealizedPct?: number;
  stop?: string;
}

export interface WeeklyStats {
  opened: number;
  closed: number;
  winRatePct: number;
  bestPct: number;
  worstPct: number;
  avgHoldDays: number;
  profitFactor: number;
  openEow: number;
}

export interface WeeklyReview {
  weekStart: string;
  weekEnd: string;
  returnPct: number;
  spxPct: number;
  alphaPct: number;
  phaseToDatePct: number;
  grade: 'A' | 'B' | 'C' | 'D' | 'F' | null;
  stats: Partial<WeeklyStats>;
  closed: ClosedTrade[];
  openEow: OpenPosition[];
  worked: string[];
  didnt: string[];
  lessons: string[];
  adjustments: string[];
  bodyMd: string;
}

export interface EventEntry {
  ts: string;
  routine: string;
  status: EventStatus;
  message: string;
  raw: string;
}

export interface CommitRecord {
  sha: string;
  ts: string;
  message: string;
  routine?: RoutineName;
}

export interface IssueItem {
  id: string;
  severity: 'info' | 'warn' | 'alert';
  kind: 'missed-routine' | 'stop-loss' | 'thesis-break' | 'event' | 'cap-warning';
  ts: string;
  title: string;
  detail: string;
  source?: string;
}

export interface DashboardData {
  snapshots: EodSnapshot[];
  trades: TradeEntry[];
  research: ResearchEntry[];
  weekly: WeeklyReview[];
  events: EventEntry[];
  commits: CommitRecord[];
  issues: IssueItem[];
  strategyMd: string;
  buildTs: string;
  latestSnapshot: EodSnapshot | null;
  latestResearch: ResearchEntry | null;
}
