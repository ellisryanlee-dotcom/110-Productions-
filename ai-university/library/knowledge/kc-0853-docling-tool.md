---
id: kc-0853
type: tool
track: "Track 3 — RAG & Knowledge Bases"
topics: [docling, document-parsing, ocr, pdf, rag, open-source]
source_video: fg0_0M8kZ8g
source_channel: "@ColeMedin"
source_views: "229K"
confidence: high
---
# Docling — turn any file type into clean markdown for RAG

**What:** Docling is a free, open-source Python package that extracts text from complex
document types — PDFs, Word docs, markdown, and even audio — and outputs clean markdown,
including well-formed tables. It runs locally, pulling models from Hugging Face, and uses
OCR under the hood to read PDFs (with configurable OCR backends).

**Why it matters:** Real knowledge bases rarely start as tidy markdown. Extracting usable
text from PDFs with tables/diagrams, or from audio recordings, is the hard part of data
curation. Docling handles many file types with the same simple API, so the curation step
stops being a bottleneck.

**The moves:**
1. `pip install` Docling; create a document converter and call convert on a file path.
2. Export the result to markdown (or JSON/text). The converter detects the file extension
   and applies the right handling — no per-type branching needed.
3. For audio, add dependencies (e.g., FFmpeg and a speech-to-text model) and it transcribes
   to markdown, optionally with timestamps.
4. It also offers chunking strategies so extraction and chunking can happen in one tool.

**Watch out for:** OCR and ML models make PDF parsing take real time (still fast — often
under ~30s for a complex PDF). Audio needs extra install steps. Pair it with a web crawler
for site data — Docling covers files, the crawler covers websites.

**Original example to invent:** Source parsed sample PDFs, a Word doc, and an MP3. Writers
should use different documents and describe table/OCR handling abstractly.
