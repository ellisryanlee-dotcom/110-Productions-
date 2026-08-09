---
id: kc-1231
type: how-to
track: "Track 5 — MCP (Model Context Protocol)"
topics: [context7, mcp, documentation, rag, token-budget, ai-coding]
source_video: G7gK8H6u7Rs
source_channel: "@ColeMedin"
source_views: "100K"
confidence: high
---
# Context7 usage: resolve-library-id then get-docs, with token budgeting

**What:** The Context7 docs server works through two tools used in sequence. First, a resolve tool takes a search term (e.g., a library name) and returns the matching documentation entries with their exact ids. Then a get-docs tool takes a chosen id plus a topic (e.g., "authentication," "agents") and performs RAG over that library's docs, returning example-rich snippets. The agent also controls how many tokens to pull back.

**Why it matters:** Understanding the two-step flow lets you steer it well. Because the agent picks the exact library id, the topic, and the token count, you get precise, current, example-based context instead of a generic docs dump — and you can tune the token budget per how large a given library's docs are.

**The moves:**
1. Agent calls the resolve tool with a search term to get candidate doc entries and their ids.
2. Agent selects the right id and calls get-docs with a topic and a token budget.
3. It receives curated example snippets to code from.
4. Steer behavior via global rules — e.g., start with a smaller token budget and increase if needed, and fall back to a web-search server if docs are missing.

**Watch out for:** Different libraries warrant different token budgets; letting the agent reason about the count (and guiding it via rules) beats a fixed value. The agent must land on the exact id from the resolve step before get-docs works.

**Original example to invent:** Show the resolve→get-docs sequence for an invented library/topic, including a token-budget rule, without reusing the source's exact queries.
