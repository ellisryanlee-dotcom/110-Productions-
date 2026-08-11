---
id: kc-1047
type: pitfall
track: "Track 3 — RAG & Knowledge Bases"
topics: [rag, n8n, document-loader, extraction, debugging]
source_video: T1ZKEmDN8AA
source_channel: "@ColeMedin"
source_views: "124K views"
confidence: high
---
# Different extractors emit text under different field names

**What:** Each format-specific extraction node writes its result to a differently named output field, so the downstream document-loader that chunks the text must reference the correct field or it silently gets nothing.

**Why it matters:** This is a subtle failure that produces an empty or broken knowledge base without an obvious error. If your loader is hardcoded to one field name, only one file type will actually ingest.

**The moves:**
1. Note that the plain-text extractor, the PDF extractor, and the spreadsheet-summary step each output to a different field name.
2. In the document loader, don't hardcode a single field. Use an expression that tries the first expected field, falls back to the second if absent, then the third.
3. This chained fallback lets one loader configuration serve every branch of the extraction switch.

**Watch out for:** The bug appears only when you add a new format; the original single-format pipeline works fine, so it's easy to miss until a PDF or spreadsheet returns nothing.

**Original example to invent:** Writers should demonstrate the fallback expression with their own set of two or three formats, not replicate the source's exact field trio.
