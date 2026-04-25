"use client";

import { EDUCATION } from "@/data/constants";
import { SectionHeader } from "./section-header";
import { cn } from "@/lib/utils";
import SectionWrapper from "../ui/section-wrapper";
import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

const EducationSection = () => {
  return (
    <SectionWrapper
      id="education"
      className="flex flex-col items-center justify-center min-h-[100vh] py-20 z-10 relative"
    >
      {/* Background Dimmer Overlay */}
      <div className="absolute inset-0 bg-black/40 z-[-1] pointer-events-none" />
      <div className="w-full max-w-5xl px-4 md:px-8 mx-auto">
        <SectionHeader
          id="education"
          title="Education"
          desc="Academic background and achievements."
          className="mb-12 md:mb-20"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {EDUCATION.map((edu, index) => (
            <EducationCard key={edu.id} education={edu} index={index} />
          ))}
        </div>
      </div>
    </SectionWrapper>
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
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        delay: index * 0.2,
      }}
      viewport={{ once: true }}
      className={cn(
        "group relative p-6 rounded-2xl border border-white/10 overflow-hidden",
        "bg-zinc-950/80 backdrop-blur-md transition-all duration-500",
        "hover:bg-zinc-900/90 hover:border-white/20 hover:shadow-[0_0_40px_rgba(0,0,0,0.5)]"
      )}
    >
      {/* Decorative Background Blob - subtle */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/15 blur-[80px] rounded-full group-hover:bg-primary/25 transition-all duration-500" />
      
      <div className="relative z-10 flex flex-col h-full text-center items-center">
        <div className="p-3 rounded-xl bg-primary/10 text-primary mb-4 group-hover:scale-110 transition-transform duration-500">
          <GraduationCap size={24} />
        </div>
        
        <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors duration-300 leading-tight mb-1">
          {education.degree}
        </h3>
        
        <p className="text-sm font-medium text-muted-foreground mb-4">
          {education.institution}
        </p>

        <div className="flex flex-col gap-2 text-xs text-neutral-400 mt-auto">
          <div className="flex items-center justify-center gap-1.5">
            <Calendar size={12} className="text-primary/70" />
            <span>{education.startDate} — {education.endDate}</span>
          </div>
          <div className="flex items-center justify-center gap-1.5 opacity-60">
            <MapPin size={12} />
            <span>{education.location}</span>
          </div>
        </div>

        {education.description.length > 0 && (
          <ul className="space-y-2 mt-4 text-left w-full border-t border-white/5 pt-4">
            {education.description.map((point, i) => (
              <li key={i} className="flex gap-2 text-neutral-400">
                <div className="mt-1.5 w-1 h-1 rounded-full bg-primary/40 flex-shrink-0" />
                <span className="text-[11px] leading-snug">{point}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  );
};

export default EducationSection;
