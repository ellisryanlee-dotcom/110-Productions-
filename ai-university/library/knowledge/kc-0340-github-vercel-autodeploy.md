---
id: kc-0340
type: how-to
track: "Track 4 — Claude Code & Dev Agents"
topics: [github, vercel, deployment, ci-cd, claude-code, web]
source_video: 86HM0RUWhCk
source_channel: "@nateherk"
source_views: "528K"
confidence: high
---
# Auto-deploy pipeline: local → GitHub → Vercel

**What:** Take a site you built locally live with a simple pipeline. Your code
lives locally while you develop and preview on localhost. You push it to a GitHub
repo (version control, cloud copy). A hosting platform (Vercel) is linked to that
repo and auto-deploys: whenever new commits land in GitHub, the host grabs them
and updates the live site automatically.

**Why it matters:** It separates "safe to experiment locally" from "published,"
and makes shipping a change as simple as telling the agent to push. The
auto-deploy link means you never manually upload — merge/commit is deploy.

**The moves:**
1. Keep developing and testing on localhost until you're happy.
2. Create a GitHub repo (or have the agent create it) and have the agent push the
   project; authenticate it to GitHub once so future pushes are automatic.
3. In the host, create a project and import that GitHub repo, then deploy — it's
   served at a generated URL you can later map to a custom domain via DNS.
4. In CLAUDE.md, instruct the agent to always test locally and only push/commit
   when you explicitly say so, so unwanted changes don't auto-deploy.

**Watch out for:** Because pushes auto-deploy, an accidental push ships bad work —
gate deployment behind an explicit "push it now" instruction. Never commit secrets
(API keys, credentials) to the public repo.

**Original example to invent:** Source deployed a community landing page. Writers
should walk the pipeline for a different site.
