---
id: kc-0538
type: concept
track: "Track 4 — Claude Code & Dev Agents"
topics: [computer-use, file-access, skills, scheduled-tasks]
source_video: ZRb7D6R64hM
source_channel: "@nateherk"
source_views: "272K"
confidence: medium
---
# The assistant that operates your computer: file access, skills, scheduled tasks

**What:** A middle tier where the assistant runs on your machine with real read/write access to folders you grant, executing work rather than just describing it. Its defining features: **file-system access** (runs in an isolated environment but can own the folders you permit), **skills** (reusable markdown-defined workflows, with large public/official libraries to install from), **scheduled tasks** (run on a cadence, though the machine must be awake), **mobile control** (dispatch tasks from your phone while your desktop works), and **computer use** (visually navigate apps that lack integrations, by clicking/typing like a human).

**Why it matters:** This is where the assistant stops being advice-only and becomes a co-worker that sorts your files, runs recurring reports, and operates apps. It's often the first tier where you save serious weekly time and where non-coders can sell automation as a service — the practical floor for an automation business.

**The moves:**
1. Grant access only to the folders it needs; it can't touch what you don't permit.
2. Build or install skills for recurring work so you never re-explain a task.
3. Schedule recurring jobs (daily/weekly/monthly), remembering the desktop app must be running.
4. Pair a phone to send tasks on the go and get pinged on completion.
5. Fall back to computer use for apps without connectors.

**Watch out for:** Scheduled tasks here need the machine awake and the app open (cloud-run alternatives exist at higher tiers). Only install skills from trusted sources. It's safe and friendly but less precise/rigorous than a full coding harness for engineering-grade work.

**Original example to invent:** The source sorts a messy downloads folder. Writers should invent a different real-file task (e.g., organizing and renaming a receipts folder into a monthly summary).
