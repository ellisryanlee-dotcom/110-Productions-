---
id: kc-1134
type: how-to
track: "Track 4 — Claude Code & Dev Agents"
topics: [github-cli, issues, pull-requests, automation, slash-command]
source_video: amEUIuBKwvg
source_channel: "@ColeMedin"
source_views: "149K"
confidence: high
---
# GitHub CLI integration: issue-to-PR in one command

**What:** With the GitHub CLI installed and authenticated in the agent's environment, the coding agent can operate on your remote repo — read issues and PRs, create branches, push, and open pull requests. A slash command can wire this into an end-to-end workflow: given an issue number, the agent reads the issue via the CLI, implements a fix, writes/validates tests, pushes a new branch, and opens a PR.

**Why it matters:** It closes the loop from remote work item to merged change without leaving the terminal. The agent goes out to GitHub, works locally, and comes back to GitHub with a reviewable PR — a full autonomous cycle you trigger with one line.

**The moves:**
1. Install and authenticate the GitHub CLI (OAuth flow); verify with a repo-list command.
2. Write a slash command: view the issue, implement, test, branch, push, open PR.
3. Invoke it with the issue number.
4. Review and merge the resulting PR (the agent can help).

**Watch out for:** Give the agent only the repo access it needs. Review generated PRs before merging — the automation gets you a candidate, not a guaranteed-correct change.

**Original example to invent:** Source fixes a toy "add a greeting" issue. Show the issue-to-PR flow on a different, realistic issue in your own words.
