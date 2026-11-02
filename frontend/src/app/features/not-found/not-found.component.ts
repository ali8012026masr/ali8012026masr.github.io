import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="min-h-[70vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 text-center">
      <div class="max-w-md mx-auto space-y-6">
        <span class="inline-block px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-widest bg-accent/15 text-accent border border-accent/30">
          404 Error
        </span>

        <h1 class="text-4xl sm:text-6xl font-display font-bold text-text-main tracking-tight">
          Page Not Found
        </h1>

        <p class="text-sm sm:text-base text-text-muted font-body leading-relaxed">
          The requested route does not exist or was relocated. Navigate back to explore my verified engineering projects.
        </p>

        <div class="pt-4">
          <a
            routerLink="/"
            class="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-xs font-mono font-semibold bg-accent text-white hover:bg-accent-hover transition-colors shadow-sm focus:outline-hidden focus-visible:ring-2 focus-visible:ring-accent"
          >
            ← Return to Base
          </a>
        </div>
      </div>
    </div>
  `
})
export class NotFoundComponent implements OnInit {
  private readonly seoService = inject(SeoService);

  ngOnInit(): void {
    this.seoService.updateTitle('404 Page Not Found');
  }
}
