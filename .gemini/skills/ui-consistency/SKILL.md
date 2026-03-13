---
name: ui-consistency
description: Ensures UI uniformity and design standard enforcement for the Anthony Leuterio brand. Use when Gemini CLI needs to check, apply, or update styling to match the project's executive real estate aesthetic (Executive Navy & Gold).
---

# UI Consistency Skill

Maintain a uniform, professional, and high-end aesthetic across all project files.

## Core Design Tokens
Before making any style changes, refer to [design-tokens.md](references/design-tokens.md) for authorized colors, typography, and spacing.

## Standardized Base Styles
A baseline CSS configuration is available in [base-styles.css](assets/base-styles.css). Use these as the foundation for any new CSS files or style updates.

## Workflow

### 1. Audit Styles
To identify style deviations, use the `audit-styles.cjs` script:
```bash
node <path-to-skill>/scripts/audit-styles.cjs [directory]
```
This script scans `.css` and `.html` files for hardcoded hex codes that don't match authorized tokens in [design-tokens.md](references/design-tokens.md).

### 2. Enforce Consistency
Update deviant styles to use either:
- **CSS Variables**: Prefer using the defined `--primary-color`, `--secondary-color`, etc.
- **Base Classes**: Use standard classes like `.btn`, `.section`, and `.section-title`.

### 3. Verify Visuals
Ensure that:
- Spacing is consistent (e.g., all sections have `8rem` top/bottom padding).
- Typography follows the `Inter` hierarchy.
- Interactive elements (buttons, links) use the `Gold` accent and consistent hover states.

## Key Constraints
- **Color Discipline**: NEVER use colors outside the defined palette for primary UI elements.
- **Responsiveness**: Always check that new or updated styles maintain readability on mobile (`max-width: 768px`).
- **Simplicity**: Avoid adding redundant styles. Consolidate into the root variables whenever possible.
