---
id: kc-0102
type: how-to
track: "Track 2 — AI Agents Core"
topics: [ai-agents, tool-calling, from-ai, dynamic-parameters, n8n]
source_video: Ey18PDiaAYI
source_channel: "@nateherk"
source_views: "1.8M"
confidence: high
---
# Letting the model fill in tool parameters

**What:** When an agent uses a tool, individual fields (recipient, subject, body, search query, event time) can be set to be filled automatically by the model instead of hard-coded. In n8n this is a per-field toggle ("let the model define this parameter"); inside custom HTTP-request tools the same idea is expressed with a placeholder function that names the value the model must supply.

**Why it matters:** This is what makes a tool flexible. Rather than one static request, the agent interprets the user's intent and populates each field on the fly, so the same tool works for any request ("email Bob about lunch" vs. "email the vendor about the invoice").

**The moves:**
1. Open the tool and identify which fields should vary per request.
2. Toggle those fields to be model-defined (or, in a raw HTTP tool, insert a placeholder with a short key name and a description).
3. Give each dynamic field a clear description so the model knows what to put there.
4. Run a query and inspect the tool's input log to confirm the model filled each field correctly.
5. Add a field-level description to enforce specifics (e.g., always sign emails a certain way) rather than bloating the system prompt.

**Watch out for:** The model can only fill fields you expose — if you don't map any input into the tool, it sees nothing. Vague field names/descriptions cause wrong values (e.g., inventing an address); inspect logs and tighten descriptions reactively.

**Original example to invent:** The source demonstrates model-filled fields on an email tool signing off with a placeholder name. Show the same technique on a different tool (e.g., a task-creation tool where the model derives priority and due date from a plain-language request).
