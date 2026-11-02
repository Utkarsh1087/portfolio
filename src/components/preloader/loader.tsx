"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { config } from "@/data/config";
import { usePreloader } from ".";
import DecryptedText from "@/components/ui/decrypted-text";

export default function PreloaderCurtain() {
  const { bypassLoading } = usePreloader();
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Curtain lift after decryption completes
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!containerRef.current || !contentRef.current) {
        bypassLoading();
        return;
      }

      const tl = gsap.timeline({
        onComplete: () => {
          bypassLoading();
        },
      });

      tl.to(contentRef.current, {
        scale: 0.9,
        opacity: 0,
        duration: 0.35,
        ease: "power2.out",
      }).to(
        containerRef.current,
        {
          yPercent: -100,
          duration: 1.1,
          ease: "power4.inOut",
          onStart: () => {
            if (containerRef.current) {
              containerRef.current.style.pointerEvents = "none";
            }
          },
        },
        "-=0.15"
      );
    }, 1600);

    return () => clearTimeout(timer);
  }, [bypassLoading]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[99999] bg-[#111111] text-white flex flex-col items-center justify-center select-none"
    >
      <div
        ref={contentRef}
        className="flex flex-col items-center justify-center gap-4 text-center px-4"
      >
        <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-neutral-700/80 bg-neutral-900 shadow-2xl ring-4 ring-neutral-800/40">
          <Image
            src="/assets/avatar.png?v=6"
            alt={config.author}
            fill
            unoptimized
            className="object-cover object-center"
            priority
          />
        </div>
        <div className="min-h-[1.75rem] flex items-center justify-center">
          <DecryptedText
            text="UTKARSH RAJPUT'S PORTFOLIO"
            animateOn="view"
            effect="scramble"
            sequential={true}
            revealDirection="start"
            speed={38}
            maxIterations={12}
            className="text-neutral-100 font-sans font-bold tracking-[0.24em] uppercase text-xs sm:text-sm"
            encryptedClassName="text-neutral-500 font-mono tracking-[0.24em] text-xs sm:text-sm"
            parentClassName="inline-block"
          />
        </div>
      </div>
    </div>
  );
}
