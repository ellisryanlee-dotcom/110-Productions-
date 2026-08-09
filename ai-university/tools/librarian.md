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
- Phrasing, analogies, jokes, story beats: do NOT copy into cards. Every
  source-originated figure of speech lives ONLY in the card's `Original example to
  invent:` note, described abstractly — NEVER in the card body. The card body is
  writer-adoptable material; a downstream writer treats anything left in a body as
  fair to reuse, so the body must already be fingerprint-free.

  **What counts as a figure to quarantine** (the OPE-153 leak was a recognition
  miss, not a missing rule — a figure need not be a full sentence or a "like a…"
  simile):
  - **role-comparison framings** — "treat X like a new intern/employee", "it's your
    junior developer", any "X is basically a <familiar role>";
  - **coined / distinctive phrases** — short, memorable, source-specific wordings
    ("revisions on top of revisions") even when only 3–5 words;
  - **vivid one-liners, jokes, metaphors, story beats** — the credit-card-on-day-one
    image, the kid-on-a-bike, named demo scenarios (coffee/crocodile posts).
  If in doubt whether a phrase is a figure, quarantine it.

- **Make the invent-note genuinely diverge.** A correctly quarantined note can still
  steer the writer back to the source's figure if it merely paraphrases it. In the
  `Original example to invent:` note: (a) name the *abstract* idea in plain terms;
  (b) name what NOT to drift toward (the source's figure *and* its whole family —
  e.g. "don't reuse the new-hire framing" / "avoid any teaching-a-person analogy");
  (c) optionally point at a different domain to invent from. Paraphrasing the source
  figure in gentler words is a fail.

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
