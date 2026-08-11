---
id: kc-1129
type: how-to
track: "Track 4 — Claude Code & Dev Agents"
topics: [slash-commands, workflows, reusable-prompts, arguments, claude-code]
source_video: amEUIuBKwvg
source_channel: "@ColeMedin"
source_views: "149K"
confidence: high
---
# Slash commands as reusable agentic workflows

**What:** A slash command is a saved markdown file of instructions the agent runs on demand — effectively a reusable advanced prompt. It can be a simple context-priming routine or an elaborate multi-step workflow. Commands can take arguments: a placeholder in the file is replaced by whatever you type after the command name.

**Why it matters:** Instead of retyping or copy-pasting long prompts, you invoke a one-liner. Commands are trivially shareable with teammates and encode repeatable workflows (prime context, run a review, fix an issue). Other assistants without formal slash commands can use the same markdown as a plain prompt.

**The moves:**
1. Create a commands folder in the agent's config directory.
2. Write each command as a markdown file of steps.
3. Add an arguments placeholder to parameterize it.
4. Refresh the session to load new commands, then invoke by name with any argument.

**Watch out for:** New commands aren't picked up until you restart the session. Keep each command's steps explicit — the agent follows them literally.

**Original example to invent:** Source demos a codebase-priming command. Write a different reusable command (e.g., a release-notes generator) with an argument, in your own words.
