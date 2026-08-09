---
id: kc-0303
type: how-to
track: "Track 2 — AI Agents Core"
topics: [n8n, fromai, tool-parameters, http-placeholders, agent-tools]
source_video: 9FuNtfsnRNo
source_channel: "@nateherk"
source_views: "1.1M"
confidence: high
---
# Letting the model fill tool parameters ($fromAI and HTTP placeholders)

**What:** n8n's from-AI expression marks a tool parameter as
model-completed: you supply a key (plus optional description and type) and the
LLM fills the value — recipient, subject, body, search term — from the query
context at call time. HTTP-request tools offer the same idea via named
placeholders: a double-curly token in the JSON body plus a placeholder
definition (name, description, type) the model fills before the request fires.

**Why it matters:** Without this, you'd hand-build parsing logic to extract
each field from the user's request and map it into the tool. Model-filled
parameters remove that entire layer, which is most of the speed of building
agents in n8n.

**The moves:**
1. For every parameter that varies per request, insert the from-AI expression
   with a short, unambiguous key (e.g., an email-address key for the recipient
   field).
2. Add a description when the key alone could be misread; set the type for
   non-strings.
3. Keep genuinely fixed parameters hard-coded — only delegate what varies.
4. In raw HTTP tools, put a placeholder token in the body where the dynamic
   value goes, then define that placeholder's name, description, and type so
   the model knows what to supply.
5. Inspect executions to confirm what the model actually filled in.

**Watch out for:** Vague keys produce wrong fills. The model can only fill
from what's in the query/context — pair with lookup tools when values (like
internal IDs) aren't in the user's words.

**Original example to invent:** Source demoed model-filled recipient/subject/
body on an email-send tool and a model-filled search term in a web-search HTTP
body. Writers should pick different tools (e.g., a CRM field update or an SMS
send) to illustrate.
