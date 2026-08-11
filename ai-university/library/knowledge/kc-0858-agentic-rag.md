---
id: kc-0858
type: framework
track: "Track 3 — RAG & Knowledge Bases"
topics: [agentic-rag, rag, tools, reasoning, n8n]
source_video: mQt1hOjBH9o
source_channel: "@ColeMedin"
source_views: "186K"
confidence: high
---
# Agentic RAG — give the agent multiple ways to explore the knowledge base

**What:** Agentic RAG means the agent can reason about *how* to explore its knowledge base
instead of being limited to a single vector-similarity lookup. Beyond the RAG lookup tool,
it gets tools to list all available documents, fetch a whole document's contents by ID, and
run SQL queries over tabular data.

**Why it matters:** Plain RAG has two structural weaknesses: it can't zoom out to a whole
document or document set (it only pulls a few chunks), and it has no concept of data
analysis (sums, maxes, trends over a table). A similarity lookup can also miss the right
context — e.g., grab the wrong dated document. Extra tools let the agent recover: if the
lookup fails, it can list documents, spot the right one by title, and read it directly.

**The moves:**
1. Keep the RAG lookup as one tool (and let the agent re-query with a better search).
2. Add a "list documents" tool that returns titles/IDs (and table schemas) from a metadata
   table so the agent can decide what to open.
3. Add a "get file contents" tool that pulls all chunks for a chosen file ID and combines
   them.
4. Add a SQL tool for spreadsheet-type data.
5. In the system prompt, instruct it to start with RAG and fall back to the other tools,
   and to admit when it can't find an answer rather than fabricate.

**Watch out for:** More tools mean more prompt/tooling complexity; instructing honesty
reduces hallucination. It's a template to extend, not a turnkey solution.

**Original example to invent:** Source queried fake company docs and metrics. Writers should
use a different corpus and show fallback behavior abstractly.
