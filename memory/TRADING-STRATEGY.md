# Trading Strategy — RoutineTrader (eToro Agent-Portfolio)

## Mission
Beat a 60/40 stock/crypto benchmark over the challenge window. Aggressive but
disciplined — patience > activity.

## Capital & Platform
- **Agent-portfolio virtual balance: $10,000.00** (fixed by eToro, not editable)
- **User real investment: $1,000.00** (mirrors the portfolio at 10% proportional sizing)
- Platform: eToro Public API v1, agent-portfolio scope (`real:write`, scopeId 202)
- All sizing math runs against the **$10k virtual equity** (from `/trading/info/real/pnl`).
- Universe: US-listed stocks, ETFs, crypto, commodities, forex, major indices.
  Restricted per-run by sector / asset-class caps below.

## User-facing numbers rule (NON-NEGOTIABLE)
- **NEVER show absolute dollars to the user.**
- Use percentages of equity: `+2.1%` not `+$34.70`, `75% cash` not `$7,500`,
  `invest 20% in AAPL` not `$2,000 in AAPL`.
- Internal calculations + `TRADE-LOG.md` keep dollar amounts for reconciliation
  (tomorrow's Day P&L math needs a dollar baseline).
- ClickUp messages, weekly review grades, anything the human reads → **percentages only**.

## Core Rules (hard guardrails — enforce in code path, not prose)
1. **Leverage = 1 always.** No CFDs, no options-equivalents, no leveraged products.
2. **Longs only.** `IsBuy: true`. Shorts require explicit strategy opt-in (not v1).
3. Max **5–6 open positions** simultaneously.
4. Max **20% of equity per position** ($2,000 virtual / $200 real mirror).
5. Max **50% per asset class** (stocks, crypto, commodities, forex, indices).
   Prevents crypto runaway when it ranks well.
6. Target **75–85% deployed**, **15–25% cash buffer** at all times.
7. **`StopLossRate` set at position open** — 10% below entry ask (server-side,
   24/7, survives market close).
8. **Manual exit at −7% unrealized** via midday scan (backstop ahead of the
   server stop; catches crypto weekend gaps).
9. **Thesis-exit overrides** the stop — if the catalyst is broken or the sector
   is rolling, close even above −7%.
10. Max **3 new position opens per week** (Mon–Fri).
11. Exit a sector / asset-class after 2 consecutive losers in it — cool off a week.
12. Patience > activity. Zero-trade weeks are fine. HOLD is the default action.

## Pre-buy gate (ALL must pass before any open order)
- [ ] Positions-after-fill ≤ 6
- [ ] Opens-this-week + 1 ≤ 3
- [ ] Position cost ≤ 20% of virtual equity
- [ ] Cost ≤ available cash **AND** leaves ≥ 5% cash buffer
- [ ] Asset-class exposure after fill ≤ 50%
- [ ] Catalyst documented in **today's** RESEARCH-LOG entry
- [ ] Exact `internalSymbolFull` match returned by `/market-data/search`
  (reject ambiguous / partial matches — never hardcode instrument IDs)
- [ ] Order body: `Leverage: 1`, `IsBuy: true`, `StopLossRate` set, no optional fields

## Sell rules
- **`unrealized_plpc ≤ -7%`** → full close + log reason `"rule cut"`.
- **Thesis broken** (catalyst gone, sector rolling, earnings miss, geopol) → full close + log reason.
- **Asset-class > 50%** → partial close the largest in that class back to ≤ 45% via
  `close-partial PID IID UNITS` (compute UNITS to trim proportionally).

## Entry checklist (write into RESEARCH-LOG before every open)
- Catalyst today? (earnings / macro / sector flow)
- Sector / asset class in momentum?
- Stop level (10% below entry ask)?
- Target (min 2:1 R:R)?
- Exact `instrumentId` (from `/market-data/search`)?
- Asset class + current class exposure?

## Rate-limit + cache hygiene (read at the start of every routine)
- **Reads**: 60 / min. Space reads naturally — don't burst.
- **Writes**: 20 / min. Space **≥ 3 seconds** between any two write calls
  (`etoro.sh open|close|close-partial` already sleeps 3s internally).
- On HTTP **429**: sleep **15 → 30 → 60** seconds; if third attempt still fails, abort the batch.
- **PnL cache: 60 seconds.** After ANY close, `sleep 60` before the next `pnl` call.
  Otherwise you'll see stale position data and over-trade.

## Key-type sanity check (run first, every routine)
- `bash scripts/etoro.sh key-check` → expect `KEY=agent`.
- `KEY=main` → the token can enumerate owned portfolios, so it's a **main-account
  key** — **ABORT**. Wrong scope; will move real money if you trade with it.
- `KEY=unknown` → transient 5xx or unexpected API response — ABORT, retry next cron.
- (Internals: the wrapper inspects `GET /agent-portfolios`. HTTP 403, or HTTP 200
  with an empty `agentPortfolios` list, both indicate the token is scoped to a
  single portfolio — safe to trade.)
