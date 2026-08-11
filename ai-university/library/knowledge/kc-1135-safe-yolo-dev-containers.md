---
id: kc-1135
type: how-to
track: "Track 4 — Claude Code & Dev Agents"
topics: [dev-containers, yolo-mode, isolation, firewall, permissions, safety]
source_video: amEUIuBKwvg
source_channel: "@ColeMedin"
source_views: "149K"
confidence: high
---
# Safe YOLO mode with dev containers

**What:** "YOLO mode" runs the coding agent with permission prompts fully disabled (a dangerously-skip-permissions flag) so it acts entirely autonomously. Doing that directly on your machine is risky — the agent could delete files outside the project. The safe version runs the agent inside an isolated dev container, so your real machine is protected and a firewall limits which sites it can reach. Then skipping permissions is acceptable.

**Why it matters:** You get full autonomy (no approval interruptions) without exposing your host system. The container plus firewall contains worst-case behavior.

**The moves:**
1. Add the official dev-container definition (a Dockerfile plus config) to the project.
2. Reopen the project in the container from your editor.
3. Authenticate the agent fresh inside the container.
4. Launch it with the skip-permissions flag; extend the site allow list as needed.

**Watch out for:** Only skip permissions inside the isolated container, never on the host. The firewall's allow list is a safeguard — widen it deliberately, not blindly.

**Original example to invent:** Source uses the vendor's reference container. Describe standing up a safe autonomous environment for a different project, in your own words.
