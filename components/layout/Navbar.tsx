"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import LonelessWolfMark from "@/components/site/LonelessWolfMark";
import { BRAND, INITIATIVE_LINKS, NAV_LINKS } from "@/lib/constants";
import { publicAsset } from "@/lib/utils";

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.7}
        d="M6 9l6 6 6-6"
      />
    </svg>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopInitiativesOpen, setDesktopInitiativesOpen] = useState(false);
  const [mobileInitiativesOpen, setMobileInitiativesOpen] = useState(false);
  const desktopMenuRef = useRef<HTMLDivElement>(null);
  const closeTimerRef = useRef<number | null>(null);
  const primaryLinks = NAV_LINKS.filter((link) => link.label !== "Initiatives");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDesktopInitiativesOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        desktopMenuRef.current &&
        !desktopMenuRef.current.contains(event.target as Node)
      ) {
        setDesktopInitiativesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) {
        window.clearTimeout(closeTimerRef.current);
      }
    };
  }, []);

  const isActive = (href: string) => {
    const cleanPath = pathname.replace(/\/$/, "") || "/";
    const cleanHref = href.replace(/\/$/, "") || "/";
    return cleanPath === cleanHref;
  };

  const clearDesktopCloseTimer = () => {
    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  const openDesktopInitiatives = () => {
    clearDesktopCloseTimer();
    setDesktopInitiativesOpen(true);
  };

  const closeDesktopInitiatives = () => {
    clearDesktopCloseTimer();
    closeTimerRef.current = window.setTimeout(() => {
      setDesktopInitiativesOpen(false);
    }, 140);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="site-container pt-2.5 sm:pt-3 md:pt-4">
        <div
          className={`rounded-[26px] border transition-all duration-300 sm:rounded-[30px] md:rounded-[32px] ${
            scrolled || mobileOpen || desktopInitiativesOpen
              ? "border-black/10 bg-white/95 shadow-card backdrop-blur"
              : "border-black/8 bg-white/82 backdrop-blur"
          }`}
        >
          <div className="flex items-center justify-between px-4 py-3 sm:px-5 sm:py-3.5 md:px-7 md:py-4">
            <Link href="/" className="flex min-w-0 items-center gap-2.5 sm:gap-3">
              <LonelessWolfMark size={46} className="shrink-0" />
              <div className="min-w-0">
                <span className="block truncate font-heading text-base uppercase leading-none tracking-[0.16em] text-foreground sm:text-lg md:text-xl md:tracking-[0.18em]">
                  Nick Parks
                </span>
                <span className="mt-1 block text-[10px] uppercase leading-tight tracking-[0.22em] text-muted sm:hidden">
                  Athlete | Speaker | Coach
                </span>
                <span className="mt-1 hidden text-[10px] uppercase leading-tight tracking-[0.24em] text-muted sm:block md:text-xs md:tracking-[0.28em]">
                  {BRAND.name} | Athlete | Speaker | Coach
                </span>
              </div>
            </Link>

            <nav className="hidden items-center gap-8 lg:flex">
              {primaryLinks.slice(0, 2).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-heading text-xs uppercase tracking-[0.24em] transition-colors ${
                    isActive(link.href) ? "text-primary" : "text-foreground/76 hover:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              <div
                ref={desktopMenuRef}
                className="relative"
                onMouseEnter={openDesktopInitiatives}
                onMouseLeave={closeDesktopInitiatives}
              >
                <button
                  type="button"
                  className={`flex items-center gap-2 font-heading text-xs uppercase tracking-[0.24em] transition-colors ${
                    desktopInitiativesOpen
                      ? "text-primary"
                      : "text-foreground/76 hover:text-primary"
                  }`}
                  aria-expanded={desktopInitiativesOpen}
                  aria-haspopup="true"
                  onClick={() =>
                    setDesktopInitiativesOpen((current) => {
                      clearDesktopCloseTimer();
                      return !current;
                    })
                  }
                  onFocus={openDesktopInitiatives}
                >
                  Initiatives
                  <Chevron open={desktopInitiativesOpen} />
                </button>

                {desktopInitiativesOpen && (
                  <div className="absolute right-0 top-full z-30 w-[min(760px,calc(100vw-2rem))] pt-4 xl:w-[760px]">
                    <div className="surface-card max-h-[min(72vh,680px)] overflow-y-auto p-4 xl:p-5">
                      <div className="grid gap-4 md:grid-cols-[1fr_1.35fr]">
                        <div className="ink-panel rounded-[28px] p-6">
                          <div className="flex items-center gap-4">
                            <div className="relative h-[60px] w-[60px] shrink-0 overflow-hidden rounded-full border border-white/16 bg-white/10 p-1.5 shadow-card">
                              <Image
                                src={publicAsset("/images/LoneWolf.JPG")}
                                alt="Loneless Wolf symbol"
                                fill
                                sizes="60px"
                                className="object-contain object-center p-1"
                              />
                            </div>
                            <div>
                              <p className="section-eyebrow !text-white/70">{BRAND.name}</p>
                              <h3 className="mt-3 font-heading text-3xl uppercase tracking-[-0.04em] text-white">
                                Go deeper with the brand.
                              </h3>
                            </div>
                          </div>
                          <p className="mt-4 text-sm leading-7 text-white/72">
                            Programs, mission, proof, and content designed to turn
                            pressure into prepared action.
                          </p>
                          <Link
                            href="/services"
                            className="btn-small mt-6 !border-white/20 !bg-white/10 !text-white hover:!bg-white hover:!text-foreground"
                          >
                            Start with Services
                          </Link>
                        </div>

                        <div className="grid gap-3 sm:grid-cols-2">
                          {INITIATIVE_LINKS.map((link) => (
                            <Link
                              key={link.href}
                              href={link.href}
                              className="rounded-[24px] border border-black/8 bg-paper px-5 py-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/25 hover:bg-white"
                            >
                              <p className="font-heading text-sm uppercase tracking-[0.22em] text-foreground">
                                {link.label}
                              </p>
                              <p className="mt-3 text-sm leading-6 text-muted">
                                {link.description}
                              </p>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/contact"
                className={`font-heading text-xs uppercase tracking-[0.24em] transition-colors ${
                  isActive("/contact") ? "text-primary" : "text-foreground/76 hover:text-primary"
                }`}
              >
                Contact
              </Link>
            </nav>

            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-foreground lg:hidden sm:h-11 sm:w-11"
              aria-label="Toggle navigation"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((current) => !current)}
            >
              <svg
                className="h-[18px] w-[18px] sm:h-5 sm:w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.8}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.8}
                    d="M4 7h16M4 12h16M4 17h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {mobileOpen && (
            <div className="border-t border-black/8 px-4 pb-4 pt-2.5 sm:px-5 sm:pb-5 sm:pt-3 lg:hidden">
              <div className="mb-4 flex items-center gap-3 rounded-[22px] border border-black/8 bg-paper/80 px-3.5 py-3.5 sm:px-4 sm:py-4">
                <LonelessWolfMark size={44} />
                <div>
                  <p className="font-heading text-sm uppercase tracking-[0.2em] text-foreground">
                    {BRAND.name}
                  </p>
                  <p className="mt-2 text-xs leading-5 text-muted">{BRAND.statement}</p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <Link
                  href="/"
                  className="rounded-[20px] px-4 py-3 font-heading text-xs uppercase tracking-[0.24em] text-foreground transition-colors hover:bg-primary/8 hover:text-primary"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="rounded-[20px] px-4 py-3 font-heading text-xs uppercase tracking-[0.24em] text-foreground transition-colors hover:bg-primary/8 hover:text-primary"
                >
                  About
                </Link>
                <div className="rounded-[24px] border border-black/8 bg-paper/70 p-2">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between rounded-[18px] px-3 py-2 font-heading text-xs uppercase tracking-[0.24em] text-foreground"
                    aria-expanded={mobileInitiativesOpen}
                    onClick={() => setMobileInitiativesOpen((current) => !current)}
                  >
                    Initiatives
                    <Chevron open={mobileInitiativesOpen} />
                  </button>
                  {mobileInitiativesOpen && (
                    <div className="mt-2 space-y-2">
                      {INITIATIVE_LINKS.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="block rounded-[18px] bg-white px-4 py-3"
                        >
                          <span className="font-heading text-xs uppercase tracking-[0.22em] text-foreground">
                            {link.label}
                          </span>
                          <span className="mt-2 block text-sm leading-6 text-muted">
                            {link.description}
                          </span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
                <Link href="/contact" className="btn-primary mt-2 w-full">
                  Contact
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
