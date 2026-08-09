---
id: kc-0404
type: concept
track: "Track 4 — Claude Code & Dev Agents"
topics: [claude-code, sub-agents, agent-teams, model-selection, cost]
source_video: jqoFP9QapXI
source_channel: "@nateherk"
source_views: "415K"
confidence: medium
---
# Parallelize with sub-agents, agent teams, and model tiering

**What:** Ways to split work across multiple agents. Sub-agents are isolated workers each with their own context window and model that research or build in parallel and report back to the main thread. Agent teams go further: the members can talk to each other, share a task list, and assign each other work. Model tiering means running cheap models for grunt work and reserving the strongest model for the main thread.

**Why it matters:** Isolated context windows keep the main thread clean while heavy exploration happens elsewhere, and matching model strength to task difficulty keeps costs down without sacrificing quality where it counts.

**The moves:**
1. In your prompt, tell the main session to spin up sub-agents for complex or parallelizable work (research, tests, alternative approaches).
2. Assign a cheap, fast model to sub-agents doing high-volume/low-judgment work (e.g., reading hundreds of thousands of tokens of articles) and have them return only a short summary to the main agent.
3. Keep the strongest model on the main thread where the reasoning and integration happen.
4. When a large project needs the workers to coordinate rather than just report back, use an agent team so members share state and delegate to each other.

**Watch out for:** Agent teams run longer and cost more than plain sub-agents; use them when cohesion across a big project justifies the expense.

**Original example to invent:** Source describes generic scraping. Writers should invent a concrete multi-agent job (e.g., a competitor-pricing sweep) that shows the cheap-worker / strong-integrator split.
