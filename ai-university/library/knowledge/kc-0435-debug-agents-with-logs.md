---
id: kc-0435
type: how-to
track: "Track 9 — Reliability & Craft"
topics: [n8n, agents, debugging, logs, observability]
source_video: 6DLZK7XDOGo
source_channel: "@nateherk"
source_views: "388K"
confidence: high
---
# Debug an agent by reading its execution logs

**What:** Agent execution logs show the ordered steps the agent actually took — storing the message in memory, consulting the model to interpret the request, selecting a tool, the parameters it generated, the tool's response, and the final reply. Reading them reveals exactly what happened and where things went wrong.

**Why it matters:** When an agent misbehaves, the logs turn a black box into a traceable sequence, so you can pinpoint whether the issue was tool selection, a bad parameter, or the response step.

**The moves:**
1. Open the agent's logs after a run.
2. Follow the step sequence: memory write, model reasoning, tool choice, generated parameters, tool result, and final response.
3. Confirm the generated parameters match the keys you defined on the tool.
4. Use the trace to locate the failing step and fix that specific part.

**Watch out for:** A plausible-looking final answer can still hide a wrong intermediate step; check the actual tool call and parameters, not just the reply.

**Original example to invent:** Source walks the logs of an email send. Writers should trace a different agent run and point out one intermediate step worth inspecting.
