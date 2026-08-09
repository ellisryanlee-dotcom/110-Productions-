---
id: kc-1205
type: concept
track: "Track 3 — RAG & Knowledge Bases"
topics: [rag, metadata, citation, retrieval, document-tracking]
source_video: T2QWhXpnT5I
source_channel: "@ColeMedin"
source_views: "109K"
confidence: high
---
# Chunk metadata for source citation and filtering

**What:** When you store a chunk, attach metadata to it — at minimum the source document's id and title. Because that metadata rides along whenever the chunk is retrieved, the agent can cite where an answer came from and you can filter or group retrieval by document.

**Why it matters:** Grounded answers are more trustworthy when the agent can say which file a fact came from. Metadata also enables higher-level moves: listing available documents, pulling a whole document by id, or restricting a search to one source.

**The moves:**
1. Decide the metadata fields to carry: document id, title, and anything you'll want to filter or cite on (type, created date).
2. Set these fields on every chunk at insert time.
3. Maintain a separate document-metadata table holding one row per document (title, id, and for tables, the column schema) so the agent can enumerate and reason about sources without scanning all chunks.
4. On retrieval, surface the metadata to the agent so it can attribute the answer.

**Watch out for:** Metadata is only as good as it is consistent — set it on every ingest path (text, PDF, tabular), or some chunks become uncitable and unfilterable.

**Original example to invent:** Show an agent answering and citing "from the onboarding-policy doc" for an invented knowledge base, then filtering a search to a single document.
