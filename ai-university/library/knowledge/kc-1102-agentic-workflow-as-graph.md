---
id: kc-1102
type: framework
track: "Track 2 — AI Agents Core"
topics: [langgraph, graph, state, nodes, edges, routing, workflow]
source_video: U6LbW2IFUQw
source_channel: "@ColeMedin"
source_views: "172K"
confidence: high
---
# Modeling an agent workflow as a graph

**What:** A graph-based orchestrator represents a workflow as nodes (units of work, often an agent call) connected by edges (the flow between them). A global state object carries information every node might need (message history, a scope document, IDs). Each node returns an update to that state. Edges can be direct (always go A→B) or conditional (a routing function returns the name of the next node based on the current state).

**Why it matters:** This structure makes complex, looping, non-deterministic agent flows visualizable and maintainable. State is managed per execution (keyed by a thread/conversation ID), so many runs can proceed concurrently without interfering.

**The moves:**
1. Define the shared state schema first (what every node may read/write).
2. Write each node as a function that reads state and returns the fields it updates.
3. Add a start edge, direct edges for fixed steps, and conditional edges for decisions.
4. For a decision point, write a small router function that returns the next node's name.
5. Attach a memory/checkpoint layer for persistence; a graph library can render the whole flow for free.

**Watch out for:** Message history often needs format conversion between how you store it in state and what the agent expects — convert on the way in and out. In-memory state is fine for demos; use a persistent checkpoint store for real use.

**Original example to invent:** Source visualizes a code-generation loop. Diagram a different graph (e.g., intake → triage → resolve → escalate) with one conditional edge.
