---
id: kc-1115
type: how-to
track: "Track 4 — Claude Code & Dev Agents"
topics: [claude-code, hooks, memory, session-logs, agent-sdk, second-brain]
source_video: 7huCP6RkcY4
source_channel: "@ColeMedin"
source_views: "151K"
confidence: high
---
# Give a coding agent memory that evolves with the codebase

**What:** A memory system built entirely from coding-agent lifecycle hooks. A session-start hook loads the global rules and the knowledge index so the agent begins each session already oriented. Pre-compaction and session-end hooks fire when context is about to be lost; they send the recent conversation to a separate LLM process that writes a structured summary (decisions made, lessons learned, action items) into a daily log — the raw layer. Once a day, a flush step compiles those logs into linked wiki notes.

**Why it matters:** The agent gets smarter per-codebase over time because it remembers past decisions and how the project evolved. Answering "what should I watch out for here?" pulls from accumulated takeaways in ~seconds instead of re-analyzing git history and spinning up slow sub-agents.

**The moves:**
1. Session-start hook: inject global rules + the knowledge index.
2. Pre-compact and session-end hooks: summarize recent messages via a background agent process, append to a dated log.
3. Scheduled flush: extract concepts/connections from logs into the wiki.
4. Keep everything customizable — the agent can edit its own prompts because the rules describe the whole system.

**Watch out for:** The background summarizer must run out-of-band so it doesn't pollute the main session's context. Standardize the log format so downstream compilation is reliable.

**Original example to invent:** Source captures coding sessions. Show the same hook-driven capture for a different agent workflow, inventing your own log schema and prompts.
