import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionHeaderComponent } from '../../../../shared/components/section-header/section-header.component';
import { PROFILE_DATA } from '../../../../core/data/profile.data';

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [CommonModule, SectionHeaderComponent],
  template: `
    <section id="about" class="py-16 sm:py-24 border-t border-border/60" aria-labelledby="about-header">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <app-section-header
          number="03"
          tag="About Me"
          title="From Biological Systems to Software Architecture"
          description="How an academic background in natural sciences combined with intensive software training to cultivate a disciplined, systemic approach to code."
        />

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <!-- Left Column: Biography Narrative (7 cols) -->
          <div class="lg:col-span-7 space-y-6 text-base sm:text-lg text-text-muted font-body leading-relaxed">
            @for (paragraph of profile.bioParagraphs; track paragraph) {
              <p>
                {{ paragraph }}
              </p>
            }

            <div class="pt-6 border-t border-border/80 flex flex-wrap gap-6 text-xs font-mono text-text-main">
              <div>
                <span class="text-text-dim block mb-1">Academic Background</span>
                <span class="font-semibold text-accent">BS (Honours) in Zoology</span><br>
                <span>University of Dhaka</span>
              </div>
              <div class="w-px h-10 bg-border hidden sm:block"></div>
              <div>
                <span class="text-text-dim block mb-1">Software Scholarship</span>
                <span class="font-semibold text-accent">Full-Stack Web Dev</span><br>
                <span>IsDB-BISEW IT Programme</span>
              </div>
              <div class="w-px h-10 bg-border hidden sm:block"></div>
              <div>
                <span class="text-text-dim block mb-1">Engineering Base</span>
                <span class="font-semibold text-accent">Dhaka, Bangladesh</span><br>
                <span>UTC+6 Timezone</span>
              </div>
            </div>
          </div>

          <!-- Right Column: Engineering Principles (5 cols) -->
          <div class="lg:col-span-5 space-y-4">
            <h3 class="text-xs font-mono font-semibold uppercase tracking-wider text-text-dim mb-4">
              Core Engineering Principles
            </h3>

            @for (principle of profile.principles; track principle.title) {
              <div class="p-5 rounded-xl bg-surface border border-border hover:border-accent/40 transition-colors">
                <h4 class="text-base font-display font-bold text-text-main flex items-center gap-2">
                  <span class="w-2 h-2 rounded-full bg-accent"></span>
                  {{ principle.title }}
                </h4>
                <p class="mt-2 text-xs sm:text-sm text-text-muted font-body leading-relaxed">
                  {{ principle.desc }}
                </p>
              </div>
            }
          </div>
        </div>
      </div>
    </section>
  `
})
export class AboutSectionComponent {
  readonly profile = PROFILE_DATA;
}
