# AI Chat App (React + Vite + TypeScript)

A fast, modern AI chat application built using **React**, **Vite**, **TypeScript**, **Chakra UI**, **Framer Motion**, and the **OpenAI Responses API**.

---

## Features

### Chat Experience
- Prompt and AI response shown in **separate chat bubbles**
- Prompts (left, blue) and responses (right, gray)
- AI response bubble appears immediately with a **loading indicator**
- When the AI reply is ready, the bubble updates automatically
- Error messages show clearly inside the AI bubble

### Chat History
- Automatically saved using `localStorage`
- Sorted by **most recent first**
- Includes **Clear History** button

### API Handling
- Integrated with OpenAI **Responses API (`gpt-4.1-mini`)**
- Handles invalid key, network errors, and general API failures
- Input form is disabled while the model is generating

### UI / UX
- Chakra UI for clean, accessible components  
- Framer Motion for smooth animations  
- Fully responsive layout

---

## Environment Setup

Create a `.env` file in the project root:

```
VITE_OPENAI_API_KEY=your_openai_api_key_here
```

## Run the App

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```