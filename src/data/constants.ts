// Utkarsh's actual tech stack — cleaned up
export enum SkillNames {
  JS = "js",
  TS = "ts",
  HTML = "html",
  CSS = "css",
  REACT = "react",
  NEXTJS = "nextjs",
  TAILWIND = "tailwind",
  BOOTSTRAP = "bootstrap",
  NODEJS = "nodejs",
  EXPRESS = "express",
  POSTGRES = "postgres",
  MONGODB = "mongodb",
  FIREBASE = "firebase",
  GIT = "git",
  GITHUB = "github",
  POSTMAN = "postman",
  FIGMA = "figma",
  VERCEL = "vercel",
  RAILWAY = "railway",
  CPP = "cpp",
  PYTHON = "python",
  SOCKETIO = "socketio",
  NPM = "npm",
}

export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
};

export const SKILLS: Record<SkillNames, Skill> = {
  [SkillNames.JS]: {
    id: 1,
    name: "js",
    label: "JavaScript",
    shortDescription: "yeeting code into the DOM since '95, no cap! 💯🚀",
    color: "#f0db4f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  [SkillNames.TS]: {
    id: 2,
    name: "ts",
    label: "TypeScript",
    shortDescription: "JavaScript's overachieving cousin who's always flexing 💯🔒",
    color: "#007acc",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  [SkillNames.HTML]: {
    id: 3,
    name: "html",
    label: "HTML",
    shortDescription: "the internet's granddad, still bussin' fr fr! 💀🔥",
    color: "#e34c26",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  [SkillNames.CSS]: {
    id: 4,
    name: "css",
    label: "CSS",
    shortDescription: "styling with the ultimate drip, no cap 💁‍♂️🔥",
    color: "#563d7c",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  [SkillNames.REACT]: {
    id: 5,
    name: "react",
    label: "React",
    shortDescription: `"use using"\nusing use = useUsing("use")`,
    color: "#61dafb",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  [SkillNames.NEXTJS]: {
    id: 6,
    name: "nextjs",
    label: "Next.js",
    shortDescription: "the drama queen of front-end frameworks, and we stan! 👑📜",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  [SkillNames.TAILWIND]: {
    id: 7,
    name: "tailwind",
    label: "Tailwind",
    shortDescription: "utility classes hitting different fr fr 🌪️🔥",
    color: "#38bdf8",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
  },
  [SkillNames.BOOTSTRAP]: {
    id: 8,
    name: "bootstrap",
    label: "Bootstrap",
    shortDescription: "back when we thought !important was fine ⚡",
    color: "#7952b3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  },
  [SkillNames.NODEJS]: {
    id: 9,
    name: "nodejs",
    label: "Node.js",
    shortDescription: "JavaScript said 'sike, I'm backend now', deadass! 🔙🔚",
    color: "#6cc24a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  [SkillNames.EXPRESS]: {
    id: 10,
    name: "express",
    label: "Express",
    shortDescription: "middlewares go dummy hard, no cap! 🚂💨",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  [SkillNames.POSTGRES]: {
    id: 11,
    name: "postgres",
    label: "PostgreSQL",
    shortDescription: "SQL but make it fashion, purr 💅🐘",
    color: "#336791",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  [SkillNames.MONGODB]: {
    id: 12,
    name: "mongodb",
    label: "MongoDB",
    shortDescription: "flexin' with that NoSQL drip, respectfully! 💪🍃",
    color: "#47a248",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  [SkillNames.FIREBASE]: {
    id: 13,
    name: "firebase",
    label: "Firebase",
    shortDescription: "your app's ultimate wingman, OTP auth and all! 🔥👌",
    color: "#ffca28",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },
  [SkillNames.GIT]: {
    id: 14,
    name: "git",
    label: "Git",
    shortDescription: "the code's personal bodyguard, no cap! 🕵️‍♂️🔄",
    color: "#f1502f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  [SkillNames.GITHUB]: {
    id: 15,
    name: "github",
    label: "GitHub",
    shortDescription: "sliding into those pull requests, IYKYK! 🐙",
    color: "#000000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  [SkillNames.POSTMAN]: {
    id: 16,
    name: "postman",
    label: "Postman",
    shortDescription: "API testing with drip — the real MVP! 📬🧪",
    color: "#ef5b25",
    icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
  },
  [SkillNames.FIGMA]: {
    id: 17,
    name: "figma",
    label: "Figma",
    shortDescription: "from wireframe to wow in record time ✏️🎨",
    color: "#f24e1e",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
  [SkillNames.VERCEL]: {
    id: 18,
    name: "vercel",
    label: "Vercel",
    shortDescription: "git push and ship it — that's the whole pipeline 🚀🌿",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
  },
  [SkillNames.RAILWAY]: {
    id: 19,
    name: "railway",
    label: "Railway",
    shortDescription: "backend deployment without the infra headache 🚂",
    color: "#0B0D0E",
    icon: "https://railway.app/brand/logo-light.svg",
  },
  [SkillNames.CPP]: {
    id: 20,
    name: "cpp",
    label: "C++",
    shortDescription: "100+ LeetCode problems and counting, DSA grinder mode 💪",
    color: "#00599c",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  },
  [SkillNames.PYTHON]: {
    id: 21,
    name: "python",
    label: "Python",
    shortDescription: "indentation-based anxiety but make it powerful 🐍",
    color: "#3776ab",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  [SkillNames.SOCKETIO]: {
    id: 22,
    name: "socketio",
    label: "Socket.io",
    shortDescription: "real-time or bust — sub-100ms messaging 📡",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg",
  },
  [SkillNames.NPM]: {
    id: 23,
    name: "npm",
    label: "NPM",
    shortDescription: "package manager said 'I gotchu fam', period! 📦💯",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
  },
};

export type Experience = {
  id: number;
  startDate: string;
  endDate: string;
  title: string;
  company: string;
  description: string[];
  skills: SkillNames[];
};

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    startDate: "Jan 2026",
    endDate: "Present",
    title: "Co-Founder & Full Stack Developer",
    company: "rpar.in",
    description: [
      "Spotted a real gap in the repair services market and co-founded rpar.in from scratch.",
      "Sole technical co-founder — making all product, architecture & business decisions from day one.",
      "Building the full stack with MERN + Next.js, designing scalable APIs and database schemas.",
      "Owning the entire product lifecycle from wireframes to production deployments.",
      "Running growth strategy, user acquisition and technical roadmap simultaneously.",
    ],
    skills: [
      SkillNames.NEXTJS,
      SkillNames.REACT,
      SkillNames.NODEJS,
      SkillNames.EXPRESS,
      SkillNames.MONGODB,
      SkillNames.TAILWIND,
      SkillNames.VERCEL,
      SkillNames.GIT,
    ],
  },
  {
    id: 2,
    startDate: "Jul 2025",
    endDate: "Dec 2025",
    title: "Full Stack Developer & Research Head",
    company: "YesCity.in",
    description: [
      "Engineered 8+ REST API routes using Next.js App Router and MongoDB, deployed on Vercel.",
      "Set up Firebase OTP authentication with JWT sessions, cutting unauthorized access to zero post-launch.",
      "Shipped an AI chatbot via OpenAI APIs and real-time messaging via Pusher, reducing latency by ~60%.",
      "Designed a data schema covering 10+ city insight categories that shaped 3 core MVP decisions.",
      "Grew from Research Intern to Research Head and Full Stack Developer in 6 months.",
    ],
    skills: [
      SkillNames.NEXTJS,
      SkillNames.NODEJS,
      SkillNames.MONGODB,
      SkillNames.FIREBASE,
      SkillNames.VERCEL,
      SkillNames.GIT,
    ],
  },
];

export const themeDisclaimers = {
  light: [
    "Warning: Light mode emits a gazillion lumens of pure radiance!",
    "Caution: Light mode ahead! Please don't try this at home.",
    "Only trained professionals can handle this much brightness. Proceed with sunglasses!",
    "Brace yourself! Light mode is about to make everything shine brighter than your future.",
    "Flipping the switch to light mode... Are you sure your eyes are ready for this?",
  ],
  dark: [
    "Light mode? I thought you went insane... but welcome back to the dark side!",
    "Switching to dark mode... How was life on the bright side?",
    "Dark mode activated! Thanks you from the bottom of my heart, and my eyes too.",
    "Welcome back to the shadows. How was life out there in the light?",
    "Dark mode on! Finally, someone who understands true sophistication.",
  ],
};
