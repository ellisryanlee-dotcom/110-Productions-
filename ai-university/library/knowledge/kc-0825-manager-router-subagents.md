---
id: kc-0825
type: framework
track: "Track 2 — AI Agents Core"
topics: [multi-agent, orchestration, router, sub-workflows, delegation, n8n]
source_video: [KUvSzvFeZls, jBanaNBY-sM]
source_channel: "@nateherk"
source_views: "208K / 197K"
confidence: high
---
# Manager/router agent delegating to specialized sub-agents

**What:** An orchestration pattern where one main agent does no domain work itself —
its only job is to read the user's intent and route the request to the correct
specialized sub-agent (email, calendar, contacts, content, social, etc.). Each
sub-agent is its own workflow holding the tools for its domain, and it decides which
of its own tools to use.

**Why it matters:** Splitting responsibilities keeps each agent's job small and its
context lean. The manager only has to choose a tool; each specialist only has to
handle its narrow area. This scales far better than one giant agent holding every tool,
and it isolates failures.

**The moves:**
1. Give the main agent a system prompt stating it only routes — it must not write
   emails, summaries, etc. itself.
2. List each sub-agent/tool with a short description of what it does and when to use
   it.
3. Implement each specialist as a separate sub-workflow the manager calls as a tool.
4. Add rules for multi-step requests that need a lookup first (e.g., resolve a contact
   before creating a calendar invite or sending mail).
5. Keep tool descriptions detailed inside each sub-agent rather than bloating the
   manager's prompt, to save tokens on every run.

**Watch out for:** Some tasks require chaining sub-agents in order; state that
explicitly. Overloading the manager with detail costs tokens on every request — push
specifics down into the specialists.

**Original example to invent:** Sources built a personal-assistant router and a media
router. Writers should design a manager over a different set of specialist agents.
