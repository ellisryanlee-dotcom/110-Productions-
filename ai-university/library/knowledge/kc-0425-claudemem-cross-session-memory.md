---
id: kc-0425
type: tool
track: "Track 4 — Claude Code & Dev Agents"
topics: [claude-code, claudemem, memory, vector-search, persistence]
source_video: eRS3CmvrOvA
source_channel: "@nateherk"
source_views: "411K"
confidence: medium
---
# ClaudeMem: carry knowledge across sessions automatically

**What:** A plugin that hooks into the session lifecycle and automatically captures what happened — file edits, decisions, bug fixes, commands — compresses it into semantic summaries, and stores it in a local vector-searchable database. On a new session it injects the relevant parts back in, and it auto-generates and updates folder-level memory files as you work.

**Why it matters:** The agent normally starts every session from scratch, costing you minutes and thousands of tokens re-explaining the project. Hand-maintained memory files help but drift when you forget to update them; ClaudeMem takes that maintenance over so documentation writes itself.

**The moves:**
1. Install it via the plugin marketplace commands (not a bare package install, which registers no hooks and does nothing).
2. Let it capture session events and compress them into stored summaries automatically.
3. On retrieval it uses a layered search — a compact index first, then a timeline around what matters, then full detail only for the needed handoff — which sharply cuts retrieval tokens versus dumping everything at session start.
4. Use its local web viewer to inspect what the agent remembers about a project.

**Watch out for:** Installing only the underlying library does nothing because the hooks never register — use the marketplace commands. Retrieval savings are reported by the project; verify on your own usage.

**Original example to invent:** Source describes returning to a two-week-old project. Writers should invent a different resumption scenario and show what context gets auto-injected.
