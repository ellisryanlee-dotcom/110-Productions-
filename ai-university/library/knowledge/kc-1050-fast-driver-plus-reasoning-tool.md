---
id: kc-1050
type: concept
track: "Track 9 — Reliability & Craft"
topics: [reasoning-models, agent-architecture, orchestration, latency, rag]
source_video: uWDocIoiaXE
source_channel: "@ColeMedin"
source_views: "122K views"
confidence: high
---
# Pairing a fast driver model with a slow reasoning model exposed as a tool

**What:** An agent architecture where a lightweight, fast, non-reasoning model runs the main conversation and orchestration, and a powerful but slow reasoning model is wrapped as a single tool the fast model can call only when deep reasoning is genuinely needed.

**Why it matters:** Reasoning models are strong but slow and costly to run on every turn. Making reasoning an on-demand tool keeps the overall interaction snappy while still giving access to heavy reasoning at the exact moments it pays off — for example, extracting nuanced insight from retrieved context.

**The moves:**
1. Choose a fast general model to drive the conversation and decide when to act.
2. Wrap the reasoning model as a tool with a clear description of when to invoke it.
3. On a reasoning call, pass in the task plus any retrieved context; return only the distilled answer to the driver.
4. Let the driver continue the conversation with that result, calling the reasoning tool again only as needed.

**Watch out for:** The reasoning tool adds latency whenever used, so its trigger conditions matter. Keeping reasoning behind a tool boundary also lets you swap the reasoning model independently.

**Original example to invent:** Source applied this to a knowledge-base Q&A flow. Writers should invent a different domain where selective deep reasoning helps.
