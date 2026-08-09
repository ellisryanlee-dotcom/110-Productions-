---
id: kc-1061
type: framework
track: "Track 3 — RAG & Knowledge Bases"
topics: [rag, agentic-rag, retrieval, tools, reasoning]
source_video: [tLMViADvSNE, T2QWhXpnT5I, PxcOIINgiaA]
source_channel: "@ColeMedin"
source_views: ["117K views", "109K views", "112K views"]
confidence: high
---
# Agentic RAG: the agent decides how to search the knowledge base

**What:** Instead of a fixed retrieval step that runs once and dumps chunks into the model (naive RAG), the agent comes first and is given multiple retrieval tools it can choose among and call repeatedly. It reasons about how to explore the knowledge base for each question.

**Why it matters:** Naive RAG is a single one-shot vector lookup — the model never gets to reconsider, rephrase, search a different store, or read a whole document. That fails on questions where the right chunk is far from the identifying detail (e.g., attendees vs. the date in meeting notes), on tables, and on multi-hop questions. Giving the agent tools and letting it reason makes retrieval flexible and far more capable.

**The moves:**
1. Put the agent at the front with retrieval exposed as tools, not as a precursor pipeline.
2. Provide several ways to look at the knowledge: standard similarity search, list available documents, read a full document's contents, run structured queries over tabular rows, or search an alternate store.
3. Instruct the agent, in its system prompt, when to use each tool.
4. Let it call tools multiple times and combine results before answering.

**Watch out for:** More flexibility means less predictability — the agent may search unexpectedly, so give clear instructions on when to use each capability. It works best when you have distinct, well-described tools rather than one catch-all search.

**Original example to invent:** Sources demoed maritime/company Q&A distinguishing simple lookups, whole-document reads, and table math. Writers should invent a different dataset and a set of questions that each force a different tool.
