---
id: kc-0807
type: concept
track: "Track 4 — Claude Code & Dev Agents"
topics: [claude-code, skills, context-management, tokens, progressive-loading]
source_video: zKBPwDpBfhs
source_channel: "@nateherk"
source_views: "215K"
confidence: high
---
# Progressive context loading in skills

**What:** The three-stage way an agent loads a skill so it stays cheap: first it
scans only the frontmatter (name + description) of every skill; then, if one
matches, it reads that skill's full instructions; only then, and only if a step
needs it, does it load the extra reference files or scripts.

**Why it matters:** With many skills installed, reading all of them on every
request would burn enormous context and tokens. Progressive loading keeps the
initial search near-trivial (a small amount of tokens per skill) and defers the
expensive material until it's actually required.

**The moves:**
1. Write tight, specific descriptions — they are the only thing scanned at the
   first stage, so they must clearly signal when the skill applies.
2. Keep the full instructions focused, since that's stage two.
3. Move heavy material (long docs, brand assets, API references) into separate
   files that only load at stage three, on demand.

**Watch out for:** A vague description can make the right skill fail to trigger, or
make the wrong one fire too often. Bloating the main instructions defeats the
lightweight scan. This is why "keep detail in reference files" is a token strategy,
not just tidiness.

**Original example to invent:** Illustrate the three stages with a different skill
than the source's diagram example.
