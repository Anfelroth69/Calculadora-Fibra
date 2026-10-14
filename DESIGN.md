---
name: Calculadora Fibra
description: Cotizador interno de toboganes — señalética de taller
colors:
  safety: "#f7e400"
  paper: "#faf5e6"
  ink: "#17150e"
  card: "#ffffff"
  danger: "#dc2626"
typography:
  display:
    fontFamily: "Oswald, Arial Narrow, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(3rem, 8vw, 4.5rem)"
    fontWeight: 700
    lineHeight: 0.95
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Oswald, Arial Narrow, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.02em"
  body:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: "normal"
  label:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "0.18em"
rounded:
  sm: "8px"
  md: "12px"
  lg: "16px"
  full: "999px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.safety}"
    rounded: "{rounded.full}"
    padding: "8px 20px"
  button-safety:
    backgroundColor: "{colors.safety}"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    padding: "10px 20px"
  card-quote:
    backgroundColor: "{colors.card}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "24px"
  plate-total:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.safety}"
    rounded: "{rounded.lg}"
    padding: "24px"
  input-numeric:
    backgroundColor: "{colors.card}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "6px 12px"
---

# Design System: Calculadora Fibra

## Overview

**Creative North Star: "Señalética de Taller"**

Utilitarian workshop signage translated to screen. Cream day-plant paper, black ink, and safety yellow do all the work — no gradients, no soft SaaS grays. Condensed uppercase display type shouts the total; small Inter labels whisper the procedure. Everything is bordered, stamped, and hard-shadowed like a painted metal plate.

Density is comfortable-workshop: one screen, two columns, large touch targets, tabular numbers everywhere. Motion is near-zero — instant recalculation is the interaction. Rejects persuasive landing tropes, multi-step wizards, and muted minimalism.

**Key Characteristics:**
- High-contrast ink-on-paper with safety-yellow accents
- Condensed uppercase Oswald display + Inter body/labels
- 3px ink borders + 6px hard offset shadows
- Tabular numerals for all prices and meters

## Colors

Safety signage triad: paper field, ink structure, yellow action. Rarity is not the point — yellow carries selection, total, and admin.

### Primary
- **Safety Yellow** (#f7e400): selection, total numerals, primary actions, admin panel field. Always paired with ink text or ink plate.

### Neutral
- **Day-plant Paper** (#faf5e6): page background.
- **Workshop Ink** (#17150e): text, borders, plates, header bar, focus selection.
- **Card White** (#ffffff): quote card and unselected type options.
- **Signal Red** (#dc2626): validation / error bands only (quote-error, admin error).

### Named Rules
**The Ink Frames Everything Rule.** Every interactive surface sits inside a 2–3px ink border with a 6px hard shadow; borderless controls are not used.
**The Yellow Means Active Rule.** Yellow background = selected type, live total, or actionable; never decorative trim alone.

## Typography

**Display Font:** Oswald (with Arial Narrow fallback)
**Body Font:** Inter (with system-ui fallback)

**Character:** Condensed industrial shout for numbers and titles; plain grotesk clarity for procedure and labels.

### Hierarchy
- **Display** (700, clamp(3rem, 8vw, 4.5rem), 0.95): H1 "Cotiza tu tobogán" and total `#total` (text-6xl). Uppercase, tight tracking.
- **Headline** (700, 1.25rem, 1.2): Section titles "1 · Tipo", "2 · Longitud", admin title. Oswald uppercase wide tracking.
- **Title** (700, 1.5rem, 1.1): Type option names Recto / Curvo. Oswald uppercase.
- **Body** (500, 0.875rem, 1.5): Notes, desglose values, admin help. Inter, max ~60ch.
- **Label** (700, 0.75rem, 0.18em, uppercase): Eyebrows, field labels, badges, tab pills. Inter uppercase.

### Named Rules
**The Uppercase Display Rule.** Oswald is always uppercase for headings, totals, and type names; sentence case lives only in help text and notes.

## Layout

Single-work-screen model. Max-w-6xl centered container (px-4, sm:px-6). Header stack → tab pills → `lg:grid-cols-[1.25fr_1fr]` work grid: quote card left, total plate + admin right. Quote internals: 2-col type grid, length row with numeric input right-aligned, range slider full-width, 3-col desglose strip. Spacing rhythm 8/16/24px; card padding 24px. Responsive: stacks to single column under lg; admin form 1-col → 2-col at 420px. No marketing hero, no footer nav.

## Elevation & Depth

Flat-by-default with hard offset shadows as structure. No blur, no ambient Material elevation.

### Shadow Vocabulary
- **Plate punch** (`box-shadow: 6px 6px 0 #17150e`): quote card, admin panel, type buttons rest state.
- **Plate on dark** (`box-shadow: 6px 6px 0 rgba(23,21,14,0.25)`): total plate on paper.
- **Thumb stamp** (`box-shadow: 3px 3px 0 #17150e`): range slider thumb.

### Named Rules
**The Flat-By-Default Rule.** Depth comes only from 3–6px ink offset blocks; soft blurred shadows are never used.

## Shapes

Squared-industrial with friendly large radii for cards. Cards 16px (rounded-2xl), type options 12px (rounded-xl), inputs 8px (rounded-lg), pills and badges fully round (rounded-full). Borders are always 2–3px solid ink. Range thumb is a 28×44px rounded-rect stamp (6px radius) in ink with yellow stroke. Ruler ticks via repeating-linear-gradient are the signature texture for the length control.

## Components

### Buttons
- **Shape:** pill (999px), uppercase 0.05–0.1em tracking.
- **Primary:** ink bg (#17150e) + safety text (#f7e400), 8px 20px. Tabs selected state.
- **Safety:** safety bg (#f7e400) + ink text, 10px 20px. Copy action, selected type.
- **Hover / Focus:** brightness-95 on safety; border-color shift to yellow on ghost; 3px solid currentColor focus ring offset 3px.
- **Ghost:** transparent with 2px paper/ink border; hover binds to yellow.

### Cards / Containers
- **Corner Style:** large 16px.
- **Background:** white for quote; ink for total plate; safety yellow for admin.
- **Shadow Strategy:** plate punch (see Elevation).
- **Border:** 3px solid ink.
- **Internal Padding:** 24px.

### Inputs / Fields
- **Style:** white, 3px ink border, 8px radius, tabular-nums, right-aligned for meters.
- **Focus:** 3px currentColor outline + 4px radius.
- **Error / Disabled:** red-600 band with white bold text for quote errors; disabled save button at 50% opacity.

### Navigation
- **Style:** tab pills (Cotizar / Administración), role=tablist. Selected = ink pill yellow text; unselected = 2px ink outline. Admin panel toggles below total; quote panel always visible.

### Signature Component
**Total plate:** black 3px-bordered card, eyebrow "Total estimado · COP" in yellow 0.2em caps, giant Oswald tabular total in yellow (text-6xl), formula caption in 80% paper, Copy (safety pill) + WhatsApp (paper outline) row. Live region polite.

## Do's and Don'ts

### Do:
- **Do** keep all money in es-CO COP with tabular-nums (`.tnum`).
- **Do** use ink borders + hard shadows on every card, input, and type button.
- **Do** keep Oswald uppercase for display, Inter uppercase micro-labels for procedure.
- **Do** show formula, unitario, longitud, and tipo alongside the total.

### Don't:
- **Don't** introduce new hues beyond paper/ink/yellow/white/red-error.
- **Don't** replace Oswald/Inter pairing or use sentence-case display headings.
- **Don't** soften shadows to blurred elevation or remove ink borders for a minimal look.
- **Don't** split the single-screen Operate flow into steps or landing sections.
