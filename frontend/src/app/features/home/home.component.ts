import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSectionComponent } from './sections/hero/hero.component';
import { ProjectsSectionComponent } from './sections/projects/projects.component';
import { SkillsSectionComponent } from './sections/skills/skills.component';
import { AboutSectionComponent } from './sections/about/about.component';
import { JourneySectionComponent } from './sections/journey/journey.component';
import { ContactSectionComponent } from './sections/contact/contact.component';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeroSectionComponent,
    ProjectsSectionComponent,
    SkillsSectionComponent,
    AboutSectionComponent,
    JourneySectionComponent,
    ContactSectionComponent
  ],
  template: `
    <div class="space-y-4">
      <app-hero-section />
      <app-projects-section />
      <app-skills-section />
      <app-about-section />
      <app-journey-section />
      <app-contact-section />
    </div>
  `
})
export class HomeComponent implements OnInit {
  private readonly seoService = inject(SeoService);

  ngOnInit(): void {
    this.seoService.updateTitle();
    this.seoService.updateDescription(
      'Portfolio of Mohammad Ali Sikder Ramim — Early-career Full-Stack Developer specializing in Java, Spring Boot, Angular, TypeScript, and SQL.'
    );
  }
}
