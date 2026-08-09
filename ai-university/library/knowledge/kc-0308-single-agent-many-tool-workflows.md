---
id: kc-0308
type: framework
track: "Track 8 — Applied Automations"
topics: [agent-design, n8n, tools, marketing-automation]
source_video: ldETapkr8Hg
source_channel: "@nateherk"
source_views: "898K"
confidence: high
---
# One agent, many tool-workflows (the single-brain team)

**What:** An alternative to a router-of-agents: keep a single agent as the brain
and give it a set of self-contained workflow-tools (create image, edit image,
search asset database, write blog, write social post, make video). The agent
picks which tool to fire; each tool is its own workflow doing one job end to end.

**Why it matters:** For a bounded domain (marketing output), one well-prompted
agent with clearly named tools is simpler to build and reason about than a nest of
sub-agents. The complexity lives in the individual tool-workflows, not in
inter-agent coordination.

**The moves:**
1. Write a short system prompt: state the agent's role, then list each tool with
   one line on when to use it.
2. Add light disambiguation rules (e.g., "make it X" on a prior asset means edit
   the most recent one, not create new).
3. Add a reasoning aid (a "think" step) so the agent plans tool choice before
   acting.
4. Tell it to return every result as a clickable link so the user can open the
   asset from chat.
5. Suppress double-sends: if a tool already delivers the content, have the agent
   reply with a short confirmation instead of re-emitting it.

**Watch out for:** As tool count grows this design eventually strains one prompt;
that's when you graduate to the orchestrator-plus-specialists pattern (see
kc-0300). Choose single-brain for a tight domain, router for a broad one.

**Original example to invent:** Source built a marketing-content agent. Writers
should demo a different single-brain team (e.g., a research agent with fetch,
summarize, and cite tools).
