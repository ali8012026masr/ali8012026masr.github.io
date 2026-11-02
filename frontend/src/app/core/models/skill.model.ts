export type SkillTier = 'primary' | 'tooling' | 'exploratory';

export interface SkillItem {
  name: string;
  category: string;
  tier: SkillTier;
  context: string;
  iconName?: string;
  featured?: boolean;
}

export interface SkillGroup {
  id: string;
  title: string;
  subtitle: string;
  tier: SkillTier;
  skills: SkillItem[];
}
