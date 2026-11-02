import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionHeaderComponent } from '../../../../shared/components/section-header/section-header.component';
import { JOURNEY_TIMELINE } from '../../../../core/data/journey.data';
import { TimelineItem } from '../../../../core/models/profile.model';

@Component({
  selector: 'app-journey-section',
  standalone: true,
  imports: [CommonModule, SectionHeaderComponent],
  template: `
    <section id="journey" class="py-16 sm:py-24 border-t border-border/60" aria-labelledby="journey-header">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <app-section-header
          number="04"
          tag="Journey"
          title="Education & Technical Evolution"
          description="A chronological timeline tracing my academic science education, immersive full-stack scholarship training, and software architecture milestones."
        />

        <div class="relative pl-6 sm:pl-8 border-l-2 border-border/80 ml-2 sm:ml-4 space-y-12">
          @for (item of timeline; track item.title) {
            <div class="relative group">
              <!-- Timeline Pin -->
              <div class="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-surface border-2 border-accent group-hover:scale-125 transition-transform duration-200"></div>

              <!-- Content Card -->
              <div class="rounded-xl bg-surface border border-border p-6 hover:border-accent/40 transition-colors shadow-sm">
                <!-- Period & Badge -->
                <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div class="flex items-center gap-2">
                    <span class="text-xs font-mono font-semibold text-accent">
                      {{ item.year }}
                    </span>
                    <span class="text-xs text-text-dim font-mono">• {{ item.period }}</span>
                  </div>
                  <span class="px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider bg-canvas border border-border text-text-muted">
                    {{ item.badge }}
                  </span>
                </div>

                <!-- Title & Institution -->
                <h3 class="text-xl font-display font-bold text-text-main">
                  {{ item.title }}
                </h3>
                <p class="text-xs font-mono text-text-muted mb-3">
                  {{ item.institution }}
                </p>

                <!-- Description -->
                <p class="text-sm text-text-muted font-body leading-relaxed mb-4">
                  {{ item.description }}
                </p>

                <!-- Tags -->
                <div class="flex flex-wrap gap-1.5">
                  @for (tag of item.tags; track tag) {
                    <span class="px-2 py-0.5 rounded text-[11px] font-mono bg-canvas border border-border text-text-dim">
                      {{ tag }}
                    </span>
                  }
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `
})
export class JourneySectionComponent {
  readonly timeline: TimelineItem[] = JOURNEY_TIMELINE;
}
