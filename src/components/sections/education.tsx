"use client";

import { EDUCATION } from "@/data/constants";
import { motion } from "framer-motion";
import { GraduationCap, MapPin } from "lucide-react";
import Image from "next/image";

const EducationSection = () => {
  return (
    <section
      id="education"
      className="relative z-20 w-full min-h-screen pt-20 pb-24 md:pt-28 md:pb-36 px-6 md:px-12 bg-[#F8F8F6] dark:bg-[#0F0F0F] text-[#0F0F0F] dark:text-neutral-100 transition-colors duration-300 rounded-t-[36px] sm:rounded-t-[48px] md:rounded-t-[64px] shadow-[0_-25px_60px_-15px_rgba(0,0,0,0.35)] dark:shadow-[0_-30px_80px_-15px_rgba(0,0,0,0.9)] border-t border-neutral-300/80 dark:border-neutral-800/80"
    >
      {/* Decorative Curtain Grip Indicator */}
      <div className="flex justify-center -mt-12 sm:-mt-16 mb-12 sm:mb-16">
        <div className="w-16 h-1.5 rounded-full bg-neutral-300 dark:bg-neutral-700/80 opacity-70" />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <p className="text-xs font-semibold tracking-[0.1em] uppercase text-[#6B7280] dark:text-neutral-400 mb-3">
            ACADEMIC BACKGROUND
          </p>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-[-0.03em] leading-[0.98] text-[#0F0F0F] dark:text-white font-sans">
            Education
          </h2>
        </div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {EDUCATION.map((edu, index) => (
            <EducationCard key={edu.id} education={edu} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const EducationCard = ({
  education,
  index,
}: {
  education: (typeof EDUCATION)[0];
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.15,
        ease: [0.215, 0.61, 0.355, 1],
      }}
      viewport={{ once: true }}
      className="p-6 sm:p-8 rounded-2xl bg-white/70 dark:bg-neutral-900/50 border border-[#E5E5E5] dark:border-neutral-800 shadow-sm hover:border-[#2563EB]/40 transition-all duration-300 flex flex-col justify-between group"
    >
      <div>
        <div className="flex items-center justify-between gap-4 mb-5">
          {/* Unboxed, Big & Prominent Logo without background or border */}
          <div className="relative h-20 sm:h-24 w-28 sm:w-32 flex-shrink-0">
            {education.logo ? (
              <Image
                src={education.logo}
                alt={education.institution}
                fill
                unoptimized
                className="object-contain object-left transition-transform duration-300 group-hover:scale-105"
              />
            ) : (
              <GraduationCap className="w-12 h-12 text-[#2563EB]" />
            )}
          </div>
          <span className="text-[11px] sm:text-xs font-mono px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-[#6B7280] dark:text-neutral-400 border border-neutral-200 dark:border-neutral-700">
            {education.startDate} — {education.endDate}
          </span>
        </div>

        <h3 className="font-bold text-lg md:text-xl text-[#0F0F0F] dark:text-white group-hover:text-[#2563EB] transition-colors font-sans mb-1">
          {education.degree}
        </h3>

        <p className="text-sm font-semibold text-[#6B7280] dark:text-neutral-400 mb-4">
          {education.institution}
        </p>

        {education.description && (
          <p className="text-xs md:text-sm text-[#4B5563] dark:text-neutral-300 leading-relaxed font-normal">
            {education.description}
          </p>
        )}
      </div>

      {education.location && (
        <div className="flex items-center gap-1.5 text-xs text-[#6B7280] dark:text-neutral-400 pt-4 mt-4 border-t border-[#E5E5E5] dark:border-neutral-800">
          <MapPin className="w-3.5 h-3.5 text-[#2563EB]" />
          <span>{education.location}</span>
        </div>
      )}
    </motion.div>
  );
};

export default EducationSection;
