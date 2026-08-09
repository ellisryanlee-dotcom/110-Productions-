---
id: kc-1220
type: tool
track: "Track 3 — RAG & Knowledge Bases"
topics: [knowledge-graphs, graphiti, temporal, neo4j, agent-memory, rag]
source_video: PxcOIINgiaA
source_channel: "@ColeMedin"
source_views: "112K"
confidence: high
---
# Temporal knowledge graphs with Graphiti

**What:** Graphiti is an open-source library for building *temporal-aware* knowledge graphs on top of a graph database (Neo4j). Unlike static graphs, it's designed for continuously changing data: when a fact changes, it doesn't overwrite — it records the new fact, keeps the old one, and marks when the old one became invalid. So the graph carries a historical record of how knowledge evolved, with typically sub-second query latency.

**Why it matters:** Most real data is dynamic — user preferences, metrics, market conditions, model rankings. Plain RAG goes stale and static graphs lose history. A temporal graph lets an agent answer with the current fact *and* the caveat that a prior fact was once true, which is powerful for personalization and support agents that need past context.

**The moves:**
1. Stand up the graph engine (Neo4j via desktop or a containerized local stack) and set connection env vars.
2. Initialize the client, build indices/constraints once.
3. Add "episodes" — units of information — which can be plain strings or structured JSON key/value objects; the LLM builds entities and relationships from them.
4. Include a reference timestamp on each episode (required, since the graph is temporal); invalidation of superseded facts is handled under the hood.
5. Query with a single search call; results carry a fact, a valid-from time, and (if superseded) an invalidated-at time. Optionally do a center-node search to focus results around one entity — useful as a reranking-style refinement.
6. Close the connection when done to avoid leaks.
7. To build an agent, wrap the search as a tool so the agent decides its own queries and reasons over the returned facts and their time validity.

**Watch out for:** Graph construction makes many LLM + embedding calls per episode, so use cheaper models to control cost. Because an LLM builds relations, graphs vary run-to-run and won't look perfect; leftover data from earlier runs can create duplicate nodes. It suits dynamic data — for rarely-changing document summarization, a lighter static-graph approach may fit better.

**Original example to invent:** Demonstrate a fact that changes over several ingestion phases and an agent that answers with the current value plus historical caveats — using an invented evolving dataset, not the source's LLM-ranking story.
