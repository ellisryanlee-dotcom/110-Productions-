---
id: kc-1057
type: concept
track: "Track 3 — RAG & Knowledge Bases"
topics: [rag, contextual-retrieval, chunking, embeddings, enrichment]
source_video: tLMViADvSNE
source_channel: "@ColeMedin"
source_views: "117K views"
confidence: high
---
# Contextual retrieval: prepend situating context to each chunk

**What:** A data-prep strategy where a language model writes a short passage describing how each chunk fits within its parent document, and that passage is prepended to the chunk before embedding. Each stored chunk therefore carries context about its place in the whole.

**Why it matters:** Isolated chunks lose the surrounding context that makes them retrievable and interpretable. Adding a per-chunk situating preamble measurably improves retrieval accuracy because embeddings capture both the content and its role in the document.

**The moves:**
1. For each chunk, call a model to generate a brief description of how the chunk relates to the rest of its document.
2. Prepend that description (with a separator) to the chunk's content.
3. Embed and store the combined text as the chunk.

**Watch out for:** Because every chunk now requires a model call to create, ingestion is slower and more expensive — a real trade-off at scale, similar to knowledge-graph construction.

**Original example to invent:** Writers should illustrate with their own document and show a stored chunk's preamble abstractly, not reuse the source's dashboard walkthrough.
