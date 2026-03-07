"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

export interface MissionMilestone {
  year: string;
  title: string;
  description: string;
}

interface MissionRoadmapProps {
  milestones: MissionMilestone[];
}

export default function MissionRoadmap({ milestones }: MissionRoadmapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 82%", "end 24%"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 150,
    damping: 26,
    mass: 0.45,
  });

  return (
    <div ref={containerRef} className="relative mt-12">
      <div className="absolute bottom-0 left-5 top-0 w-px -translate-x-1/2 bg-black/10 md:left-1/2" />
      <motion.div
        className="absolute bottom-0 left-5 top-0 w-px origin-top -translate-x-1/2 bg-gradient-to-b from-primary via-primary/70 to-primary/10 md:left-1/2"
        style={prefersReducedMotion ? undefined : { scaleY: progress }}
      />

      <div className="space-y-6 md:space-y-8">
        {milestones.map((milestone, index) => {
          const isEven = index % 2 === 0;

          return (
            <motion.article
              key={`${milestone.year}-${milestone.title}`}
              initial={
                prefersReducedMotion
                  ? false
                  : { opacity: 0, y: 28, x: isEven ? -26 : 26 }
              }
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true, amount: 0.28 }}
              transition={{
                duration: 0.68,
                delay: index * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`relative flex flex-col gap-4 md:flex-row ${
                isEven ? "" : "md:flex-row-reverse"
              }`}
            >
              <span className="absolute left-5 top-7 flex h-5 w-5 -translate-x-1/2 items-center justify-center md:left-1/2">
                {prefersReducedMotion ? null : (
                  <span className="absolute h-5 w-5 rounded-full bg-primary/18 animate-ping" />
                )}
                <span className="relative h-3 w-3 rounded-full bg-primary ring-4 ring-paper" />
              </span>

              <div className={`ml-12 md:ml-0 md:w-1/2 ${isEven ? "md:pr-10" : "md:pl-10"}`}>
                <div className="surface-card rounded-[30px] border border-black/8 px-5 py-5 md:px-6 md:py-6">
                  <p className="font-heading text-sm uppercase tracking-[0.24em] text-primary">
                    {milestone.year}
                  </p>
                  <h3 className="mt-4 font-heading text-2xl uppercase tracking-[-0.04em] text-foreground md:text-3xl">
                    {milestone.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-muted md:text-base">
                    {milestone.description}
                  </p>
                </div>
              </div>

              <div className="hidden md:block md:w-1/2" />
            </motion.article>
          );
        })}
      </div>
    </div>
  );
}