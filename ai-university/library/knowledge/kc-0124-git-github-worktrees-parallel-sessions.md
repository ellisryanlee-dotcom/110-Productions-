---
id: kc-0124
type: concept
track: "Track 4 — Claude Code & Dev Agents"
topics: [git, github, worktrees, version-control, parallel-sessions]
source_video: mpALXah_PBg
source_channel: "@nateherk"
source_views: "900K"
confidence: medium
---
# Git, GitHub, and worktrees for parallel Claude Code sessions

**What:** Git is a local version-control system that snapshots a project every time a meaningful change is saved (a commit), organizes alternate lines of work as branches that can later be merged back together, and lets changes be pushed to or pulled from a remote copy. GitHub is a hosted service built on top of git that stores those repositories in the cloud, enabling backup, collaboration, and reviewable proposed changes (pull requests). Git worktrees solve a specific limitation — normally only one branch can be checked out in a project folder at a time — by letting multiple branches from the same repository be checked out simultaneously into separate folders, which is what allows several Claude Code sessions to work on the same underlying project in parallel without their file edits colliding.

**Why it matters:** Once a project is being iterated on by more than one agent session at a time (or needs safe experimentation without risking a working version), git's snapshot/branch model and GitHub's remote hosting are what make that reversible and collaborative rather than risky. Worktrees specifically are the mechanism that makes true parallel Claude Code sessions on one codebase safe.

**The moves:**
1. For any project expected to change over time or be shared, initialize it as a git repository and push it to a GitHub repository for backup and version history.
2. Make meaningful changes as discrete commits (the agent can do this automatically when asked) so any point in history can be reviewed or reverted to.
3. Use a separate branch for experimental or in-progress work, and only merge it back into the main branch once it's tested and confirmed good — treat main as the stable, always-working version.
4. When running more than one Claude Code session against the same project at the same time, have the agent set up a worktree per session (each on its own branch, in its own folder) rather than running multiple sessions directly against the same shared folder.
5. Merge each worktree's branch back into main once its work is done and verified, the same way any other branch would be merged.

**Watch out for:** Running multiple sessions directly against one shared folder without worktrees risks two sessions editing overlapping files at the same time and clobbering each other's work — this is exactly the failure mode worktrees exist to prevent. Claude Code can manage worktree creation itself when asked in plain language, so this doesn't require memorizing git commands to use safely.

**Original example to invent:** The source discussed this in the abstract without a specific worked example. Writers should invent a concrete parallel-session scenario (e.g., two simultaneous sessions each fixing an unrelated bug in the same app) to illustrate why worktrees matter there.
