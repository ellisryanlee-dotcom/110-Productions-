---
id: kc-1046
type: how-to
track: "Track 3 — RAG & Knowledge Bases"
topics: [rag, n8n, document-ingestion, file-types, mime-type, extraction]
source_video: T1ZKEmDN8AA
source_channel: "@ColeMedin"
source_views: "124K views"
confidence: high
---
# Routing documents to the right text extractor by file type

**What:** A no-code ingestion pipeline that detects each incoming file's type and sends it down a different extraction path, because a single "extract text" step only works for plain-text-like formats and fails on richer formats such as PDFs and spreadsheets.

**Why it matters:** The hardest part of building a document knowledge base is reliably turning arbitrary files into clean text. No single node handles every format, so you need a branch per format to support real-world document mixes (PDF, spreadsheet, doc, plain text) without hand-processing files.

**The moves:**
1. Trigger the workflow when a file is created or updated in a watched cloud-storage folder (polling on a short interval).
2. Read the file's declared content-type identifier (the MIME type) from the trigger output and store it as a field.
3. Download the file into the automation runtime so its binary is available to later steps.
4. Use a switch/router keyed on that content-type field: one branch to a PDF-specific extractor, one to a spreadsheet-specific extractor, one plain-text extractor as the default/fallback.
5. Feed the extracted text into the chunk-and-embed step that writes to the vector store.

**Watch out for:** Add a default branch so unrecognized types still get handled as plain text. The provider publishes a lookup table mapping every format to its exact content-type string; use it (or upload a sample file and inspect the trigger output) to add new branches. Keep files in one watched folder in production — separate folders were only used to force which test file gets picked up.

**Original example to invent:** Source ingested meeting notes, a PDF, and a spreadsheet from a personal drive. Writers should pick a different document set and storage provider.
