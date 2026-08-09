---
id: kc-1101
type: concept
track: "Track 2 — AI Agents Core"
topics: [langgraph, pydantic-ai, orchestration, abstractions, multi-agent]
source_video: U6LbW2IFUQw
source_channel: "@ColeMedin"
source_views: "172K"
confidence: high
---
# Pair an agent framework with a workflow orchestrator

**What:** Two different tools do two different jobs. An agent framework builds individual agents (model + tools + prompt). An orchestration library connects those agents into a multi-step workflow, deciding the order and looping between them. You use both together: build each agent in the framework, then wire them with the orchestrator. Using two orchestration libraries, or two agent frameworks, would be redundant.

**Why it matters:** Real agent systems are non-deterministic — a research step may need several passes before a downstream step succeeds. Coordinating that branching and looping by hand is painful; an orchestrator gives you nodes, edges, and shared state to express it cleanly.

**The moves:**
1. Prefer tools with "low-level abstractions" — they do less magic for you but leave the control needed for intricate behavior.
2. Be wary of high-level frameworks that write less code but hit a wall when you need fine control.
3. Build each specialist agent in the framework; connect them in the orchestrator.

**Watch out for:** High-abstraction frameworks feel great in demos, then block you when a use case needs customization. Don't marry a single tool — learn the underlying principles (nodes, state, routing) so you can swap libraries as they mature.

**Original example to invent:** Source cites a research→chart-generation flow. Invent a different two-agent loop (e.g., outline-writer → fact-checker) to illustrate orchestrated iteration.
