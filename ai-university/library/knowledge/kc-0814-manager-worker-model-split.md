---
id: kc-0814
type: framework
track: "Track 2 — AI Agents Core"
topics: [orchestration, multi-agent, model-roles, cost, delegation]
source_video: EthxaDswUFo
source_channel: "@nateherk"
source_views: "209K"
confidence: medium
---
# Splitting models into manager and worker roles

**What:** An orchestration pattern that assigns a strong, creative, strategic model
as the "manager" that reasons, judges, and directs, while a cheaper, faster, highly
reliable model acts as the "worker" that executes and ships the actual output.

**Why it matters:** It captures the strengths of each without paying premium prices
everywhere. The manager brings taste, brainstorming, pushback, and judgment; the
worker brings speed, careful execution, verification, and low cost. Having the
manager orchestrate several workers combines quality with throughput and budget
control.

**The moves:**
1. Identify which model is stronger at reasoning, creativity, and advising — make
   it the orchestrator.
2. Identify a cheaper, fast, precise model good at doing exactly what it's told and
   catching bugs — make it the executor.
3. Let the manager plan and delegate; let workers implement and verify.
4. Scale by fanning one manager out to multiple workers.

**Watch out for:** A "manager" model may push back or add opinions (useful for
strategy, friction for pure execution); a "worker" model may over-test or
over-engineer. Assign roles to their temperaments, not just their benchmark scores.

**Original example to invent:** Describe a manager/worker split for a different
domain than the source's software-building examples.
