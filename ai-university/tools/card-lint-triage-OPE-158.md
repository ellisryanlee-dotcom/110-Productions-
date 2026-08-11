# Card-lint triage — OPE-158 (40 flagged cards)

Parent: OPE-157 (enforce librarian analogy/phrase-scrub). Source rule:
`tools/librarian.md` — role-comparison framings, coined/distinctive phrases, and
vivid metaphors/jokes/story-beats are **source figures** and must live only in a
card's `Original example to invent:` note (described abstractly). Generic English
idioms and literal usage carry no source fingerprint and stay in the body.

`tools/card_lint.py` cues are deliberately broad (a false positive costs a glance;
a missed figure costs an originality strike), so this triage separates the two.

## Outcome
- **18 genuine figures → RELOCATED**: figure removed from body, body reworded to
  state the idea plainly, and the invent-note augmented to name the figure (and its
  family) to avoid. `card_lint.py` now clean on all 18.
- **24 confirmed idioms → ALLOWLISTED** (`tools/card_lint_allow.json`): left in the
  body (they're fine), suppressed from the pre-gate so the editor doesn't
  re-adjudicate them. Snippet-keyed, so any later edit near the spot re-flags.
- Default `card_lint.py` run: **0 flagged**. `--no-allow`: 24 (the reviewed idioms).

## RELOCATED — genuine source figures (18)

| Card | Figure removed from body | Family / why it's a fingerprint |
|---|---|---|
| kc-0131 | "treat it like a capable **new contractor** who's never seen your project" | new-hire framing |
| kc-0145 | "move a project (**like your executive assistant**) across devices" | role analogy (also confusing) |
| kc-0146 | "treat the agent **like a junior dev**" | new-hire framing |
| kc-0202 | "behaves **like a briefed teammate**" | teammate personification |
| kc-0214 | "behave **like a briefed teammate**" | teammate personification |
| kc-0217 | "if it answers **like a stranger**" | stranger/teammate personification |
| kc-0402 | title: "treat the agent **like a junior developer**" | new-hire framing (was in H1) |
| kc-0421 | "makes the agent **work like a senior engineer** … sprinting to code" | role framing + vivid one-liner |
| kc-0500 | "produces a system that **behaves like a stranger**" | stranger personification |
| kc-0501 | "sounds **like a stranger** … **teammate/co-founder** … feels **like a colleague**" | stranger/teammate personification |
| kc-0524 | title: "**Think like a process engineer**" | role framing (was in H1) |
| kc-0634 | "**act like a board of directors, not a hands-on operator**" | role-comparison model |
| kc-0733 | "MCP **is like an app store for agents**" | vivid metaphor (invent-note already flagged it) |
| kc-0801 | "treating the tool **like a developer you chat with**" | role framing |
| kc-2006 | "It **functions like a digital worker**" | vivid metaphor (invent-note already flagged it) |
| kc-0127 | "acting **like a table of contents**" | near-figure → reworded to "functioning as an index"; new-hire figure already in note |
| kc-0420 | "conversationally, **as if briefing a coworker**" | teaching-a-person analogy |
| kc-0515 | "Coach it **like** … (steering a beginner through a new skill)" | teaching-a-person analogy |

The repeated new-hire / stranger-vs-teammate framing across kc-0131/0146/0402/0202/
0214/0217/0500/0501 is itself the fingerprint: one source's onboarding-a-person
analogy leaking into eight cards. All rewrites state the mechanism ("assume zero
prior knowledge / no real familiarity") without personifying the agent.

## ALLOWLISTED — clear idioms / literal usage (24)

Generic similes (no source-specific image): kc-0131 "like a chat", kc-0326 "looks
like a missing key", kc-0330 "as if it lost the thread", kc-0342 "look like a
professional service", kc-0415 "feel like an obvious return", kc-0607 "feels like a
bargain", kc-0624 "look like an agent failure", kc-0630 "can't imagine going back",
kc-0704 "feel like a threat".

Parenthetical examples / instances (not metaphors): kc-0432 "(like a fixed
recipient)", kc-0457 "(like a render service)", kc-0500 "(like a coding agent)",
kc-0511 "like an incoming message", kc-0954 "like a planning/scope document",
kc-0956 "like a knowledge graph or web search".

Near-literal / technical comparisons: kc-0301 "as if it were a single tool",
kc-0439 "like a traditional platform", kc-0538 "clicking/typing like a human" (it
literally operates the GUI as a human would), kc-1049 "chunk like a document".

Literal "on top of" (layering, not the coined "revisions on top of revisions"):
kc-0523 "prompt on top of thin context", kc-0543 "on top of your messages",
kc-1003 "on top of the old chunks", kc-1202 "on top of the old ones", kc-1219 "on
top of other RAG strategies".

## Re-running / extending
- `python3 tools/card_lint.py` → should stay **0 flagged**.
- A new flag = a genuinely new figure. **Relocate it into the card's invent-note;
  do not add it to the allowlist.** The allowlist is only for confirmed idioms.
- To re-audit the idiom set: `python3 tools/card_lint.py --no-allow`.
