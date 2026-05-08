# Weekly Review

Friday-afternoon recaps written by the `weekly-review` routine. Most-recent week
at the top. The grade (A–F) is honest self-assessment against the strategy rules
and the 60/40 benchmark — not just P&L.

---

### Week of 2026-05-04 → 2026-05-08

**Week return:** −0.2% | **S&P 500 week:** +2.1% | **Alpha:** −2.3%
**60/40 proxy (0.6·SPX + 0.4·BTC):** +2.3% | **Alpha vs 60/40:** −2.5%
**Phase-to-date return:** −0.1%
**Grade: B−** _(rule 9 thesis-exit fired exactly as designed and saved ~3.4% on
the XLE leg vs the −10% server stop; but alpha-miss accelerated to the phase's
worst single-week underperformance — the entry-bar trigger from week 3's review
has now fired and demands action next week)_

**Adjustments next week (preview):** **No strategy edit this week** — last week's
rule-6 reframe lands cleanly. But the four-week trigger from the prior review
HAS FIRED: opens-cadence now sits at 0/1/1/0 across weeks 2–5, with cumulative
alpha vs 60/40 of roughly −4.5% over four weeks. The next pre-market (Monday
2026-05-11) is directed to (a) name the cumulative alpha-miss explicitly and
(b) test a looser reading of "today's catalyst" for sector-ETF leadership
plays — specifically, "5-day momentum-confirmation after a binary event"
(post-NFP, post-FOMC) should count as a documented catalyst even without a
single fresh same-day print. Detail at the bottom of this entry.

**Context.** This was the fifth week of routine-driven activity (fourth full
week). The week opened with two positions (BTC 15%, XLE 10%) and closed with
one (BTC). Mon/Tue/Wed all HOLD on pre-NFP risk-budgeting + macro-light tape;
none had a chase-able catalyst that wasn't a same-day binary. Thursday delivered
the week's only routine-driven action: pre-market 2026-05-07 detected the
WTI two-day −10% rout (Iran-ceasefire-optimism explicitly framed as "war
ending" — a clean catalyst-reversal of the Hormuz risk-premium thesis
underwriting our 4/27 XLE long), and handed midday an explicit named trigger:
"WTI not stabilizing ≥$93 + XLE not holding $56 area." Live midday read at
15:30Z: WTI ~$92–93, XLE $55.47 — both conditions met. Midday executed full
close at $55.47 vs $57.55 entry — realized −3.6% on the leg / ~−0.4% on equity
/ −$37.04 on $999 cost. Friday HOLD on the post-NFP slate. BTC traveled from
$78,173.16 (Mon AM open vs entry $78,765.12) → $80,220.00 (today close), now
+1.85% unrealized; well above $70,888.59 stop the entire week. Three add-BTC
ideas screened across Tue/Wed/Thu, all rejected on named criteria
(pre-MSTR-binary, chasing-the-multi-month-high, dual-disqualifier-with-XLE-
rolling). Zero opens this week; one close (XLE thesis-exit). End-week: 1
position, 84.7% cash, 15.3% deployed.

**Stats**
| Metric              | Value |
|---------------------|-------|
| Trades opened       |   0   |
| Trades closed       |   1   |
| Win rate            |   0%  |
| Best trade          | −3.6% |
| Worst trade         | −3.6% |
| Avg hold (days)     |  10.0 |
| Profit factor       |  0.00 |
| Open positions EOW  |   1   |

**Closed trades**
| Symbol | Class | Hold  | P&L %  | Reason closed                      |
|--------|-------|-------|--------|------------------------------------|
| XLE    | etf   | 10d   | −3.6%  | thesis broken (rule 9; Iran-ceasefire WTI −10%/2 sessions) |

**Open positions EOW**
| Symbol | Class  | Weight% | Unrealized% | Stop  |
|--------|--------|---------|-------------|-------|
| BTC    | crypto |  15.3%  |    +1.8%    | −10%  |

Cash: 84.7% of equity. Deployed: 15.3%. Opens-this-week: 0 of 5 budget. Class
exposure: crypto 15.3% (cap 50%), ETF 0% (cap 50%). Positions: 1 of 8.

**What worked**
- **Rule 9 (thesis-exit overrides the −7% rule cut) fired exactly as designed —
  first time in the phase.** XLE was at −3.6% unrealized when pre-market
  detected the catalyst-reversal (Iran-ceasefire optimism = "war ending" =
  Hormuz-risk-premium thesis broken). The position was nowhere near the −7%
  rule cut, but rule 9 explicitly authorizes thesis-exit above the cut. We
  closed at $55.47 vs entry $57.55 instead of waiting for the −10% server
  stop at $51.79 — saved approximately 3.4% on the leg (~+0.34% on equity).
  This is the first concrete validation that rule 9 does what it was written
  to do; previously the rule lived in the strategy book without a real-money
  test. The exit was clean, named, and executed against a pre-committed
  decision rule.
- **Pre-market → midday named-trigger handoff was textbook.** The 2026-05-07
  pre-market did not just flag XLE thesis-pressure — it codified the exact
  midday decision rule ("WTI not stabilizing ≥$93 + XLE not holding $56
  area"), so midday wasn't re-deciding from scratch under time pressure with
  partial data. Pre-market reads the morning tape; midday acts on the codified
  trigger. Adopt this pattern: when pre-market sees thesis pressure but
  doesn't have authority to act, it should write the next-routine decision
  rule explicitly into the research-log. Saved time, reduced midday cognitive
  load, eliminated discretion creep.
- **Discipline preserved across 4 HOLDs + 1 thesis-exit.** Mon/Tue/Wed/Fri all
  HOLD on named criteria (pre-NFP risk budgeting, no specific same-day
  catalyst, post-NFP wait-and-see). Zero "nothing obvious" rejections; every
  HOLD had a documented reason in the research log. Three separate add-BTC
  ideas were screened and rejected on named criteria — not because BTC was
  wrong, but because the trigger logic ("BTC pulls back to $80k on no-news +
  XLE stays bid") had a disqualifier each day.
- **BTC position finally earned its sizing without us chasing.** From last
  Friday's −0.8% unrealized to today's +1.85% — a clean +2.6% week-over-week
  move that the position rode without a single mid-week add. The rejected
  add-BTC ideas (Tue 5/5, Wed 5/6, Thu 5/7) were all correct in retrospect:
  adding into the multi-month-high print would have raised average entry
  without R:R improvement. The original 15% sizing captured the upside
  correctly.

**What didn't**
- **Worst alpha-miss of the phase: −2.3% vs SPX, −2.5% vs 60/40.** This is the
  first single-week miss where the gap exceeds 2%, and it is the fourth
  consecutive week trailing the benchmark (−0.9, −0.6, −0.5, −2.5 = roughly
  −4.5% cumulative vs 60/40). The pattern has crossed the line from "the
  cost of dry powder" to "the cost of an entry bar that may be miscalibrated."
  In a +2.1% SPX week, holding 75–85% cash and a single 15% BTC long simply
  cannot keep up. Every uninvested dollar this week underperformed the index
  by ~2.1%, and we held an average of ~80% in cash. This is the precise
  scenario the four-week alpha-bleed pattern was warning about.
- **The entry-bar trigger from last week's review HAS FIRED.** Quote from
  2026-04-27 → 2026-05-01 review: "Watching at week 4: if opens-cadence stays
  at ≤1/week for the fourth week, that is the signal to revisit the entry
  bar." Opens this week = 0; cumulative routine-opened cadence = 0, 1, 1, 1,
  0 across weeks 1–5. Four straight weeks at ≤1 open. The signal has fired.
  The entry bar must be looked at next week — not necessarily loosened, but
  examined. Likely culprit: the "today's catalyst" gate item is being read
  too strictly for sector-ETF plays — XLK / XLI / XLF have all sat on the
  watchlist for 3+ weeks waiting for a single fresh same-day catalyst that
  rarely materializes for sector ETFs. A 5-day momentum-confirmation after a
  binary event (post-NFP for cyclicals, post-FOMC for rate-sensitives) is a
  legitimate catalyst category that the gate doesn't currently recognize.
- **XLE entry was a B+ thesis with limited shelf life.** The 2026-04-27 thesis
  (WTI +2% on Iran-talks-stalled + Hormuz disruption) correctly read the day's
  tape, but the multi-week catalyst (Iran de-escalation framing) emerged in
  the back half of the position's 10-day life. Result: peaked at +3.7%
  unrealized Thursday 4/30, drifted with WTI volatility through 5/5–5/6,
  then broke on the 5/6–5/7 catalyst-reversal. Net: a −3.6% loser. Not a
  rule violation — the thesis was A-grade by the gate criteria the day it
  was opened. But "thesis durability" is the implicit dimension that wasn't
  in the gate. Worth noting for future entries with single-headline catalysts:
  geopolitical risk-premium theses can reverse on a single counter-headline.
- **One close, one loss, win rate 0%.** The week's only realized trade was a
  loser. We have no winners to point to in P&L terms — the BTC unrealized
  gain (+1.8%) is not a closed trade. Statistically meaningless on n=1, but
  worth flagging that the routine has yet to print a realized winner in five
  weeks of activity (1 closed trade total: XLE −3.6%).

**Lessons**
- **Rule 9 has graduated from theoretical to validated.** First real-money test
  fired correctly: pre-market identified the catalyst-reversal, codified the
  midday trigger, midday executed cleanly. Net savings ~3.4% on the leg vs
  the server stop. Hold the rule as-written; one event isn't enough to
  promote the language ("thesis-exit overrides the stop" → "thesis-exit is
  the primary exit, the stop is the backstop"), but two consecutive
  validations would warrant that strategy-book upgrade. Watch for the next
  thesis-pressure event.
- **Pre-market should always codify the next-routine trigger when it sees
  thesis pressure but lacks authority to act.** This week's XLE handoff is
  the canonical example: pre-market reads the morning tape, sees the catalyst
  rolling, can't trade itself (rule 5: pre-market doesn't trade), and writes
  the exact midday decision rule into the research-log. Midday then executes
  against the rule, not against fresh discretion. This is a workflow pattern
  worth codifying: not a strategy edit, but a research-log convention.
- **Cumulative alpha-bleed at week 4 is the signal we wrote into last week's
  review for a reason.** The strategy explicitly grades discipline above P&L,
  and a single −2.5% week against a +2.3% benchmark is "absorbable" — but
  a four-week pattern of compounding underperformance is the signal that the
  routine is out-of-step with the tape, not the tape that's out-of-step with
  us. The strategy doesn't say "trail the benchmark forever; discipline is
  enough." It says "discipline > P&L, but beat the 60/40 over the challenge
  window." Four weeks at −4.5% vs 60/40 is the warning shot. Five weeks
  would be a problem.
- **Sector-ETF plays don't have the same catalyst structure as single names
  or cyclical commodities.** XLK / XLI / XLF rotation moves on weekly /
  monthly flows, not daily catalysts. Requiring "today's catalyst" gates out
  exactly the leadership-confirmation entries that the 60/40 benchmark gets
  for free. The gate isn't broken — it's tuned for high-conviction
  catalyst-driven entries. But it doesn't recognize a legitimate second
  category of entry: post-binary momentum confirmation. Next week's
  pre-market should write the looser reading into a research-log entry as a
  test, not amend the strategy yet.

**Adjustments for next week**
- **No strategy-book edit this week.** Last week's rule-6 reframe (cash
  buffer aspirational, not enforceable) is settling cleanly — three weeks
  of >50% cash with discipline preserved validates the amended language.
  No further amendment needed.
- **Pre-market 2026-05-11 (Monday) is directed to:** (a) explicitly name the
  cumulative alpha-miss of −4.5% vs 60/40 over four weeks; (b) propose at
  least one sector-ETF entry on a "5-day momentum-confirmation after a
  binary event" thesis (post-NFP for cyclicals: XLK, XLI, or XLF if today's
  Friday NFP is hot), even if no fresh single-day print fires; (c) document
  the looser catalyst reading inline so it's auditable. If market-open 5/11
  converts the idea, we test the looser bar in practice. If it rejects it
  on different criteria (size, class cap, thesis quality), the test is still
  meaningful. The point is to put the question in front of a real decision,
  not adjudicate it in a vacuum.
- **Operational convention (no rule change):** when pre-market sees thesis
  pressure on an open position but lacks authority to trade (rule 5), it
  should always codify the next-routine decision rule explicitly in the
  research-log entry. Adopt the 2026-05-07 XLE pattern as the canonical
  template: "If condition X AND condition Y both hold at midday, close
  full." Pre-market reads, midday executes — no fresh discretion under
  time pressure.
- **Watching: rule-9 second validation.** First real-money test fired this
  week and worked. Two consecutive validations would warrant a strategy-book
  promotion of the rule's language. No edit yet; just flagging the watch.

---

### Week of 2026-04-27 → 2026-05-01

**Week return:** +0.3% | **S&P 500 week:** +1.0% | **Alpha:** −0.6%
**60/40 proxy (0.6·SPX + 0.4·BTC):** +0.8% | **Alpha vs 60/40:** −0.5%
**Phase-to-date return:** +0.2%
**Grade: B+** _(discipline clean, second routine-sourced fill working at +2.2%, BTC recovered most of prior softness; trailed benchmark by ~0.5–0.7% — the cost of dry powder in a continuing risk-on tape)_

**Adjustments next week (preview):** small, targeted edit to `TRADING-STRATEGY.md`
rule 6 — the "5–10% cash buffer at all times" target has been violated for three
consecutive weeks (cash ended 100% / 85% / 75%) without breaking discipline,
because the meta-rule "patience > activity" took precedence whenever no idea
cleared the pre-buy gate. Rather than continue to fail a written rule we
deliberately don't enforce, the rule is reframed: 5–10% cash is the **target
when A-grade theses are abundant**; tolerate >50% cash during low-signal
regimes. Detail at the bottom of this entry.

**Context.** This was the third week of routine-driven activity. Monday opened
XLE at 10% weight on a clean A-grade thesis (WTI +2% overnight on Iran-talks-
stalled + Hormuz disruption + XLE pulled back ~7% from highs while still YTD
leader at +28%); the routine pipeline converted research → fill on the same
cron cycle with no manual rescue. The XLE thesis played out cleanly — WTI ran
+7% on Tuesday/Wednesday post-FOMC, XLE peaked at +3.7% unrealized Thursday,
ended the week at +2.2% after Friday's WTI −3% pullback / XOM/CVX earnings
binary cooled the move. BTC drifted from −1.6% (prior EOW) → −4.0% (Wednesday
intraday low) → −0.8% (this Friday EOW), well inside the −10% server stop
throughout. Tuesday/Wednesday/Thursday/Friday market-opens correctly held —
each on a named criterion (FOMC eve, FOMC day, post-FOMC oil entry late after
+7%, Friday earnings binary). Friday market-open had a conditional XLE add
gated on >$60.00 print; live ask traded $59.46, gate not met, no add — clean
discipline. Three full days of routine runs (Mon, Tue, Wed full; Thu/Fri full)
fired without any 503-induced abort, a meaningful operational improvement
versus the prior week's three abort events.

**Stats**
| Metric              | Value |
|---------------------|-------|
| Trades opened       |   1   |
| Trades closed       |   0   |
| Win rate            |  n/a  |
| Best trade          |  n/a  |
| Worst trade         |  n/a  |
| Avg hold (days)     |  n/a  |
| Profit factor       |  n/a  |
| Open positions EOW  |   2   |

**Closed trades**
| Symbol | Class | Hold | P&L % | Reason closed         |
|--------|-------|------|-------|-----------------------|
| —      | —     | —    | —     | No closes this week.  |

**Open positions EOW**
| Symbol | Class  | Weight% | Unrealized% | Stop  |
|--------|--------|---------|-------------|-------|
| BTC    | crypto |  14.9%  |    −0.8%    | −10%  |
| XLE    | etf    |  10.2%  |    +2.2%    | −10%  |

Cash: 74.9% of equity. Deployed: 25.1%. Opens-this-week: 1 of 5 budget. Class
exposure: crypto 14.9% (cap 50%), ETF 10.2% (cap 50%). Positions: 2 of 8.

**What worked**
- **Second routine-sourced fill landed cleanly.** Monday's XLE entry walked the
  full pre-buy gate (positions-after-fill 2/8, opens-this-week 1/5, position
  cost 10% of virtual equity, cash 75% post-fill, ETF class 10% post-fill,
  catalyst documented in research-log, exact `internalSymbolFull=XLE` match,
  Leverage 1, IsBuy true, StopLossRate $51.79). Fill 57.54 ask vs 57.55 open
  rate (~0bp slippage). The 13:42Z cron correctly detected the fill on its
  duplicate-run pass at 13:43Z and no-op'd. End-to-end routine pipeline is
  now demonstrably stable across two consecutive opens (BTC 4/22, XLE 4/27).
- **Sizing caps absorbed normal post-entry chop without drama.** BTC traveled
  −1.6% → −4.0% → −0.8% over the week with stop $70,888.59 and live cushion
  never below ~7% above stop. XLE drifted −1.3% on Monday post-fill before
  building to +3.7% by Thursday and settling +2.2%. The strategy's 10–15%
  per-position weights and 10% server stops are doing exactly what they were
  designed to do — third week running.
- **Four HOLD days defended on named criteria, not vibes.** Tuesday (FOMC eve
  binary), Wednesday (FOMC day at 14:00 ET — held through the announcement),
  Thursday (energy entries late after WTI +7%, XOM/CVX earnings binary 24h
  away), Friday (XOM/CVX earnings same morning, conditional XLE add gated at
  $60.00 — gate not met). Every HOLD had a named, pre-committed reject reason
  in the research log; none were "nothing obvious."
- **Operational stability improved meaningfully.** Zero key-check / 503 aborts
  this week vs three the prior week. The wrapper-side retry path that was the
  Engineering follow-up flagged at week-2 close-out is still pending, but the
  underlying eToro 503 storms cleared on their own this week.
- **Data-quality skepticism continued to pay off.** Friday flagged Perplexity
  BTC prints diverging by ~$14k across sources ($91k vs $77k); eToro
  `closeRate` was treated as the operative truth. ETH/BTC rotation idea was
  correctly deferred on data-quality grounds rather than entered on noisy
  third-party prints.

**What didn't**
- **Trailed benchmark by ~0.5–0.7%.** Week return +0.3% vs SPX +1.0% and 60/40
  proxy +0.8%. This is the second consecutive risk-on week where dry powder
  cost us alpha — last week was −0.9% vs SPX, this week −0.6%. Cumulative
  alpha bleed is small but consistent. The XLE position is contributing
  positively (+2.2%, ~+0.22% to equity); the BTC position drifted slightly
  negative (−0.8%, ~−0.12% to equity). Net is small green but slower than the
  index.
- **Cash buffer rule violated for the third consecutive week.** Strategy says
  "Target 90–95% deployed, 5–10% cash buffer at all times" but cash ended
  100% (week of 4/13–4/17) → 85% (4/20–4/24) → 75% (4/27–5/1). Deployment
  trended in the right direction (we added a position), but a strict reading
  of rule 6 says we are out of compliance, week-after-week. Two interpretations:
  (a) the rule is aspirational, not enforceable, and the meta-rule "patience >
  activity" supersedes it during low-signal regimes; or (b) the entry bar is
  calibrated above the natural rate at which A-grade setups appear and we
  should loosen it. We're acting consistently with (a); the rulebook says (b).
  Three weeks running of the same gap → time for a small, targeted edit.
- **Conditional XLE add Friday may have been threshold-tight.** Market-open
  gated an XLE add on confirmed >$60.00 print; the live ask traded $59.46
  intraday with XLE briefly +3.3%. By midday WTI had pulled back −3% and the
  gate became correctly-too-tight, so the no-add was a winner in retrospect.
  But absent the WTI pullback, gating at exactly $60.00 (round-number resistance)
  vs $59.50 (just-above pre-open levels) was a coin-flip on the threshold.
  Not a rule failure; an observation worth noting for future conditional adds —
  set thresholds with a small explicit tolerance band, not a single round number.

**Lessons**
- **Two clean entries is enough to validate the routine pipeline.** BTC (week 2)
  and XLE (this week) both routed research → market-open → fill → midday
  thesis-check → daily-summary EOD without manual rescue. We can stop framing
  the routine path as "unproven" and start judging it on output. Output: two
  thesis-driven entries, both still alive, combined +1.4% unrealized, no rule
  trips, no stops hit. That's the working definition of the strategy doing
  what it's designed to do.
- **The cash-buffer target is aspirational, not enforceable.** A rule that fails
  three weeks running while the meta-rule "patience > activity" succeeds three
  weeks running is a rule that needs rephrasing. Forcing deployment to chase
  deployment for its own sake would invert the discipline-vs-P&L hierarchy
  the strategy was built around.
- **Conditional adds need a tolerance band, not a single threshold.** A clean
  catalyst that triggers at $60.01 looks identical to one that triggers at
  $59.99; a binary threshold on a noisy intraday print produces false negatives
  on theses that would otherwise qualify. Future conditional adds should
  specify "above level X with Y minutes of confirmation" or "above X-band
  $A–$B" rather than a single round number.

**Adjustments for next week**
- **Strategy edit (this week):** rule 6 is reframed in `TRADING-STRATEGY.md`.
  Old text: "Target **90–95% deployed**, **5–10% cash buffer** at all times."
  New text: "Target **5–10% cash buffer when A-grade theses are abundant**;
  tolerate **>50% cash during low-signal regimes** — the meta-rule
  *patience > activity* supersedes the deployment target. The 5–10% floor on
  cash is a hard minimum (never go fully invested); the upper bound is
  aspirational and should not push the bar below A-grade."
  Rationale: three consecutive weeks of cash 75–100% with B-or-better grading
  (discipline preserved, benchmark trailed by <1%/wk) is a strong empirical
  signal that the rule, as written, is out-of-step with how the strategy is
  actually being run successfully.
- **Operational note (no rule change):** future conditional market-open adds
  should specify a tolerance band on price thresholds, not a single round
  number. Add this convention in the next pre-market that proposes a
  conditional add.
- **Watching at week 4:** if opens-cadence stays at ≤1/week for the fourth
  week, *that* is the signal to revisit the entry bar (not the cash-buffer
  rule, which we're amending today). One more week of data; no entry-bar
  change yet.

---

### Week of 2026-04-20 → 2026-04-24

**Week return:** −0.4% | **S&P 500 week:** +0.5% | **Alpha:** −0.9%
**60/40 proxy (0.6·SPX + 0.4·BTC):** +1.5% | **Alpha vs 60/40:** −1.9%
**Phase-to-date return:** −0.2%
**Grade: B** _(discipline perfect, one A-grade entry executed cleanly; trailed benchmark as the single crypto long drifted intraweek, well inside the stop band)_

**Context.** First week with a routine-sourced fill. Research fired A-grade on
Wednesday (BTC long, Iran-ceasefire-indefinite + MicroStrategy $2.54B buy +
3mo-high breakout with $330M squeeze liqs) and market-open converted it to a
15%-weight position with the server-side −10% stop at $70,888.59 and an implicit
+20% target. The other four sessions held cash against macro-light / binary /
no-confirmed-catalyst tapes — all HOLDs were well-reasoned against the rulebook,
none were default-inaction. Three routine runs aborted on transient eToro HTTP
503 storms during key-check (Monday daily-summary, Wednesday pre-market,
Thursday pre-market); each recovered on a same-day re-run. The BTC fill itself
landed via a manual re-fire after Wednesday's 13:15Z pre-market aborted and the
13:37Z market-open correctly refused to trade without a research entry.

**Stats**
| Metric              | Value |
|---------------------|-------|
| Trades opened       |   1   |
| Trades closed       |   0   |
| Win rate            |  n/a  |
| Best trade          |  n/a  |
| Worst trade         |  n/a  |
| Avg hold (days)     |  n/a  |
| Profit factor       |  n/a  |
| Open positions EOW  |   1   |

**Closed trades**
| Symbol | Class | Hold | P&L % | Reason closed                 |
|--------|-------|------|-------|-------------------------------|
| —      | —     | —    | —     | No closes this week.          |

**Open positions EOW**
| Symbol | Class  | Weight% | Unrealized% | Stop  |
|--------|--------|---------|-------------|-------|
| BTC    | crypto |  14.8%  |    −1.6%    | −10%  |

Cash: 85.2% of equity. Deployed: 14.8%. Opens-this-week: 1 of 5 budget. Class
exposure: crypto 14.8% (cap 50%).

**What worked**
- A-grade setup recognized and executed. The BTC thesis on 4/22 (three concurrent
  independent catalysts in the prior 24h) was correctly sized at 15% (inside
  both the 30% name cap and 50% class cap), with a server-side −10% stop
  committed at open, a 2:1 R:R profile, and a catalyst block in the research
  log. Pre-buy gate was walked line-by-line — not skipped.
- Discipline held across four HOLDs. Monday (empty calendar, oil re-rate
  invalidated the energy thesis), Tuesday (Retail-Sales binary direction
  unknown), Thursday (ETH/BTC ratio contracting — named watchlist trigger
  did not fire), Friday (BTC below $79k break-and-hold threshold — same).
  Every HOLD had a named reason, not "nothing obvious."
- Data-quality skepticism paid off twice. Thursday flagged a Perplexity oil/Iran
  narrative hallucination (Hormuz-disruption claim contradicting our ceasefire
  thesis); Friday caught a ~$4.6k-stale Perplexity BTC print. Live eToro rates
  were treated as the operative truth both days — correctly.
- Key-check sanity gate worked as designed. Three 503 storms produced
  KEY=unknown responses; each routine aborted correctly and did not trade into
  an ambiguous key state. No false-positive main-account fills.

**What didn't**
- Benchmark miss. Week return −0.4% vs S&P +0.5% and a 60/40 proxy of +1.5%
  (crypto +3.1% was the week's big bid). Our single crypto long drifted
  −1.6% intraweek from the $78,765 fill to $77,500 on broad crypto softness —
  nothing broke the thesis, but entry was early in the local trend.
- Platform-side 503 storms are killing cron runs. Three of fifteen routine
  firings this week aborted on transient eToro 503s during key-check (20%
  failure rate). The wrapper's retry logic is sound, but the fresh-clone
  container has no ability to self-re-fire within the same cron. Wednesday's
  A-grade BTC thesis required a manual re-fire to convert to a fill — the
  cron path alone would have missed it.
- Opens-cadence still low. 1 of 5 budget used, second week in a row at or below
  1 routine-opened trade. Each HOLD was defensible in isolation, but the
  pattern suggests the entry bar may be calibrated slightly above the actual
  rate at which A-grade setups appear on ordinary tapes. Watch over weeks 3–4.

**Lessons**
- Sizing is the backstop when entry timing is imperfect. A 15% weight drifting
  −1.6% = a −0.24% hit to virtual equity. The strategy's size caps are doing
  exactly what they were designed to do — absorb normal post-entry chop without
  forcing a thesis-exit or stop-out. Keep them.
- Named watchlist triggers > vibes. Thursday (ETH/BTC ratio) and Friday (BTC
  $79k break-and-hold) both offered plausible crypto-add ideas; both failed a
  named, pre-committed condition; both were correctly deferred. The
  reject-reasons in the research log create an auditable chain — this is what
  stops a good week from becoming an over-traded one.
- One A-grade entry is allowed to trail the benchmark in a crypto-up week.
  The trade is still alive (−1.6% unrealized, stop at −10%, thesis intact);
  the grade shouldn't over-weight a single week's unrealized drift.

**Adjustments for next week**
- **No strategy change.** Two weeks in (one fully flat, one with a single
  A-grade entry), the signal-to-noise ratio is still too low to amend
  `TRADING-STRATEGY.md`. Continue to grade discipline above P&L through at
  least weeks 3–4.
- **Operational flag (not a rule change):** the eToro-503 / key-check-unknown
  abort path cost us an auto-fired Wednesday entry. If the pattern persists
  through next week, consider a wrapper-level "one-shot re-fire 5 minutes after
  key-check abort" so the routine can self-heal through transient storms
  within the same cron window. Engineering follow-up, not a strategy edit.

---

### Week of 2026-04-13 → 2026-04-17

**Week return:** +0.2% | **S&P 500 week:** +1.1% | **Alpha:** −0.9%
**60/40 proxy (0.6·SPX + 0.4·BTC):** +1.5% | **Alpha vs 60/40:** −1.3%
**Phase-to-date return:** +0.2%
**Grade: B** _(disciplined HOLD on a no-catalyst Friday; legacy anomalies cleared; trailed benchmark as the cost of dry powder)_

**Context.** This was the first live weekly review. The routines opened zero
new positions this week. At Monday's start the account held two pre-cron
anomaly positions (SPY ~35%, QQQ ~30%) with broken `stopLossRate=0.0001` —
both violated the 20% per-name cap and the "stop set at open" rule. Neither
was opened by these routines; they predate the Monday pre-market fire. By
Friday pre-market those positions were off the account (manual or
platform-side action, not logged through the routines), leaving `positions:[]`
and credit ≈ $10,020.59. Friday's pre-market correctly decided HOLD (empty US
calendar, Iran-truce expiry next week, energy extended). Week-start equity
was taken as the Day 0 baseline since no Monday EOD snapshot exists yet.

**Stats**
| Metric              | Value |
|---------------------|-------|
| Trades opened       |   0   |
| Trades closed       |   0*  |
| Win rate            |  n/a  |
| Best trade          |  n/a  |
| Worst trade         |  n/a  |
| Avg hold (days)     |  n/a  |
| Profit factor       |  n/a  |
| Open positions EOW  |   0   |

_*Two legacy positions (SPY, QQQ) left the account during the week but were
not closed via the routines, so they are not counted in routine stats. The
residual +0.2% equity bump is what those round-trips left behind._

**Closed trades**
| Symbol | Class | Hold | P&L % | Reason closed                        |
|--------|-------|------|-------|--------------------------------------|
| —      | —     | —    | —     | No routine-driven closes this week.  |

**Open positions EOW**
| Symbol | Class | Weight% | Unrealized% | Stop |
|--------|-------|---------|-------------|------|
| —      | —     |   0%    |     —       |  —   |

Cash: 100% of equity (above the 15–25% target band by design, since we were
fully flat going into a no-catalyst Friday).

**What worked**
- Friday's HOLD call was the right read of a no-catalyst tape. Not chasing
  extended energy (+25% YTD) or a quiet bid into the Iran-truce expiry
  window preserved optionality for Monday.
- Pre-market research captured the anomaly-clearing event correctly and flagged
  the reconciliation gap for `daily-summary` instead of papering over it.
- Key-check sanity gate ran cleanly each routine; no KEY=main false alarm.

**What didn't**
- We trailed both the S&P (+1.1%) and the 60/40 proxy (+1.5%) — being 100%
  cash on an up week is the mechanical cost of discipline, but it is still
  the cost.
- TRADE-LOG still shows only Day 0 by EOW Friday. The two legacy closes
  happened outside the routine path and were not logged, so reconciliation
  depends on `daily-summary` catching up. This is a gap in observability,
  not a rule we broke, but it is worth naming.
- We have no market-open routine-sourced fills yet, so the Monday-through-
  Thursday attempts did not convert any of the research log's ideas into
  positions. Worth watching whether the entry bar is calibrated too high.

**Lessons**
- "Patience > activity" is priced: a quiet-tape HOLD is allowed to trail the
  benchmark in a single week. The grade must weight discipline above P&L
  until we have enough weeks to judge the strategy on returns.
- Pre-existing account state can violate the rulebook even before a routine
  has opened a single trade. The key-check and Monday-pre-market holdings
  review are the only chance to catch that — both need to keep being the
  first thing we do, not skipped on "should be flat" assumptions.

**Adjustments for next week**
- No strategy change. One week of data (and zero routine-opened trades) is
  not enough signal to amend `TRADING-STRATEGY.md`. Re-evaluate after 2–3
  weeks of actual routine-driven activity.
- Operational nudge (not a rule change): if `daily-summary` sees a position
  disappear that was not closed via the routine path, it should append a
  synthetic trade entry to `TRADE-LOG.md` with reason `"reconciled (off-routine close)"`
  so the weekly stats table doesn't have to caveat legacy closes next week.

---

## Template (copy for each new week)

### Week of YYYY-MM-DD → YYYY-MM-DD

**Week return:** ±X.X% | **S&P 500 week:** ±X.X% | **Alpha:** ±X.X%
**Phase-to-date return:** ±X.X%
**Grade: X** _(A excellent / B good / C okay / D poor / F broken discipline)_

**Stats**
| Metric              | Value |
|---------------------|-------|
| Trades opened       |   N   |
| Trades closed       |   N   |
| Win rate            |  X%   |
| Best trade          | +X.X% |
| Worst trade         | −X.X% |
| Avg hold (days)     |  X.X  |
| Profit factor       |  X.XX |
| Open positions EOW  |   N   |

**Closed trades**
| Symbol | Class | Hold | P&L % | Reason closed |
|--------|-------|------|-------|---------------|
| …      | …     | …d   | ±X%   | …             |

**Open positions EOW**
| Symbol | Class | Weight% | Unrealized% | Stop |
|--------|-------|---------|-------------|------|
| …      | …     |  X%     |    ±X%      | −10% |

**What worked** (3–5 bullets)
- …

**What didn't** (3–5 bullets)
- …

**Lessons**
- …

**Adjustments for next week**
- (If a rule proved out over 2+ weeks or failed badly, edit TRADING-STRATEGY.md and note the change here.)

---
