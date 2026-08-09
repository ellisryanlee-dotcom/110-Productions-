---
id: kc-2011
type: framework
track: "Track 2 — AI Agents Core"
topics: [conversational-agents, automated-agents, voice-agents, triggers]
source_video: [w0H1-b044KY, 5TxSqvPbnWw, h9Pk5iNDXMk]
source_channel: "@LiamOttley"
source_views: "3.6M / 976K / 1.1M"
confidence: medium
---
# Two categories of agent: conversational vs. automated

**What:** Agents split into two deployment shapes. Conversational agents are messaged directly by a human — via website chat widget, WhatsApp, Instagram DMs, Telegram, a phone call, or a custom app; voice versions use multimodal models that take audio in and return audio out. Automated agents run in the background, kicked off by an event trigger (a new email, a form submission) or a schedule, with no human chatting to them. Both still receive an "input"; the difference is only whether a person generates it.

**Why it matters:** The category dictates the platform, the interface work, and the trigger mechanism. Choosing correctly up front (does a human talk to it, or does an event start it?) shapes the entire build and where the agent gets deployed.

**The moves:**
1. Decide whether the use case is human-initiated (conversational) or event/schedule-initiated (automated).
2. For conversational: pick the channel(s) — web, messaging app, or phone/voice — and design the dialog flow.
3. For voice: choose inbound (a number people call) or outbound (the system places the call); use a multimodal/voice platform.
4. For automated: define the trigger (event or schedule) and the end-to-end action sequence.

**Watch out for:** Voice agents add latency and complexity (turn-taking, voicemail detection, natural pacing) beyond text agents. Automated background agents need guardrails since no human is present to catch mistakes in real time.

**Original example to invent:** The source lists receptionists, DM bots, and outbound callers. Writers should pick fresh, distinct use cases for each category.
