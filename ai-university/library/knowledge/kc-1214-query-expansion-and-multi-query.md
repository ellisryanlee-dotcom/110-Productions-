---
id: kc-1214
type: how-to
track: "Track 3 — RAG & Knowledge Bases"
topics: [rag, query-expansion, multi-query, retrieval, llm]
source_video: tLMViADvSNE
source_channel: "@ColeMedin"
source_views: "117K"
confidence: medium
---
# Query expansion and multi-query retrieval

**What:** Two closely related pre-search strategies that use an LLM to improve the query before it hits the vector database. Query expansion rewrites a single user query into a more specific, detail-rich version that retrieves more relevant chunks. Multi-query generates several distinct variants of the query and searches them in parallel, then merges results for broader coverage.

**Why it matters:** Raw user queries are often vague or use different wording than the documents. Reshaping the query — or firing several angles at once — pulls in chunks a single literal search would miss.

**The moves:**
- Query expansion: before searching, prompt an LLM to enrich the query with relevant detail per your instructions, then search with the expanded version.
- Multi-query: prompt an LLM to produce multiple query variants, run them in parallel against the store, and combine the retrieved chunks.

**Watch out for:** Both add an LLM call before every search (slower, more cost). Multi-query additionally multiplies the number of database queries per request. Use when recall/coverage matters more than latency.

**Original example to invent:** Take a deliberately vague invented question, show the expanded form and a set of generated variants, and how each surfaces different relevant chunks.
