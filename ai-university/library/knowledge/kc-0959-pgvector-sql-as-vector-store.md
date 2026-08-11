---
id: kc-0959
type: tool
track: "Track 3 — RAG & Knowledge Bases"
topics: [postgres, pgvector, supabase, neon, vector-database, rag]
source_video: [p0FERNkpyHE, _R-ff4ZMLC8]
source_channel: "@ColeMedin"
source_views: ["168K views", "133K views"]
confidence: high
---
# Using Postgres + pgvector as a RAG vector store

**What:** A SQL database (Postgres, via managed platforms like Supabase or Neon) can act as a vector database by enabling the pgvector extension. You store chunk embeddings in a vector column alongside ordinary columns (URL, chunk number, title, summary, content, metadata), and run similarity matching with a database function. The same table holds both the vectors for RAG and the structured fields for filtering.

**Why it matters:** Keeping embeddings and structured/relational data in one SQL platform simplifies the stack — you get vector search and normal SQL filtering in one place instead of running a separate vector service plus a database. Managed Postgres platforms offer generous free tiers to start.

**The moves:**
1. Create a Postgres project and enable the pgvector extension.
2. Run the schema SQL to create the table and a similarity-match function.
3. Set the vector dimension to match your embedding model (update it everywhere it appears if you change models).
4. Insert chunks with their embeddings and metadata.
5. Query by embedding the user question and calling the match function.

**Watch out for:** The setup SQL may drop and recreate tables — run it in a fresh project. Vector dimensions must match the embedding model exactly. A dedicated vector database can be faster; Postgres wins on unifying structured data with vectors.

**Original example to invent:** The source stored documentation and company docs. Writers should demonstrate the schema-and-match flow on a different dataset (e.g., support tickets) without reusing the source's exact tables.
