---
id: kc-0302
type: how-to
track: "Track 1 — Automation Foundations (n8n)"
topics: [n8n, fromAI, tool-parameters, agent-design]
source_video: [9FuNtfsnRNo, ldETapkr8Hg]
source_channel: "@nateherk"
source_views: "1.1M"
confidence: high
---
# Letting the model fill tool parameters (the fromAI function)

**What:** Rather than writing parsing logic to pull values out of a user request,
n8n's `fromAI` expression (or the "let the model define this" toggle on a
parameter) hands a specific field to the LLM to populate. You give it a key and an
optional short definition, and the model infers the value — recipient address,
subject, message body, image title — from the incoming query.

**Why it matters:** It collapses a whole branch of extraction/transformation nodes
into a single expression. Building and wiring up tools becomes dramatically
faster because you no longer manually map every parameter.

**The moves:**
1. On a tool's input field, choose the model-defined option instead of a static
   value or hand-built expression.
2. Provide a key name (e.g., "email address", "image title") and, when the field
   is ambiguous, a one-line description of what belongs there.
3. Optionally constrain with instructions (e.g., "title should be no more than
   four words").
4. Let the agent, at call time, fill each keyed field from the query.

**Watch out for:** For HTTP-request bodies you can achieve the same effect with a
named placeholder ({{key}}) plus a defined placeholder name, description, and
type — mechanically equivalent to `fromAI`. If a field must be present for the API
call to succeed (e.g., attendees on a calendar event), leaving it model-optional
can silently break the request; make a separate tool variant for the required-
field case.

**Original example to invent:** Source filled email fields and image prompts.
Writers should use a different tool (e.g., an SMS tool filling recipient + body).
