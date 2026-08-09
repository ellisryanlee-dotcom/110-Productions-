---
id: kc-0100
type: concept
track: "Track 2 — AI Agents Core"
topics: [ai-agents, ai-workflows, determinism, architecture-decisions]
source_video: Ey18PDiaAYI
source_channel: "@nateherk"
source_views: "1.8M"
confidence: high
---
# AI workflow vs. AI agent: choosing the right structure

**What:** Both an AI workflow and an AI agent combine a language model with tools, but they differ in who decides the order of operations. A workflow runs a fixed, linear sequence of steps every time (step 1 → 2 → 3), with AI used inside some steps. An agent is given a set of tools and a goal, and its model decides at runtime which tools to call, how many times, and in what order.

**Why it matters:** The core planning question for any build is whether the process is deterministic (predictable, same steps every run) or non-deterministic (needs judgment/variability). Picking an agent when a workflow suffices adds cost, latency, and failure points; picking a workflow when you truly need dynamic decisions makes the system rigid.

**The moves:**
1. Map the process end to end and ask: does it follow the same path every time?
2. If yes, build a linear workflow — AI only in the steps that need language understanding.
3. If the next step genuinely depends on interpreting unpredictable input, use an agent.
4. Weigh the four workflow advantages: consistency/reliability, lower cost (no repeated "which step next" model calls), easier debugging (you see exactly which node failed), and cleaner scaling (add nodes vs. bloating one system prompt).
5. Default to the simplest structure; escalate to agents only when dynamic tool-calling is required.

**Watch out for:** "Agent" is a hype term — many published "agents" are really AI-enhanced workflows. Every extra model decision costs money and can hallucinate; a workflow removes those decisions where none are needed.

**Original example to invent:** The source contrasts a CRM lead → research → email pipeline done two ways. Invent a different everyday business process (e.g., expense approvals or shift scheduling) and show it once as a fixed workflow and once as an agent, highlighting where variability does or doesn't exist.
