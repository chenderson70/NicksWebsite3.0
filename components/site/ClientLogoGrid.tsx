import Image from "next/image";
import { cn } from "@/lib/utils";

interface ClientLogo {
  name: string;
  logo: string;
  logoScale?: number;
}

interface ClientLogoGridProps {
  clients: readonly ClientLogo[];
  className?: string;
  itemClassName?: string;
  showNames?: boolean;
}

export default function ClientLogoGrid({
  clients,
  className,
  itemClassName,
  showNames = false,
}: ClientLogoGridProps) {
  return (
    <div className={cn("grid gap-3 sm:grid-cols-2", className)}>
      {clients.map((client) => (
        <div
          key={client.name}
          className={cn(
            "group rounded-[20px] border border-black/8 bg-white px-4 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/22 hover:shadow-card",
            itemClassName
          )}
          title={client.name}
        >
          <div className="flex min-h-[72px] items-center justify-center overflow-visible sm:min-h-[84px]">
            <Image
              src={client.logo}
              alt={client.name}
              width={220}
              height={100}
              style={{ transform: `scale(${client.logoScale ?? 1})` }}
              className="h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03] sm:h-16"
            />
          </div>
          {showNames ? (
            <p className="mt-3 text-center text-xs leading-5 text-muted">{client.name}</p>
          ) : null}
        </div>
      ))}
    </div>
  );
}
