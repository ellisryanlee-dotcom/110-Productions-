---
id: kc-0531
type: how-to
track: "Track 4 — Claude Code & Dev Agents"
topics: [agent-teams, prompting, roles, deliverables]
source_video: vDVSGVpB2vc
source_channel: "@nateherk"
source_views: "278K"
confidence: high
---
# Prompting an agent team well: goal, roles, recipients, deliverables

**What:** You invoke agent teams in natural language following a repeatable pattern: state an overall goal, then create a team of N agents on a chosen model, define each agent's role and what it should produce, tell each who to message and when, and specify the final deliverables you want back from the lead.

**Why it matters:** Teammates wake up with *no* prior context — they only receive the prompt the main session feeds them. Establishing a shared goal helps each teammate understand what they're working toward and why they have peers; naming recipients tells them exactly who to hand work to; specifying deliverables ensures the lead returns what you actually want after collecting all the pieces.

**The moves:**
1. Open with the goal and the desired end state (e.g., a running app viewable locally with specific functionality plus a test report).
2. Create the team: "create a team of X agents using [model]."
3. Define each agent: role, what it does, and what it produces.
4. Wire the handoffs: tell agent A to message agent B when done, tell B to wait for A then pass to the QA/reviewer, etc.
5. State the final deliverables the lead should return (e.g., the running artifact, a pass/fail report, and a doc of what was built and how to run it).

**Watch out for:** Vague deliverables and unnamed recipients produce disorganized results; because no history is shared, under-specifying context leaves teammates guessing. They *can* still read the project's files — but nothing is fed in automatically at spawn.

**Original example to invent:** The source's prompt builds a full-stack app with a QA report. Writers should invent a different goal/roles/deliverables prompt (e.g., a competitive-analysis team) following the same skeleton.
