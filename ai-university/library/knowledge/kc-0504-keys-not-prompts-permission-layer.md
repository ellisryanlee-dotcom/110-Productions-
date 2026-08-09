---
id: kc-0504
type: pitfall
track: "Track 9 — Reliability & Craft"
topics: [permissions, safety, agent-autonomy, scoped-keys]
source_video: 8QQ_INxAhRs
source_channel: "@nateherk"
source_views: "344K"
confidence: high
---
# Give agents keys, not prompts: the real permission layer

**What:** A prompt is never a permission layer. The only reliable control over what an autonomous agent can do is what it physically has access to — the credentials and capabilities you hand it. Assume that if an agent *can* do a thing, eventually it *will*. Safety comes from scoping access (e.g., read-only, scoped API keys), not from instructions telling it to behave.

**Why it matters:** Agents pick up tasks and can misinterpret them. The source recounts an incident where an agent, working through a task list, misread an instruction and sent a discount email to a very large customer list, forcing a public apology. If the agent hadn't held the ability to send, the mistake would have been impossible.

**The moves:**
1. Inventory what each agent can touch: which systems, which actions (read vs. write vs. delete vs. send).
2. Prefer scoped, least-privilege credentials — e.g., a key that can only read transcripts, not edit or delete them, and can't touch team data.
3. If an action must never happen autonomously, ensure the agent literally lacks the key to perform it, rather than relying on a warning in the prompt.
4. Treat every slip as data: fix the access/instruction so it can't recur, and consider writing it up so the whole team learns.

**Watch out for:** More autonomy multiplies risk. "It probably won't" is not a control. Don't confuse a well-worded system prompt with an actual guardrail.

**Original example to invent:** The mass-email incident is the source's own story — do not retell it. Writers should invent a different plausible over-reach (e.g., an agent with billing access issuing an unintended refund) to make the keys-not-prompts point.
