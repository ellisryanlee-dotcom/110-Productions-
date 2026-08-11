---
id: kc-0635
type: framework
track: "Track 2 — AI Agents Core"
topics: [agent-config, instruction-files, persona, heartbeat, memory]
source_video: HJ-dwefABss
source_channel: "@nateherk"
source_views: "244K"
confidence: high
---
# Structure an agent with layered instruction files

**What:** In this orchestration model each agent is defined by a set of instruction
files that work together so it knows what to do every time it wakes: an agents/identity
file (who it is, its directory, memory and planning rules, safety notes), a heartbeat
file (an execution-and-extraction checklist run on every wake), a persona/"soul" file
(character, priorities, voice and tone — e.g., a CEO who owns the P&L and defaults to
action), and a tools file (what it can access). These files evolve over time and you
can edit them by hand.

**Why it matters:** Separating identity, per-wake routine, persona, and tools makes an
agent's behavior legible and tunable. Because heartbeats start each wake fresh, the
files are what carry continuity — they're how the agent re-orients and behaves
consistently across independent wake-ups.

**The moves:**
1. Give each agent an identity file: role, working directory, memory/planning rules,
   safety guidance.
2. Give it a heartbeat checklist it runs every wake (orient, check work, extract
   tasks).
3. Define a persona file for character, priorities, voice, and tone.
4. List its tools/access in a tools file.
5. Edit these files as the agent's role evolves; add or remove behavior deliberately.

**Watch out for:** Since files carry all continuity across fresh wakes, thin or
conflicting instructions produce inconsistent behavior. Keep persona and rules
coherent, and don't let the files drift out of sync with the agent's actual tools.

**Original example to invent:** Source showed a CEO agent's four files. Writers should
design the instruction-file set for a different role (e.g., a support-lead agent) with
its own persona and heartbeat routine.
