import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tech-badge',
  standalone: true,
  imports: [CommonModule],
  template: `
    <span
      class="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-mono font-medium border transition-colors duration-200"
      [ngClass]="getStyleClasses()"
    >
      {{ name() }}
    </span>
  `
})
export class TechBadgeComponent {
  readonly name = input.required<string>();
  readonly highlight = input<boolean>(false);

  getStyleClasses(): string {
    if (this.highlight()) {
      return 'bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border-emerald-500/40 shadow-xs';
    }
    return 'bg-surface text-text-muted hover:text-text-main border-border hover:border-accent/40';
  }
}
