---
id: kc-1200
type: how-to
track: "Track 3 — RAG & Knowledge Bases"
topics: [rag, ingestion, file-types, pdf, excel, mime-type, n8n]
source_video: T1ZKEmDN8AA
source_channel: "@ColeMedin"
source_views: "124K"
confidence: high
---
# Extracting text from many file types for RAG

**What:** A RAG knowledge base can only store what you can turn into text, but no single node/library reliably extracts text from every document type. The fix is to branch on the file's type and route each document to a type-specific extractor (PDF parser, spreadsheet parser, plain-text reader) before chunking and embedding.

**Why it matters:** Real knowledge bases contain PDFs, spreadsheets, docs, CSVs, and markdown — not just clean text. Without per-type extraction, PDFs and Excel files either fail or produce garbage, so the agent can't answer from them. This is usually the hardest part of a RAG ingestion pipeline; the vector store itself is the easy part.

**The moves:**
1. On ingest, read the document's declared type. In cloud drives this is the MIME type (e.g., a string meaning "PDF" vs "spreadsheet" vs "document"); for local files, derive it from the file extension.
2. Send the type into a switch/branch with one path per handled format, plus a default path for anything simple enough to read as raw text (plain text, CSV, markdown).
3. On each branch, use the extractor built for that format to pull out text.
4. Converge the branches, then feed the extracted text into your normal chunk → embed → insert flow.
5. To support a new format later, add one branch keyed to that type's identifier.

**Watch out for:** Look up the exact type identifier string for each format from the provider's reference table (or ingest one sample file and inspect what identifier comes through) — guessing the string breaks the routing. Spreadsheets are not the same type as a cloud-native "sheet"; treat them distinctly. Different extractors emit their result under different field names (see the output-field pitfall card).

**Original example to invent:** The source ingests fake meeting notes, a PDF, and an Excel file into a Google Drive folder. Build a different ingestion demo — e.g., a folder mixing a policy PDF, a pricing spreadsheet, and a markdown FAQ for an invented business.
