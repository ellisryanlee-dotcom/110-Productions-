---
id: kc-0101
type: framework
track: "Track 4 — Claude Code & Dev Agents"
topics: [wat-framework, agentic-workflows, workflow-design, tool-design, claude-code]
source_video: mpALXah_PBg
source_channel: "@nateherk"
source_views: "900K"
confidence: high
---
# The WAT framework for structuring agentic builds (Workflows, Agents, Tools)

**What:** A three-layer way of organizing any Claude-Code-built automation so that reasoning and execution stay separated. Workflows are markdown documents that describe a process end to end (objective, inputs, which tools to use, expected output, edge cases) in plain language. The Agent is Claude Code itself, which reads a workflow, decides which tools to call and in what order, and handles errors as they occur. Tools are single-purpose script files (e.g., Python) that each execute one concrete action and hold no decision-making logic.

**Why it matters:** Splitting a build into an instructions layer, a reasoning layer, and an execution layer keeps the deterministic parts (tools) predictable and testable while confining unpredictable reasoning to a layer designed for it (the agent). It also gives every future project the same mental model, so a new build is "add markdown here, add a script there" rather than reinventing structure each time. The course frames this as the reason accuracy holds up over multi-step tasks — chaining many unstructured steps compounds error, while a workflow file plus modular tools keeps each step legible and independently fixable.

**The moves:**
1. Give the project a short project-level system-prompt file that states the three layers exist and where each type of file lives.
2. Create a `workflows/` folder for markdown SOPs and a `tools/` folder for single-purpose scripts; add a scratch/temporary folder for intermediate outputs.
3. When starting a new capability, describe the end goal in plain language and let the agent draft the workflow file and the tool scripts it needs, rather than writing tool code by hand.
4. When a tool fails, have the agent diagnose the failure, patch the tool, and update the workflow file so the same failure doesn't recur — treat every error as something to encode back into the files, not just fix once.
5. Reuse the same three-layer vocabulary for skills and sub-agents later in a project; they are the same pattern (instructions + reasoning + execution) applied at different scopes.

**Watch out for:** The framework only pays off if tools stay single-purpose — cramming multiple actions into one tool script re-creates the "one giant unpredictable step" problem it's meant to avoid. Workflows are guidelines, not guarantees; the agent still makes judgment calls inside them, so review the first few runs closely.

**Original example to invent:** The source repeatedly demoed this framework by building a newsletter-generation automation and a job-listing scraper. Writers should invent a different domain (e.g., invoice reconciliation, support-ticket triage) to illustrate the same three-layer structure.
