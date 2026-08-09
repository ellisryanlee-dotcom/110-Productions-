---
id: kc-1054
type: pitfall
track: "Track 9 — Reliability & Craft"
topics: [reasoning-models, agent-loops, hallucination, guardrails, max-steps]
source_video: uWDocIoiaXE
source_channel: "@ColeMedin"
source_views: "122K views"
confidence: high
---
# Cap an agent's internal step loop to stop reasoning-model hallucination

**What:** Frameworks that let an agent iterate on a problem in multiple internal steps can hallucinate when the model loops too many times. Setting a low maximum number of steps for a reasoning agent keeps it from spiraling.

**Why it matters:** More reasoning iterations is not always better. Left unbounded, a reasoning model that keeps talking to itself starts producing degraded or invented output. A tight step cap is a cheap, effective guardrail.

**The moves:**
1. When constructing an agent that reasons in iterative steps, set an explicit low ceiling on those steps.
2. For a pure reasoning tool that only needs to reflect once on given context, keep the ceiling minimal (e.g., allow just one extra reflection).
3. Tune upward only if the task genuinely benefits, watching for the point where quality degrades.

**Watch out for:** The failure is empirical — you notice it during testing as answers get worse over many loops, not as an error. Defaults may be higher than you want.

**Original example to invent:** Writers should describe a step-loop failure abstractly and choose their own numbers, not copy the source's exact configuration.
