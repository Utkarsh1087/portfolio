"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const servicePhrases = [
  "AI-Powered Applications & Workflow Automation",
  "Fast, Responsive Reliable Websites",
  "Scalable Full-Stack Architecture",
  "Interactive Web Experiences",
];

const horizontalStatement =
  "i transform ideas into production-ready applications.";

const ServicesScrubSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const verticalStackRef = useRef<HTMLDivElement>(null);
  const pinSectionRef = useRef<HTMLDivElement>(null);
  const textTrackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Part A: Vertical Focus Stack (Clean GPU transform/opacity)
      const phraseItems = gsap.utils.toArray<HTMLElement>(".phrase-item");
      phraseItems.forEach((item) => {
        gsap.fromTo(
          item,
          {
            opacity: 0.25,
            y: 28,
            scale: 0.97,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: item,
              start: "top 80%",
              end: "top 40%",
              scrub: true,
            },
          }
        );
      });

      // Part B: Pinned Horizontal Scroll with Alternating Vertical Character Zipper Effect
      if (pinSectionRef.current && textTrackRef.current) {
        const chars = gsap.utils.toArray<HTMLElement>(".zipper-char");
        const charDuration = 0.45;
        const staggerAmount = 0.025;
        const totalDuration = (chars.length - 1) * staggerAmount + charDuration;

        const pinTl = gsap.timeline({
          scrollTrigger: {
            trigger: pinSectionRef.current,
            pin: true,
            anticipatePin: 1,
            scrub: 1,
            start: "top top",
            end: "+=250%",
          },
        });

        // Animate the text track horizontally from x: "40vw" to x: "-65%" across full duration
        pinTl.fromTo(
          textTrackRef.current,
          { x: "40vw" },
          {
            x: "-65%",
            ease: "none",
            duration: totalDuration,
          },
          0
        );

        // Simultaneously animate individual character spans from alternating vertical offsets
        pinTl.from(
          chars,
          {
            y: (index: number) => (index % 2 === 0 ? -140 : 140),
            opacity: 0,
            stagger: staggerAmount,
            duration: charDuration,
            ease: "power2.out",
          },
          0
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const words = horizontalStatement.split(" ");

  return (
    <div
      ref={containerRef}
      className="relative w-full bg-[#F8F8F6] dark:bg-[#0F0F0F] text-[#0F0F0F] dark:text-neutral-100 transition-colors duration-300 border-t border-[#E5E5E5] dark:border-neutral-800"
    >
      {/* Part A: Vertical Focus Stack */}
      <section className="py-28 md:py-40 px-6 md:px-12 max-w-7xl mx-auto">
        <p className="text-xs font-semibold tracking-[0.1em] uppercase text-[#6B7280] dark:text-neutral-400 mb-8 text-center md:text-left">
          WHAT I CAN BUILD
        </p>
        <div
          ref={verticalStackRef}
          className="flex flex-col gap-12 md:gap-16 items-center md:items-start"
        >
          {servicePhrases.map((phrase, i) => (
            <div
              key={i}
              className="phrase-item will-change-transform text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase tracking-[-0.03em] leading-tight select-none font-sans"
            >
              <span className="text-[#2563EB] mr-4 text-2xl sm:text-4xl">
                0{i + 1}
              </span>
              <span>{phrase}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Part B: Pinned Horizontal Scroll Section (Zipper Text Effect) */}
      <section
        ref={pinSectionRef}
        className="relative w-full h-screen overflow-hidden flex items-center bg-[#111111] text-white select-none"
      >
        <div
          ref={textTrackRef}
          className="whitespace-nowrap flex items-center will-change-transform"
        >
          <div className="flex items-center text-[8vw] sm:text-[7vw] md:text-[6vw] font-black uppercase tracking-[-0.02em] leading-none font-sans">
            {words.map((word, wordIndex) => {
              const isAccent = word === "production-ready";
              return (
                <span
                  key={wordIndex}
                  className="inline-flex items-center mr-[0.38em] sm:mr-[0.42em] last:mr-0"
                >
                  {word.split("").map((char, charIndex) => (
                    <span
                      key={charIndex}
                      className={`zipper-char inline-block will-change-transform ${
                        isAccent ? "text-[#2563EB]" : ""
                      }`}
                    >
                      {char}
                    </span>
                  ))}
                </span>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesScrubSection;
