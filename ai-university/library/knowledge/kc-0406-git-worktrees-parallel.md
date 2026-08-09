---
id: kc-0406
type: how-to
track: "Track 4 — Claude Code & Dev Agents"
topics: [claude-code, git, worktrees, parallel-sessions]
source_video: jqoFP9QapXI
source_channel: "@nateherk"
source_views: "415K"
confidence: medium
---
# Run parallel coding sessions with git worktrees

**What:** A worktree gives you an isolated copy of a project on its own branch without duplicating the whole folder, so multiple agent sessions can work the same project at once without overwriting each other.

**Why it matters:** Two agents in one folder will step on each other's files. Worktrees let you fan out several simultaneous features and merge them back cleanly.

**The moves:**
1. Create a worktree tied to a feature name; the agent gets an isolated workspace on its own branch.
2. Open another terminal and create a second worktree with a different feature name for a parallel session.
3. Repeat for as many concurrent lines of work as you want.
4. When each is done, merge its branch back into the main project the way you would any other git branch.

**Watch out for:** Each worktree is a real branch — you still owe normal merge discipline (resolving conflicts, review) when bringing work back together.

**Original example to invent:** Source is generic. Writers should show a concrete two-feature scenario (e.g., auth refactor + new dashboard) running side by side.
