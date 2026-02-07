import { createOpenAI } from "@ai-sdk/openai";
import { streamText } from "ai";
import { portfolioContext } from "@/lib/portfolio-context";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  // Check for API key
  const apiKey = process.env.OPENAI_API_KEY;
  const USE_MOCK_MODE = true; // Set to true to force mock mode

  if (!apiKey || USE_MOCK_MODE) {
    // Return a mock response if no API key is present or mock mode is enabled
    const lastMessage = messages[messages.length - 1].content.toLowerCase();
    let response =
      "I am a demo AI assistant for Saifeddine's portfolio (Mock Mode). \n\nI can tell you that Saifeddine is an AI & Software Developer skilled in Python, React, and Unity.";

    if (lastMessage.includes("contact") || lastMessage.includes("email")) {
      response =
        "You can contact Saifeddine at Saifeddinesassi4.0@gmail.com or via LinkedIn/GitHub links in the portfolio.";
    } else if (lastMessage.includes("project")) {
      response =
        "Saifeddine has worked on AI Learning Platforms, Business Management Systems, and various Game/VR development projects.";
    } else if (lastMessage.includes("experience")) {
      response =
        "He has experience as a Software Development Intern at SMART BUSINESS SOLUTION and Atelier 216, and as an IT Technician at BSB TOYOTA.";
    } else if (lastMessage.includes("hello") || lastMessage.includes("hi")) {
      response =
        "Hello! I am ready to answer questions about Saifeddine's portfolio.";
    }

    // Simulate a stream for the mock response
    const encoder = new TextEncoder();
    const stream = new ReadableStream({
      async start(controller) {
        const tokens = response.split(" ");
        for (const token of tokens) {
          controller.enqueue(encoder.encode(token + " "));
          await new Promise((r) => setTimeout(r, 50));
        }
        controller.close();
      },
    });

    return new Response(stream, {
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  }

  const openai = createOpenAI({
    apiKey: apiKey,
  });

  const result = await streamText({
    model: openai("gpt-3.5-turbo"),
    system: `You are a helpful AI assistant for Saifeddine Sassi's portfolio. 
    Your goal is to answer questions about Saifeddine's skills, experience, projects, and background based ONLY on the following context.
    Be professional, concise, and friendly.

    CONTEXT:
    ${portfolioContext}
    `,
    messages,
  });

  const anyResult: any = result as any;
  if (typeof anyResult.toAIStreamResponse === "function") {
    return anyResult.toAIStreamResponse();
  }
  if (typeof anyResult.toDataStreamResponse === "function") {
    return anyResult.toDataStreamResponse();
  }
  if (anyResult.textStream) {
    return new Response(anyResult.textStream, {
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  }
  const text = await anyResult.text();
  return new Response(text ?? "", {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
