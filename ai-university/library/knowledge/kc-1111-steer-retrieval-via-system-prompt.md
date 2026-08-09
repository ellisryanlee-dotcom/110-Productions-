---
id: kc-1111
type: how-to
track: "Track 3 — RAG & Knowledge Bases"
topics: [system-prompt, agentic-rag, tool-selection, steering, retrieval]
source_video: p0FERNkpyHE
source_channel: "@ColeMedin"
source_views: "168K"
confidence: high
---
# Steer retrieval strategy through the system prompt

**What:** In agentic RAG, the agent has multiple retrieval tools. The system prompt is where you tell it which tool to reach for based on the kind of question and the specific data in your knowledge base. A generic template only gets you started; you must tune the rules to your corpus.

**Why it matters:** Your end users don't know (and shouldn't need to know) that you have a vector store and a graph. Good prompt rules let the agent decide silently and correctly, instead of forcing the user to say "search the graph." Retrieval quality lives or dies on this steering.

**The moves:**
1. Enumerate each tool and a concrete trigger for it (e.g., "use graph search only when the question involves two entities and their relationship; otherwise use vector search").
2. Say explicitly when to combine sources.
3. Ground the rules in your actual data, not a generic example.
4. Iterate the prompt as you observe wrong tool choices.

**Watch out for:** A demo-grade prompt that makes the user name the tool ("please search both") is fine for illustration but wrong for production — let the agent reason. Over-specific rules can starve the agent of flexibility.

**Original example to invent:** Source hard-codes company-comparison triggers. Write steering rules for a different two-tool setup and different data, in your own words.
