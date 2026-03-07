import Link, { type LinkProps } from "next/link";
import { cn } from "@/lib/utils";

type ButtonSize = "small" | "default" | "large";

interface Transparent3DButtonProps extends LinkProps {
  label: string;
  className?: string;
  target?: string;
  rel?: string;
  size?: ButtonSize;
}

export default function Transparent3DButton({
  href,
  label,
  className,
  target,
  rel,
  size = "default",
  ...props
}: Transparent3DButtonProps) {
  return (
    <Link
      href={href}
      target={target}
      rel={target === "_blank" ? rel ?? "noreferrer" : rel}
      aria-label={label}
      data-size={size}
      className={cn("btn-3d", className)}
      {...props}
    >
      <span className="btn-3d__hidden">{label}</span>
      <span className="btn-3d__inner" aria-hidden="true">
        <span className="btn-3d__face btn-3d__face--front">{label}</span>
        <span className="btn-3d__face btn-3d__face--back">{label}</span>
      </span>
    </Link>
  );
}
