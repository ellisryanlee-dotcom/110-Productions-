---
id: kc-1011
type: tool
track: "Track 7 — Data In: Scraping & Research"
topics: [docling, document-parsing, ocr, pdf, audio-transcription, rag]
source_video: fg0_0M8kZ8g
source_channel: "@ColeMedin"
source_views: "229K"
confidence: high
---
# Docling: extracting clean text from any file type for RAG

**What:** Docling is a free, open-source Python library that converts complex documents — PDFs, Word docs, spreadsheets, even audio files — into clean markdown ready for a knowledge base. It recognizes the file type automatically, handles tables and layout, runs OCR for scanned content, and transcribes audio via a local speech-to-text model.

**Why it matters:** Real-world RAG rarely starts from tidy markdown; you get messy PDFs with tables split across pages, Word docs, and recordings. Extracting usable text from those is the hardest part of curating data, and Docling does it out of the box, locally, without sending your files anywhere.

**The moves:**
1. Install the package; add extra dependencies (a media tool plus a local speech-to-text model) only if you need audio.
2. Create a document converter and call convert on a file path — no need to specify the extension; it detects the type.
3. Export the result to markdown (the preferred format for models).
4. For audio, set up the speech-to-text pipeline; it returns a transcript, optionally with timestamps as metadata.
5. Optionally use its built-in chunking (including semantic/hybrid chunking) so extraction and chunking happen in one tool, then embed and store.

**Watch out for:** OCR and audio transcription do real machine-learning work, so they take time and some setup (though still fast — tens of seconds for a complex PDF or short clip). Everything runs locally by pulling models. Rule of thumb from the source: use a web crawler for website data, use Docling for files.

**Original example to invent:** Extract from a genuinely messy PDF (tables, an image, split pages) plus a short audio clip, and show both landing as clean markdown — on documents you create.
