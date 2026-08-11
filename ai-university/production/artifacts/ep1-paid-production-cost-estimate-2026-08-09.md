# EP1 Paid-Production Cost Estimate — "Crash Test #1"

**Episode:** AI University · *Crash Test Agents* · Episode 1 — "Crash Test #1"
**Prepared:** 2026-08-09 · parent OPE-156
**Status:** DRAFT for Ryan spend-approval. **$0 spent producing this doc. No paid asset generated, no approval created.**

---

## Framing — Tier-0-first economics

The deterministic pipeline is already complete at **$0**: SCRIPT approved → EDITOR re-gate PASS →
SCREENPLAY approved (25-break Kill-Counter HUD) → BRANDING locked → **52/52 keyframes built Tier-0**
(HTML/CSS/SVG). Per the screenplay ASSET MANIFEST: **49 of 52 shots (~94%) are deterministic**
SCREEN-SIM / MOTION-GRAPHIC / TITLE-CARD renders; **base cut = 0 AI-gen required.** Only **3 shots**
(S017 soup, S035 puppy-warehouse, S043 valet-key) carry an *optional* ⚠️AI-GEN b-roll overlay, and
**each already has a built Tier-0 fallback that loses no information** (the analogy lands in the VO).

Rule applied below: **deterministic compute is preferred; we only pay where there is no deterministic
option.** That leaves exactly one unavoidable paid surface — **VOICE** — plus three optional surfaces.

Scope inputs: VO ≈ **3,084 words** (front-matter target) / **~16,700 characters** measured over the 57
`VO:` lines → est. **~17–20 min** narration. Branded voice spec (brand bible §8): *"neutral synthetic
AI voice, clear mid-tone US male — even, confident, unhurried; consistent across all episodes as a
series signature."*

---

## Summary table

| Surface | Recommended approach | Recommended cost | Full / premium alt |
|---|---|---|---|
| 1. **VOICE (TTS)** | ElevenLabs Creator (series-signature voice), 1 billing cycle, cancelable | **$22** | $22 (no premium needed) |
| 2. **VIDEO GEN** | Tier-0: headless-Chrome (Playwright) screencast of the 49 animated keyframes → ffmpeg / DaVinci Resolve (free) assembly | **$0** | AI image-to-video ~$50–150+ (higgsfield/Veo) — **not** recommended |
| 3. **AI-GEN B-ROLL** (S017/S035/S043) | Tier-0 fallbacks already built — skip AI gen | **$0** | higgsfield 500-credit top-up **$25** (account floor; see §3) |
| 4. **MUSIC / SFX** | YouTube Audio Library (free, YT-monetization-safe) | **$0** | Epidemic Sound Commercial $49/mo, or Personal ~$6/mo (annual) |

**Cheapest watchable episode = VOICE only = ~$22, everything else Tier-0/free.**

---

## 1. VOICE (TTS narration) — the only unavoidable paid surface

Pricing a single clean pass of **~17,000 characters** (headroom to ~19–20k for retakes). Per-provider:

| Provider / model | Rate (2026) | ~17k-char pass | Notes on fit |
|---|---|---|---|
| **ElevenLabs Creator** | $22/mo sub · 100k–121k credits (~1 credit/char) · overage $0.30/1k | **$22** (covers ~5–7 full passes in the month) | Best synthetic-narrator quality + **persistent custom/cloned voice reused every episode = the series signature**. Commercial license included. Cancelable after Ep1. |
| **OpenAI `gpt-4o-mini-tts`** | ~$0.015/min audio (token-based) | **~$0.27** | Excellent price; natural neutral voice. No persistent custom voice — consistency depends on fixed voice+params. |
| **OpenAI `tts-1-hd`** | $30/1M char ($0.03/1k) | **~$0.51** | Good, cheap, 9 built-in voices. |
| **OpenAI `tts-1`** | $15/1M char | **~$0.26** | Serviceable, slightly flatter. |
| **Azure Neural TTS** | $16/1M char · **500k char/mo free** | **~$0.00–0.27** | First pass free under monthly free tier; solid neutral US-male neural voices. Neural HD $22/1M. |
| **Amazon Polly Neural** | $16/1M char · 1M char/mo free (first 12 mo) | **~$0.00–0.27** | Free tier likely covers first pass. Generative engine pricier. |
| **Google Chirp 3: HD** | $30/1M char | **~$0.51** | Human disfluencies/emotion; WaveNet legacy tier is $4/1M (~$0.07) but robotic. |
| **PlayHT** | ~$39/mo subscription (freemium) | **$39** | No advantage over ElevenLabs at this scale. |

**Recommendation: ElevenLabs Creator ($22).** Two providers are effectively free-to-sub-dollar
(Azure free tier ~$0; OpenAI `gpt-4o-mini-tts` ~$0.27) and are perfectly watchable — those are the
true budget floor. ElevenLabs wins on the one thing that matters for a *series*: a **cloned, persistent
"neutral synthetic mid-tone US male" voice you re-use identically every episode** (brand bible §8
requires exactly this consistency), plus best-in-class naturalness for a synthetic narrator. At $22
for a cancelable month that also covers 5–7 retake passes, it's still "a few dollars." If Ryan wants
the absolute floor, swap to **OpenAI `gpt-4o-mini-tts` (~$0.30)** or **Azure free-tier ($0)** with a
fixed voice — the doc's LEAN band below prices that in.

---

## 2. VIDEO GEN — Tier-0 default = $0

**Default (recommended): $0 deterministic.** The 49 non-b-roll keyframes are HTML/CSS/SVG. They
animate via CSS/GSAP and are captured to clips with a **headless-Chrome screen recorder
(Playwright `page.video` / Puppeteer screencast, or a `puppeteer-screen-recorder`)**, then assembled
on the timeline with **ffmpeg** or **DaVinci Resolve (free tier)**. Compute only — no paid model, no
per-shot fee. This preserves pixel-crisp UI/text legibility that AI video cannot reliably reproduce.

**More-expensive alternative (NOT the default):** AI image-to-video per shot (higgsfield image-to-video,
or a Veo-class model). At ~$1–3 of credits per 3–5s clip × up to 49 shots = **~$50–150+**, and it
*degrades* the deterministic UI shots (jitter, garbled on-screen text). Reserve AI video only for the
3 metaphor b-roll shots in §3, never for the SCREEN-SIM shots.

---

## 3. AI-GEN B-ROLL — 3 optional shots, default $0

The 3 gated shots each have a shipping Tier-0 fallback, so **base recommendation = skip AI gen, $0**:

| Shot | Metaphor | Built Tier-0 fallback (loses no info) |
|---|---|---|
| S017 | soup-pot + pinch-of-spice | paired "one line → test → adjust" loop animation |
| S035 | puppy-in-warehouse-with-keys | "guardrails" title-card slate |
| S043 | valet-key handoff | scoped sift-bot account + invoice line-item UI |

**Paid version — higgsfield (given account state, do not re-fetch): balance = 2.01 credits, plan =
"ultimate".** 2.01 credits generates nothing, so **any** AI b-roll requires a **credit top-up first.**
Higgsfield one-time credit packs (2026, ~20–22 credits/$, expire ~90 days):

| Pack | Price (2026) |
|---|---|
| 500 credits | **~$25** |
| 1,000 credits | ~$48 |
| 2,000 credits | ~$89 |
| 4,000 credits | ~$179 |

A ~5s image-to-video clip runs ~20–40 credits, so all **3 b-roll clips (~90–150 credits) fit inside
the smallest 500-pack** with headroom. **Key finding: the practical floor to produce *any* higgsfield
b-roll is the $25 top-up**, not the marginal credit cost — so "1 b-roll" and "3 b-roll" cost the same
$25 at the credit-pack level. Recommend: if we do b-roll at all, do all 3 stills/clips from one 500-pack.

---

## 4. MUSIC / SFX — default $0

**Default (recommended): $0.** The **YouTube Audio Library** provides monetization-safe, royalty-free
background beds and SFX that clear cleanly on a YouTube upload — sufficient for a faceless explainer.

**Cheap paid alternative:** **Epidemic Sound** — Personal **~$6/mo (annual, ~$72/yr)** or Commercial
**$49/mo ($228/yr = ~$19/mo)**, native YouTube clearance, owns its catalogue (truly royalty-free).
Alternative: **Artlist** Music ~$16.60/mo (annual) — but PRO-affiliated artists can create clearance
friction, so Epidemic is the safer pick if we pay. One cancelable month of Epidemic Personal (~$6)
covers Ep1 if we want a broader catalog than the free library.

---

## Three spend scenarios (single "approve up to $X" ceiling each)

| Scenario | Composition | Low | Expected | High | **Approve up to** |
|---|---|---|---|---|---|
| **(a) LEAN** | VOICE only · VIDEO Tier-0 $0 · b-roll Tier-0 $0 · music YT-lib $0 | **$0** (Azure free tier / OpenAI $0.30) | **$22** (ElevenLabs) | **$22** | **$25** |
| **(b) EXPECTED** | VOICE + music license + up to 1 AI b-roll | **$28** ($22 voice + $6 Epidemic Personal + $0 b-roll skipped) | **$53** ($22 + $6 music + $25 higgsfield 500-pack) | **$96** ($22 + $49 Epidemic Commercial + $25) | **$100** |
| **(c) FULL** | VOICE + all 3 AI b-roll + AI video gen + licensed music | **$96** ($22 + $49 music + $25 min top-up) | **$159** ($22 + $49 + $88 higgsfield 2,000-pack for AI video-gen headroom) | **$250** ($22 + $49 + $179 higgsfield 4,000-pack) | **$250** |

Notes: most cost is **cancelable one-month subscriptions** used for a single episode, so effective
one-time outlay sits at the low end of each band. Higgsfield top-up credits expire in ~90 days — buy
only against actual planned gens.

---

## Recommendation — put **LEAN** in front of Ryan

**Approve LEAN with a ceiling of up to $25.** It buys a genuinely watchable, on-brand episode for the
price of one cancelable ElevenLabs month: the branded series-signature synthetic narrator ($22) over a
fully deterministic Tier-0 video (the 49 animated keyframes screen-recorded and assembled for $0), free
YouTube-Audio-Library music, and the already-built Tier-0 fallbacks for the 3 metaphor shots. Nothing
in EXPECTED or FULL is required to ship — AI b-roll and licensed music are polish, and AI video gen is
strictly *worse* for the UI-heavy shots that make up 94% of the runtime. This is the "Tier-0 first,
ship it" path: prove Episode 1 lands, then decide per-surface whether polish is worth a top-up. If Ryan
wants the absolute floor, the LEAN low band ($0–0.30 via Azure free tier / OpenAI `gpt-4o-mini-tts`)
ships the same episode for pocket change, trading only the reusable cloned voice.

---

### Sources (all accessed 2026-08-09)

- ElevenLabs pricing 2026 — [smallest.ai](https://smallest.ai/blog/elevenlabs-pricing-plans-cost-what-you-get-in-2026), [BIGVU](https://bigvu.tv/blog/elevenlabs-pricing-2026-plans-credits-commercial-rights-api-costs/)
- OpenAI TTS pricing 2026 — [TextToLab](https://texttolab.com/blog/openai-tts-pricing), [costgoat](https://costgoat.com/pricing/openai-tts)
- Google Cloud TTS pricing 2026 — [TextToLab](https://texttolab.com/blog/google-cloud-tts-pricing)
- Azure TTS pricing 2026 — [TextToLab](https://texttolab.com/blog/azure-text-to-speech-pricing)
- Amazon Polly pricing 2026 — [TextToLab](https://texttolab.com/blog/amazon-polly-pricing), [AWS](https://aws.amazon.com/polly/pricing/)
- Higgsfield credit packs 2026 — [imagine.art](https://www.imagine.art/blogs/higgsfield-ai-pricing), [Scopeful](https://www.scopeful.org/tools/higgsfield)
- Epidemic Sound / Artlist 2026 — [Epidemic vs Artlist](https://freemiumvisuals.com/epidemic-sound-vs-artlist/), [fluxnote](https://fluxnote.io/guides/epidemic-sound-vs-artlist-2026)
- YouTube Audio Library — free, YouTube-native license.

_Bands are estimates; actual spend reported against the approved ceiling._
