---
id: kc-1122
type: concept
track: "Track 4 — Claude Code & Dev Agents"
topics: [context-management, static-context, dynamic-context, skills, context-rot]
source_video: zbmuiaPuiNM
source_channel: "@ColeMedin"
source_views: "150K"
confidence: medium
---
# Static vs dynamic context

**What:** Context for a coding agent divides into two kinds. Static context (rules, core guardrails, system prompt) is loaded every session, guaranteed — reliable because the agent never has to go find it, but expensive because it fills the window up front. Dynamic context (a planning skill, conventions for one part of the codebase, a doc pulled on demand) is loaded only when the agent decides it's needed — efficient and scalable, but risky because the agent might fail to grab it at the right moment.

**Why it matters:** Context is the most precious resource: overfilling the window costs money and causes context rot (quality drops as the window fills, because models get overwhelmed like people do). Deciding what's static vs dynamic is the core skill of harness design.

**The moves:**
1. Keep a small set of essential rules/guardrails static — and make them lean.
2. Push everything else into dynamic context the agent loads on demand.
3. Package specialized knowledge as skills that load for a specific workflow.
4. Scope conventions to the part of the codebase they apply to.

**Watch out for:** Too much static context bloats every session and lowers quality; too much dynamic context risks the agent not loading it when it should. Models are improving at pulling dynamic context, but don't assume it's automatic.

**Original example to invent:** Source uses a vendor's static/dynamic split. Classify a different set of rules and skills into static vs dynamic for your own stack.
