---
id: kc-0307
type: claim
track: "Elective — Model & Tool Literacy"
topics: [model-selection, cost, content-generation, agent-design]
source_video: 9FuNtfsnRNo
source_channel: "@nateherk"
source_views: "1.1M"
confidence: medium
---
# Match the model to each agent's job, not one model for all

**What:** In a multi-agent system you can assign a different LLM to each agent
based on what that agent does. The builder ran most routing and utility agents on
a general fast model but used a different model for the content-writing agent
because it produced better-structured, more human-readable long-form output.

**Why it matters:** Models have different strengths and prices. Routing needs
speed and cheap tool-calling; long-form writing benefits from a model that
formats and structures prose well. Mixing lets you optimize quality and cost per
role instead of overpaying (or underperforming) everywhere.

**The moves:**
1. Categorize each agent: routing/utility vs. generative/long-form vs. reasoning-
   heavy.
2. Assign a cheap, fast model to high-frequency utility/routing agents.
3. Assign a stronger writing-oriented model to agents whose output the user
   actually reads.
4. Re-evaluate as models change; the assignment is a knob, not a permanent choice.

**Watch out for:** This is an asserted preference, not a benchmarked result — treat
model choice as something to test against your own quality bar and budget.

**Original example to invent:** Source paired a general model for routing with a
writing-strong model for blog drafting. Writers should choose their own role→model
mapping and justify it by task, not brand.
