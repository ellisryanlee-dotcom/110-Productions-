---
id: kc-0837
type: pitfall
track: "Track 3 — RAG & Knowledge Bases"
topics: [rag, vectors, chunking, context-loss, summarization]
source_video: DTCyvo6cC54
source_channel: "@nateherk"
source_views: "202K"
confidence: high
---
# Vector chunking loses whole-document context

**What:** A limitation of vector-database retrieval: because a document is split into
chunks and only the most similar chunks are returned, any task needing the full document —
a complete summary, a max/min across all rows, an aggregate — gets an incomplete or wrong
answer.

**Why it matters:** People assume a vector store always returns what they need. But if
you ask for a summary of a meeting, it pulls only the few chunks similar to "summary" and
summarizes those, missing the rest. Ask which week had the highest sales and it may grab
one chunk and miss higher values elsewhere.

**The moves:**
1. For whole-context needs (summaries, comparisons, totals), store the item as a full
   markdown file and have the agent read it entirely.
2. Reserve vector retrieval for pulling specific, self-contained snippets from large
   corpora.
3. When you must use vectors on such tasks, augment with metadata and other techniques —
   but know the ceiling.

**Watch out for:** The failure is silent — you get a plausible answer built from partial
data. Decide storage form by the question type (full-context vs snippet), not by defaulting
everything to vectors.

**Original example to invent:** Source used a highest-sales-week table and a meeting
summary. Writers should show a different case where chunking drops needed context.
