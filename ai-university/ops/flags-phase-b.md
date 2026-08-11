# Phase B originality flags — back-fix queue (CCT audit, deterministic 8-gram sweep)

Six Phase B cards carry ≥8-word verbatim runs from their source transcripts
(leak type: raw wording runs — complementary to card_lint's cue/figure checks,
which these passed). Same fix as OPE-153: reword the offending sentences in
place, same facts, fresh wording; re-verify with an 8-gram check vs the card's
source transcript.

- kc-0949-agentic-workflows-as-graphs.md
- kc-1019-openai-api-compatibility.md
- kc-1107-agentic-rag.md
- kc-1119-ai-coding-spectrum.md
- kc-2203-three-forms-of-leverage.md
- kc-2212-systemizing-proof.md

Corpus state at sweep: 554 cards, 477 checked vs available sources, 6 flagged.
Suggestion: add an 8-gram-vs-source check into card_lint.py so this class is
caught at extraction time (deterministic, no LLM needed).
