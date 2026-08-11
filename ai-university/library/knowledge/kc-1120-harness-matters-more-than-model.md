---
id: kc-1120
type: claim
track: "Track 4 — Claude Code & Dev Agents"
topics: [harness, model, context, tools, guardrails, benchmarks]
source_video: zbmuiaPuiNM
source_channel: "@ColeMedin"
source_views: "150K"
confidence: medium
---
# The harness matters more than the model

**What:** An agentic coding "agent" = model + harness. The harness is everything you control around the model: instructions/rules, tools, context, guardrails, hooks, orchestration, testing infrastructure, and observability. The claim (attributed to a major vendor's analysis) is that the model itself is only ~10% of what determines results; the harness is the other ~90%.

**Why it matters:** The model is the part you don't control and that everyone shares. The harness is what you build for your specific codebases and stack — so that's where effort pays off. Benchmarks back this: harness/workflow engineering has reportedly lifted a mediocre model into the top tier, or raised scores by margins comparable to the gap between a mid and top model — i.e., a well-harnessed smaller model can match a poorly-harnessed larger one.

**The moves:**
1. Treat the model as roughly fixed; pour effort into the harness.
2. Build lean rules and guardrails, good tools, and codebase-aware context.
3. Add testing/eval infrastructure so the agent self-corrects.
4. Layer observability for production.

**Watch out for:** Chasing the newest model while neglecting the harness leaves most of the available gains on the table. The 10/90 split is an assertion/estimate, not a precise measurement.

**Original example to invent:** Source cites specific benchmark deltas. Make the point with your own harness-before/after anecdote rather than repeating the quoted numbers.
