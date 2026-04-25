"use client";
import Image from "next/image";
import React from "react";
import {
  ResponsiveDialog,
  ResponsiveDialogContent,
  ResponsiveDialogTrigger,
} from "../ui/responsive-dialog";
import { FloatingDock } from "../ui/floating-dock";
import { ScrollArea } from "../ui/scroll-area";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

import projects, { Project } from "@/data/projects";
import { SectionHeader } from "./section-header";
import { cn } from "@/lib/utils";

import SectionWrapper from "../ui/section-wrapper";

const ProjectsSection = () => {
  return (
    <SectionWrapper id="projects" className="max-w-7xl mx-auto md:h-[130vh]">
      <SectionHeader id="projects" title="Projects" />
      <div className="grid grid-cols-1 md:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </SectionWrapper>
  );
};

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="flex items-center justify-center">
      <ResponsiveDialog>
        <ResponsiveDialogTrigger className="bg-transparent flex justify-center group/card">
          <div
            className="relative w-[400px] h-auto rounded-lg overflow-hidden border border-border/50 shadow-lg"
            style={{ aspectRatio: "3/2" }}
          >
            <Image
              className="absolute w-full h-full top-0 left-0 group-hover/card:scale-[1.05] transition-transform duration-500"
              src={project.src}
              alt={project.title}
              width={400}
              height={300}
            />
            <div className="absolute w-full h-1/2 bottom-0 left-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent pointer-events-none">
              <div className="flex flex-col h-full items-start justify-end p-6">
                <div className="text-lg font-medium text-white text-left">{project.title}</div>
                <div className="text-[10px] uppercase font-bold tracking-wider bg-white/20 backdrop-blur-md text-white border border-white/20 rounded-lg w-fit px-2 py-0.5 mt-1">
                  {project.category}
                </div>
              </div>
            </div>
          </div>
        </ResponsiveDialogTrigger>

        <ResponsiveDialogContent className="md:max-w-5xl md:h-[90vh] md:!flex md:flex-col md:overflow-hidden md:p-0 md:gap-0 border-none bg-background rounded-2xl shadow-2xl">
          {/* Sticky header */}
          <div className="shrink-0 border-b border-border bg-background/95 backdrop-blur-md px-8 py-5 z-20">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-4 min-w-0">
                <h4 className="font-display text-xl md:text-3xl font-bold text-foreground tracking-tight truncate">
                  {project.title}
                </h4>
                <span className="shrink-0 text-[10px] uppercase font-bold tracking-[0.15em] text-muted-foreground border border-border rounded-full px-3 py-1">
                  {project.category}
                </span>
              </div>
              <div className="shrink-0 flex items-center gap-4">
                {project.github && (
                  <Link
                    href={project.github}
                    target="_blank"
                    className="text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
                  >
                    Source Code
                  </Link>
                )}
                <Link href={project.live} target="_blank">
                  <button className="group flex items-center gap-2 bg-primary text-primary-foreground text-sm font-bold px-6 py-2 rounded-full hover:shadow-[0_0_20px_rgba(var(--primary),0.3)] transition-all">
                    Visit Project
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Scrollable content */}
          <ScrollArea className="flex-1" type="always" data-lenis-prevent>
            <div className="px-8 py-8">
              
              {/* Tech stack - First as per OG template */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="flex flex-col md:flex-row gap-8 md:gap-16 mb-12"
              >
                {project.skills.frontend?.length > 0 && (
                  <div className="flex flex-col items-center md:items-start gap-4">
                    <span className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground font-bold">
                      Frontend Stack
                    </span>
                    <FloatingDock items={project.skills.frontend} />
                  </div>
                )}
                {project.skills.backend?.length > 0 && (
                  <div className="flex flex-col items-center md:items-start gap-4">
                    <span className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground font-bold">
                      Backend Systems
                    </span>
                    <FloatingDock items={project.skills.backend} />
                  </div>
                )}
              </motion.div>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-12" />

              {/* Detailed Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="prose dark:prose-invert max-w-none mb-16"
              >
                {project.content}
              </motion.div>

              {/* Screenshots Gallery Section (Now at the bottom for a cleaner flow) */}
              {project.screenshots?.length > 0 && (
                <div className="mb-8">
                  <span className="block text-[11px] uppercase tracking-[0.25em] text-muted-foreground font-bold mb-6 text-center md:text-left">
                    Project Gallery
                  </span>
                  <div className="flex items-center gap-6 overflow-x-auto pb-6 scrollbar-hide">
                    {project.screenshots.map((image, idx) => (
                      <motion.div
                        key={image + idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.05, zIndex: 10 }}
                        className="relative h-48 w-80 md:h-72 md:w-[500px] shrink-0 rounded-xl overflow-hidden border border-border shadow-md"
                      >
                        <Image
                          src={`/assets/projects-screenshots/${project.id}/${image}`}
                          alt={`${project.title} screenshot ${idx + 1}`}
                          fill
                          className="object-cover"
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>
        </ResponsiveDialogContent>
      </ResponsiveDialog>
    </div>
  );
};

export default ProjectsSection;
