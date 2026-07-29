const config = {
  title: "Utkarsh Rajput | Full-Stack Developer",
  description: {
    long: "Explore the portfolio of Utkarsh Rajput, a Full Stack Developer specializing in MERN stack, Next.js, real-time applications, and scalable web platforms. Discover projects like WebCraft, Forever, Pingr and more. Let's build something amazing together!",
    short:
      "Portfolio of Utkarsh Rajput — Full Stack Developer building scalable web apps with MERN & Next.js.",
  },
  keywords: [
    "Utkarsh Rajput",
    "portfolio",
    "full-stack developer",
    "MERN stack",
    "Next.js",
    "React",
    "Node.js",
    "WebCraft",
    "Pingr",
    "Forever",
    "YesCity",
    "web development",
    "DSA",
    "LeetCode",
    "IIIT Una",
    "Framer Motion",
    "Socket.io",
    "MongoDB",
  ],
  author: "Utkarsh Rajput",
  email: "utkarsh.rajput.2005@gmail.com",
  site: "https://utkarsh-v1.vercel.app",

  // for github stars button
  githubUsername: "Utkarsh1087",
  githubRepo: "portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://x.com/UtkarshRaj74371",
    linkedin: "https://www.linkedin.com/in/utkarsh-rajput7/",
    instagram: "https://www.instagram.com/iutkarsh_rajput/",
    facebook: "",
    github: "https://github.com/Utkarsh1087",
    leetcode: "https://leetcode.com/u/utkarsh_44/",
  },
};
export { config };
