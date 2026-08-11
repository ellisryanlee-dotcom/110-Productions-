---
id: kc-1004
type: framework
track: "Track 3 — RAG & Knowledge Bases"
topics: [rag, agentic-rag, agent-tools, retrieval, reasoning]
source_video: mQt1hOjBH9o
source_channel: "@ColeMedin"
source_views: "186K"
confidence: high
---
# Agentic RAG: let the agent choose how to explore the knowledge base

**What:** Naive RAG gives the agent one tool — a single vector lookup — and hopes it returns the right chunks. Agentic RAG instead gives the agent several ways to explore the same knowledge base and lets it reason about which to use: retry a lookup with a better query, list all available documents, pull an entire document's contents, or run a structured query over tabular data.

**Why it matters:** A single vector lookup often misses. It can return only a fraction of the chunks (useless when you need a whole table), grab the wrong document because titles aren't semantically matched, or fail to connect information across documents. When the one tool fails, naive RAG is stuck and says it doesn't know. Multiple tools let the agent recover.

**The moves:**
1. Keep the standard vector-lookup tool as the default first attempt.
2. Add a "list documents" tool that returns titles, ids, and (for spreadsheets) schemas from a metadata table, so the agent can pick a document by name.
3. Add a "get document contents" tool that reassembles all chunks for a chosen document id when a whole-document view is needed.
4. Add a structured-query tool for tabular data so the agent can compute sums, maxima, and filters a lookup can't.
5. Instruct the agent in its system prompt to start with the lookup and fall back to the other tools if it doesn't get what it needs — and to admit when it truly can't find the answer.

**Watch out for:** More tools means more prompt-engineering to teach the agent when to use each. Returning every document title works only while the corpus is small — at scale, filter what you list. Telling the agent to be honest about misses meaningfully cuts hallucinations.

**Original example to invent:** Pose one question answerable only by a whole-document read and one answerable only by aggregating a table, and narrate the agent picking a different tool for each.
