import Image from "next/image";
import Link from "next/link";
import ClientLogoGrid from "@/components/site/ClientLogoGrid";
import ClientLogoMarquee from "@/components/site/ClientLogoMarquee";
import DisclosureCard from "@/components/site/DisclosureCard";
import LonelessWolfBanner from "@/components/site/LonelessWolfBanner";
import LonelessWolfMark from "@/components/site/LonelessWolfMark";
import LonelessWolfStatement from "@/components/site/LonelessWolfStatement";
import ScrollReveal from "@/components/site/ScrollReveal";
import SectionHeading from "@/components/site/SectionHeading";
import SignaturePhotoShowcase from "@/components/site/SignaturePhotoShowcase";
import Transparent3DButton from "@/components/site/Transparent3DButton";
import { BRAND, CLIENTS, HOMEPAGE_STATS } from "@/lib/constants";
import { publicAsset } from "@/lib/utils";

const quickLinks = [
  {
    title: "Services",
    href: "/services",
    copy: "Speaking, workshops, and athlete or leadership development built under the Loneless Wolf banner.",
  },
  {
    title: "Mission",
    href: "/mission",
    copy: "The roadmap, values, and convictions behind the brand and the message.",
  },
  {
    title: "Trusted By",
    href: "/testimonials",
    copy: "Recognizable proof, testimonials, and collaborations already connected to the work.",
  },
  {
    title: "Contact",
    href: "/contact",
    copy: "Book Nick or start a direct conversation around your room, audience, and objective.",
  },
] as const;

const homepageDisclosures = [
  {
    eyebrow: "Loneless Wolf",
    title: "What the brand stands for",
    preview:
      "You are not alone in being a working optimist leaning on faith.",
    body: [
      "Loneless Wolf is the brand name behind Nick's work. It gives language to the people who keep showing up with conviction before the room fully understands them.",
      "The message is direct: fear is not an option when you are prepared. That standard travels from athletics to leadership rooms to community work.",
    ],
  },
  {
    eyebrow: "Message",
    title: "What audiences leave with",
    preview:
      "Preparation, faith, resilience, and a clearer response under pressure.",
    body: [
      "Nick's work is designed to move people from passive inspiration into a stronger standard for how they lead, train, compete, and recover.",
      "The goal is not a short emotional spike. It is practical confidence built on discipline, identity, and faith-led preparation.",
    ],
  },
  {
    eyebrow: "Proof",
    title: "Why the message carries weight",
    preview:
      "The story is lived first and the collaborations around it are real.",
    body: [
      "Nick brings lived credibility from Purdue track, record-setting performance, professional Slamball, coaching, and leadership development work across schools and organizations.",
      "That body of work gives the Loneless Wolf message enough substance to hold up when pressure gets real.",
    ],
  },
] as const;

const heroSignals = [
  "You are not alone.",
  "Working optimist.",
  "Leaning on faith.",
] as const;

export default function HomePage() {
  return (
    <>
      <section className="page-hero home-hero overflow-hidden">
        <div className="site-container">
          <div className="hero-grid gap-10">
            <div className="relative z-10 max-w-3xl">
              <div className="flex items-center gap-4">
                <LonelessWolfMark size={62} />
                <div>
                  <p className="section-eyebrow">{BRAND.name}</p>
                  <p className="mt-2 text-[11px] uppercase tracking-[0.28em] text-muted">
                    Professional Athlete | Coach | Speaker
                  </p>
                </div>
              </div>

              <h1 className="mt-6 font-heading text-5xl uppercase tracking-[-0.06em] text-foreground md:text-7xl xl:text-[5.5rem]">
                Fear is not an option.
                <span className="block text-primary">When you're prepared.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted md:text-xl">
                {BRAND.name} helps athletes, leaders, and teams unlock their full
                potential through mental performance coaching, culture-driven speaking,
                and faith-led preparation.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link href="/contact" className="btn-primary">
                  Book Nick Today
                </Link>
                <Transparent3DButton href="/about" label="Learn More" />
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {heroSignals.map((signal, index) => (
                  <div
                    key={signal}
                    className="brand-floating-note rounded-[20px] border border-black/8 bg-white/86 px-4 py-4 text-sm leading-6 text-foreground/78 shadow-card backdrop-blur"
                    style={{ animationDelay: `${index * 1.15}s` }}
                  >
                    {signal}
                  </div>
                ))}
              </div>
            </div>

            <div className="home-hero-visual relative">
              <div className="surface-panel relative overflow-hidden p-3 md:p-4">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[24px]">
                  <Image
                    src={publicAsset("/images/NickHomepage.JPG")}
                    alt="Nick Parks portrait"
                    fill
                    priority
                    className="object-cover object-[center_12%]"
                    sizes="(min-width: 1024px) 42vw, 92vw"
                  />
                </div>

                <div className="brand-floating-note absolute right-4 top-4 max-w-[220px] rounded-[24px] border border-white/55 bg-white/88 px-4 py-4 text-sm leading-6 text-foreground shadow-card backdrop-blur">
                  Nicholas Parks is the Loneless Wolf.
                </div>

                <div className="absolute bottom-4 left-4 max-w-[260px] rounded-[24px] bg-[#101311]/82 px-4 py-4 text-sm leading-6 text-white shadow-card">
                  {BRAND.statement}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="site-container">
          <div className="ink-panel overflow-hidden rounded-[40px] border border-white/10">
            <ClientLogoMarquee
              clients={CLIENTS}
              title="Some of Nick's collaborations include:"
              theme="dark"
              className="border-b border-white/10 px-6 py-8 md:px-8"
            />
            <LonelessWolfStatement className="px-6 py-14 md:px-8 md:py-16" />
          </div>
        </div>
      </section>

      <section id="quick-links" className="pb-16 md:pb-24">
        <div className="site-container">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {quickLinks.map((link, index) => (
              <ScrollReveal
                key={link.href}
                delayMs={index * 70}
                className="h-full"
                contentClassName="surface-card card-hover h-full px-5 py-6"
              >
                <Link href={link.href} className="block h-full">
                  <p className="font-heading text-sm uppercase tracking-[0.18em] text-foreground">
                    {link.title}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-muted">{link.copy}</p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="site-container grid gap-4 sm:grid-cols-3">
          {HOMEPAGE_STATS.map((stat, index) => (
            <ScrollReveal
              key={stat.label}
              delayMs={index * 80}
              className="h-full"
              contentClassName="surface-card h-full px-5 py-5"
            >
              <p className="font-heading text-3xl uppercase tracking-[-0.04em] text-primary">
                {stat.value}
              </p>
              <p className="mt-2 text-sm leading-6 text-muted">{stat.label}</p>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="site-container grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow={BRAND.name}
              title={<>A brand built for people under pressure.</>}
              description="Nick speaks to athletes, teams, and leaders who need preparation, resilience, and conviction to show up in how they lead and respond under pressure."
            />
            <div className="mt-8 space-y-4">
              {homepageDisclosures.map((item, index) => (
                <ScrollReveal key={item.title} delayMs={index * 90}>
                  <DisclosureCard
                    eyebrow={item.eyebrow}
                    title={item.title}
                    preview={item.preview}
                    defaultOpen={index === 0}
                  >
                    <div className="space-y-4">
                      {item.body.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  </DisclosureCard>
                </ScrollReveal>
              ))}
            </div>
          </div>

          <SignaturePhotoShowcase />
        </div>
      </section>

      <section className="pb-6 md:pb-8">
        <div className="site-container">
          <ScrollReveal
            className="md:mr-8 lg:mr-12"
            contentClassName="surface-card px-6 py-6 md:px-8 md:py-8"
          >
            <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-center">
              <div>
                <SectionHeading
                  eyebrow="Collaborations"
                  title={<>Recognizable proof. Real trust. Lasting credibility.</>}
                  description="The work travels because the collaborations and trust behind the Loneless Wolf name are real."
                />
              </div>
              <ClientLogoGrid
                clients={CLIENTS.slice(0, 8)}
                className="sm:grid-cols-2 lg:grid-cols-4"
                itemClassName="min-h-[120px]"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="pb-4 md:pb-6">
        <div className="site-container">
          <LonelessWolfBanner
            eyebrow={BRAND.name}
            title={<>You are not alone. The brand is built for response.</>}
            description="If the room needs courage, discipline, and a message that carries after the event, the fastest path is a direct conversation."
            href="/contact"
            ctaLabel="Book Nick"
            secondaryHref="/mission"
            secondaryLabel="See the Mission"
            badges={[
              "Fear is not an option when you're prepared.",
              "Built for athletes, leaders, and teams.",
              "Faith-led preparation with practical weight.",
            ]}
            tone="dark"
          />
        </div>
      </section>
    </>
  );
}