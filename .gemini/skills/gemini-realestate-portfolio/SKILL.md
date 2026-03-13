---
name: gemini-realestate-portfolio
description: Use this skill when building, editing, or extending the luxury real estate portfolio HTML project. Triggers when the user asks to update the portfolio, add a section, change the design, swap content (names, listings, photos, testimonials, contact info), adjust colors or typography, or add new interactivity to the single-file HTML portfolio. Also use when the user asks to "make it look better", "change the theme", "add a new card", or anything that touches the portfolio.html file.
---

# Gemini Real Estate Portfolio Skill

## Mandatory UI Compliance
**CRITICAL:** When this skill is active, the Red, White, and Blue design system defined below is the **ONLY** UI design to be followed. It takes absolute precedence over any other global styling or consistency rules (including `ui-consistency`).

## Project Summary
This skill covers a **single-file luxury real estate portfolio** built entirely in HTML, CSS, and vanilla JavaScript for **Alexandra Sterling**. All names, prices, stats, and images are placeholder content intended to be swapped out.

## File Location
The code resides in `portfolio.html`. CSS is in a `<style>` block in `<head>`, and JavaScript is in a `<script>` block at the end of `<body>`.

## Design System (Red, White, & Blue)

| Token | Value | Usage |
|---|---|---|
| `--primary-blue` | `#003366` | Primary background, headers, and depth |
| `--primary-red` | `#C41E3A` | Accents, primary CTAs, borders, and highlights |
| `--white` | `#FFFFFF` | Body text, card backgrounds, and clean space |
| `--red-hover` | `#A01830` | Hover state for red elements |
| `--blue-light` | `#004080` | Secondary background sections |
| `--text-muted` | `#E0E0E0` | Secondary text on dark backgrounds |

**Fonts:** `Cormorant Garamond` (headings) and `Montserrat` (body/UI).

## Detailed Reference Guides

- **[Section Structure](./references/structure.md)**: Details on the 10 sections from `#hero` to `#footer`.
- **[UI Patterns](./references/patterns.md)**: Scroll reveal, custom cursor, sticky nav, and card effects.
- **[Common Edit Tasks](./references/tasks.md)**: How to swap content, add listings, or change the theme.

## What This Skill Does NOT Cover
- JS frameworks (React, Vue, etc.)
- Backend/form submission logic
- CMS or MLS/IDX integration
- Authentication or gated content
