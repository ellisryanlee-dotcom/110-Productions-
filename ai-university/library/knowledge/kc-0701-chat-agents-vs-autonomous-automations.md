---
id: kc-0701
type: concept
track: "Track 2 — AI Agents Core"
topics: [agents, triggers, automation-design, conversational-agents]
source_video: XeIx4S6YvGo
source_channel: "@nateherk"
source_views: "238K"
confidence: medium
---
# Chat agents vs autonomous, trigger-driven automations

**What:** A distinction between two kinds of agent systems. A *chat/conversational
agent* only acts when a human talks to it; it looks things up and answers, but a
person must initiate every run. An *autonomous, trigger-driven automation* fires
on an external event or schedule (a new email, a form submission, a webhook, a
time of day) and takes action without anyone prompting it.

**Why it matters:** The trigger surface of a platform decides which of these you
can build. A tool whose only entry point is a chat box steers you toward
assistants; a tool with rich event and schedule triggers lets you build systems
that run in the background. Knowing the difference keeps you from mistaking a
demo-friendly chatbot for a system that actually removes work.

**The moves:**
1. Ask what starts a run: a human message, or an event/schedule?
2. Prefer event/schedule triggers when the goal is to remove recurring manual
   work rather than answer ad-hoc questions.
3. If a platform only exposes a chat trigger, check whether runs can also be
   fired via API/webhook before assuming it can do background work.
4. Map each desired automation to its ideal trigger before choosing a tool.

**Watch out for:** Conversational agents demo well but often deliver less
compounding value because a human still has to drive them. Firing an agent by
API is possible on chat-first platforms but is usually less discoverable.

**Original example to invent:** Pick a concrete back-office task and show the
same job built two ways — one you must chat with, one that fires on a schedule —
and contrast the human effort each requires.
