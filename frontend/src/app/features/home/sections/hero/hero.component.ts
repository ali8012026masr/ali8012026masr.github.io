import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TerminalSnippetComponent } from '../../../../shared/components/terminal-snippet/terminal-snippet.component';
import { PROFILE_DATA } from '../../../../core/data/profile.data';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule, TerminalSnippetComponent],
  template: `
    <section class="relative pt-12 sm:pt-20 lg:pt-28 pb-16 sm:pb-24 overflow-hidden" aria-labelledby="hero-title">
      <!-- Subtle ambient gradient background glow -->
      <div class="absolute -top-40 left-1/2 -translate-x-1/2 w-96 h-96 sm:w-[600px] sm:h-[600px] bg-accent/5 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <!-- Left Column: Copy & Actions (7 cols) -->
          <div class="lg:col-span-7 space-y-6 sm:space-y-8">
            <!-- Availability Beacon -->
            <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface border border-border text-xs font-mono">
              <span class="relative flex h-2 w-2">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span class="text-text-muted">{{ profile.availability }}</span>
            </div>

            <!-- Main Heading -->
            <div>
              <p class="text-xs sm:text-sm font-mono uppercase tracking-widest text-accent mb-2">
                Full-Stack Developer
              </p>
              <h1
                id="hero-title"
                class="text-4xl sm:text-6xl lg:text-7xl font-display font-bold text-text-main tracking-tight leading-[1.08]"
              >
                Building resilient systems with
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-teal-400 to-green-600">
                  Java, Spring Boot
                </span>
                &amp; Angular.
              </h1>
            </div>

            <!-- Subtitle -->
            <p class="text-base sm:text-xl text-text-muted max-w-2xl font-body leading-relaxed">
              Hi, I'm <strong class="text-text-main font-semibold">{{ profile.name }}</strong>.
              I build enterprise-grade software with modern Spring Boot layered architectures,
              fine-grained reactive Angular frontends, zero-blacklist JWT security, and verified database grounding.
            </p>

            <!-- Action CTAs -->
            <div class="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                class="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg font-mono text-sm font-semibold bg-accent text-white hover:bg-accent-hover shadow-lg shadow-accent/20 transition-all duration-200 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent"
              >
                Explore Projects
                <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path d="M7 17l9.2-9.2M17 17V7H7"/>
                </svg>
              </a>

              <a
                [href]="profile.cvUrl"
                download="Mohammad-Ali-Sikder-Ramim-CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 px-5 py-3.5 rounded-lg font-mono text-sm font-medium bg-surface hover:bg-surface-hover text-text-main border border-border hover:border-accent/40 transition-all duration-200 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-accent"
              >
                <svg class="w-4 h-4 text-text-muted" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                Download CV
              </a>

              <a
                [href]="profile.github"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 px-4 py-3.5 rounded-lg font-mono text-sm text-text-muted hover:text-text-main transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-accent"
              >
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
                GitHub
                <span class="text-xs">↗</span>
              </a>
            </div>

            <!-- Primary Technology Strip -->
            <div class="pt-4 border-t border-border/80">
              <span class="text-[11px] font-mono uppercase tracking-wider text-text-dim block mb-2.5">
                Primary Core Focus
              </span>
              <div class="flex flex-wrap items-center gap-2">
                <span class="px-2.5 py-1 rounded bg-surface border border-border text-xs font-mono font-medium text-emerald-600 dark:text-emerald-400">
                  Java 25
                </span>
                <span class="px-2.5 py-1 rounded bg-surface border border-border text-xs font-mono font-medium text-emerald-600 dark:text-emerald-400">
                  Spring Boot 4.1
                </span>
                <span class="px-2.5 py-1 rounded bg-surface border border-border text-xs font-mono font-medium text-emerald-600 dark:text-emerald-400">
                  Angular 22
                </span>
                <span class="px-2.5 py-1 rounded bg-surface border border-border text-xs font-mono font-medium text-text-muted">
                  TypeScript 6
                </span>
                <span class="px-2.5 py-1 rounded bg-surface border border-border text-xs font-mono font-medium text-text-muted">
                  PostgreSQL 16
                </span>
                <span class="px-2.5 py-1 rounded bg-surface border border-border text-xs font-mono font-medium text-text-muted">
                  Spring Security 7
                </span>
              </div>
            </div>
          </div>

          <!-- Right Column: Interactive Terminal (5 cols) -->
          <div class="lg:col-span-5">
            <app-terminal-snippet />
          </div>
        </div>
      </div>
    </section>
  `
})
export class HeroSectionComponent {
  readonly profile = PROFILE_DATA;
}
