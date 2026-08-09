---
id: kc-1213
type: how-to
track: "Track 3 — RAG & Knowledge Bases"
topics: [rag, contextual-retrieval, chunking, embeddings, preprocessing]
source_video: tLMViADvSNE
source_channel: "@ColeMedin"
source_views: "117K"
confidence: medium
---
# Contextual retrieval: prepend LLM-generated context to each chunk

**What:** Before embedding a chunk, use an LLM to write a short passage describing how that chunk fits within its parent document, and prepend it to the chunk's text. The enriched chunk (context + separator + original content) is what you embed and store, so every chunk carries situating context that a bare slice would lack.

**Why it matters:** Isolated chunks lose the thread of the document — pronouns, references, and topic scope go missing — which hurts retrieval accuracy. Prepending document-aware context measurably improves retrieval (a technique with notable published gains).

**The moves:**
1. For each chunk, call an LLM with the chunk and its surrounding document to produce a brief "how this fits" description.
2. Prepend that description to the chunk, with a clear separator before the original content.
3. Embed and store the combined text.
4. Retrieve as usual — the added context makes matches more accurate.

**Watch out for:** You now make an LLM call per chunk at ingest time, so indexing is slower and more expensive (similar cost profile to building knowledge graphs). Best where retrieval accuracy justifies the heavier preprocessing.

**Original example to invent:** Show a chunk before and after context enrichment for an invented document, and how the prepended context changes what it matches.
