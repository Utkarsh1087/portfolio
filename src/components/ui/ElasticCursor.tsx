"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { usePreloader } from "../preloader";
import { useMediaQuery } from "@/hooks/use-media-query";
import { usePathname } from "next/navigation";

const CURSOR_SIZE = 44;
const DOT_SIZE = 8;

export default function ElasticCursor() {
  const pathname = usePathname();
  const isBlogPost = pathname.startsWith("/blogs/") && pathname !== "/blogs";
  const { isLoading } = usePreloader();
  const isMobile = useMediaQuery("(max-width: 768px)");

  const jellyRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isMobile || isBlogPost || isLoading) return;

    const jelly = jellyRef.current;
    const dot = dotRef.current;
    if (!jelly || !dot) return;

    // Direct GPU quickSetters - zero React re-renders
    const setJellyX = gsap.quickSetter(jelly, "x", "px");
    const setJellyY = gsap.quickSetter(jelly, "y", "px");
    const setJellyRotate = gsap.quickSetter(jelly, "rotate", "deg");
    const setJellyScaleX = gsap.quickSetter(jelly, "scaleX");
    const setJellyScaleY = gsap.quickSetter(jelly, "scaleY");
    const setJellyOpacity = gsap.quickSetter(jelly, "opacity");

    const setDotX = gsap.quickSetter(dot, "x", "px");
    const setDotY = gsap.quickSetter(dot, "y", "px");
    const setDotOpacity = gsap.quickSetter(dot, "opacity");

    let mouseX = -100;
    let mouseY = -100;
    let currentX = -100;
    let currentY = -100;
    let velX = 0;
    let velY = 0;
    let isHovering = false;
    let isHidden = false;
    let hasMoved = false;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!hasMoved) {
        hasMoved = true;
        currentX = mouseX;
        currentY = mouseY;
        setJellyOpacity(1);
        setDotOpacity(1);
      }

      // Check if target is hoverable without heavy getBoundingClientRect on every pixel
      const target = e.target as HTMLElement | null;
      if (target) {
        const hoverable = target.closest(
          'a, button, [role="button"], input, textarea, select, .cursor-can-hover, [data-chroma-area]'
        );
        isHovering = !!hoverable;

        const noCursor = target.closest('[data-no-custom-cursor="true"]');
        isHidden = !!noCursor;
      }
    };

    const onMouseLeave = () => {
      isHidden = true;
    };

    const onMouseEnter = () => {
      isHidden = false;
    };

    // 60-120fps frictionless ticker loop
    const tickerCallback = () => {
      if (!hasMoved) return;

      // 1. Position dot instantly at exact mouse pointer
      setDotX(mouseX);
      setDotY(mouseY);

      // 2. Trailing spring physics for the elastic jelly blob (high response, low resistance)
      const followSpeed = isHovering ? 0.32 : 0.24;
      currentX += (mouseX - currentX) * followSpeed;
      currentY += (mouseY - currentY) * followSpeed;

      velX = mouseX - currentX;
      velY = mouseY - currentY;

      // 3. Elastic stretch calculation
      const speed = Math.hypot(velX, velY);
      const angle = (Math.atan2(velY, velX) * 180) / Math.PI;
      const stretch = isHovering ? 0 : Math.min(speed / 480, 0.32);

      // 4. Apply transforms
      setJellyX(currentX);
      setJellyY(currentY);

      if (isHovering) {
        setJellyRotate(0);
        setJellyScaleX(1.35);
        setJellyScaleY(1.35);
      } else {
        setJellyRotate(angle);
        setJellyScaleX(1 + stretch);
        setJellyScaleY(1 - stretch * 1.5);
      }

      const opacity = isHidden ? 0 : 1;
      setJellyOpacity(opacity);
      setDotOpacity(opacity);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);
    gsap.ticker.add(tickerCallback);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      gsap.ticker.remove(tickerCallback);
    };
  }, [isMobile, isBlogPost, isLoading]);

  if (isMobile || isBlogPost) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden select-none">
      {/* Elastic Trailing Blob with Invert Filter */}
      <div
        ref={jellyRef}
        className="fixed top-0 left-0 rounded-full border border-black dark:border-white pointer-events-none opacity-0 will-change-transform"
        style={{
          width: CURSOR_SIZE,
          height: CURSOR_SIZE,
          marginLeft: -CURSOR_SIZE / 2,
          marginTop: -CURSOR_SIZE / 2,
          backdropFilter: "invert(100%)",
          WebkitBackdropFilter: "invert(100%)",
        }}
      />
      {/* Precision Center Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 rounded-full bg-black dark:bg-white pointer-events-none opacity-0 will-change-transform"
        style={{
          width: DOT_SIZE,
          height: DOT_SIZE,
          marginLeft: -DOT_SIZE / 2,
          marginTop: -DOT_SIZE / 2,
          backdropFilter: "invert(100%)",
          WebkitBackdropFilter: "invert(100%)",
        }}
      />
    </div>
  );
}
