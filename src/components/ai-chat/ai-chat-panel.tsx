"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  X,
  Send,
  RotateCcw,
  User,
  ExternalLink,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import { useAIChat } from "@/contexts/ai-chat-context";
import { config } from "@/data/config";

interface Message {
  id: string;
  role: "user" | "model";
  content: string;
  timestamp?: string;
}

const STARTER_PROMPTS = [
  "What is your core tech stack?",
  "Tell me about your Sentinel project",
  "How does CodeNest's collaborative IDE work?",
  "What was your role at YesCity?",
  "How can I get in touch or hire you?",
];

export default function AIChatPanel() {
  const { isOpen, closeChat, pendingPrompt, clearPendingPrompt } = useAIChat();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "initial",
      role: "model",
      content:
        "Hey! 👋 I'm Utkarsh. Ask me anything about my projects, what tech I'm using, or what I'm building right now.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const typingIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const hasUserAsked = messages.some((m) => m.role === "user");

  useEffect(() => {
    return () => {
      if (typingIntervalRef.current) {
        clearInterval(typingIntervalRef.current);
      }
    };
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setTimeout(() => inputRef.current?.focus(), 250);
    }
  }, [isOpen, messages]);

  // Handle auto-send when a pendingPrompt is passed from outside
  useEffect(() => {
    if (isOpen && pendingPrompt) {
      handleSend(pendingPrompt);
      clearPendingPrompt();
    }
  }, [isOpen, pendingPrompt]);

  const handleSend = async (textToSend?: string) => {
    const query = (textToSend || input).trim();
    if (!query || isLoading || isTyping) return;

    // If typing previous message, complete it immediately
    if (typingIntervalRef.current) {
      clearInterval(typingIntervalRef.current);
      typingIntervalRef.current = null;
      setIsTyping(false);
    }

    const userMsg: Message = {
      id: Date.now().toString(),
      role: "user",
      content: query,
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, userMsg].map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      const contentType = response.headers.get("content-type") || "";

      if (!response.ok) {
        let errMessage = "Something went wrong. Please try again.";
        try {
          const errData = await response.json();
          if (errData.reply) errMessage = errData.reply;
        } catch {}
        setIsLoading(false);
        setMessages((prev) => [
          ...prev,
          {
            id: (Date.now() + 1).toString(),
            role: "model",
            content: errMessage,
          },
        ]);
        return;
      }

      const botMsgId = (Date.now() + 1).toString();
      setIsLoading(false);
      setIsTyping(true);

      // Append bot placeholder
      setMessages((prev) => [
        ...prev,
        {
          id: botMsgId,
          role: "model",
          content: "",
        },
      ]);

      if (contentType.includes("application/json")) {
        const data = await response.json();
        const text = data.reply || "";
        setMessages((prev) =>
          prev.map((m) => (m.id === botMsgId ? { ...m, content: text } : m))
        );
        setIsTyping(false);
        return;
      }

      // Stream text reader
      const reader = response.body?.getReader();
      if (!reader) {
        setIsTyping(false);
        return;
      }

      const decoder = new TextDecoder();
      let accumulated = "";

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value, { stream: true });
        accumulated += chunk;
        setMessages((prev) =>
          prev.map((m) => (m.id === botMsgId ? { ...m, content: accumulated } : m))
        );
      }
      setIsTyping(false);
    } catch (err) {
      setIsLoading(false);
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: "model",
          content:
            "Ran into a quick network hiccup. Feel free to re-ask, or drop me an email at utkarsh.rajput.2005@gmail.com!",
        },
      ]);
    }
  };

  const handleClear = () => {
    if (typingIntervalRef.current) {
      clearInterval(typingIntervalRef.current);
      typingIntervalRef.current = null;
    }
    setIsTyping(false);
    setMessages([
      {
        id: Date.now().toString(),
        role: "model",
        content: "Cleared! What would you like to chat about?",
      },
    ]);
  };

  // Simple Markdown renderer for bolding, bullet points, and links
  const renderFormattedText = (text: string) => {
    const lines = text.split("\n");
    return lines.map((line, lineIndex) => {
      // Check for bullet point
      const isBullet = line.trim().startsWith("- ") || line.trim().startsWith("* ");
      const cleanLine = isBullet ? line.trim().substring(2) : line;

      // Parse bold **text** and links [text](url)
      const parts = cleanLine.split(/(\*\*.*?\*\*|\[.*?\]\(.*?\))/g);

      const formattedLine = parts.map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <strong key={i} className="font-bold text-[#0F0F0F] dark:text-white">
              {part.slice(2, -2)}
            </strong>
          );
        }
        if (part.startsWith("[") && part.includes("](") && part.endsWith(")")) {
          const match = part.match(/\[(.*?)\]\((.*?)\)/);
          if (match) {
            return (
              <a
                key={i}
                href={match[2]}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2563EB] hover:underline font-semibold inline-flex items-center gap-0.5"
              >
                {match[1]}
                <ExternalLink className="w-3 h-3 inline ml-0.5" />
              </a>
            );
          }
        }
        return part;
      });

      if (isBullet) {
        return (
          <li key={lineIndex} className="ml-4 list-disc my-1 text-sm leading-relaxed">
            {formattedLine}
          </li>
        );
      }

      if (!line.trim()) {
        return <div key={lineIndex} className="h-2" />;
      }

      return (
        <p key={lineIndex} className="my-1 text-sm leading-relaxed">
          {formattedLine}
        </p>
      );
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop Blur Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeChat}
            className="fixed inset-0 bg-black/25 backdrop-blur-[2px] z-40"
          />

          {/* Floating Chat Window Container (springs from bottom-right origin) */}
          <motion.div
            data-lenis-prevent="true"
            initial={{ opacity: 0, scale: 0.7, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.7, y: 24 }}
            transition={{ type: "spring", stiffness: 380, damping: 26 }}
            className="fixed bottom-24 right-4 sm:right-6 w-[calc(100vw-2rem)] sm:w-[390px] md:w-[410px] h-[580px] max-h-[calc(100vh-7.5rem)] rounded-3xl bg-[#F8F8F6] dark:bg-[#0F0F0F] text-[#0F0F0F] dark:text-neutral-100 border border-[#E5E5E5] dark:border-neutral-800 shadow-[0_20px_60px_rgba(0,0,0,0.35)] z-40 origin-bottom-right flex flex-col justify-between overflow-hidden"
          >
            {/* Panel Header */}
            <div className="px-5 py-4 border-b border-[#E5E5E5] dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/60 backdrop-blur-md flex items-center justify-between flex-shrink-0">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden border border-neutral-300 dark:border-neutral-700 bg-neutral-200 dark:bg-neutral-800 flex-shrink-0">
                  <Image
                    src="/assets/avatar.png"
                    alt={config.author}
                    fill
                    className="object-cover object-top"
                  />
                  <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 border-2 border-white dark:border-black" />
                </div>
                <div>
                  <h3 className="font-bold text-sm sm:text-base uppercase tracking-wider font-sans">
                    AI Assistant
                  </h3>
                  <p className="text-[11px] text-neutral-500 dark:text-neutral-400">
                    Ask about projects, stack &amp; career
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={handleClear}
                  title="Clear conversation"
                  aria-label="Clear chat"
                  className="p-2 rounded-full text-neutral-500 hover:text-black dark:hover:text-white hover:bg-neutral-200/50 dark:hover:bg-neutral-800/50 transition-colors"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
                <button
                  onClick={closeChat}
                  title="Close panel"
                  aria-label="Close chat panel"
                  className="p-2 rounded-full text-neutral-500 hover:text-black dark:hover:text-white hover:bg-neutral-200/50 dark:hover:bg-neutral-800/50 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Message Thread Body */}
            <div
              data-lenis-prevent="true"
              className="flex-1 min-h-0 overflow-y-auto overscroll-contain p-4 sm:p-5 space-y-4 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-neutral-300 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-700 [&::-webkit-scrollbar-thumb]:rounded-full"
            >
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex gap-3 ${
                    msg.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {msg.role === "model" && (
                    <div className="w-7 h-7 rounded-full bg-[#0F0F0F] text-white dark:bg-white dark:text-[#0F0F0F] flex items-center justify-center flex-shrink-0 mt-0.5 text-xs shadow-xs">
                      <Sparkles className="w-3.5 h-3.5" />
                    </div>
                  )}

                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 shadow-xs ${
                      msg.role === "user"
                        ? "bg-[#0F0F0F] text-white dark:bg-white dark:text-[#0F0F0F] rounded-br-xs"
                        : "bg-white/80 dark:bg-neutral-900/80 border border-[#E5E5E5] dark:border-neutral-800 text-neutral-800 dark:text-neutral-200 rounded-bl-xs"
                    }`}
                  >
                    {renderFormattedText(msg.content)}
                    {isTyping && msg.role === "model" && msg.id === messages[messages.length - 1]?.id && (
                      <span className="inline-block w-1.5 h-3.5 ml-1 bg-[#2563EB] animate-pulse align-middle rounded-full" />
                    )}
                  </div>

                  {msg.role === "user" && (
                    <div className="w-7 h-7 rounded-full bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs text-neutral-700 dark:text-neutral-300">
                      <User className="w-3.5 h-3.5" />
                    </div>
                  )}
                </div>
              ))}

              {/* Typing / Loading Indicator */}
              {isLoading && (
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-[#0F0F0F] text-white dark:bg-white dark:text-[#0F0F0F] flex items-center justify-center flex-shrink-0 text-xs shadow-xs">
                    <Sparkles className="w-3.5 h-3.5 animate-spin" />
                  </div>
                  <div className="bg-white/80 dark:bg-neutral-900/80 border border-[#E5E5E5] dark:border-neutral-800 rounded-2xl px-4 py-2.5 flex items-center gap-1.5 shadow-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] animate-bounce [animation-delay:-0.3s]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] animate-bounce [animation-delay:-0.15s]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] animate-bounce" />
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Starter Prompts Carousel - Automatically hides after user asks their first question */}
            <AnimatePresence>
              {!hasUserAsked && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="overflow-hidden border-t border-[#E5E5E5]/60 dark:border-neutral-800/60 bg-neutral-50/50 dark:bg-neutral-900/30 flex-shrink-0"
                >
                  <div className="px-4 py-2.5">
                    <p className="text-[10px] uppercase font-bold tracking-wider text-neutral-500 mb-1.5">
                      Suggested Prompts:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {STARTER_PROMPTS.map((prompt, i) => (
                        <button
                          key={i}
                          onClick={() => handleSend(prompt)}
                          disabled={isLoading || isTyping}
                          className="text-[11px] font-medium px-2.5 py-1 rounded-full border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:border-black dark:hover:border-white transition-all text-left flex items-center gap-1 cursor-pointer disabled:opacity-50"
                        >
                          <span>{prompt}</span>
                          <ChevronRight className="w-3 h-3 text-neutral-400" />
                        </button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Message Input Bar */}
            <div className="p-4 border-t border-[#E5E5E5] dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/60 backdrop-blur-md">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="relative flex items-center"
              >
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about Sentinel, tech stack, experience..."
                  disabled={isLoading || isTyping}
                  className="w-full pl-4 pr-12 py-3 rounded-full border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800/80 text-sm text-[#0F0F0F] dark:text-white placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#2563EB] transition-all shadow-xs"
                />

                <button
                  type="submit"
                  disabled={!input.trim() || isLoading || isTyping}
                  aria-label="Send message"
                  className="absolute right-1.5 p-2 rounded-full bg-[#0F0F0F] text-white dark:bg-white dark:text-[#0F0F0F] disabled:opacity-40 disabled:cursor-not-allowed hover:opacity-90 transition-all shadow-xs"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

