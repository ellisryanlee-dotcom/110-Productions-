---
id: kc-1048
type: how-to
track: "Track 3 — RAG & Knowledge Bases"
topics: [rag, vector-store, data-hygiene, updates, n8n]
source_video: [T1ZKEmDN8AA, T2QWhXpnT5I]
source_channel: "@ColeMedin"
source_views: ["124K views", "109K views"]
confidence: high
---
# Delete a document's old vectors before re-inserting it

**What:** On every ingest of a file, first delete all existing records for that document from the vector store (and any companion tables), then insert the freshly extracted chunks.

**Why it matters:** When a file is edited and re-ingested, stale chunks from the previous version linger alongside new ones. Mixed old-and-new content confuses retrieval and makes the model answer from outdated information. A clean delete-then-insert guarantees the knowledge base reflects only the current version.

**The moves:**
1. Identify the document by a stable key (its file ID, or its path when no true ID exists).
2. Run a delete against the vector table filtered to that document's records.
3. If tabular rows are stored separately, delete those too.
4. Extract, chunk, and insert the new version.

**Watch out for:** Skipping the delete is the most common cause of a knowledge base that "remembers" content the user already changed or removed. Trigger this on both file-created and file-updated events.

**Original example to invent:** Writers should show the stale-answer failure with their own document and edit, not reuse the source's meeting-notes demo.
