---
id: kc-1211
type: framework
track: "Track 3 — RAG & Knowledge Bases"
topics: [rag, strategy, optimization, retrieval, chunking]
source_video: tLMViADvSNE
source_channel: "@ColeMedin"
source_views: "117K"
confidence: medium
---
# Choosing and combining RAG strategies

**What:** RAG isn't one technique but a menu of them, split across two phases: data preparation (how you chunk and store) and retrieval (how you search). The optimal system usually *combines* several strategies rather than picking one, and the right combination depends on your data and query patterns.

**Why it matters:** Teams over-optimize one knob or assume "add a vector DB and done." Framing RAG as a composable stack — and knowing which strategies stack well — is what separates a demo from a system that actually retrieves the right context.

**The moves:**
1. Map your needs across both phases: preparation (chunking approach, storage format, whether you also need a graph) and retrieval (reranking, expansion, self-correction, agentic control).
2. Expect to combine roughly three to five strategies for accuracy-critical use cases.
3. As a strong default starting trio: reranking + agentic RAG + context-aware/hybrid chunking.
4. Add strategies only where a specific failure mode justifies the extra latency/cost.

**Watch out for:** Every added strategy costs latency, money, or complexity (extra model calls, extra DB queries). Don't stack "as many as possible" — combine deliberately against real failure modes.

**Original example to invent:** Walk through selecting a 3-strategy stack for an invented use case and justify each choice against a concrete retrieval failure it fixes.
