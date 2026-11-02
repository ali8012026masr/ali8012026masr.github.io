import { Injectable, signal } from '@angular/core';
import { PortfolioProject } from '../models/project.model';
import { PROJECTS_DATA } from '../data/projects.data';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private readonly projects = signal<PortfolioProject[]>(PROJECTS_DATA);

  getAllProjects(): PortfolioProject[] {
    return this.projects();
  }

  getFeaturedProjects(): PortfolioProject[] {
    return this.projects().filter((p) => p.featured);
  }

  getProjectBySlug(slug: string): PortfolioProject | undefined {
    return this.projects().find((p) => p.slug === slug);
  }
}
