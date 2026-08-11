---
id: kc-0947
type: concept
track: "Track 2 — AI Agents Core"
topics: [pydantic-ai, langgraph, orchestration, multi-agent, architecture-decisions]
source_video: U6LbW2IFUQw
source_channel: "@ColeMedin"
source_views: "172K views"
confidence: high
---
# Agent builder vs. workflow orchestrator: two different jobs

**What:** There are two distinct kinds of tools in an agentic stack, and pairing them is powerful because they do not overlap. An agent-builder framework (the source uses Pydantic AI) creates individual agents — each a model plus tools. An orchestrator (the source uses LangGraph) does not build agents; it connects agents built elsewhere into a coordinated workflow so they can reason together about one problem or conversation. You build the pieces with the first tool and wire them together with the second.

**Why it matters:** Trying to make one library do both jobs leads to friction. Keeping "build an agent" separate from "coordinate several agents" lets each layer stay simple: agents are easy to define and run, while the orchestrator owns the routing, looping, and shared state between them.

**The moves:**
1. Build each specialist agent (researcher, coder, router, summarizer) with the agent framework.
2. Represent the overall flow in the orchestrator as connected steps.
3. Let the orchestrator decide which agent runs next, including loops and retries.
4. Keep any single-agent logic out of the orchestrator and vice versa.

**Watch out for:** Reaching for an orchestrator when a single agent (or a straight-line workflow) would do adds real complexity. Only introduce orchestration when multiple agents genuinely need to coordinate.

**Original example to invent:** The source connected a research agent to a chart-generator agent via a router. Writers should design a different multi-agent flow (e.g., an intake agent handing off to a triage agent then a drafting agent) and show which tool builds each agent vs. wires them.
