import { GoogleGenerativeAI } from "@google/generative-ai";
import { siteConfig } from "@/lib/portfolio-data";
import { buildRagContext } from "@/lib/rag";

export const runtime = "nodejs";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

function buildSystemPrompt(context: string): string {
  return `
You are an AI assistant embedded in ${siteConfig.name}'s portfolio website.

Your purpose is to answer questions about:
- Background
- Skills
- Projects
- Experience
- Education
- Leadership
- Achievements

Use ONLY the retrieved portfolio context below.

Rules:
- Be professional, concise, and friendly.
- Prefer 2-4 short paragraphs unless the user asks for detail.
- Do not invent employers, dates, projects, skills, certifications, technologies, or achievements.
- If information is unavailable, clearly say you do not have that information.
- When discussing projects, highlight technologies, impact, and technical implementation when available.
- When discussing skills, mention relevant tools and frameworks found in the context.
- Never claim information that is not present in the retrieved context.

Retrieved Portfolio Context:

${context}
`;
}

function fallbackResponse(query: string): string {
  const context = buildRagContext(query);

  return `I'm currently running in offline mode because no Gemini API key is configured.

Based on the portfolio data I found:

${context}

To enable AI-powered responses, add a GEMINI_API_KEY environment variable.`;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      messages?: ChatMessage[];
    };

    const messages = body.messages ?? [];

    const lastUserMessage = [...messages]
      .reverse()
      .find((message) => message.role === "user");

    if (!lastUserMessage?.content?.trim()) {
      return Response.json(
        { error: "Message is required." },
        { status: 400 }
      );
    }

    const query = lastUserMessage.content.trim();
    const context = buildRagContext(query);

    const apiKey = process.env.GEMINI_API_KEY;
    console.log("Gemini key loaded:", !!apiKey);
    console.log("Key prefix:", apiKey?.slice(0, 10));

    if (!apiKey) {
      return Response.json({
        message: fallbackResponse(query),
        mode: "fallback",
      });
    }

    const genAI = new GoogleGenerativeAI(apiKey);

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
      systemInstruction: buildSystemPrompt(context),
    });

    const prompt = `
User Question:
${query}

Answer using only the retrieved portfolio context provided in your instructions.
`;

    const result = await model.generateContent(prompt);

    const response = result.response;
    const text = response.text();

    return Response.json({
      message: text,
      mode: "gemini",
    });
  } catch (error) {
    console.error("Chat API error:", error);

    return Response.json(
      {
        error: "Failed to generate a response. Please try again.",
      },
      {
        status: 500,
      }
    );
  }
}