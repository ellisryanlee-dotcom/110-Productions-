---
id: kc-0733
type: concept
track: "Track 5 — MCP (Model Context Protocol)"
topics: [mcp, tools, skills, context, token-efficiency]
source_video: [B6k_vAjndMo, AO5aW01DKHo, XeIx4S6YvGo]
source_channel: "@nateherk"
source_views: "222K / 237K / 238K"
confidence: high
---
# MCP as an app-store for agent tools; skills load on demand to save context

**What:** Two related ideas about giving agents capabilities efficiently. An MCP
(Model Context Protocol) is a standard that wraps tools with documentation so an
agent knows what's available and how to call each correctly; if a
tool has no MCP, the agent can fall back to reading the API docs and making the
request itself. Skills, by contrast, are on-demand knowledge: the agent knows they
exist but only reads a skill's full contents when a task needs it, keeping tokens
low instead of holding everything in context at once.

**Why it matters:** Loading every capability into context all the time is
expensive and noisy. MCP standardizes tool access and skills keep deep knowledge
out of context until needed, so an agent can have vast capability without a
bloated, costly prompt.

**The moves:**
1. Prefer an MCP when a tool has one — it gives the agent correct, documented
   calls.
2. Fall back to doc-reading / raw API requests when no MCP exists.
3. Package deep, situational know-how as skills the agent loads only when relevant.
4. Think of MCP = how agents reach tools; skills = on-demand instructions.

**Watch out for:** MCPs and skills solve different problems — one is connectivity,
the other is context-efficient knowledge; don't conflate them. Fallback
doc-reading works but is less reliable than a maintained MCP.

**Original example to invent:** Explain, with a fresh analogy of your own, why
loading knowledge on demand beats keeping it all in context — do not reuse the
app-store framing verbatim.
