import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionHeaderComponent } from '../../../../shared/components/section-header/section-header.component';
import { PROFILE_DATA, SOCIAL_LINKS } from '../../../../core/data/profile.data';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [CommonModule, SectionHeaderComponent],
  template: `
    <section id="contact" class="py-16 sm:py-24 border-t border-border/60" aria-labelledby="contact-header">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <app-section-header
          number="05"
          tag="Direct Connect"
          title="Start a Conversation"
          description="Whether you have an open Junior Full-Stack / Java / Angular role, a technical inquiry, or want to explore my code."
        />

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <!-- Left Column: Primary Contact Card (7 cols) -->
          <div class="lg:col-span-7 rounded-2xl bg-surface border border-border p-6 sm:p-10 flex flex-col justify-between shadow-xl">
            <div>
              <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono text-emerald-600 dark:text-emerald-400 mb-6">
                <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Currently actively considering junior full-stack &amp; developer opportunities
              </div>

              <h3 class="text-2xl sm:text-3xl font-display font-bold text-text-main mb-4">
                Let's discuss how my Java, Spring Boot, and Angular skills can contribute to your team.
              </h3>
              <p class="text-sm sm:text-base text-text-muted font-body leading-relaxed mb-8">
                I am based in Dhaka, Bangladesh and open to on-site, hybrid, and remote engineering positions worldwide.
              </p>
            </div>

            <!-- Email Action Box -->
            <div class="p-4 sm:p-6 rounded-xl bg-canvas border border-border flex flex-col sm:flex-row items-center justify-between gap-4">
              <div class="space-y-1 text-center sm:text-left">
                <span class="text-xs font-mono uppercase tracking-wider text-text-dim">
                  Direct Email Address
                </span>
                <p class="font-mono text-sm sm:text-base font-semibold text-text-main">
                  {{ profile.email }}
                </p>
              </div>

              <div class="flex items-center gap-2 w-full sm:w-auto">
                <a
                  [href]="'mailto:' + profile.email"
                  class="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-mono font-semibold bg-accent text-white hover:bg-accent-hover transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <span>Send Email</span>
                  <span>↗</span>
                </a>

                <button
                  type="button"
                  (click)="copyEmail()"
                  class="inline-flex items-center justify-center px-3.5 py-2.5 rounded-lg text-xs font-mono font-medium bg-surface hover:bg-surface-hover text-text-main border border-border transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-accent"
                  [attr.aria-label]="emailCopied() ? 'Email copied' : 'Copy email to clipboard'"
                >
                  @if (emailCopied()) {
                    <span class="text-emerald-500">✓ Copied</span>
                  } @else {
                    <span>Copy</span>
                  }
                </button>
              </div>
            </div>
          </div>

          <!-- Right Column: Verification & Profiles (5 cols) -->
          <div class="lg:col-span-5 rounded-2xl bg-surface border border-border p-6 sm:p-8 flex flex-col justify-between shadow-xl space-y-6">
            <div>
              <h4 class="text-sm font-mono font-semibold uppercase tracking-wider text-text-main mb-3">
                Verified Channels
              </h4>
              <p class="text-xs text-text-muted font-body leading-relaxed mb-6">
                Inspect public repositories, test suites, and project commits directly on GitHub.
              </p>

              <div class="space-y-3">
                @for (link of socialLinks; track link.label) {
                  <a
                    [href]="link.url"
                    [target]="link.isExternal ? '_blank' : '_self'"
                    [rel]="link.isExternal ? 'noopener noreferrer' : ''"
                    class="p-3.5 rounded-xl bg-canvas border border-border hover:border-accent/50 flex items-center justify-between text-xs sm:text-sm font-mono text-text-main hover:text-accent transition-colors group"
                  >
                    <span class="flex items-center gap-2.5 font-medium">
                      {{ link.label }}
                    </span>
                    <span class="text-text-dim group-hover:text-accent transition-colors">
                      {{ link.isExternal ? '↗' : '→' }}
                    </span>
                  </a>
                }
              </div>
            </div>

            <!-- CV Download Banner -->
            <div class="pt-6 border-t border-border">
              <a
                [href]="profile.cvUrl"
                download="Mohammad-Ali-Sikder-Ramim-CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                class="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-mono font-medium bg-surface-hover hover:bg-surface text-text-main border border-border hover:border-accent transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-accent"
              >
                <svg class="w-4 h-4 text-accent" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                Download Curriculum Vitae (PDF)
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ContactSectionComponent {
  readonly profile = PROFILE_DATA;
  readonly socialLinks = SOCIAL_LINKS;
  readonly emailCopied = signal<boolean>(false);

  copyEmail(): void {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(this.profile.email).then(() => {
        this.emailCopied.set(true);
        setTimeout(() => this.emailCopied.set(false), 2000);
      });
    }
  }
}
