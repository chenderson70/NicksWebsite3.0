import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface DisclosureCardProps {
  eyebrow?: string;
  title: ReactNode;
  preview?: string;
  children: ReactNode;
  defaultOpen?: boolean;
  className?: string;
}

export default function DisclosureCard({
  eyebrow,
  title,
  preview,
  children,
  defaultOpen = false,
  className,
}: DisclosureCardProps) {
  return (
    <details open={defaultOpen} className={cn("group surface-card px-6 py-6", className)}>
      <summary className="disclosure-summary flex cursor-pointer list-none items-start justify-between gap-4">
        <div>
          {eyebrow ? <p className="section-eyebrow">{eyebrow}</p> : null}
          <p className="mt-4 font-heading text-xl uppercase tracking-[0.12em] text-foreground">
            {title}
          </p>
          {preview ? (
            <p className="mt-3 text-sm leading-7 text-muted">{preview}</p>
          ) : null}
        </div>
        <span className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-paper text-foreground transition-transform group-open:rotate-180">
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M6 9l6 6 6-6" />
          </svg>
        </span>
      </summary>
      <div className="mt-5 border-t border-black/8 pt-5 text-sm leading-7 text-muted">
        {children}
      </div>
    </details>
  );
}

