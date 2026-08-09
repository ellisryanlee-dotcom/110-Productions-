---
id: kc-1055
type: framework
track: "Track 3 — RAG & Knowledge Bases"
topics: [rag, strategy, retrieval, architecture, optimization]
source_video: tLMViADvSNE
source_channel: "@ColeMedin"
source_views: "117K views"
confidence: medium
---
# There is no single RAG — combine three to five strategies

**What:** Retrieval-augmented generation is not one technique but a family of choices across two phases: data preparation (how you chunk, enrich, and store) and retrieval (how you search). The practical guidance is that an optimized system layers roughly three to five complementary strategies rather than relying on basic (naive) RAG.

**Why it matters:** Naive RAG — chunk, embed, single similarity search — underperforms on real workloads. Knowing the menu of strategies and that they compose lets you target the specific weaknesses of your use case instead of hoping one approach suffices.

**The moves:**
1. Frame every strategy as either data-prep-side or query-side.
2. Diagnose your failure modes (irrelevant chunks, tables, interconnected facts, evolving data, domain jargon).
3. Pick a small combination of strategies that each address a distinct failure mode.
4. A strong default starting trio: reranking, agentic retrieval, and context-aware/hybrid chunking.

**Watch out for:** Combining as many strategies as possible is not the goal; each adds cost, latency, or complexity. Some strategies overlap (e.g., hierarchical retrieval is a special case of agentic retrieval).

**Original example to invent:** Writers should build their own diagnosis-to-strategy mapping for a fresh use case rather than restating the source's list order.
