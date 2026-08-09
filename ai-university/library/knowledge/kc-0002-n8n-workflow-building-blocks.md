---
id: kc-0002
type: concept
track: "Track 1 — Automation Foundations (n8n)"
topics: [n8n, workflow-builder, triggers, nodes, executions, ui-basics]
source_video: Ey18PDiaAYI
source_channel: "@nateherk"
source_views: "1.8M"
confidence: high
---
# n8n workflow building blocks: triggers, nodes, and executions

**What:** The core vocabulary of n8n's visual workflow builder: every workflow starts with exactly one trigger node (manual, scheduled, an app event, an inbound webhook, a form, or a chat message), followed by a left-to-right chain of nodes (action nodes that call an app/service, transformation nodes that reshape data, or AI nodes). Every node exposes three panels — input data coming in, a configuration panel of settings, and the output it produced — and every past run is stored as an inspectable "execution."

**Why it matters:** Understanding this shared node anatomy is what makes an otherwise overwhelming catalog of integrations navigable — every one of them behaves the same way (credential, then configuration, then output), so the skill transfers to any new service instead of needing to be relearned per integration.

**The moves:**
1. Identify what starts the process before adding anything else — common trigger types are manual/test, scheduled, an app event (new row, new file, new message), an inbound webhook, a form submission, or a chat message.
2. Add nodes one at a time and test each in isolation ("test step") before wiring the next, checking the output panel in schema, table, or raw-JSON view — all three represent the same data, just formatted differently.
3. Reference data from an earlier node as a variable/expression rather than typing static values, so the same node behaves correctly on every run regardless of what data is currently flowing through it.
4. Distinguish binary data (files: images, PDFs, video, audio) from normal fields — binary content only shows up in a dedicated "binary" view and has to be explicitly downloaded/converted before an AI or vectorizing step can use it.
5. Flip a workflow from inactive to active only once its trigger is meant to run unattended; an inactive workflow only runs when manually tested, while an active one runs silently on its own schedule or events and only shows up afterward in the execution history rather than animating live.
6. Use "pin data" while building to freeze a sample execution's output, so downstream nodes can be iterated on without re-triggering a slow or rate-limited upstream step every time.

**Watch out for:** Forgetting to flip a workflow active means a configured trigger (schedule, webhook, new-row event) will silently never fire in the real world even though it tests fine manually. Downloaded/shared workflow templates are just serialized JSON files — importing one still requires reconnecting credentials per environment.

**Original example to invent:** Source introduced this vocabulary using a "tell me a joke" OpenAI call and a chat-triggered story generator. Writers should introduce the same trigger/node/execution vocabulary through an unrelated first example, such as a scheduled inventory check or an inbound ticket router.
