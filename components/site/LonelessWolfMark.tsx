import Image from "next/image";
import { cn, publicAsset } from "@/lib/utils";

interface LonelessWolfMarkProps {
  className?: string;
  size?: number;
  alt?: string;
  imageClassName?: string;
  imageFit?: "cover" | "contain";
}

export default function LonelessWolfMark({
  className,
  size = 88,
  alt = "Loneless Wolf symbol",
  imageClassName,
  imageFit = "cover",
}: LonelessWolfMarkProps) {
  return (
    <div className={cn("wolf-mark", className)} style={{ width: size, height: size }}>
      <span className="wolf-mark__halo" aria-hidden="true" />
      <span className="wolf-mark__frame">
        <Image
          src={publicAsset("/images/LoneWolf.JPG")}
          alt={alt}
          fill
          sizes={`${size}px`}
          className={imageClassName}
          style={{ objectFit: imageFit }}
        />
      </span>
    </div>
  );
}