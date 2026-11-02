import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StatusPillComponent } from '../../../shared/components/status-pill/status-pill.component';
import { TechBadgeComponent } from '../../../shared/components/tech-badge/tech-badge.component';
import { ProjectService } from '../../../core/services/project.service';
import { SeoService } from '../../../core/services/seo.service';
import { PortfolioProject } from '../../../core/models/project.model';

@Component({
  selector: 'app-horizon-case-study',
  standalone: true,
  imports: [CommonModule, RouterModule, StatusPillComponent, TechBadgeComponent],
  template: `
    @if (project) {
      <article class="py-12 sm:py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 font-body">
        <!-- Back Link -->
        <div class="mb-8">
          <a
            routerLink="/"
            fragment="projects"
            class="inline-flex items-center gap-2 text-xs font-mono font-medium text-text-muted hover:text-accent transition-colors focus:outline-hidden focus-visible:ring-1 focus-visible:ring-accent"
          >
            ← Back to All Projects
          </a>
        </div>

        <!-- Case Study Header -->
        <header class="mb-12 pb-8 border-b border-border">
          <div class="flex flex-wrap items-center justify-between gap-3 mb-4">
            <span class="px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
              {{ project.badgeLabel }}
            </span>
            <app-status-pill [status]="project.status" />
          </div>

          <h1 class="text-3xl sm:text-5xl lg:text-6xl font-display font-bold text-text-main tracking-tight leading-tight">
            {{ project.title }}
          </h1>

          <p class="mt-3 text-lg sm:text-xl font-mono text-accent">
            {{ project.tagline }}
          </p>

          <p class="mt-4 text-base sm:text-lg text-text-muted leading-relaxed max-w-3xl">
            {{ project.overview }}
          </p>

          <!-- Metadata Strip -->
          <div class="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-surface border border-border text-xs font-mono">
            <div>
              <span class="text-text-dim block">Role</span>
              <span class="font-semibold text-text-main">{{ project.role }}</span>
            </div>
            <div>
              <span class="text-text-dim block">Timeline</span>
              <span class="font-semibold text-text-main">{{ project.timeline }}</span>
            </div>
            <div>
              <span class="text-text-dim block">Backend Port</span>
              <span class="font-semibold text-text-main">58080 (REST)</span>
            </div>
            <div>
              <span class="text-text-dim block">Frontend Port</span>
              <span class="font-semibold text-text-main">54200 (Angular)</span>
            </div>
          </div>

          <!-- Technologies -->
          <div class="mt-6 flex flex-wrap gap-2">
            @for (tech of project.technologies; track tech) {
              <app-tech-badge [name]="tech" [highlight]="tech.includes('Java') || tech.includes('Spring') || tech.includes('Angular')" />
            }
          </div>
        </header>

        <!-- Main Content Sections -->
        <div class="space-y-16">
          <!-- 1. Architectural Blueprint -->
          <section>
            <h2 class="text-2xl sm:text-3xl font-display font-bold text-text-main mb-6">
              1. Multi-Tier System Architecture
            </h2>
            <p class="text-text-muted leading-relaxed mb-6">
              Horizon is designed around a decoupled client-server architecture with strict separation of concerns.
              The Angular 22 standalone client coordinates user interactions, while the Spring Boot 4.1 backend enforces zero-trust authentication,
              coordinates transactional JPA operations, and safely proxies contextual prompts to Google Gemini.
            </p>

            <!-- Architecture Flow Representation -->
            <div class="p-6 rounded-xl bg-surface border border-border font-mono text-xs overflow-x-auto space-y-4">
              <div class="text-accent font-semibold">// Decoupled Execution Flow:</div>
              <div class="text-text-muted">
                [ Angular 22 SPA Client ] &lt;== HTTPS / REST (Port 58080) ==&gt; [ Spring Security 7 Boundary ]<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▼<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[ Spring Boot Controllers ]<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── AuthController<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── BookingController<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── LocationController (GIS Radar)<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── AiChatController (Gemini Proxy)<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▼<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[ Domain Services &amp; JPA Repos ]<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── PostgreSQL 16 (Audited Entities)<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── Google Gemini 3.6 Flash (Catalog Enriched)
              </div>
            </div>
          </section>

          <!-- 2. Security Engineering Highlight -->
          <section>
            <h2 class="text-2xl sm:text-3xl font-display font-bold text-text-main mb-4">
              2. Security &amp; Token Architecture
            </h2>
            <div class="p-6 rounded-xl bg-surface border border-border space-y-4">
              <h3 class="text-lg font-mono font-semibold text-accent">
                Per-User Dynamic HMAC Token Revocation (Zero Blacklist)
              </h3>
              <p class="text-sm text-text-muted leading-relaxed">
                Conventional stateless JWT architectures struggle with instant token invalidation when a password is changed or an account is compromised,
                typically requiring distributed in-memory blacklists (e.g., Redis). Horizon solves this mathematically:
              </p>
              <ul class="space-y-2 text-sm text-text-main list-disc pl-5">
                <li>
                  <strong>Password Hashing:</strong> Passwords are one-way hashed using BCrypt via <code class="font-mono text-xs bg-canvas px-1.5 py-0.5 rounded border border-border">PasswordEncoderConfig.java</code>.
                </li>
                <li>
                  <strong>Per-User HMAC Signing:</strong> When issuing JWT access and refresh tokens in <code class="font-mono text-xs bg-canvas px-1.5 py-0.5 rounded border border-border">JwtService.java</code>, the signing key is dynamically generated from that individual user's stored BCrypt password hash.
                </li>
                <li>
                  <strong>Instant Global Invalidation:</strong> Whenever a user changes their password, their BCrypt hash changes in the database. Consequently, every outstanding token previously issued to that user immediately fails cryptographic signature verification, invalidating all sessions across all devices instantly without maintaining a distributed revocation table.
                </li>
                <li>
                  <strong>Brute Force &amp; Lockout Protection:</strong> <code class="font-mono text-xs bg-canvas px-1.5 py-0.5 rounded border border-border">AuthProvider.java</code> tracks failed authentication attempts and applies per-account lockout with exponential decay.
                </li>
              </ul>
            </div>
          </section>

          <!-- 3. Context-Grounded AI Concierge -->
          <section>
            <h2 class="text-2xl sm:text-3xl font-display font-bold text-text-main mb-4">
              3. Context-Grounded Gemini AI Concierge
            </h2>
            <div class="p-6 rounded-xl bg-surface border border-border space-y-4">
              <p class="text-sm text-text-muted leading-relaxed">
                Unlike open-ended chatbots that hallucinate non-existent hotel bookings or transport slots, Horizon's concierge is strictly bounded:
              </p>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
                <div class="p-4 rounded-lg bg-canvas border border-border">
                  <span class="text-accent font-bold block mb-1">01. Live Inventory Injection</span>
                  <span>Queries active PostgreSQL slots, verified guides, and active groups into a 30s cached snapshot before building the LLM context.</span>
                </div>
                <div class="p-4 rounded-lg bg-canvas border border-border">
                  <span class="text-accent font-bold block mb-1">02. Server-Side ID Verification</span>
                  <span>All recommended slotIds or guideIds in the generated JSON response are validated against active database IDs before sending to browser.</span>
                </div>
                <div class="p-4 rounded-lg bg-canvas border border-border">
                  <span class="text-accent font-bold block mb-1">03. Client Action Dispatch</span>
                  <span>Angular receives structured actions (e.g. FILTER_SLOTS, VIEW_GUIDE) to update UI search filters automatically.</span>
                </div>
                <div class="p-4 rounded-lg bg-canvas border border-border">
                  <span class="text-accent font-bold block mb-1">04. Prompt Injection Defense</span>
                  <span>User inputs are hard-capped at 1,000 characters and bounded to 12 chat turns with system instructions strictly isolated.</span>
                </div>
              </div>
            </div>
          </section>

          <!-- 4. Verified Feature Evidence Matrix Table -->
          <section>
            <h2 class="text-2xl sm:text-3xl font-display font-bold text-text-main mb-4">
              4. Verified Implementation Matrix
            </h2>
            <p class="text-xs font-mono text-text-muted mb-4">
              Direct verification mapping based on repository code audit:
            </p>

            <div class="border border-border rounded-xl overflow-hidden bg-surface">
              <div class="overflow-x-auto">
                <table class="w-full text-left text-xs font-mono">
                  <thead class="bg-canvas border-b border-border text-text-dim">
                    <tr>
                      <th class="p-3.5 sm:p-4">Feature Domain</th>
                      <th class="p-3.5 sm:p-4">Implementation Scope</th>
                      <th class="p-3.5 sm:p-4">Status</th>
                      <th class="p-3.5 sm:p-4">Verified Source Location</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-border/60">
                    @for (feat of project.features; track feat.title) {
                      <tr class="hover:bg-canvas/50 transition-colors">
                        <td class="p-3.5 sm:p-4 font-semibold text-text-main">{{ feat.title }}</td>
                        <td class="p-3.5 sm:p-4 text-text-muted font-body text-xs">{{ feat.description }}</td>
                        <td class="p-3.5 sm:p-4">
                          <app-status-pill [status]="feat.status" />
                        </td>
                        <td class="p-3.5 sm:p-4 text-accent text-[11px]">{{ feat.codeReference }}</td>
                      </tr>
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <!-- 5. Demo Credentials -->
          @if (project.demoCredentials && project.demoCredentials.length > 0) {
            <section>
              <h2 class="text-xl sm:text-2xl font-display font-bold text-text-main mb-4">
                5. Configured Demo Role Personas
              </h2>
              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                @for (cred of project.demoCredentials; track cred.role) {
                  <div class="p-4 rounded-xl bg-surface border border-border text-xs font-mono">
                    <span class="text-accent font-semibold block mb-1">{{ cred.role }}</span>
                    <span class="text-text-muted block">{{ cred.email }}</span>
                    <span class="text-text-dim block text-[11px]">Password: {{ cred.pass }}</span>
                  </div>
                }
              </div>
            </section>
          }

          <!-- Footer Actions -->
          <footer class="pt-8 border-t border-border flex flex-wrap items-center justify-between gap-4">
            <a
              routerLink="/"
              fragment="projects"
              class="text-xs font-mono text-text-muted hover:text-accent transition-colors"
            >
              ← Back to Overview
            </a>

            <a
              [href]="project.githubUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-mono font-semibold bg-accent text-white hover:bg-accent-hover transition-colors"
            >
              Inspect Source on GitHub ↗
            </a>
          </footer>
        </div>
      </article>
    }
  `
})
export class HorizonCaseStudyComponent implements OnInit {
  private readonly projectService = inject(ProjectService);
  private readonly seoService = inject(SeoService);

  readonly project: PortfolioProject | undefined = this.projectService.getProjectBySlug('horizon');

  ngOnInit(): void {
    if (this.project) {
      this.seoService.updateTitle('Horizon All-in-One Travel Booking Case Study');
      this.seoService.updateDescription(
        'In-depth technical architecture case study of Horizon — multi-role RBAC, per-user HMAC token invalidation, Leaflet GIS tracking, and Gemini 3.6 Flash database grounding.'
      );
    }
  }
}
