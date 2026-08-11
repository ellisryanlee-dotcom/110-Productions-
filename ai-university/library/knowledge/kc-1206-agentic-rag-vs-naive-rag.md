---
id: kc-1206
type: concept
track: "Track 3 — RAG & Knowledge Bases"
topics: [agentic-rag, rag, retrieval, agents, reasoning]
source_video: uWDocIoiaXE
source_channel: "@ColeMedin"
source_views: "122K"
confidence: high
---
# Agentic RAG vs naive one-shot RAG

**What:** Naive RAG is a fixed pipeline: embed the query, pull the nearest chunks once, stuff them into the prompt, answer. The model never gets to decide *whether*, *where*, or *how* to search. Agentic RAG flips the order — the agent comes first and treats retrieval as one or more tools it can choose to call, re-query, or skip, and it can explore the knowledge base in multiple ways.

**Why it matters:** One-shot retrieval fails whenever the first search misses, when the answer needs a different source, or when the question isn't a similarity-search question at all (e.g., "list all documents," "read this whole file," "compute an average"). Giving the agent control over retrieval makes RAG both more accurate and far more flexible.

**The moves:**
1. Stop treating retrieval as a precursor step; expose it as a tool the agent invokes.
2. Offer several retrieval tools, not just semantic search: e.g., list documents, fetch a full document by id, run SQL over tabular rows, search a second store, or web search.
3. Prompt the agent on when to reach for each tool.
4. Let it reason: re-query with a better search, or switch tools, if the first result is insufficient.

**Watch out for:** More flexibility means less predictability — give clear instructions for when each tool applies, or the agent searches inconsistently. Add tools deliberately; each one is another decision the model can get wrong.

**Original example to invent:** Contrast a query that naive RAG botches (e.g., an aggregate over a table, or picking the right one of many dated documents) with the same query handled by an agent choosing the right tool — using an invented dataset.
