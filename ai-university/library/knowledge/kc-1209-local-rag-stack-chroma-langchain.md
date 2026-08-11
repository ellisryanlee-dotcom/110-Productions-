---
id: kc-1209
type: how-to
track: "Track 3 — RAG & Knowledge Bases"
topics: [rag, local-ai, chromadb, langchain, embeddings, chunking]
source_video: uWDocIoiaXE
source_channel: "@ColeMedin"
source_views: "122K"
confidence: high
---
# Local RAG stack: Chroma + LangChain with rebuild-on-run ingestion

**What:** A fully local, offline knowledge base you can stand up with a local vector database (Chroma) and a loader/splitter library (LangChain). For a simple, reproducible setup, the ingest script wipes the vector store and rebuilds it from a data folder every time it runs.

**Why it matters:** Running RAG entirely on your machine keeps data private and costs nothing. Clearing and reloading on each run is a dead-simple way to guarantee no duplicate or stale vectors during development, without tracking per-document deletes.

**The moves:**
1. Put your source documents (e.g., PDFs) in a data directory.
2. Load them with a document loader, then split into chunks with a text splitter.
3. Clear the vector database, then embed every chunk with a local embedding model and insert into the local store.
4. Re-run the ingest script anytime to refresh — because it clears first, you never accumulate duplicates.
5. Use the *same* embedding model at query time as at ingest.

**Watch out for:** Full rebuild-on-run is fine for small local demos but doesn't scale to large or frequently-updated corpora — there you'd want targeted per-document deletes instead. Keep ingest and query embedding models identical or retrieval degrades.

**Original example to invent:** Ingest a different set of local documents (invented, not the source's fake competitor PDFs) and show a grounded answer, emphasizing the clear-then-reload step.
