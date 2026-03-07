import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ClientLogoGrid from "@/components/site/ClientLogoGrid";
import LonelessWolfBanner from "@/components/site/LonelessWolfBanner";
import ScrollReveal from "@/components/site/ScrollReveal";
import SectionHeading from "@/components/site/SectionHeading";
import Transparent3DButton from "@/components/site/Transparent3DButton";
import { CLIENTS } from "@/lib/constants";
import { publicAsset } from "@/lib/utils";

const serviceOptions = [
  {
    eyebrow: "Speaking",
    title: "Keynotes",
    summary:
      "Direct messages for conferences, schools, teams, and leadership rooms that need urgency with practical weight.",
    anchor: "keynotes",
    contactHref: "/contact?type=Keynote%20speaking",
    detail:
      "Keynotes are built for rooms that need a clear standard, stronger response habits, and a message that stays with people after the event ends.",
    bestFor: [
      "Conferences, schools, teams, and leadership summits",
      "Rooms that need conviction, resilience, and practical application",
      "Opening or closing sessions where energy and clarity both matter",
    ],
  },
  {
    eyebrow: "Teams",
    title: "Workshops",
    summary:
      "Interactive sessions for culture, leadership behavior, and what teams do when pressure exposes weak habits.",
    anchor: "workshops",
    contactHref: "/contact?type=Team%20workshop",
    detail:
      "Workshops create more space than a keynote for discussion, application, and team-specific pressure points. The goal is not just inspiration. It is stronger language, stronger habits, and clearer accountability.",
    bestFor: [
      "Athletic programs, staff teams, and student leadership groups",
      "Culture resets, preseason alignment, and leadership development",
      "Groups that need practical tools, not just a one-time speech",
    ],
  },
  {
    eyebrow: "Leaders",
    title: "Executive Intensives",
    summary:
      "Focused support for founders, executives, and decision makers carrying real weight across people and performance.",
    anchor: "executive-intensives",
    contactHref: "/contact?type=Leadership%20training",
    detail:
      "This lane is built for leaders who need sharper thinking, steadier discipline, and a more honest look at how they are responding to pressure behind the scenes.",
    bestFor: [
      "Founders, executives, and senior leadership teams",
      "High-stakes seasons, transitions, and culture pressure",
      "Short, focused engagements with direct practical value",
    ],
  },
  {
    eyebrow: "Athletes",
    title: "Mentorship",
    summary:
      "High-accountability support for athletes navigating pressure, transition, identity, and long-term development.",
    anchor: "mentorship",
    contactHref: "/contact?type=Coaching%20or%20mentorship",
    detail:
      "Mentorship is the deeper option for athletes who need strategic guidance, honest accountability, and perspective from someone who has already lived through elite expectations and transition seasons.",
    bestFor: [
      "Athletes facing transition, exposure, or performance pressure",
      "Leaders who need direct accountability and honest feedback",
      "Families or programs looking for a steadier development voice",
    ],
  },
  {
    eyebrow: "Follow-Through",
    title: "Content Vault",
    summary:
      "Ongoing reinforcement through digital resources, short-form teaching, and practical follow-through after the room clears.",
    anchor: "content-vault",
    contactHref: "/contact?type=General%20inquiry",
    detail:
      "Some teams need more than a single day. This option keeps the message active through follow-up content, reinforcement tools, and practical reminders that help the standard outlast the event.",
    bestFor: [
      "Groups that want reinforcement after a keynote or workshop",
      "Organizations building internal leadership rhythm over time",
      "Teams that need repeatable language and practical touchpoints",
    ],
    featured: true,
  },
] as const;

export const metadata: Metadata = {
  title: "Services | Nick Parks",
  description:
    "Choose the right Loneless Wolf service lane for speaking, workshops, executive development, mentorship, and follow-through support.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero overflow-hidden">
        <div className="site-container grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="max-w-3xl">
            <p className="section-eyebrow">Loneless Wolf speaking, coaching, and development options</p>
            <h1 className="mt-6 font-heading text-5xl uppercase tracking-[-0.06em] text-foreground md:text-7xl">
              Built for rooms under pressure.
              <span className="block text-primary">Choose the lane that fits the objective.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted md:text-xl">
              Start with the closest fit, review the lane, and move straight into a
              booking conversation with clarity.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link href="/contact" className="btn-primary">
                Book Nick
              </Link>
              <Transparent3DButton href="#service-grid" label="View Options" />
            </div>
          </div>

          <div className="surface-panel overflow-hidden p-3 md:p-4">
            <div className="relative aspect-[16/10] overflow-hidden rounded-[24px]">
              <Image
                src={publicAsset("/images/NickTalking.jpg")}
                alt="Nick Parks speaking to a group"
                fill
                priority
                className="object-cover"
                sizes="(min-width: 1024px) 46vw, 92vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="service-grid" className="pb-16 md:pb-24">
        <div className="site-container">
          <div className="grid gap-4 md:grid-cols-2">
            {serviceOptions.map((option, index) => (
              <ScrollReveal
                key={option.anchor}
                delayMs={index * 70}
                className="h-full"
                contentClassName={`${("featured" in option && option.featured) ? "accent-wash" : "surface-card"} h-full rounded-[30px] border border-black/8 px-6 py-7 shadow-card`}
              >
                <article>
                  <p className="section-eyebrow">{option.eyebrow}</p>
                  <h2 className="mt-4 font-heading text-3xl uppercase tracking-[-0.04em] text-foreground md:text-4xl">
                    {option.title}
                  </h2>
                  <p className="mt-4 max-w-xl text-sm leading-7 text-muted">{option.summary}</p>
                  <Transparent3DButton
                    href={`#${option.anchor}`}
                    label="Discover More"
                    size="small"
                    className="mt-8"
                  />
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="site-container space-y-4">
          {serviceOptions.map((option, index) => (
            <ScrollReveal key={option.anchor} delayMs={index * 80}>
              <article
                id={option.anchor}
                className={`${("featured" in option && option.featured) ? "accent-wash" : "surface-card"} scroll-mt-32 rounded-[32px] border border-black/8 px-6 py-8 shadow-card md:px-8`}
              >
                <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
                  <div>
                    <p className="section-eyebrow">{option.eyebrow}</p>
                    <h2 className="mt-4 font-heading text-3xl uppercase tracking-[-0.04em] text-foreground md:text-5xl">
                      {option.title}
                    </h2>
                    <p className="mt-5 max-w-3xl text-base leading-8 text-muted">{option.detail}</p>
                  </div>

                  <div className="rounded-[24px] border border-black/8 bg-white/82 px-5 py-5 backdrop-blur">
                    <p className="font-heading text-xs uppercase tracking-[0.24em] text-foreground/72">
                      Best For
                    </p>
                    <div className="mt-4 space-y-3">
                      {option.bestFor.map((item) => (
                        <p key={item} className="text-sm leading-7 text-muted">
                          {item}
                        </p>
                      ))}
                    </div>
                    <Link href={option.contactHref} className="btn-small mt-6 w-fit">
                      Book this lane
                    </Link>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="site-container">
          <ScrollReveal contentClassName="surface-card px-6 py-8 md:px-8">
            <SectionHeading
              eyebrow="Trusted Relationships"
              title={<>Organizations and leaders already in the Loneless Wolf orbit.</>}
              description="These relationships help people move faster when they need confidence in the room, the message, and the person delivering it."
            />
            <ClientLogoGrid
              clients={CLIENTS.slice(0, 8)}
              className="mt-8 sm:grid-cols-2 lg:grid-cols-4"
              showNames
            />
          </ScrollReveal>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="site-container">
          <LonelessWolfBanner
            title={<>The Loneless Wolf brand keeps the work aligned.</>}
            description="Every lane is built to bring the same standard into the room: preparation, faith, resilience, and a response people can actually use after the session ends."
            href="/contact"
            ctaLabel="Book Nick"
            secondaryHref="/mission"
            secondaryLabel="See the Mission"
            badges={[
              "Speaking that stays with the room.",
              "Coaching built for pressure.",
              "Follow-through beyond the event.",
            ]}
          />
        </div>
      </section>
    </>
  );
}