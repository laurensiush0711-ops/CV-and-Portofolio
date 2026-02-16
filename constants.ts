
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
  // Technical Skills
  { name: "Javascript", level: 70, category: 'QA' },
  { name: "Unity", level: 75, category: 'QA' },
  { name: "Python", level: 80, category: 'Data' },
  { name: "Tableau", level: 85, category: 'Data' },
  { name: "Postman", level: 80, category: 'QA' },
  { name: "Manual Testing", level: 90, category: 'QA' },
  { name: "AI Prompting", level: 80, category: 'QA' },
  { name: "Spreadsheets", level: 90, category: 'Data' },
  { name: "SQL", level: 85, category: 'Data' },
  { name: "Data Analytics", level: 80, category: 'Data' },
  { name: "Data Visualization", level: 85, category: 'Data' },
  // Soft Skills
  { name: "Communication", level: 85, category: 'Soft Skill' },
  { name: "Negotiation", level: 75, category: 'Soft Skill' },
  { name: "Adaptability", level: 90, category: 'Soft Skill' },
  { name: "Analytical Thinking", level: 90, category: 'Soft Skill' },
  { name: "Critical Thinking", level: 85, category: 'Soft Skill' },
  { name: "Problem Solving", level: 90, category: 'Soft Skill' }
];

export const EDUCATION: Education[] = [
  {
    institution: "RevoU",
    degree: "Full-Stack Data Analysis",
    period: "October, 2025 – Present",
    location: "Jakarta, Indonesia",
    highlights: [
      "Covered the end-to-end analytics workflow, from defining business problems and hypotheses to data collection, cleaning, and analysis using spreadsheets, SQL, and Python.",
      "I visualized insights with Tableau and Power BI, effectively communicating actionable recommendations to stakeholders."
    ]
  },
  {
    institution: "Binus University",
    degree: "Bachelor Degree in Computer Science",
    period: "August, 2017 – December, 2021",
    location: "Jakarta, Indonesia",
    highlights: [
      "GPA: 3.07 / 4.00"
    ]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    company: "Forgefun",
    role: "QA Tester",
    period: "August, 2023 – November, 2024",
    location: "Jakarta, Indonesia",
    isQA: true,
    description: [
      "Tested game features across 5 projects, identifying and documenting 120 bugs to enhance overall game stability and quality.",
      "Identified and documented over 80 bugs during testing, contributing to improved gameplay consistency and successful validation of fixes with each update.",
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
      "Balanced game mechanics for 12 unique characters, improving game fairness and leading to a 20% increase in user satisfaction based on feedback.",
      "Documented over 50 entries for game design processes, establishing a structured reference that improved team communication by 30%.",
      "Created and assigned tasks aligned with project goals, resulting in timely completion of milestones and improved workflow.",
      "Formulated balancing formulas for character abilities, leading to a 25% improvement in overall player balance.",
      "Mocked-Up UI/UX layouts for 3 major game interfaces, improving user navigation and reducing confusion by 20%."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Steam Market Analysis",
    period: "January, 2026 - February, 2026",
    description: "Analyzed 65,751 total games across 58 genres on Steam to identify variables that increase the likelihood of achieving a Metacritic score of 75 or higher.",
    summary: "Analyzed 65,751 total games across 58 genres on Steam to identify variables that increase the likelihood of achieving a Metacritic score of 75 or higher. Evaluated five years of market data using Python and Tableau to inform game development decisions for strategic three-year planning cycles.",
    goals: "Identify variables that increase the likelihood of achieving a Metacritic score of 75 or higher.",
    process: "Utilized data cleaning and exploratory analysis techniques in Google Colab. Evaluated five years of market data using Python and Tableau.",
    output: "Derived strategic insights focusing on genre growth rates and feature adoption. Identified that 70.84% of competitors are indie studios, recommending a 'Premium Indie' strategy.",
    achievements: [
      "Analyzed 65,751 total games across 58 genres on Steam to identify variables that increase the likelihood of achieving a Metacritic score of 75 or higher.",
      "Evaluated five years of market data using Python and Tableau to inform game development decisions for strategic three-year planning cycles.",
      "Identified that 70.84% of competitors are indie studios, recommending a \"Premium Indie\" strategy for optimal algorithmic visibility.",
      "Advised on multiplatform deployment for 99.84% of titles, maximizing market reach and preventing visibility penalties on Steam.",
      "Derived strategic insights focusing on genre growth rates and feature adoption, aiding in early-stage planning and market positioning for future game development.",
      "Utilized data cleaning and exploratory analysis techniques in Google Colab, ensuring high-quality data for comprehensive evaluation."
    ],
    tags: ["Python", "Tableau", "Market Analysis", "Google Colab", "Data Cleaning"],
    metricLabel: "Dataset Size",
    metricValue: 65751,
    link: "https://github.com/Parad5050/steam-market-analysis",
    note: "Recommended a 'Premium Indie' strategy for optimal algorithmic visibility."
  },
  {
    title: "Thaumaturgy: Cast and Clash",
    period: "Sept, 2019 - Oct, 2021",
    description: "Created and edited 3 iterations of the Game Design Document (GDD), establishing a clear project vision that enhanced team alignment.",
    summary: "A competitive mage combat game where I led game design. I created and edited 3 iterations of the Game Design Document (GDD), establishing a clear project vision that enhanced team alignment.",
    goals: "Improve player engagement and game fairness through balanced mechanics and intuitive UI.",
    process: "Conducted 6 playtesting sessions with over 50 participants, identifying key areas for refinement.",
    output: "A refined MVP release with balanced character skills and improved UI/UX wireframes.",
    achievements: [
        "Created and edited 3 iterations of the Game Design Document (GDD), establishing a clear project vision that enhanced team alignment.",
        "Designed core gameplay mechanics centered on combo creation, defining 5 unique mechanics that improved player engagement and received positive feedback from 90% of playtesters.",
        "Crafted level designs for 5 distinct environments, enhancing gameplay variety and player interest during testing phases.",
        "Developed 4 wireframes for UI/UX, streamlining user experience and reducing navigational issues by 25% based on player feedback.",
        "Balanced character skills for 8 unique mages, increasing overall game fairness and improving player satisfaction scores by 20%.",
        "Conducted 6 playtesting sessions with over 50 participants, identifying key areas for refinement and enhancing gameplay before MVP release."
    ],
    tags: ["GDD", "Unity", "UI/UX Wireframes", "Playtesting", "Mechanic Design"],
    metricLabel: "Playtester Rating",
    metricValue: 90,
    link: "https://www.notion.so/afa815ade0684865a331e6b64d0889b9",
    note: "Conducted 6 playtesting sessions with over 50 participants."
  }
];
