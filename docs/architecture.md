# System Architecture Specification

## 1. Architectural Philosophy
The portfolio is designed as an Angular 22 Single Page Application (SPA) deployed to static hosting (GitHub Pages), prioritizing:
- **Zero Maintenance Overhead:** No idling backend servers or live database instances required to view project capabilities.
- **Defensible Case Studies:** Rich technical architectural breakdowns of backend projects (Horizon, Bangla Akinator) with code references.
- **Fine-Grained Reactivity:** Utilizing Angular Signals for local state management (theming, mobile navigation, active sections) without the bloat of global stores like NgRx.
- **Strict Typing:** All data is kept in immutable, typed TypeScript contracts in `src/app/core/models/` and `src/app/core/data/`.

## 2. Component Organization
- **Core Layer (`src/app/core/`):**
  - `models/`: Domain contracts (`project.model.ts`, `skill.model.ts`, `profile.model.ts`).
  - `services/`: Singleton reactive providers (`theme.service.ts`, `seo.service.ts`, `project.service.ts`).
  - `data/`: Content files cleanly separated from UI components.
- **Shared Layer (`src/app/shared/`):**
  - Reusable, atomic UI components (`NavbarComponent`, `FooterComponent`, `ThemeToggleComponent`, `StatusPillComponent`, `TechBadgeComponent`, `TerminalSnippetComponent`, `SectionHeaderComponent`).
- **Features Layer (`src/app/features/`):**
  - `home/`: Landing page aggregating Hero, Projects, Skills, About, Journey, and Contact sections.
  - `projects/`: Deep case study routes for Horizon and Bangla Akinator.
  - `not-found/`: Styled 404 handler.

## 3. Theming & Reactive Signal Pipeline
```
[ User Preference: system / light / dark ]
                   │
                   ▼
       [ ThemeService (Signal) ]
                   │
         ┌─────────┴─────────┐
         ▼                   ▼
[ window.matchMedia ]   [ localStorage ]
         │                   │
         └─────────┬─────────┘
                   ▼
      [ computed: effectiveTheme ]
                   │
                   ▼
  [ document.documentElement.setAttribute('data-theme', ...) ]
                   │
                   ▼
 [ CSS Variables Cascade (_tokens.css in styles.css) ]
```
