---
id: kc-1136
type: how-to
track: "Track 4 — Claude Code & Dev Agents"
topics: [git-worktrees, parallel-agents, isolation, branches, automation]
source_video: amEUIuBKwvg
source_channel: "@ColeMedin"
source_views: "149K"
confidence: high
---
# Parallel agents with git worktrees

**What:** Git worktrees let you check out multiple branches of one repo into separate directories at once, each with its own agent instance. Because each worktree is an isolated copy on its own branch, parallel agents don't step on each other. You can point them at different parts of the codebase, or have several implement the same feature so you pick the best result, then merge the winner(s) back to main.

**Why it matters:** It's true parallel development with guaranteed isolation. Running the same feature several ways at once beats serially retrying when an agent fails, and you get to choose the best implementation.

**The moves:**
1. Manually: create feature branches, add a worktree per branch at its own path, cd in, launch the agent.
2. Or automate with two slash commands — one to prep N branches/worktrees, one to execute the plan across them.
3. Have each agent write its results to a summary file per worktree.
4. Compare, then check out main and merge the chosen branch.

**Watch out for:** Worktrees duplicate the codebase on disk — mind space and setup. Each parallel run still needs its own environment/config. You can combine this with the PRP framework for richer parallel builds.

**Original example to invent:** Source runs three agents on a CLI color change. Show a worktree-based parallel build for a different feature, in your own words.
