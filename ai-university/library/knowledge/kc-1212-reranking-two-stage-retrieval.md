---
id: kc-1212
type: how-to
track: "Track 3 — RAG & Knowledge Bases"
topics: [rag, reranking, cross-encoder, retrieval, precision]
source_video: tLMViADvSNE
source_channel: "@ColeMedin"
source_views: "117K"
confidence: high
---
# Reranking: two-stage retrieval with a cross-encoder

**What:** A two-step retrieval. First, pull a large set of candidate chunks from the vector database. Then run a specialized reranker model (often a cross-encoder) that scores each candidate against the query and keeps only the most relevant few, which are what actually reach the LLM.

**Why it matters:** Handing the LLM 20–50+ chunks overwhelms it and buries the signal. Reranking lets you *consider* far more knowledge (wide first pass) while *feeding* the model only the best of it (narrow final pass), raising answer quality without drowning the context window.

**The moves:**
1. First-stage: retrieve a generous number of candidate chunks by similarity (more than you'll ultimately use).
2. Second-stage: pass candidates plus the query through a reranker/cross-encoder that produces a relevance score per chunk.
3. Keep only the top-scoring chunks and send those to the LLM.

**Watch out for:** The extra model adds some cost and latency, but usually modestly. This is a high-value default — worth including in most implementations.

**Original example to invent:** Show retrieving many candidates then reranking down to a handful for an invented query, and contrast answer quality with and without the rerank step.
