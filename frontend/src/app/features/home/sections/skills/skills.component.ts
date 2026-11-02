import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionHeaderComponent } from '../../../../shared/components/section-header/section-header.component';
import { SKILL_GROUPS } from '../../../../core/data/skills.data';
import { SkillGroup } from '../../../../core/models/skill.model';

@Component({
  selector: 'app-skills-section',
  standalone: true,
  imports: [CommonModule, SectionHeaderComponent],
  template: `
    <section id="skills" class="py-16 sm:py-24 border-t border-border/60" aria-labelledby="skills-header">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <app-section-header
          number="02"
          tag="Technical Stack"
          title="Evidence-Based Capabilities"
          description="A transparent breakdown of technologies backed by concrete implementation in repository code. No arbitrary percentages or unverified claims."
        />

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          @for (group of skillGroups; track group.id) {
            <div
              class="rounded-2xl bg-surface border p-6 sm:p-8 transition-colors duration-200"
              [ngClass]="{
                'border-accent/40 shadow-md': group.tier === 'primary',
                'border-border': group.tier !== 'primary'
              }"
            >
              <!-- Group Header -->
              <div class="flex items-center justify-between gap-3 mb-6 pb-4 border-b border-border">
                <div>
                  <h3 class="text-xl font-display font-bold text-text-main">
                    {{ group.title }}
                  </h3>
                  <span class="text-xs font-mono text-accent">
                    {{ group.subtitle }}
                  </span>
                </div>
                <span
                  class="px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider font-semibold"
                  [ngClass]="{
                    'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30': group.tier === 'primary',
                    'bg-surface-hover text-text-muted border border-border': group.tier === 'tooling',
                    'bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20': group.tier === 'exploratory'
                  }"
                >
                  {{ group.tier }}
                </span>
              </div>

              <!-- Skills List -->
              <div class="space-y-4">
                @for (skill of group.skills; track skill.name) {
                  <div class="p-3.5 rounded-lg bg-canvas/70 border border-border/80 hover:border-accent/40 transition-colors">
                    <div class="flex items-center justify-between gap-2 mb-1">
                      <span class="text-sm font-mono font-semibold text-text-main flex items-center gap-2">
                        @if (skill.featured) {
                          <span class="w-1.5 h-1.5 rounded-full bg-accent inline-block"></span>
                        }
                        {{ skill.name }}
                      </span>
                      <span class="text-[11px] font-mono text-text-dim">
                        {{ skill.category }}
                      </span>
                    </div>
                    <p class="text-xs text-text-muted font-body leading-relaxed">
                      {{ skill.context }}
                    </p>
                  </div>
                }
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `
})
export class SkillsSectionComponent {
  readonly skillGroups: SkillGroup[] = SKILL_GROUPS;
}
