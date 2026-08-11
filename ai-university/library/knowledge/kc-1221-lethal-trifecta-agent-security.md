---
id: kc-1221
type: concept
track: "Track 9 — Reliability & Craft"
topics: [security, prompt-injection, agents, exfiltration, guardrails]
source_video: 1FiER-40zng
source_channel: "@ColeMedin"
source_views: "108K"
confidence: medium
---
# The lethal trifecta (agent security risk model)

**What:** A framework for gauging an AI agent's exposure to attacks like prompt injection. Risk spikes only when all three conditions hold at once: (1) access to private data, (2) ingestion of untrusted content, and (3) an exfiltration vector (a way to send data out). Remove any one leg and the danger drops sharply.

**Why it matters:** Personal assistant / "second brain" agents almost always have all three by default — they read your email/calendar (private data), take in incoming messages and web content (untrusted), and can send messages or hit APIs (exfiltration). That's what makes them useful *and* dangerous, so you must consciously limit each leg.

**The moves:**
1. Audit each leg for your agent: what private data can it read, what untrusted inputs reach it, how could data leave.
2. Since a useful assistant usually needs all three, minimize each: restrict private-data scope, constrain what it can send, and be wary of untrusted inputs.
3. Prefer read-only capabilities by default; grant write/send powers narrowly and deliberately.
4. Recognize that off-the-shelf agents often expose the private-data and exfiltration legs more than you realize.

**Watch out for:** Untrusted content includes not just emails but web page content the agent fetches — any input not authored by you can carry injected instructions. Two-of-three is far safer than three-of-three, so knock out a leg wherever the use case allows.

**Original example to invent:** Walk through classifying a hypothetical agent against the three legs and show which single restriction most reduces its risk — using an invented scenario.
