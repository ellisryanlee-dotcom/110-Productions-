---
id: kc-0333
type: framework
track: "Elective — Model & Tool Literacy"
topics: [model-routing, cost-optimization, task-triage, open-source-models]
source_video: O2k_qwZA8HU
source_channel: "@nateherk"
source_views: "530K"
confidence: medium
---
# Routing tasks to cheap/local models by stakes and volume

**What:** A decision rule for when to use a cheaper or local model instead of a
top-tier one: send low-stakes, high-volume work to the cheap engine and reserve
the expensive model for work you can't get wrong. Cheap-model candidates include
summarizing files before handing to a smarter model, grepping a codebase to find
relevant files, generating repetitive scaffolding, web-research gathering,
triage/classification/organization, and simple tests or minor fixes.

**Why it matters:** Most of an agent's calls are cheap utility work that doesn't
need a flagship model. Routing those away from the premium model cuts cost sharply
while keeping quality where it matters.

**The moves:**
1. Tag each task by stakes (how bad is a mistake?) and volume (how often?).
2. Route low-stakes/high-volume tasks — summarizing, searching, scaffolding,
   triage, gathering — to the cheap or local model.
3. Keep hard, must-be-correct work on the top model.
4. When a cheap model produces code or decisions you can't verify, re-check the
   important parts with a stronger model afterward.
5. Also fall back to a local/cheap model when the premium service is down or you've
   hit your session limit.

**Watch out for:** Cheap models may lack native web search and can hit per-day/
per-minute caps — plan around those. Don't let low-stakes routing quietly cover
work that actually is high-stakes.

**Original example to invent:** Source listed research, triage, and scaffolding as
cheap-model work. Writers should build their own stakes/volume routing table for a
different workload.
