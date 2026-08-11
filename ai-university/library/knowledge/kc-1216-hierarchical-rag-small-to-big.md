---
id: kc-1216
type: how-to
track: "Track 3 — RAG & Knowledge Bases"
topics: [rag, hierarchical-rag, parent-child, metadata, retrieval]
source_video: tLMViADvSNE
source_channel: "@ColeMedin"
source_views: "117K"
confidence: medium
---
# Hierarchical RAG: small-to-big (parent-child) retrieval

**What:** Store knowledge in layers with parent-child relationships (typically tracked as chunk metadata). Search at the small, precise level — individual paragraphs/chunks — but once you find a hit, pull the larger parent (the whole document or section) it belongs to. You search small for precision and return big for context.

**Why it matters:** Small chunks retrieve precisely but starve the LLM of surrounding context; large chunks give context but retrieve imprecisely. Hierarchical RAG gets both: pinpoint the relevant spot, then hand the model the fuller context around it.

**The moves:**
1. When chunking, record each chunk's parent (document or section) id in its metadata.
2. Retrieve at the chunk level for precision.
3. For a matched chunk, look up its parent id and fetch the parent's full content from a document/parent table.
4. Give the model the larger context for answering.

**Watch out for:** Works best when parents aren't so large you blow the context window. It's closely related to (arguably a subset of) agentic RAG, and shares that flexibility's slight unpredictability.

**Original example to invent:** Show a precise paragraph-level match that then expands to its full source document for an invented corpus.
