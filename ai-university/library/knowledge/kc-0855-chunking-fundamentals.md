---
id: kc-0855
type: concept
track: "Track 3 — RAG & Knowledge Bases"
topics: [chunking, rag, retrieval, text-splitter, context]
source_video: fg0_0M8kZ8g
source_video: PEI_ePNNfJQ
source_video: mQt1hOjBH9o
source_video: c5dw_jsGNBk
source_channel: "@ColeMedin"
source_views: "229K"
confidence: high
---
# Chunking fundamentals — why and how you split documents for RAG

**What:** Chunking is splitting extracted document text into bite-sized pieces before
embedding them, so retrieval can return just the paragraph or list an answer needs rather
than an entire document.

**Why it matters:** You can't dump whole documents into a vector store and expect good
retrieval — it's too much for the model to consume at once, and larger docs won't fit. Good
chunks make retrieval precise. Chunk size is a tuning knob: smaller chunks keep prompts and
context small (useful when running a weaker/local model), larger chunks preserve more
surrounding context.

**The moves:**
1. Pick a splitter (e.g., a recursive character splitter is a simple, decent default).
2. Choose a chunk size for your use case — small (e.g., a few hundred chars) to keep context
   tight, larger (e.g., a few thousand chars) to preserve context.
3. Attach metadata (source file ID/title/page) to every chunk.
4. Embed each chunk and store it; retrieval returns the top matching chunks per query.

**Watch out for:** Too-small chunks fragment ideas; too-large chunks bloat context and cost.
Naive character splitting can cut mid-idea — see hybrid chunking for smarter boundaries.
Tabular data usually needs different handling than prose.

**Original example to invent:** Sources used chunk sizes from ~100 to ~5000 chars on
meeting notes and docs. Writers should choose different sizes and content.
