---
id: kc-1059
type: concept
track: "Track 3 — RAG & Knowledge Bases"
topics: [rag, query-expansion, multi-query, retrieval, recall]
source_video: tLMViADvSNE
source_channel: "@ColeMedin"
source_views: "117K views"
confidence: high
---
# Query expansion and multi-query retrieval

**What:** Two closely related query-side strategies that use a language model to improve the search input. Query expansion rewrites the user's query into a more specific, detail-rich version before searching. Multi-query generates several distinct variants of the query and searches them all in parallel.

**Why it matters:** The raw user question is often too sparse or ambiguous to retrieve the best chunks. Enriching or diversifying the query improves precision (expansion) or coverage (multi-query), pulling in relevant chunks a single literal search would miss.

**The moves:**
1. For expansion: prompt a model to add relevant detail and specificity to the query, then search once with the improved query.
2. For multi-query: prompt a model to produce multiple query variants, run each search in parallel, and merge the results.

**Watch out for:** Both add a model call before searching, so they add latency; multi-query also multiplies the number of database queries. Use when recall/precision gains justify the extra calls.

**Original example to invent:** Writers should show expansion/multi-query on their own ambiguous question, inventing the variants.
