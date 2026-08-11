---
id: kc-0454
type: how-to
track: "Track 1 — Automation Foundations (n8n)"
topics: [n8n, structured-output, agents, output-parser]
source_video: BcfjIBd49C8
source_channel: "@nateherk"
source_views: "350K"
confidence: high
---
# Get multiple structured fields from one agent call

**What:** By enabling a required output format and attaching a structured output parser, you make an agent return several named fields per item in one call — for example, one prompt each for image, video, and audio generation on a given subject — instead of a single blob of text.

**Why it matters:** Downstream steps each need a specific piece of data. Structured output hands each field to the right next node cleanly, avoiding fragile text parsing.

**The moves:**
1. In the agent, turn on the option requiring a specific output format.
2. Attach a structured output parser defining the fields you want per item.
3. Supply the input (e.g., category and subject) in the user message.
4. Consume each returned field in its dedicated downstream step.

**Watch out for:** The defined schema must match what downstream steps expect; a mismatch between the parser's fields and the nodes consuming them breaks the flow.

**Original example to invent:** Source outputs image/video/audio prompts per brand. Writers should define a different structured schema for a different multi-output generation task.
