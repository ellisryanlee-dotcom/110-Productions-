---
id: kc-1230
type: tool
track: "Track 5 — MCP (Model Context Protocol)"
topics: [mcp, documentation, rag, context7, crawl4ai, ai-coding, hallucination]
source_video: G7gK8H6u7Rs
source_channel: "@ColeMedin"
source_views: "100K"
confidence: high
---
# Documentation-RAG MCP servers for coding agents

**What:** A documentation-RAG MCP server gives a coding assistant instant, on-demand retrieval over up-to-date library/framework docs, so it stops hallucinating APIs. Two flavors: a hosted service (e.g., Context7) with thousands of libraries already indexed and refreshable, and a self-hosted crawler (e.g., a Crawl4AI-based server) where you crawl any site into your own private vector store. Both expose the docs as tools the agent queries with RAG.

**Why it matters:** Coding assistants know popular languages but are weak and outdated on specific libraries and newer versions, causing hallucinated or wrong code. A docs-RAG server pulls version-specific, example-rich documentation exactly when needed — provably better than dumping a whole docs file, because the content is curated into example-focused snippets the model parses well.

**The moves:**
1. Choose hosted (broad, out-of-the-box, auto-refreshed) or self-hosted (you crawl and own a private knowledge base).
2. For self-hosted: crawl the specific docs sites you rely on into your vector store ahead of time.
3. Add the server to your IDE's MCP config; the agent then queries docs on demand.
4. Instruct the agent (via global rules) to consult docs *before* writing code, not after.

**Watch out for:** IDE-native "custom docs" features exist but are generally weaker than a dedicated docs-RAG server, largely because good servers curate example-based snippets and let the agent control token budget. Self-hosted requires you to run and maintain the crawler + store.

**Original example to invent:** Show an agent avoiding a hallucinated API by first retrieving the correct current docs for an invented library task — without copying the source's specific demo.
