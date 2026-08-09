---
title: "Crash Test Agents — Brand Bible (Episode 1)"
stage: branding
episode: 1
status: locked
source_screenplay: production/screenplay/crash-test-001-screenplay.md
source_script: production/scripts/crash-test-001-draft.md
brief: production/briefs/brief-001.md
channel: AI University
series: Crash Test Agents
---

# Crash Test Agents — Brand Bible

**This bible is the acceptance gate for KEYFRAMES.** Every `[BRAND *]` placeholder
in the screenplay resolves to a concrete, Tier-0-buildable value below (HTML/CSS/SVG,
zero paid assets, zero paid fonts). After this file, the reusable components can be
built with **zero open brand questions**. See the [Token Resolution Table](#token-resolution-table).

---

## 1. Brand summary + positioning

**Crash Test Agents** is the flagship series under the **AI University** channel. It is
made for people who *build* AI agents — indie builders, automation engineers, and small
teams shipping agents into real workflows — not for a general "AI news" audience. The
promise, stated on-screen every episode: **"we break AI agents so yours don't."** Where
every other channel posts the polished demo, Crash Test Agents mounts a working agent on
the rig, breaks it on camera in graded rounds (bad inputs → dead APIs → lying model →
runaway loop → leaky secrets), then fixes each break and banks the fix as a rule. The
brand's credibility comes from *showing the failure* — honesty is the product — so the
visual system is built around a single legible mechanic: **RED means it broke, GREEN means
it's fixed.** The look is an **engineering red-alert instrument panel**: dark UI base,
technical-diagram precision, bold sans headlines, high thumbnail contrast for CTR.

---

## 2. Color palette — "Engineering Red-Alert"

Token naming: `--ct-*` (Crash Test). All values are final hex. The palette is a **dark
instrument-panel base** with three *semantic state* colors that carry the show mechanic
(BREAK / FIXED / VERIFY) plus one **electric-cyan accent** for "active / needs-AI /
interactive" so it never collides with the red/green state language.

### 2.1 Full token set

| Token | Hex | Role |
|---|---|---|
| `--ct-bg` | `#0B0E14` | Base canvas — near-black cool navy. Every frame's ground. |
| `--ct-surface` | `#151A23` | Panels / cards / dashboard chrome (1 step up from bg). |
| `--ct-surface-raised` | `#1C2330` | Elevated cards, modals, approval cards, meters. |
| `--ct-line` | `#232A36` | Borders, gridlines, diagram wires, instrument-panel rules. |
| `--ct-text` | `#E8EDF4` | Primary text (cool near-white). |
| `--ct-text-muted` | `#94A3B8` | Secondary text, captions, disabled/"rule"-tagged nodes. |
| `--ct-break` | `#FF3B30` | **BREAK / failure red** (primary). Errors, 4xx/5xx, "invented" stamps, break badges. |
| `--ct-break-deep` | `#B21F16` | Red fills, pressed states, banner backgrounds, danger panels. |
| `--ct-break-glow` | `#FF6A5F` | Red glow / hover / thumbnail pop / glitch highlight. |
| `--ct-fixed` | `#2BD576` | **FIXED / passing green** (primary). Green ✓, 200 OK, "fixed" badges. |
| `--ct-fixed-deep` | `#12924B` | Green fills, pressed, success-panel backgrounds. |
| `--ct-fixed-glow` | `#5CF29B` | Green glow / hover / triumphant montage pop. |
| `--ct-warn` | `#FFB020` | **⚠️VERIFY amber** — caveats, "expired" key status, "illustrative figures" strip, plaintext-key warning outline. |
| `--ct-warn-deep` | `#B87400` | Amber on light chips / amber fills. |
| `--ct-accent` | `#38BDF8` | **Accent — "needs AI" glow / active / interactive.** The single "this chunk needs a model" highlight, active node, links. |
| `--ct-accent-glow` | `#7DD3FC` | Accent glow / focus ring. |

### 2.2 WCAG contrast (text on `--ct-bg` `#0B0E14`)

Ratios below are computed against the base canvas; all pass **AA for normal text (≥4.5:1)**,
most pass **AAA (≥7:1)**.

| Foreground | Hex | Contrast vs `--ct-bg` | Verdict |
|---|---|---|---|
| Primary text | `#E8EDF4` | **16.4:1** | AAA |
| Muted text | `#94A3B8` | **7.5:1** | AAA |
| FIXED green | `#2BD576` | **10.0:1** | AAA |
| VERIFY amber | `#FFB020` | **10.6:1** | AAA |
| Accent cyan | `#38BDF8` | **9.0:1** | AAA |
| BREAK red | `#FF3B30` | **5.4:1** | AA (use `--ct-break-glow` for small red text to reach AAA) |

**Rules:** (1) Never set red text below 16px on `--ct-bg` without switching to
`--ct-break-glow`. (2) On red/green *fill* backgrounds (`--ct-break-deep` / `--ct-fixed-deep`),
use `--ct-text` for labels — both exceed 4.5:1. (3) Amber is reserved *only* for VERIFY /
caveat / expired semantics — never decorative.

### 2.3 Semantic state mapping (the show mechanic)

| On-screen meaning (screenplay language) | Token | Where it appears |
|---|---|---|
| broke / failure / error / 4xx-5xx / "invented" / duplicate-send | `--ct-break` (+`-deep`/`-glow`) | S002, S019–S021, S024, S031, S034, S037, S040–S042 |
| fixed / passing / success / 200 / green ✓ / clean rerun | `--ct-fixed` (+`-deep`/`-glow`) | S001, S015, S022, S028, S048–S049 |
| ⚠️VERIFY / caveat / expired key / illustrative figures | `--ct-warn` | S006, S023, S026, S037–S038, S040, S052 |
| "needs AI" / active node / interactive / brand accent | `--ct-accent` | S011 ("needs AI" glow), S016, S046 classifier |

---

## 3. Typography

All three families are **free, SIL Open Font License (OFL 1.1)**, on Google Fonts — nothing
gates on a paid font. Ship them self-hosted (woff2) so renders are deterministic and offline.

| Role | Family | Weights | License | Used for |
|---|---|---|---|---|
| **Display** | **Archivo** (use *Expanded* width for hero) | 800 / 900 (Black), 700 (Bold) | OFL 1.1 | Wordmark, title cards, round slates, thumbnail headline, big overlays ("Most of this does not need AI.") |
| **Mono** | **JetBrains Mono** | 400 / 500 / 700 | OFL 1.1 | Code / system-prompt builder, terminal, HTTP codes, keys (`rd_live_…`), `.env`, status pills, meters, state-badge labels, disclosure line |
| **Body/Caption** | **Inter** | 400 / 500 / 600 | OFL 1.1 | Captions, lower-third sublabels, CRM/definition callouts, checklist rows, agenda lists |

**Type rules:**
- **Display = Archivo Expanded Black**, uppercase, tracking `+2%` to `+3%` for titles/wordmark;
  tight leading (`0.92`) when stacked. This is the "instrument stencil" voice.
- **Code/labels = JetBrains Mono.** Anything that is data, a code, a key, a status, or a
  number-on-a-meter is mono — it reads as "machine truth" and reinforces technical credibility.
- **Body = Inter 400/500**, sentence case, `1.4` leading. Never use Archivo for paragraph text.
- Numerals in meters/counters/HTTP codes use **JetBrains Mono tabular** (fixed-width) so
  counters don't jitter as they climb.

---

## 4. Logo / Wordmark spec — `[BRAND logo]`

Buildable in SVG; described here precisely enough to author directly (no generation needed).

### 4.1 Primary wordmark — "CRASH TEST AGENTS"

- **Type:** Archivo Expanded **Black (900)**, **uppercase**, tracking `+30` (0.03em),
  fill `--ct-text` `#E8EDF4`.
- **Lockup:** two lines, left-aligned, stacked tight (leading `0.92`):
  ```
  CRASH TEST
  AGENTS
  ```
- **The break→fix spine:** a `6px`-wide vertical rule immediately left of the wordmark,
  its height = the full two-line cap block. Top 50% = `--ct-break` `#FF3B30`, bottom 50% =
  `--ct-fixed` `#2BD576`, hard split at the midpoint (no gradient). This *is* the brand
  mechanic in one mark: break on top, fixed on bottom. Gap between spine and text = one
  cap-stem width (~`10px` at 96px cap).
- **Optional state accent (motion contexts only):** the word **CRASH** may carry a
  `--ct-break-glow` outer glow on a break beat, resolving to a `--ct-fixed-glow` glow on a
  fix beat. Static print/thumbnail uses the plain white lockup + spine.

### 4.2 AI University channel-umbrella lockup

- Above the wordmark (or in end-card corner), set **`AI UNIVERSITY`** in **JetBrains Mono
  500**, uppercase, tracking `+140` (0.14em, wide instrument-label spacing), color
  `--ct-text-muted` `#94A3B8`, ~`0.42×` the cap-height of "CRASH".
- A thin `1px` `--ct-line` divider sits between the umbrella label and the wordmark.
- Reads: **AI UNIVERSITY** (channel) ▸ **CRASH TEST AGENTS** (series). On the CTA/end cards
  use the vertical stack; in dense corners use inline `AI UNIVERSITY · CRASH TEST AGENTS`.

### 4.3 Safe area, sizing, monochrome fallback

- **Clear space:** minimum margin on all four sides = the cap-height of the "C" in "CRASH".
- **Minimum size:** wordmark legible to `120px` wide (spine → `4px`); below that use the
  spine + "CTA" monogram (a `--ct-break`/`--ct-fixed` split square with "CTA" stacked).
- **Monochrome fallback:** all-white (`#E8EDF4`) on dark, or all-black (`#0B0E14`) on light;
  the two-color spine collapses to a single solid rule in the ink color. Never place the
  colored wordmark on a mid-tone or busy background without the dark `--ct-surface` plate.

---

## 5. Thumbnail template — 1280×720 (Episode 1)

**Hook for THIS episode:** *"I tried to break this AI agent 25 ways."* Face-free (format is
faceless — **no human face, ever**; the "character" is the dashboard/rig).

### 5.1 Canvas + grid

- **1280×720**, `--ct-bg` base with a faint `--ct-line` instrument grid (2% opacity).
- **Safe margins `64px`** all sides. **Keep the bottom-right `240×80px` clear** — YouTube's
  duration stamp lands there; no critical text/logo in that corner.
- 12-column grid. **Diagonal break→fix split** is the signature layout: a ~14° diagonal seam
  from lower-left to upper-right divides the frame.
  - **Left/lower field = BREAK:** a fragment of the Sift dashboard in `failing` state —
    red API-error banner, spinning duplicate-send counter, glitch/RGB-split, `--ct-break`
    glow bleeding across the seam.
  - **Right/upper field = FIXED:** the same dashboard `clean`, green ✓ rows, `--ct-fixed`.
  - The seam itself is a `4px` `--ct-break`→`--ct-fixed` split line (the spine, at 14°).

### 5.2 Headline treatment

- **Giant "25"** in Archivo Expanded Black `~360px`, `--ct-break-glow`, sitting on the break
  side — the number is the hook. A small `--ct-fixed` "→ 25 FIXES" tag can sit under it.
- **Headline:** `BREAK IT 25 WAYS` (or `25 WAYS TO KILL AN AGENT`), Archivo Expanded Black,
  uppercase, `--ct-text` with a `--ct-break` keyword. **Max 5 words**, max two lines.
- **Wordmark spine** in the top-left corner (small), `AI UNIVERSITY` micro-label above it.
- One state badge overlaid on the seam: `[ BROKEN ]` red pill flipping to `[ FIXED ]` green
  (static thumbnail shows both stacked).

### 5.3 High-CTR rules

- One idea, one number, ≤5 headline words. Contrast is the CTR engine — red-alert vs green-clean.
- No face, no stock photography, no source-channel footage. Original UI only.
- Text must be legible at `168px`-wide mobile: nothing critical below `48px` type at full size.
- Reuse the same diagonal-split template for Episodes 2+ (swap number, keyword, dashboard state).

---

## 6. Motion / lower-thirds / state-badge system

All deterministic Tier-0 (CSS/GSAP keyframes) — matches the screenplay's Tier-0-first rule.

### 6.1 State badges (the core system)

| Badge | Build | Motion |
|---|---|---|
| **BREAK** | Red pill `--ct-break-deep` fill, `--ct-break` border, JetBrains Mono 700 uppercase `BREAK ##`, red glow. | Hard-cut in on a **2-frame RGB/glitch split** + 3px shake, then settle. Aggressive. |
| **FIXED** | Green pill `--ct-fixed-deep` fill, `--ct-fixed` border, mono `✓ FIXED`, green glow. | Smooth `scale 0.9→1` ease-out + soft glow bloom. Calm, earned. |
| **⚠️VERIFY** | Amber **outline** pill (`--ct-warn` border, transparent fill), mono `⚠ VERIFY`. | Slow opacity pulse `1↔0.6` at 1.2s; **persists** the entire time the caveat/illustrative figure is on screen. |
| **needs-AI** | Accent-cyan glow ring `--ct-accent` around the one model node. | Soft pulsing glow `--ct-accent-glow`; signals "judgment lives here." |

**400→200 flip (S022) / counter reset (S048):** red number cross-flips to green on a Y-axis
card flip; the reset counter ticks down red then lands green on "1".

### 6.2 Lower-thirds

- Anchored **bottom-left**, inside the `64px` safe margin, on a `--ct-surface` plate with a
  **`6px` left accent bar** whose color = the current state (`--ct-break` / `--ct-fixed` /
  `--ct-warn` / `--ct-accent`).
- **Line 1:** Archivo Bold, `--ct-text` (the label, e.g. "ROLODASH LOOKUP").
- **Line 2:** JetBrains Mono 500, `--ct-text-muted` (the data/sublabel, e.g. "400 Bad Request").
- Enter: slide `+16px`→0 + fade, 0.25s ease-out. Exit: fade only.

### 6.3 Transition grammar

- **Breaks** get hard/aggressive transitions: glitch cut, RGB split, whip (S002→S003, S034).
- **Fixes** get smooth transitions: wipe, cross-dissolve, node-scrub (S022, S038, S048).
- Round-to-round: **slate wipe** (see §7). Keeps the "break is violent, fix is composed"
  emotional grammar consistent.

---

## 7. Title card, round slates + end card

### 7.1 Title card (S003)

- Full-frame `--ct-bg` over a **blurred, desaturated freeze of the failing dashboard** (S002).
- Wordmark **CRASH TEST AGENTS** (two-line lockup + spine) scales in with a snap.
- Tagline beneath in Inter 500, `--ct-text-muted`: **"we break AI agents so yours don't."**
- Then the promise line, JetBrains Mono, `--ct-break`→`--ct-fixed`: **"25 ways to kill an
  agent → 25 fixes."** (the `→` sits on the color pivot).

### 7.2 Round slates (S012, S023, S030, S034, S039, S047 + concept slates)

- Reusable template: `--ct-bg`, faint instrument grid, big Archivo Expanded Black round label
  (`ROUND 1`…`ROUND 5`) in `--ct-text`, a mono kicker line beneath in `--ct-text-muted`.
- **Round 5** ("secrets & permissions") uses the heavier/darker variant: `--ct-break-deep`
  wash + key/shield glyph (screenplay calls for higher-stakes tone).
- Concept slates reuse the template: `failure = data` (S032, red glyph → cyan datapoint),
  `guardrails` (S035), `human-in-the-loop` (S044), `clean rerun` (S047).

### 7.3 End card (S052) + synthetic-media disclosure

- Layout respects **YouTube end-screen safe zones**: keep the outer `~505px`-tall central band
  clear of critical text where end-screen element templates land; place the next-video
  thumbnail placeholder and checklist link inside YouTube's element grid on the right/lower area.
- Three takeaway lines (Inter/Archivo), wordmark, `Checklist ↓`, `Next crash test →`.
- **Required synthetic-media disclosure (resolves screenplay S052 ⚠️VERIFY):**
  - **On-screen line:** `Contains realistic AI-generated media.` — JetBrains Mono 500,
    `--ct-warn` `#FFB020` (or `--ct-text-muted` if amber fights the layout), **bottom-center**,
    inside the `64px` safe margin, held **≥4s** and legible.
  - **Placement:** present on **both** the CTA card (S051) and the end card (S052).
  - **Platform obligation (the ⚠️VERIFY, do not drop):** the on-screen line does **not**
    replace YouTube's upload-time **"Altered content"** disclosure toggle — set that flag on
    upload per current YouTube synthetic/altered-media policy. This on-screen treatment + the
    upload toggle together satisfy the disclosure; confirm placement against live policy at
    publish (out of scope for this repo, but flagged so KEYFRAMES bakes the line into the
    slate template now).

---

## Token Resolution Table

**Acceptance gate.** Every `[BRAND *]` placeholder used anywhere in
`crash-test-001-screenplay.md` → its resolved value. Three distinct placeholder names appear
across 69 occurrences (palette ×55, accent ×7, logo ×7); all resolve. No other `[BRAND *]`
token exists in the file. **Open tokens after this bible: NONE.**

### A. Screenplay placeholder → resolution

| Screenplay token | Occurrences | Resolves to |
|---|---|---|
| `[BRAND palette]` | 55 | The full `--ct-*` palette in §2.1 — base `--ct-bg` `#0B0E14` + `--ct-surface` `#151A23` + `--ct-text` `#E8EDF4` / `--ct-text-muted` `#94A3B8`, with semantic states `--ct-break` `#FF3B30`, `--ct-fixed` `#2BD576`, `--ct-warn` `#FFB020` applied per §2.3. On-screen "red" = `--ct-break`; "green ✓" = `--ct-fixed`; "amber/expired/illustrative" = `--ct-warn`. |
| `[BRAND accent]` | 7 (fmt spec, S003, S011×2, S016, and body-copy refs) | `--ct-accent` `#38BDF8` (electric cyan, "needs-AI"/active glow) + `--ct-accent-glow` `#7DD3FC`. Note: where screenplay says "one chunk glowing 'needs AI'" the glow = `--ct-accent`. |
| `[BRAND logo]` | 7 (fmt spec, S051×2, S052×2, and notes) | The CRASH TEST AGENTS wordmark lockup + AI University umbrella per §4 (spine = `--ct-break`/`--ct-fixed` split). SVG-buildable. |

### B. Implicit brand tokens the screenplay references by description → resolution

| Screenplay phrase (implicit token) | Resolves to |
|---|---|
| "red" / "flashing red" / "red error banner" / "invented" stamp / 400 | `--ct-break` `#FF3B30` (fills `--ct-break-deep` `#B21F16`) |
| "green" / "green ✓" / "200" / "passes green" | `--ct-fixed` `#2BD576` (fills `--ct-fixed-deep` `#12924B`) |
| "amber" / "expired" / "warning amber" / "illustrative" strip | `--ct-warn` `#FFB020` |
| "dark UI" / "dark IDE aesthetic" / dashboard chrome | `--ct-bg` `#0B0E14` + `--ct-surface` `#151A23` |
| brand typography (title cards / headlines / overlays) | Archivo Expanded Black (§3) |
| code / terminal / status codes / keys / `.env` / meters | JetBrains Mono (§3) |
| captions / callouts / checklist / agenda | Inter (§3) |
| lower-thirds / labels | §6.2 lower-third spec |
| title card / round slates / concept slates | §7.1–7.2 |
| end/CTA card + synthetic-media disclosure line | §7.3 (`Contains realistic AI-generated media.`) |

### C. Full palette quick-reference (token → hex)

`--ct-bg` `#0B0E14` · `--ct-surface` `#151A23` · `--ct-surface-raised` `#1C2330` ·
`--ct-line` `#232A36` · `--ct-text` `#E8EDF4` · `--ct-text-muted` `#94A3B8` ·
`--ct-break` `#FF3B30` · `--ct-break-deep` `#B21F16` · `--ct-break-glow` `#FF6A5F` ·
`--ct-fixed` `#2BD576` · `--ct-fixed-deep` `#12924B` · `--ct-fixed-glow` `#5CF29B` ·
`--ct-warn` `#FFB020` · `--ct-warn-deep` `#B87400` · `--ct-accent` `#38BDF8` ·
`--ct-accent-glow` `#7DD3FC`

---

## 8. Narration voice (note for the VOICE stage — no audio generated here)

Per locked decision #3: **neutral synthetic AI voice, clear mid-tone US male.** Even,
confident, unhurried — a competent engineer walking you through a teardown, not a hype
narrator. Consistent voice across all episodes (series signature). This bible records the
spec only; audio is produced downstream at the VOICE stage.

---

## 9. Handoff to KEYFRAMES

- Author `tokens.css` from §2.1 (the `--ct-*` custom properties) as the single source of
  truth; every reusable component (dashboard, meter, prompt builder, node canvas, slates,
  checklist) imports it.
- Load the three OFL fonts self-hosted (woff2): Archivo (Expanded 800/900, 700), JetBrains
  Mono (400/500/700), Inter (400/500/600).
- Build the wordmark once as SVG (§4); build the state-badge + lower-third + slate templates
  once (§6–§7) and reuse.
- Bake the synthetic-media disclosure line into the CTA/end-card template now (§7.3).
- **Zero open brand questions remain.**
