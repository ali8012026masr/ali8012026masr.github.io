import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StatusPillComponent } from '../../../shared/components/status-pill/status-pill.component';
import { TechBadgeComponent } from '../../../shared/components/tech-badge/tech-badge.component';
import { ProjectService } from '../../../core/services/project.service';
import { SeoService } from '../../../core/services/seo.service';
import { PortfolioProject } from '../../../core/models/project.model';

@Component({
  selector: 'app-akinator-case-study',
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
            <span class="px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider bg-teal-500/15 text-teal-600 dark:text-teal-400 border border-teal-500/30">
              {{ project.badgeLabel }}
            </span>
            <app-status-pill [status]="project.status" />
          </div>

          <h1 class="text-3xl sm:text-5xl font-display font-bold text-text-main tracking-tight leading-tight">
            {{ project.title }}
          </h1>

          <p class="mt-3 text-lg font-mono text-accent">
            {{ project.tagline }}
          </p>

          <p class="mt-4 text-base sm:text-lg text-text-muted leading-relaxed max-w-3xl">
            {{ project.overview }}
          </p>

          <div class="mt-6 flex flex-wrap gap-2">
            @for (tech of project.technologies; track tech) {
              <app-tech-badge [name]="tech" />
            }
          </div>
        </header>

        <!-- Main Body -->
        <div class="space-y-16">
          <!-- 1. The Mathematical Model -->
          <section>
            <h2 class="text-2xl sm:text-3xl font-display font-bold text-text-main mb-6">
              1. Mathematical Foundations &amp; Information Theory
            </h2>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="p-6 rounded-xl bg-surface border border-border space-y-3">
                <h3 class="text-base font-mono font-bold text-accent">
                  Shannon Entropy &amp; Information Gain (EIG)
                </h3>
                <p class="text-xs sm:text-sm text-text-muted leading-relaxed">
                  To identify candidate personalities in the minimum number of questions, the engine calculates the Shannon entropy across candidate distributions and greedily selects the question that maximizes Expected Information Gain:
                </p>
                <div class="p-3 rounded bg-canvas border border-border font-mono text-xs text-text-main">
                  IG(q) = H(C) - Σ P(a) · H(C | a)
                </div>
                <p class="text-xs text-text-dim">
                  Implemented in <code class="text-text-main">question_selection.py</code>.
                </p>
              </div>

              <div class="p-6 rounded-xl bg-surface border border-border space-y-3">
                <h3 class="text-base font-mono font-bold text-accent">
                  Bayesian Log-Sum-Exp Stabilization
                </h3>
                <p class="text-xs sm:text-sm text-text-muted leading-relaxed">
                  As questions accumulate past 15+, multiplying floating-point probabilities triggers numeric underflow. All probability updates operate strictly in log-space:
                </p>
                <div class="p-3 rounded bg-canvas border border-border font-mono text-xs text-text-main">
                  log P(C_i | a) = log P(C_i) + log P(a | f(C_i, q)) - log Z
                </div>
                <p class="text-xs text-text-dim">
                  Normalized safely using <code class="text-text-main">log-sum-exp</code> in <code class="text-text-main">game_engine.py</code>.
                </p>
              </div>
            </div>
          </section>

          <!-- 2. System Architecture -->
          <section>
            <h2 class="text-2xl sm:text-3xl font-display font-bold text-text-main mb-6">
              2. Asynchronous Architecture &amp; Moderation
            </h2>

            <div class="p-6 rounded-xl bg-surface border border-border space-y-4">
              <p class="text-sm text-text-muted leading-relaxed">
                The engine is wrapped in an asynchronous FastAPI microservice backed by MongoDB 7.0 for session persistence and candidate catalogs:
              </p>

              <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono">
                <div class="p-3.5 rounded-lg bg-canvas border border-border">
                  <span class="text-accent font-semibold block mb-1">FastAPI Backend</span>
                  <span class="text-text-muted">Stateless session evaluation with async motor driver endpoints.</span>
                </div>
                <div class="p-3.5 rounded-lg bg-canvas border border-border">
                  <span class="text-accent font-semibold block mb-1">Bengali NFC Normalization</span>
                  <span class="text-text-muted">Unicode NFC sanitization preventing duplicate Bengali spellings.</span>
                </div>
                <div class="p-3.5 rounded-lg bg-canvas border border-border">
                  <span class="text-accent font-semibold block mb-1">Simulation Testing</span>
                  <span class="text-text-muted">26 unit and end-to-end simulation tests verifying convergence.</span>
                </div>
              </div>
            </div>
          </section>

          <!-- 3. Verified Features Table -->
          <section>
            <h2 class="text-2xl sm:text-3xl font-display font-bold text-text-main mb-4">
              3. Verified Implementation Matrix
            </h2>
            <div class="border border-border rounded-xl overflow-hidden bg-surface">
              <div class="overflow-x-auto">
                <table class="w-full text-left text-xs font-mono">
                  <thead class="bg-canvas border-b border-border text-text-dim">
                    <tr>
                      <th class="p-3.5 sm:p-4">Feature</th>
                      <th class="p-3.5 sm:p-4">Description</th>
                      <th class="p-3.5 sm:p-4">Status</th>
                      <th class="p-3.5 sm:p-4">Source Reference</th>
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
              View Repository on GitHub ↗
            </a>
          </footer>
        </div>
      </article>
    }
  `
})
export class AkinatorCaseStudyComponent implements OnInit {
  private readonly projectService = inject(ProjectService);
  private readonly seoService = inject(SeoService);

  readonly project: PortfolioProject | undefined = this.projectService.getProjectBySlug('bangla-akinator');

  ngOnInit(): void {
    if (this.project) {
      this.seoService.updateTitle('Bangla Akinator Algorithmic Case Study');
      this.seoService.updateDescription(
        'Information theory and Bayesian probabilistic guessing engine case study: Shannon Entropy, Expected Information Gain, and log-sum-exp normalization.'
      );
    }
  }
}
