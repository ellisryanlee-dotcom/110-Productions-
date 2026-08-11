---
id: kc-0713
type: how-to
track: "Track 4 — Claude Code & Dev Agents"
topics: [deployment, github, vercel, localhost, staging, ci]
source_video: q0TgUtj6vIs
source_channel: "@nateherk"
source_views: "231K"
confidence: high
---
# Ship a static site with GitHub + Vercel (local → push → auto-deploy)

**What:** The pipeline to move a locally built site to a public URL. Claude Code
builds and serves the site on localhost for testing; GitHub stores the code (and
versions each change as a commit); Vercel connects to the GitHub repo and
auto-deploys to a real domain on every push. This gives you a local/testing
environment separate from the live production site.

**Why it matters:** Once a site is public and customers use it, you don't want to
edit production directly. Local-test → commit → auto-deploy gives you a safe loop:
change and verify locally, then push to update the live domain, with rollback via
prior deployments.

**The moves:**
1. Test on localhost until satisfied.
2. Have the agent authenticate to GitHub (CLI login) and create a repo, then push
   the codebase.
3. In Vercel, import the GitHub repo and deploy; future pushes auto-deploy.
4. Use commits to see exactly what changed; use Vercel's deployment history to
   roll back or redeploy a version.

**Watch out for:** A build/gitignore config can exclude asset folders (e.g.,
animation frames), so the deployed site loads but the assets are missing — fix by
ensuring assets are committed and re-push. Before pushing, scrub secrets/API keys
since public repos expose them. Mobile optimization is a separate follow-up step.

**Original example to invent:** Walk through deploying a different small site and
narrate one deploy-time bug you hit and how the commit/rollback history helped.
