"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Mail, MapPin, MessageSquare, X } from "lucide-react";
import { config } from "@/data/config";
import { cn } from "@/lib/utils";
import ContactForm from "../ContactForm";

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const containerRef = useRef<HTMLElement>(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Cinematic staggered character unblur & rise tied to scroll
      const chars = gsap.utils.toArray<HTMLElement>(".talk-char");
      if (chars.length > 0) {
        gsap.fromTo(
          chars,
          {
            y: 130,
            filter: "blur(45px)",
            opacity: 0,
            scale: 0.82,
          },
          {
            y: 0,
            filter: "blur(0px)",
            opacity: 1,
            scale: 1,
            stagger: 0.035,
            ease: "power2.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 85%",
              end: "top 30%",
              scrub: 1.2,
            },
          }
        );
      }

      // 2. Eyebrow unblur & rise
      const eyebrow = containerRef.current?.querySelector(".contact-eyebrow");
      if (eyebrow) {
        gsap.fromTo(
          eyebrow,
          {
            y: 40,
            filter: "blur(18px)",
            opacity: 0,
          },
          {
            y: 0,
            filter: "blur(0px)",
            opacity: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 88%",
              end: "top 45%",
              scrub: 1,
            },
          }
        );
      }

      // 3. Email, Location & Action buttons unblur & rise
      const footerActions = containerRef.current?.querySelectorAll(
        ".contact-email, .contact-location, .contact-actions"
      );
      if (footerActions && footerActions.length > 0) {
        gsap.fromTo(
          footerActions,
          {
            y: 60,
            filter: "blur(22px)",
            opacity: 0,
          },
          {
            y: 0,
            filter: "blur(0px)",
            opacity: 1,
            stagger: 0.08,
            ease: "power2.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 78%",
              end: "top 25%",
              scrub: 1.2,
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="contact"
      ref={containerRef}
      className="relative z-20 w-full min-h-[75vh] flex flex-col justify-between pt-24 pb-8 px-6 sm:px-10 md:px-14 bg-[#F8F8F6] dark:bg-[#0F0F0F] text-[#0F0F0F] dark:text-neutral-100 transition-colors duration-300 border-t border-[#E5E5E5] dark:border-neutral-800"
    >
      {/* 2-Column Responsive Flex Container */}
      <div className="relative w-full max-w-7xl mx-auto my-auto py-10 flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16">
        {/* Left Side: Headline & Quick Actions */}
        <motion.div
          layout
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className={cn(
            "flex flex-col w-full",
            showForm
              ? "lg:w-1/2 items-center lg:items-start text-center lg:text-left"
              : "max-w-4xl items-center text-center mx-auto"
          )}
        >
          {/* Eyebrow */}
          <p
            className="contact-eyebrow text-xs font-semibold tracking-[0.1em] uppercase text-[#6B7280] dark:text-neutral-400 mb-4 will-change-[transform,filter,opacity]"
          >
            HAVE A PROJECT IN MIND?
          </p>

          {/* Giant lowercase display heading with scroll scrubbed blur reveal */}
          <h2 className="font-black tracking-[-0.03em] leading-[0.92] text-[#0F0F0F] dark:text-white font-sans lowercase mb-6 select-none text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem]">
            <span className="inline-block whitespace-nowrap mr-3 sm:mr-5">
              {"let's".split("").map((char, i) => (
                <span
                  key={i}
                  className="talk-char inline-block will-change-[transform,filter,opacity]"
                >
                  {char}
                </span>
              ))}
            </span>
            <span className="inline-block whitespace-nowrap">
              {"talk.".split("").map((char, i) => (
                <span
                  key={i}
                  className="talk-char inline-block will-change-[transform,filter,opacity]"
                >
                  {char}
                </span>
              ))}
            </span>
          </h2>

          {/* Clickable email link */}
          <a
            href={`mailto:${config.email}`}
            className="contact-email text-base sm:text-lg md:text-xl font-medium text-[#0F0F0F] dark:text-neutral-200 underline decoration-1 decoration-neutral-300 dark:decoration-neutral-700 underline-offset-[5px] hover:decoration-[#2563EB] hover:text-[#2563EB] dark:hover:text-[#2563EB] transition-colors mb-3.5 flex items-center gap-2.5 will-change-[transform,filter,opacity]"
          >
            <Mail className="w-5 h-5 text-[#2563EB] shrink-0" />
            <span>{config.email}</span>
          </a>

          {/* Location row */}
          <div className="contact-location text-base sm:text-lg md:text-xl font-medium text-[#0F0F0F] dark:text-neutral-200 mb-8 sm:mb-10 flex items-center gap-2.5 will-change-[transform,filter,opacity]">
            <MapPin className="w-5 h-5 text-[#2563EB] shrink-0" />
            <span>India (Open to Remote / Onsite)</span>
          </div>

          {/* Action buttons */}
          <div
            className={cn(
              "contact-actions flex flex-wrap items-center gap-4 sm:gap-6 will-change-[transform,filter,opacity]",
              showForm ? "justify-center lg:justify-start" : "justify-center"
            )}
          >
            {/* Check Repositories Pill */}
            <a
              href={config.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="sliding-pill relative overflow-hidden inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#0F0F0F] text-white dark:bg-white dark:text-[#0F0F0F] font-bold text-xs sm:text-sm tracking-wider uppercase shadow-md group"
            >
              <span className="relative z-10 flex items-center gap-2">
                <span>CHECK REPOSITORIES</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
              <div className="absolute inset-0 bg-[#2563EB] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0" />
            </a>

            {/* Direct message toggle button */}
            <button
              onClick={() => setShowForm(!showForm)}
              className={cn(
                "inline-flex items-center gap-2 px-8 py-4 rounded-full border text-xs sm:text-sm font-bold tracking-wider uppercase transition-colors shadow-xs cursor-pointer",
                showForm
                  ? "border-[#2563EB] bg-[#2563EB]/10 text-[#2563EB] hover:bg-[#2563EB]/20"
                  : "border-neutral-300 dark:border-neutral-700 text-[#0F0F0F] dark:text-neutral-200 hover:border-black dark:hover:border-white"
              )}
            >
              <MessageSquare className="w-4 h-4 text-[#2563EB]" />
              <span>{showForm ? "✕ Close Form" : "Send Quick Message"}</span>
            </button>
          </div>
        </motion.div>

        {/* Right Side: Fluid Form Card */}
        <AnimatePresence mode="popLayout">
          {showForm && (
            <motion.div
              key="contact-form-side"
              initial={{ opacity: 0, x: 40, scale: 0.96 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 40, scale: 0.96 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="w-full lg:w-1/2 max-w-xl mx-auto lg:mx-0"
            >
              <div className="relative w-full p-6 sm:p-8 md:p-10 rounded-3xl bg-white/80 dark:bg-neutral-900/70 border border-[#E5E5E5] dark:border-neutral-800 shadow-2xl backdrop-blur-md">
                {/* Header row with close button */}
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F0F0F] dark:text-white font-sans">
                      Send a Message
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 font-normal">
                      Leave your details below and I&apos;ll get back to you shortly.
                    </p>
                  </div>
                  <button
                    onClick={() => setShowForm(false)}
                    aria-label="Close message form"
                    className="p-2 rounded-full border border-neutral-200 dark:border-neutral-800 text-neutral-500 hover:text-black dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <ContactForm onSuccess={() => setShowForm(false)} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom Bar: Brand mark on left, quick links on right */}
      <div className="w-full max-w-7xl mx-auto border-t border-[#E5E5E5] dark:border-neutral-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6B7280] dark:text-neutral-400">
        <div className="flex flex-wrap items-center gap-2.5 font-bold uppercase tracking-wider text-[#0F0F0F] dark:text-white">
          <span>{config.author}</span>
          <span className="text-neutral-400 dark:text-neutral-600 font-normal">|</span>
          <span>OPEN TO WORK</span>
        </div>

        <div className="flex items-center gap-6">
          <Link
            href="#hero"
            className="hover:text-[#0F0F0F] dark:hover:text-white transition-colors"
          >
            Back to Top ↑
          </Link>
          <a
            href={config.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#0F0F0F] dark:hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href={config.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#0F0F0F] dark:hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={config.social.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#0F0F0F] dark:hover:text-white transition-colors"
          >
            Twitter / X
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
