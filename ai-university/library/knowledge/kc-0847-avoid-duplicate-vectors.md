---
id: kc-0847
type: pitfall
track: "Track 3 — RAG & Knowledge Bases"
topics: [rag, vector-database, ingestion, duplicates, metadata]
source_video: PEI_ePNNfJQ
source_video: V_0dNE-H2gw
source_video: mQt1hOjBH9o
source_channel: "@ColeMedin"
source_views: "271K"
confidence: high
---
# Re-ingesting a document creates duplicate vectors unless you delete first

**What:** Vector-store insert operations in most no-code tools are plain inserts, not
upserts. When a source file is updated and re-ingested, the new chunks are added
alongside the old ones instead of replacing them, leaving stale and current versions of
the same content coexisting in the knowledge base.

**Why it matters:** Duplicated or conflicting chunks confuse retrieval and the model —
you can get answers drawn from an outdated version of a file. This bug is common in
tutorials that skip the cleanup step.

**The moves:**
1. Store a stable identifier (the source file ID) in each chunk's metadata at insert time.
2. Before ingesting a file, delete every existing vector whose metadata file ID matches
   the file being (re)ingested — a clean slate.
3. Then extract, chunk, embed, and insert the current version.
4. Deleting everything for that file (rather than trying to update chunks in place) is the
   surefire approach, because a shorter new version would otherwise leave orphan chunks.

**Watch out for:** This applies across vector stores (Supabase/pgvector, Qdrant,
Pinecone). In no-code tools the delete-by-metadata step may need custom code or a
provider node that supports metadata filters.

**Original example to invent:** Source used meeting-notes files keyed by Drive file ID.
Writers should use a different document type and a different unique key.
