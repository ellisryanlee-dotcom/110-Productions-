---
id: kc-0601
type: concept
track: "Track 9 — Reliability & Craft"
topics: [deterministic, non-deterministic, reliability, automation, design]
source_video: [tDGiWn0flK8, Y3PcRp5RFzk]
source_channel: "@nateherk"
source_views: ["262K", "246K"]
confidence: high
---
# Deterministic vs. non-deterministic, and why you push toward deterministic

**What:** A deterministic process returns the same output for the same input every
time — it is predictable. A non-deterministic process has variability: given the
same input you cannot be certain of the output. Plain code and rule-based logic are
deterministic; AI/LLM steps are non-deterministic. Most real business processes are
themselves fairly deterministic, so the builder's job is to make an AI-driven system
behave as predictably as the process it replaces.

**Why it matters:** Predictability is what makes an automation trustworthy in
production. Every non-deterministic step you add is a place the system can surprise
you. Knowing which parts *must* be reliable tells you where to remove the AI and
where the AI's flexibility is actually earning its keep.

**The moves:**
1. Map the process and mark each step deterministic or non-deterministic.
2. Push logic that can be rules into rules/code — it runs identically every time
   and is essentially maintenance-free.
3. Reserve AI for the genuinely variable, judgment-heavy steps.
4. Wrap AI steps with validation, human review, or guardrails to claw back
   predictability where it matters.

**Watch out for:** Some of the most valuable automations use no AI at all — reaching
for an LLM on a task that is pure rules adds cost, latency, and a source of
non-determinism for no benefit.

**Original example to invent:** Both sources reference generic pipelines. Writers
should take a specific workflow and label each step deterministic vs. not (e.g., a
refund flow: rules for eligibility, AI only for drafting the customer reply).
