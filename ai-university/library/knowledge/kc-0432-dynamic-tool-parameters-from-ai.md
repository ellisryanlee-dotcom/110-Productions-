---
id: kc-0432
type: how-to
track: "Track 1 — Automation Foundations (n8n)"
topics: [n8n, tools, dynamic-parameters, expressions]
source_video: 6DLZK7XDOGo
source_channel: "@nateherk"
source_views: "388K"
confidence: high
---
# Let the AI fill tool parameters dynamically

**What:** Instead of hardcoding a tool's inputs (like a fixed recipient), you mark fields as dynamic and define named keys the model populates by reading the user's request. The agent extracts the right value for each field from the incoming query at run time.

**Why it matters:** Hardcoded fields make a tool do the same thing every run. Dynamic, AI-filled parameters make one tool flexible across every request without rebuilding it.

**The moves:**
1. Switch the tool's field from a fixed value to a dynamic expression.
2. Define a named key for each parameter you want the AI to supply (e.g., recipient, subject, body).
3. The model reads the user message and fills each key with the appropriate extracted value.
4. Optionally add descriptions to keys to guide what data each expects.

**Watch out for:** The AI infers values from the query, so ambiguous requests yield wrong field values; clear key names (and descriptions) improve extraction accuracy.

**Original example to invent:** Source fills recipient/subject/body for an email. Writers should apply the same dynamic-field technique to a different tool (e.g., a calendar-event creator pulling title/time/attendee).
