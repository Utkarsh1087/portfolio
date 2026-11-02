"use client";

import React, { useEffect, useRef } from "react";
import { ReactLenis, useLenis, type LenisRef } from "@/lib/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface LenisProps {
  children: React.ReactNode;
  isInsideModal?: boolean;
}

function SmoothScroll({ children, isInsideModal = false }: LenisProps) {
  const lenisRef = useRef<LenisRef>(null);

  useEffect(() => {
    // 1. Synchronize Lenis scroll ticks with GSAP's ticker for 1:1 frame lockstep
    const updateTicker = (time: number) => {
      lenisRef.current?.lenis?.raf(time * 1000);
    };

    gsap.ticker.add(updateTicker);

    // 2. Enable lag smoothing to gracefully absorb frame dips and prevent sudden jumps
    gsap.ticker.lagSmoothing(500, 33);

    // 3. Intercept anchor clicks for silky smooth Lenis transitions instead of abrupt jumps
    const handleAnchorClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      let targetSelector = "";
      if (href.startsWith("#") && href.length > 1) {
        targetSelector = href;
      } else if (
        href.startsWith("/#") &&
        href.length > 2 &&
        (window.location.pathname === "/" || window.location.pathname === "")
      ) {
        targetSelector = href.replace("/", "");
      }

      if (targetSelector) {
        const targetElement = document.querySelector(targetSelector);
        if (targetElement) {
          e.preventDefault();
          window.history.pushState(null, "", targetSelector);
          if (lenisRef.current?.lenis) {
            lenisRef.current.lenis.scrollTo(targetElement as HTMLElement, {
              offset: -75,
              duration: 1.25,
              easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            });
          } else {
            targetElement.scrollIntoView({ behavior: "smooth" });
          }
        }
      }
    };

    document.addEventListener("click", handleAnchorClick, { capture: true });

    // 4. Refresh ScrollTrigger after layout stabilizes
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 300);

    return () => {
      clearTimeout(timer);
      gsap.ticker.remove(updateTicker);
      document.removeEventListener("click", handleAnchorClick, { capture: true });
    };
  }, []);

  // Update ScrollTrigger whenever Lenis updates scroll
  useLenis(ScrollTrigger.update);

  return (
    <ReactLenis
      ref={lenisRef}
      root
      autoRaf={false}
      options={{
        duration: 0.8,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        wheelMultiplier: 1.1,
        touchMultiplier: 1.0,
        syncTouch: false,
        prevent: (node) => {
          if (isInsideModal) return true;
          return (
            node.hasAttribute("data-lenis-prevent") ||
            Boolean(node.closest("[data-lenis-prevent]")) ||
            Boolean(node.closest(".modall"))
          );
        },
      }}
    >
      {children}
    </ReactLenis>
  );
}

export default SmoothScroll;

