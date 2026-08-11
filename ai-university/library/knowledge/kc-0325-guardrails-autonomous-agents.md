---
id: kc-0325
type: how-to
track: "Track 9 — Reliability & Craft"
topics: [guardrails, autonomous-agents, safety, reliability, human-oversight]
source_video: 6MC1XqZSltw
source_channel: "@nateherk"
source_views: "584K"
confidence: high
---
# Guardrails for an eager autonomous agent

**What:** An autonomous agent is eager and will act; without explicit limits it can
go off the rails. Guardrails are hard constraints you write into its rules —
caps, prohibitions, and staged rollout — plus active human review of its runs while
you tune. You also start in a safe/simulation mode before letting it touch
anything real.

**Why it matters:** Autonomy magnifies mistakes. Guardrails bound the blast radius,
and the phased approach (like teaching a skill in stages before letting go) means
you gain trust gradually instead of betting everything on a first run.

**The moves:**
1. Start in a sandbox/paper mode; switch to real actions only once comfortable.
2. Write explicit caps and prohibitions into the rules (e.g., max fraction per
   action, a per-period loss/limit cap, a max number of new commitments per week,
   forbidden action types).
3. Read the full conversation history of every run early on and tweak prompts,
   settings, or context files based on what you see.
4. Have the agent surface, each run, what worked, what it noticed, and where its
   own rules/skills should be updated — then iterate.

**Watch out for:** Even when migrating a "working" system, expect it to be
imperfect at first — plan to babysit and adjust. Auto-accepting plans can flip the
agent into a mode that runs without prompting for permissions; that's more capable
but costlier and less supervised.

**Original example to invent:** Source set trading caps. Writers should define
guardrails for a different autonomous agent (e.g., an outreach agent's send caps).
