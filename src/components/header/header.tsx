"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useLenis } from "@/lib/lenis";
import Nav from "./nav";
import { cn } from "@/lib/utils";
import PillNav from "@/components/ui/PillNav";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("#about");
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);
  const lenis = useLenis();

  useEffect(() => {
    setMounted(true);
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);

          // Dynamic scrollspy for PillNav (throttled to RAF, only update on actual change)
          const sections = NAV_LINKS.map((link) => link.href.replace("#", ""));
          const scrollY = window.scrollY + 140;
          let newSection = "#about";
          for (let i = sections.length - 1; i >= 0; i--) {
            const el = document.getElementById(sections[i]);
            if (el && el.offsetTop <= scrollY) {
              newSection = `#${sections[i]}`;
              break;
            }
          }
          setActiveSection((prev) => (prev !== newSection ? newSection : prev));
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        if (lenis) {
          lenis.scrollTo(target as HTMLElement, {
            offset: -75,
            duration: 1.25,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          });
        } else {
          target.scrollIntoView({ behavior: "smooth" });
        }
        window.history.pushState(null, "", href);
      }
    }
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (typeof window !== "undefined" && (window.location.pathname === "/" || window.location.pathname === "")) {
      e.preventDefault();
      if (lenis) {
        lenis.scrollTo(0, {
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      window.history.pushState(null, "", "/");
    }
  };

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 w-full z-[1000] px-6 sm:px-10 md:px-14 py-4 sm:py-5 transition-all duration-300",
        isActive
          ? "bg-[#F8F8F6]/95 dark:bg-[#0F0F0F]/95 backdrop-blur-md border-b border-[#E5E5E5] dark:border-neutral-800"
          : isScrolled
          ? "bg-[#F8F8F6]/85 dark:bg-[#0F0F0F]/85 backdrop-blur-md border-b border-[#E5E5E5]/70 dark:border-neutral-800/70 shadow-xs"
          : "bg-transparent border-b border-transparent"
      )}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between">
        {/* Left: Standalone Brandmark Logo */}
        <Link
          href="/"
          onClick={handleLogoClick}
          className="flex items-center group focus:outline-none select-none ml-2 sm:ml-4 md:ml-6"
          aria-label="Home"
        >
          <div className="relative h-8 sm:h-9 w-14 sm:w-16 flex-shrink-0 group-hover:scale-105 transition-transform">
            <Image
              src="/navbar-logos/logo-4.png"
              alt="Brand Logo"
              fill
              unoptimized
              className="object-contain object-left dark:invert transition-all"
              priority
            />
          </div>
        </Link>

        {/* Center: Desktop Navigation with React Bits PillNav gliding effect */}
        <div className="hidden md:flex items-center">
          <PillNav
            items={NAV_LINKS}
            activeHref={activeSection}
            onItemClick={(item: any, _index: number, event: any) => {
              if (item?.href) {
                setActiveSection(item.href);
                handleSmoothScroll(event, item.href);
              }
            }}
            layout="joined"
            surface="glass"
            itemStyle="plain"
            hoverEffect="glide"
            indicator="pill"
            size="sm"
            collapse="never"
            theme={mounted && resolvedTheme === "light" ? "light" : "dark"}
            bounce={0.25}
            stretch={0.35}
            className="text-xs font-semibold tracking-wider uppercase"
          />
        </div>

        {/* Right: Theme Toggle + Primary CTA + Mobile Menu */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Theme Pill */}
          {mounted && (
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-neutral-300 dark:border-neutral-700 bg-white/60 dark:bg-neutral-900/60 text-neutral-700 dark:text-neutral-200 text-[11px] sm:text-xs font-semibold tracking-wider hover:border-neutral-400 dark:hover:border-neutral-500 hover:text-black dark:hover:text-white active:scale-95 transition-all shadow-xs cursor-pointer"
            >
              {resolvedTheme === "dark" ? (
                <>
                  <Sun size={13} className="stroke-[2.5]" />
                  <span className="hidden sm:inline">LIGHT</span>
                </>
              ) : (
                <>
                  <Moon size={13} className="stroke-[2.5]" />
                  <span className="hidden sm:inline">DARK</span>
                </>
              )}
            </button>
          )}

          {/* Primary Pill: [ LET'S TALK ↗ ] */}
          <Link
            href="#contact"
            onClick={(e) => handleSmoothScroll(e, "#contact")}
            className="flex items-center gap-1.5 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full bg-[#0F0F0F] text-white dark:bg-white dark:text-[#0F0F0F] text-[11px] sm:text-xs font-bold tracking-wider hover:opacity-90 active:scale-95 transition-all shadow-sm"
          >
            <span>LET&apos;S TALK</span>
            <span className="text-[10px] leading-none">↗</span>
          </Link>

          {/* Mobile Menu Pill (hidden on desktop since links are in center) */}
          <button
            onClick={() => setIsActive(!isActive)}
            aria-label="Toggle menu"
            className="md:hidden flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-neutral-300 dark:border-neutral-700 bg-white/60 dark:bg-neutral-900/60 text-[#0F0F0F] dark:text-neutral-200 text-[11px] font-semibold tracking-wider hover:border-neutral-400 dark:hover:border-neutral-500 active:scale-95 transition-all shadow-xs cursor-pointer"
          >
            {isActive ? (
              <>
                <span>CLOSE</span>
                <span className="font-bold text-xs">✕</span>
              </>
            ) : (
              <>
                <span>MENU</span>
                <span className="font-black tracking-widest text-[9px]">••</span>
              </>
            )}
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {isActive && <Nav setIsActive={setIsActive} />}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
