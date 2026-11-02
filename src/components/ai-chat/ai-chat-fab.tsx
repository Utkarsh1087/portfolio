"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAIChat } from "@/contexts/ai-chat-context";
import { usePreloader } from "@/components/preloader";

export default function AIChatFAB() {
  const { isOpen, toggleChat } = useAIChat();
  const { isLoading } = usePreloader();
  const [isHovered, setIsHovered] = useState(false);

  // Hide while preloader curtain is active
  if (isLoading) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 pointer-events-auto select-none">
      <motion.button
        onClick={toggleChat}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        aria-label={isOpen ? "Close AI chat" : "Open AI Assistant"}
        className="relative w-16 h-16 rounded-full bg-[#1F8DED] flex items-center justify-center cursor-pointer shadow-[0_8px_24px_rgba(31,141,237,0.35)] focus:outline-none focus:ring-4 focus:ring-[#1F8DED]/40 transition-shadow"
      >
        <AnimatePresence mode="wait" initial={false}>
          {!isOpen ? (
            /* Closed State: Authentic Intercom Smiling Speech Bubble */
            <motion.div
              key="speech-bubble"
              initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.22, ease: "easeInOut" }}
              className="flex items-center justify-center w-full h-full"
            >
              <svg
                width="30"
                height="33"
                viewBox="0 0 80 88"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.g
                  animate={{ y: [0, -2, 0] }}
                  transition={{
                    duration: 2.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  {/* Clean white speech bubble: upright rounded rectangle (80x88) with bottom-right triangular pointer tail */}
                  <path
                    d="M 8 0 H 72 A 8 8 0 0 1 80 8 V 88 L 56 78 H 8 A 8 8 0 0 1 0 70 V 8 A 8 8 0 0 1 8 0 Z"
                    fill="white"
                  />

                  {/* Friendly curved smile line in #1F8DED */}
                  <motion.path
                    d={
                      isHovered
                        ? "M 12 51 Q 40 73 68 51"
                        : "M 14 55 Q 40 68 66 55"
                    }
                    animate={
                      !isHovered
                        ? {
                            d: [
                              "M 14 55 Q 40 68 66 55",
                              "M 13 52 Q 40 71 67 52",
                              "M 14 55 Q 40 68 66 55",
                            ],
                          }
                        : {
                            d: "M 12 51 Q 40 73 68 51",
                          }
                    }
                    transition={
                      !isHovered
                        ? {
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }
                        : {
                            duration: 0.2,
                            ease: "easeOut",
                          }
                    }
                    stroke="#1F8DED"
                    strokeWidth="6"
                    strokeLinecap="round"
                    fill="none"
                  />
                </motion.g>
              </svg>
            </motion.div>
          ) : (
            /* Open State: Crisp White "X" Close Icon */
            <motion.div
              key="close-icon"
              initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.22, ease: "easeInOut" }}
              className="flex items-center justify-center w-full h-full text-white"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
