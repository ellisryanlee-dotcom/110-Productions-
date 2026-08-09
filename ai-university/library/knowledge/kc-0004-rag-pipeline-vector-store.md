---
id: kc-0004
type: how-to
track: "Track 3 — RAG & Knowledge Bases"
topics: [rag, vector-database, embeddings, chunking, pinecone, supabase, namespaces]
source_video: Ey18PDiaAYI
source_channel: "@nateherk"
source_views: "1.8M"
confidence: high
---
# RAG pipeline: ingesting documents and querying a vector store

**What:** A retrieval-augmented-generation setup has two halves that are built and tested separately: an ingestion path that watches a document source (e.g., a Google Drive folder), downloads each new file, splits it into chunks, converts the chunks to embeddings, and writes them into a vector database (e.g., Pinecone or Supabase); and a retrieval path where an agent (or a plain workflow step) embeds an incoming question the same way and asks the vector database for the nearest matching chunks before answering.

**Why it matters:** Splitting these into two testable halves is what makes RAG debuggable — the ingestion side can be verified to have produced the right number of vectors with the right content before ever touching the retrieval/answering side, instead of trying to diagnose both at once from a single bad chatbot answer.

**The moves:**
1. On ingestion: trigger on a new/changed file, download its binary content, feed that binary (not the raw JSON metadata) into a document loader, and pass it through a text-splitter node — a "recursive character" splitter with a chunk size (around 1000 characters) and optional overlap is a safe default for preserving context across chunk boundaries.
2. Choose one embeddings model and use that exact model on both the ingestion side and the retrieval side — a mismatch between the model that embedded the stored chunks and the model that embeds the live query silently produces poor matches.
3. Organize a single vector index into named partitions ("namespaces" in Pinecone, or an equivalent) so unrelated document sets don't get search-mixed together, and reference the same partition name on the retrieval side.
4. On retrieval, expose the vector store to an agent as a named tool with a short description of what knowledge it holds — the agent decides for itself when a question needs that tool versus general knowledge.
5. For a fixed, cheaper alternative to an agent-driven lookup, call the vector search as a plain step (not a tool) immediately after the trigger, then filter out results below a relevance-score threshold and aggregate the remaining chunks into the prompt for a single dedicated "answer" model call.

**Watch out for:** An index or table created for vector search only accepts data shaped for embeddings — sending it a document's raw metadata JSON instead of its actual binary content silently ingests garbage. A vector-store tool with no explicit system-prompt guidance about what it contains and when to use it can still work by trial, but naming the tool clearly and describing its contents in the prompt reduces wrong non-use.

**Original example to invent:** Source ingested a company policy/FAQ document and a body-shop service document as its running examples. Writers should build the ingestion-plus-retrieval pair around an unrelated knowledge base, such as a product spec sheet or an internal onboarding guide.
