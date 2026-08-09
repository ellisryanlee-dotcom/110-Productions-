---
id: kc-0225
type: how-to
track: "Track 4 — Claude Code & Dev Agents"
topics: [github, portability, backup, tool-agnostic, sync]
source_video: [bCljOfCH8Ms, gb5TlGw6Uks]
source_channel: "@nateherk"
source_views: ["395K", "336K"]
confidence: high
---
# Put your agent project in a GitHub repo for portability and backup

**What:** Since an agent project is just a folder of files, storing it in a (private)
Git repository gives you backup, cross-machine sync, and the ability to run the same
project through any agent harness. If one machine or server dies, you clone the repo
and continue with nothing lost.

**Why it matters:** Local-only projects don't sync between devices and are one crash
away from gone. A repo makes the OS portable across laptops, and — because it's just
markdown/scripts — lets you point different harnesses (or a cloud/remote agent) at the
same repo. This is what makes the setup tool-agnostic and durable to tool churn.

**The moves:**
1. Create a private repo and push the project (keep the env/secret files git-ignored).
2. On another machine or agent, clone the repo to pick up where you left off.
3. Point cloud/remote runs, or a phone-accessible agent, at the same repo.
4. Automate a nightly commit (as a scheduled skill/cron) so changes back up daily.
5. Because harnesses differ slightly (e.g., instruction-file naming), let the agent
   adapt the repo to whatever tool you plop it into.

**Watch out for:** Never commit secrets — keep them in a git-ignored env file even in
a private repo (history and future collaborators are a risk). A huge context-heavy
repo is costly to clone for cloud runs; consider a slimmer repo per remote automation.

**Original example to invent:** Source synced an agent OS across machines and set up a
nightly backup cron. Writers should show portability with a different project moved
between two harnesses.
