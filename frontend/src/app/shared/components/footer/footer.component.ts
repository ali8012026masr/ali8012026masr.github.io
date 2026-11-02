import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PROFILE_DATA, SOCIAL_LINKS } from '../../../core/data/profile.data';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <footer class="w-full bg-surface/50 border-t border-border mt-20 transition-colors duration-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <!-- Col 1: Identity -->
          <div class="md:col-span-2 space-y-3">
            <div class="flex items-center gap-2">
              <span class="w-2.5 h-2.5 rounded-full bg-accent inline-block"></span>
              <span class="font-display font-bold text-lg text-text-main tracking-tight">
                {{ profile.name }}
              </span>
            </div>
            <p class="text-sm font-mono text-text-muted">
              {{ profile.subtitle }}
            </p>
            <p class="text-xs text-text-dim max-w-md font-body leading-relaxed">
              Early-career full-stack developer committed to rigorous architecture, defensible engineering decisions, and type-safe systems.
            </p>
          </div>

          <!-- Col 2: Navigation Links -->
          <div class="space-y-3">
            <h4 class="text-xs font-mono font-semibold uppercase tracking-wider text-text-main">
              Sections
            </h4>
            <ul class="space-y-2 text-xs font-mono text-text-muted">
              <li>
                <a href="#projects" class="hover:text-accent transition-colors">01. Projects</a>
              </li>
              <li>
                <a href="#skills" class="hover:text-accent transition-colors">02. Skills</a>
              </li>
              <li>
                <a href="#about" class="hover:text-accent transition-colors">03. About</a>
              </li>
              <li>
                <a href="#journey" class="hover:text-accent transition-colors">04. Journey</a>
              </li>
              <li>
                <a href="#contact" class="hover:text-accent transition-colors">05. Contact</a>
              </li>
            </ul>
          </div>

          <!-- Col 3: Repositories & Connect -->
          <div class="space-y-3">
            <h4 class="text-xs font-mono font-semibold uppercase tracking-wider text-text-main">
              Connect
            </h4>
            <ul class="space-y-2 text-xs font-mono text-text-muted">
              @for (link of socialLinks; track link.label) {
                <li>
                  <a
                    [href]="link.url"
                    [target]="link.isExternal ? '_blank' : '_self'"
                    [rel]="link.isExternal ? 'noopener noreferrer' : ''"
                    class="hover:text-accent transition-colors flex items-center gap-1.5"
                  >
                    {{ link.label }}
                    @if (link.isExternal) {
                      <span class="text-[10px]">↗</span>
                    }
                  </a>
                </li>
              }
            </ul>
          </div>
        </div>

        <!-- Bottom Bar -->
        <div class="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-text-dim">
          <div>
            &copy; {{ currentYear }} Mohammad Ali Sikder Ramim. Open source on
            <a
              href="https://github.com/ali8012026masr"
              target="_blank"
              rel="noopener noreferrer"
              class="text-text-muted hover:text-accent underline transition-colors"
            >
              GitHub
            </a>.
          </div>
          <div class="flex items-center gap-4">
            <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface border border-border text-[11px]">
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              Angular 22 · Tailwind CSS v4
            </span>
            <button
              type="button"
              (click)="scrollToTop()"
              class="hover:text-text-main transition-colors focus:outline-hidden focus-visible:ring-1 focus-visible:ring-accent"
              aria-label="Back to top"
            >
              ↑ Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {
  readonly profile = PROFILE_DATA;
  readonly socialLinks = SOCIAL_LINKS;
  readonly currentYear = new Date().getFullYear();

  scrollToTop(): void {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
}
