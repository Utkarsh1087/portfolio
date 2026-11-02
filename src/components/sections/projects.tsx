"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowUpRight,
  Github,
  ExternalLink,
  Layers,
  Activity,
  Sparkles,
  Cpu,
  Terminal,
  Database,
  ShieldCheck,
  Code2,
  Share2,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import projects, { Project, Skill } from "@/data/projects";
import {
  ResponsiveDialog,
  ResponsiveDialogContent,
  ResponsiveDialogTrigger,
} from "../ui/responsive-dialog";

gsap.registerPlugin(ScrollTrigger);

interface ProjectDetails {
  subtitle: string;
  tagline: string;
  features: {
    title: string;
    description: string;
    icon: React.ReactNode;
  }[];
}

const PROJECT_DETAILS: Record<string, ProjectDetails> = {
  sentinel: {
    subtitle: "Production-Grade Observability & AI Diagnostics Platform",
    tagline:
      "A distributed telemetry and root-cause analysis platform engineered with MERN, InfluxDB time-series storage, and Google Gemini AI.",
    features: [
      {
        title: "Real-time Telemetry Dashboard",
        description:
          "Tracks sub-second CPU, RAM, and API latency metrics with Socket.io, backed by InfluxDB Cloud for high-throughput time-series data and PostgreSQL for identity management.",
        icon: <Activity className="w-5 h-5 text-[#2563EB]" />,
      },
      {
        title: "Gemini AI Diagnostics",
        description:
          "Automated AI diagnostic engine that analyzes error stack traces and delivers root-cause explanations and verified code fixes in real-time.",
        icon: <Sparkles className="w-5 h-5 text-amber-500" />,
      },
      {
        title: "Multi-Channel Smart Alerts",
        description:
          "Custom threshold alerting with background event queues powered by BullMQ and Upstash Redis, dispatching instant notifications to Discord and Telegram.",
        icon: <Cpu className="w-5 h-5 text-emerald-500" />,
      },
      {
        title: "Plug-and-Play Node.js SDK",
        description:
          "Lightweight instrumentation SDK that integrates with any Node.js / Express application in 3 lines of code, feeding live metrics directly into the Liquid Glass UI.",
        icon: <Terminal className="w-5 h-5 text-indigo-500" />,
      },
    ],
  },
  codenest: {
    subtitle: "Real-Time Collaborative Coding Workspace & AI Copilot",
    tagline:
      "A concurrent developer IDE with live multi-cursor synchronization across 20+ programming languages, AI-assisted completions, and interactive system design tools.",
    features: [
      {
        title: "Real-time Multi-Cursor Editing",
        description:
          "Engineered with Socket.io and CodeMirror for instant multi-user typing sync across 20+ languages, complete with one-click shareable workspace invitations.",
        icon: <Code2 className="w-5 h-5 text-[#2563EB]" />,
      },
      {
        title: "Integrated AI Copilot",
        description:
          "Context-aware inline autocomplete suggestions and interactive chat assistance powered by OpenRouter API, helping developers debug and refactor faster.",
        icon: <Sparkles className="w-5 h-5 text-amber-500" />,
      },
      {
        title: "Architectural Whiteboard",
        description:
          "Built-in collaborative infinite whiteboard powered by tldraw for real-time system design planning, workflow mapping, and team brainstorming.",
        icon: <Share2 className="w-5 h-5 text-purple-500" />,
      },
      {
        title: "Hierarchical Cloud Filesystem",
        description:
          "Full CRUD file tree with persistent MongoDB storage, wrapped in a modern 'Liquid Glass' glassmorphic interface implemented with Tailwind CSS v4.",
        icon: <Database className="w-5 h-5 text-emerald-500" />,
      },
    ],
  },
  webcraft: {
    subtitle: "AI-Powered Full-Stack Web Application Generator",
    tagline:
      "A SaaS platform with 5+ AI generation modes producing responsive, interactive web interfaces in under 10 seconds per request.",
    features: [
      {
        title: "AI Generation Modes",
        description:
          "Specialized generation engines for landing pages, dashboards, and complex forms, delivering complete interactive interfaces with sub-200ms API response times.",
        icon: <Sparkles className="w-5 h-5 text-amber-500" />,
      },
      {
        title: "Relational Architecture",
        description:
          "Built with PostgreSQL and Prisma ORM for structured, reliable schema generation, automated relational mappings, and fast transactional queries.",
        icon: <Database className="w-5 h-5 text-[#2563EB]" />,
      },
      {
        title: "Enterprise Auth & Security",
        description:
          "Robust authentication with Better-Auth, secure session token handling with JWT, and strict CORS policies engineered for safe production deployments.",
        icon: <ShieldCheck className="w-5 h-5 text-emerald-500" />,
      },
      {
        title: "Modern Full-Stack Stack",
        description:
          "Next-generation stack leveraging React, TypeScript, Express, and Tailwind CSS for rapid visual iteration and seamless code export.",
        icon: <Layers className="w-5 h-5 text-indigo-500" />,
      },
    ],
  },
  docsense: {
    subtitle: "Enterprise Full-Stack AI RAG Platform",
    tagline:
      "A high-throughput Retrieval-Augmented Generation (RAG) SaaS platform with multi-page document ingestion, Pinecone vector search in <150ms, and Google Gemini token streaming.",
    features: [
      {
        title: "Sub-150ms Vector Retrieval",
        description:
          "Direct Pinecone vector similarity search with user-isolated metadata filtering and SSE token streaming from Google Gemini 1.5 Flash (<500ms TTFT).",
        icon: <Sparkles className="w-5 h-5 text-amber-500" />,
      },
      {
        title: "3-Engine Parallel Ingestion",
        description:
          "Multi-strategy document parsing pipeline featuring Standard, Coordinate Layout-Aware, and Table X/Y grid clustering, processing 10 pages in ~2.5s via 5 parallel batch workers.",
        icon: <Cpu className="w-5 h-5 text-[#2563EB]" />,
      },
      {
        title: "500-VU Concurrency & Scale",
        description:
          "Validated under 500 concurrent virtual users via k6 load tests with a 100% check pass rate; scaled to 40,000+ pages (~100,000 vectors) with MongoDB connection pooling.",
        icon: <Activity className="w-5 h-5 text-emerald-500" />,
      },
      {
        title: "SSRF Defense & Stripe SaaS",
        description:
          "Hardened with anti-SSRF IP validators blocking cloud metadata (169.254.169.254), sliding-window rate limiters, and end-to-end Stripe Pro subscription billing with webhooks.",
        icon: <ShieldCheck className="w-5 h-5 text-indigo-500" />,
      },
    ],
  },
  tradeai: {
    subtitle: "Quantitative Trading Research & AI Hypothesis Copilot",
    tagline:
      "A systematic research platform translating conversational market hypotheses into mathematically sound, executable backtest specifications with active parameter disambiguation.",
    features: [
      {
        title: "Dual-Engine Quantitative Parser",
        description:
          "Translates qualitative trading queries into standardized backtest specs with structured LLM JSON outputs and a 100% deterministic offline fallback engine.",
        icon: <Cpu className="w-5 h-5 text-[#2563EB]" />,
      },
      {
        title: "Active Disambiguation Engine",
        description:
          "Separates explicit user parameters from assumptions and missing variables, interactively resolving ambiguities through preset quantitative chips and custom overrides.",
        icon: <Sparkles className="w-5 h-5 text-amber-500" />,
      },
      {
        title: "Interactive Copilot Workspace",
        description:
          "Dedicated research workspace featuring real-time parameter tweaking, streaming reasoning suggestions, and one-click JSON/Markdown specification export.",
        icon: <Activity className="w-5 h-5 text-emerald-500" />,
      },
      {
        title: "43-Point Security & QA Suite",
        description:
          "Passed 43 automated security and logic test cases: in-memory sliding-window IP rate limiting (30 req/min), anti-prompt injection filters, and zero credential leakage.",
        icon: <ShieldCheck className="w-5 h-5 text-indigo-500" />,
      },
    ],
  },
  siftrole: {
    subtitle: "Intelligent Tech Career Platform & ATS Pipeline",
    tagline:
      "A career platform connecting developers to tech roles directly extracted from ATS feeds (Greenhouse, Lever, Ashby) with dual AI agents and resume matching.",
    features: [
      {
        title: "Official ATS Sync Pipeline",
        description:
          "Automated ingestion pipeline extracting verified career opportunities directly from Greenhouse, Lever, Ashby, and SmartRecruiters with zero aggregator latency.",
        icon: <Cpu className="w-5 h-5 text-[#2563EB]" />,
      },
      {
        title: "Two-Tier AI Copilot Agents",
        description:
          "Specialized candidate career assistant for resume parsing, ATS score matching, and personalized recruiter outreach, alongside an operational admin copilot.",
        icon: <Sparkles className="w-5 h-5 text-amber-500" />,
      },
      {
        title: "Multi-Key Failover Cascade",
        description:
          "Enterprise LLM routing layer cascading between Google Gemini Flash and Groq (Qwen/Llama) models with automatic rate-limit failover for zero downtime.",
        icon: <Activity className="w-5 h-5 text-emerald-500" />,
      },
      {
        title: "Neon PostgreSQL Monorepo",
        description:
          "High-performance architecture uniting a candidate Next.js app, admin portal, and Express backend over a serverless Neon PostgreSQL database via Prisma ORM.",
        icon: <Database className="w-5 h-5 text-indigo-500" />,
      },
    ],
  },
};

const INITIAL_VISIBLE_COUNT = 3;

const ProjectsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".project-card");
      cards.forEach((card) => {
        gsap.from(card, {
          y: 60,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const visibleProjects = isExpanded
    ? projects
    : projects.slice(0, INITIAL_VISIBLE_COUNT);

  return (
    <section
      id="projects"
      ref={containerRef}
      className="relative w-full py-24 md:py-36 px-6 sm:px-10 md:px-14 bg-[#F8F8F6] dark:bg-[#0F0F0F] text-[#0F0F0F] dark:text-neutral-100 transition-colors duration-300 border-t border-[#E5E5E5] dark:border-neutral-800"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-14 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-[0.15em] uppercase text-[#6B7280] dark:text-neutral-400 border border-neutral-200 dark:border-neutral-800 mb-4 bg-white/50 dark:bg-neutral-900/50">
            <Layers className="w-3.5 h-3.5 text-[#2563EB]" />
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-[-0.03em] leading-[0.95] text-[#0F0F0F] dark:text-white font-sans">
            Selected Works
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl font-normal leading-relaxed">
            A selection of projects spanning web apps, real-time tools, and AI integrations. Each one comes with a live demo and code, so you can see how I build.
          </p>
        </div>

        {/* Project Showcase Blocks */}
        <div className="flex flex-col gap-12 sm:gap-16 lg:gap-20">
          {visibleProjects.map((project, index) => {
            const indexStr = (index + 1).toString().padStart(2, "0");
            const details = PROJECT_DETAILS[project.id];
            const synopsis =
              details?.tagline ||
              `${project.category} built with cutting-edge full-stack architecture.`;
            const isReversed = index % 2 === 1;

            if (index >= INITIAL_VISIBLE_COUNT) {
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  <ProjectShowcaseCard
                    project={project}
                    indexStr={indexStr}
                    synopsis={synopsis}
                    isReversed={isReversed}
                    details={details}
                  />
                </motion.div>
              );
            }

            return (
              <ProjectShowcaseCard
                key={project.id}
                project={project}
                indexStr={indexStr}
                synopsis={synopsis}
                isReversed={isReversed}
                details={details}
              />
            );
          })}
        </div>

        {/* Explore More Projects Button */}
        {projects.length > INITIAL_VISIBLE_COUNT && (
          <div className="flex justify-center mt-14 sm:mt-20">
            {!isExpanded ? (
              <button
                onClick={() => {
                  setIsExpanded(true);
                  setTimeout(() => ScrollTrigger.refresh(), 350);
                }}
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#0F0F0F] text-white dark:bg-white dark:text-[#0F0F0F] font-bold text-sm sm:text-base tracking-wide hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer border border-neutral-800 dark:border-neutral-200"
              >
                <span>Explore More Projects</span>
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white/20 dark:bg-black/15 text-xs font-mono font-bold">
                  +{projects.length - INITIAL_VISIBLE_COUNT}
                </span>
                <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5" />
              </button>
            ) : (
              <button
                onClick={() => {
                  setIsExpanded(false);
                  containerRef.current?.scrollIntoView({ behavior: "smooth" });
                  setTimeout(() => ScrollTrigger.refresh(), 350);
                }}
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-neutral-300 dark:border-neutral-700 bg-white/70 dark:bg-neutral-900/70 text-[#0F0F0F] dark:text-neutral-200 font-semibold text-sm hover:border-black dark:hover:border-white transition-all shadow-xs cursor-pointer backdrop-blur-sm"
              >
                <span>Show Fewer Projects</span>
                <ChevronUp className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

const ProjectShowcaseCard = ({
  project,
  indexStr,
  synopsis,
  isReversed,
  details,
}: {
  project: Project;
  indexStr: string;
  synopsis: string;
  isReversed: boolean;
  details?: ProjectDetails;
}) => {
  const allSkills: Skill[] = [
    ...(project.skills.frontend || []),
    ...(project.skills.backend || []),
  ];

  const isHostedLive = Boolean(
    project.live && !project.live.includes("github.com")
  );
  const displayHostname = (() => {
    if (isHostedLive && project.live) {
      try {
        return new URL(project.live).hostname;
      } catch {
        return `${project.id}.ai`;
      }
    }
    return `${project.id}.ai`;
  })();

  return (
    <ResponsiveDialog>
      <div className="project-card group relative rounded-2xl sm:rounded-3xl border border-[#E5E5E5] dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/50 backdrop-blur-md p-6 sm:p-8 md:p-10 lg:p-12 transition-all duration-300 hover:border-neutral-400 dark:hover:border-neutral-600 hover:shadow-2xl">
        <div
          className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
            isReversed ? "lg:grid-flow-dense" : ""
          }`}
        >
          {/* Information & Details Column */}
          <div
            className={`lg:col-span-6 flex flex-col justify-between ${
              isReversed ? "lg:col-start-7" : ""
            }`}
          >
            <div>
              {/* Eyebrow: Index & Category */}
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-sm sm:text-base font-bold text-[#6B7280] dark:text-neutral-400">
                  {indexStr} / {String(projects.length).padStart(2, "0")}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-300 dark:bg-neutral-700" />
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700">
                  {project.category}
                </span>
                {isHostedLive && (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wider bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    LIVE
                  </span>
                )}
                {!isHostedLive && (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wider bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-700">
                    GITHUB REPO
                  </span>
                )}
              </div>

              {/* Title */}
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0F0F0F] dark:text-white font-space transition-colors duration-300 group-hover:text-[#2563EB]">
                {project.title}
              </h3>

              {/* Synopsis */}
              <p className="mt-4 text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed font-normal">
                {synopsis}
              </p>

              {/* Tech Stack Pills */}
              <div className="mt-6 flex flex-wrap gap-2">
                {allSkills.slice(0, 7).map((skill, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-neutral-100 dark:bg-neutral-800/80 text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-700/80 shadow-xs"
                  >
                    {skill.icon && (
                      <span className="text-sm opacity-80">{skill.icon}</span>
                    )}
                    <span>{skill.title}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 pt-6 border-t border-neutral-200/80 dark:border-neutral-800/80 flex flex-wrap items-center gap-3 sm:gap-4">
              {isHostedLive && project.live && (
                <Link
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0F0F0F] text-white dark:bg-white dark:text-[#0F0F0F] text-xs sm:text-sm font-bold tracking-wide hover:opacity-90 active:scale-95 transition-all shadow-md group/btn"
                >
                  <span>Visit Website</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </Link>
              )}

              <ResponsiveDialogTrigger asChild>
                <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-neutral-300 dark:border-neutral-700 bg-white/60 dark:bg-neutral-900/60 text-[#0F0F0F] dark:text-neutral-200 text-xs sm:text-sm font-semibold tracking-wide hover:border-black dark:hover:border-white transition-all shadow-xs cursor-pointer">
                  <span>View Preview</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </ResponsiveDialogTrigger>

              {project.github && (
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View source code on GitHub"
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white hover:border-neutral-500 transition-all shadow-xs ${
                    !isHostedLive
                      ? "bg-[#0F0F0F] text-white dark:bg-white dark:text-[#0F0F0F] font-bold text-xs sm:text-sm"
                      : ""
                  }`}
                >
                  <Github className="w-4 h-4" />
                  {!isHostedLive && <span>Source Code</span>}
                </Link>
              )}
            </div>
          </div>

          {/* Large Visual Mockup Window Column */}
          <div
            className={`lg:col-span-6 w-full ${
              isReversed ? "lg:col-start-1" : ""
            }`}
          >
            <ResponsiveDialogTrigger asChild>
              <div className="relative w-full rounded-xl sm:rounded-2xl overflow-hidden border border-neutral-300 dark:border-neutral-700 bg-neutral-900 shadow-xl cursor-pointer group/mockup flex flex-col">
                {/* Browser-style Header Bar */}
                <div className="w-full h-8 sm:h-9 bg-neutral-200/90 dark:bg-neutral-800/90 backdrop-blur-md border-b border-neutral-300/80 dark:border-neutral-700/80 px-3 sm:px-4 flex items-center justify-between z-20 flex-shrink-0">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                  </div>
                  <span className="text-[10px] sm:text-xs font-mono font-medium text-neutral-500 truncate max-w-[220px]">
                    {displayHostname}
                  </span>
                  <div className="w-8" />
                </div>

                {/* Screenshot Image with Exact 16:9 Aspect Ratio (Full website fit, zero cropping) */}
                <div className="relative w-full aspect-[16/9] overflow-hidden bg-neutral-100 dark:bg-neutral-900">
                  <Image
                    src={project.src}
                    alt={project.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-top transition-transform duration-500 ease-out group-hover/mockup:scale-[1.02]"
                    priority={project.id === "sentinel"}
                  />

                  {/* Overlay Pill on Hover */}
                  <div className="absolute inset-0 bg-black/25 opacity-0 group-hover/mockup:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                    <span className="px-4 py-2 rounded-full bg-white text-black font-bold text-xs tracking-wider shadow-lg transform translate-y-2 group-hover/mockup:translate-y-0 transition-transform duration-300">
                      Click to Open Preview
                    </span>
                  </div>
                </div>
              </div>
            </ResponsiveDialogTrigger>
          </div>
        </div>
      </div>

      {/* High-End Project Preview Modal */}
      <ResponsiveDialogContent
        data-lenis-prevent
        className="max-w-4xl w-[94vw] p-0 overflow-hidden bg-[#F8F8F6] dark:bg-[#0F0F0F] border-[#E5E5E5] dark:border-neutral-800 rounded-2xl sm:rounded-3xl shadow-2xl max-h-[80vh] sm:max-h-[82vh] top-[54%] sm:top-[53%] translate-y-[-50%] flex flex-col"
      >
        <div
          data-lenis-prevent
          className="w-full h-full max-h-[80vh] sm:max-h-[82vh] overflow-y-auto overflow-x-hidden overscroll-contain focus:outline-none no-scrollbar [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {/* Top Mockup Banner */}
          <div className="relative w-full border-b border-neutral-200 dark:border-neutral-800 bg-neutral-900 overflow-hidden flex flex-col">
            {/* Browser top controls */}
            <div className="w-full h-9 bg-neutral-200/90 dark:bg-neutral-800/90 backdrop-blur-md border-b border-neutral-300/80 dark:border-neutral-700/80 px-4 pr-14 flex items-center justify-between z-20 flex-shrink-0">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
              </div>
              <span className="text-xs font-mono text-neutral-500 dark:text-neutral-400 truncate max-w-[260px]">
                {isHostedLive ? project.live : `https://${displayHostname}`}
              </span>
              {isHostedLive ? (
                <Link
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[#2563EB] hover:underline flex items-center gap-1"
                >
                  <span>Open Website</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              ) : (
                <Link
                  href={project.github || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[#2563EB] hover:underline flex items-center gap-1"
                >
                  <span>View Repository</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              )}
            </div>

            {/* Hero Image with Exact 16:9 Aspect Ratio */}
            <div className="relative w-full aspect-[16/9] overflow-hidden bg-neutral-100 dark:bg-neutral-900">
              <Image
                src={project.src}
                alt={project.title}
                fill
                sizes="(max-width: 1024px) 100vw, 896px"
                className="object-cover object-top"
                priority
              />
            </div>
          </div>

          {/* Modal Content Body */}
          <div className="p-6 sm:p-8 md:p-10 space-y-8">
            {/* Header info */}
            <div>
              <div className="flex flex-wrap items-center gap-2.5 mb-3">
                <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-neutral-200/80 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
                  {project.category}
                </span>
                {isHostedLive ? (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-bold tracking-wider bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    LIVE ON VERCEL
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-bold tracking-wider bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800">
                    <span className="w-2 h-2 rounded-full bg-blue-500" />
                    OPEN SOURCE REPO
                  </span>
                )}
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0F0F0F] dark:text-white font-space">
                {project.title}
              </h2>
              <p className="mt-2 text-base sm:text-lg text-neutral-600 dark:text-neutral-300 font-normal leading-relaxed">
                {details?.subtitle || project.category}
              </p>

              {/* Action Buttons */}
              <div className="mt-6 flex flex-wrap items-center gap-3">
                {project.live && (
                  <Link
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0F0F0F] text-white dark:bg-white dark:text-[#0F0F0F] font-bold text-xs sm:text-sm tracking-wide hover:opacity-90 active:scale-95 transition-all shadow-md"
                  >
                    <span>Visit Live Website</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                )}
                {project.github && (
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-neutral-300 dark:border-neutral-700 text-[#0F0F0F] dark:text-neutral-200 font-semibold text-xs sm:text-sm hover:border-black dark:hover:border-white transition-all shadow-xs"
                  >
                    <Github className="w-4 h-4" />
                    <span>View GitHub Repository</span>
                  </Link>
                )}
              </div>
            </div>

            {/* Key Engineering Features Bento Grid */}
            {details?.features && details.features.length > 0 && (
              <div>
                <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-[#6B7280] dark:text-neutral-400 mb-4">
                  KEY ARCHITECTURE &amp; HIGHLIGHTS
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {details.features.map((feat, i) => (
                    <div
                      key={i}
                      className="p-5 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/60 dark:bg-neutral-900/40 backdrop-blur-xs flex flex-col justify-between"
                    >
                      <div>
                        <div className="w-10 h-10 rounded-xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center mb-3 border border-neutral-200/80 dark:border-neutral-700/80">
                          {feat.icon}
                        </div>
                        <h5 className="font-bold text-base text-[#0F0F0F] dark:text-white font-sans mb-1.5">
                          {feat.title}
                        </h5>
                        <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed font-normal">
                          {feat.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Technologies & Stack */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-[#6B7280] dark:text-neutral-400 mb-3">
                TECHNOLOGY STACK
              </h4>
              <div className="flex flex-wrap gap-2">
                {allSkills.map((skill, i) => (
                  <div
                    key={i}
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-700 shadow-xs"
                  >
                    {skill.icon && <span className="text-base">{skill.icon}</span>}
                    <span>{skill.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </ResponsiveDialogContent>
    </ResponsiveDialog>
  );
};

export default ProjectsSection;