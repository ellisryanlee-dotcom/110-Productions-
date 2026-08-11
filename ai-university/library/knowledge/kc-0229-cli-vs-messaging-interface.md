---
id: kc-0229
type: concept
track: "Track 6 — Interfaces: Voice & Chat"
topics: [interfaces, telegram, cli, context-window, voice]
source_video: gb5TlGw6Uks
source_channel: "@nateherk"
source_views: "336K"
confidence: high
---
# CLI vs. messaging (Telegram) as an agent interface

**What:** The same agent can be driven from a terminal CLI or from a chat app like
Telegram. It's the same brain, model, memory, and skills either way — but the CLI
gives more control and visibility (full slash commands, clearer context-window state,
better for deep work), while messaging is a lightweight remote for quick tasks and
scheduling on the go. Messaging can also handle voice notes (transcribed in, spoken
out).

**Why it matters:** Choosing the interface by task type prevents frustration. Vibe-
coding a whole app over a chat app feels bad because you lose visibility into the
context window; conversely, you don't need a terminal to fire off a quick scheduled
task from your phone.

**The moves:**
1. Use the CLI for deep/high-risk work where you need visibility and slash commands.
2. Use messaging for quick, low-risk tasks, reminders, and cron setup while mobile.
3. Watch what the agent does even in messaging — confirm it's invoking the right skill.
4. Remember context is token-based, not message-based: system prompt + user/soul/memory
   files always occupy the window, and auto-compaction runs as you approach the limit.

**Watch out for:** In messaging it's harder to tell where a session reset or
compaction happened, so avoid context-heavy, high-risk work there. If the agent isn't
invoking a skill you expect, that's a signal to tighten the skill's trigger
description.

**Original example to invent:** Source used Telegram as the on-the-go remote. Writers
should contrast CLI vs. a different messaging channel on a specific task.
