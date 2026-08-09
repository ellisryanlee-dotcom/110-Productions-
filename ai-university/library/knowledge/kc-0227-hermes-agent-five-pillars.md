---
id: kc-0227
type: framework
track: "Track 2 — AI Agents Core"
topics: [hermes, personal-agent, memory, skills, soul, cron, self-improvement]
source_video: gb5TlGw6Uks
source_channel: "@nateherk"
source_views: "336K"
confidence: high
---
# Hermes Agent and its five pillars

**What:** Hermes is an open-source (MIT-licensed) personal AI agent that runs on your
own infrastructure (laptop, Mac mini, VPS, Docker container, even Android) and reaches
you through messaging platforms (Telegram, Discord, Slack, WhatsApp, iMessage). It's
organized around five pillars: memory (durable context files loaded each session),
skills (reusable procedural playbooks with YAML front matter and progressive
disclosure), soul (a file shaping the assistant's personality/tone), cron (scheduled
proactive automations set in natural language), and the self-improving loop (persist
useful experience as memory, skills, and searchable history).

**Why it matters:** It's a concrete pattern for a personal, always-on, on-the-go agent
that grows with you — distinct from a desk-bound coding agent. Understanding the five
pillars is the mental model for setting one up and getting value out of it.

**The moves:**
1. Memory: maintain a user file (you, style, preferences) and a memory file (projects,
   environments) that load at session start.
2. Skills: build/patch reusable skills; pull more from a community skills hub.
3. Soul: edit the soul file to set tone/personality per agent.
4. Cron: describe scheduled jobs in natural language; each fires a fresh isolated
   session, runs a skill, and reports back.
5. Self-improving loop: correct it, tell it to save to memory, and let it turn
   repeated work into skills.

**Watch out for:** The self-improvement is not automatic magic — it works best when
you actively correct it and ask it to save lessons. Cron sessions run stateless and
can't recursively schedule more crons, so prompts must be self-contained. Store
secrets in the env, never in memory files or chat.

**Original example to invent:** Source ran Hermes crons for news briefings and comment
replies. Writers should design a different personal-agent setup across the five
pillars.
