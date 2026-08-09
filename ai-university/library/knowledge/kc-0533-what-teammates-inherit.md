---
id: kc-0533
type: concept
track: "Track 4 — Claude Code & Dev Agents"
topics: [agent-teams, permissions, context, mcp, skills]
source_video: vDVSGVpB2vc
source_channel: "@nateherk"
source_views: "278K"
confidence: high
---
# What teammates know (and don't) when they spawn

**What:** When an agent team spins up, each teammate inherits the main session's **permissions** (e.g., if the main session bypasses permission prompts or allows all shell commands, so do they) and can access all of the project's **files, MCP servers, and skills**. What they do *not* get is any conversation history — they start with only the prompt the lead sends them.

**Why it matters:** This shapes both safety and prompting. On safety: broad permissions propagate to every teammate, so a permissive main session means permissive agents. On effectiveness: because no history transfers, you must feed each teammate the context it needs, even though it can still read project files on its own.

**The moves:**
1. Before spawning a team, set the main session's permissions deliberately — they cascade to all teammates.
2. Rely on shared access: teammates can use the project's files, MCP servers, and skills without extra wiring.
3. Compensate for the missing history by putting needed context into each teammate's spawn prompt.
4. Watch how the lead prompts each teammate — the spawn message is literally the agent's entire starting context.

**Watch out for:** Running the main session on bypass/all-permissions grants that reach to every teammate at once — a bigger blast radius. Assuming teammates "remember" the earlier conversation is a common mistake; they don't.

**Original example to invent:** The source inspects the spawn messages sent to a researcher/strategist/critic team. Writers should invent a different team and show how a missing piece of context in the spawn prompt would derail one teammate.
