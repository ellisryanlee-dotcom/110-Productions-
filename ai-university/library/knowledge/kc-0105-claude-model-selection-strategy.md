---
id: kc-0105
type: concept
track: "Track 4 — Claude Code & Dev Agents"
topics: [model-selection, opus, sonnet, haiku, cost-optimization, claude-code]
source_video: mpALXah_PBg
source_channel: "@nateherk"
source_views: "900K"
confidence: medium
---
# Matching model tier to task difficulty (Haiku/Sonnet/Opus)

**What:** Claude Code offers a small/fast/cheap model tier, a balanced mid-tier, and a large/slow/expensive top tier, switchable per-session with a model-selection command. The practical default the course recommends is using the mid-tier model for the bulk of routine work and reserving the top tier for complex architecture decisions or hard debugging, then switching back — while reserving the small tier mainly for sub-agents doing bulk/simple processing where a cheaper, faster model doesn't hurt output quality.

**Why it matters:** Model choice is one of the few dials that trades cost and speed against reasoning depth directly. Using the most expensive model for every trivial request is wasteful; using the cheapest model for a hard architectural decision risks a worse outcome. Matching model tier to task difficulty is a cheap way to control spend without sacrificing quality where it counts.

**The moves:**
1. Default to the mid-tier model for day-to-day building and edits.
2. Escalate to the top-tier model specifically for complex planning, architecture decisions, or a bug that the mid-tier model is struggling with, then switch back down afterward.
3. Assign the small/cheap tier to sub-agents whose job is bulk processing or simple summarization (e.g., digesting a large scrape into a short report) so the main session's more expensive model isn't spent reading raw data.
4. Treat the trailing version number on a model name as just a release increment, not something that needs to be memorized or reasoned about.

**Watch out for:** Defaulting to the most powerful model for everything is a common beginner habit that inflates cost without a proportional quality gain on simple tasks; it's easy to hit subscription usage limits faster than expected as a result.

**Original example to invent:** The source discussed this in the context of its own personal workflow. Writers should invent a concrete task split (e.g., three sub-agents doing simple lookups on the cheap tier feeding a top-tier planning session) rather than reusing the source's stated habits.
