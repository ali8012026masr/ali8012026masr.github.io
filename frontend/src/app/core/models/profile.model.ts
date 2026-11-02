export interface SocialLink {
  label: string;
  url: string;
  iconName: string;
  isExternal: boolean;
}

export interface TimelineItem {
  year: string;
  period: string;
  title: string;
  institution: string;
  badge: string;
  description: string;
  tags: string[];
}

export interface ProfileData {
  name: string;
  title: string;
  subtitle: string;
  location: string;
  availability: string;
  isAvailable: boolean;
  email: string;
  github: string;
  linkedin: string;
  cvUrl: string;
  hasApprovedCv: boolean;
  bioParagraphs: string[];
  principles: { title: string; desc: string }[];
}
