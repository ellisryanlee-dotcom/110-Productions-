---
id: kc-0145
type: concept
track: "Track 4 — Claude Code & Dev Agents"
topics: [git, github, worktrees, version-control, parallel-sessions]
source_video: mpALXah_PBg
source_channel: "@nateherk"
source_views: "900K"
confidence: high
---
# Git, GitHub, and work trees

**What:** Git is a local version-control system that snapshots your project on each commit (with repos, commits, branches, push/pull/merge). GitHub is the cloud service on top of Git for backup, collaboration, pull requests, and version history. Git work trees give you several simultaneous checkouts of a single repo, one folder per branch — so multiple agent sessions can work in parallel without colliding.

**Why it matters:** Version control lets you roll back safely, collaborate, and move a project (like your executive assistant) across devices. Work trees are the key to running several coding agents at once on the same project without them overwriting each other's files.

**The moves:**
1. Commit meaningful changes with messages; branch to try features without risking main, then merge when tested.
2. Push local commits to a GitHub repo for cloud backup and history; pull to sync; open pull requests for review before merging.
3. For parallel work, create a work tree per feature (a command gives each an isolated branch/folder); run a separate agent session in each.
4. Merge branches back when done so all work saves to main without overwrites.
5. Let the agent handle the Git/GitHub mechanics via natural language — just be clear about save/rollback/share intent.

**Watch out for:** Keep secrets out of commits with a gitignore file. Editing one branch/folder with two sessions risks overwrites — that's exactly what work trees prevent.

**Original example to invent:** The source runs parallel feature work via work trees. Describe a scenario (e.g., building two site sections at once) that benefits from isolated branches.
