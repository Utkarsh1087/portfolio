# 🚀 Utkarsh Rajput | 3D Portfolio

A high-fidelity developer portfolio featuring interactive 3D animations, premium glassmorphism, and seamless transitions. Built with Next.js 14, this showcase includes a unique 3D interactive keyboard and a detailed project gallery.

![Portfolio Preview](/assets/projects-screenshots/portfolio/landing.png)

## ✨ Unique Features

- **Interactive 3D Keyboard** — Built with Spline, where each key represents a technical skill.
- **"Liquid Glass" UI** — Premium glassmorphism aesthetic tailored with modern Tailwind design tokens.
- **Smart Contact Engine** — Real-time email delivery via Resend API with a custom dark-mode template.
- **Detailed Project Showcase** — High-fidelity modals featuring horizontal screenshot galleries and tech stack visualizations.
- **Performance Optimized** — Smooth scrolling with Lenis and refined animations using GSAP + Framer Motion.

## 🛠️ Tech Stack

| Layer | Technologies |
|---|---|
| **Framework** | Next.js 14 (App Router), TypeScript |
| **Styling** | Tailwind CSS, Shadcn UI, Aceternity UI |
| **Animation** | GSAP, Framer Motion |
| **3D Engine** | Spline Runtime |
| **Email Service** | Resend API |
| **Core Utilities** | Lenis Scroll, Zod, Lucide Icons |

---

## 🚀 Quick Start

### Prerequisites
- Node.js (v18+)
- npm, pnpm, or yarn

### Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/Utkarsh1087/portfolio.git
    cd portfolio
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Set up Environment Variables:**
    Create a `.env.local` file in the root directory:
    ```bash
    RESEND_API_KEY=your_resend_api_key
    ```

4. **Launch Development Server:**
    ```bash
    npm run dev
    ```

---

## 🎨 Personalization

All personal brand data is centralized in [`src/data/config.ts`](src/data/config.ts). Update this file to change site-wide metadata, social links, and SEO tags.

For project data and skill mappings, refer to:
- `src/data/projects.tsx` — Project descriptions, URLs, and screenshots.
- `src/data/constants.ts` — Work experience and technical skill definitions.

---

## ⌨️ 3D Keyboard Skill Mapping

The 3D keyboard uses the `public/assets/skills-keyboard.spline` scene. To update the skills:
1. Open the file in the [Spline Editor](https://app.spline.design/).
2. Rename keycap objects to match the keys in `src/data/constants.ts` (e.g., `js`, `react`, `tailwind`).
3. Re-export the file and overwrite the local asset.

---

## 🚀 Deployment

The fastest way to deploy is via **Vercel**:
1. Connect your GitHub repository to Vercel.
2. Add the `RESEND_API_KEY` in the Environment Variables dashboard.
3. Deploy!

---

## 📄 License & Credits

This project is open source under the [MIT License](LICENSE).

> **Original Template Credit**: Developed by [Naresh Khatri](https://github.com/Naresh-Khatri/3d-portfolio). This version has been significantly customized for a high-fidelity personal brand showcase.
