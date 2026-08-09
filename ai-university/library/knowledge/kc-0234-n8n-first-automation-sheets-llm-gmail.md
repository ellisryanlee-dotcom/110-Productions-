---
id: kc-0234
type: how-to
track: "Track 8 — Applied Automations"
topics: [n8n, google-sheets, openai, gmail, oauth, automation]
source_video: ZHH3sr234zY
source_channel: "@nateherk"
source_views: "523K"
confidence: high
---
# Building a first n8n automation: Sheets → LLM summary → email

**What:** A three-node workflow that fires whenever a row is added/updated in a
spreadsheet, sends the row to a language model to write an email subject and body, then
sends that email automatically. It demonstrates triggers, an LLM node, credentials, and
per-step testing end to end.

**Why it matters:** It's the canonical "connect two apps with AI in the middle" build —
a template for countless real automations (order processing, notifications, intake
handling) — and it teaches the credential setup and JSON-output details beginners trip
on.

**The moves:**
1. Add a spreadsheet trigger set to fire on row added/updated; connect its OAuth
   credential (create a cloud project, enable the API, make an OAuth client ID/secret,
   add the redirect URI, publish the consent screen or add yourself as a test user).
2. Add an LLM node ("message a model"), connect it with an API key, pick a model, and
   write a system prompt that summarizes the incoming fields.
3. Drag the trigger's fields into the prompt as variables so they change per row.
4. Turn on "output as JSON" so subject and body come out as two separate fields.
5. Add an email node, map subject/body from the JSON, set recipient, disable the
   default attribution, test each step, then set the workflow active.

**Watch out for:** A node won't produce output unless wired to the previous one. Without
JSON output the LLM returns one blob, breaking downstream field mapping. Spreadsheet
date/number formatting can arrive as a serial number — use plain-text formatting or fix
it in the node. Inspect the executions view to debug how data actually flowed.

**Original example to invent:** Source summarized customer orders. Writers should build a
different Sheets→LLM→email flow (e.g., summarizing event signups).
