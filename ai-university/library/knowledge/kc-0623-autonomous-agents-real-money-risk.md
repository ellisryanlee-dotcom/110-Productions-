---
id: kc-0623
type: pitfall
track: "Track 9 — Reliability & Craft"
topics: [risk, autonomy, non-deterministic, guardrails, real-world-actions]
source_video: eu8UJtuIi-E
source_channel: "@nateherk"
source_views: "248K"
confidence: medium
---
# Letting an agent act on real money (or the real world) is inherently risky

**What:** Handing an autonomous agent control of a real account with real stakes is an
experiment, not a recommendation. Agents are non-deterministic; over a live run one
will change strategy on its own, react to news you didn't anticipate, and occasionally
make expensive mistakes. Even the builders concluded that if they'd been able to, they
would have wanted to adjust the strategy mid-run — but had agreed not to touch it.

**Why it matters:** The gap between "cool autonomous demo" and "safe to trust with
consequences" is large. Real-world actions (money moved, messages sent, orders placed)
are hard or impossible to undo, so an agent's variability translates directly into real
downside.

**The moves:**
1. Treat high-stakes autonomy as a controlled experiment with money/impact you can
   afford to lose.
2. Keep the ability to intervene and adjust — a fully hands-off rule removes your only
   safety valve.
3. Constrain the agent with hard limits (caps, stop conditions) rather than trusting
   its judgment alone.
4. Recognize short results — especially in abnormal conditions — don't validate the
   approach.

**Watch out for:** Don't infer "AI trading works" (or any high-stakes autonomy works)
from one short, favorable run. This is explicitly not financial or professional
advice; the demo's own creators flagged it as experimental.

**Original example to invent:** Source risked real capital in markets. Writers should
illustrate the risk with a non-financial high-stakes action (e.g., an agent
autonomously issuing customer refunds) and the guardrails it would need.
