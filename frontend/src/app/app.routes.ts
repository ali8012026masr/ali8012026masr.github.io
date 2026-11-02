import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/home/home.component').then((m) => m.HomeComponent),
    title: 'Mohammad Ali Sikder Ramim — Full-Stack Developer'
  },
  {
    path: 'projects/horizon',
    loadComponent: () =>
      import(
        './features/projects/horizon-case-study/horizon-case-study.component'
      ).then((m) => m.HorizonCaseStudyComponent),
    title: 'Horizon Travel Marketplace Case Study — Ramim'
  },
  {
    path: 'projects/bangla-akinator',
    loadComponent: () =>
      import(
        './features/projects/akinator-case-study/akinator-case-study.component'
      ).then((m) => m.AkinatorCaseStudyComponent),
    title: 'Bangla Akinator Algorithmic Case Study — Ramim'
  },
  {
    path: '**',
    loadComponent: () =>
      import('./features/not-found/not-found.component').then(
        (m) => m.NotFoundComponent
      ),
    title: '404 Page Not Found — Ramim'
  }
];
