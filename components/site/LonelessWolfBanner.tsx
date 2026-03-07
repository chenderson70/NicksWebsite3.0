import type { ReactNode } from "react";
import Link from "next/link";
import ScrollReveal from "@/components/site/ScrollReveal";
import LonelessWolfMark from "@/components/site/LonelessWolfMark";
import { cn } from "@/lib/utils";

interface LonelessWolfBannerProps {
  eyebrow?: string;
  title: ReactNode;
  description: string;
  href: string;
  ctaLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  badges?: readonly string[];
  tone?: "light" | "dark";
  className?: string;
}

const defaultBadges = [
  "You are not alone.",
  "Working optimist.",
  "Leaning on faith.",
] as const;

export default function LonelessWolfBanner({
  eyebrow = "Loneless Wolf",
  title,
  description,
  href,
  ctaLabel,
  secondaryHref,
  secondaryLabel,
  badges = defaultBadges,
  tone = "light",
  className,
}: LonelessWolfBannerProps) {
  const isDark = tone === "dark";

  return (
    <ScrollReveal
      contentClassName={cn(
        "wolf-banner rounded-[38px] px-6 py-8 md:px-8 md:py-10",
        isDark ? "ink-panel" : "surface-card accent-wash",
        className
      )}
    >
      <div className="grid gap-8 lg:grid-cols-[1.04fr_0.96fr] lg:items-center">
        <div>
          <p className={cn("section-eyebrow", isDark && "!text-white/72")}>{eyebrow}</p>
          <h2
            className={cn(
              "mt-4 font-heading text-3xl uppercase tracking-[-0.04em] md:text-5xl",
              isDark ? "text-white" : "text-foreground"
            )}
          >
            {title}
          </h2>
          <p
            className={cn(
              "mt-4 max-w-2xl text-base leading-8",
              isDark ? "text-white/72" : "text-muted"
            )}
          >
            {description}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link href={href} className={isDark ? "btn-primary" : "btn-primary"}>
              {ctaLabel}
            </Link>
            {secondaryHref && secondaryLabel ? (
              <Link
                href={secondaryHref}
                className={cn(
                  "btn-outline",
                  isDark && "!border-white/18 !bg-white/8 !text-white hover:!border-white hover:!bg-white hover:!text-foreground"
                )}
              >
                {secondaryLabel}
              </Link>
            ) : null}
          </div>
        </div>

        <div
          className={cn(
            "wolf-banner__panel rounded-[30px] border px-5 py-6 md:px-6",
            isDark ? "border-white/12 bg-white/8" : "border-black/8 bg-white/84"
          )}
        >
          <div className="flex items-center gap-4">
            <LonelessWolfMark size={84} />
            <div>
              <p className={cn("font-heading text-lg uppercase tracking-[0.18em]", isDark ? "text-white" : "text-foreground")}>
                Loneless Wolf
              </p>
              <p className={cn("mt-2 text-xs uppercase tracking-[0.24em]", isDark ? "text-white/60" : "text-muted")}>
                The brand behind the message
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-3">
            {badges.map((badge, index) => (
              <div
                key={badge}
                className={cn(
                  "brand-floating-note rounded-[20px] border px-4 py-3 text-sm leading-6",
                  isDark ? "border-white/12 bg-white/6 text-white/78" : "border-black/8 bg-white text-foreground/78"
                )}
                style={{ animationDelay: `${index * 1.2}s` }}
              >
                {badge}
              </div>
            ))}
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}