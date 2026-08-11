---
id: kc-1060
type: concept
track: "Track 3 — RAG & Knowledge Bases"
topics: [rag, late-chunking, hierarchical-rag, self-reflective-rag, fine-tuned-embeddings]
source_video: tLMViADvSNE
source_channel: "@ColeMedin"
source_views: "117K views"
confidence: medium
---
# Four more RAG strategies: late chunking, hierarchical, self-reflective, fine-tuned embeddings

**What:** A grouping of additional strategies to reach for once the basics are in place, each targeting a specific need.

**Why it matters:** These fill gaps the common strategies don't: preserving whole-document context, balancing precision with breadth, self-correcting weak retrievals, and adapting embeddings to a domain.

**The moves:**
1. **Late chunking:** embed the whole document first, then chunk the resulting token embeddings, so each chunk retains full-document context. Leverages long-context embedding models; the most complex option.
2. **Hierarchical retrieval:** store parent-child chunk relationships (usually as metadata). Search small for precision, then pull the larger parent/document for context — "search small, return big." Overlaps with agentic retrieval.
3. **Self-reflective retrieval:** after an initial search, have a model grade the retrieved chunks against the question (e.g., a 1–5 score); if too low, refine the query and search again — a self-correcting loop.
4. **Fine-tuned embeddings:** train the embedding model on domain data (legal, medical, or by a target attribute like sentiment) so smaller models beat generic larger ones on your data; reported single-digit-percent accuracy gains.

**Watch out for:** Late chunking is intricate and rarely necessary. Self-reflection adds a model call per search. Fine-tuning needs substantial training data plus ongoing maintenance of your own model. Hierarchical retrieval adds unpredictability like agentic retrieval.

**Original example to invent:** For fine-tuned embeddings, writers should invent their own contrast between semantic similarity and an alternate similarity axis, not reuse the source's shipping/orders sentiment example.
