---
id: kc-1222
type: framework
track: "Track 4 — Claude Code & Dev Agents"
topics: [claude-code, memory, second-brain, markdown, obsidian, agent-evolution]
source_video: 1FiER-40zng
source_channel: "@ColeMedin"
source_views: "108K"
confidence: high
---
# Markdown memory layer for a personal agent

**What:** The core of a "second brain" agent is a memory layer built entirely from markdown files: a personality/behavior file, a user-profile file, and a running memory file of key decisions and facts. A verbose daily log captures every conversation, and a periodic "promotion" process distills the log into the concise, always-loaded memory file. Storing memory as plain markdown (viewable/editable in a notes app like Obsidian) keeps it simple and inspectable.

**Why it matters:** This is what lets the agent *compound* — it grows more attuned to you over time, building examples of how you work and communicate that it reuses later. It's a simple, transparent architecture you fully control, versus an opaque system.

**The moves:**
1. Create the memory files: one for the agent's personality/behavior, one for user profile/preferences, one for accumulated key memories.
2. Log every conversation verbatim into a per-day daily log.
3. Run a scheduled promotion/reflection process (e.g., once a day) that reads the raw daily log and extracts what's worth remembering long-term — key decisions, lessons, important facts — into the concise memory file.
4. Also index the full daily logs into a searchable store so the agent can RAG over details that didn't merit promotion.
5. Let the user watch and correct the evolving files directly.

**Watch out for:** The daily log grows large; the promotion step is what keeps the always-loaded memory concise. Treat the promotion process as one of the most important parts of the system — it's what makes the agent improve rather than just accumulate. (Inspired by open agent projects' soul/user/memory file pattern.)

**Original example to invent:** Show a memory file evolving across a few days as the promotion process pulls decisions out of daily logs — with invented content, not the source's personal files.
