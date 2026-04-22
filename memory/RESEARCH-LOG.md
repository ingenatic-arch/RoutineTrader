# Research Log

Dated pre-market research entries written by the `pre-market` routine.
Most-recent at the top. Each entry is the basis for any trade decision in the
`market-open` routine that day — no entry today = no new positions today.

---

### 2026-04-22 — Wednesday Pre-Market (08:00 ET)

**Snapshot:** Equity 100.2% of start | Cash 100.0% | Open positions: 0 | Week opens so far: 0 | Weekly budget remaining: 5 of 5

**Market context** (as-of 2026-04-22 ~08:00 ET, percentages only; some data sources thin — flagged below)
- S&P 500 E-mini futures (ES Jun-2026): **~+0.35% overnight** — modest risk-on bid extending yesterday's tape. Separate search print referenced ESM26 at 7142.50 (+0.60% context).
- VIX / US 10Y yield: no fresh overnight print available from Perplexity. Carry-forward VIX ~17.7 / 10Y ~4.30% until cash-market opens.
- WTI crude: Perplexity data thin/stale (mixed signals — one source had WIJ26 at $96.14 −0.19%, another said oil "trading around $98/bbl" on residual supply-risk premium). Treating the direction as roughly flat, with a lingering Iran-premium bid still partially in the tape.
- DXY: no fresh print; carry-forward ~98.2.
- **BTC: ~+2.2% overnight to $77.4–77.5k area. eToro live ask $78,509 at 08:00 ET — confirming continuation into pre-market.** Weekly +4.3%. Testing three-month highs after breaking $76k support.
- **ETH: ~+0.7–2% overnight to ~$2,390.** Tracking BTC bid, altcoins broader green.
- **Today's macro catalysts (confirmed by Perplexity calendar scrape):**
  - **EIA Weekly Crude & Fuel Stock Report** — 10:30 AM ET (oil-specific, not index-wide mover absent a surprise).
  - **MBA Mortgage Applications** — 6:00 AM ET (already printed; low-impact).
  - **US Treasury 20-year Bond Auction** — 12:00 PM ET (auction tail = rates signal).
  - **No FOMC minutes, no Beige Book, no CPI/PPI/Retail today.** Next FOMC April 29.
- **Today's earnings:** **Tesla (TSLA)** reports — Perplexity's "pre-open" tag is almost certainly wrong (TSLA has historically reported after-close and Perplexity's own second source hedged). Treat as after-close; no mechanical pre-market entry edge. EPS consensus ~$0.37, revenue ~$22.7B.
- **Sector momentum (last ~5 trading days through 4/21):**
  - **XLK (Tech): +4.56% 5d**, period high $156.07 on 4/21 (eToro ref rate $156.14 this morning). 10DMA $148.59 — price trading cleanly above. **Tech has reclaimed leadership** vs the Monday "defensives leading" narrative.
  - XLE / XLF / XLV / XLI / XLP / XLU: Perplexity returned no fresh 5-day data this morning (source thin). Carry-forward from Tuesday: XLU breaking down, XLP consolidating, XLE fighting oil headwind, financials still lagging.
  - **QQQ:** eToro rates show 10DMA $629.12 vs ask $649.25 — +3.2% above 10DMA. Extended.
- **Crypto sector news (past 24h):**
  - **Trump extended US–Iran ceasefire indefinitely.** This is the dominant risk-on catalyst since yesterday's close and directly feeds crypto bid (ceasefire removes Hormuz tail-risk).
  - **Strategy (MicroStrategy) bought $2.54B in BTC overnight**, lifting holdings above 815,000 coins. Soaking miner supply; classic institutional accumulation signal.
  - **$330M in liquidations (114k traders)** on the BTC push to $77.4k — the move was a real squeeze, not passive drift.
  - Kelp DAO hacker (suspected Lazarus) moved 75,701 ETH via Thorchain — isolated, not a macro crypto negative.
- **Geopolitics:** Iran ceasefire now **indefinite** (Trump). Talks "stalled" per US side but no further strikes planned. This is a meaningful step beyond Monday's "truce holding" read — removes the April-21-truce-expiry binary that was still on the board yesterday.

**Holdings check**
- **No open positions.** Nothing to evaluate. Cash 100%.

**Trade ideas** (0–5 per day)

1. **BTC (Bitcoin spot)** — instrumentID: `100000`, asset class: Crypto. **A-grade, propose OPEN at market-open.**
   - **Catalyst today:** Iran-ceasefire-indefinite headline (overnight) + MicroStrategy $2.54B institutional buy (overnight) + 3-month-high breakout with $330M in squeeze liquidations (overnight). Three concurrent, independent bid drivers, all dated within the last 24h.
   - **Entry:** ask ~$78,509.25 (live eToro read 13:41Z).
   - **Stop (−10%):** round(78509.25 × 0.90, 4) = **$70,658.3250**.
   - **Target (≥2:1 R:R):** $94,211.11 (~+20% from entry). Weekly +4.3% momentum, prior resistance ~$76k now support; $94k is roughly the January 2026 swing-high area.
   - **Size:** **15% of equity** (~15% × $10,020.59 = ~$1,503 virtual). Crypto class exposure 0% → 15% (≤50% class cap). Cash after: ~85% (≥5% buffer).
   - **R:R:** ~2.0:1. Downside 10% / upside 20%.
   - **Pre-buy gate status:** Positions-after 1≤8 ✓ | Week-opens-after 1≤5 ✓ | Cost 15%≤30% ✓ | Class 15%≤50% ✓ | Cash buffer after ~85% ✓ | Exact `internalSymbolFull=BTC` match ✓ | Catalyst documented (this entry) ✓.

Screened and rejected:

2. **XLK (Tech SPDR)** — instrumentID: `3021`, ETF. **Rejected: extended, no fresh today-catalyst.** Monthly +17%, 5-day +4.56%, ask $156.14 sits 5.1% above 10DMA $148.59. Tech leadership reclaim is real but the entry is late; no specific 4/22 catalyst (TSLA is after-close and company-specific, not sector-wide). Wait for a pullback to the 10DMA or a post-TSLA sector re-rating.
3. **QQQ (Invesco QQQ)** — instrumentID: `3006`, ETF. **Rejected: same reason as XLK.** Ask $649.25 is +3.2% above 10DMA $629.12; weekly +0.05% says the move has already consolidated. No edge chasing here.
4. **TSLA earnings pre-positioning** — **Rejected.** Pre-earnings binary bet into an after-close print is gambling, not an edge. Pre-buy gate requires documented catalyst that resolves during the session in our favor — a post-close earnings report does not.
5. **XLE / energy longs** — **Rejected.** Iran ceasefire extended indefinitely strengthens, not weakens, the bearish commodity read. Energy equities still fighting commodity headwind.
6. **ETH (Ethereum spot)** — tempting as a crypto co-hedge but **deferred**. BTC is the cleaner A-grade catalyst (MicroStrategy buy is BTC-specific; ETH momentum is derivative). Stacking two crypto longs on day one would push class exposure to ~30% without a second independent catalyst — not disciplined. Revisit midday if BTC holds bid and ETH/BTC ratio extends.

**Risk factors**
- **BTC is the whole book today.** A single 15% crypto position concentrates today's P&L into one tape. A sudden risk-off headline (Iran talks re-escalating, unexpected Fed comment, tech-sector flush) hits crypto hardest. Size is capped at 15% specifically to absorb this.
- **Cash drag vs aggression.** After filling BTC the book is still ~85% cash. That's intentional — Tuesday/Wednesday have no macro prints, Thursday likely sees flash PMIs, Friday weekly review. Leaving room to add on any clean A-grade setup Thursday/Friday.
- **Overnight-news-driven entries can fade intraday.** The BTC $77.4k print happened overnight on the liquidation squeeze; market-open US session may see profit-taking into the open. Acceptable: our 10% stop is wide enough to absorb normal intraday chop.
- **EIA crude print 10:30 ET.** A bullish crude surprise would re-energize energy / hurt tech / mixed for crypto. Neutral for BTC directly.
- **20Y auction 12:00 ET.** A sloppy tail pushes yields higher → pressures tech and crypto. Second-order risk.
- **Data quality caveat.** Perplexity returned thin VIX/10Y/DXY/sector data again this morning; carrying forward where stale. If cash-market reads contradict these materially, midday should reassess.

**Watchlist (for rest of the week)**
- **ETH** — add if BTC bid holds into Thursday and ETH/BTC ratio continues expanding.
- **XLK / QQQ** — re-evaluate on any pullback to 10DMA; tech leadership reclaim is real but needs a better entry.
- **BAC / MS** — bank-earnings tail still unconfirmed for specific day this week.
- **Energy mean-reversion** — dead until Iran talks break down, which looks less likely after the indefinite extension.

**Decision:** **OPEN 1 at market-open** — BTC @ 15% of equity, stop $70,658.3250, target ~$94,211 (≥2:1 R:R). No trims (account is flat). Opens-this-week 0 → 1 after fill (4 of 5 remaining).

**Operational note (added after write, not research-related):** this pre-market run initially aborted at 13:15Z on an eToro-API HTTP 503 storm during key-check. The automated market-open cron at 13:37Z then aborted correctly (no research for the day). This re-run landed at 13:43Z — after market-open had already given up — so the BTC trade above **will not auto-fire today**. It stands as: (a) validated research for tomorrow's context carry-forward, (b) an eligible setup for a manual `/trade` invocation if the user wishes, and (c) a documented demonstration that today's HOLD is an infrastructure accident, not a strategic decision.

---

### 2026-04-21 — Tuesday Pre-Market (08:00 ET)

**Snapshot:** Equity 100.2% of start | Cash 100.0% | Open positions: 0 | Week opens so far: 0 | Weekly budget remaining: 5 of 5

**Market context** (as-of 2026-04-21 ~08:00 ET, percentages only; some data sources thin — flagged below)
- S&P 500 futures (ES Jun-2026): **~+0.10% overnight**, modest recovery after yesterday's cash S&P −0.41% print. (Absolute level returned by Perplexity differs materially from yesterday's entry; treating the % direction as the usable signal, not the absolute.)
- VIX / US 10Y yield: **no fresh overnight print** available from Perplexity this morning. Carry-forward VIX ~17.7 / 10Y ~4.30% from last confirmed reads; revisit midday if tape is orderly.
- WTI crude: **~−1.7% overnight** to ~$88 area (May contract), ~$86 (June). Brent ~$94.5 (−1%). Driver: **US–Iran peace talks scheduled in Pakistan this week** — de-escalation premium continues to compress oil. Analyst tail-risk flag: $110/bbl scenario if talks fail. Iran "truce expiry" was yesterday (4/20) and the de-escalation path is still intact. This further confirms Thursday's Iran-premium-long thesis is dead.
- DXY: no fresh print; carry-forward ~98.2.
- BTC: ~flat near **$75k**, ETH ~flat near **$2.3k**. Perplexity explicitly lacks fresh 4/21 data — using 4/20 close as proxy. No fresh regulatory/ETF headlines. YTD BTC −19%, ETH −27%; still in Extreme-Fear regime with ETH/BTC ratio elevated on earlier-month post-ceasefire rotation.
- **Today's catalysts (real, unlike yesterday's empty tape):**
  - **Retail Sales (March)** — likely 8:30 AM ET standard release window (Perplexity said 9:30 ET, treating as possible time-zone confusion; standard BEA/Census window is 8:30 ET). Consumer-spending bellwether.
  - **Durable Goods Orders** — same morning. Consensus figures not surfaced in research.
  - **No confirmed pre-open earnings.** BAC / MS bank-earnings tail still "this week" but unconfirmed for today.
  - D-Wave Quantum (QBTS) Extraordinary General Meeting scheduled today — agenda opaque, speculative catalyst only.
- Sector momentum (YTD through 4/20, via Perplexity + eToro snapshots):
  - **XLE +24.0% YTD** (still the leader but now fighting the sustained WTI crash — leadership probably breaking).
  - **XLU +7.3% YTD** but **−0.9% past week** and price below 10DMA/50DMA.
  - **XLP +6.1% YTD** but **−0.1% past week** and price (82.39) right at 10DMA / above 200DMA; slight pullback in uptrend.
  - **XLF −3.4% YTD** (lagging).
  - XLK / XLV / XLI YTD prints not available.
  - **Read:** The Monday entry's "defensives leading" theme is cooling this week — XLU broke down a bit, XLP consolidating. Rotation is not accelerating.
- Geopolitics: Iran-US talks in Pakistan this week = dominant risk-on catalyst. Truce de-escalation is the path being priced. Any breakdown from the talks would re-price oil sharply higher.

**Holdings check**
- **No open positions.** Nothing to evaluate. Cash 100%.

**Trade ideas** (0–5 per day; HOLD is default only when no idea qualifies)

Screened candidates + why each was rejected:

1. **XLP (Consumer Staples SPDR)** — instrumentID: `3022`, asset class: ETF. Catalyst: Retail Sales print + continuing defensive rotation narrative. Current ask ~$82.39, 10DMA $82.02, 50DMA $84.81, YTD +6.1%. **Rejected: B-grade, not A-grade.** Past-week change is **−0.08%**, MTD +0.5%, and price sits just above 10DMA after rolling off 50DMA — rotation theme is cooling, not accelerating. A Retail Sales print is binary and the direction-of-reaction is unknown; buying defensives ahead of a print that could trigger cyclical rotation either way is a coin flip. If XLP reclaims ~$83 post-print with confirmation, market-open can re-evaluate.
2. **XLU (Utilities SPDR)** — instrumentID: `3013`, asset class: ETF. Catalyst: defensive rotation + rate-sensitive long on soft retail print. Current ask ~$45.75, 10DMA $46.43, 50DMA $46.19, YTD +7.3%. **Rejected: weaker setup than XLP.** Past-week −0.89%, MTD −0.31%, price **below 10DMA and 50DMA** — a cooling uptrend with bearish near-term structure. Don't chase a losing short-term flow.
3. **XLE (Energy SPDR)** — YTD +24% leader. **Rejected.** Thesis broken: WTI printing another −1.7% overnight on Iran de-escalation. Energy equities fighting a persistent commodity headwind. Leader reversal setup, not a long.
4. **Bank-earnings pre-positioning (BAC, MS)** — **Rejected.** Reports still "this week" but not confirmed for today. Pre-buy gate requires catalyst **today**; speculating ahead of unconfirmed timing violates the rule.
5. **D-Wave Quantum (QBTS) EGM play** — **Rejected.** Agenda unknown. Event-driven without a thesis is a gamble, not an edge.
6. **Crypto (BTC / ETH)** — **Rejected.** No fresh catalyst; range-bound in Extreme-Fear regime without a trigger. Strategy: buying into Extreme Fear without thesis ≈ averaging into downtrend.

**Risk factors**
- **Cash drag, Day 2.** 100% cash for a second consecutive day. The strategy's preferred posture is 90–95% deployed, 5–10% buffer. Deliberate dry-powder is defensible into a truly binary session (Retail Sales print can go either way), but another flat day Wednesday without conviction will force the "patience vs inaction" dial toward deploying on any B+ idea.
- **Retail Sales whipsaw.** A strong print flips defensive rotation → cyclical bid; weak print extends defensives. Either way, market-open at 9:35 ET will have a post-print tape and is the correct entry window — not pre-market pre-commitment.
- **Iran talks in Pakistan.** If talks collapse this week, oil re-prices violently higher (analyst tail: $110/bbl) → energy/industrials bid, defensives sold. If talks make progress, risk-on extends and defensives keep cooling.
- **Data quality.** Perplexity returned thin/gapped data on VIX, 10Y, DXY, and fresh crypto prices; treat quantitative comparisons as directional, not precise.

**Watchlist (for rest of the week)**
- **XLP / XLU** — re-evaluate post-Retail-Sales reaction. If XLP reclaims 10DMA with volume, consider a ≤15% allocation with a 10% stop.
- **BAC / MS** — once the earnings day is confirmed, pre-open setup candidate. Last week's bank prints (JPM +13%, WFC/C/BLK beats) set a bullish bar.
- **Energy mean-reversion (XLE / XOM / CVX)** — only if WTI stabilizes ≥$85 and Iran talks clearly break down. Not today's trade.

**Decision:** **HOLD.** No new opens today. No trims required (account is flat). Opens-this-week stays 0; weekly budget of 5 is untouched. Defer directional bets to market-open once today's Retail Sales + Durable Goods prints have hit the tape and sector reaction is readable.

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
