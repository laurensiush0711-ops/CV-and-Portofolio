
export interface Experience {
  company: string;
  role: string;
  period: string;
  location?: string;
  description: string[];
  isQA: boolean;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  location: string;
  highlights?: string[];
}

export interface Project {
  title: string;
  period: string;
  description: string; // Short version for cards
  summary?: string;    // Long version for case study
  goals?: string;
  process?: string;
  output?: string;
  achievements?: string[];
  tags: string[];
  link?: string;
  metricLabel: string;
  metricValue: number;
  note?: string;
}

export interface Skill {
  name: string;
  level: number; // 0 to 100
  category: 'QA' | 'Data' | 'Tools' | 'Soft Skill';
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}