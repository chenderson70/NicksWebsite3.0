import type { ReactNode } from "react";
import Link from "next/link";
import LonelessWolfMark from "@/components/site/LonelessWolfMark";
import ScrollReveal from "@/components/site/ScrollReveal";
import {
  BRAND,
  FOOTER_LINKS,
  INITIATIVE_LINKS,
  LEGAL_LINKS,
  SITE,
  SOCIAL_LINKS,
} from "@/lib/constants";

const socialIcons: Record<string, ReactNode> = {
  instagram: (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  ),
  linkedin: (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667h-3.554v-11.452h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zm-15.11-13.019c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019h-3.564v-11.452h3.564v11.452zm17.338-20.452h-21.338c-.985 0-1.782.797-1.782 1.782v20.435c0 .985.797 1.782 1.782 1.782h20.435c.985 0 1.782-.797 1.782-1.782v-20.435c0-.985-.797-1.782-1.782-1.782z" />
    </svg>
  ),
};

export default function Footer() {
  return (
    <footer className="pt-0 pb-8">
      <div className="site-container">
        <ScrollReveal
          className="md:mr-10 lg:mr-16"
          contentClassName="ink-panel rounded-[36px] px-6 py-10 md:px-10"
          delayMs={200}
        >
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="section-eyebrow !text-white/70">{BRAND.name}</p>
              <h2 className="mt-3 font-heading text-3xl uppercase tracking-[-0.04em] text-white md:text-5xl">
                Bring the Loneless Wolf standard into the room.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/72 md:text-base">
                {BRAND.statement} The work is built for athletes, teams, leaders,
                and organizations that need courage with a plan behind it.
              </p>
            </div>
            <Link
              href="/contact"
              className="btn-small w-fit !border-white/20 !bg-white/10 !text-white hover:!bg-white hover:!text-foreground"
            >
              Book Nick
            </Link>
          </div>
        </ScrollReveal>

        <div className="mt-6 surface-card px-6 py-10 md:px-10">
          <div className="grid gap-10 md:grid-cols-[1.25fr_0.85fr_1fr_0.9fr]">
            <div>
              <div className="flex items-center gap-4">
                <LonelessWolfMark size={72} />
                <div>
                  <p className="font-heading text-2xl uppercase tracking-[0.16em] text-foreground">
                    Nick Parks
                  </p>
                  <p className="mt-2 text-xs uppercase tracking-[0.24em] text-muted">
                    {BRAND.name}
                  </p>
                </div>
              </div>
              <p className="mt-5 max-w-sm text-sm leading-7 text-muted">
                {BRAND.name} is the brand behind Nick's speaking, coaching, and
                culture-building work for athletes, teams, and leaders who need
                substance with momentum.
              </p>
            </div>

            <div>
              <p className="font-heading text-xs uppercase tracking-[0.24em] text-foreground/60">
                Navigate
              </p>
              <div className="mt-4 space-y-3 text-sm text-muted">
                {FOOTER_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <p className="font-heading text-xs uppercase tracking-[0.24em] text-foreground/60">
                Initiatives
              </p>
              <div className="mt-4 space-y-3 text-sm text-muted">
                {INITIATIVE_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <p className="font-heading text-xs uppercase tracking-[0.24em] text-foreground/60">
                Connect
              </p>
              <div className="mt-4 space-y-3 text-sm text-muted">
                <a href={`mailto:${SITE.email}`} className="block hover:text-primary">
                  {SITE.email}
                </a>
                <a href={`tel:${SITE.phone}`} className="block hover:text-primary">
                  {SITE.phone}
                </a>
                <p>{SITE.location}</p>
              </div>
              <div className="mt-5 flex items-center gap-3">
                {SOCIAL_LINKS.map((link) => (
                  <a
                    key={link.icon}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-paper text-foreground/75 transition-colors hover:border-primary hover:text-primary"
                    aria-label={link.label}
                  >
                    {socialIcons[link.icon]}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="my-8 soft-rule" />

          <div className="flex flex-col gap-4 text-xs uppercase tracking-[0.2em] text-muted md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap gap-4">
              {LEGAL_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <p>© {new Date().getFullYear()} Nick Parks | Loneless Wolf. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}