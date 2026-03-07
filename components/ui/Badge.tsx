import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "primary" | "outline" | "success" | "warning" | "danger";
  className?: string;
}

export default function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  const variants: Record<string, string> = {
    default: "bg-foreground/6 text-foreground/70",
    primary: "border border-primary/20 bg-primary/10 text-primary",
    outline: "border border-black/10 bg-white text-foreground/70",
    success: "border border-emerald-600/20 bg-emerald-50 text-emerald-700",
    warning: "border border-amber-500/20 bg-amber-50 text-amber-700",
    danger: "border border-red-500/20 bg-red-50 text-red-700",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-[11px] font-heading uppercase tracking-[0.22em]",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}

