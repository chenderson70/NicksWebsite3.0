import Image from "next/image";
import { cn } from "@/lib/utils";

interface ClientLogo {
  name: string;
  logo: string;
  logoScale?: number;
}

interface ClientLogoMarqueeProps {
  clients: readonly ClientLogo[];
  title?: string;
  className?: string;
  theme?: "light" | "dark";
}

export default function ClientLogoMarquee({
  clients,
  title,
  className,
  theme = "light",
}: ClientLogoMarqueeProps) {
  const loopedClients = [...clients, ...clients];

  return (
    <section className={cn("logo-marquee", theme === "dark" && "logo-marquee--dark", className)}>
      {title ? (
        <p
          className={cn(
            "text-center font-heading text-xs uppercase tracking-[0.3em] md:text-sm",
            theme === "dark" ? "text-white/76" : "text-foreground/68"
          )}
        >
          {title}
        </p>
      ) : null}
      <div className={cn("logo-marquee__viewport", title && "mt-6 md:mt-8")}>
        <div className="logo-marquee__track">
          {loopedClients.map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="logo-marquee__item"
              aria-hidden={index >= clients.length}
            >
              <Image
                src={client.logo}
                alt={index >= clients.length ? "" : client.name}
                width={220}
                height={110}
                style={{ transform: `scale(${client.logoScale ?? 1})` }}
                className="h-14 w-auto object-contain sm:h-16"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}