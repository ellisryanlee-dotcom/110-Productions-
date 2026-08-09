---
id: kc-0724
type: how-to
track: "Track 4 — Claude Code & Dev Agents"
topics: [claude-code, plugins, skills, installation, scope]
source_video: RAZVk5NPNtE
source_channel: "@nateherk"
source_views: "227K"
confidence: high
---
# Install a skill/plugin in Claude Code

**What:** How to add an official or third-party skill to Claude Code via the
plugin manager. You open the plugin manager, search for the skill by name, and
install it at one of three scopes: for just you, for the whole project, or
locally. After installing you restart Claude Code so it loads, then verify it by
asking the agent whether it has the skill and what it does.

**Why it matters:** Skills only help if they're installed at the right scope and
actually loaded. A project-scope install may not appear in your `.claude` skills
folder, so verifying by asking the agent is the reliable check.

**The moves:**
1. Open the plugin manager (e.g., `/plugins` → manage plugins).
2. Search the skill by name and install it.
3. Choose scope: personal, project, or local.
4. Restart Claude Code so the skill loads.
5. Confirm by asking the agent "do you have skill X and what does it do?"

**Watch out for:** After a project-scope install, the skill may not show in the
local skills folder even though it's active — verify via the agent rather than by
looking for the file. Restarting is required for it to take effect.

**Original example to invent:** Walk through installing a different named skill and
the exact verification prompt you'd use to confirm it loaded.
