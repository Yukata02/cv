export interface PersonalProfile {
  name: string;
  titles: string[];
  avatar: string;
  tagline: string;
  summary: string;
  objective: string;
}

export interface BasicInfo {
  email: string;
  phone: string;
  location: string;
  availability?: string;
  languages: string[];
  interests: string[];
  description: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  currentYear?: string;
  gpa?: string;
  honors?: string[];
  description: string;
  courses: string[];
  type: 'university' | 'high_school';
}

export interface SkillCategory {
  category: string;
  iconName: string;
  description: string;
  skills: {
    name: string;
    level?: number;
    experience?: string;
    icon?: string;
    featured?: boolean;
  }[];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  detailedDescription?: string;
  category: 'Full Stack' | 'Frontend' | 'Mobile & AI' | 'Academic / Systems';
  technologies: string[];
  image: string;
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  highlights: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  type: 'Internship' | 'Leadership' | 'Academic Project' | 'Freelance' | 'Volunteer';
  description: string;
  bulletPoints: string[];
  skillsUsed: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  type: 'Certificate' | 'Award' | 'Competition' | 'Seminar & Workshop' | 'Organization';
  credentialUrl?: string;
  description: string;
  badge?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  username: string;
  icon: string;
}

export interface CVData {
  profile: PersonalProfile;
  basicInfo: BasicInfo;
  education: EducationItem[];
  skillCategories: SkillCategory[];
  projects: ProjectItem[];
  experience?: ExperienceItem[];
  achievements?: AchievementItem[];
  socials: SocialLink[];
  githubProfile: {
    username: string;
    url: string;
    bio: string;
    publicRepos: number;
    pinnedRepos: {
      name: string;
      description: string;
      language: string;
      stars: number;
      forks: number;
      url: string;
    }[];
  };
}
