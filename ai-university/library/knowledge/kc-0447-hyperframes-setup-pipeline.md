---
id: kc-0447
type: how-to
track: "Track 8 — Applied Automations"
topics: [video-editing, hyperframes, claude-code, repo, rendering]
source_video: ZNbgOhxhzXg
source_channel: "@nateherk"
source_views: "376K"
confidence: high
---
# Set up a code-based video studio (HyperFrames) with a coding agent

**What:** For more control and power than a hosted design app, use a code-based HTML video framework driven by a coding agent. You point the agent at the framework's public repository and have it analyze, build knowledge/skills around it, and install it, giving you a local video-editing studio you iterate on.

**Why it matters:** The code-based route is more setup but far more customizable — it renders HTML through an encoder to video and exposes catalogs of reusable animation elements and transitions you can drop in.

**The moves:**
1. Grab the framework's repository URL and hand it to the coding agent.
2. Ask the agent to analyze the repo, build supporting skills/knowledge, and install it.
3. Work in a code editor so you can see assets, renders, and project files.
4. Iterate: give feedback, let it re-render, and have it build up reusable skills and design docs from each pass so your studio improves over time.
5. Reuse the framework's catalog of prebuilt animation elements and transitions rather than building every effect from scratch.

**Watch out for:** Don't expect a cloned repo to make a perfect video on the first ask — it's iteration-heavy. Local previews can be unreliable; if a preview won't load, have it render the full video for review instead.

**Original example to invent:** Source clones a specific public video-framework repo. Writers should describe the analyze-and-install flow generically and invent a different first project to build in the studio.
