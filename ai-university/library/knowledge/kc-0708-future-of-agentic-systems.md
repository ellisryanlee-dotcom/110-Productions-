---
id: kc-0708
type: framework
track: "Track 2 — AI Agents Core"
topics: [multi-agent, a2a, long-running-agents, autonomy, agent-harness]
source_video: AO5aW01DKHo
source_channel: "@nateherk"
source_views: "237K"
confidence: medium
---
# Where agentic systems are heading

**What:** Four trajectories for agent systems. (1) *Proactive/autonomous
workflows* — instead of only reacting to a trigger, agents continuously scan
tools (CRM, inbox, project software) for risks and inefficiencies and either flag
or fix them. (2) *Agents managing agents* — a manager agent delegates to
specialists (research, email, reporting, cleanup) and stitches results together;
distributing tasks to specialists tends to beat one all-purpose model. (3)
*Agent-to-agent protocols (A2A)* — an open standard so agents from different
vendors can share context and coordinate, using "agent cards" that describe what
each can do; complements MCP (which connects agents to tools). (4) *Long-running
project agents* — agents that hold a goal for days or weeks via techniques like
continuous success-condition loops (with max-iteration guardrails and explicit
"done" signals) and shift-based harnesses that leave structured artifacts
(notes, to-dos, diffs) for the next "shift" instead of one giant context window.

**Why it matters:** It tells builders where value is moving: designing what
agents should do, where they act proactively, and how they coordinate — rather
than hand-wiring single workflows.

**The moves:**
1. Watch for proactive monitors that propose or take action, not just alerts.
2. Prefer teams of specialized agents over one monolith for complex work.
3. Track A2A adoption as a signal that cross-vendor agent coordination is real.
4. For long tasks, use loop/guardrail and shift/handoff patterns rather than
   relying on a single long context.

**Watch out for:** These are directional, partly still maturing; long-running
agents still drift, forget, and loop (benchmarks show reasoning models degrade
over long horizons). Human-in-the-loop and mid-run course correction remain
necessary.

**Original example to invent:** Sketch a small multi-agent team (manager +
specialists) for a business process the source didn't use, and describe how a
shift-based handoff would work.
