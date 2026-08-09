---
id: kc-1137
type: how-to
track: "Track 4 — Claude Code & Dev Agents"
topics: [prompting, keywords, thinking, over-engineering, claude-code]
source_video: amEUIuBKwvg
source_channel: "@ColeMedin"
source_views: "149K"
confidence: medium
---
# Prompting levers for a coding agent

**What:** Certain keywords are baked into the model and change its behavior. Emphasis/priority words (like "important," "proactively") and a thinking-escalation keyword make the agent spend more tokens reasoning through a problem. Conversely, some phrasing pushes the agent to over-engineer — it tends to keep old code for backward compatibility and gold-plate when prompted with words like "production ready," so you sometimes prompt against that.

**Why it matters:** Small wording choices meaningfully change effort and output. Knowing which levers deepen reasoning versus which trigger bloat lets you get better results without changing the model.

**The moves:**
1. Use emphasis keywords to flag what matters most.
2. Escalate the thinking keyword when a problem needs deeper reasoning (at higher token cost).
3. Explicitly instruct against keeping dead code / gold-plating when you want lean output.
4. Watch for phrasings that reliably trigger over-engineering and avoid or counter them.

**Watch out for:** The deep-thinking keyword raises token usage — reserve it for hard problems. Over-prompting for "production ready" can backfire into needless complexity.

**Original example to invent:** Source names a few keywords. Demonstrate the effect of an emphasis vs a thinking keyword on a task in your own words, without quoting the source.
