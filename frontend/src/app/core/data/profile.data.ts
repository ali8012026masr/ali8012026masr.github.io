import { ProfileData, SocialLink } from '../models/profile.model';

export const PROFILE_DATA: ProfileData = {
  name: 'Mohammad Ali Sikder Ramim',
  shortName: 'Ali',
  title: 'Full-Stack Developer',
  subtitle: 'Java · Spring Boot · Angular · TypeScript · SQL',
  location: 'Dhaka, Bangladesh',
  availability: 'Available for Developer Opportunities',
  isAvailable: true,
  email: 'mohammadalisikder-65-2019317881@zoo.du.ac.bd',
  github: 'https://github.com/ali8012026masr',
  linkedin: 'https://linkedin.com/in/ali8012026masr',
  cvUrl: 'documents/ali-cv.pdf',
  hasApprovedCv: true,
  bioParagraphs: [
    'I build type-safe, production-ready full-stack applications using modern Java, Spring Boot, Angular, TypeScript, and SQL. My architecture emphasizes decoupled layers, strict REST contracts, and defensible engineering choices.',
    'Bridging an academic science foundation with rigorous enterprise software training gives me a disciplined approach to complex systems—from multi-tenant role isolation to real-time GIS telemetry and cross-platform mobile companions.'
  ],
  principles: [
    {
      title: 'Type Safety & Strict Contracts',
      desc: 'End-to-end typing across domain DTOs, reactive forms, and API interfaces prevents runtime regressions.'
    },
    {
      title: 'Multi-Client Architecture',
      desc: 'Unified Spring Boot backend securely powering Web (Angular), Native Android, and Flutter mobile clients.'
    },
    {
      title: 'Zero-Blacklist Security',
      desc: 'Stateless JWT tokens bound cryptographically to user password hashes for instant revocation on credential change.'
    },
    {
      title: 'Accessible & Responsive Design',
      desc: 'Semantic HTML5, high-contrast typography, and fluid layouts optimized across mobile and desktop.'
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
    url: 'mailto:mohammadalisikder-65-2019317881@zoo.du.ac.bd',
    iconName: 'mail',
    isExternal: false
  }
];
