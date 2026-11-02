# Design System & Token Specification

## 1. Aesthetic Direction: Creative Editorial Developer Studio
Combines the editorial layout of developer publications with technical precision:
- Asymmetric section grids with ample whitespace.
- Restrained, purposeful color palettes avoiding generic neon gradients.
- Clear visual hierarchy with numbered section markers (`01 / SELECTED PROJECTS`).

## 2. Typography Tokens
- **Display Typography:** `Space Grotesk`, sans-serif (Headings, hero titles, stat callouts).
- **Body Typography:** `Inter`, sans-serif (Narratives, descriptions, case study copy).
- **Technical Typography:** `JetBrains Mono`, monospace (Code blocks, status pills, tags, metadata).

## 3. Color Tokens & Theme Surfaces

### Dark Mode (Default for dark system preferences)
- **Canvas:** `#111614` (Deep charcoal with organic green undertone)
- **Surface:** `#17201C` (Elevated card container)
- **Surface Hover:** `#1E2B25` (Interactive elevation)
- **Border:** `#26362E` (Structural separator)
- **Text Main:** `#F1F5F9` (High contrast slate)
- **Text Muted:** `#94A3B8` (Secondary descriptions)
- **Primary Accent:** `#22C55E` / `#4ADE80` (Emerald Green)
- **Secondary Accent:** `#F59E0B` (Warm Amber)

### Light Mode (Warm Rice Paper)
- **Canvas:** `#FAF9F5` (Eye-friendly warm off-white)
- **Surface:** `#F1EFEA` (Subtle elevated card)
- **Surface Hover:** `#E8E5DD` (Card hover state)
- **Border:** `#DDD8CD` (Light border separator)
- **Text Main:** `#1E293B` (Deep slate typography)
- **Text Muted:** `#475569` (Muted readable text)
- **Primary Accent:** `#15803D` (Forest Green)
- **Secondary Accent:** `#B45309` (Terracotta)

## 4. Accessibility Standards
- All interactive controls have visible `:focus-visible` outline rings (`ring-2 ring-accent`).
- Color is never used alone to convey status; all status indicators pair a colored dot with explicit textual labels.
- Supports `prefers-reduced-motion` by reducing animation durations to 0.01ms.
