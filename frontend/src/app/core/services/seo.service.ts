import { Injectable, inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private readonly titleService = inject(Title);
  private readonly metaService = inject(Meta);

  private readonly defaultTitle = 'Mohammad Ali Sikder Ramim — Full-Stack Developer';
  private readonly defaultDescription =
    'Portfolio of Mohammad Ali Sikder Ramim — Early-career Full-Stack Developer specializing in Java, Spring Boot, Angular, TypeScript, and SQL.';

  updateTitle(title?: string): void {
    if (title) {
      this.titleService.setTitle(`${title} | Mohammad Ali Sikder Ramim`);
    } else {
      this.titleService.setTitle(this.defaultTitle);
    }
  }

  updateDescription(description?: string): void {
    const desc = description || this.defaultDescription;
    this.metaService.updateTag({ name: 'description', content: desc });
    this.metaService.updateTag({ property: 'og:description', content: desc });
  }

  setCanonical(url: string): void {
    this.metaService.updateTag({ property: 'og:url', content: url });
  }
}
