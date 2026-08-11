---
id: kc-1217
type: how-to
track: "Track 3 — RAG & Knowledge Bases"
topics: [rag, self-reflective-rag, grading, self-correction, retrieval-loop]
source_video: tLMViADvSNE
source_channel: "@ColeMedin"
source_views: "117K"
confidence: medium
---
# Self-reflective RAG: grade-and-retry retrieval loop

**What:** Add a self-correcting loop to retrieval. After an initial search, an LLM grades the retrieved chunks against the question (e.g., a 1–5 relevance score). If the grade is below a threshold, it refines the query and searches again, repeating until the context is good enough before answering.

**Why it matters:** A single search can miss. Letting the system judge its own retrieval quality and retry catches weak first passes automatically, raising the odds the model answers from truly relevant context.

**The moves:**
1. Perform the initial retrieval.
2. Call an LLM with the chunks and the question to produce a relevance grade.
3. If the grade is below your cutoff, generate a refined query and retrieve again.
4. Loop until the grade passes (or a retry cap), then return chunks to the agent.

**Watch out for:** Each cycle adds an extra LLM call (the grader) plus another search, so it's slower and costlier per query. Set a retry cap to avoid runaway loops.

**Original example to invent:** Show a first retrieval graded as weak, a refined query, and an improved second retrieval — for an invented question.
