---
id: kc-0460
type: claim
track: "Track 10 — The Business of Automation"
topics: [cost, media-generation, pricing, unit-economics]
source_video: BcfjIBd49C8
source_channel: "@nateherk"
source_views: "350K"
confidence: medium
---
# Cost breakdown of a media-generation pipeline

**What:** Running a generative video pipeline has two cost types: per-run pay-as-you-go charges (the language model call is negligible; image generation and especially video generation dominate, since video is the priciest per clip) and fixed monthly subscriptions (audio/sound-effects plan, the render service's credit plan, and an optional publishing service). Per-run media cost lands around a couple of dollars per short, driven mainly by image and video generation.

**Why it matters:** Understanding unit economics lets you decide where to scale quality up or down — you can swap in cheaper image or video models to cut cost, or premium ones for quality — and lets you price the service profitably.

**The moves:**
1. Separate variable per-run costs from fixed monthly subscriptions.
2. Recognize the language-model prompt cost is trivial; images and video dominate the per-run spend.
3. Tune quality vs. cost by choosing cheaper or premium image/video models.
4. Account for subscription tiers (audio plan, render credits, publishing) and estimate runs-per-month from the render credit allotment.

**Watch out for:** Video generation is the single largest cost lever; the numbers shift as model pricing changes, so treat any specific figure as an estimate to re-verify, not a fixed rate.

**Original example to invent:** Source breaks down per-image, per-clip, and monthly-subscription costs for a specific stack. Writers should build a fresh cost model for a different toolset and show a cheaper-vs-premium tradeoff.
