export type ProjectStatus =
  | 'implemented'
  | 'partially-implemented'
  | 'prototype'
  | 'planned';

export interface ProjectFeature {
  title: string;
  description: string;
  status: ProjectStatus;
  codeReference?: string;
}

export interface PortfolioProject {
  slug: string;
  title: string;
  tagline: string;
  category: string;
  featured: boolean;
  summary: string;
  overview: string;
  status: ProjectStatus;
  role: string;
  timeline: string;
  technologies: string[];
  keyHighlights: string[];
  features: ProjectFeature[];
  technicalChallenges: { challenge: string; solution: string }[];
  architecturalDecisions: { decision: string; rationale: string }[];
  lessonsLearned: string[];
  githubUrl: string;
  liveUrl?: string;
  demoCredentials?: { role: string; email: string; pass: string }[];
  coverGradient: string;
  badgeLabel: string;
}
