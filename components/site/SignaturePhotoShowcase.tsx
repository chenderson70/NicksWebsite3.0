"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const visualPillars = ["Preparation", "Resilience", "Conviction"];

export default function SignaturePhotoShowcase() {
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
        threshold: 0.28,
        rootMargin: "0px 0px -12% 0px",
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className={`signature-visual ${isVisible ? "is-visible" : ""}`}
    >
      <div className="signature-visual__card">
        <div className="signature-visual__photo">
          <Image
            src="/images/NickET.jpg"
            alt="Nick Parks with Eric Thomas"
            fill
            className="signature-visual__image object-cover object-[center_14%]"
            sizes="(min-width: 1024px) 42vw, 92vw"
          />
        </div>

        <div className="signature-visual__panel">
          <p className="section-eyebrow">In Real Rooms</p>
          <p className="mt-3 max-w-2xl font-heading text-xl uppercase tracking-[0.12em] text-foreground md:text-2xl">
            The standard stays the same when the spotlight leaves.
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {visualPillars.map((pillar) => (
              <div
                key={pillar}
                className="rounded-[20px] border border-black/8 bg-white/86 px-4 py-4 text-center font-heading text-xs uppercase tracking-[0.24em] text-foreground"
              >
                {pillar}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
