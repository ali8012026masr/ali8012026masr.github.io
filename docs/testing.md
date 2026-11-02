# Testing Protocol & Quality Assurance Guide

## 1. Overview
The portfolio enforces quality through multi-tier testing:
- **Strict TypeScript Compilation:** Enforced by `@angular/cli` and `tsconfig.json`.
- **Unit Testing:** Powered by **Vitest** for service logic and component instantiation.
- **End-to-End Browser Testing:** Powered by **Playwright** covering desktop and mobile viewports.

---

## 2. Executing Automated Tests

### Unit Tests (Vitest)
```bash
cd frontend
npm test -- --watch=false
```
*Tests Covered:*
- Root application component creation and layout mounting.
- `ThemeService`: Signal reactivity, 3-state cycling (`system` -> `dark` -> `light` -> `system`), `data-theme` attribute updates.
- `ProjectService`: Retrieval of all projects, flagship filtering, and slug matching.

### End-to-End Tests (Playwright)
```bash
cd frontend
npx playwright test
```
*E2E Scenarios Covered:*
- Homepage rendering and hero visibility.
- Case study deep routing to `/projects/horizon` and `/projects/bangla-akinator`.
- 404 error handling for unknown routes.
- Theme switching and persistence verification.
- CV download presence and target paths.

---

## 3. Responsive Breakpoint Checklist
Verify layouts in Chrome DevTools Device Mode:
- **Small Mobile (360px):** No horizontal scroll, hamburger menu functional, readable typography.
- **Mobile (390px - iPhone 12/13/14):** Clean card stacking, touch targets ≥ 44px.
- **Tablet (768px - iPad):** 2-column skills grid, balanced margins.
- **Desktop (1440px):** 12-column editorial layout with full terminal snippet presentation.
