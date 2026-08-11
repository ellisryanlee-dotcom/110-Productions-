---
id: kc-1202
type: how-to
track: "Track 3 — RAG & Knowledge Bases"
topics: [rag, ingestion, sync, updates, vector-database]
source_video: T1ZKEmDN8AA
source_channel: "@ColeMedin"
source_views: "124K"
confidence: high
---
# Delete-then-reingest to keep a RAG store in sync

**What:** When a source document changes, don't append its new chunks on top of the old ones. First delete every existing record tied to that document (its vector chunks, and any table rows), then ingest the fresh version. This guarantees the knowledge base only ever holds the current content of each file.

**Why it matters:** If stale and updated chunks coexist, retrieval can surface outdated facts and the LLM gets contradictory context, which reliably causes wrong or hallucinated answers. A clean-slate-per-document rule removes that whole class of bug.

**The moves:**
1. Give each document a stable identifier (a cloud file ID, or the file path for local files).
2. On any create/update event, first run a delete keyed to that identifier against the vector table (and any auxiliary rows table).
3. Then run the normal extract → chunk → embed → insert flow for the new version.
4. Store the identifier and title in chunk metadata so the delete can target precisely.

**Watch out for:** Delete before insert, not after, so a mid-run failure never leaves you with only stale data. Make sure the delete key matches exactly what you stored on ingest, or old chunks linger.

**Original example to invent:** Demonstrate editing a document, re-triggering ingestion, and querying to prove the answer reflects the edit — with a different document and edit than the source used.
