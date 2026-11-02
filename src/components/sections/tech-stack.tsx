"use client";

import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Code2,
  Sparkles,
  Server,
  Layout,
  Database,
  Cpu,
  BrainCircuit,
  Workflow,
  Terminal,
  Trophy,
  Network,
  Binary,
} from "lucide-react";
import {
  SiCplusplus,
  SiTypescript,
  SiJavascript,
  SiPython,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiVite,
  SiHtml5,
  SiNodedotjs,
  SiExpress,
  SiSocketdotio,
  SiJsonwebtokens,
  SiGoogle,
  SiLangchain,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiInfluxdb,
  SiDocker,
  SiGithub,
  SiLinux,
  SiK6,
  SiJest,
  SiPostman,
  SiFirebase,
  SiN8N,
  SiFastapi,
  SiNeo4J,
  SiOpensearch,
} from "react-icons/si";
import ChromaGrid, { ChromaItem } from "@/components/ui/ChromaGrid";
import PillNav from "@/components/ui/PillNav";

const OpenAIIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className || "w-5 h-5"}
  >
    <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1683a.071.071 0 0 1 .038.052v5.5826a4.5045 4.5045 0 0 1-4.4945 4.4947zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1683a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.8956zm16.0993 3.8558L12.5973 8.3829l2.02-1.1636a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.402-.6862zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.0068 9.2297V6.8974a.0662.0662 0 0 1 .0283-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.6606v.0003zm-7.9405 4.7783L9.6641 11.884l2.845-1.6508 2.845 1.6508-2.845 1.6234z" />
  </svg>
);

gsap.registerPlugin(ScrollTrigger);

interface TechItem {
  name: string;
  icon: React.ReactNode;
  highlight?: boolean;
}

interface StackCategory {
  title: string;
  category: string;
  icon: React.ReactNode;
  description: string;
  badge?: string;
  items: TechItem[];
}

const CHROMA_TECH_ITEMS: ChromaItem[] = [
  {
    title: "Next.js",
    subtitle: "Full-Stack & SSR",
    accent: "#FFFFFF",
    icon: <SiNextdotjs />,
  },
  {
    title: "React",
    subtitle: "Frontend Architecture",
    accent: "#61DAFB",
    icon: <SiReact />,
  },
  {
    title: "TypeScript",
    subtitle: "Type-Safe Systems",
    accent: "#3178C6",
    icon: <SiTypescript />,
  },
  {
    title: "Node.js",
    subtitle: "Runtime & Services",
    accent: "#339933",
    icon: <SiNodedotjs />,
  },
  {
    title: "FastAPI",
    subtitle: "Async Python APIs",
    accent: "#009688",
    icon: <SiFastapi />,
  },
  {
    title: "Python",
    subtitle: "AI & Backend",
    accent: "#3776AB",
    icon: <SiPython />,
  },
  {
    title: "PostgreSQL",
    subtitle: "Relational Schemas",
    accent: "#4169E1",
    icon: <SiPostgresql />,
  },
  {
    title: "MongoDB",
    subtitle: "Document Stores",
    accent: "#47A248",
    icon: <SiMongodb />,
  },
  {
    title: "Redis",
    subtitle: "Sub-ms In-Memory Caching",
    accent: "#DC382D",
    icon: <SiRedis />,
  },
  {
    title: "Neo4j",
    subtitle: "Graph Database",
    accent: "#018BFF",
    icon: <SiNeo4J />,
  },
  {
    title: "OpenSearch",
    subtitle: "Distributed Search",
    accent: "#005EB8",
    icon: <SiOpensearch />,
  },
  {
    title: "Docker",
    subtitle: "Containerization",
    accent: "#2496ED",
    icon: <SiDocker />,
  },
  {
    title: "Tailwind CSS",
    subtitle: "Utility UI Systems",
    accent: "#06B6D4",
    icon: <SiTailwindcss />,
  },
  {
    title: "Gemini AI",
    subtitle: "Diagnostics & LLMs",
    accent: "#2563EB",
    icon: <SiGoogle />,
  },
  {
    title: "OpenAI",
    subtitle: "Generative Reasoning",
    accent: "#10A37F",
    icon: <OpenAIIcon />,
  },
  {
    title: "LangChain",
    subtitle: "Agentic Workflows",
    accent: "#F59E0B",
    icon: <SiLangchain />,
  },
  {
    title: "GraphRAG",
    subtitle: "Knowledge Graph RAG",
    accent: "#A855F7",
    icon: <Network className="w-full h-full text-purple-400" />,
  },
  {
    title: "LLM Embeddings",
    subtitle: "Vector Semantic Space",
    accent: "#EC4899",
    icon: <Binary className="w-full h-full text-pink-400" />,
  },
  {
    title: "Pinecone",
    subtitle: "Vector Search DB",
    accent: "#6366F1",
    icon: <Database className="w-full h-full text-indigo-400" />,
  },
  {
    title: "InfluxDB",
    subtitle: "Time-Series Telemetry",
    accent: "#22ADF6",
    icon: <SiInfluxdb />,
  },
  {
    title: "Socket.io",
    subtitle: "Real-Time Telemetry",
    accent: "#38BDF8",
    icon: <SiSocketdotio />,
  },
  {
    title: "C++",
    subtitle: "Algorithmic DSA",
    accent: "#00599C",
    icon: <SiCplusplus />,
  },
  {
    title: "Git & GitHub",
    subtitle: "Version Pipelines",
    accent: "#F05032",
    icon: <SiGithub />,
  },
  {
    title: "Grafana k6",
    subtitle: "Stress & Load Testing",
    accent: "#7D64FF",
    icon: <SiK6 />,
  },
];

const STACK_CATEGORIES: StackCategory[] = [
  {
    title: "Languages & Core",
    category: "FOUNDATIONS",
    icon: <Code2 className="w-5 h-5 text-[#2563EB]" />,
    description:
      "Core programming languages and computational problem-solving foundations.",
    badge: "250+ LeetCode DSA Solved",
    items: [
      { name: "C++", icon: <SiCplusplus className="text-[#00599C]" />, highlight: true },
      { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" />, highlight: true },
      { name: "JavaScript (ES6+)", icon: <SiJavascript className="text-[#F7DF1E]" /> },
      { name: "Python", icon: <SiPython className="text-[#3776AB]" /> },
      { name: "SQL", icon: <Database className="w-3.5 h-3.5 text-blue-500" /> },
    ],
  },
  {
    title: "AI & Intelligent Systems",
    category: "MACHINE INTELLIGENCE",
    icon: <Sparkles className="w-5 h-5 text-amber-500" />,
    description:
      "Large language model integration, retrieval-augmented generation, and reasoning workflows.",
    items: [
      { name: "Google Gemini APIs", icon: <SiGoogle className="text-blue-500" />, highlight: true },
      { name: "OpenAI APIs", icon: <OpenAIIcon className="w-3.5 h-3.5 text-emerald-500" /> },
      { name: "LangChain", icon: <SiLangchain className="text-amber-500" /> },
      { name: "GraphRAG & Graphs", icon: <Network className="w-3.5 h-3.5 text-purple-400" />, highlight: true },
      { name: "RAG Architectures", icon: <BrainCircuit className="w-3.5 h-3.5 text-purple-400" /> },
      { name: "LLM Embeddings", icon: <Binary className="w-3.5 h-3.5 text-pink-400" /> },
      { name: "Pinecone Vector DB", icon: <Database className="w-3.5 h-3.5 text-indigo-400" /> },
    ],
  },
  {
    title: "Backend & Real-Time",
    category: "SERVER ARCHITECTURE",
    icon: <Server className="w-5 h-5 text-emerald-500" />,
    description:
      "Concurrent microservices, real-time bidirectional streams, and zero-trust auth.",
    items: [
      { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" />, highlight: true },
      { name: "FastAPI (Python)", icon: <SiFastapi className="text-[#009688]" />, highlight: true },
      { name: "Express.js", icon: <SiExpress className="text-neutral-400" /> },
      { name: "WebSockets & Socket.io", icon: <SiSocketdotio className="text-sky-400" />, highlight: true },
      { name: "RESTful APIs", icon: <Workflow className="w-3.5 h-3.5 text-blue-400" /> },
      { name: "JWT & OAuth Auth", icon: <SiJsonwebtokens className="text-pink-500" /> },
    ],
  },
  {
    title: "Frontend Architecture",
    category: "CLIENT & INTERFACES",
    icon: <Layout className="w-5 h-5 text-sky-500" />,
    description:
      "High-performance client applications, server components, and fluid editorial design.",
    items: [
      { name: "Next.js (App Router)", icon: <SiNextdotjs className="text-neutral-800 dark:text-white" />, highlight: true },
      { name: "React.js", icon: <SiReact className="text-[#61DAFB]" />, highlight: true },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
      { name: "Vite", icon: <SiVite className="text-[#646CFF]" /> },
      { name: "HTML5 & CSS3", icon: <SiHtml5 className="text-[#E34F26]" /> },
    ],
  },
  {
    title: "Databases & In-Memory",
    category: "PERSISTENCE & CACHING",
    icon: <Database className="w-5 h-5 text-indigo-500" />,
    description:
      "Relational schemas, document stores, time-series metrics, and sub-millisecond caching.",
    items: [
      { name: "PostgreSQL", icon: <SiPostgresql className="text-[#4169E1]" />, highlight: true },
      { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" />, highlight: true },
      { name: "Redis", icon: <SiRedis className="text-[#DC382D]" /> },
      { name: "Neo4j (Graph DB)", icon: <SiNeo4J className="text-[#018BFF]" />, highlight: true },
      { name: "OpenSearch", icon: <SiOpensearch className="text-[#005EB8]" /> },
      { name: "InfluxDB (Time-Series)", icon: <SiInfluxdb className="text-[#22ADF6]" />, highlight: true },
    ],
  },
  {
    title: "DevOps & Engineering Tools",
    category: "INFRASTRUCTURE & QA",
    icon: <Cpu className="w-5 h-5 text-purple-500" />,
    description:
      "Containerization, performance stress testing, automated pipelines, and workflow automation.",
    items: [
      { name: "Docker", icon: <SiDocker className="text-[#2496ED]" />, highlight: true },
      { name: "Git & GitHub", icon: <SiGithub className="text-neutral-800 dark:text-white" /> },
      { name: "Linux", icon: <SiLinux className="text-amber-400" /> },
      { name: "Grafana k6 (Load Testing)", icon: <SiK6 className="text-[#7D64FF]" /> },
      { name: "Jest & Supertest", icon: <SiJest className="text-[#C21325]" /> },
      { name: "Postman", icon: <SiPostman className="text-[#FF6C37]" /> },
      { name: "Firebase", icon: <SiFirebase className="text-[#FFCA28]" /> },
      { name: "n8n Automation", icon: <SiN8N className="text-[#EA4B71]" /> },
    ],
  },
];

const TechStackSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [viewMode, setViewMode] = useState<"spotlight" | "bento">("spotlight");
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (viewMode !== "bento") return;
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".bento-stack-card");
      cards.forEach((card) => {
        gsap.from(card, {
          y: 40,
          opacity: 0,
          duration: 0.8,
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
  }, [viewMode]);

  return (
    <section
      id="stack"
      ref={containerRef}
      className="relative w-full py-24 md:py-32 px-6 sm:px-10 md:px-14 bg-[#F8F8F6] dark:bg-[#0F0F0F] text-[#0F0F0F] dark:text-neutral-100 transition-colors duration-300 border-t border-[#E5E5E5] dark:border-neutral-800"
    >
      <div id="skills" className="absolute top-0 pointer-events-none" />
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 md:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-[0.15em] uppercase text-[#6B7280] dark:text-neutral-400 border border-neutral-200 dark:border-neutral-800 mb-4 bg-white/50 dark:bg-neutral-900/50">
              <Terminal className="w-3.5 h-3.5 text-[#2563EB]" />
              <span>TECHNICAL ARSENAL</span>
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-[-0.03em] leading-[0.95] text-[#0F0F0F] dark:text-white font-sans">
              Tech <span className="text-[#2563EB]">Stack</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl font-normal leading-relaxed">
              The languages, frameworks, and tools I use to build fast, reliable web applications, from the UI to the database to deployment.
            </p>
          </div>

          {/* View Mode Toggle with React Bits PillNav Effect */}
          <div className="self-start md:self-auto">
            <PillNav
              items={[
                {
                  label: "Spotlight Grid",
                  icon: <Sparkles className="w-3.5 h-3.5 text-[#2563EB]" />,
                },
                {
                  label: "Categorized Bento",
                  icon: <Layout className="w-3.5 h-3.5 text-[#2563EB]" />,
                },
              ]}
              activeIndex={viewMode === "spotlight" ? 0 : 1}
              onItemClick={(_item: unknown, index: number) => {
                setViewMode(index === 0 ? "spotlight" : "bento");
              }}
              layout="joined"
              surface="solid"
              itemStyle="plain"
              hoverEffect="glide"
              indicator="pill"
              size="sm"
              collapse="never"
              theme={mounted && resolvedTheme === "light" ? "light" : "dark"}
              bounce={0.2}
              stretch={0.3}
              className="text-xs font-bold"
            />
          </div>
        </div>

        {/* View 1: ChromaGrid Interactive Spotlight (Compact Cards, Zero Resistance & Fast Cursor Follow) */}
        {viewMode === "spotlight" ? (
          <div className="w-full">
            <ChromaGrid
              items={CHROMA_TECH_ITEMS}
              columns={8}
              minCardWidth={115}
              gap={10}
              radius={240}
              softness={0.65}
              damping={0.06}
              aspectRatio="1 / 1"
              cardRadius={14}
              glow={0.7}
              borderGlow={1}
              theme={mounted && resolvedTheme === "light" ? "light" : "dark"}
              reveal="spotlight"
            />
          </div>
        ) : (
          /* View 2: Categorized Bento Grid (Compact & Sleek) */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {STACK_CATEGORIES.map((cat, idx) => (
              <div
                key={idx}
                className="bento-stack-card group relative p-5 sm:p-6 rounded-2xl border border-[#E5E5E5] dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/50 backdrop-blur-md transition-all duration-300 hover:border-neutral-400 dark:hover:border-neutral-600 hover:shadow-xl flex flex-col justify-between"
              >
                <div>
                  {/* Header row: Icon & Eyebrow */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-neutral-100 dark:bg-neutral-800/80 border border-neutral-200 dark:border-neutral-700/80 flex items-center justify-center">
                      {cat.icon}
                    </div>
                    <span className="text-[10px] sm:text-xs font-mono font-bold tracking-widest text-[#6B7280] dark:text-neutral-400 uppercase">
                      {cat.category}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl sm:text-2xl font-extrabold uppercase tracking-tight text-[#0F0F0F] dark:text-white font-sans group-hover:text-[#2563EB] transition-colors">
                    {cat.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal">
                    {cat.description}
                  </p>

                  {/* Special Highlight Badge */}
                  {cat.badge && (
                    <div className="mt-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                      <Trophy className="w-3.5 h-3.5 text-amber-500" />
                      <span>{cat.badge}</span>
                    </div>
                  )}
                </div>

                {/* Technology Chips Grid */}
                <div className="mt-6 pt-5 border-t border-neutral-200/80 dark:border-neutral-800/80 flex flex-wrap gap-2">
                  {cat.items.map((item, i) => (
                    <span
                      key={i}
                      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all duration-200 ${
                        item.highlight
                          ? "bg-neutral-100 dark:bg-neutral-800 text-[#0F0F0F] dark:text-white border-neutral-300 dark:border-neutral-700 shadow-xs hover:border-[#2563EB]"
                          : "bg-white/50 dark:bg-neutral-900/40 text-neutral-700 dark:text-neutral-300 border-neutral-200/80 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600"
                      }`}
                    >
                      <span className="text-sm flex-shrink-0">{item.icon}</span>
                      <span>{item.name}</span>
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default TechStackSection;
