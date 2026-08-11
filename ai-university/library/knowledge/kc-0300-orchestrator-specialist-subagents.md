---
id: kc-0300
type: framework
track: "Track 2 — AI Agents Core"
topics: [multi-agent, orchestration, delegation, n8n, agent-design]
source_video: 9FuNtfsnRNo
source_channel: "@nateherk"
source_views: "1.1M"
confidence: high
---
# Orchestrator-plus-specialists multi-agent pattern

**What:** Instead of loading one agent with every tool and a giant prompt, you run
a thin "router" agent whose only job is to read the user request and hand it to
the right specialist agent. Each specialist owns one domain (email, calendar,
contacts, content) and carries only the few tools and short prompt that domain
needs. The router never does the actual work — it only delegates.

**Why it matters:** A single agent stuffed with a dozen tools degrades: it picks
wrong tools, the prompt balloons, and adding capability makes it worse. Splitting
by domain keeps every prompt short and every tool set small, so accuracy stays
high and you can keep bolting on new specialists without destabilizing the whole.

**The moves:**
1. Write a router agent whose system prompt says, in effect: your sole job is to
   send the query to the correct sub-agent; never write the content yourself.
2. Enumerate each specialist by name and one line on when to use it.
3. Give the router memory so multi-turn references ("push that back an hour")
   resolve against prior context.
4. Build each specialist as its own agent with a tightly scoped prompt and 3–6
   tools.
5. Have the router pass a plain-language task string to the specialist, not a
   half-built artifact — let the specialist decide the concrete tool calls.

**Watch out for:** The router still needs explicit ordering rules for cross-domain
tasks (see the dependency-rules card). Keep the router prompt free of domain
detail; that detail belongs inside each specialist.

**Original example to invent:** Source demoed a personal-assistant router over
email/calendar/contacts/content. Writers should pick a different domain cluster
(e.g., a support router over billing, shipping, and returns specialists).
