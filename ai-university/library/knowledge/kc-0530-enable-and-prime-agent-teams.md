---
id: kc-0530
type: how-to
track: "Track 4 — Claude Code & Dev Agents"
topics: [agent-teams, settings, documentation, setup]
source_video: vDVSGVpB2vc
source_channel: "@nateherk"
source_views: "278K"
confidence: high
---
# Enabling and priming a project for agent teams

**What:** Because agent teams are an experimental feature, they're disabled by default and must be turned on with a single setting in the project's settings file. A strong follow-up step is to "prime" the project by having the agent read the official agent-teams documentation and save a local reference guide, so it can build effective teams quickly without re-fetching docs.

**Why it matters:** Two small setup steps make the difference between agent teams being flaky and being genuinely useful: the feature won't work at all until enabled, and giving the agent a local, distilled reference means it already knows best practices, display modes, task management, and hooks when it builds teams.

**The moves:**
1. Open the official documentation and copy the settings snippet that enables the feature.
2. Have the agent write that snippet into the project's local settings file (this creates the settings file/folder if absent). You can enable at the project level for a scoped test.
3. Prime the project: give the agent the documentation URL and ask it to create a master reference guide (e.g., in a `docs` folder) for future use.
4. From then on, the agent consults the local markdown reference instead of re-reading remote docs.

**Watch out for:** If teams "don't work," check that the enabling setting is actually present in the right settings file. This priming trick (save a local reference for anything the agent needs often) generalizes to large MCP servers or any heavy documentation.

**Original example to invent:** The source enables it at the project level and builds an agent-teams reference doc. Writers should invent priming the same way for a different heavily-documented tool.
