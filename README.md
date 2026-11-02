# ⚡ Utkarsh Rajput | Software Engineering & GenAI Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=flat&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.4-38bdf8?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![Google Gemini](https://img.shields.io/badge/Gemini-2.0%20Flash%20Streaming-8E75C4?style=flat&logo=googlegemini)](https://ai.google.dev/)
[![Edge Runtime](https://img.shields.io/badge/Edge%20Runtime-Active-black?style=flat&logo=vercel)](https://vercel.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> **Computer Science Engineer delivering secure APIs, real-time systems, and GenAI/RAG solutions that go to production. Interested in system design, scalable services, and high-performance web apps.**

Live Site: [**utkarshbuilds.in**](https://utkarshbuilds.in)

---

## ✨ Flagship Capabilities & Architecture

- **🤖 Edge-Powered Conversational AI ("Chat with Utkarsh")**
  - **Zero Cold-Starts**: Runs on Next.js **Edge Runtime** on distributed edge nodes.
  - **Real-Time Token Streaming**: Streams tokens directly from Google's ultra-low-latency Gemini model using Server-Sent Events (SSE) with **~200–350ms Time-to-First-Token**.
  - **Guarded Persona & Fallbacks**: First-person authentic tone, strict multi-turn conversational context, and instantaneous local offline fallback.
  - **Automated Rate Limiting**: In-memory sliding window limiter protecting quotas against automated bots.

- **🎨 High-Fidelity Editorial UI & Micro-Interactions**
  - **Inertial Smooth Scrolling**: Powered by [Lenis](https://github.com/darkroomengineering/lenis) with custom scrollbar and modal scroll containment.
  - **ChromaGrid & Canvas Shaders**: Interactive WebGL-inspired canvas effects in the Hero and Tech Stack.
  - **GSAP & Framer Motion**: Scroll-driven sticky pin transitions, decrypted text reveals, and fluid curtain transitions between Experience and Education.
  - **Elastic Cursor**: Spring physics mouse follower with automatic mobile suppression.

- **🛡️ Production Security & Performance Hardened**
  - **Enterprise HTTP Security Headers**: `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Strict-Transport-Security`, `Referrer-Policy`, and `Permissions-Policy`.
  - **Path Traversal Protection**: MDX dynamic blog routes sanitize incoming slugs against directory traversal attacks and return clean Next.js 404 responses.
  - **Asset Optimization**: Converted high-resolution PNGs to modern WebP format, achieving a **92.3% reduction in media payload** (~7.3MB down to <600KB).
  - **Rate Limiting & Input Bounds**: Zod-enforced character caps and IP-based rate limiting on both `/api/chat` and `/api/send`.

- **⚡ Live Demonstrations & Production Projects**
  - **Sentinel**: Real-time distributed system telemetry and AI error diagnostics built with InfluxDB, Redis, and Socket.io.
  - **DocSense**: High-speed AI RAG platform handling 500 concurrent users with Pinecone vector search (<150ms) and streaming LLM responses.
  - **CodeNest**: Collaborative real-time IDE with live multi-cursor sync across 20+ languages and shared tldraw whiteboard.
  - **TradeAI**: Conversational natural-language quantitative trading backtester with a 43-test security audit.
  - **Siftrole**: Clean job aggregation platform ingesting direct ATS feeds (Greenhouse, Lever, Ashby) with dual AI agents.

- **⏱️ Automated Server Keep-Alive Workflow**
  - Configured GitHub Actions cron workflow (`.github/workflows/keep-alive.yml`) with automated retry logic to keep serverless and container hosts awake 24/7.

---

## 🛠️ Technical Stack

| Layer | Technologies & Tools |
|---|---|
| **Core Framework** | Next.js 14 (App Router), React 18, TypeScript 5 |
| **Edge & AI** | Google Gemini API (Streaming SSE), Next.js Edge Runtime, Pinecone, LangChain |
| **Real-Time & Telemetry** | Socket.io, InfluxDB, Redis, BullMQ |
| **Styling & Design Tokens** | Tailwind CSS, Lucide React, React Icons, Canvas Confetti |
| **Motion & Dynamics** | GSAP 3, ScrollTrigger, Framer Motion 11, Lenis |
| **Security & Validation** | Zod Schema Validation, In-memory Sliding-Window Rate Limiter |
| **Services & Infrastructure** | Resend API (Transactional Email), Vercel |

---

## 🚀 Quick Start

### 1. Prerequisites
- **Node.js** (v18.17+ or v20+)
- **npm**, **pnpm**, or **yarn**

### 2. Installation
```bash
# Clone the repository
git clone https://github.com/Utkarsh1087/portfolio.git
cd portfolio

# Install dependencies
npm install
```

### 3. Environment Variables
Copy the template and fill in your keys:
```bash
cp .env.example .env.local
```

Inside `.env.local`:
```env
# Required — Resend API key for the contact form
RESEND_API_KEY=re_your_resend_api_key

# Required — Google Gemini API Key for Portfolio AI Assistant
GEMINI_API_KEY=your_gemini_api_key

# Optional — WebSocket server URL for realtime features (leave empty to disable)
NEXT_PUBLIC_WS_URL=

# Optional — Analytics
UMAMI_DOMAIN=
UMAMI_SITE_ID=
```

### 4. Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the application.

### 5. Production Build Verification
```bash
# Run strict TypeScript and type check
npx tsc --noEmit

# Compile production bundle
npm run build
```

---

## 📁 Project Architecture

```plaintext
portfolio/
├── .github/workflows/        # Automated keep-alive ping workflow
├── public/
│   ├── assets/               # WebP optimized previews & screenshot assets
│   ├── education/            # Institution branding badges
│   └── navbar-logos/         # High-resolution navigation icons
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── chat/route.ts # Edge Runtime streaming Gemini AI chat route
│   │   │   └── send/route.ts # Rate-limited Resend email dispatch route
│   │   ├── blogs/            # Markdown MDX technical articles & dynamic routes
│   │   ├── layout.tsx        # Global fonts, metadata, security headers, providers
│   │   └── page.tsx          # Single-page smooth-scroll portfolio architecture
│   ├── components/
│   │   ├── ai-chat/          # AI chat modal, floating action button, token streamer
│   │   ├── header/           # PillNav, responsive navigation, and status bar
│   │   ├── sections/         # Hero, About, Tech Stack, Projects, Services, Experience, Contact
│   │   └── ui/               # Reusable primitives, ChromaGrid, dialogs, buttons
│   ├── contexts/             # Socket.IO & AI Chat state providers
│   ├── data/                 # Projects, experience timeline, and site metadata
│   └── lib/                  # Rate limiting, MDX parsers, Lenis scroll utils
└── next.config.mjs           # Next.js configuration with HTTP security headers
```

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
Built with passion by **Utkarsh Rajput** ([@Utkarsh1087](https://github.com/Utkarsh1087)).
