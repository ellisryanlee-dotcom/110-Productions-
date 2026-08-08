# The Librarian — extraction spec

The librarian turns raw transcripts (`channels/<name>/transcripts/*.md`) into
**cards** in the library. Cards are the only thing script-writers ever see —
writers never read transcripts. That structural wall is what guarantees original
scripts: writers work from synthesized knowledge, not from anyone's wording.

Run one librarian pass per transcript. Each pass emits knowledge cards and one
style card.

## Knowledge cards → `library/knowledge/kc-XXXX-<slug>.md`

One card per distinct teachable unit (a video usually yields 3–10). Card types:
`concept` | `framework` | `how-to` | `claim` | `example` | `tool` | `pitfall`.

```markdown
---
id: kc-0042
type: how-to
track: "Track 3 — RAG & Knowledge Bases"
topics: [rag, supabase, embeddings]
source_video: JjBofKJnYIU
source_channel: "@nateherk"
source_views: "165K"
confidence: high        # high = demonstrated on screen; medium = asserted
---
# Setting up Postgres/Supabase as a RAG store

**What:** one-paragraph plain-language statement of the thing being taught.

**Why it matters:** the problem it solves / when you'd reach for it.

**The moves:** numbered steps or bullet points, *in your own words*, at the
level of ideas (services, settings, order of operations) — never quoted phrasing.

**Watch out for:** pitfalls, limits, costs mentioned.

**Original example to invent:** note for writers — the source's demo used X;
writers must build a different example.
```

Rules:
- Facts, steps, numbers, tool names: extract freely (knowledge is not ownable).
- Phrasing, analogies, jokes, story beats: do NOT copy into cards. If an analogy
  is the load-bearing idea, describe it abstractly ("compares X to Y") so writers
  invent their own.
- Merge duplicates: if a card's topic already exists, update/strengthen that card
  and append the extra source to its frontmatter instead of minting a new one.
  Cross-source cards (2+ channels agreeing) get `confidence: high`.

## Style cards → `library/style/sc-XXXX-<videoid>.md`

One per analyzed video. Structure & mechanics only — never wording.

```markdown
---
id: sc-0017
source_video: JjBofKJnYIU
views: "165K"
length: "10:25"
---
# Hook (0:00–0:30)
Pattern (e.g., cold result demo → promise → agenda). What's on screen. No quotes.
# Beat map
Rough timeline of sections with durations (from chapters + transcript).
# Retention devices
Open loops, mid-video artifact drops, pace changes, recaps.
# CTA placement
Where and how (structurally) asks appear.
```

## The originality gate (the Editor)

Before any script leaves the pipeline:
1. **Provenance check** — every claim in the script traces to a card, not to a
   transcript. Scripts cite card ids in margins during drafting; strip at publish.
2. **Similarity check** — compare draft against every source transcript listed in
   the cards it used (embedding similarity on sliding windows and/or 8-gram
   overlap). Any window materially close to a source → rewrite that section.
3. **Example check** — demos/examples/analogies must not replicate a source's.
4. **Fact check** — steps must actually work; tool claims verified against docs.

## Worker roles (who runs what)

- **Ripper** (script, `tools/ripper.py`) — catalog + transcripts + enrich.
- **Librarian** (agent, this spec) — transcripts → cards. Batchable: one agent
  per 10–15 transcripts, top-viewed first, per track.
- **Writer** (agent) — brief + cards + house style guide → original script.
  Never opens `channels/`.
- **Editor** (agent) — the gate above; kicks back or approves.
