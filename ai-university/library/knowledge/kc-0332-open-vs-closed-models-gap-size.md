---
id: kc-0332
type: concept
track: "Elective — Model & Tool Literacy"
topics: [open-source-models, closed-source-models, benchmarks, model-size, hardware]
source_video: O2k_qwZA8HU
source_channel: "@nateherk"
source_views: "530K"
confidence: high
---
# Open vs. closed models: the shrinking gap and the size tradeoff

**What:** Open-source (open-weight) models are published so anyone can download,
inspect, and run them; closed-source models are only reachable through a paid API.
Closed models still generally lead on hard tasks, but the gap is shrinking — some
current open-weight models now outperform once-flagship closed models on coding
benchmarks. Separately, smaller models (fewer parameters) are easier to self-host
because they need less hardware.

**Why it matters:** This is the literacy that lets you choose a model deliberately:
open for control/privacy/cost, closed for top-tier reliability on things you can't
afford to get wrong. And a small-but-strong model is disproportionately valuable
because you can actually run it yourself.

**The moves:**
1. Classify the model: open-weight (downloadable, modifiable) vs. closed
   (API-only, pay per token).
2. For high-stakes work you can't mess up, lean on a top closed model.
3. For control, privacy, or cost, use an open-weight model — locally or via a
   router.
4. When self-hosting, weigh parameter count against your RAM/GPU: prize models
   that are both high-scoring and small.

**Watch out for:** Benchmark leadership shifts fast — verify against current results
for your task rather than trusting yesterday's ranking. Bigger isn't runnable if
your hardware can't hold it.

**Original example to invent:** Source referenced coding-benchmark charts and a
small high-scoring open model. Writers should make the open/closed and size
tradeoff concrete with a current, different example.
