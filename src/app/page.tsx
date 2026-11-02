"use client";

import SmoothScroll from "@/components/smooth-scroll";
import HeroSection from "@/components/sections/hero";
import AboutSection from "@/components/sections/about";
import TechStackSection from "@/components/sections/tech-stack";
import ProjectsSection from "@/components/sections/projects";
import ServicesScrubSection from "@/components/sections/services-scrub";
import ExperienceSection from "@/components/sections/experience";
import EducationSection from "@/components/sections/education";
import ContactSection from "@/components/sections/contact";

export default function MainPage() {
  return (
    <SmoothScroll>
      <main className="min-h-screen bg-[#F8F8F6] dark:bg-[#0F0F0F] text-[#0F0F0F] dark:text-neutral-100 antialiased selection:bg-[#2563EB] selection:text-white">
        <HeroSection />
        <AboutSection />
        <TechStackSection />
        <ProjectsSection />
        <ServicesScrubSection />
        {/* Experience to Education Curtain Transition Wrapper */}
        <div className="relative w-full">
          <ExperienceSection />
          <EducationSection />
        </div>
        <ContactSection />
      </main>
    </SmoothScroll>
  );
}
