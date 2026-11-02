import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SectionHeaderComponent } from '../../../../shared/components/section-header/section-header.component';
import { StatusPillComponent } from '../../../../shared/components/status-pill/status-pill.component';
import { TechBadgeComponent } from '../../../../shared/components/tech-badge/tech-badge.component';
import { ProjectService } from '../../../../core/services/project.service';

@Component({
  selector: 'app-projects-section',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    SectionHeaderComponent,
    StatusPillComponent,
    TechBadgeComponent
  ],
  template: `
    <section id="projects" class="py-16 sm:py-24 border-t border-border/60" aria-labelledby="projects-header">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <app-section-header
          number="01"
          tag="Selected Projects"
          title="Verified Full-Stack Architecture"
          description="Real-world applications verified in source code and automated tests. Clearly distinguished between completed implementations, prototypes, and planned roadmaps."
        />

        <div class="space-y-12 lg:space-y-16">
          <!-- 1. Flagship Project: Horizon -->
          @if (horizonProject) {
            <article class="relative rounded-2xl bg-surface border border-border hover:border-accent/50 transition-all duration-300 overflow-hidden shadow-xl group">
              <!-- Accent Highlight Bar -->
              <div class="h-1.5 w-full bg-gradient-to-r from-emerald-500 via-teal-400 to-green-600"></div>

              <div class="p-6 sm:p-8 lg:p-12">
                <!-- Meta Row -->
                <div class="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div class="flex items-center gap-3">
                    <span class="px-2.5 py-0.5 rounded text-[11px] font-mono font-semibold uppercase tracking-wider bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
                      {{ horizonProject.badgeLabel }}
                    </span>
                    <span class="text-xs font-mono text-text-muted">
                      {{ horizonProject.category }}
                    </span>
                  </div>
                  <app-status-pill [status]="horizonProject.status" />
                </div>

                <!-- Title & Tagline -->
                <h3 class="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-text-main tracking-tight group-hover:text-accent transition-colors">
                  <a [routerLink]="['/projects', horizonProject.slug]" class="focus:outline-hidden focus-visible:underline">
                    {{ horizonProject.title }}
                  </a>
                </h3>
                <p class="mt-2 text-sm sm:text-base font-mono text-accent">
                  {{ horizonProject.tagline }}
                </p>

                <!-- Summary Paragraph -->
                <p class="mt-4 text-base text-text-muted max-w-3xl leading-relaxed font-body">
                  {{ horizonProject.summary }}
                </p>

                <!-- Core Highlights Grid -->
                <div class="mt-6 pt-6 border-t border-border/80 grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm font-body text-text-main">
                  @for (highlight of horizonProject.keyHighlights; track highlight) {
                    <div class="flex items-start gap-2.5">
                      <span class="text-accent font-bold">✓</span>
                      <span>{{ highlight }}</span>
                    </div>
                  }
                </div>

                <!-- Tech Badges -->
                <div class="mt-6 flex flex-wrap gap-2">
                  @for (tech of horizonProject.technologies; track tech) {
                    <app-tech-badge [name]="tech" [highlight]="tech.includes('Java') || tech.includes('Spring') || tech.includes('Angular')" />
                  }
                </div>

                <!-- Action CTAs -->
                <div class="mt-8 pt-6 border-t border-border flex flex-wrap items-center justify-between gap-4">
                  <div class="flex items-center gap-3">
                    <a
                      [routerLink]="['/projects', horizonProject.slug]"
                      class="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-mono font-semibold bg-accent text-white hover:bg-accent-hover transition-colors shadow-sm focus:outline-hidden focus-visible:ring-2 focus-visible:ring-accent"
                    >
                      Read Deep Case Study
                      <span class="text-xs">→</span>
                    </a>

                    <a
                      [href]="horizonProject.githubUrl"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-mono font-medium bg-surface-hover text-text-main border border-border hover:border-accent/40 transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-accent"
                    >
                      <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                      </svg>
                      GitHub Repo
                      <span class="text-xs">↗</span>
                    </a>
                  </div>

                  <span class="text-xs font-mono text-text-muted">
                    Port: 54200 (Angular) | Port: 58080 (Spring Boot)
                  </span>
                </div>
              </div>
            </article>
          }

          <!-- Grid: Secondary (Akinator) and Supporting (Android) -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <!-- 2. Bangla Akinator -->
            @if (akinatorProject) {
              <article class="rounded-2xl bg-surface border border-border hover:border-accent/50 transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between shadow-lg group">
                <div>
                  <div class="flex items-center justify-between gap-3 mb-4">
                    <span class="px-2.5 py-0.5 rounded text-[11px] font-mono font-semibold uppercase tracking-wider bg-teal-500/15 text-teal-600 dark:text-teal-400 border border-teal-500/30">
                      {{ akinatorProject.badgeLabel }}
                    </span>
                    <app-status-pill [status]="akinatorProject.status" />
                  </div>

                  <h3 class="text-xl sm:text-2xl font-display font-bold text-text-main group-hover:text-accent transition-colors">
                    <a [routerLink]="['/projects', akinatorProject.slug]" class="focus:outline-hidden focus-visible:underline">
                      {{ akinatorProject.title }}
                    </a>
                  </h3>
                  <p class="mt-1 text-xs font-mono text-accent">
                    {{ akinatorProject.tagline }}
                  </p>

                  <p class="mt-3 text-sm text-text-muted font-body leading-relaxed">
                    {{ akinatorProject.summary }}
                  </p>

                  <ul class="mt-4 space-y-2 text-xs font-body text-text-main">
                    @for (highlight of akinatorProject.keyHighlights.slice(0, 3); track highlight) {
                      <li class="flex items-start gap-2">
                        <span class="text-accent font-bold">•</span>
                        <span>{{ highlight }}</span>
                      </li>
                    }
                  </ul>

                  <div class="mt-5 flex flex-wrap gap-1.5">
                    @for (tech of akinatorProject.technologies; track tech) {
                      <app-tech-badge [name]="tech" />
                    }
                  </div>
                </div>

                <div class="mt-8 pt-5 border-t border-border flex items-center justify-between">
                  <a
                    [routerLink]="['/projects', akinatorProject.slug]"
                    class="text-xs font-mono font-semibold text-accent hover:underline flex items-center gap-1"
                  >
                    View Mathematical Case Study →
                  </a>
                  <a
                    [href]="akinatorProject.githubUrl"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-xs font-mono text-text-muted hover:text-text-main flex items-center gap-1"
                  >
                    Source ↗
                  </a>
                </div>
              </article>
            }

            <!-- 3. Horizon Tourist (Android) -->
            @if (touristProject) {
              <article class="rounded-2xl bg-surface border border-border hover:border-accent/50 transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between shadow-lg group">
                <div>
                  <div class="flex items-center justify-between gap-3 mb-4">
                    <span class="px-2.5 py-0.5 rounded text-[11px] font-mono font-semibold uppercase tracking-wider bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30">
                      {{ touristProject.badgeLabel }}
                    </span>
                    <app-status-pill [status]="touristProject.status" />
                  </div>

                  <h3 class="text-xl sm:text-2xl font-display font-bold text-text-main group-hover:text-accent transition-colors">
                    {{ touristProject.title }}
                  </h3>
                  <p class="mt-1 text-xs font-mono text-accent">
                    {{ touristProject.tagline }}
                  </p>

                  <p class="mt-3 text-sm text-text-muted font-body leading-relaxed">
                    {{ touristProject.summary }}
                  </p>

                  <ul class="mt-4 space-y-2 text-xs font-body text-text-main">
                    @for (highlight of touristProject.keyHighlights; track highlight) {
                      <li class="flex items-start gap-2">
                        <span class="text-accent font-bold">•</span>
                        <span>{{ highlight }}</span>
                      </li>
                    }
                  </ul>

                  <div class="mt-5 flex flex-wrap gap-1.5">
                    @for (tech of touristProject.technologies; track tech) {
                      <app-tech-badge [name]="tech" />
                    }
                  </div>
                </div>

                <div class="mt-8 pt-5 border-t border-border flex items-center justify-between">
                  <span class="text-xs font-mono text-text-muted">
                    Companion to Horizon Backend
                  </span>
                  <a
                    [href]="touristProject.githubUrl"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-xs font-mono text-text-muted hover:text-text-main flex items-center gap-1"
                  >
                    Repository ↗
                  </a>
                </div>
              </article>
            }
          </div>
        </div>
      </div>
    </section>
  `
})
export class ProjectsSectionComponent {
  private readonly projectService = inject(ProjectService);

  readonly horizonProject = this.projectService.getProjectBySlug('horizon');
  readonly akinatorProject = this.projectService.getProjectBySlug('bangla-akinator');
  readonly touristProject = this.projectService.getProjectBySlug('horizon-tourist');
}
