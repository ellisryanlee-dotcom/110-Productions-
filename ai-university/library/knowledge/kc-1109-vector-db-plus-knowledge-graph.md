---
id: kc-1109
type: framework
track: "Track 3 — RAG & Knowledge Bases"
topics: [knowledge-graph, neo4j, graphiti, vector-database, relationships, retrieval]
source_video: p0FERNkpyHE
source_channel: "@ColeMedin"
source_views: "168K"
confidence: high
---
# Combine a vector database with a knowledge graph

**What:** Store the same source data two ways: as embedded chunks in a vector database (for semantic lookup of individual facts) and as entities-and-relationships in a knowledge graph (for questions about how things relate). The agent, via agentic RAG, chooses which representation fits the question — vector search for "tell me about X," graph search for "how do X and Y relate."

**Why it matters:** Semantic search alone loses relational structure. A knowledge graph captures connections (who invested in whom, who partners with whom) that a flat vector store can't express well. Together they cover both point lookups and relationship reasoning.

**The moves:**
1. Ingest documents into a vector store (e.g., Postgres + vector extension) for semantic retrieval.
2. Also run the documents through an LLM to extract entities and relationships into a graph store (e.g., a graph engine plus a temporal-graph library).
3. Give the agent separate tools for vector search and graph search.
4. In the system prompt, describe when each applies for your data.

**Watch out for:** The agent may sometimes call both even when one would do — fine if the answer is correct. Keep the two stores in sync at ingest time.

**Original example to invent:** Source graphs big-tech AI partnerships. Model a different relational domain (e.g., a supply chain of vendors) to show when graph search beats vector search.
