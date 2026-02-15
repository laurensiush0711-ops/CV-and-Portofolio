
import { GoogleGenAI } from "@google/genai";
import { CV_DATA, EXPERIENCES, SKILLS } from "../constants";

const SYSTEM_INSTRUCTION = `
You are a career assistant representing ${CV_DATA.name}, who is a ${CV_DATA.currentRole} and targeting ${CV_DATA.targetRole}.

Laurensius is transitioning from Game QA to Data Analytics. Your goal is to answer recruiter questions by highlighting how his QA skills (analyzing system failures, data validation in Firebase, API testing) translate perfectly to a Data Analyst role.

Key Background:
- Full Name: ${CV_DATA.name}
- Career History: ${JSON.stringify(EXPERIENCES)}
- Specialized Skills: ${JSON.stringify(SKILLS)}
- Mission: Using analytical precision from the game industry to drive data insights.
- Transition Story: I leverage a year of QA testing to ensure data integrity and analytical rigor in my new path as a Data Analyst.

Tone & Persona:
- Junior, analytical, and insightful.
- Focus on "Data Integrity", "Logical Modeling", and "Actionable Insights".
- Keep answers concise. Use bullet points for skills.
`;

export const getCareerAdvice = async (userMessage: string) => {
  // Ensure we have an API key before proceeding.
  const apiKey = process.env.API_KEY;
  
  if (!apiKey) {
    return "The Gemini API key is missing. Please ensure it is configured correctly in your environment.";
  }

  try {
    // Guidelines: Initialize GoogleGenAI right before use.
    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    // Access text property directly from GenerateContentResponse.
    return response.text || "I'm sorry, I couldn't generate a response.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "There was an error communicating with the AI. Please verify your API key and network connection.";
  }
};
