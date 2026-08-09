---
id: kc-0146
type: how-to
track: "Track 9 — Reliability & Craft"
topics: [claude-code, hacks, ultrathink, context7, screenshots, productivity]
source_video: mpALXah_PBg
source_channel: "@nateherk"
source_views: "900K"
confidence: high
---
# Power-user habits for agentic coding

**What:** A set of high-leverage practices for getting more out of an agentic coding tool, spanning setup, context discipline, quality control, and speed.

**Why it matters:** These are the difference between a beginner and a fast, reliable operator — they cut wasted tokens, raise output quality, and let one person produce a lot in parallel.

**The moves:**
1. Run init on existing projects to auto-generate a CLAUDE.md; set up a status line to watch model/context/cost.
2. Guard context: keep prompts small, use the context command to find bloat, compact around ~60% (optionally keeping named info), and clear between tasks.
3. Always start in plan mode; treat the agent like a junior dev by posing problems; make it ask questions until ~95% confident.
4. Bake self-checks into its to-do list (screenshot and verify; don't advance until ~95% sure) and challenge weak outputs, then have it update the skill/CLAUDE.md so mistakes don't recur.
5. Use screenshots (it can see) for error messages, inspiration, and self-review; use browser dev tools for functional checks.
6. Speed/scale: parallel sub-agents (Haiku for cheap work), custom skills, loop for recurring checks, VPS/remote control for always-on, ultrathink for hard problems (max thinking budget), and Context7 MCP to inject current library docs and avoid deprecated APIs.
7. Prefer a direct API endpoint over an MCP server when you only need one function (saves the server's token overhead).

**Watch out for:** Bypass-permissions is fast but risky — prefer an allow/deny list. Exit early and re-prompt when it drifts; every token spent going the wrong way is wasted. Don't run so many parallel sessions that you lose track and hit context rot.

**Original example to invent:** The source lists ~30 hacks with quick demos. Pick a few and show them applied to a different project so the framing is original.
