---
id: kc-2102
type: how-to
track: "Track 9 — Reliability & Craft"
topics: [model-selection, temperature, tokens, cost-engineering]
source_video: ydjRYmM19DY
source_channel: "@LiamOttley"
source_views: "440K"
confidence: high
---
# Inference settings that change output and cost

**What:** The main knobs exposed when calling a model directly, and when to move each.

**Why it matters:** Defaults waste money and produce the wrong kind of output. Matching the model tier and settings to the task is basic cost engineering and reliability.

**The moves:**
1. **Model tier vs. cost** — different models are priced differently. Use the cheapest model that reliably does the task; reserve the top-tier model for tasks that actually need it. A simple pattern-recognition job doesn't need the flagship.
2. **Temperature** — controls randomness. Raise it for creative/ideation tasks; set it near zero when you want rigid, repeatable, deterministic outputs from the same input.
3. **Length / token budget** — the prompt and the response share a fixed context budget; roughly four characters make up one token. Watch the running token count so the prompt plus the expected response stay within the limit.
4. **Frequency / presence penalties** — nudge the model away from repeating itself or toward introducing new topics when you notice it looping.

**Watch out for:** Paying for the flagship model on trivial tasks is pure waste. A long prompt can crowd out room for the response if you don't budget tokens.

**Original example to invent:** Pick a different concrete task and show how choosing a cheaper model plus temperature ~0 gives a stable, low-cost result.
