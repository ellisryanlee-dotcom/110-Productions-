---
id: kc-0541
type: how-to
track: "Track 4 — Claude Code & Dev Agents"
topics: [worktrees, parallelism, git, branches]
source_video: ZRb7D6R64hM
source_channel: "@nateherk"
source_views: "272K"
confidence: medium
---
# Run parallel agent sessions with git worktrees

**What:** Git worktrees let you run several agent sessions at once, each in its own isolated git workspace on its own branch, so their files never conflict. You spin up a worktree per task, open another terminal, and repeat — giving you multiple agents working simultaneously on different features without stepping on each other.

**Why it matters:** Parallelism is a step-change in throughput — you can implement a feature in one worktree, fix a bug in another, and write tests in a third, all at the same time, then review the finished results. Because each is isolated, there's no cross-contamination of files or branches.

**The moves:**
1. Create a worktree per task (each gets an isolated workspace and its own branch).
2. Open a separate terminal/session per worktree and start an agent in each.
3. Distribute distinct work across them (feature, bugfix, tests) so they don't overlap.
4. Come back to review each completed result independently.
5. A practical sweet spot is around three or four concurrent worktrees.

**Watch out for:** Managing many parallel sessions manually makes *you* the bottleneck — you're switching contexts and babysitting. Beyond a handful, coordination overhead outweighs the speedup; this is a cue to move toward automation. Pair worktrees (parallel files) with conversation branching (parallel reasoning) when useful.

**Original example to invent:** The source references a practitioner running several numbered terminal sessions daily. Writers should invent a concrete three-worktree split for one project and how the results get reviewed.
