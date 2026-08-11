---
id: kc-0949
type: framework
track: "Track 2 — AI Agents Core"
topics: [langgraph, graphs, nodes-edges, non-deterministic-workflows, orchestration]
source_video: U6LbW2IFUQw
source_channel: "@ColeMedin"
source_views: "172K views"
confidence: high
---
# Modeling agentic workflows as graphs of nodes and edges

**What:** An orchestration graph represents a multi-agent workflow as nodes (each node runs an agent or a step) connected by edges (which determine what runs next). Some edges are unconditional straight-shots; others are conditional edges, where a small routing function inspects the current state and returns the name of the next node to visit. This structure naturally supports non-deterministic flows where the number of loops and the path taken vary run to run.

**Why it matters:** Real agent systems rarely succeed in one linear pass — research may need several attempts, output may need regeneration. Encoding the flow as a graph makes iteration, branching, and looping explicit and visualizable, which is hard to manage with ad-hoc code.

**The moves:**
1. Define each node as a function that does one unit of work and returns a state update.
2. Add unconditional edges for fixed transitions (start → first node → next).
3. Add a conditional edge wherever the path depends on a decision; back it with a router function that returns the target node's name.
4. Loop by routing an edge back to an earlier node until an exit condition is met.
5. Use the framework's studio/visualization to see the graph without extra work.

**Watch out for:** Graphs shine for genuinely non-deterministic, multi-agent flows; for deterministic pipelines they add overhead. Keep routing functions simple and predictable.

**Original example to invent:** The source visualized a reasoner → coder → feedback-loop → finalizer graph. Writers should diagram a different branching workflow (e.g., a support flow that loops between "gather info" and "attempt resolution") using their own node names.
