import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
  eyebrowClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  eyebrowClassName,
  titleClassName,
  descriptionClassName,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl",
        className
      )}
    >
      {eyebrow ? <p className={cn("section-eyebrow", eyebrowClassName)}>{eyebrow}</p> : null}
      <h2 className={cn("section-title mt-4", titleClassName)}>{title}</h2>
      {description ? (
        <p className={cn("section-copy mt-5", descriptionClassName)}>
          {description}
        </p>
      ) : null}
    </div>
  );
}

