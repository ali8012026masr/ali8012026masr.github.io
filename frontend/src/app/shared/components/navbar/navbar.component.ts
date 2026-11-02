import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { ThemeToggleComponent } from '../theme-toggle/theme-toggle.component';
import { PROFILE_DATA } from '../../../core/data/profile.data';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, ThemeToggleComponent],
  template: `
    <header class="sticky top-0 z-50 w-full backdrop-blur-md bg-canvas/85 border-b border-border transition-colors duration-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        <!-- Logo / Identity -->
        <a
          routerLink="/"
          (click)="closeMobileMenu()"
          class="flex items-center gap-2.5 group focus:outline-hidden focus-visible:ring-2 focus-visible:ring-accent rounded-md p-1"
          aria-label="Mohammad Ali Sikder Ramim homepage"
        >
          <div class="w-8 h-8 rounded-lg bg-surface border border-border flex items-center justify-center font-mono font-bold text-accent text-sm group-hover:border-accent transition-colors">
            R
          </div>
          <div class="flex flex-col">
            <span class="font-display font-bold text-sm tracking-tight text-text-main group-hover:text-accent transition-colors">
              Ramim
            </span>
            <span class="text-[10px] font-mono tracking-wider text-text-muted uppercase">
              Full-Stack Dev
            </span>
          </div>
        </a>

        <!-- Desktop Navigation Links -->
        <nav class="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Main Navigation">
          <button
            type="button"
            (click)="scrollToSection('projects')"
            class="px-3 py-1.5 rounded-md text-sm font-medium text-text-muted hover:text-text-main hover:bg-surface transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-accent"
          >
            Projects
          </button>
          <button
            type="button"
            (click)="scrollToSection('skills')"
            class="px-3 py-1.5 rounded-md text-sm font-medium text-text-muted hover:text-text-main hover:bg-surface transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-accent"
          >
            Skills
          </button>
          <button
            type="button"
            (click)="scrollToSection('about')"
            class="px-3 py-1.5 rounded-md text-sm font-medium text-text-muted hover:text-text-main hover:bg-surface transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-accent"
          >
            About
          </button>
          <button
            type="button"
            (click)="scrollToSection('journey')"
            class="px-3 py-1.5 rounded-md text-sm font-medium text-text-muted hover:text-text-main hover:bg-surface transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-accent"
          >
            Journey
          </button>
          <button
            type="button"
            (click)="scrollToSection('contact')"
            class="px-3 py-1.5 rounded-md text-sm font-medium text-text-muted hover:text-text-main hover:bg-surface transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-accent"
          >
            Contact
          </button>
        </nav>

        <!-- Right Side Controls (Theme + CV Action + Mobile Toggle) -->
        <div class="flex items-center gap-3">
          <app-theme-toggle />

          <!-- CV Download Button (Desktop) -->
          <a
            [href]="profile.cvUrl"
            download="Mohammad-Ali-Sikder-Ramim-CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            class="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md text-xs font-mono font-medium bg-surface text-text-main border border-border hover:border-accent hover:text-accent transition-all duration-200 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-accent"
          >
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            CV.pdf
          </a>

          <!-- Mobile Hamburger Toggle -->
          <button
            type="button"
            (click)="toggleMobileMenu()"
            class="md:hidden p-2 rounded-md text-text-muted hover:text-text-main hover:bg-surface transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-accent"
            [attr.aria-expanded]="mobileMenuOpen()"
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
          >
            @if (mobileMenuOpen()) {
              <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            } @else {
              <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <line x1="3" y1="12" x2="21" y2="12"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <line x1="3" y1="18" x2="21" y2="18"/>
              </svg>
            }
          </button>
        </div>
      </div>

      <!-- Mobile Dropdown Menu -->
      @if (mobileMenuOpen()) {
        <div
          id="mobile-menu"
          class="md:hidden border-b border-border bg-canvas/95 backdrop-blur-lg px-4 pt-2 pb-6 space-y-2 animate-in fade-in slide-in-from-top-2 duration-150"
        >
          <button
            type="button"
            (click)="scrollToSection('projects')"
            class="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-text-muted hover:text-text-main hover:bg-surface transition-colors"
          >
            01. Projects
          </button>
          <button
            type="button"
            (click)="scrollToSection('skills')"
            class="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-text-muted hover:text-text-main hover:bg-surface transition-colors"
          >
            02. Technical Skills
          </button>
          <button
            type="button"
            (click)="scrollToSection('about')"
            class="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-text-muted hover:text-text-main hover:bg-surface transition-colors"
          >
            03. About Me
          </button>
          <button
            type="button"
            (click)="scrollToSection('journey')"
            class="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-text-muted hover:text-text-main hover:bg-surface transition-colors"
          >
            04. Education & Journey
          </button>
          <button
            type="button"
            (click)="scrollToSection('contact')"
            class="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-text-muted hover:text-text-main hover:bg-surface transition-colors"
          >
            05. Contact
          </button>

          <div class="pt-3 border-t border-border flex items-center justify-between">
            <a
              [href]="profile.cvUrl"
              download="Mohammad-Ali-Sikder-Ramim-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 px-4 py-2 rounded-md text-xs font-mono font-medium bg-surface text-text-main border border-border hover:border-accent hover:text-accent transition-colors"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download CV (PDF)
            </a>
          </div>
        </div>
      }
    </header>
  `
})
export class NavbarComponent {
  private readonly router = inject(Router);
  readonly profile = PROFILE_DATA;
  readonly mobileMenuOpen = signal<boolean>(false);

  toggleMobileMenu(): void {
    this.mobileMenuOpen.update((v) => !v);
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen.set(false);
  }

  scrollToSection(sectionId: string): void {
    this.closeMobileMenu();

    // If not on homepage, navigate to home first with fragment
    if (this.router.url !== '/' && !this.router.url.startsWith('/#')) {
      this.router.navigate(['/'], { fragment: sectionId }).then(() => {
        setTimeout(() => this.doScroll(sectionId), 100);
      });
    } else {
      this.doScroll(sectionId);
    }
  }

  private doScroll(sectionId: string): void {
    if (typeof document !== 'undefined') {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }
}
