---
id: kc-0116
type: how-to
track: "Track 2 — AI Agents Core"
topics: [output-parser, json-schema, structured-output, n8n]
source_video: Ey18PDiaAYI
source_channel: "@nateherk"
source_views: "1.8M"
confidence: high
---
# Structured output parsing: forcing agents into a defined shape

**What:** By default an agent returns one text blob, even if it "contains" a subject and a body. A structured output parser attaches a JSON schema to the agent so it always returns separate, named fields you can map into downstream nodes.

**Why it matters:** Without it you can't cleanly wire an agent's output into the next step — you'd have to split one field apart manually. With a schema, fields like to/subject/body (or title/characters/scenes) come out individually and drag straight into an email or database node.

**The moves:**
1. Turn on the agent's "require specific output format" option, which adds an output-parser slot.
2. Choose the structured output parser (the autofixing variant is rarely needed).
3. Provide a JSON example of the shape you want — a language model can generate this schema for you if you describe the fields.
4. Paste it in; the agent now emits those exact fields.
5. Map each field into the following node; verify in the output panel that fields are separate.
6. To extend, ask for an added field (e.g., an image prompt per scene) and update the schema.

**Watch out for:** You don't need to hand-write JSON — generate it. If output still isn't obeyed, add a short instruction about the required format; but usually the schema alone suffices.

**Original example to invent:** The source parses email fields and a story (title/characters/scenes). Define a different schema (e.g., a recipe with ingredients[] and steps[]) to demonstrate structured output.
