---
id: kc-1058
type: how-to
track: "Track 3 — RAG & Knowledge Bases"
topics: [rag, chunking, hybrid-chunking, docling, document-structure]
source_video: tLMViADvSNE
source_channel: "@ColeMedin"
source_views: "117K views"
confidence: high
---
# Context-aware (hybrid) chunking preserves document structure

**What:** Instead of splitting text at fixed character counts, a context-aware strategy uses an embedding model to find natural semantic boundaries in a document so chunks respect its structure. Hybrid chunking is a practical form of this, implementable with a document-processing library.

**Why it matters:** Blind fixed-size splitting cuts across headings, tables, and ideas, producing incoherent chunks that hurt retrieval. Splitting at natural boundaries keeps each chunk self-contained, and it's free and fast at query time since no extra model call happens per search.

**The moves:**
1. Use an embedding model to detect natural boundaries within the document.
2. Split at those boundaries rather than at arbitrary character offsets.
3. Use a document-processing library that supports hybrid chunking to make this straightforward.

**Watch out for:** It's more complex to set up than naive fixed-size splitting, but the retrieval quality gain is generally worth it. This pairs well as one of a default starting set of strategies.

**Original example to invent:** Writers should demonstrate boundary-aware vs. fixed-size splitting on their own document type.
