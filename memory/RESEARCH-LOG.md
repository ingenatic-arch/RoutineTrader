# Research Log

Dated pre-market research entries written by the `pre-market` routine.
Most-recent at the top. Each entry is the basis for any trade decision in the
`market-open` routine that day — no entry today = no new positions today.

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
