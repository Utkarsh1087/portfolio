"use client";

import React, { useEffect } from "react";
import { ReactLenis, useLenis } from "@/lib/lenis";

interface LenisProps {
  children: React.ReactNode;
  isInsideModal?: boolean;
}

function SmoothScroll({ children, isInsideModal = false }: LenisProps) {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  });

  useEffect(() => {
    document.addEventListener("DOMContentLoaded", () => {
      lenis?.stop();
      lenis?.start();
    });
  }, []);

  return (
    <ReactLenis
      root
      options={{
        duration: 2,
        prevent: (node) => {
          if (isInsideModal) return true;
          // Prevent root scrolling if we are interacting with anything inside the modal
          return !!node.closest(".modall");
        },
      }}
    >
      {children}
    </ReactLenis>
  );
}

export default SmoothScroll;
