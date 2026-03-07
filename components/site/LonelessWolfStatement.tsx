"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const introWords = ["You", "are", "not", "alone", "in", "being", "a"] as const;

const wolfWords = [
  { letter: "W", rest: "orking", delay: 540 },
  { letter: "O", rest: "ptimist", delay: 760 },
  { letter: "L", rest: "eaning on", delay: 980 },
  { letter: "F", rest: "aith", delay: 1200 },
] as const;

interface LonelessWolfStatementProps {
  className?: string;
}

export default function LonelessWolfStatement({ className }: LonelessWolfStatementProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduceMotion.matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.32, rootMargin: "0px 0px -8% 0px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className={cn("wolf-statement", className)}>
      <div className="mx-auto max-w-5xl text-center">
        <p className="font-heading text-3xl uppercase tracking-[0.18em] text-white md:text-5xl lg:text-6xl">
          {introWords.map((word, index) => (
            <span
              key={word}
              className="inline-block transition-all duration-700"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translate3d(0, 0, 0)" : "translate3d(0, 22px, 0)",
                transitionDelay: `${index * 70}ms`,
              }}
            >
              {word}&nbsp;
            </span>
          ))}
        </p>

        <p className="mt-4 font-heading text-3xl uppercase tracking-[0.18em] text-white md:mt-6 md:text-5xl lg:text-6xl">
          {wolfWords.map((word, index) => (
            <span
              key={word.letter}
              className="inline-block transition-all duration-700"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible
                  ? "translate3d(0, 0, 0) scale(1)"
                  : "translate3d(0, 26px, 0) scale(0.92)",
                transitionDelay: `${word.delay}ms`,
              }}
            >
              <span className="wolf-statement__letter">{word.letter}</span>
              <span>{word.rest}</span>
              {index < wolfWords.length - 1 ? <span>&nbsp;&nbsp;</span> : null}
            </span>
          ))}
        </p>

        <div
          className="mx-auto mt-8 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent transition-all duration-1000 ease-out"
          style={{
            width: visible ? "220px" : "0px",
            opacity: visible ? 1 : 0,
            transitionDelay: "1450ms",
          }}
        />
      </div>
    </div>
  );
}