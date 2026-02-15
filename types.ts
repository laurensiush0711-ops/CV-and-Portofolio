
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
  description: string;
  tags: string[];
  link?: string;
  metricLabel: string;
  metricValue: number;
  note?: string;
}

export interface Skill {
  name: string;
  level: number; // 0 to 100
  category: 'QA' | 'Data' | 'Tools';
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}
