---
id: kc-0132
type: how-to
track: "Track 4 — Claude Code & Dev Agents"
topics: [agentic-workflows, claude-code, wat-framework, self-healing, build-process]
source_video: mpALXah_PBg
source_channel: "@nateherk"
source_views: "900K"
confidence: high
---
# Building an agentic automation end to end

**What:** The full loop for creating an automation with an agentic coding tool: set up the project structure, plan in plan mode, let the agent build the workflow and tools, run it, and let it self-heal through errors — refining tools and workflow files as it goes.

**Why it matters:** It shows how someone with little technical background can produce a working, branded deliverable (e.g., a researched newsletter or competitor-analysis PDF) from a short natural-language request, without hand-configuring API calls.

**The moves:**
1. Open a blank folder as the project and give it a CLAUDE.md describing the WAT framework and structure.
2. In plan mode, describe the deliverable loosely; answer the agent's questions (research source, delivery channel, brand assets, budget).
3. Drop in brand assets (logo, guidelines) and tag them so output is branded.
4. Approve the plan; the agent creates a to-do list, config files, tools, and a workflow.
5. Supply API keys via the environment file (not the chat).
6. Kick off with a simple prompt; watch the first run — it will hit errors (e.g., a changed endpoint or encoding issue), research fixes, and update its tools so they won't recur.
7. Give natural-language feedback ("the output is unreadable, fix it") to iterate toward a trusted version.

**Watch out for:** The first run is the rough one — expect to steer it. Only after it's battle-tested should you deploy. Keep the run supervised so you can redirect if it veers.

**Original example to invent:** The source builds newsletter and competitor-analysis workflows. Invent a different end-to-end automation (e.g., a weekly finance digest) using the same plan-build-test-heal loop.
