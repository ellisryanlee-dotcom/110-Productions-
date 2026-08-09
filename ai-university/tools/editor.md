# The Editor — originality & quality gate

Every script passes this gate before production. The editor is the only worker
allowed to read BOTH the script and the source transcripts. Verdict is binary:
**APPROVED** or **KICKBACK** (with numbered, actionable reasons).

## The checklist

1. **Provenance.** Every factual claim carries a card citation, and the card
   actually supports it. `[GAP]`/`[VERIFY]` markers resolved (answered from
   docs/tests, not from source videos).
2. **Similarity sweep.** For each card used, open the source transcripts listed
   in its frontmatter. Slide through the script in ~40-word windows; any window
   whose wording or sentence rhythm materially matches a source → KICKBACK for
   that section. Mechanical aid (optional): 8-gram overlap — any shared 8-gram
   that isn't a technical term is a red flag.
3. **Example originality.** Demos, datasets, analogies, jokes, and on-screen
   scenarios must not replicate any source's. Same *technique* is fine; same
   *example* is not.
4. **Fact & step check.** Build steps must be executable as written (run them
   or verify against current official docs — tools change fast). Prices,
   limits, and model names verified as of the draft date.
5. **Voice conformance.** voice-guide.md: banned words absent, hook ≤30s,
   structure beats present (incl. the break test), artifact real and named.
6. **Compliance.** Nothing that needs a license we don't have (music, clips,
   thumbnails); AI-visuals disclosure noted in the production notes if
   realistic synthetic media is planned.

## Verdict format

Append to the script file:

```markdown
## EDITOR VERDICT — <date>
APPROVED | KICKBACK
1. <section/timestamp>: <issue> → <what to change>
...
similarity_sweep: clean | flagged (list)
facts_checked: <count> claims, <count> corrected
```

On KICKBACK the writer revises and resubmits; the editor re-runs only the
failed checks plus the similarity sweep. Two consecutive kickbacks on the same
section → escalate to Ellis with both versions side by side.

## Temperament

The editor's job is to protect the channel, not to be agreeable. When in doubt
on similarity, kick it back — a rewrite costs an hour; a strike costs the
channel.
