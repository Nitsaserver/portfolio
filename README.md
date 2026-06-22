# Portfolio with RAG Chatbot

A deployable personal portfolio built with **Next.js**, **Tailwind CSS**, and a **RAG-powered AI chatbot** using **Google Gemini** (free tier).

## Features

- Modern responsive portfolio (About, Skills, Experience, Projects, Education, Contact)
- Floating AI chatbot with retrieval-augmented generation over your resume data
- Lightweight TF-IDF retrieval — no vector DB or embedding API costs
- Gemini 2.0 Flash for natural language answers (free tier friendly)
- Fallback mode when no API key is set (still retrieves relevant portfolio chunks)
- Deploy to **Vercel** (recommended, $0) or **Docker**

## Quick Start

```bash
cd ~/projects/portfolio
cp .env.example .env.local
# Add your Gemini API key to .env.local

npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customize Your Portfolio

Edit **`src/lib/portfolio-data.ts`**:

- Name, email, GitHub, LinkedIn links
- Skills, experience, projects, education, leadership

All chatbot answers are grounded in this file via RAG.

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `GEMINI_API_KEY` | Recommended | Free key from [Google AI Studio](https://aistudio.google.com/apikey) |
| `GEMINI_MODEL` | Optional | Default: `gemini-2.0-flash` |

## Deploy to Vercel (Recommended — Free)

1. Push this repo to GitHub
2. Import the project at [vercel.com/new](https://vercel.com/new)
3. Add `GEMINI_API_KEY` in Project → Settings → Environment Variables
4. Deploy

**Estimated cost:** $0/month on Vercel Hobby + Gemini free tier (generous daily limits).

## Deploy with Docker

```bash
docker compose up --build
```

Visit [http://localhost:3000](http://localhost:3000).

For standalone Docker builds, `next.config.ts` enables standalone output.

## How the Chatbot Works

1. User asks a question in the chat widget
2. **RAG retrieval** scores portfolio chunks with TF-IDF keyword matching
3. Top relevant chunks are injected into the Gemini system prompt
4. Gemini generates a grounded answer about your background

This demonstrates the same RAG pattern used in your Arena project — without paid vector databases.

## Tech Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS 4
- Google Generative AI SDK
- Lucide React icons

## Project Structure

```
src/
├── app/
│   ├── api/chat/route.ts   # Chatbot API
│   ├── layout.tsx
│   └── page.tsx
├── components/             # UI sections + chatbot
└── lib/
    ├── portfolio-data.ts   # Your resume content (edit this)
    └── rag.ts              # Retrieval logic
```

## License

MIT
