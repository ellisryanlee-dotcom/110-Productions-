---
id: kc-0625
type: concept
track: "Track 2 — AI Agents Core"
topics: [heartbeat, proactive-agents, scheduling, memory, orchestration]
source_video: [HJ-dwefABss, eu8UJtuIi-E, CBNbcbMs_Lc]
source_channel: "@nateherk"
source_views: ["244K", "248K", "251K"]
confidence: high
---
# Heartbeats make agents wake on a schedule and work proactively

**What:** A heartbeat is a scheduled wake-up that keeps an agent running around the
clock. On each beat the agent starts effectively fresh — with new context and memory —
so it must first re-orient: check its recent work, read its tasks, and get familiar
with its environment before acting. Cadences are configurable (e.g., every few hours).
This is a large part of why always-on agents feel proactive rather than purely
reactive; a related pattern is a recurring job firing at fixed intervals to run a
specific loop.

**Why it matters:** Heartbeats turn an agent from something you must prompt into
something that acts on its own schedule — monitoring, reminding, and progressing work
without you initiating each step. It's the mechanism behind "it worked overnight and I
woke up to results."

**The moves:**
1. Set a wake cadence appropriate to the task (frequent for monitoring, sparse for
   digests).
2. Since each wake starts fresh, give the agent durable memory/instructions and a
   startup routine: check work, read tasks, orient to the environment.
3. Use recurring scheduled jobs for well-defined repeating loops (audits, rebalances,
   reports).
4. Ensure the agent can verify prior state so it doesn't redo or contradict past work.

**Watch out for:** Fresh-context wake-ups mean an agent that doesn't reliably re-read
its state can repeat or undo work. Frequent heartbeats on a metered model steadily
accrue cost even when there's little to do.

**Original example to invent:** Sources show heartbeats powering an executive
assistant and a trading loop. Writers should invent a different heartbeat use (e.g., a
support agent that wakes hourly to triage the queue) and show its orientation routine.
