"use client";

import { useState, useRef, useEffect } from "react";
import { useChat } from "@/lib/use-chat";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const { messages, input, handleInputChange, handleSubmit, isLoading } =
    useChat();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="mb-4 w-[350px] md:w-[400px] h-[500px] bg-background border border-border shadow-xl rounded-xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-primary p-4 flex justify-between items-center text-primary-foreground">
              <div className="flex items-center gap-2">
                <Bot className="w-5 h-5" />
                <span className="font-semibold">AI Assistant</span>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="h-8 w-8 text-primary-foreground hover:bg-primary-foreground/20"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.length === 0 && (
                <div className="text-center text-muted-foreground mt-8 text-sm">
                  <Bot className="w-12 h-12 mx-auto mb-3 opacity-50" />
                  <p>Hi! I'm Saifeddine's AI assistant.</p>
                  <p>
                    Ask me anything about his projects, skills, or experience.
                  </p>
                </div>
              )}

              {messages.map((m) => (
                <div
                  key={m.id}
                  className={cn(
                    "flex gap-3 text-sm",
                    m.role === "user" ? "flex-row-reverse" : "flex-row"
                  )}
                >
                  <div
                    className={cn(
                      "w-8 h-8 rounded-full flex items-center justify-center shrink-0",
                      m.role === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground"
                    )}
                  >
                    {m.role === "user" ? (
                      <User className="w-4 h-4" />
                    ) : (
                      <Bot className="w-4 h-4" />
                    )}
                  </div>
                  <div
                    className={cn(
                      "p-3 rounded-lg max-w-[80%]",
                      m.role === "user"
                        ? "bg-primary text-primary-foreground rounded-tr-none"
                        : "bg-muted text-foreground rounded-tl-none"
                    )}
                  >
                    {m.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex gap-3 text-sm">
                  <div className="w-8 h-8 rounded-full bg-muted text-muted-foreground flex items-center justify-center shrink-0">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div className="bg-muted text-foreground p-3 rounded-lg rounded-tl-none">
                    <span className="animate-pulse">Thinking...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form
              onSubmit={handleSubmit}
              className="p-4 border-t border-border bg-card/50"
            >
              <div className="flex gap-2">
                <Input
                  value={input}
                  onChange={handleInputChange}
                  placeholder="Ask something..."
                  className="flex-1"
                />
                <Button
                  type="submit"
                  size="icon"
                  disabled={isLoading || !input.trim()}
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <Button
        onClick={() => setIsOpen(!isOpen)}
        size="lg"
        className="rounded-full h-14 w-14 shadow-lg"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
      </Button>
    </div>
  );
}
