---
id: kc-0117
type: how-to
track: "Track 9 — Reliability & Craft"
topics: [human-in-the-loop, approval, revision-loop, telegram, n8n]
source_video: Ey18PDiaAYI
source_channel: "@nateherk"
source_views: "1.8M"
confidence: high
---
# Human-in-the-loop approval and revision loops

**What:** A pattern where a workflow pauses and waits for a person to approve, reject, or give feedback before it does something irreversible (send to a client, post publicly). Implemented with a "send and wait for response" step (over Telegram, Slack, email, etc.) offering either yes/no approval or free-text feedback. With free text, feedback routes to a revision agent that regenerates, then loops back for another review — unlimited revisions on top of revisions.

**Why it matters:** It puts a safety gate on autonomous output so nothing ships without sign-off, while still letting the human refine results conversationally instead of restarting from scratch.

**The moves:**
1. Generate the draft (e.g., an agent writes a post using research).
2. Store the latest version in a set node so every stage references the most recent one.
3. Add the send-and-wait step; send the current version and request feedback.
4. Use an AI classifier as the decision point — it reads free-text feedback and decides approve vs. revise (something rule-based logic couldn't do).
5. On revise, pass the current draft + feedback to a revision agent, then loop back to the set node and re-request.
6. On approve, publish the latest version.

**Watch out for:** Always feed forward and act on the most recent version, or revisions are pointless. Free-text responses currently surface via a browser form rather than natively in the chat app. Using send-and-wait as an agent tool doesn't yet work well — the wait happens at the wrong level and no feedback returns to the agent; keep it as a standalone node in one workflow.

**Original example to invent:** The source approves social posts about coffee/crocodiles over Telegram. Build a review gate for a different artifact (e.g., outbound proposal emails) over a different channel.
