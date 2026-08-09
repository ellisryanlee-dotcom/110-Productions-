---
id: kc-0433
type: how-to
track: "Track 1 — Automation Foundations (n8n)"
topics: [n8n, tools, lookup, data-source, crm]
source_video: 6DLZK7XDOGo
source_channel: "@nateherk"
source_views: "388K"
confidence: high
---
# Give an agent a contact-lookup tool

**What:** Rather than requiring the user to supply an email address every time, connect a data source (a spreadsheet, CRM, or database) as a lookup tool so the agent can resolve a name to its details before acting.

**Why it matters:** It makes the agent far more natural to use — you can say "email Phil" and let the agent find Phil's address — and demonstrates how any structured data source becomes an agent capability.

**The moves:**
1. Add the data source as a tool and point it at the right document/table.
2. Name the tool clearly (e.g., contact database) so the agent knows when to use it.
3. Update the system prompt to tell the agent the lookup tool exists and when to consult it.
4. Test with a request that omits the email so the agent must look it up, then act on the result.

**Watch out for:** If the system prompt doesn't mention the new tool, the agent won't know to use it. The lookup only works if the data source is populated and correctly connected.

**Original example to invent:** Source uses a sample contact sheet with dummy rows. Writers should invent a different lookup source (e.g., a product-price table) and a request that requires resolving one entry.
