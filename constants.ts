
import { Experience, Project, Skill, Education } from './types';

export const CV_DATA = {
  name: "Laurensius Haryo Radyobaskoro P",
  targetRole: "Data Analyst / AI Specialist",
  currentRole: "QA Junior transitioning to Data Analytics",
  bio: "I am a detail-oriented Data Analyst with a strong background in game design and quality assurance. I have diverse experience in the gaming industry, including roles as a full-time Game Designer at Wisgame for 1 year and a QA Tester at Forgefun for over a year, supporting multiple in-development and live projects. As a QA Tester, I ensured product quality through systematic testing and structured reporting, identifying over 120 bugs and significantly enhancing game stability. My analytical skills facilitated informed decision-making by employing data-driven approaches to detect patterns in bugs and inconsistencies. I am currently enhancing my skills in data cleaning, exploratory analysis, and data visualization to transition effectively into data analytics. I am eager to leverage my unique experiences to drive reliable and high-quality outcomes in data analytics.",
  email: "laurensiush.0711@gmail.com",
  linkedin: "bit.ly/LaurensiusHaryoLinkedn",
  github: "github.com/Parad5050",
  location: "Jakarta, Indonesia",
  phone: "(+62) 851-6178-7119",
  discord: "Parad5050",
  hobbies: ["Data Visualization", "Game Theory", "Sci-Fi Novels", "Manga"]
};

export const SKILLS: Skill[] = [
  // Analytical & Design Category
  { name: "Game Balancing (Excel/Math)", level: 95, category: 'Data' },
  { name: "AI Prompt Engineering", level: 90, category: 'Data' },
  { name: "Logic & Formula Design", level: 85, category: 'Data' },
  { name: "SQL & Database Basics", level: 75, category: 'Data' },
  { name: "Level Design Metrics", level: 80, category: 'Data' },
  // QA Category
  { name: "Manual Testing", level: 90, category: 'QA' },
  { name: "Bug Reporting & Analysis", level: 95, category: 'QA' },
  { name: "API Testing (Postman)", level: 75, category: 'QA' },
  { name: "Firebase Data Validation", level: 80, category: 'QA' },
  // Tools Category
  { name: "Notion", level: 95, category: 'Tools' },
  { name: "Microsoft Excel", level: 90, category: 'Tools' },
  { name: "Figma", level: 60, category: 'Tools' },
  { name: "Jira", level: 75, category: 'Tools' },
  { name: "Unity", level: 60, category: 'Tools' }
];

export const EDUCATION: Education[] = [
  // Rise Up Studio related incubator entry removed as requested
];

export const EXPERIENCES: Experience[] = [
  {
    company: "Forgefun (Avarik Saga)",
    role: "Quality Assurance & Prompt Engineer",
    period: "Aug 2023 - Nov 2024",
    location: "Jakarta, Indonesia",
    isQA: true,
    description: [
      "Analyzed system mechanics and balancing through rigorous QA testing cycles.",
      "Utilized Postman for API validation and Firebase for real-time data integrity checks.",
      "Engineered complex AI prompts and performed regression testing on chatbot responses.",
      "Developed data-driven bug reports that streamlined the developer fixing process.",
      "Optimized AI character logic through iterative prompting and behavior analysis."
    ]
  },
  {
    company: "Wisgame (PT. Bintang Digital Asia)",
    role: "Game Designer",
    period: "Jun 2022 - Jun 2023",
    location: "Jakarta, Indonesia",
    isQA: false,
    description: [
      "Created complex formulas and balancing spreadsheets for game economies.",
      "Transformed qualitative project goals into quantitative technical requirements.",
      "Managed project data integrity through detailed documentation and storyboarding.",
      "Designed character stats and progression paths using mathematical models."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "AI Chat Analysis & Prompting",
    description: "Iterative testing and prompt optimization for AI character chatbots, ensuring narrative consistency and logical reliability.",
    tags: ["Data Analysis", "Prompt Engineering", "QA"],
    metricLabel: "Reliability",
    metricValue: 92,
    note: "Work-related (NDA 2024)"
  },
  {
    title: "Thaumaturgy: Cast and Clash",
    description: "A thesis project where I balanced complex combat stats and analyzed playtest data to improve player retention.",
    tags: ["Data Modeling", "Game Design", "Unity"],
    metricLabel: "Balance Score",
    metricValue: 88,
    link: "https://www.notion.so/afa815ade0684865a331e6b64d0889b9"
  },
  {
    title: "Guntur Goes To School",
    description: "Academic project involving educational content mapping and user progression tracking.",
    tags: ["Analytics", "Educational Design"],
    metricLabel: "Success Rate",
    metricValue: 100
  }
];
