"use client";

import type { CSSProperties, ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  contentClassName?: string;
  delayMs?: number;
  threshold?: number;
}

export default function ScrollReveal({
  children,
  className,
  contentClassName,
  delayMs = 0,
  threshold = 0.2,
}: ScrollRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry?.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div ref={containerRef} className={cn("scroll-reveal-shell", className)}>
      <div
        className={cn("scroll-reveal", isVisible && "is-visible", contentClassName)}
        style={{ "--reveal-delay": `${delayMs}ms` } as CSSProperties}
      >
        {children}
      </div>
    </div>
  );
}
