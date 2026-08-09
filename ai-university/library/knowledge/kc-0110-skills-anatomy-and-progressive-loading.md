---
id: kc-0110
type: concept
track: "Track 4 — Claude Code & Dev Agents"
topics: [claude-skills, skill-anatomy, progressive-loading, capability-uplift, encoded-preference]
source_video: mpALXah_PBg
source_channel: "@nateherk"
source_views: "900K"
confidence: high
---
# Skill anatomy and progressive context loading

**What:** A skill is a folder containing a markdown file with a small YAML header (name + description, plus optional fields like allowed tools or a preferred model) and a body of step-by-step instructions; it may also reference supporting scripts or reference documents stored either inside the skill folder or elsewhere in the project. Skills load in three progressively deeper levels to save tokens: first only the name/description are scanned across all installed skills to decide relevance, then (if relevant) the full skill body is read, and only then (if needed) are its linked reference files or scripts pulled in. There are two conceptual kinds: capability-uplift skills that teach the model to do something it's mediocre at by default (better at a specific craft), and encoded-preference skills that just lock in a specific sequence/style the model already knows how to execute individually.

**Why it matters:** Understanding the three-level loading means a project can hold many skills without every request paying the token cost of reading all of them — only the short front matter is scanned by default. Distinguishing the two skill types also matters for maintenance: capability-uplift skills can go stale as underlying models improve (eventually the model may not need the uplift), while encoded-preference skills (which capture something specific to the user/business) tend to stay useful regardless of model upgrades.

**The moves:**
1. Store a skill as `skill-name/SKILL.md` with a YAML header containing at least a clear `name` and a specific `description` (the description is what gets matched against a request during the first loading level, so vague descriptions cause missed or false triggers).
2. Put step-by-step instructions in the body, and link out to any reference docs or scripts by path rather than inlining everything, so those only load when actually needed.
3. Install a skill at the project level (only usable in that folder) or at the global/user level (usable in every project) depending on whether it's project-specific or general-purpose.
4. Trigger a skill either explicitly via its slash command or implicitly by describing the task in natural language and letting the model match it against installed skill descriptions.
5. When a capability-uplift skill (e.g., one that improves a specific type of output) stops adding visible improvement after a model upgrade, consider retiring it; encoded-preference skills generally don't need this treatment.

**Watch out for:** A skill whose description is too broad can get invoked when it shouldn't (false triggers); one that's too narrow may never get invoked from natural language and only work via its explicit command. Skills obtained from a public marketplace/community source should be reviewed before use since they're just instructions the agent will follow.

**Original example to invent:** The source demoed an infographic-generation skill and a front-end design skill. Writers should invent a different skill (e.g., a meeting-notes-to-action-items skill) and design its front matter and file layout.
