---
id: kc-1056
type: concept
track: "Track 3 — RAG & Knowledge Bases"
topics: [rag, reranking, cross-encoder, retrieval, precision]
source_video: tLMViADvSNE
source_channel: "@ColeMedin"
source_views: "117K views"
confidence: high
---
# Reranking: retrieve broad, then narrow with a specialized model

**What:** A two-stage retrieval strategy. First pull a large set of candidate chunks from the vector store, then pass them through a specialized reranker model (often a cross-encoder) that scores true relevance to the query, and hand only the top few to the language model.

**Why it matters:** Dumping dozens of chunks straight into the model overwhelms it and dilutes the answer. Reranking lets you consider more candidate knowledge up front while delivering only the most relevant slice to the model — better precision without the flood.

**The moves:**
1. Widen the first-stage vector search to return many candidates.
2. Run those candidates through a reranker that re-scores them against the query.
3. Keep only the top-scoring few to include in the prompt.

**Watch out for:** The extra model call adds some cost and latency, though modest. This is one of the highest-value, lowest-effort strategies to add to almost any RAG system.

**Original example to invent:** Writers should show reranking rescuing a query where naive top-k missed the right chunk, using their own corpus.
