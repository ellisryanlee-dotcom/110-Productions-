---
id: kc-1215
type: concept
track: "Track 3 — RAG & Knowledge Bases"
topics: [rag, chunking, hybrid-chunking, late-chunking, docling, embeddings]
source_video: tLMViADvSNE
source_channel: "@ColeMedin"
source_views: "117K"
confidence: medium
---
# Chunking strategies: context-aware/hybrid and late chunking

**What:** How you split documents is a first-class RAG lever, not an afterthought. Two notable strategies: context-aware (hybrid) chunking uses an embedding model to find a document's natural boundaries so splits preserve structure instead of cutting every N characters; late chunking embeds the *whole* document first and only then splits the token embeddings, so each chunk's vector still reflects full-document context.

**Why it matters:** Chunking too naively (fixed character counts) fragments meaning, producing inaccurate embeddings and over-broad retrieval. Structure-preserving and context-preserving chunking keep each chunk coherent, which improves every downstream retrieval step.

**The moves:**
- Context-aware/hybrid chunking: use an embedding model to detect natural boundaries and split there; it's free/fast and keeps document structure. A dedicated document-processing library makes hybrid chunking easy to implement.
- Late chunking: run the embedding model over the entire document before splitting, then chunk the resulting token embeddings — leaning on long-context embedding models so chunks retain whole-document context.

**Watch out for:** Both beat naive fixed-size splitting but add complexity. Late chunking is the most complex here (and the presenter's one untested strategy), requiring long-context embedding models. Context-aware/hybrid chunking is the more practical default.

**Original example to invent:** Contrast a fixed-size split versus a boundary-aware split on an invented structured document, showing how retrieval differs.
