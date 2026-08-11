---
id: kc-0442
type: concept
track: "Track 9 — Reliability & Craft"
topics: [automation, observability, error-handling, version-control, production]
source_video: ZeJXI2MAhj0
source_channel: "@nateherk"
source_views: "387K"
confidence: medium
---
# Production hygiene for code-based automations

**What:** When automations are code rather than a hosted dashboard, you have to manage them the way software is managed: error notifications so you learn when something breaks, observability so you can see what the automations are doing, and version control so you can track changes and collaborate.

**Why it matters:** Drag-and-drop platforms give visible execution data out of the box; code-based automations don't unless you add it. Skipping these leaves you blind to overnight failures and unable to trace or roll back changes.

**The moves:**
1. Add error notifications that alert you when a run fails.
2. Add observability so you can inspect what each automation did.
3. Put the code under version control to track every change and enable collaboration.
4. Have the agent help set all of this up — it's standard software practice, not new.

**Watch out for:** These aren't optional niceties for anything running in production; without them a failure at an odd hour can go unnoticed until it causes damage.

**Original example to invent:** Source frames these as pre-existing software norms. Writers should invent a concrete incident (a silent overnight failure) that each safeguard would have caught.
