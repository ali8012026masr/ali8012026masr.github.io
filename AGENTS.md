# AGENTS.md

## Project Identity
Build a personal developer portfolio for Mohammad Ali Sikder Ramim.
Position him accurately as an early-career Full-Stack Developer whose
primary engineering focus is Java, Spring Boot, Angular, TypeScript
and SQL.

## Product Scope
This is a frontend-only Angular portfolio deployed to GitHub Pages.

Do not create a backend, database, authentication system, custom API,
or server-side contact service.

Use typed local TypeScript data for portfolio content.

## Technology Stack
- Angular 22, subject to CLI/runtime compatibility
- TypeScript with strict settings
- Angular standalone components and Angular Router
- Angular Signals for small reactive UI state
- Tailwind CSS v4
- CSS custom properties for design tokens
- Lucide Angular for icons
- Playwright for browser tests
- Angular-compatible unit test tooling

Do not add a second frontend framework or unnecessary dependencies.

## Architecture
- Use feature-based organization.
- Lazy-load dedicated project routes.
- Keep shared UI components reusable but small.
- Keep content in typed data files.
- Keep presentation separate from content.
- Avoid unnecessary global state management (no NgRx).
- Do not abstract simple static data into a fake API layer.

## Design
Create a creative editorial developer portfolio.
Use expressive typography, asymmetric project layouts, clear hierarchy,
restrained motion and generous spacing.

Typography:
- Space Grotesk for display
- Inter for body
- JetBrains Mono for technical labels

Use design tokens and CSS variables for colors, spacing and surfaces.
Avoid generic template styling and excessive gradients.

## Theme
Support system, light and dark preferences.
System is the default.
Respect prefers-color-scheme when system is selected.
Persist explicit preferences in localStorage.
Apply data-theme to the root document.
Ensure accessible contrast and visible focus states.

## Responsive Behavior
Use mobile-first layouts.
Test at 360px, 390px, 768px and 1440px.
Prevent horizontal overflow.
Ensure controls are usable by touch and keyboard.

## Accessibility
Use semantic HTML, accessible names, keyboard navigation,
visible focus, meaningful alt text and reduced-motion support.
Do not rely on color alone to communicate status.

## Content Integrity
Never invent employment history, clients, testimonials, metrics,
certifications, project outcomes or production deployments.

Never claim a project feature is complete based only on a README.
Verify important claims in source code, tests or a working demo.

Use these statuses consistently:
- implemented
- partially implemented
- prototype
- planned
- unverified

Do not publish placeholder contact details or a fictional CV.
Do not publish a CV until the approved real PDF is provided.

## GitHub Pages Deployment
The target user site is https://ali8012026masr.github.io.
Confirm the repository name and GitHub Pages settings.
Use a root base href (`/`).
Automate deployment with GitHub Actions (`.github/workflows/deploy.yml`).
Test direct project-route visits and refreshes on the deployed site.
Use an automated 404.html fallback for SPA routing on GitHub Pages.

## Security and Privacy
Do not commit secrets, tokens or private credentials.
Do not expose unnecessary personal information.
Do not put secret API keys in frontend code.
Validate external URLs and use safe external-link attributes.

## Development Workflow
Before editing:
1. Inspect the current project and configuration.
2. Read relevant source files.
3. State the intended changes and affected files.
4. Work in small phases.

After each phase:
1. Run the production build.
2. Run relevant tests.
3. Fix errors before continuing.
4. Summarize changes and remaining limitations.

Never claim a build or test passed unless it was actually executed.
Do not overwrite working files without a reason.
Ask before destructive operations or deployment.

## Git Standards
Use meaningful commits.
Do not commit node_modules, build artifacts, secrets or local environment files.
Keep README and deployment documentation accurate.
