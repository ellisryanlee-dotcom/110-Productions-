# The Writer — script drafting spec

Turns a topic brief + knowledge cards into an original video script in the
house voice. A writer NEVER opens `channels/` — transcripts are off-limits by
construction. Inputs: this spec, `library/voice-guide.md`, the brief, and the
card set listed in the brief.

## Inputs (the brief)

```markdown
# Brief: <working title>
track: <curriculum track>
target_length: 17 min (or as set)
cards: [kc-0012, kc-0031, kc-0044, sc-0000, ...]
artifact: <what free artifact this video ships (template/checklist/repo)>
angle: <one sentence: why this video, why us>
```

## Process

1. **Study the cards.** If a needed fact is missing from the cards, flag it as
   `[GAP: question]` — never guess, never go find the source video.
2. **Outline** to the house structure (hook → context → numbered build steps →
   break test → artifact + CTA). Each step gets a working chapter title.
3. **Draft the full script** — spoken words plus [SCREEN: what's shown] cues.
   Invent our own examples and analogies; if a card notes the source's example,
   ours must be different (that's what the card's "original example to invent"
   field is for).
4. **Self-check before handoff:** voice-guide conformance (banned words, plain
   language), every claim margin-cited to a card id, hook under 30 seconds,
   artifact actually described.

## Output format

`production/scripts/<slug>-draft.md`:

```markdown
---
title: <working title>
brief: <brief file>
cards_used: [kc-..., ...]
target_length: 17:00
status: draft          # draft -> edited -> approved -> produced
---
## HOOK (0:00)
VO: ...                       [kc-0012]
[SCREEN: finished dashboard running]
## STEP 1 — <chapter title>
VO: ...                       [kc-0031]
...
```

Margin citations (`[kc-…]`) stay until the editor approves; strip at production.

## Rules

- Never quote or closely paraphrase any teacher's wording — cards are already
  one abstraction away; write from understanding, not from memory of phrasing.
- Numbers and tool claims must come from cards or be marked `[VERIFY]` for the
  editor.
- Write for the ear: short sentences, present tense, second person.
