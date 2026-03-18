import Image from "next/image";
import Link from "next/link";
import ClientLogoGrid from "@/components/site/ClientLogoGrid";
import DisclosureCard from "@/components/site/DisclosureCard";
import LonelessWolfBanner from "@/components/site/LonelessWolfBanner";
import LonelessWolfMark from "@/components/site/LonelessWolfMark";
import LonelessWolfStatement from "@/components/site/LonelessWolfStatement";
import HomepageQuoteVideoSpotlight from "@/components/site/HomepageQuoteVideoSpotlight";
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

const homepageProfile = [
  "Professional Athlete, Mental Performance Coach, and Culture Enhancer - Nicholas Parks is the Loneless Wolf.",
  "A Professional Athlete in Slamball, former Professional Track Athlete, and mental development coach for high school, college, and transfer student-athletes. Nick holds a BS in Organizational Leadership from Purdue University and specializes in empowering athletes and leaders to reach their full potential - both on and off the field.",
  "His D-1 coaching experience at Purdue resulted in Big Ten Champions and NCAA finalists.",
] as const;

const homepageQuote = "The question should never be how long will it take, but rather what will it take.";

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
                  <p className="mt-2 text-xs uppercase tracking-[0.28em] text-muted">
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
            <LonelessWolfStatement className="px-6 py-14 md:px-8 md:py-16" />
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="site-container">
          <div className="grid gap-4 lg:grid-cols-[minmax(0,1.06fr)_minmax(0,0.94fr)] lg:items-start">
            <ScrollReveal className="min-w-0" contentClassName="surface-card h-full min-w-0 px-6 py-8 md:px-8">
              <SectionHeading
                eyebrow="Nicholas Parks"
                title={
                  <>
                    <span className="block text-foreground">Professional athlete.</span>
                    <span className="block text-primary">Mental performance coach.</span>
                    <span className="block text-foreground/72">Culture enhancer.</span>
                  </>
                }
                titleClassName="space-y-1"
                description="Nicholas Parks is the Loneless Wolf. The work is built to help athletes and leaders reach their full potential on and off the field."
              />
              <div className="mt-6 space-y-4 text-base leading-8 text-muted md:text-lg">
                {homepageProfile.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </ScrollReveal>

            <div className="grid gap-4">
              <ScrollReveal
                delayMs={120}
                className="min-w-0"
                contentClassName="ink-panel h-full min-w-0 rounded-[32px] px-6 py-8 md:px-8 md:py-10"
              >
                <div className="min-w-0">
                  <p className="section-eyebrow !text-white/70">Mindset</p>
                  <p className="mt-4 max-w-[13ch] font-heading text-[1.65rem] uppercase leading-[0.98] tracking-[-0.035em] text-white md:max-w-none md:text-[2.3rem]">
                    {homepageQuote}
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delayMs={180} className="min-w-0">
                <div className="surface-card min-w-0 px-4 py-4 md:px-5 md:py-5">
                  <div className="mb-4 flex items-start justify-between gap-4">
                    <div>
                      <p className="section-eyebrow">Featured video</p>
                      <p className="mt-3 max-w-2xl text-sm leading-6 text-muted md:text-base md:leading-7">
                        A cleaner look at the SlamBall clip, separated from the quote so the mobile layout has more room to breathe.
                      </p>
                    </div>
                  </div>
                  <HomepageQuoteVideoSpotlight />
                </div>
              </ScrollReveal>
            </div>
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
              title={<>A brand built to prepare leaders, athletes, and people to thrive under inevitable pressure.</>}
              description="Nick helps leaders, athletes, and teams build the preparation, resilience, and belief needed to thrive under unavoidable pressure with poise and action."
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

