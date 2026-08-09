---
id: kc-0118
type: concept
track: "Track 4 — Claude Code & Dev Agents"
topics: [github, deployment-pipeline, vercel, version-control, claude-code]
source_video: mpALXah_PBg
source_channel: "@nateherk"
source_views: "900K"
confidence: high
---
# The local → GitHub → auto-deploy pipeline pattern

**What:** The recurring pattern for taking anything Claude Code builds locally (a website, a small app) live on the internet: work and test against a local address only accessible on the builder's machine, have the agent push the code to a GitHub repository once it looks right locally, and connect that repository to a hosting platform (e.g., Vercel) configured to auto-deploy on every push to the tracked branch — so local remains a safe staging area and the GitHub-connected deployment becomes the live production version, updating automatically a short time after each push.

**Why it matters:** This gives a safe three-stage flow (local → version-controlled → live) without extra tooling: nothing goes live until it's explicitly pushed, every push is a recorded, revertible commit, and the live site never has to be edited directly.

**The moves:**
1. Confirm changes look right against the local address first — this is invisible to anyone else and safe to break repeatedly.
2. Have the agent authenticate to GitHub (it can walk through this) and create a new repository for the project the first time this pipeline is set up for it.
3. Push once satisfied locally; connect the new (or existing) repository to the hosting platform and import it as a new project there — most platforms then auto-detect the project type and deploy without further config.
4. For any subsequent change: repeat locally first, then explicitly instruct the agent to push to GitHub only once it's approved — never push automatically as a side effect of an edit.
5. Store any secret the deployed site needs as an environment variable on the hosting platform itself rather than hardcoding it into the pushed code, if the code/repo will ever be public or shared.

**Watch out for:** A file or folder excluded by a default ignore rule (e.g., generated image/frame assets, as in the video-to-website technique) can silently be missing from what actually deploys even though it exists and works locally — if a deployed site is missing something that worked locally, check what got excluded from the push before debugging the code itself. Hardcoding a secret directly into pushed code is faster but exposes it to anyone with repo access; treat that as a deliberate trade-off, not a default.

**Original example to invent:** The source used this pipeline for a personal landing page and a small productized app. Writers should invent a different small project (e.g., a status-page microsite) to walk the same local → GitHub → auto-deploy sequence.
