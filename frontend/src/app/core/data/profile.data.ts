import { ProfileData, SocialLink } from '../models/profile.model';

export const PROFILE_DATA: ProfileData = {
  name: 'Mohammad Ali Sikder Ramim',
  title: 'Full-Stack Developer',
  subtitle: 'Java · Spring Boot · Angular · TypeScript · SQL',
  location: 'Dhaka, Bangladesh',
  availability: 'Available for Developer Opportunities',
  isAvailable: true,
  email: 'ramim.dev@example.com',
  github: 'https://github.com/ali8012026masr',
  linkedin: 'https://linkedin.com/in/ali8012026masr',
  cvUrl: 'documents/ramim-cv.pdf',
  hasApprovedCv: true,
  bioParagraphs: [
    'I am an early-career Full-Stack Developer with an academic foundation in Zoology (BS Honours, University of Dhaka) and rigorous, intensive software engineering training from the IsDB-BISEW IT Scholarship Programme.',
    'My core engineering focus is building robust, production-grade applications using modern Java, Spring Boot, Angular, TypeScript, and SQL. I design layered systems with clean separation of concerns, secure stateless authentication, and responsive, accessible user interfaces.',
    'Rather than relying on superficial boilerplate, I focus on practical problem solving: multi-tenant role-based architectures, zero-trust token invalidation, context-grounded AI integrations, and high-precision spatial tracking.'
  ],
  principles: [
    {
      title: 'Type Safety & Strict Contracts',
      desc: 'End-to-end type safety across domain DTOs, reactive forms, and API interfaces prevents runtime regressions.'
    },
    {
      title: 'Context-Grounded Engineering',
      desc: 'Grounding generative AI models against active database inventory rather than open hallucination.'
    },
    {
      title: 'Zero-Blacklist Security',
      desc: 'Stateless JWT tokens bound cryptographically to password hashes for instant revocation upon credential changes.'
    },
    {
      title: 'Accessible & Restrained Design',
      desc: 'High-contrast typography, semantic HTML5, keyboard navigation, and responsive layouts that perform seamlessly on any screen.'
    }
  ]
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'GitHub',
    url: 'https://github.com/ali8012026masr',
    iconName: 'github',
    isExternal: true
  },
  {
    label: 'LinkedIn',
    url: 'https://linkedin.com/in/ali8012026masr',
    iconName: 'linkedin',
    isExternal: true
  },
  {
    label: 'Email',
    url: 'mailto:ramim.dev@example.com',
    iconName: 'mail',
    isExternal: false
  }
];
