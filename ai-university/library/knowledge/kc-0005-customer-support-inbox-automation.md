---
id: kc-0005
type: how-to
track: "Track 8 — Applied Automations"
topics: [customer-support, email-automation, text-classification, rag, inbox-routing]
source_video: Ey18PDiaAYI
source_channel: "@nateherk"
source_views: "1.8M"
confidence: high
---
# Customer-support inbox automation: classify, retrieve, draft, reply

**What:** A pattern for automating an inbound support inbox without a full agent: a new-email trigger feeds an AI text classifier that sorts the message into categories (e.g., "support" vs. "other"); the support branch looks up relevant knowledge from a vector store, an AI step drafts a reply body constrained to only the retrieved facts, and a final step replies in-thread using the original message's ID (optionally applying a label).

**Why it matters:** This produces the same outcome as a "support agent" but as a fixed sequence, removing the extra model call an agent would spend deciding what to do next, and making it trivial to see exactly which knowledge was used to draft any given reply.

**The moves:**
1. Trigger on new inbound messages and disable any "simplify" option on the trigger if longer message bodies are being truncated before they reach the classifier.
2. Feed the message body into a classifier step with two or more named categories and a one-line description of what each category looks like; route the unmatched/other-category branch to a no-op or a separate handling path.
3. On the matched branch, search the knowledge store using the message content as the query, filter out low-relevance matches by score, and combine the remaining chunks into context.
4. Draft the reply with a model call explicitly told: who it's answering, that it must only use the supplied knowledge and never invent facts, the tone/persona to use, and to output only the reply body (not a subject line, since this is a threaded reply).
5. Send the reply using the original inbound message's ID so it threads correctly, and optionally tag/label the original message so the inbox stays organized.

**Watch out for:** If the reply model isn't explicitly told to answer only from the retrieved knowledge, it can blend in plausible-sounding but unverified claims. A classifier with only vague category descriptions will misroute borderline emails — tightening the category description, or adding a couple of example messages per category, is the fix.

**Original example to invent:** Source used a fictional retailer's warranty and privacy-policy inbox as the running example. Writers should build this pattern around a different vertical, such as a software product's billing-question inbox or a clinic's appointment-question inbox.
