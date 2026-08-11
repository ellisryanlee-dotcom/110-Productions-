---
id: kc-1207
type: framework
track: "Track 2 — AI Agents Core"
topics: [reasoning-models, orchestration, agents, deepseek-r1, latency]
source_video: uWDocIoiaXE
source_channel: "@ColeMedin"
source_views: "122K"
confidence: medium
---
# Reasoning model as a tool for a faster orchestrator agent

**What:** Reasoning models are powerful but slow. Rather than run everything through one, use a fast, lightweight non-reasoning model to drive the conversation and decide what to do, and expose the slow reasoning model as a *tool* the fast model calls only when deep analysis is needed. The heavy reasoning happens on demand, not on every turn.

**Why it matters:** It buys you the reasoning model's quality where it counts (e.g., extracting insights from retrieved context) while keeping the overall interaction responsive and cheap. It's a general orchestration pattern, not specific to any one framework.

**The moves:**
1. Pick a nimble model as the primary/orchestrator that handles the dialogue and tool selection.
2. Wrap the reasoning model behind a tool the orchestrator can invoke (e.g., a "reason over this retrieved context" tool).
3. Feed the tool the relevant context plus the user's question; return the reasoned answer to the orchestrator to continue.
4. Cap the reasoning model's internal step/loop count — left unbounded, small reasoning models tend to spiral and hallucinate.
5. Optionally let the reasoner hand back a *better query* so the orchestrator can retry retrieval — a cheap way to get self-correcting behavior.

**Watch out for:** Limit reasoning iterations (a small max like two internal steps worked in the source). Some agent frameworks mishandle reasoning models' "thinking" tokens and throw parse errors you may need to tolerate or filter.

**Original example to invent:** Show a fast model fielding small talk directly but delegating a hard analytical question to a reasoning-model tool — with a different domain than the source's competitor analysis.
