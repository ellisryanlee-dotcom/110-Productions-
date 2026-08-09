---
id: kc-0961
type: how-to
track: "Track 3 — RAG & Knowledge Bases"
topics: [agentic-rag, system-prompt, tool-selection, retrieval-strategy]
source_video: [p0FERNkpyHE, _R-ff4ZMLC8]
source_channel: "@ColeMedin"
source_views: ["168K views", "133K views"]
confidence: high
---
# Using the system prompt to control retrieval-strategy selection

**What:** In agentic RAG, the agent has several retrieval tools, and the system prompt is where you tell it when and how to use each one based on the shape of your data and questions. You describe the available stores/tools and give rules for reaching to each (e.g., use a relational store for questions comparing two things, otherwise use vector search; combine only when needed).

**Why it matters:** The agent's retrieval quality depends heavily on this guidance. Left unguided, it picks tools inconsistently. Well-written instructions let end users ask natural questions without knowing anything about your underlying data sources, while the agent still routes correctly behind the scenes.

**The moves:**
1. In the system prompt, list each retrieval tool/store and what it's good for.
2. Give concrete rules keyed to question types in your domain.
3. Prefer letting the agent reason internally rather than requiring users to name a data source.
4. Tune the rules against real questions; treat the prompt as the main lever for routing.

**Watch out for:** Demo-oriented prompts that ask users to explicitly request a store ("search the graph") don't belong in production. Overly rigid rules defeat the point of letting the agent reason. Because the model is nondeterministic, expect occasional off-choices even with good rules.

**Original example to invent:** The source told the agent to use a graph only for two-company relationship questions. Writers should craft routing rules for a different domain and set of tools, in their own words.
