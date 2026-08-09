---
id: kc-0857
type: how-to
track: "Track 3 — RAG & Knowledge Bases"
topics: [n8n, rag, ingestion, google-drive, embeddings, no-code]
source_video: PEI_ePNNfJQ
source_video: mQt1hOjBH9o
source_video: c5dw_jsGNBk
source_channel: "@ColeMedin"
source_views: "271K"
confidence: high
---
# Build a no-code RAG ingestion pipeline in n8n

**What:** A no-code workflow that watches a file source, extracts each file's text, chunks
and embeds it, and inserts it into a vector store — the pipeline that keeps a RAG knowledge
base in sync with your documents.

**Why it matters:** RAG is only as good as the ingestion behind it. Automating create/update
handling means the knowledge base stays current without manual work, and it's the half of a
RAG system most tutorials under-build.

**The moves:**
1. Trigger: poll a folder (e.g., Google Drive) for files created and, separately, files
   updated. Handle multiple files arriving at once by looping over them.
2. Set key fields (file ID, type, title, URL) for downstream steps.
3. Clear old data: delete existing vectors/rows for this file ID first (see the duplicate
   pitfall) and upsert the file's high-level metadata record.
4. Download the file and extract text via a switch on file type (docs/PDF vs spreadsheets
   need different extraction).
5. Load with a default data loader, split with a text splitter, embed, and insert into the
   vector store — storing file ID and title in each chunk's metadata for dedup and citations.

**Watch out for:** No delete-file trigger exists in the Drive trigger, so removals aren't
auto-reflected. Credentials for Drive/Supabase have "open docs" helpers in n8n. Different
file types (especially tables) need separate branches.

**Original example to invent:** Sources ingested a Drive "meeting notes" folder. Writers
should use a different source folder and document set.
