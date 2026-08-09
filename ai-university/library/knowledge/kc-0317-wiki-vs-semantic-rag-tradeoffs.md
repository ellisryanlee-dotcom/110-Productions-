---
id: kc-0317
type: concept
track: "Track 3 — RAG & Knowledge Bases"
topics: [rag, semantic-search, knowledge-graph, embeddings, tradeoffs]
source_video: sboNwYmH3AY
source_channel: "@nateherk"
source_views: "665K"
confidence: high
---
# LLM wiki vs. semantic-search RAG: when to use which

**What:** A decision framework contrasting the markdown-wiki approach with
classic embedding-based RAG. The wiki retrieves by reading indexes and following
explicit links (relationship-aware); semantic RAG retrieves by vector similarity
over chunks. They differ on infrastructure, cost, maintenance, and scale.

**Why it matters:** The wiki doesn't kill RAG — it wins in a specific regime and
loses in another. Choosing correctly saves you from over-building infrastructure
for a small corpus or under-building for a huge one.

**The moves (how to choose):**
1. Retrieval quality: wiki follows real links for relationship depth; semantic RAG
   only finds "similar-looking" chunks. Prefer wiki when relationships matter.
2. Infrastructure: wiki is just markdown files; RAG needs an embedding model,
   vector DB, and chunking pipeline.
3. Cost: wiki cost is essentially tokens; RAG adds ongoing compute and storage.
4. Maintenance: wiki is maintained by running a lint/cleanup and adding files; RAG
   requires re-embedding when content changes.
5. Scale: wiki is fine for hundreds of well-indexed pages; at millions of
   documents switch to traditional RAG / knowledge graph.

**Watch out for:** The scale ceiling is the deciding factor — the wiki's simplicity
is exactly why it can't span enterprise-sized corpora. Reassess as model context
windows and capabilities improve.

**Original example to invent:** Source compared the two in a simple chart. Writers
should build their own comparison for a stated use case and pick a winner.
