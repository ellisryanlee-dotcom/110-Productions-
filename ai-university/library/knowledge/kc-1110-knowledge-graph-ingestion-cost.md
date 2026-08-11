---
id: kc-1110
type: pitfall
track: "Track 3 — RAG & Knowledge Bases"
topics: [knowledge-graph, ingestion, cost, latency, neo4j, graphiti]
source_video: p0FERNkpyHE
source_channel: "@ColeMedin"
source_views: "168K"
confidence: high
---
# Knowledge-graph ingestion is slow and LLM-expensive

**What:** Building a knowledge graph is far more computationally expensive than inserting into a vector database. Every document must be processed by an LLM to identify entities and relationships, requiring many chat and embedding calls. Where vector insertion takes seconds, graph ingestion of the same document can take minutes.

**Why it matters:** Budget and time planning depend on knowing this asymmetry. Querying the finished graph is fast — it's only the ingest that's slow and costly — so the cost lands up front and scales with corpus size.

**The moves:**
1. Expect vector insert = seconds, graph build = minutes per document.
2. Use a cheaper/lightweight model for the entity-extraction step to control cost.
3. Offer a "skip the graph" fast path for when you only need vector retrieval.
4. Be patient on first ingest; the graph is reusable once built.

**Watch out for:** Costs compound with corpus size and re-ingestion — clean/rebuild tables deliberately, not by accident. Test on a single document before ingesting everything.

**Original example to invent:** Source times ingestion of one big-tech document. Show your own before/after timing on a different document to make the asymmetry concrete.
