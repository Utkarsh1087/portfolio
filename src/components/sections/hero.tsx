"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { SiGithub, SiX, SiLeetcode } from "react-icons/si";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { config } from "@/data/config";
import { usePreloader } from "../preloader";
import ScrollDownIcon from "../scroll-down-icon";

const HeroSection = () => {
  const { isLoading } = usePreloader();
  const firstName = config.author.split(" ")[0].toUpperCase();

  // Animation variants for masked lines (y: 100% to 0 inside overflow-hidden)
  const lineVariants = {
    hidden: { y: "100%" },
    visible: (custom: number) => ({
      y: 0,
      transition: {
        duration: 0.9,
        delay: 0.2 + custom * 0.1,
        ease: [0.215, 0.61, 0.355, 1],
      },
    }),
  };

  return (
    <section
      id="hero"
      className="relative w-full min-h-[90vh] lg:min-h-screen flex flex-col justify-between pt-24 md:pt-28 pb-8 px-6 md:px-12 bg-[#F8F8F6] dark:bg-[#0F0F0F] text-[#0F0F0F] dark:text-neutral-100 transition-colors duration-300 overflow-hidden"
    >
      <div className="relative z-10 w-full max-w-7xl mx-auto my-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[82vh]">
        {/* Left Column (7 cols): Eyebrow, 3-Line Masked Role Title, Bio, Buttons, Socials */}
        <div className="lg:col-span-7 flex flex-col justify-center items-start pt-6 lg:pt-0 z-20">
          {/* Eyebrow */}
          <div className="overflow-hidden mb-3 md:mb-4">
            <motion.p
              custom={0}
              variants={lineVariants}
              initial="hidden"
              animate={!isLoading ? "visible" : "hidden"}
              className="font-outfit text-xs font-semibold tracking-[0.15em] uppercase text-[#6B7280] dark:text-neutral-400"
            >
              HELLO, I&apos;M {firstName}
            </motion.p>
          </div>

          {/* Large 3-line editorial title pairing Outfit (bold geometric) & Lora (elegant italic) */}
          <div className="flex flex-col select-none">
            <div className="overflow-hidden">
              <motion.h1
                custom={1}
                variants={lineVariants}
                initial="hidden"
                animate={!isLoading ? "visible" : "hidden"}
                className="font-outfit font-black uppercase text-4xl sm:text-6xl md:text-7xl lg:text-[4.75rem] xl:text-[5.25rem] leading-[0.98] tracking-[-0.03em] text-[#0F0F0F] dark:text-white"
              >
                FULL STACK
              </motion.h1>
            </div>
            <div className="overflow-hidden">
              <motion.h1
                custom={2}
                variants={lineVariants}
                initial="hidden"
                animate={!isLoading ? "visible" : "hidden"}
                className="font-outfit font-black uppercase text-4xl sm:text-6xl md:text-7xl lg:text-[4.75rem] xl:text-[5.25rem] leading-[0.98] tracking-[-0.03em] text-[#0F0F0F] dark:text-white"
              >
                WEB DEVELOPER
              </motion.h1>
            </div>
            <div className="overflow-hidden pb-3 sm:pb-4 -mb-3 sm:-mb-4">
              <motion.h1
                custom={3}
                variants={lineVariants}
                initial="hidden"
                animate={!isLoading ? "visible" : "hidden"}
                className="font-lora italic font-normal text-3xl sm:text-5xl md:text-6xl lg:text-[4.25rem] xl:text-[4.85rem] leading-[1.18] tracking-tight text-[#2563EB] dark:text-[#3B82F6] pb-1"
              >
                &amp; Software Engineer
              </motion.h1>
            </div>
          </div>

          {/* 2-line muted bio in clean Outfit font */}
          <div className="overflow-hidden mt-6 md:mt-8">
            <motion.p
              custom={4}
              variants={lineVariants}
              initial="hidden"
              animate={!isLoading ? "visible" : "hidden"}
              className="font-outfit text-[#6B7280] dark:text-neutral-400 text-base md:text-lg max-w-xl leading-relaxed font-normal"
            >
              Computer Science Engineer delivering secure APIs, real-time systems, and GenAI/RAG solutions that go to production. Interested in system design, scalable services, and high-performance web apps.
            </motion.p>
          </div>

          {/* Action buttons in Outfit font */}
          <motion.div
            custom={5}
            variants={lineVariants}
            initial="hidden"
            animate={!isLoading ? "visible" : "hidden"}
            className="mt-8 md:mt-10 flex flex-wrap items-center gap-4 sm:gap-6 font-outfit"
          >
            <Link
              href="#projects"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#0F0F0F] text-white dark:bg-white dark:text-[#0F0F0F] font-semibold text-xs sm:text-sm tracking-wide hover:opacity-90 active:scale-95 transition-all shadow-md group"
            >
              <span>View My Work</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            <a
              href={config.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-neutral-300 dark:border-neutral-700 text-[#0F0F0F] dark:text-neutral-200 font-semibold text-xs sm:text-sm hover:border-[#0F0F0F] dark:hover:border-white transition-all group"
            >
              <span>Download CV</span>
              <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
            </a>
          </motion.div>

          {/* Monochrome Social Icons Row */}
          <motion.div
            custom={6}
            variants={lineVariants}
            initial="hidden"
            animate={!isLoading ? "visible" : "hidden"}
            className="mt-8 md:mt-12 flex items-center gap-5 text-[#0F0F0F] dark:text-neutral-300"
          >
            {config.social.github && (
              <a
                href={config.social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="hover:text-[#2563EB] dark:hover:text-[#2563EB] hover:scale-110 transition-all"
              >
                <SiGithub className="w-5 h-5" />
              </a>
            )}
            {config.social.linkedin && (
              <a
                href={config.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-[#2563EB] dark:hover:text-[#2563EB] hover:scale-110 transition-all"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
            )}
            {config.social.instagram && (
              <a
                href={config.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-[#2563EB] dark:hover:text-[#2563EB] hover:scale-110 transition-all"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
            )}
            {config.social.twitter && (
              <a
                href={config.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="hover:text-[#2563EB] dark:hover:text-[#2563EB] hover:scale-110 transition-all"
              >
                <SiX className="w-5 h-5" />
              </a>
            )}
            {config.social.leetcode && (
              <a
                href={config.social.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LeetCode"
                className="hover:text-[#2563EB] dark:hover:text-[#2563EB] hover:scale-110 transition-all"
              >
                <SiLeetcode className="w-5 h-5" />
              </a>
            )}
          </motion.div>
        </div>

        {/* Right Column: Hero Portrait Image */}
        <motion.div
          className="lg:col-span-5 relative lg:absolute lg:right-0 xl:right-4 2xl:right-8 lg:bottom-0 flex flex-col items-center lg:items-end justify-end w-full lg:w-[38vw] lg:max-w-[530px] xl:max-w-[580px] pt-4 lg:pt-0 z-10 pointer-events-none"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={!isLoading ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 1, delay: 0.35, ease: [0.215, 0.61, 0.355, 1] }}
        >
          <div className="relative w-full h-[400px] sm:h-[480px] md:h-[540px] lg:h-[66vh] xl:h-[72vh] flex items-end justify-center lg:justify-end">
            <Image
              src="/assets/hero-portrait-cutout.webp"
              alt={config.author}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 45vw"
              className="object-contain object-bottom lg:object-right-bottom drop-shadow-2xl select-none grayscale contrast-115"
              style={{
                maskImage:
                  "linear-gradient(to bottom, black 85%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, black 85%, transparent 100%)",
              }}
            />
          </div>
        </motion.div>
      </div>

      {/* Subtle Scroll Down */}
      <div className="relative z-20 w-full flex justify-center pt-2">
        <ScrollDownIcon />
      </div>
    </section>
  );
};

export default HeroSection;
