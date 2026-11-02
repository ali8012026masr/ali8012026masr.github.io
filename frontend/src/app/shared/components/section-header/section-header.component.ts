import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="mb-12 md:mb-16">
      <div class="flex items-center gap-3 mb-3">
        <span class="text-xs font-mono font-semibold tracking-widest uppercase text-accent">
          {{ number() }}
        </span>
        <span class="w-10 h-px bg-accent/40"></span>
        <span class="text-xs font-mono tracking-wider uppercase text-text-muted">
          {{ tag() }}
        </span>
      </div>
      <h2 class="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-text-main tracking-tight leading-tight">
        {{ title() }}
      </h2>
      @if (description()) {
        <p class="mt-4 text-base sm:text-lg text-text-muted max-w-2xl font-body leading-relaxed">
          {{ description() }}
        </p>
      }
    </div>
  `
})
export class SectionHeaderComponent {
  readonly number = input.required<string>(); // e.g. "01"
  readonly tag = input.required<string>();    // e.g. "SELECTED PROJECTS"
  readonly title = input.required<string>();  // e.g. "Featured Engineering Work"
  readonly description = input<string>();     // Subtitle
}
