---
id: kc-0956
type: concept
track: "Track 3 — RAG & Knowledge Bases"
topics: [agentic-rag, rag, tools, retrieval, reasoning]
source_video: [p0FERNkpyHE, _R-ff4ZMLC8]
source_channel: "@ColeMedin"
source_views: ["168K views", "133K views"]
confidence: high
---
# Agentic RAG: let the agent reason about how it retrieves

**What:** Agentic RAG turns retrieval from a forced preprocessing step into a set of tools the agent chooses to call. Instead of always injecting one batch of vector-search results, the agent decides whether to search, how to phrase the query, which knowledge source to hit, and whether to search again or differently. Retrieval becomes something the model reasons about mid-conversation rather than something done to it.

**Why it matters:** It directly fixes naive RAG's biggest failures — wrong chunks returned and the model stuck with whatever it got. Because the agent can refine, re-query, or switch sources, it produces more consistent, accurate answers, especially for questions that need more than a single snippet.

**The moves:**
1. Expose retrieval as one or more agent tools rather than a fixed pre-step.
2. Give the agent multiple ways to explore knowledge (e.g., vector search plus tools to list and fetch full documents, or a second store like a knowledge graph or web search).
3. Use the system prompt to guide when to reach for each tool.
4. Let the agent iterate: search, judge sufficiency, refine, or pull a full document.

**Watch out for:** More tools and more reasoning cost more tokens and add nondeterminism — the same question may take different paths. You still need good chunking, metadata, and prompts; agentic RAG is one strong strategy among several (reranking, query expansion, etc.), not the only fix.

**Original example to invent:** The source let a docs agent fall back from vector search to fetching a full page. Writers should invent a different multi-tool retrieval scenario (e.g., an agent choosing between a FAQ store and a full-manual store) with their own tools.
