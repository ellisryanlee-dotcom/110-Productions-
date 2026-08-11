---
id: kc-0210
type: pitfall
track: "Track 9 — Reliability & Craft"
topics: [security, review, deployment, secrets]
source_video: [saggDHHnmtQ, bCljOfCH8Ms]
source_channel: "@nateherk"
source_views: ["410K", "395K"]
confidence: medium
---
# Run a security review before putting agent-built code on the web

**What:** Before deploying code an agent wrote for you, ask that same agent to audit
it for vulnerabilities — exposed API keys, unprotected webhooks, secrets that would
travel to a repo, and what an outsider could do once the thing is live.

**Why it matters:** Vibe-coding produces a lot of code you didn't read line by line
("dark code"). You are shipping something you don't fully understand. Since one of
the strongest reasoning models is already in front of you, using it to review its own
output is a cheap, high-value safety gate.

**The moves:**
1. Ask the agent to run a security review of the codebase before deployment.
2. Have it specifically check for exposed keys, open webhooks, and repo-committed
   secrets.
3. Confirm secrets are stored as host secrets / environment variables, not in code.
4. Confirm nothing sensitive has been committed to a public repository.
5. Fix flagged issues, then deploy.

**Watch out for:** A clean review is not a guarantee — treat it as one layer. As you
deploy more automations you'll build intuition for the recurring risks (auth on
webhooks, key scope, repo hygiene). This is asserted best practice, not a formally
verified process.

**Original example to invent:** Source security-reviewed an analytics pipeline before
a cloud deploy. Writers should apply the review step to a different deployment.
