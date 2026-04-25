import AceTernityLogo from "@/components/logos/aceternity";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
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
  SiOpenai,
  SiRedis,
  SiInfluxdb,
  SiGooglegemini,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { LuPencil, LuSparkles } from "react-icons/lu";

const BASE_PATH = "/assets/projects-screenshots";

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
    src: "/assets/projects-screenshots/sentinel/sentinel.png",
    screenshots: ["sentinel.png"],
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
            "Liquid Glass" Recharts dashboard on the frontend.
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
    id: "portfolio",
    category: "Personal Portfolio",
    title: "Portfolio",
    src: "/assets/projects-screenshots/portfolio/landing.png",
    screenshots: [
      "landing.png",
      "navbar.png",
      "project.png",
      "projects.png",
      "skills.png",
    ],
    skills: {
      frontend: [
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.framerMotion,
        PROJECT_SKILLS.gsap,
        PROJECT_SKILLS.spline,
        PROJECT_SKILLS.shadcn,
      ],
      backend: [PROJECT_SKILLS.node],
    },
    live: "https://utkarsh-v1.vercel.app/",
    github: "https://github.com/Utkarsh1087/portfolio",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Portfolio — Modern Developer Showcase
          </TypographyP>
          <TypographyP className="font-mono">
            A premium, high-performance portfolio built with Next.js 14,
            featuring advanced glassmorphism, 3D interactive elements, and
            seamless page transitions.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Interactive Design</TypographyH3>
          <p className="font-mono mb-2">
            Integrated Spline for 3D keyboard interactions and GSAP/Framer
            Motion for smooth, high-fidelity animations. Implemented a "Liquid
            Glass" aesthetic using custom Tailwind design tokens.
          </p>
          <TypographyH3 className="my-4 mt-8">Performance & SEO</TypographyH3>
          <p className="font-mono mb-2">
            Optimized for Web Vitals with server-side rendering, dynamic
            imports, and responsive image handling. Fully accessible and
            SEO-friendly architecture.
          </p>
          <p className="font-mono mb-2 mt-4 text-center">
            Crafting digital experiences with precision. ✨
          </p>
        </div>
      );
    },
  },
  {
    id: "codenest",
    category: "Collaborative IDE",
    title: "CodeNest",
    src: "/assets/projects-screenshots/codenest/codenest.png",
    screenshots: ["codenest.png"],
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
            featuring a "Liquid Glass" UI, AI-driven suggestions, and
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
            Premium "Liquid Glass" glassmorphism aesthetic implemented using
            Tailwind CSS v4.
          </p>
          <p className="font-mono mb-2 mt-4 text-center">
            Collaborative coding, redefined. 🚀
          </p>
        </div>
      );
    },
  },
  {
    id: "webcraft",
    category: "AI SaaS Platform",
    title: "WebCraft",
    src: "/assets/projects-screenshots/webcraft/image.png",
    screenshots: ["image.png"],
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
    id: "forever",
    category: "E-Commerce",
    title: "Forever",
    src: "/assets/projects-screenshots/forever/forever.png",
    screenshots: ["forever.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.js,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.mongo,
      ],
    },
    live: "https://forever-frontend-lemon-seven.vercel.app/",
    github: "https://github.com/Utkarsh1087/ECOMMERCE_APP",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Forever — Premium Apparel E-Commerce Platform
          </TypographyP>
          <TypographyP className="font-mono">
            A full-stack e-commerce SPA built with React (Vite), TailwindCSS,
            Node.js / Express and MongoDB Atlas. Complete with an admin
            dashboard, multi-variant product support, and live payment flows.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Admin Dashboard</TypographyH3>
          <p className="font-mono mb-2">
            Role-based access control, inventory management, and full product
            CRUD with multi-variant support — all in a clean, fast interface.
          </p>
          <TypographyH3 className="my-4 mt-8">Payments & Auth</TypographyH3>
          <p className="font-mono mb-2">
            Stripe and Razorpay payment integrations, JWT-based authentication,
            and Cloudinary image handling. Deployed on Vercel with zero downtime.
          </p>
          <p className="font-mono mb-2 mt-4 text-center">
            Shopping made premium — one commit at a time. 🛍️
          </p>
        </div>
      );
    },
  },
  {
    id: "pingr",
    category: "Real-time Chat",
    title: "Pingr",
    src: "/assets/projects-screenshots/pingr/pingr.png",
    screenshots: ["pingr.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.js,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.mongo,
        PROJECT_SKILLS.sockerio,
      ],
    },
    live: "https://pingr-frontend-five.vercel.app/login",
    github: "https://github.com/Utkarsh1087/Pingr",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Pingr — Real-time Chat Application
          </TypographyP>
          <TypographyP className="font-mono">
            A full-stack MERN + Socket.io chat app with under 100ms message
            latency, online/offline presence tracking, and rock-solid security.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Real-time Messaging</TypographyH3>
          <p className="font-mono mb-2">
            Socket.io powering sub-100ms delivery with live online / offline
            indicators. Zustand for global state management cuts re-render
            overhead by ~30%.
          </p>
          <TypographyH3 className="my-4 mt-8">Security First</TypographyH3>
          <p className="font-mono mb-2">
            JWT sessions, bcrypt (10+ salt rounds) and HTTP-only cookies to
            eliminate XSS token exposure. Cloudinary handles all image uploads.
          </p>
          <p className="font-mono mb-2 mt-4 text-center">
            Chat fast, stay safe. 💬
          </p>
        </div>
      );
    },
  },
];

export default projects;
