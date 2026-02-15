
# Laurensius Haryo | Portfolio & CV

A modern, interactive professional portfolio and CV for a Game Designer & AI Prompt Engineer. Built with React, Vite, and Google Gemini AI.

## 🚀 One-Command Local Setup

If you have Node.js installed, simply run the following command in your terminal:

```bash
npm run setup
```

This script will automatically install dependencies and prepare your environment variables.

## 🛠 Manual Setup

If you prefer to do it manually:

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Configure Environment Variables**:
   - Copy `.env.example` to `.env`:
     ```bash
     cp .env.example .env
     ```
   - Open `.env` and replace `your_actual_api_key_here` with your [Gemini API Key](https://aistudio.google.com/app/apikey).

3. **Run the App**:
   ```bash
   npm run dev
   ```

## 🏗 Project Structure

- `App.tsx`: The main layout and navigation logic.
- `constants.ts`: All resume data, skills, and projects (centralized for easy updates).
- `services/geminiService.ts`: Integration with Google GenAI for the career bot.
- `components/CareerBot.tsx`: Interactive AI assistant UI.
- `components/SkillsChart.tsx`: Data visualization of technical skills.

## 🤖 AI Features
The "CareerBot" is powered by Gemini 2.0. It is pre-configured with Laurensius's specific professional context to answer recruiter questions about his transition from QA to AI Prompt Engineering.
