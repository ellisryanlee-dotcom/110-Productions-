---
id: kc-0116
type: how-to
track: "Track 4 — Claude Code & Dev Agents"
topics: [website-building, front-end-design-skill, screenshot-loop, claude-code, ui-design]
source_video: mpALXah_PBg
source_channel: "@nateherk"
source_views: "900K"
confidence: high
---
# Five compounding techniques for professional-feeling websites

**What:** A set of compounding techniques for getting Claude Code to produce professional-feeling websites instead of generic "AI-built" output: (1) a lean project claude.md that mandates using a front-end-design skill before any front-end code is written, (2) a capability-uplift front-end-design skill itself (installed once, globally, then reused across projects), (3) a "screenshot loop" where the agent takes its own screenshots mid-build, compares them against the target/reference, and self-corrects before showing a first version, (4) cloning the visual structure of an inspiration site by feeding the agent a full-page screenshot plus its copied stylesheet as reference material (not a literal copy — used as a structural starting point, then re-skinned with the user's own branding/copy), and (5) sourcing individual UI components (a background effect, a button style) from a component library site and asking the agent to work just that one element into an existing page.

**Why it matters:** Each technique alone helps somewhat; combined, they close most of the gap between a default AI-generated page and one that reads as deliberately designed, without requiring hand-written CSS.

**The moves:**
1. Put "always use the front-end-design skill before writing front-end code" as an explicit, no-exceptions rule in the project's claude.md.
2. Let the build run through its natural screenshot-loop (it will capture and compare its own output automatically once the skill/claude.md establishes that pattern); turn this off explicitly for animated/dynamic elements, since a static screenshot can't judge motion and the agent can get stuck endlessly "fixing" something that's actually fine.
3. To clone a reference site's feel: capture a full-page screenshot of it and copy its computed style information, hand both to the agent along with an instruction to reproduce the structure, then in a second pass swap in the user's own brand assets, colors, and copy.
4. To borrow one specific effect: copy the relevant snippet from a component-library site and ask the agent to integrate just that element into the existing page, rather than rebuilding the whole page around it.
5. Provide brand assets (logo, guidelines) in a dedicated folder and reference them by name/tag so generated pages/graphics stay on-brand automatically.
6. Push to GitHub only after confirming the local version looks right — treat local as staging and the deployed URL as production, never pushing straight to production.

**Watch out for:** A cloned site's dynamic visual elements (backgrounds, illustrations, photography) generally can't be reproduced exactly and will come back different — expect that and plan to accept or iterate on it rather than treating it as a bug. Blindly trusting the screenshot loop on heavily animated sections wastes cycles, since a still frame doesn't capture motion quality.

**Original example to invent:** The source cloned a specific SaaS marketing site and re-skinned it with its own brand, and separately built a product page inspired by a premium consumer-electronics aesthetic. Writers should invent a different reference/target pairing (e.g., cloning a portfolio site's layout for a different kind of business) to demonstrate the same five techniques.
