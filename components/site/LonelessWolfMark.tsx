import Image from "next/image";
import { cn } from "@/lib/utils";

interface LonelessWolfMarkProps {
  className?: string;
  size?: number;
  alt?: string;
}

export default function LonelessWolfMark({
  className,
  size = 88,
  alt = "Loneless Wolf symbol",
}: LonelessWolfMarkProps) {
  return (
    <div className={cn("wolf-mark", className)} style={{ width: size, height: size }}>
      <span className="wolf-mark__halo" aria-hidden="true" />
      <span className="wolf-mark__frame">
        <Image
          src="/images/LoneWolf.JPG"
          alt={alt}
          fill
          sizes={`${size}px`}
          className="object-cover"
        />
      </span>
    </div>
  );
}