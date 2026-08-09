---
id: kc-0305
type: how-to
track: "Track 2 — AI Agents Core"
topics: [prompting, agent-design, few-shot, orchestration]
source_video: 9FuNtfsnRNo
source_channel: "@nateherk"
source_views: "1.1M"
confidence: high
---
# Encoding cross-tool dependencies as prompt rules and one example

**What:** When one action depends on the output of another (e.g., you must look up
a contact's email before you can send that contact an email), you don't build
rigid branching logic — you state the dependency as a rule in the router's system
prompt and give a single worked example, then let the agent sequence the calls.

**Why it matters:** A short rule plus one example was enough to get reliable
multi-step behavior without a long or complex prompt. It keeps the orchestrator
lightweight while still enforcing correct order of operations.

**The moves:**
1. List the actions that require a prerequisite lookup (send email, draft email,
   create event with an attendee → all need contact info first).
2. Write a rule: for these actions, call the lookup tool first, then pass the
   retrieved value to the acting tool.
3. Add exactly one input→action example showing the sequence and the plain-
   language query handed to the downstream tool.
4. Provide current date/time as context so relative requests ("tonight at 6")
   resolve.

**Watch out for:** Pass the downstream tool a clean instruction string ("send X an
email asking Y"), not a pre-written artifact — let the specialist compose the
final output.

**Original example to invent:** Source used contact-lookup-before-email. Writers
should show a different prerequisite chain (e.g., look up an order ID before
issuing a refund).
