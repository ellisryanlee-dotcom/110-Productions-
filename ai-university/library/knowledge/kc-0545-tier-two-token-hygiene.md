---
id: kc-0545
type: how-to
track: "Track 9 — Reliability & Craft"
topics: [tokens, claude-md, compaction, caching, file-references]
source_video: 49V-5Ock8LU
source_channel: "@nateherk"
source_views: "268K"
confidence: high
---
# Tier-two token hygiene: leaner context, smarter compaction, cache awareness

**What:** A second set of token tactics that go beyond the basics: keep the instruction file lean and index-like, reference files surgically, compact proactively, respect the prompt cache timeout, and control command-output bloat.

**Why it matters:** These target the recurring, per-turn costs that the easy habits miss. The instruction file and file-reading behavior are read constantly, so trimming them and being precise about what the agent loads pays off on every message.

**The moves:**
1. **Lean instruction file as an index** — keep it under ~200 lines with only essentials (tech stack, conventions, build commands, key rules) and route to where bigger detail lives, so the agent grabs files by name instead of searching. It's re-read on *every* message, so even a "hi" pays for a 1,000-line file.
2. **Surgical file references** — point at the specific file/function (e.g., an @-mention) rather than "here's the whole repo, find the bug."
3. **Compact around 60% capacity** — don't wait for auto-compaction near ~95%, by which point context is already degraded; run compaction with explicit instructions on what to preserve. After three-to-four compactions in a row quality degrades, so then take a session summary, clear, and hand the summary back.
4. **Mind the cache timeout** — prompt caching avoids reprocessing unchanged context, but the cache expires after about 5 minutes; if you step away longer, the next message reprocesses everything at full cost, so compact or clear before a break.
5. **Control command output** — full shell-command output enters context; deny permissions for commands a project doesn't need so huge outputs don't silently flood your window.

**Watch out for:** Auto-compaction triggers too late to protect quality; compact proactively. Short breaks past the cache window cause surprise spikes. Command output is a hidden token source because the UI shows only a summary line.

**Original example to invent:** The source describes an index instruction file that routes to documentation URLs. Writers should invent a lean index for a different project and a proactive-compaction moment with their own capacity numbers.
