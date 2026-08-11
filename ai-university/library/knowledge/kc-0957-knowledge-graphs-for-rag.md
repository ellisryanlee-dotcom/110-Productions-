---
id: kc-0957
type: concept
track: "Track 3 — RAG & Knowledge Bases"
topics: [knowledge-graphs, rag, entities-relationships, neo4j, retrieval]
source_video: p0FERNkpyHE
source_channel: "@ColeMedin"
source_views: "168K views"
confidence: high
---
# Knowledge graphs as a relational way to represent RAG knowledge

**What:** A knowledge graph stores information as entities (nodes) and the relationships (edges) between them, rather than as free-text chunks. This representation is built for relational questions — how two things connect — where a vector search over chunks would struggle. The agent queries the graph to traverse relationships instead of matching similar text.

**Why it matters:** Some questions are inherently about connections ("how are X and Y related?"). Vector similarity finds text that mentions X or Y but doesn't model the relationship itself. A graph captures those links explicitly, giving accurate relational answers, while single-entity lookups may still be better served by plain vector search.

**The moves:**
1. Identify the entities in your domain and the relationships worth capturing.
2. Ingest documents into a graph engine, letting a model extract entities and relationships.
3. Expose graph queries as an agent tool.
4. Route relational questions (comparisons, connections between two things) to the graph.
5. Route simple single-item lookups to vector search.

**Watch out for:** Building the graph is computationally expensive because a model must define all entities and relationships during ingestion — expect ingestion to be slow even though querying is fast. Deciding entity/relationship structure is domain work, not automatic.

**Original example to invent:** The source graphed partnerships and investments between big tech companies. Writers should model a different relational domain (e.g., which suppliers serve which product lines) with their own entities and edges.
