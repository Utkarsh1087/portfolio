"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { config } from "@/data/config";
import { Code2, Palette, Cpu, Layers } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const capabilities = [
  {
    title: "Full-Stack Development",
    icon: <Code2 className="w-5 h-5 text-[#2563EB]" />,
    description:
      "Architecting end-to-end applications with Next.js, React, Node.js, Express, MongoDB, and PostgreSQL with robust TypeScript type-safety.",
  },
  {
    title: "UI/UX Design",
    icon: <Palette className="w-5 h-5 text-[#2563EB]" />,
    description:
      "Crafting high-converting, Swiss-editorial interfaces with fluid GSAP micro-interactions, responsive typography, and tactile feedback.",
  },
  {
    title: "AI & Automation",
    icon: <Cpu className="w-5 h-5 text-[#2563EB]" />,
    description:
      "Integrating Gemini LLMs, real-time diagnostic engines, BullMQ background queues, and telemetry streams for modern intelligent workflows.",
  },
  {
    title: "SaaS Architecture",
    icon: <Layers className="w-5 h-5 text-[#2563EB]" />,
    description:
      "Engineering scalable multi-tenant platforms, low-latency Socket.io real-time synchronizations, and production Dockerized services.",
  },
];

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Headline scrub/reveal
      if (headlineRef.current) {
        gsap.from(headlineRef.current, {
          y: 50,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headlineRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      }

      // Image inset clip-path reveal
      if (imageContainerRef.current) {
        gsap.fromTo(
          imageContainerRef.current,
          { clipPath: "inset(100% 0% 0% 0%)" },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1.2,
            ease: "power3.inOut",
            scrollTrigger: {
              trigger: imageContainerRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Capability cards staggered entrance
      if (cardsRef.current) {
        const cardElements = cardsRef.current.children;
        gsap.from(cardElements, {
          y: 30,
          opacity: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative w-full py-24 md:py-32 px-6 md:px-12 bg-[#F8F8F6] dark:bg-[#0F0F0F] text-[#0F0F0F] dark:text-neutral-100 transition-colors duration-300 border-t border-[#E5E5E5] dark:border-neutral-800"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-16 md:gap-20">
        {/* Top: Oversized display statement with Cobalt Blue accent */}
        <div className="w-full">
          <p className="text-xs font-semibold tracking-[0.1em] uppercase text-[#6B7280] dark:text-neutral-400 mb-4">
            ABOUT &amp; CAPABILITIES
          </p>
          <h2
            ref={headlineRef}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-[-0.03em] leading-[0.98] text-[#0F0F0F] dark:text-white font-sans"
          >
            Building <span className="text-[#2563EB]">Real</span> Digital Systems
          </h2>
        </div>

        {/* Bottom Split: Portrait card & Capabilities */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column (5 cols): Grayscale portrait card */}
          <div className="lg:col-span-5 w-full">
            <div
              ref={imageContainerRef}
              className="relative w-full h-[440px] md:h-[520px] rounded-2xl overflow-hidden bg-neutral-200 dark:bg-neutral-800 border border-[#E5E5E5] dark:border-neutral-700 shadow-xl"
            >
              <Image
                src="/assets/about-workspace.webp"
                alt="Minimalist engineering workstation & design setup"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center grayscale contrast-110 hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
                <div className="text-white">
                  <p className="font-bold text-lg">{config.author}</p>
                  <p className="text-xs text-neutral-300 uppercase tracking-widest">
                    Full-Stack Engineer &amp; Designer
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (7 cols): Lead bio & 2x2 capability grid */}
          <div className="lg:col-span-7 flex flex-col gap-10">
            {/* Lead Bio Paragraph */}
            <p className="text-lg md:text-xl text-[#0F0F0F] dark:text-neutral-200 leading-relaxed font-normal">
              I design and build complete products, from clean interfaces to reliable backends. With a strong foundation in data structures and system design, I work with Next.js, Node.js, and TypeScript to create software that is easy to use and works well.
            </p>

            {/* 2x2 Capability Grid with hairline borders */}
            <div
              ref={cardsRef}
              className="grid grid-cols-1 sm:grid-cols-2 border border-[#E5E5E5] dark:border-neutral-800 rounded-xl overflow-hidden bg-white/50 dark:bg-neutral-900/40 backdrop-blur-xs"
            >
              {capabilities.map((cap, i) => (
                <div
                  key={cap.title}
                  className={`p-6 sm:p-8 flex flex-col gap-3 transition-colors hover:bg-neutral-100/50 dark:hover:bg-neutral-800/40 ${
                    i % 2 === 0
                      ? "sm:border-r border-[#E5E5E5] dark:border-neutral-800"
                      : ""
                  } ${
                    i < 2
                      ? "border-b border-[#E5E5E5] dark:border-neutral-800"
                      : ""
                  }`}
                >
                  <div className="w-10 h-10 rounded-lg bg-[#2563EB]/10 flex items-center justify-center">
                    {cap.icon}
                  </div>
                  <h3 className="font-bold text-base md:text-lg text-[#0F0F0F] dark:text-white font-sans">
                    {cap.title}
                  </h3>
                  <p className="text-xs md:text-sm text-[#6B7280] dark:text-neutral-400 leading-relaxed font-normal">
                    {cap.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

