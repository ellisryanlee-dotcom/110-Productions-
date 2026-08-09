---
id: kc-0958
type: framework
track: "Track 3 — RAG & Knowledge Bases"
topics: [agentic-rag, knowledge-graphs, vector-database, hybrid-retrieval, dual-store]
source_video: p0FERNkpyHE
source_channel: "@ColeMedin"
source_views: "168K views"
confidence: high
---
# Combining a vector database and a knowledge graph in one agent

**What:** A powerful agentic-RAG pattern stores the same source data two ways — chunked-and-embedded in a vector database, and as entities/relationships in a knowledge graph — and gives the agent tools for both. The agent reasons per question about which store to use: vector search for information about a single item, the graph for relationships between items, or both when a question needs a fact plus a relationship.

**Why it matters:** No single retrieval representation is best for every question. Offering two complementary views of the same knowledge, and letting the agent pick, covers both point lookups and relational reasoning without forcing one to serve both poorly.

**The moves:**
1. Ingest each document into both a vector store and a knowledge graph.
2. Give the agent a vector-search tool and a graph-search tool.
3. In the system prompt, describe when each store is appropriate for your data.
4. Let the agent choose one or both per query and synthesize the results.

**Watch out for:** Because the agent reasons about tool choice, it won't behave identically every time — it may use both stores when one would do. Maintaining two representations of the same data doubles ingestion cost and complexity.

**Original example to invent:** The source answered questions about companies' AI initiatives using both stores. Writers should build a different dual-store scenario (e.g., a product catalog answered by vector lookups plus a graph of compatibility relationships) with their own prompts.
