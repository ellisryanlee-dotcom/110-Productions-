---
id: kc-0423
type: tool
track: "Track 9 — Reliability & Craft"
topics: [claude-code, code-review, ultra-review, verification]
source_video: eRS3CmvrOvA
source_channel: "@nateherk"
source_views: "411K"
confidence: medium
---
# /review and /ultra review: built-in code review

**What:** Two built-in review commands. The plain review runs a fast, local structured review of what you just wrote — bugs, edge cases, design issues — at no cost beyond normal usage. The ultra variant uploads your branch to a cloud sandbox and spins up a fleet of reviewer agents that attack the code from different angles (logic, security, performance, edge cases), and every reported bug must be independently reproduced and verified before it lands on your list.

**Why it matters:** Most people never use these even though they're already built in. The reproduce-before-report design means you get confirmed bugs, not a pile of style nitpicks or false positives.

**The moves:**
1. Use the fast local review for quick feedback on everything you build.
2. Use the ultra review right before merging something that matters — a big refactor, or anything touching payments, auth, or a database migration.
3. Let the ultra review run in the background (it can take a while) while you keep working.

**Watch out for:** Ultra review needs a recent app version and a signed-in account (an API key alone won't do), and beyond a few free trial runs it can cost real money per run depending on size — reserve it for high-stakes commits where a production bug would cost far more.

**Original example to invent:** Source mentions payments/auth commits generically. Writers should invent a specific risky change and show a reproduced-bug finding vs. a dismissed nitpick.
