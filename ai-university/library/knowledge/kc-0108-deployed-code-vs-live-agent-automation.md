---
id: kc-0108
type: concept
track: "Track 4 — Claude Code & Dev Agents"
topics: [deployment, self-healing, modal, trigger-dev, automation-hosting, claude-code]
source_video: mpALXah_PBg
source_channel: "@nateherk"
source_views: "900K"
confidence: high
---
# Deploying automations: the code goes live, not the live agent

**What:** There's a hard distinction between running an automation live with the Claude Code agent present (which can notice a failure mid-run, investigate, and adapt on the spot) and deploying an automation to run unattended on a schedule or webhook trigger — in the latter case, what actually gets deployed to a hosting platform is the deterministic workflow and tool code the agent produced, not the agent itself. Once deployed, the automation behaves like traditional, predictable automation: it will not self-heal from an error the way it did while the agent was watching. Two cloud platforms were shown as places to host this deployed code: one billed per execution and suited to simple scheduled/webhook jobs, the other offering richer built-in scheduling, automatic retries, queuing, and task orchestration for more complex multi-step or multi-agent code.

**Why it matters:** This distinction resolves a common point of confusion — people expect a deployed "agentic" automation to keep adapting itself in production the way it did during development, and are surprised when it just fails like a normal script would. Knowing this up front sets the right expectation: harden the workflow and tools during the interactive/self-healing phase, because that self-healing goes away the moment it's unattended.

**The moves:**
1. Build and iterate on the automation locally with the agent present until it reliably succeeds on repeated manual runs.
2. Have the agent package the finished workflow/tool code for the chosen hosting platform, including setting the desired trigger (cron schedule or webhook).
3. Store any required secrets as platform-native secret/environment variables on the hosting platform, not hardcoded or committed to version control.
4. Ask the agent to run a security review of the code before deployment specifically looking for exposed secrets or unauthenticated webhook endpoints.
5. After deployment, route any error logs from a failed run back into a fresh Claude Code session and ask it to diagnose and patch the underlying script — the agent still helps fix deployed failures, just not in real time automatically.
6. When later improving the logic, edit and retest the workflow in the interactive Claude Code session first, then push the updated version back to the hosting platform — never edit the deployed version blindly.

**Watch out for:** A workflow that ran perfectly while being watched can still fail once deployed if it depended on the agent's live judgment calls rather than being fully specified in the tool/workflow code. Free-tier API quotas can be exhausted by repeated manual testing before a workflow ever ships, causing the first "real" run to fail for an unrelated reason.

**Original example to invent:** The source deployed a YouTube-analytics report generator and a webhook-triggered lead-notification flow. Writers should invent a different scheduled automation (e.g., a weekly inventory-reorder check) to illustrate the same live-vs-deployed distinction.
