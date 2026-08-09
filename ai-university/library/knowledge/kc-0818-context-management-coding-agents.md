---
id: kc-0818
type: how-to
track: "Track 9 — Reliability & Craft"
topics: [context-management, planning-mode, sessions, drift, tokens]
source_video: 99VHENEKA9o
source_channel: "@nateherk"
source_views: "209K"
confidence: high
---
# Managing context and tokens in coding agents

**What:** A set of habits that keep an agentic coding session accurate and
affordable: use planning mode before building, keep sessions focused, and reset
context before the model loses track.

**Why it matters:** Even with very large context windows, agents lose earlier
instructions when you load big codebases, run many tool calls, and go dozens of
prompts deep. Poor context hygiene causes both wrong output (drift) and runaway
token cost.

**The moves:**
1. Use a read-only planning mode first for multi-file work — map strategy and ask
   clarifying questions before touching code; dial reasoning depth up for hard
   problems.
2. Keep one task per session and start fresh often rather than piling everything
   into one long thread.
3. Compress/compact the conversation when a tool supports it, or start a new chat
   when responses slow down.
4. Set project-level rules and conventions that persist across sessions.

**Watch out for:** On long projects, agents can drift away from the rules you set
at the start — building perfectly to spec early, then gradually ignoring guidelines.
This affects essentially every coding agent, so re-anchor rules and keep sessions
short rather than trusting a single marathon session.

**Original example to invent:** Demonstrate the reset/plan-first discipline on a
different project than the source's test builds.
