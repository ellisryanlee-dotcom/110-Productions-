---
id: kc-0313
type: claim
track: "Elective — Model & Tool Literacy"
topics: [cost, pricing, model-selection, unit-economics, multimodal]
source_video: ldETapkr8Hg
source_channel: "@nateherk"
source_views: "898K"
confidence: medium
---
# The cost anatomy of a multimodal automation stack

**What:** Running an image+video+audio automation isn't free per run — costs come
from several metered services at once: the automation platform (a monthly plan),
premium image generation (roughly a fifth of a dollar per image or edit on the
top model), cheaper image models for bulk work (about a cent and a half each),
image-to-video generation (roughly a quarter per short clip), a render/composite
service (credit-metered), text-to-speech (a small monthly plan), and per-token LLM
costs for all the text/reasoning.

**Why it matters:** People ship these builds without knowing the per-run
economics. Knowing where cost concentrates lets you pick cheaper models for
high-volume, low-stakes steps and reserve premium models for user-facing output.

**The moves:**
1. Enumerate every metered service the workflow touches, not just the LLM.
2. Separate per-run variable cost (images, video, tokens, render credits) from
   fixed monthly plans.
3. Route bulk internal steps to cheap models; reserve premium generation for the
   final deliverable.
4. Expose the model choice as a parameter so it can be swapped or made dynamic.

**Watch out for:** These figures are ballpark and change constantly — treat the
*structure* of the cost (which stages dominate) as the durable lesson, not the
exact numbers. "Free" rarely is; you trade money for either hardware or quality.

**Original example to invent:** Source priced a marketing-content stack. Writers
should build a fresh cost breakdown for a different pipeline and current prices.
