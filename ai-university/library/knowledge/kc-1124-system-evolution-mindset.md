---
id: kc-1124
type: how-to
track: "Track 9 — Reliability & Craft"
topics: [retrospection, harness, reliability, continuous-improvement, workflows]
source_video: zbmuiaPuiNM
source_channel: "@ColeMedin"
source_views: "150K"
confidence: medium
---
# System evolution: harden the harness after every failure

**What:** Treat the harness (rules, workflows, guardrails) as something you improve over time the way you improve a codebase. Whenever the agent stumbles — it iterates more than it should, or you had to step in before shipping — don't just fix the immediate bug. Have the agent do a short retrospection: where in the rules or workflows could we change something so this failure is less likely next time?

**Why it matters:** Each pass through the build loop makes the system measurably more reliable, so future work needs less intervention. The harness is a version-controlled, engineered asset — investing in it compounds.

**The moves:**
1. When something goes wrong, pause and diagnose the harness gap, not just the code.
2. Ask the agent to propose an improvement to a rule, workflow, or guardrail.
3. Apply it and keep the change in version control.
4. Repeat every cycle so reliability trends upward.

**Watch out for:** Fixing only the surface bug and moving on leaves the same failure mode to recur. Retrospection adds a little overhead per cycle but pays back across many.

**Original example to invent:** Source describes this abstractly. Show a concrete failure → harness fix loop from a different project without copying the source's framing.
