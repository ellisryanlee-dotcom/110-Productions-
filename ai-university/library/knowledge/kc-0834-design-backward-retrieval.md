---
id: kc-0834
type: framework
track: "Track 3 — RAG & Knowledge Bases"
topics: [knowledge-base, retrieval, design, data-modeling]
source_video: DTCyvo6cC54
source_channel: "@nateherk"
source_views: "202K"
confidence: high
---
# Designing a knowledge base backward from the question

**What:** A design principle: decide how you'll want to retrieve and use the data in the
future first, then structure how you store it to fit that. The intended output shape
dictates the input format.

**Why it matters:** The way information is stored determines whether it can be recalled
well. If you ingest data in a shape that doesn't match how you'll ask for it, the system
will fail to return what you need even when the information is present.

**The moves:**
1. Before ingesting, ask: what questions will I ask of this later, and how will it be
   accessed?
2. Choose the storage form to match — full-document markdown when you'll need whole
   context (summaries, aggregates), chunked vectors when you'll need specific snippets
   from a large corpus.
3. Reverse-engineer the structure from the retrieval pattern, not the other way around.

**Watch out for:** Storing everything one uniform way regardless of how it'll be used is
the root cause of "the answer is in there but the AI can't find it." The store shape and
the question shape must fit each other.

**Original example to invent:** Source used a shape-must-fit-the-goal comparison to make
this point; writers must invent their own analogy and a different data type.
