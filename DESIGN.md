---
name: Estudio Alcántara
description: Editorial law-firm portfolio — authoritative warmth through Swiss institutional restraint
colors:
  institutional-slate: "oklch(0.44 0.09 252)"
  slate-press: "oklch(0.38 0.1 252)"
  pure-paper: "oklch(1 0 0)"
  cool-mist-surface: "oklch(0.965 0.008 250)"
  brief-ink: "oklch(0.2 0.025 250)"
  registry-muted: "oklch(0.46 0.022 250)"
  rule-line: "oklch(0.88 0.012 250)"
  on-primary: "oklch(0.99 0.005 250)"
typography:
  display:
    fontFamily: "Spectral, Iowan Old Style, Palatino Linotype, serif"
    fontSize: "clamp(2.5rem, 5vw + 1rem, 4.5rem)"
    fontWeight: 400
    lineHeight: 1.12
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Spectral, Iowan Old Style, Palatino Linotype, serif"
    fontSize: "clamp(1.75rem, 2.5vw + 0.5rem, 2.5rem)"
    fontWeight: 500
    lineHeight: 1.12
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Spectral, Iowan Old Style, Palatino Linotype, serif"
    fontSize: "clamp(1.125rem, 1vw + 0.75rem, 1.375rem)"
    fontWeight: 500
    lineHeight: 1.12
    letterSpacing: "-0.03em"
  body:
    fontFamily: "Source Sans 3, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: "0.04em"
rounded:
  sm: "4px"
  md: "8px"
  lg: "12px"
spacing:
  xs: "0.5rem"
  sm: "0.75rem"
  md: "1rem"
  lg: "1.5rem"
  xl: "2.5rem"
  2xl: "clamp(3rem, 6vw, 5rem)"
  3xl: "clamp(4.5rem, 10vw, 7.5rem)"
components:
  button-primary:
    backgroundColor: "{colors.institutional-slate}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body}"
    rounded: "{rounded.sm}"
    padding: "0.625rem 1.375rem"
    height: "2.75rem"
  button-primary-hover:
    backgroundColor: "{colors.slate-press}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.sm}"
    padding: "0.625rem 1.375rem"
    height: "2.75rem"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.brief-ink}"
    rounded: "{rounded.sm}"
    padding: "0.625rem 1.375rem"
    height: "2.75rem"
  input-field:
    backgroundColor: "{colors.pure-paper}"
    textColor: "{colors.brief-ink}"
    typography: "{typography.body}"
    rounded: "{rounded.sm}"
    padding: "0.75rem 0.875rem"
---

# Design System: Estudio Alcántara

## 1. Overview

**Creative North Star: "The Swiss Brief"**

A law firm's credibility expressed through editorial typography and grid discipline — not through legal stock imagery or sales pressure. The implemented system borrows from Swiss institutional sites (Bär & Karrer, grid-first European firms): structured, breathable, precise. Warmth arrives through proportion, readable copy, and restrained accent use, not through cream backgrounds or decorative clichés.

Motion responds to interaction — hover, focus, and a single hero entrance feel considered, never choreographed for spectacle. Depth is tonal, not shadow-driven. The portfolio goal is craft you can feel: every spacing decision, every type size, every accent placement earns trust.

**Key Characteristics:**

- Restrained palette: cool institutional slate on pure white and cool-mist surfaces; accent ≤10% of any screen
- Spectral display + Source Sans 3 body + JetBrains Mono labels — authority through typographic contrast
- Flat-by-default surfaces; depth via Paper → Surface tonal steps and ruled dividers, not ghost-card shadows
- Swiss grid discipline with generous editorial whitespace and fluid `clamp()` section rhythm
- Mobile-first: sticky header, native `<details>` navigation and FAQ, WCAG AA contrast as a design constraint

## 2. Colors

**The Restrained Rule.** Tinted cool neutrals carry the surface. Institutional Slate appears on ≤10% of any given screen — primary CTAs, links, focus rings, FAQ markers. Its rarity is the point.

### Primary

- **Institutional Slate** (oklch(0.44 0.09 252)): Primary buttons, text links, focus outlines, FAQ expand/collapse markers. Cool hue, moderate saturation — credible institutional blue-gray without navy-and-gold law-firm default.
- **Slate Press** (oklch(0.38 0.1 252)): Hover and pressed state for primary interactive fills.

### Neutral

- **Pure Paper** (oklch(1 0 0)): Page background and input fields. Literal white — no hidden warm tint.
- **Cool Mist Surface** (oklch(0.965 0.008 250)): Alternating section backgrounds, contact form panel, credential quote blocks. One tonal step from Paper.
- **Brief Ink** (oklch(0.2 0.025 250)): Body text, headings, navigation labels. Cool-tinted near-black for ≥7:1 on Paper.
- **Registry Muted** (oklch(0.46 0.022 250)): Secondary prose, metadata labels, form lead copy. Dark enough for ≥4.5:1 on Paper and Surface.
- **Rule Line** (oklch(0.88 0.012 250)): Horizontal rules, list dividers, input borders, header/footer separators.
- **On Primary** (oklch(0.99 0.005 250)): Text on filled primary buttons.

### Named Rules

**The No-Navy-Gold Rule.** If the palette reads as "default law firm template," the slate has drifted too warm or too saturated. Pull back toward cool, desaturated institutional tones.

**The No-Cream Rule.** Body backgrounds must not land in the warm-neutral band (cream, sand, parchment, linen). Warmth is carried by typography and accent placement, not by a tinted page wash.

## 3. Typography

**Display Font:** Spectral (Iowan Old Style, Palatino Linotype, serif)

**Body Font:** Source Sans 3 (system-ui, sans-serif)

**Label/Mono Font:** JetBrains Mono (ui-monospace, monospace)

**Character:** Serif authority in headlines, humanist warmth in prose, mono precision in metadata — the Swiss-law contrast axis. No second sans paired with the body family.

### Hierarchy

- **Display** (400 weight, clamp(2.5rem, 5vw + 1rem, 4.5rem), line-height 1.12, letter-spacing -0.03em): Hero h1 only. `text-wrap: balance`.
- **Headline** (500 weight, clamp(1.75rem, 2.5vw + 0.5rem, 2.5rem), line-height 1.12): Section titles — Áreas, Equipo, Contacto.
- **Title** (500 weight, clamp(1.125rem, 1vw + 0.75rem, 1.375rem), line-height 1.12): Practice area names, team member names, subsection headers.
- **Body** (400 weight, 1.0625rem / 0.875rem small, line-height 1.6, max 42rem prose): Service descriptions, philosophy copy, form labels. `text-wrap: pretty` on long prose.
- **Label** (500 weight, 0.75rem, letter-spacing 0.04em, uppercase): Firm metadata (`Madrid · Desde 1987`), practice index numbers, credentials.

### Named Rules

**The Display Ceiling Rule.** Hero type never exceeds 4.5rem at max clamp (well under the 6rem ceiling). Editorial restraint whispers.

**The Mono Sparingly Rule.** Monospace accents metadata and structure — not body paragraphs. One mono voice per screen section at most.

## 4. Elevation

Flat by default. Depth is conveyed through tonal surface steps (Pure Paper → Cool Mist Surface) and whitespace, not drop shadows at rest. The only resting shadow is the mobile navigation panel (4px blur, 8px spread) — a functional dropdown affordance, not decorative card elevation.

Header uses a light backdrop blur (8px) over 92% opaque white — purposeful, not glassmorphism-as-decoration.

### Shadow Vocabulary

- **Dropdown panel** (`box-shadow: 0 4px 8px oklch(0.2 0.02 250 / 0.08)`): Mobile nav menu panel only.

### Named Rules

**The Flat-By-Default Rule.** Surfaces are flat at rest. Shadows appear only as a response to functional overlay state (dropdown), never as resting card decoration.

**The No Ghost-Card Rule.** Never pair `border: 1px solid` with wide soft box-shadows (blur ≥16px). Pick one surface treatment: a defined border at Rule Line, or a tight functional shadow (≤8px blur), never both as decoration.

## 5. Components

Character across primitives: **refined and restrained** — small radii, solid borders or tonal fills, no decorative chrome.

### Buttons

- **Shape:** Gently squared corners (4px radius), min-height 2.75rem (44px touch target).
- **Primary:** Institutional Slate fill, On Primary text, 0.625rem × 1.375rem padding, 600 weight at 0.875rem. Used once per viewport zone (header CTA, hero CTA, form submit).
- **Hover / Focus:** Slate Press fill on hover; 2px Institutional Slate outline with 3px offset on `:focus-visible`.
- **Ghost:** Transparent fill, Brief Ink text, Rule Line border; border shifts to Brief Ink on hover.

### Inputs / Fields

- **Style:** Pure Paper background, Rule Line 1px border, 4px radius, 0.75rem × 0.875rem padding, Source Sans 3 at 1.0625rem.
- **Focus:** Border shifts to Institutional Slate; 3px ring at 15% primary opacity. No wide glow.
- **Error / Success:** Status text below fields — error in warm red oklch(0.45 0.14 25); success in Brief Ink. Native `reportValidity()` for invalid submit.

### Navigation

- **Desktop:** Sticky header, 4.25rem min-height, inline text links at 0.875rem/500 weight in Brief Ink, primary Contactar button at right. Brand: Spectral 1.125rem + mono metadata below.
- **Mobile:** Hamburger `<details>` trigger (2.75rem square, Rule Line border); dropdown panel with 8px radius, tight shadow, stacked links.
- **Hover:** Nav links shift to Institutional Slate; brand link stays Brief Ink.

### Cards / Containers

- **Contact form panel:** Cool Mist Surface background, 12px radius, 2.5rem padding — tonal container, no border, no shadow.
- **Credential quotes:** Same surface treatment at 1.5rem padding.
- **Hero / philosophy images:** 12px radius, `object-fit: cover` — photographic containers, not card chrome.

### Practice Index (signature)

- **Style:** Ruled list — mono index (`01`–`05`) in left column, Spectral title + muted description in right. Full-width Rule Line dividers between items. No icons, no card wrappers.
- **Purpose:** Typographic dossier index; order carries information (five practice areas).

### FAQ Accordion

- **Style:** Native `<details>` / `<summary>`, Rule Line dividers, 600-weight question text, mono `+` / `−` marker in Institutional Slate.
- **Behavior:** Expand/collapse with no JavaScript; answers in Registry Muted at max 58ch.

## 6. Do's and Don'ts

### Do:

- **Do** keep body text contrast at ≥4.5:1 against its background — Brief Ink on Paper, Registry Muted verified on both Paper and Cool Mist Surface.
- **Do** use Institutional Slate sparingly: one primary CTA per zone, links, focus rings, FAQ markers.
- **Do** let typography, ruled dividers, and whitespace establish hierarchy before reaching for containers or cards.
- **Do** provide `prefers-reduced-motion: reduce` alternatives — hero entrance disabled, scroll-behavior auto.
- **Do** test headline copy at every breakpoint — display clamp max is 4.5rem; reduce or rewrite if words overflow.

### Don't:

- **Don't** use generic law-firm templates: stock gavels, scales of justice heroes, navy-and-gold palettes, rotating sliders.
- **Don't** ship AI slop: cream/sand body backgrounds, gradient text, identical icon-card grids, eyebrow kickers on every section.
- **Don't** use aggressive sales patterns: pop-ups, "FREE CONSULTATION" banners, fake urgency, lead capture before trust.
- **Don't** build cold corporate walls: sterile stock photography, undifferentiated service copy blocks.
- **Don't** use side-stripe borders, gradient text, or glassmorphism as default decoration.
- **Don't** over-round containers (max 12px radius on panels and images); reserve full pills for tags and buttons only.
- **Don't** pair 1px borders with wide soft drop shadows on the same element — the ghost-card tell.
