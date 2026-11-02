# 🌐 Mohammad Ali Sikder Ramim — Developer Portfolio

[![Angular](https://img.shields.io/badge/Angular-22.0.0-DD0031?style=for-the-badge&logo=angular&logoColor=white)](https://angular.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0.2-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Java Focus](https://img.shields.io/badge/Java_&_Spring_Boot-Enterprise_Core-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white)](https://spring.io/)
[![GitHub Pages](https://img.shields.io/badge/Deployed-GitHub_Pages-222222?style=for-the-badge&logo=github&logoColor=white)](https://ali8012026masr.github.io)

Personal developer portfolio for **Mohammad Ali Sikder Ramim**, early-career **Full-Stack Developer** specializing in **Java, Spring Boot, Angular, TypeScript, and SQL**.

---

## 🌟 Executive Overview

This portfolio is an Angular 22 Single Page Application (SPA) designed to communicate verified software architecture, enterprise design patterns, and full-stack competence to engineering interviewers and recruiters.

### Core Architectural Highlights
* **Primary Technology Focus:** Java 25 & Spring Boot 4.1.0 on the backend, paired with Angular 22 standalone components on the frontend.
* **Creative Editorial Design System:** High-contrast typography (**Space Grotesk** display, **Inter** body, **JetBrains Mono** technical labels) with organic emerald/moss green accents.
* **Adaptive Theme System:** 3-mode theme controller (System / Light / Dark) powered by fine-grained **Angular Signals**, synchronized with `prefers-color-scheme`, persisted to `localStorage`, with zero flash of unstyled content.
* **Interview-Defensible Case Studies:** Strict feature taxonomy (`Implemented`, `Partially Implemented`, `Prototype`, `Planned`) backed by source code references in [`docs/content-verification.md`](docs/content-verification.md).
* **Automated CI/CD Deployment:** Native GitHub Actions pipeline targeting GitHub Pages (`https://ali8012026masr.github.io`) with automated `404.html` SPA routing fallback.

---

## 🚀 Featured Engineering Case Studies

1. **[Horizon All-in-One Travel Booking Platform](https://ali8012026masr.github.io/projects/horizon):**
   * Multi-role RBAC architecture (Tourist, Service Provider, Tour Guide, Administrator).
   * Per-User HMAC-SHA dynamic token signing via BCrypt password hashes (instant zero-blacklist revocation).
   * Context-grounded Google Gemini 3.6 Flash integration enforcing active DB slot catalog validation.
   * Interactive Leaflet GIS live guide radar tracking with HTML5 Geolocation API.
   * Multi-tenant commission ledger, group split settlements, and jsPDF / SheetJS export engine.

2. **[বাংলা জ্বিন (Bangla Akinator)](https://ali8012026masr.github.io/projects/bangla-akinator):**
   * Probabilistic 20-questions guessing game dedicated to Bengali personalities and cultural icons.
   * Greedy question selection maximizing Shannon Entropy Expected Information Gain (EIG).
   * Bayesian log-probability inference engine with log-sum-exp numerical stabilization.
   * Asynchronous FastAPI backend microservice with MongoDB persistence and Bengali NFC normalization.

3. **Horizon Tourist (Android Companion):**
   * Native Android client (Java + XML + Retrofit) integrated with the Horizon Spring Boot backend.

---

## 🛠️ Local Development & Quick Start

### Prerequisites
* **Node.js**: v22.x or v24.x LTS (Tested on v24.18.0)
* **npm**: v11.x or v12.x (Tested on v12.2.1)
* **Angular CLI**: v22.0.5 (`npm install -g @angular/cli`)

### Setup Instructions

```bash
# Clone repository
git clone https://github.com/ali8012026masr/ali8012026masr.github.io.git
cd ali8012026masr.github.io/frontend

# Install dependencies
npm install --legacy-peer-deps

# Start local development server
npm start
# Open browser at http://localhost:4200/
```

### Production Build & GitHub Pages Preparation

```bash
# Execute Angular production compilation + 404.html SPA fallback generation
npm run build:gh-pages

# Generated static assets are ready in:
# frontend/dist/frontend/browser/
```

### Run Automated Tests

```bash
# Run Unit Tests (Vitest)
npm test -- --watch=false

# Run End-to-End Tests (Playwright)
npx playwright test
```

---

## 📁 Repository Structure

```
.
├── AGENTS.md                               # Project-wide persistent agent instructions
├── README.md                               # Project overview and run guide
├── .github/
│   └── workflows/
│       └── deploy.yml                      # GitHub Actions automated deployment
├── docs/
│   ├── architecture.md                     # System architecture specification
│   ├── content-verification.md             # Feature evidence & claims matrix
│   ├── design-system.md                    # Design tokens & color palettes
│   ├── github-pages-deployment.md          # Step-by-step deployment guide
│   └── testing.md                          # Testing protocol and verification
│
└── frontend/                               # Angular 22 Single Page Application
    ├── public/
    │   ├── favicon.svg                     # Brand geometric SVG icon
    │   └── documents/
    │       └── ramim-cv.pdf                # Downloadable Curriculum Vitae
    ├── src/
    │   ├── app/
    │   │   ├── core/
    │   │   │   ├── data/                   # Typed content files (projects, skills, profile)
    │   │   │   ├── models/                 # TypeScript data contracts
    │   │   │   └── services/               # ThemeService, SeoService, ProjectService
    │   │   ├── shared/components/          # Navbar, Footer, ThemeToggle, StatusPill, Badges
    │   │   └── features/                   # Home, Case Studies (Horizon, Akinator), NotFound
    │   ├── styles.css                      # Tailwind CSS v4 imports and design tokens
    │   └── index.html                      # HTML5 root shell
    └── angular.json                        # Angular workspace configuration
```

---

## 👨‍💻 Author & Contact

**Mohammad Ali Sikder Ramim**  
*Full-Stack Developer · Java · Spring Boot · Angular · TypeScript · SQL*  
* **GitHub:** [@ali8012026masr](https://github.com/ali8012026masr)  
* **Portfolio Website:** [ali8012026masr.github.io](https://ali8012026masr.github.io)  
* **Location:** Dhaka, Bangladesh (UTC+6)
