---
id: kc-2009
type: concept
track: "Track 2 — AI Agents Core"
topics: [tools, actions, function-calling, openapi-schema, tool-creation]
source_video: [w0H1-b044KY, Hh2zqaf0Fvg]
source_channel: "@LiamOttley"
source_views: "3.6M / 1M"
confidence: high
---
# Anatomy of an agent tool (function + API + schema)

**What:** A tool (also called an action or function) is what lets an agent do something beyond writing text. It has three parts: (1) a function that performs work — either code (e.g., Python) or an LLM step — optionally taking inputs and returning outputs; (2) an API wrapper (a URL) that makes the function callable over the web; and (3) a schema, a machine-readable description telling the agent what the tool does, what inputs it needs, and what output to expect.

**Why it matters:** The schema is what lets the agent decide when to use a tool and how to call it correctly. Given a user message, the agent reads the schema, extracts the required input, calls the API, receives raw data (usually JSON), and then rewrites that raw data into a natural-language answer — intelligently weaving the result into its reply rather than dumping it.

**The moves (build a tool):**
1. Build or find the function (a custom-coded API, a no-code tool builder, or a ready-made third-party API).
2. Wrap it in an API endpoint that accepts inputs and returns data.
3. Write clear natural-language names and descriptions for the tool and each input — this text becomes the schema.
4. Generate the schema (many no-code platforms auto-generate an OpenAPI schema from your descriptions).
5. Register the tool with the agent and provide authentication; if a required input is missing, the agent asks the user for it.

**Watch out for:** Vague or inaccurate tool/input descriptions are the top cause of tools that never fire or fire wrongly — the descriptions ARE the instructions. Writing schemas by hand is error-prone; prefer a generator. Note the exact operation/tool name in the agent prompt to force correct usage.

**Original example to invent:** The source uses a text-capitalization tool and a stock-price lookup as demos. Writers should design a different tool with a different input/output to teach the function-plus-schema idea.
