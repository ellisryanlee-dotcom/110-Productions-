---
id: kc-0960
type: tool
track: "Track 3 — RAG & Knowledge Bases"
topics: [neo4j, graphiti, knowledge-graphs, ingestion, llm-extraction]
source_video: p0FERNkpyHE
source_channel: "@ColeMedin"
source_views: "168K views"
confidence: high
---
# Building a knowledge graph with Graphiti on top of Neo4j

**What:** Neo4j is the underlying knowledge-graph engine (with a dashboard UI to visualize nodes and relationships); Graphiti is a library that populates it from documents. During ingestion, Graphiti feeds document content to an LLM that extracts the entities and relationships and writes them into the graph as connected episodes. Querying the finished graph is fast; building it is the slow part.

**Why it matters:** Turning raw documents into a structured graph requires judgment about what the entities and relationships are — that's why an LLM does the extraction. Knowing that ingestion is LLM-heavy (many embedding and completion calls) sets the right expectation: minutes per document, not seconds.

**The moves:**
1. Stand up a Neo4j instance (local package or desktop install) and note its connection URL, username, and password.
2. Point a Graphiti-based ingestion script at your documents folder.
3. Run ingestion (optionally with a clean flag to wipe and rebuild); expect it to be slow as the LLM extracts entities/relationships.
4. Inspect the result in the Neo4j dashboard.
5. Query the graph at runtime, which is quick.

**Watch out for:** Ingestion is computationally expensive and time-consuming; use a lighter, cheaper model for the extraction step to control cost. Provide a "no graph" fast path when you only need vector ingestion.

**Original example to invent:** The source ingested company AI-initiative documents. Writers should show graph ingestion of a different corpus (e.g., research-paper citations) and describe the extracted entities abstractly.
