---
id: kc-1108
type: concept
track: "Track 3 — RAG & Knowledge Bases"
topics: [rag, embeddings, chunking, vector-database, pgvector, retrieval]
source_video: p0FERNkpyHE
source_channel: "@ColeMedin"
source_views: "168K"
confidence: high
---
# Vanilla RAG and why it's usually not enough

**What:** Basic (a.k.a. naive/classic) RAG: split documents into bite-sized chunks, turn each chunk into a vector with an embedding model, and store the vectors in a vector database (e.g., Postgres with a vector extension, or a dedicated vector DB). At query time, embed the user's question with the same model, match it to the nearest chunks, and paste those in as extra context so the LLM's answer is grounded ("retrieval-augmented").

**Why it matters:** It grounds answers in your own data instead of the model's training. But it's a single, rigid pass — the agent has to use whatever came back, can't refine the search, and can't reason across multiple sources. For anything beyond simple single-fact lookups it tends to fall apart.

**The moves:**
1. Chunk documents so each chunk is self-contained.
2. Embed chunks with a model; store vectors plus content and metadata.
3. Embed the incoming question with the same model.
4. Retrieve top-N nearest chunks and inject them into the prompt.

**Watch out for:** Use the same embedding model for ingest and query. The whole approach is a one-shot with no room to iterate — its inflexibility is the reason to move to agentic RAG. Retrieval quality degrades as the store grows.

**Original example to invent:** Sources index framework docs. Demonstrate the basic pipeline on a different small corpus and then show a query where the single-shot retrieval visibly returns incomplete context.
