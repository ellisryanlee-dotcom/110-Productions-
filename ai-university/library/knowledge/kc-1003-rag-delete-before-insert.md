---
id: kc-1003
type: pitfall
track: "Track 3 — RAG & Knowledge Bases"
topics: [rag, ingestion, deduplication, vector-database, metadata]
source_video: [V_0dNE-H2gw, PEI_ePNNfJQ, mQt1hOjBH9o]
source_channel: "@ColeMedin"
source_views: "590K"
confidence: high
---
# Delete-before-insert to stop duplicate vectors when documents update

**What:** Vector-store insert nodes add new rows; they do not replace old ones. So when a source document changes and you re-ingest it, the new chunks pile on top of the old chunks — the store now holds two versions of the same document. The fix: before inserting, delete every existing vector tied to that document, then insert fresh.

**Why it matters:** Duplicate and stale chunks confuse the model — a lookup can retrieve an old version of a fact alongside the new one, producing wrong or contradictory answers. Many RAG tutorials skip this entirely, which is why their setups fall apart the moment documents get edited. It applies across vector stores (Postgres/Supabase, Pinecone, Qdrant) because none of the standard insert paths upsert by document.

**The moves:**
1. Store a stable identifier (e.g., the source file id) in each chunk's metadata at insert time.
2. On any create-or-update trigger for a file, first run a delete filtered on that file id, clearing all its existing chunks.
3. If you also keep row-level data for tables, delete those rows for the file id too.
4. Extract and re-chunk the current version of the file.
5. Insert the fresh chunks (and upsert the document's high-level metadata record).

**Watch out for:** Updating chunks in place is not enough — if a file shrinks from ten chunks to nine, an in-place update leaves the orphaned tenth chunk behind. Deleting everything for the file id first is the reliable approach. Deletes may need custom code or a store that supports metadata-filtered deletes.

**Original example to invent:** Show a document being edited (a line removed), re-ingested, and demonstrate the stale-chunk bug without the delete step, then the clean result with it.
