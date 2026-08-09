---
id: kc-1026
type: how-to
track: "Track 4 — Claude Code & Dev Agents"
topics: [claude-code, global-rules, claude-md, system-prompt, ai-coding]
source_video: [Egeuql3Lrzg, SS5DYx6mPw8]
source_channel: "@ColeMedin"
source_views: "324K"
confidence: high
---
# Global rules (CLAUDE.md / workspace rules) for AI coding assistants

**What:** AI coding assistants read a global-rules file — CLAUDE.md for Claude Code, or the equivalent "rules"/"memories" setting in other IDEs — that acts as a persistent system prompt. It holds the highest-level instructions you want the assistant to follow on every request without having to restate them.

**Why it matters:** It keeps your prompts short while enforcing consistent behavior. Instead of typing "read the plan, write tests, mark the task done, keep files small" each time, you encode those once as rules. The assistant then follows them automatically, which is what makes results reliable and repeatable.

**The moves:**
1. Create the rules file (global for all projects, or workspace-scoped for one project — workspace is usually better since tech choices are project-specific).
2. Put highest-level guidance in it: coding style and conventions, testing expectations, how to manage tasks, and best practices to follow.
3. Add instructions that would otherwise be repeated prompts — e.g., "read the planning file at the start of a new conversation," "write tests for each new feature," "keep files under a length limit."
4. Encode testing best practices here too (dedicated test folder, mock external calls, cover success/failure/edge cases) so you needn't explain them each time.
5. Keep prompts simple afterward; the rules carry the standing instructions.

**Watch out for:** Assistants sometimes read the rules but don't fully honor them (e.g., creating a tests folder but skipping the tests) — verify and follow up. Workspace rules override the need to repeat project-specific tech. This complements, but is separate from, the per-feature planning docs.

**Original example to invent:** Draft a compact rules file for a stack of your choice and show how a bare one-line prompt still triggers the standing behaviors — your own rules.
