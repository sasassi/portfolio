"use client";

import { useState } from "react";

function generateId() {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
}

type ChatMessage = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

export function useChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const text = input.trim();
    if (!text || isLoading) return;

    const userMsg: ChatMessage = {
      id: crypto.randomUUID(),
      role: "user",
      content: text,
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...messages, userMsg] }),
      });

      if (!res.ok) {
        throw new Error(res.statusText);
      }

      const assistantMsg: ChatMessage = {
        id: crypto.randomUUID(),
        role: "assistant",
        content: "",
      };
      setMessages((prev) => [...prev, assistantMsg]);

      if (res.body) {
        const reader = res.body.getReader();
        const decoder = new TextDecoder();
        let done = false;
        while (!done) {
          const { value, done: doneReading } = await reader.read();
          done = doneReading;
          const chunk = decoder.decode(value || new Uint8Array());
          if (chunk) {
            setMessages((prev) => {
              const next = [...prev];
              const idx = next.findIndex((m) => m.id === assistantMsg.id);
              if (idx !== -1) {
                next[idx] = {
                  ...assistantMsg,
                  content: next[idx].content + chunk,
                };
              }
              return next;
            });
          }
        }
      } else {
        const textResp = await res.text();
        setMessages((prev) => {
          const next = [...prev];
          const idx = next.findIndex((m) => m.id === assistantMsg.id);
          if (idx !== -1) next[idx] = { ...assistantMsg, content: textResp };
          return next;
        });
      }
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          id: generateId(),
          role: "assistant",
          content: "Sorry, something went wrong.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  }

  return { messages, input, handleInputChange, handleSubmit, isLoading };
}
