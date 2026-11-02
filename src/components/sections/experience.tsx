"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { EXPERIENCE, SkillNames, SKILLS } from "@/data/constants";
import { Badge } from "../ui/badge";
import { motion } from "framer-motion";
import { Calendar, Briefcase, ExternalLink, Award } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ExperienceSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const eduSection = document.getElementById("education");
      if (eduSection && contentRef.current) {
        gsap.to(contentRef.current, {
          scale: 0.94,
          opacity: 0,
          y: -40,
          ease: "none",
          scrollTrigger: {
            trigger: eduSection,
            start: "top bottom",
            end: "top 25%",
            scrub: true,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="sticky top-0 z-10 w-full min-h-[90vh] flex flex-col justify-center py-24 md:py-32 px-6 md:px-12 bg-[#F8F8F6] dark:bg-[#0F0F0F] text-[#0F0F0F] dark:text-neutral-100 transition-colors duration-300 border-t border-[#E5E5E5] dark:border-neutral-800"
    >
      <div ref={contentRef} className="max-w-4xl mx-auto w-full origin-top">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <p className="text-xs font-semibold tracking-[0.1em] uppercase text-[#6B7280] dark:text-neutral-400 mb-3">
            CAREER PATH
          </p>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-[-0.03em] leading-[0.98] text-[#0F0F0F] dark:text-white font-sans">
            Experience
          </h2>
        </div>

        {/* Timeline Stack */}
        <div className="flex flex-col gap-8 md:gap-10">
          {EXPERIENCE.map((exp, index) => (
            <ExperienceCard key={exp.id} experience={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ExperienceCard = ({
  experience,
  index,
}: {
  experience: (typeof EXPERIENCE)[0];
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.215, 0.61, 0.355, 1],
      }}
      viewport={{ once: true, margin: "-50px" }}
      className="p-6 md:p-8 rounded-2xl bg-white/70 dark:bg-neutral-900/50 border border-[#E5E5E5] dark:border-neutral-800 shadow-sm hover:border-[#2563EB]/40 transition-all duration-300 group"
    >
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-5">
        <div className="flex items-start gap-4">
          {experience.logo && (
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white p-2 shadow-xs border border-neutral-200 dark:border-neutral-700/80 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform overflow-hidden">
              <Image
                src={experience.logo}
                alt={experience.company}
                fill
                unoptimized
                className="object-contain p-1"
              />
            </div>
          )}

          <div>
            <h3 className="text-xl md:text-2xl font-bold text-[#0F0F0F] dark:text-white group-hover:text-[#2563EB] transition-colors font-sans">
              {experience.title}
            </h3>
            <div className="flex items-center gap-2 mt-1 text-sm font-semibold text-[#6B7280] dark:text-neutral-400">
              <Briefcase className="w-3.5 h-3.5 text-[#2563EB]" />
              {experience.linkedinUrl ? (
                <a
                  href={experience.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-[#2563EB] dark:hover:text-blue-400 transition-colors underline-offset-2 hover:underline"
                >
                  <span>{experience.company}</span>
                  <ExternalLink className="w-3 h-3 opacity-70" />
                </a>
              ) : (
                <span>{experience.company}</span>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 self-start md:self-auto">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-xs font-mono text-[#6B7280] dark:text-neutral-300">
            <Calendar className="w-3.5 h-3.5" />
            <span>
              {experience.startDate} — {experience.endDate}
            </span>
          </div>

          {experience.certificateUrl && (
            <a
              href={experience.certificateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#2563EB]/10 dark:bg-[#2563EB]/20 text-[#2563EB] dark:text-blue-400 border border-[#2563EB]/30 hover:bg-[#2563EB] hover:text-white dark:hover:bg-[#2563EB] dark:hover:text-white transition-all duration-200 shadow-2xs"
            >
              <Award className="w-3.5 h-3.5" />
              <span>Certificate ↗</span>
            </a>
          )}
        </div>
      </div>

      <ul className="list-disc list-outside ml-4 space-y-2 text-sm md:text-base text-[#4B5563] dark:text-neutral-300 leading-relaxed mb-6 font-normal">
        {experience.description.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2 pt-2 border-t border-[#E5E5E5] dark:border-neutral-800/60">
        {experience.skills.map((skillName) => {
          const skill = SKILLS[skillName as SkillNames];
          if (!skill) return null;
          return (
            <Badge
              key={skillName}
              variant="outline"
              className="gap-1.5 text-xs font-normal border-[#E5E5E5] dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 py-1"
            >
              <img
                src={skill.icon}
                alt={skill.label}
                className="w-3.5 h-3.5 object-contain"
              />
              <span>{skill.label}</span>
            </Badge>
          );
        })}
      </div>
    </motion.div>
  );
};

export default ExperienceSection;
