---
id: kc-1107
type: concept
track: "Track 3 — RAG & Knowledge Bases"
topics: [agentic-rag, retrieval, reasoning, tools, knowledge-base]
source_video: p0FERNkpyHE
source_channel: "@ColeMedin"
source_views: "168K"
confidence: high
---
# Agentic RAG: let the agent reason about retrieval

**What:** In classic RAG, retrieved context is force-fed into the prompt as a fixed pre-processing step — the agent must answer from whatever the single lookup returned. Agentic RAG instead exposes retrieval as tools the agent can choose to call. The agent decides whether to search, how to phrase the query, which knowledge source to hit, whether to search again or go deeper, and can combine multiple sources.

**Why it matters:** The one-shot approach is inflexible: if the first retrieval is wrong or thin, the answer is stuck with it. Giving the agent the ability to reason about how it explores knowledge fixes the most common RAG failures (wrong chunks returned, incomplete context) and supports multiple/differently-shaped knowledge stores.

**The moves:**
1. Wrap each retrieval method as a distinct tool with a clear docstring on when to use it.
2. Let the agent formulate/refine its own query rather than embedding the raw question once.
3. Offer several stores or several ways to search the same store (e.g., semantic vs. relational vs. whole-page fetch).
4. Use the system prompt to steer which tool applies to which kind of question.

**Watch out for:** Because the LLM decides, behavior varies run to run — it may search more sources than strictly needed. That's acceptable as long as the answer is right; the trade is flexibility for determinism.

**Original example to invent:** Both sources demo docs/knowledge lookups. Build agentic RAG over a different corpus (e.g., internal HR policies) with two distinct retrieval tools.
