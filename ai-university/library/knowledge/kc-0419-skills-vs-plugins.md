---
id: kc-0419
type: concept
track: "Track 4 — Claude Code & Dev Agents"
topics: [claude-code, skills, plugins]
source_video: eRS3CmvrOvA
source_channel: "@nateherk"
source_views: "411K"
confidence: high
---
# Skills vs. plugins in Claude Code

**What:** A skill is a package (centered on a markdown instruction file) that teaches the coding agent to do one job better. A plugin is a larger wrapper that can bundle multiple skills plus extra machinery — hooks and tool servers — and can change how the agent behaves under the hood.

**Why it matters:** People conflate the terms, but the distinction matters for what you're installing: a single behavior versus a bundle that may register hooks and servers automatically.

**The moves:**
1. Think of a skill as the instruction file that specializes the agent for a task.
2. Think of a plugin as a container that can hold several skills plus hooks and tool servers.
3. When installing a plugin, expect it may wire up more than one behavior at once.
4. Judge each by whether it makes the agent noticeably better at a real job, not by its technical category.

**Watch out for:** Because a plugin can register hooks and servers, installing one changes agent behavior beyond just adding instructions — know what a bundle brings before installing.

**Original example to invent:** Source lists community examples. Writers should invent a clean side-by-side of one standalone skill vs. one multi-part plugin.
