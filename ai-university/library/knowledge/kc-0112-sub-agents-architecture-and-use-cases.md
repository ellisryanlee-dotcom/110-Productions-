---
id: kc-0112
type: concept
track: "Track 4 — Claude Code & Dev Agents"
topics: [sub-agents, delegation, context-isolation, claude-code, multi-agent]
source_video: mpALXah_PBg
source_channel: "@nateherk"
source_views: "900K"
confidence: high
---
# Sub-agent architecture: stateless delegated workers

**What:** A sub-agent is a specialized worker the main Claude Code session can delegate a task to; when invoked it wakes up stateless (no memory of the main conversation), can use its own model choice and its own restricted toolset, works independently, and reports a result back to the main session — but sub-agents cannot talk to each other or coordinate directly (contrast with agent teams). Three built-in sub-agents ship with Claude Code for internal use (a read-only codebase explorer, a planning helper invoked during plan mode, and a general-purpose multi-step helper), and custom ones can be created project-wide or globally via a dedicated command.

**Why it matters:** Delegating to a sub-agent is the primary lever for keeping the main session's context window clean when a task involves reading or generating a lot of data that the main session doesn't need in full — only the sub-agent's summary comes back. It also lets risky or narrow tool access be fenced off from the main agent, and lets a cheaper/faster model absorb the bulk-processing cost while the main session keeps a more capable model for orchestration.

**The moves:**
1. Delegate to a sub-agent when a task is self-contained, needs restricted tool access, or would flood the main session with data it doesn't need verbatim (only a summary).
2. Choose a cheaper/faster model for a sub-agent doing large-volume or straightforward processing, saving the higher-tier model for the main session's orchestration.
3. Give a custom sub-agent a specific YAML description, since — like skills — the quality of automatic delegation depends on how precisely the description states what it's for.
4. Store a durable memory file per sub-agent (separate from its stateless working context) if it should recall useful facts (good sources, past findings) across separate invocations, and have it read/update that file each run.
5. Run a sub-agent in the foreground (blocks the main session until done) or background (main session stays usable) depending on whether the immediate result is needed to keep working.

**Watch out for:** Because sub-agents wake up with no shared conversational history, they only know what's explicitly handed to them in the delegation prompt plus whatever they can independently discover in the project — assuming they retain earlier context from the main conversation is a common mistake. Overusing sub-agents for simple, low-latency back-and-forth work adds unnecessary overhead versus just staying in the main session.

**Original example to invent:** The source built a trend-research sub-agent and a ClickUp-searching sub-agent as examples. Writers should invent a different delegated task (e.g., a sub-agent that summarizes long support tickets) to illustrate the pattern.
