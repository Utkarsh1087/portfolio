import AceTernityLogo from "@/components/logos/aceternity";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
  SiCodemirror,
  SiRedis,
  SiInfluxdb,
  SiGooglegemini,
  SiStripe,
  SiK6,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { LuPencil, LuSparkles } from "react-icons/lu";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};

const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
  codemirror: {
    title: "CodeMirror",
    bg: "black",
    fg: "white",
    icon: <SiCodemirror />,
  },
  tldraw: {
    title: "tldraw",
    bg: "black",
    fg: "white",
    icon: <LuPencil />,
  },
  openrouter: {
    title: "OpenRouter",
    bg: "black",
    fg: "white",
    icon: <LuSparkles />,
  },
  influxdb: {
    title: "InfluxDB",
    bg: "black",
    fg: "white",
    icon: <SiInfluxdb />,
  },
  redis: {
    title: "Redis",
    bg: "black",
    fg: "white",
    icon: <SiRedis />,
  },
  gemini: {
    title: "Gemini",
    bg: "black",
    fg: "white",
    icon: <SiGooglegemini />,
  },
  stripe: {
    title: "Stripe",
    bg: "black",
    fg: "white",
    icon: <SiStripe />,
  },
  k6: {
    title: "k6",
    bg: "black",
    fg: "white",
    icon: <SiK6 />,
  },
  pinecone: {
    title: "Pinecone",
    bg: "black",
    fg: "white",
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M12 2L8.5 6.5h7L12 2zm-5 6.5L4 12.5h6l-3-4zm10 0l-3 4h6l-3-4zM12 11l-3.5 4.5h7L12 11zm-5 5.5L4 21h6l-3-4.5zm10 0l-3 4.5h6l-3-4.5zM12 17.5L9.5 22h5L12 17.5z" />
      </svg>
    ),
  },
};

export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};

const projects: Project[] = [
  {
    id: "sentinel",
    category: "Observability Platform",
    title: "Sentinel",
    src: "/assets/projects-screenshots/sentinel/sentinel.webp",
    screenshots: ["sentinel.webp"],
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.ts,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.influxdb,
        PROJECT_SKILLS.postgres,
        PROJECT_SKILLS.redis,
        PROJECT_SKILLS.sockerio,
        PROJECT_SKILLS.gemini,
      ],
    },
    live: "https://sentinel-platform-tau.vercel.app/",
    github: "https://github.com/Utkarsh1087/Sentinel",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Sentinel — Production-Grade Observability & AI Diagnostics Platform
          </TypographyP>
          <TypographyP className="font-mono">
            Full-stack MERN + InfluxDB + AI Diagnostics · 2025
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Real-time Telemetry</TypographyH3>
          <p className="font-mono mb-2">
            Built a real-time telemetry dashboard tracking CPU, RAM and API
            latency with Socket.io, backed by InfluxDB Cloud for time-series data
            and PostgreSQL for identity management.
          </p>
          <TypographyH3 className="my-4 mt-8">
            AI Diagnostics & Alerts
          </TypographyH3>
          <p className="font-mono mb-2">
            Integrated a Gemini-powered diagnostic engine that analyzes error
            logs and delivers root-cause solutions in real-time, plus
            multi-channel smart alerts via Discord/Telegram on custom
            thresholds.
          </p>
          <TypographyH3 className="my-4 mt-8">
            SDK & Infrastructure
          </TypographyH3>
          <p className="font-mono mb-2">
            Shipped a plug-and-play Node.js SDK that instruments any MERN app in
            3 lines, with BullMQ/Upstash Redis for background alert queues and a
            &ldquo;Liquid Glass&rdquo; Recharts dashboard on the frontend.
          </p>
          <p className="font-mono mb-2 mt-4 text-center">
            Tech Stack: React · Node.js · Socket.io · InfluxDB · PostgreSQL ·
            Redis · BullMQ · Gemini
          </p>
        </div>
      );
    },
  },
  {
    id: "docsense",
    category: "Enterprise AI RAG Platform",
    title: "DocSense",
    src: "/assets/projects-screenshots/docsense/docsense-v2.webp",
    screenshots: ["docsense-v2.webp"],
    skills: {
      frontend: [
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.react,
      ],
      backend: [
        PROJECT_SKILLS.gemini,
        PROJECT_SKILLS.pinecone,
        PROJECT_SKILLS.mongo,
        PROJECT_SKILLS.stripe,
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.k6,
      ],
    },
    live: "https://github.com/Utkarsh1087/DocSense",
    github: "https://github.com/Utkarsh1087/DocSense",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            DocSense — Enterprise Full-Stack AI RAG Platform
          </TypographyP>
          <TypographyP className="font-mono">
            Next.js 14 · Pinecone Vector DB · Gemini 1.5 Flash · Stripe SaaS · k6 Testing · 2025
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Ultra-Low Latency Vector Retrieval (&lt;150ms)</TypographyH3>
          <p className="font-mono mb-2">
            Direct Pinecone vector similarity queries with indexed user-level metadata filters, delivering semantic vector retrieval in sub-150ms. Real-time response streaming powered by Google Gemini 1.5 Flash via Server-Sent Events (SSE) with under 500ms time-to-first-token (TTFT).
          </p>
          <TypographyH3 className="my-4 mt-8">3-Engine Parallel Ingestion Pipeline</TypographyH3>
          <p className="font-mono mb-2">
            Engineered a multi-modal document parsing pipeline (~2.5s / 10 pages) supporting Standard sequential extraction, Coordinate-based Layout-Aware paragraph reconstruction, and Table Engine with X/Y clustering for Markdown pipe table reconstruction. Embedded via 5 concurrent flight batches of 20 chunks with exponential backoff retry.
          </p>
          <TypographyH3 className="my-4 mt-8">High Concurrency & Scalability (500 VUs)</TypographyH3>
          <p className="font-mono mb-2">
            Stress-tested with Grafana k6 under sustained 500 concurrent virtual users achieving 100% check success rates. Scaled to 40,000+ pages (~100,000 vectors) with MongoDB connection pooling (maxPoolSize: 50) supporting 5,000+ registered users.
          </p>
          <TypographyH3 className="my-4 mt-8">Enterprise Security & Automated SaaS Billing</TypographyH3>
          <p className="font-mono mb-2">
            Hardened with an SSRF defense engine blocking loopback and cloud metadata (169.254.169.254), sliding-window rate limiting (15/60 RPM), cryptographic HS256 JWT sessions, and full Stripe subscription billing ($12/mo Pro) with cryptographically verified webhooks.
          </p>
          <p className="font-mono mb-2 mt-4 text-center">
            Enterprise document intelligence at scale. ⚡
          </p>
        </div>
      );
    },
  },
  {
    id: "tradeai",
    category: "Quantitative Trading & AI Copilot",
    title: "TradeAI",
    src: "/assets/projects-screenshots/tradeai/tradeai-v2.webp",
    screenshots: ["tradeai-v2.webp"],
    skills: {
      frontend: [
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.gemini,
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.python,
      ],
    },
    live: "https://github.com/Utkarsh1087/TradeAI",
    github: "https://github.com/Utkarsh1087/TradeAI",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            TradeAI — Quantitative Trading Research &amp; AI Hypothesis Copilot
          </TypographyP>
          <TypographyP className="font-mono">
            Next.js 16 · React 19 · Gemini 2.5 · Groq · Zod Validation · 43-Point Security Audit
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Dual-Engine Quantitative Parsing</TypographyH3>
          <p className="font-mono mb-2">
            Translates conversational market questions into mathematically sound, unambiguous backtesting specifications (Backtrader, VectorBT, QuantConnect). Built with a dual-engine architecture: structured LLM output with an intelligent deterministic offline parser guaranteeing zero downtime.
          </p>
          <TypographyH3 className="my-4 mt-8">Active Disambiguation Engine</TypographyH3>
          <p className="font-mono mb-2">
            Systematically parses hypotheses by distinguishing what was explicitly stated vs. assumed vs. missing. Clarifies ambiguities interactively with discrete quantitative chips and customizable overrides instead of silent parameter invention.
          </p>
          <TypographyH3 className="my-4 mt-8">Interactive Copilot Research Workspace</TypographyH3>
          <p className="font-mono mb-2">
            Features an interactive research SPA with word-by-word streaming suggestions, real-time parameter tuning (entry, exit, stop loss, holding horizon), and instant export to JSON and Markdown experiment specifications.
          </p>
          <TypographyH3 className="my-4 mt-8">43-Test Security &amp; QA Audit (100% Pass)</TypographyH3>
          <p className="font-mono mb-2">
            Hardened against OWASP Top 10 and LLM vulnerabilities: sliding-window rate limiting (30 req/min), anti-prompt injection sanitizers, and zero client credential leakage verified through an automated 43-point test suite.
          </p>
          <p className="font-mono mb-2 mt-4 text-center">
            Turn market intuition into testable quantitative science. 📈
          </p>
        </div>
      );
    },
  },
  {
    id: "siftrole",
    category: "AI Career Platform & ATS Pipeline",
    title: "Siftrole",
    src: "/assets/projects-screenshots/siftrole/siftrole-v2.webp",
    screenshots: ["siftrole-v2.webp"],
    skills: {
      frontend: [
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.postgres,
        PROJECT_SKILLS.prisma,
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.gemini,
      ],
    },
    live: "https://siftrole-user.vercel.app",
    github: "https://github.com/Utkarsh1087/Siftrole",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Siftrole — Intelligent Tech Career Platform &amp; ATS Pipeline
          </TypographyP>
          <TypographyP className="font-mono">
            Next.js 16 · PostgreSQL (Neon) · Prisma ORM · Dual AI Copilots · Express Microservices
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Real-Time ATS Ingestion Pipeline</TypographyH3>
          <p className="font-mono mb-2">
            Automated multi-source scraper and API sync engine pulling verified tech listings directly from official ATS feeds (Greenhouse, Lever, Ashby, SmartRecruiters) and direct recruiter channels, bypassing stale aggregators.
          </p>
          <TypographyH3 className="my-4 mt-8">Two-Tier AI Agent Architecture</TypographyH3>
          <p className="font-mono mb-2">
            Engineered dual specialized agents: a candidate-facing Career Copilot with resume parsing, ATS scoring, and recruiter cold-email generation; plus an admin operations agent grounded in real-time database analytics.
          </p>
          <TypographyH3 className="my-4 mt-8">Multi-Key Failover Cascade</TypographyH3>
          <p className="font-mono mb-2">
            Built an enterprise failover layer cascading requests across Google Gemini Flash and Groq models with dynamic rate-limit detection to maintain 100% copilot uptime.
          </p>
          <TypographyH3 className="my-4 mt-8">Monorepo Multi-Service Architecture</TypographyH3>
          <p className="font-mono mb-2">
            Modular full-stack monorepo consisting of candidate Next.js 16 app, an administrative operations portal, and an Express.js backend worker sharing a centralized Neon serverless PostgreSQL database with Prisma ORM.
          </p>
          <p className="font-mono mb-2 mt-4 text-center">
            Connecting emerging tech talent with verified roles, instantly. 🚀
          </p>
        </div>
      );
    },
  },
  {
    id: "webcraft",
    category: "AI SaaS Platform",
    title: "WebCraft",
    src: "/assets/projects-screenshots/webcraft/webcraft-v2.webp",
    screenshots: ["webcraft-v2.webp"],
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.postgres,
        PROJECT_SKILLS.prisma,
      ],
    },
    live: "https://web-craft-eta.vercel.app/",
    github: "https://github.com/Utkarsh1087/webcraft",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            WebCraft — AI-Powered Web Application Generator
          </TypographyP>
          <TypographyP className="font-mono">
            A full-stack SaaS platform with 5+ generation modes that turns your
            ideas into interactive web UIs in under 10 seconds per request.
            Powered by OpenAI / OpenRouter LLM APIs and secured with Better-Auth
            and CORS.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">AI Generation Modes</TypographyH3>
          <p className="font-mono mb-2">
            5+ generation modes covering landing pages, dashboards, forms and
            more — each optimised for a different use case, all delivering under
            200ms API response time.
          </p>
          <TypographyH3 className="my-4 mt-8">Tech Stack</TypographyH3>
          <p className="font-mono mb-2">
            React (Vite) · Node.js / Express · PostgreSQL · Prisma ORM ·
            OpenAI / OpenRouter · Better-Auth · Vercel + Railway deployment.
          </p>
          <p className="font-mono mb-2 mt-4 text-center">
            From idea to live UI — blazing fast. No boilerplate, just vibes. 🚀
          </p>
        </div>
      );
    },
  },
  {
    id: "codenest",
    category: "Collaborative IDE",
    title: "CodeNest",
    src: "/assets/projects-screenshots/codenest/codenest.webp",
    screenshots: ["codenest.webp"],
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.codemirror,
        PROJECT_SKILLS.tldraw,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.mongo,
        PROJECT_SKILLS.sockerio,
        PROJECT_SKILLS.openrouter,
      ],
    },
    live: "https://code-nest-pi-five.vercel.app/",
    github: "https://github.com/Utkarsh1087/CodeNest",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            CodeNest — AI-Powered Collaborative Coding Workspace
          </TypographyP>
          <TypographyP className="font-mono">
            A high-fidelity MERN platform for real-time collaborative coding,
            featuring a &ldquo;Liquid Glass&rdquo; UI, AI-driven suggestions, and
            architectural planning tools. Shipped with Tailwind CSS v4 and
            Socket.io.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">
            Real-time Collaboration
          </TypographyH3>
          <p className="font-mono mb-2">
            Built with Socket.io for live cursor tracking and instant sync
            across a CodeMirror editor supporting 20+ languages. One-click
            workspace invitations for seamless onboarding.
          </p>
          <TypographyH3 className="my-4 mt-8">AI Copilot & Planning</TypographyH3>
          <p className="font-mono mb-2">
            Integrated AI Copilot via OpenRouter API with inline suggestions and
            a chat module, plus a tldraw whiteboard for real-time architectural
            planning.
          </p>
          <TypographyH3 className="my-4 mt-8">File Management</TypographyH3>
          <p className="font-mono mb-2">
            Hierarchical file system with full CRUD persisted in MongoDB.
            Premium &ldquo;Liquid Glass&rdquo; glassmorphism aesthetic implemented using
            Tailwind CSS v4.
          </p>
          <p className="font-mono mb-2 mt-4 text-center">
            Collaborative coding, redefined. 🚀
          </p>
        </div>
      );
    },
  },
];

export default projects;
