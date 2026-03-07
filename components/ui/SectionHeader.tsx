import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeader({
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn(align === "center" ? "text-center" : "text-left", className)}>
      <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl uppercase tracking-wider mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted max-w-2xl mx-auto text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
      <div
        className={cn(
          "w-16 h-1 bg-primary mt-6",
          align === "center" ? "mx-auto" : ""
        )}
      />
    </div>
  );
}
