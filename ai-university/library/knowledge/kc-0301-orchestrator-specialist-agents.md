---
id: kc-0301
type: framework
track: "Track 2 — AI Agents Core"
topics: [multi-agent, orchestration, system-prompts, delegation, n8n]
source_video: 9FuNtfsnRNo
source_channel: "@nateherk"
source_views: "1.1M"
confidence: high
---
# Orchestrator agent that only delegates to specialist sub-agents

**What:** A multi-agent architecture where one front-door agent holds no task
logic at all — its entire job is routing each user request to the right
specialist agent (one for email, one for calendar, one for contacts, one for
content, etc.). Each specialist owns a small tool set and a short prompt.

**Why it matters:** A single agent loaded with a dozen tools and a huge system
prompt becomes unreliable and hard to extend. Splitting by role keeps every
prompt short, makes each agent's behavior predictable, and lets you add new
capabilities by adding a new specialist instead of destabilizing an existing
prompt.

**The moves:**
1. Build each specialist as its own workflow with its own agent node, model,
   prompt, and tools.
2. Write the orchestrator's prompt as a pure router: state that its only job
   is to pass the query to the correct tool, and explicitly forbid it from
   doing the work itself (composing emails, writing summaries).
3. Register each specialist as a tool with a one-line when-to-use description,
   and reference those exact tool names in the prompt.
4. Add ordering rules for cross-agent dependencies (e.g., resolve a person's
   contact details before any action that needs an address).
5. One worked routing example in the prompt (query → which agents, in what
   order, with what handed off) is often enough to lock in correct behavior.
6. Give the orchestrator the current date/time and conversation memory so
   follow-up commands ("move that an hour later") resolve correctly.

**Watch out for:** Routing quality depends on tool names in the prompt matching
the registered tool names exactly. Without memory on the orchestrator,
pronoun-style follow-ups break. Deep delegation chains add latency — multi-hop
requests can take tens of seconds.

**Original example to invent:** Source demoed a personal assistant delegating
to email/calendar/contact/blog-writer agents, driven from a chat app. Writers
must build a different team — e.g., an ops desk routing to invoicing, CRM,
and support-ticket specialists.
