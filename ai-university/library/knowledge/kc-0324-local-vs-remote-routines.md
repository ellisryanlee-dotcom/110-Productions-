---
id: kc-0324
type: how-to
track: "Track 4 — Claude Code & Dev Agents"
topics: [claude-code, routines, github, cloud, persistence, git]
source_video: 6MC1XqZSltw
source_channel: "@nateherk"
source_views: "584K"
confidence: high
---
# Local vs. remote routines and persisting their file changes

**What:** A routine can run locally or remotely. Local routines live on your
machine and only fire while the desktop app is open. Remote routines run in the
cloud from a GitHub repo — your computer can be off and they still fire; the cloud
clones the repo, works in a throwaway copy, and destroys it after. For a remote
routine's file updates to survive, the agent must commit and push changes back to
the repo's main branch.

**Why it matters:** True 24/7 autonomy needs remote runs, but the ephemeral cloud
environment means the read-work-write memory loop breaks unless the write-back is
committed. Getting persistence right is what lets each run pick up where the last
left off.

**The moves:**
1. Turn the project into a GitHub repo and push all project files (commands,
   scripts, memory files) so the cloud run can access them.
2. Create the routine as remote and point it at that repo and a configured cloud
   environment.
3. Instruct the routine to commit and push its updated memory files back to main
   at the end of each run.
4. In the routine's permissions, enable unrestricted branch pushes so it can write
   to main, not just a scoped branch.
5. Start local to develop, then graduate to remote for always-on operation.

**Watch out for:** Without the push-to-main step, remote runs lose their state and
the whole memory loop is pointless. The branch-push permission must be enabled per
routine.

**Original example to invent:** Source ran a trading agent remotely. Writers should
show remote persistence for a different repo-backed agent.
