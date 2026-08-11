---
id: kc-0124
type: concept
track: "Track 4 — Claude Code & Dev Agents"
topics: [agentic-workflows, self-healing, claude-code, deployment, determinism]
source_video: mpALXah_PBg
source_channel: "@nateherk"
source_views: "900K"
confidence: high
---
# The agentic shift, and why self-healing has a catch

**What:** Agentic dev tools (like Claude Code) let you describe an outcome and have an agent plan, build, test, and fix the automation for you, instead of wiring every step by hand. A crucial nuance: an agent can self-heal only while it's actively running the work with you — once you deploy the finished automation to run on a schedule or trigger, you're deploying the code and tools, not the agent, so the deployed version behaves like traditional deterministic automation.

**Why it matters:** This reframes automation building: you battle-test a workflow with the agent present (catching and fixing edge cases live), then deploy the hardened, predictable result. It explains why deployed automations stop self-healing — and why that's actually good, since deterministic runs are reliable.

**The moves:**
1. Build and iterate with the agent in the loop so it can catch errors mid-run and repair its own tools.
2. Test against many scenarios until you trust the workflow.
3. Deploy the workflow + tools (not the agent) to run unattended.
4. To improve a deployed automation, come back to the agent, edit, re-test, and re-deploy.
5. Keep foundational skills (webhooks, APIs, data flow) sharp — they let you judge whether the agent's output is actually good.

**Watch out for:** Online demos overstate "magic self-fixing forever." Deployed code can't repair itself. Beginners who skip fundamentals can't tell when the agent made a bad decision.

**Original example to invent:** The source compares hand-building automation to laying every rail of a track vs. directing a crew, and battle-testing to running many trains over it. Describe this abstractly and invent your own build-then-harden analogy.
