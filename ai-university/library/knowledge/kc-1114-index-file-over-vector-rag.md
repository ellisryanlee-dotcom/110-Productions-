---
id: kc-1114
type: claim
track: "Track 3 — RAG & Knowledge Bases"
topics: [index-file, navigation, markdown, rag-alternative, retrieval]
source_video: 7huCP6RkcY4
source_channel: "@ColeMedin"
source_views: "151K"
confidence: medium
---
# A maintained index can replace vector RAG for navigable knowledge

**What:** For a markdown knowledge base, you often don't need semantic search or a vector database at all. If you maintain an index file that lists all the folders and resources available, the agent can use it as a starting point and navigate directly to the relevant files — no embeddings, no vector store. LLMs turn out to be good at auto-maintaining such index files.

**Why it matters:** It's dramatically simpler than a RAG stack: no embedding pipeline, no vector DB, no re-indexing. For internal, well-organized markdown, plain file navigation guided by an index is often enough and easier to reason about.

**The moves:**
1. Keep an index/table-of-contents file the agent always loads at session start.
2. Let the LLM update the index as files are added or changed.
3. On a query, have the agent consult the index, then open the specific files it points to.

**Watch out for:** This works because the corpus is structured markdown the agent can read directly; it's not a universal replacement for semantic search over large or unstructured corpora. The index must stay current or navigation misfires.

**Original example to invent:** Source describes a research/second-brain vault. Show index-driven navigation for a different structured markdown repo, describing the idea in your own words.
