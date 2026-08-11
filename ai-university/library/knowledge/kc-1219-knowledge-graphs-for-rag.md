---
id: kc-1219
type: concept
track: "Track 3 — RAG & Knowledge Bases"
topics: [rag, knowledge-graphs, graph-database, entities, relationships, neo4j]
source_video: PxcOIINgiaA
source_channel: "@ColeMedin"
source_views: "112K"
confidence: high
---
# Knowledge graphs for RAG

**What:** A knowledge graph stores information as entities and the relationships between them (in a graph database). Used alongside a vector store, it lets an agent search not just by similarity but by *how facts connect*. An LLM typically builds the graph by extracting entities and relationships from raw text. The strong pattern is to give the agent two tools — one to search the graph, one to search the vector database — and let it choose or combine them.

**Why it matters:** Vector similarity alone can't reason over interconnected data (versions, memberships, dependencies, "who relates to whom"). A graph captures those relationships explicitly, and combining graph + vector search yields better answers because some information is represented better in one than the other.

**The moves:**
1. Use an LLM to extract entities and relationships from your documents and populate a graph database.
2. Keep your vector store too — don't replace RAG with graphs, combine them.
3. Expose both as agent tools; let it reason ("the graph didn't have it, try the vector DB," or vice versa).
4. Layer this on top of other RAG strategies (hybrid chunking, contextual retrieval) rather than as a substitute.

**Watch out for:** Because graph construction relies on an LLM, it's slower, costlier, and somewhat unpredictable — the same input can yield slightly different graphs. Cheaper LLMs cut cost. Several implementations exist (graph-RAG-style, lighter static variants) with different tradeoffs; static-summary variants suit rarely-changing documents.

**Original example to invent:** Show an agent answering a relationship question via graph search that plain similarity would miss, for an invented interconnected dataset — describe the relationships abstractly, don't reuse the source's entities.
