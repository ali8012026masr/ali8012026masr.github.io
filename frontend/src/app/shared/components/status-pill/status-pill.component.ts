import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectStatus } from '../../../core/models/project.model';

@Component({
  selector: 'app-status-pill',
  standalone: true,
  imports: [CommonModule],
  template: `
    <span
      class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono font-medium tracking-wide border transition-colors"
      [ngClass]="getClasses()"
      [attr.aria-label]="'Feature status: ' + getLabel()"
    >
      <span class="w-1.5 h-1.5 rounded-full" [ngClass]="getDotClass()"></span>
      {{ getLabel() }}
    </span>
  `
})
export class StatusPillComponent {
  readonly status = input.required<ProjectStatus>();

  getLabel(): string {
    switch (this.status()) {
      case 'implemented':
        return 'Implemented';
      case 'partially-implemented':
        return 'Partially Implemented';
      case 'prototype':
        return 'Prototype';
      case 'planned':
        return 'Planned';
    }
  }

  getClasses(): string {
    switch (this.status()) {
      case 'implemented':
        return 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/30';
      case 'partially-implemented':
        return 'bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/30';
      case 'prototype':
        return 'bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 border-indigo-500/30';
      case 'planned':
        return 'bg-slate-500/10 text-slate-700 dark:text-slate-400 border-slate-500/30';
    }
  }

  getDotClass(): string {
    switch (this.status()) {
      case 'implemented':
        return 'bg-emerald-500 animate-pulse';
      case 'partially-implemented':
        return 'bg-amber-500';
      case 'prototype':
        return 'bg-indigo-500';
      case 'planned':
        return 'bg-slate-400';
    }
  }
}
