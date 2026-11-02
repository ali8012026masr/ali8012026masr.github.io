import { SkillGroup } from '../models/skill.model';

export const SKILL_GROUPS: SkillGroup[] = [
  {
    id: 'backend',
    title: 'Enterprise Backend Engineering',
    subtitle: 'Primary Working Stack',
    tier: 'primary',
    skills: [
      {
        name: 'Java (JDK 17 / 21 / 25)',
        category: 'Language',
        tier: 'primary',
        context: 'Object-oriented domain modeling, concurrency, streams, and modern language features.',
        featured: true
      },
      {
        name: 'Spring Boot 4.x / 3.x',
        category: 'Framework',
        tier: 'primary',
        context: 'Layered RESTful architecture, dependency injection, and centralized exception handling.',
        featured: true
      },
      {
        name: 'Spring Security',
        category: 'Security',
        tier: 'primary',
        context: 'Stateless JWT filters, per-user HMAC token signing, role-based authorization, and account lockout.',
        featured: true
      },
      {
        name: 'Spring Data JPA & Hibernate',
        category: 'ORM / Persistence',
        tier: 'primary',
        context: 'Entity relationship mappings, JPA Auditing, custom specifications, and pagination.',
        featured: true
      },
      {
        name: 'PostgreSQL & SQL',
        category: 'Database',
        tier: 'primary',
        context: 'Relational schema design, foreign keys, indexing, constraints, and ACID transactions.',
        featured: true
      },
      {
        name: 'RESTful API Design',
        category: 'Architecture',
        tier: 'primary',
        context: 'Idempotency, status codes, DTO request/response mapping, and Jakarta Bean Validation.',
        featured: true
      }
    ]
  },
  {
    id: 'frontend',
    title: 'Modern Reactive Frontend',
    subtitle: 'Primary Working Stack',
    tier: 'primary',
    skills: [
      {
        name: 'Angular 22 / 21',
        category: 'Framework',
        tier: 'primary',
        context: 'Standalone component architecture, reactive forms, lazy-loaded routing, and HTTP interceptors.',
        featured: true
      },
      {
        name: 'TypeScript 6 / 5',
        category: 'Language',
        tier: 'primary',
        context: 'Strict type checking, generic interfaces, union types, and type guards.',
        featured: true
      },
      {
        name: 'Angular Signals & RxJS',
        category: 'State Management',
        tier: 'primary',
        context: 'Fine-grained signal reactivity for UI state, computed dependencies, and asynchronous streams.',
        featured: true
      },
      {
        name: 'Tailwind CSS v4',
        category: 'Styling',
        tier: 'primary',
        context: 'CSS custom properties, mobile-first responsive grids, design tokens, and theme switching.',
        featured: true
      },
      {
        name: 'HTML5 & Accessible CSS',
        category: 'Core Web',
        tier: 'primary',
        context: 'Semantic markup, WCAG contrast standards, visible focus states, and reduced motion.',
        featured: false
      }
    ]
  },
  {
    id: 'tooling',
    title: 'Quality, DevOps & Engineering Tooling',
    subtitle: 'Supporting Capabilities',
    tier: 'tooling',
    skills: [
      {
        name: 'Git & GitHub',
        category: 'Version Control',
        tier: 'tooling',
        context: 'Feature branch workflows, commit hygiene, and pull request reviews.',
        featured: true
      },
      {
        name: 'Maven',
        category: 'Build Automation',
        tier: 'tooling',
        context: 'Multi-module project lifecycles, dependency management, and plugins.',
        featured: true
      },
      {
        name: 'Postman',
        category: 'API Testing',
        tier: 'tooling',
        context: 'API collection development, environment variables, and pre-request scripts.',
        featured: false
      },
      {
        name: 'Playwright & Vitest',
        category: 'Testing',
        tier: 'tooling',
        context: 'Automated end-to-end browser assertions, unit testing, and API integration tests.',
        featured: true
      },
      {
        name: 'Docker Basics',
        category: 'Containerization',
        tier: 'tooling',
        context: 'Dockerfile creation and multi-container local orchestration via docker-compose.',
        featured: false
      }
    ]
  },
  {
    id: 'exploratory',
    title: 'Supplementary & Mobile Exploration',
    subtitle: 'Minor / Contextual Exposure',
    tier: 'exploratory',
    skills: [
      {
        name: 'Python (FastAPI)',
        category: 'Minor Backend',
        tier: 'exploratory',
        context: 'Utilized as a lightweight asynchronous API service in Bangla Akinator.',
        featured: false
      },
      {
        name: 'Flutter (Dart)',
        category: 'Cross-Platform Mobile',
        tier: 'exploratory',
        context: 'Exploratory mobile client development and state management experiments.',
        featured: false
      },
      {
        name: 'Android (Java / XML)',
        category: 'Native Mobile',
        tier: 'exploratory',
        context: 'Retrofit-based mobile client in HorizonTourist with HTML5 GPS coordination.',
        featured: false
      }
    ]
  }
];
