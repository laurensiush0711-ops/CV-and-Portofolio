
import { Experience, Project, Skill, Education } from './types';

export const CV_DATA = {
  name: "Laurensius Haryo Radyobaskoro P",
  targetRole: "Data Analyst",
  currentRole: "Game Designer & QA Junior transitioning to Data Analytics",
  profileImage: "profile.jpg", // Ensure your image file is named this and in the root directory
  bio: "I am a detail-oriented Data Analyst with a strong background in game design and quality assurance. I have diverse experience in the gaming industry, including roles as a Co-Founder and Game Designer at Rise Up Studio for 2 years, a full-time Game Designer at Wisgame for 1 year, and a QA Tester at Forgefun for over a year, supporting multiple in-development and live projects. As a QA Tester, I ensured product quality through systematic testing and structured reporting, identifying over 120 bugs and significantly enhancing game stability. My analytical skills facilitated informed decision-making by employing data-driven approaches to detect patterns in bugs and inconsistencies. I am currently enhancing my skills in data cleaning, exploratory analysis, and data visualization to transition effectively into data analytics. I am eager to leverage my unique experiences to drive reliable and high-quality outcomes in data analytics.",
  email: "Laurensiush.0711@gmail.com",
  linkedin: "linkedin.com/in/laurensius-haryo-radyobaskoro-p-373146177",
  github: "github.com/Parad5050",
  location: "Jakarta, Indonesia",
  phone: "+6285161787119",
  discord: "Parad5050",
  hobbies: ["Data Visualization", "Market Trends", "Python Scripting", "Game Theory"]
};

export const SKILLS: Skill[] = [
  // Data & Analytics Category
  { name: "Python", level: 85, category: 'Data' },
  { name: "SQL", level: 80, category: 'Data' },
  { name: "Tableau", level: 90, category: 'Data' },
  { name: "Data Analytics", level: 95, category: 'Data' },
  { name: "Data Visualization", level: 95, category: 'Data' },
  { name: "Spreadsheets", level: 95, category: 'Data' },
  // QA & Technical Category
  { name: "Manual Testing", level: 95, category: 'QA' },
  { name: "API Testing (Postman)", level: 85, category: 'QA' },
  { name: "AI Prompting", level: 90, category: 'QA' },
  { name: "Javascript", level: 70, category: 'QA' },
  { name: "Unity Engine", level: 75, category: 'QA' },
  // Tools & Organization Category
  { name: "ERP", level: 80, category: 'Tools' },
  { name: "Negotiation", level: 85, category: 'Tools' },
  { name: "Problem Solving", level: 95, category: 'Tools' },
  { name: "Critical Thinking", level: 90, category: 'Tools' }
];

export const EDUCATION: Education[] = [
  {
    institution: "RevoU",
    degree: "Full-Stack Data Analysis",
    period: "October, 2025 - Present",
    location: "Jakarta, Indonesia",
    highlights: [
      "Covering the end-to-end analytics workflow: business problems, hypotheses, collection, cleaning, and analysis using SQL and Python.",
      "Visualizing insights with Tableau and Power BI, effectively communicating actionable recommendations to stakeholders."
    ]
  },
  {
    institution: "Binus University",
    degree: "Bachelor Degree in Computer Science",
    period: "August, 2017 – December, 2021",
    location: "Jakarta, Indonesia",
    highlights: [
      "GPA: 3.25 / 4.00",
      "Specialized in Software Engineering and Database Systems."
    ]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    company: "Forgefun",
    role: "Qa Tester",
    period: "August, 2023 – November, 2024",
    location: "Jakarta, Indonesia",
    isQA: true,
    description: [
      "Tested game features across 5 projects, identifying and documenting 120 bugs to enhance overall game stability and quality.",
      "Identified and documented over 80 bugs during testing, contributing to improved gameplay consistency and successful validation of fixes.",
      "Validated API responses and AI chat behaviors, enhancing system reliability by resolving over 50 issues during feature development."
    ]
  },
  {
    company: "Wisgame",
    role: "Game Designer",
    period: "June, 2022 – June, 2023",
    location: "Jakarta, Indonesia",
    isQA: false,
    description: [
      "Designed over 30 character stats and abilities, along with comprehensive level layouts, enhancing player experience and balance.",
      "Balanced game mechanics for 12 unique characters, leading to a 20% increase in user satisfaction based on feedback.",
      "Documented over 50 entries for game design processes, improving team communication by 30%.",
      "Formulated balancing formulas for character abilities, leading to a 25% improvement in overall player balance.",
      "Mocked-Up UI/UX layouts for 3 major game interfaces, improving user navigation and reducing confusion by 20%."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Steam Market Analysis",
    description: "Analyzed 65,751 total games across 58 genres on Steam to identify variables that increase the likelihood of achieving a Metacritic score of 75 or higher. Evaluated five years of market data using Python and Tableau to inform strategic planning.",
    tags: ["Python", "Tableau", "Market Analysis", "Google Colab", "Data Cleaning"],
    metricLabel: "Dataset Size",
    metricValue: 65751,
    note: "Recommended a 'Premium Indie' strategy for optimal algorithmic visibility."
  },
  {
    title: "Thaumaturgy: Cast and Clash",
    description: "Designed core gameplay mechanics centered on combo creation. Created and edited 3 iterations of the Game Design Document (GDD), establishing a clear project vision. Balanced character skills for 8 unique mages.",
    tags: ["GDD", "Unity", "UI/UX Wireframes", "Playtesting", "Mechanic Design"],
    metricLabel: "Playtester Rating",
    metricValue: 90,
    link: "https://www.notion.so/afa815ade0684865a331e6b64d0889b9",
    note: "Conducted 6 playtesting sessions with over 50 participants."
  }
];
