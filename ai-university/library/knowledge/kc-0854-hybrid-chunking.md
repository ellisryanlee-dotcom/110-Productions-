---
id: kc-0854
type: concept
track: "Track 3 — RAG & Knowledge Bases"
topics: [chunking, hybrid-chunking, embeddings, semantic-similarity, rag]
source_video: fg0_0M8kZ8g
source_channel: "@ColeMedin"
source_views: "229K"
confidence: high
---
# Hybrid chunking — let an embedding model choose the split points

**What:** Hybrid chunking uses an embedding model to measure semantic similarity between
adjacent sentences/paragraphs and decides where to split a document so that related ideas
stay together in one chunk, up to a maximum token size per chunk.

**Why it matters:** Fixed-size or naive chunking often cuts through the middle of a
paragraph or a bullet list, scattering a single idea across chunks and hurting retrieval.
Semantically-aware boundaries keep each chunk a coherent, self-contained unit, which
improves what RAG can retrieve and reason over.

**The moves:**
1. Parse the document to a structured form (markdown).
2. Run a hybrid chunker that embeds spans and groups them by semantic similarity within a
   max-token limit, producing variable-length chunks.
3. Optionally "contextualize" each chunk by including its headings/subheadings so the chunk
   carries structural context.
4. Attach metadata, embed the chunks, and store them.

**Watch out for:** Chunks vary in size by design (some small, some near the token cap). The
best chunking strategy still depends on your data and use case — hybrid is a strong default,
not a universal answer.

**Original example to invent:** Source hybrid-chunked a technical PDF into ~23 chunks.
Writers should describe boundary selection on a different document abstractly.
