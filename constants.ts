
import { Experience, Project, Skill, Education } from './types';

export const CV_DATA = {
  name: "Laurensius Haryo Radyobaskoro P",
  targetRole: "Data Analyst",
  currentRole: "Game Designer & QA Junior transitioning to Data Analytics",
  profileImage: "profile.jpg",
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
  { name: "Python", level: 85, category: 'Data' },
  { name: "SQL", level: 80, category: 'Data' },
  { name: "Tableau", level: 90, category: 'Data' },
  { name: "Data Analytics", level: 95, category: 'Data' },
  { name: "Data Visualization", level: 95, category: 'Data' },
  { name: "Spreadsheets", level: 95, category: 'Data' },
  { name: "Manual Testing", level: 95, category: 'QA' },
  { name: "API Testing (Postman)", level: 85, category: 'QA' },
  { name: "AI Prompting", level: 90, category: 'QA' },
  { name: "Javascript", level: 70, category: 'QA' },
  { name: "Unity Engine", level: 75, category: 'QA' },
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
    period: "January - February 2026",
    description: "Market analysis of 65k+ games to identify variables increasing Metacritic score probability for PixelForge Studios.",
    summary: "This project analyzes the Steam game market for PixelForge Studios, a mid-sized 'AA' developer. Operating in a rapidly growing but crowded marketplace, the studio seeks data-driven positioning strategies to stand out. The analysis evaluates market variables from 2021 to 2025 to guide game development decisions for a three-year cycle.",
    goals: "The primary objective is to identify key variables that increase the likelihood of achieving a Metacritic score of 75 or higher. The project aims to find actionable patterns in five years of Steam release data to inform early-stage planning and market positioning for future game development.",
    process: "The methodology began with defining the problem and gathering relevant data from Kaggle. Data cleaning and exploratory analysis were performed using Python (Google Colabs) and Tableau was utilized for both analysis and data visualization. The analysis focused on genre growth rates, feature adoption, and platform support to derive strategic market insights.",
    output: "Analysis revealed that 70.84% of Steam games are indie, suggesting the studio should leverage 'Premium Indie' positioning for better visibility. Recommendations include prioritizing the Strategy genre and polishing single-player fundamentals over complex multiplayer systems. Implementing multiplatform support (99.84% of games) and basic Steam features like cloud saves ensures high ROI and player satisfaction.",
    achievements: [
      "Analyzed 65,751 total games and 58 genres on Steam to identify variables for achieving a 75+ Metacritic score.",
      "Evaluated five years of market data using Python and Tableau to guide development decisions for three-year cycles.",
      "Identified that 70.84% of competitors are indie studios, recommending a 'Premium Indie' strategy for optimal algorithmic visibility.",
      "Advised multiplatform deployment for 99.84% of titles to maximize market reach and avoid visibility penalties on Steam."
    ],
    tags: ["Python", "Tableau", "Market Analysis", "Google Colab", "Data Cleaning"],
    metricLabel: "Dataset Size",
    metricValue: 65751,
    link: "https://github.com/Parad5050/steam-market-analysis",
    note: "Recommended a 'Premium Indie' strategy for optimal algorithmic visibility."
  },
  {
    title: "Thaumaturgy: Cast and Clash",
    period: "January - May 2021",
    description: "Designed core gameplay mechanics and combo systems for a competitive mage-based combat game.",
    tags: ["GDD", "Unity", "UI/UX Wireframes", "Playtesting", "Mechanic Design"],
    metricLabel: "Playtester Rating",
    metricValue: 90,
    link: "https://www.notion.so/afa815ade0684865a331e6b64d0889b9",
    note: "Conducted 6 playtesting sessions with over 50 participants."
  }
];
