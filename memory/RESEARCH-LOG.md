# Research Log

Dated pre-market research entries written by the `pre-market` routine.
Most-recent at the top. Each entry is the basis for any trade decision in the
`market-open` routine that day — no entry today = no new positions today.

---

### 2026-04-20 — Monday Pre-Market (08:00 ET)

**Snapshot:** Equity 100.2% of start | Cash 100.0% | Open positions: 0 | Week opens so far: 0 (fresh week)

**Market context** (as-of 2026-04-20 ~08:00 ET, percentages only)
- S&P 500 futures (ES Jun-2026): **7119.00, −0.59% overnight** (−42.50 pts). Soft open expected.
- VIX / US 10Y: no fresh overnight print available (Perplexity source thin); last-known baselines from Friday are VIX ~17.7 and 10Y ~4.30%. Treat as carry-forward until cash-market opens.
- **WTI crude: big bearish re-rate.** May futures closed **−11.45% Friday** and sit in the **$83–86** range on reports the Strait of Hormuz has reopened to commercial traffic. Forecasts now target $76–78. This **contradicts** last Thursday's working thesis of an Iran-truce expiry around April 21 driving oil higher — the de-escalation headline already happened and the commodity has re-priced. Energy sector setups built on "Iran premium" are void.
- DXY: no current print available; carry-forward ~98.2.
- BTC: ~+0%, stable near **$74–75k**. ETH: near-flat at **~$2,300**. ETH/BTC ratio ~0.0313 (three-month high; ETH still relatively stronger). Weekend was quiet, no new regulatory / ETF headlines of note. BTC YTD −19%, ETH YTD −27% (context: crypto still in Extreme-Fear regime).
- Today's catalysts: **no confirmed pre-open earnings** and **no top-tier macro releases** scheduled for April 20. Bank-earnings tail (BAC / MS) reports "this week" but the specific day is not confirmed for Monday. Light tape.
- Sector momentum (5-day to 4/17 close): **XLK −2.2%** (Lagging), **XLE +0.6%** (still Leading YTD but now under pressure from the oil crash), **XLF −0.3%** (Lagging), **XLI −0.7%** (still Leading despite the dip), XLV Weakening (no 5-day print). Rotation signals: flight-to-safety building — **XLP making new highs**, XLU improving. This matches 2000/2007-style defensive leadership patterns called out by sector-rotation screens.
- Geopolitics: Strait of Hormuz reopening is the dominant weekend story. Iran-US "truce expiry" narrative that headlined last Thursday is no longer live — the market has already digested the de-escalation. No other fresh macro/regulatory wildcards.

**Holdings check**
- No open positions. Nothing to evaluate.

**Trade ideas** (0–5 per day; HOLD is default when no idea clears the gate)
- **None today.** Rationale:
  1. **No catalyst today.** Pre-buy gate requires a catalyst documented in today's RESEARCH-LOG entry. Sector rotation (defensives leading) is a multi-day theme, not a Monday-specific trigger. BAC/MS earnings are "this week" but unconfirmed for today.
  2. **Soft open into an empty calendar** is the worst setup to chase: a −0.6% futures drift on no news often drags through the first hour, then reverses on thin flows.
  3. **Energy thesis reversed over the weekend.** The working assumption into Thursday was Iran-premium tailwinds; the Hormuz reopening killed that. XLE / XOM / CVX are still YTD leaders but now fighting a −11% WTI gap — not a clean long-side setup.
  4. **Defensive ETFs (XLP, XLU) are legitimate watchlist items** but chasing them on Monday after a week of leadership isn't A-grade — entry is extended and there's no fresh catalyst today. Better read mid-week if rotation persists.
  5. **Crypto** is range-bound with no catalyst; Extreme-Fear regime without a trigger is averaging-into-downtrend, not a setup.

**Watchlist for the rest of the week**
- **XLP / XLU** — defensive rotation continuation. Confirmation signal: XLP new high holding with XLK continuing to lag. Re-evaluate Tuesday pre-market.
- **BAC and MS earnings** — bank-earnings tail. Last week's prints (JPM +13%, WFC, C, BLK beats) set a bullish bar. If confirmed for Tuesday/Wednesday, set up a pre-open long with a tight stop.
- **Energy re-test** — if WTI stabilizes ≥ $82 after the Hormuz flush, XLE could offer a mean-reversion long, but not today.

**Risk factors**
- **Cash drag.** Account is at 100% cash vs strategy's 5–10% buffer target. Acceptable for the moment — deliberate dry-powder posture into a no-catalyst session — but another no-catalyst day on Tuesday with no earnings confirmation will push the "patience vs inaction" balance toward needing to deploy on any B+ setup.
- **Fed / yield surprise.** 10Y print is stale; any sudden move in yields on a low-news Monday could drive sector rotation in either direction.
- **Oil second leg.** If WTI breaks $82 intraday, expect energy equities to extend down and broader cyclicals to follow.
- **Bank-earnings surprise.** A BAC or MS miss this week (unconfirmed Monday timing) would shift the "financials lagging" note from noise into confirmation.

**Decision:** **HOLD.** No new opens today. No trims required (account is flat). Opens-this-week stays at 0; budget resets fresh today — still 5 available through Friday.

---

### 2026-04-17 — Friday Pre-Market (08:00 ET refresh)

**Snapshot:** Equity 100.2% of start | Cash 100.0% | Open positions: 0 | Week opens so far: 0 (net of one round-trip on SPY+QQQ — see "Resolved" below)

**Resolved from earlier entry**
- The two pre-cron anomaly positions flagged earlier (SPY 35% and QQQ 30%, both with `stopLossRate=0.0001`) are no longer on the account. `pnl` now returns `positions: []`, `credit: $10,020.59`. The cap and broken-stop violations are cleared; equity sits ~+0.2% vs $10k baseline. TRADE-LOG still shows Day 0 only — the closes were not logged through the routines (manual or platform-side action). **Action:** `daily-summary` should reconcile today and add the missing trade entries; pre-market does not write to TRADE-LOG.

**Market context** (as-of 2026-04-17 ~08:00 ET, percentages only)
- S&P 500 futures (ES front-month): ~+0.1% to +0.3% overnight; cash S&P referenced near 7050. Quiet bid.
- VIX: 17.74, −1.11% vs prior close 17.94 — calm regime, easing further.
- US 10Y yield: ~4.29–4.31% area (no fresh overnight print); range-bound.
- WTI crude: noisy reads — one source −3.9% to ~$91.0, another flat at ~$91.4. Likely a meaningful overnight fade on Iran-truce extension hopes; will reconcile midday.
- DXY: 98.27, +0.05%; dollar firm above 98 on the same Iran-deal optimism.
- BTC: +0.45% overnight to ~$75,146. ETH: −0.50% to ~$2,348. Crypto Fear & Greed Index 21 (Extreme Fear). ETH/BTC ratio at YTD high; ETH ETFs taking inflows while BTC ETFs see outflows — rotation, not trend break.
- Today's catalysts: **no pre-open US earnings** (Nasdaq calendar: "no reports on this date"). **No scheduled top-tier US macro releases** today (CPI/PPI/retail-sales/sentiment/housing all not scheduled). Light tape.
- Geopolitics: April 7 US–Iran two-week truce holding; **expiry around April 21** — next-week event risk, not today.
- Sector momentum (YTD through ~April 15–16): XLE +25.5% (clear leader, extended), XLK +4.5%, XLF −4.3%, XLV −4.2%. Energy is far ahead but stretched; tech is the only other green YTD print.

**Holdings check**
- No open positions. Nothing to evaluate.

**Trade ideas** (0–3 per day; HOLD is the default)
- **None today.** Rationale: (1) zero scheduled US catalysts on a Friday — opening into a low-information tape is asymmetric risk; (2) account just transitioned from over-concentrated to fully flat — re-deploying immediately into the same names would look like revenge-trading; (3) Iran truce expiry (~April 21) is a known near-term binary that argues for reserving dry powder until Monday's pre-market with a fresh catalyst read; (4) energy is up 25% YTD and doji-prone — wrong moment to chase the leader; tech is up only 4.5% but has no fresh trigger today. Patience > activity.

**Risk factors**
- Iran-truce extension headlines either way (bull on extension, bear on collapse) could whipsaw equity + oil + DXY; this is the dominant intraday wildcard given an empty US calendar.
- Quiet tapes can drift — a benign +0.1–0.3% open could turn into a passive grind higher and we'd watch from the sidelines. Acceptable opportunity cost vs the discipline of waiting for documented catalysts.
- Crypto Fear & Greed at 21 (Extreme Fear) with ETH outperforming BTC suggests selective bid; it is **not** a green light to add crypto today without a specific catalyst — adding into Extreme Fear without a thesis is closer to averaging into a downtrend than buying capitulation.

**Decision:** **HOLD.** No new opens today. No trims required (account is flat). Cash 100% (above the 15–25% target band, by design — the band is for invested days, not for a deliberate dry-powder posture into a no-catalyst session). Week opens-so-far stays at 0; budget for next week begins fresh Monday.

---

## Template (copy for each new day)

### YYYY-MM-DD — Weekday Pre-Market

**Snapshot:** Equity X.X% of start | Cash X.X% | Open positions: N | Week opens so far: N

**Market context**
- S&P futures: …
- VIX: …
- Oil / DXY / 10Y: …
- Crypto (BTC/ETH overnight %): …
- Key catalysts today: earnings (tickers + AM/PM), econ data (time + consensus), geopolitics.
- Sector / asset-class momentum: …

**Holdings check**
- For each open position: news since last close? Thesis intact? Any gaps > 3%?

**Trade ideas** (0–3 per day; HOLD is the default)
1. **SYMBOL** (assetClass) — instrumentId: `XXXXX`
   - Catalyst: …
   - Entry: ask near $X.XX
   - Stop (−10%): $X.XX
   - Target (2:1 min): $X.XX
   - Size: X% of equity (≤ 20%, respects class cap)
   - R:R: X:1
2. …

**Risk factors**
- …

**Decision:** HOLD / OPEN N positions at market-open / TRIM X.

---
