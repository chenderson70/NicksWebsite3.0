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

type ServiceTier = {
  label: string;
  tier: string;
  title: string;
  subtitle: string;
  bestFor: string;
  summary: string;
  focusAreas: string[];
  includes: string[];
  outcome?: string;
  contactHref: string;
  featured?: boolean;
};

const athleteTiers: ServiceTier[] = [
  {
    tier: "Foundation",
    label: "01",
    title: "The Impossible Blueprint",
    subtitle: "Group-Based Program",
    bestFor: "Schools, teams, and athletic departments",
    summary:
      "A transformative group curriculum that builds a professional athlete standard even in high school. Athletes leave thinking like pros before they become pros.",
    focusAreas: [
      "Mindset for success",
      "Building a professional athlete standard before college",
      "Faith-based resilience and identity",
      "Discipline over doubt",
      "Handling rejection and staying aligned",
      "From overlooked to elite",
    ],
    includes: [
      "4-8 week curriculum",
      "Team workshops",
      "Q&A sessions",
      "Accountability worksheets",
      "Faith and performance integration",
      "Growth tracking metrics",
    ],
    outcome: "Athletes leave thinking like pros before they become pros.",
    contactHref: "/contact?type=Team%20workshop",
  },
  {
    tier: "Performance",
    label: "02",
    title: "Elite Body. Elite Mind.",
    subtitle: "Training Mentorship",
    bestFor: "Serious athletes ready to separate themselves",
    summary:
      "For athletes ready to operate at professional standards. This lane combines body care, recovery, training habits, and mindset that match the calling.",
    focusAreas: [
      "Recovery protocols",
      "Professional-level training standards",
      "Film study and mental reps",
      "Nutrition principles",
      "Strength, mobility, and injury prevention",
      "Building a body that matches your calling",
    ],
    includes: [
      "Monthly or bi-weekly training mentorship",
      "Body transformation strategy",
      "Weekly check-ins",
      "Customized development plan",
      "Direct mentorship access",
    ],
    outcome: "Athletes begin to operate at professional standards.",
    contactHref: "/contact?type=Coaching%20or%20mentorship",
  },
  {
    tier: "Immersion",
    label: "03",
    title: "From No Film to Pro-Level",
    subtitle: "High-Touch Mentorship",
    bestFor: "Elite athletes pursuing college or pro dreams",
    summary:
      "Nick's story is the differentiator here. This is high-touch, high-accountability mentorship for athletes ready to bet on themselves with clarity, courage, and execution.",
    focusAreas: [
      "Transitioning with no film and no guarantee",
      "Betting on yourself",
      "Persistence in darkness",
      "Handling being overlooked",
      "Faith under pressure",
      "Navigating tryouts, exposure, and relationships",
    ],
    includes: [
      "1-on-1 coaching",
      "Exposure strategy guidance",
      "Personal development mapping",
      "Faith-centered growth coaching",
      "Custom roadmap",
    ],
    outcome: "Athletes gain clarity, courage, and an execution strategy.",
    contactHref: "/contact?type=Coaching%20or%20mentorship",
    featured: true,
  },
];

const leaderTiers: ServiceTier[] = [
  {
    tier: "Keynote Experience",
    label: "01",
    title: "Achieving the Impossible",
    subtitle: "Signature Keynote",
    bestFor:
      "Leadership conferences, sales teams, corporate retreats, and faith-based organizations",
    summary:
      "Nick's story translates directly into corporate resilience. This keynote reframes preparation, faith, and what it means to show up before the door exists.",
    focusAreas: [
      "Walking into rooms you do not qualify for yet",
      "Faith under pressure",
      "Preparation before opportunity",
      "Building confidence without credentials",
      "Showing up before the door exists",
      "Obedience over outcome",
    ],
    includes: [],
    contactHref: "/contact?type=Keynote%20speaking",
  },
  {
    tier: "Leadership Workshops",
    label: "02",
    title: "Leadership That Elevates",
    subtitle: "Interactive Workshops",
    bestFor: "Organizations, departments, and leadership teams",
    summary:
      "Custom workshops that build performance standards, elevate team behavior, and create measurable culture change that lasts beyond the session.",
    focusAreas: [
      "Leading through uncertainty",
      "Resilience under rejection",
      "Identity-based leadership",
      "Culture building through discipline",
      "Performance standards that elevate teams",
      "Customized growth planning",
    ],
    includes: [
      "Organizational audit",
      "Culture assessment",
      "Custom strategy session",
      "KPI-aligned follow-through",
    ],
    contactHref: "/contact?type=Leadership%20training",
  },
  {
    tier: "Executive Intensive",
    label: "03",
    title: "Executive Alignment",
    subtitle: "High-Level Intensive",
    bestFor: "CEOs, founders, athletic directors, and senior decision-makers",
    summary:
      "A high-level, faith-integrated intensive for leaders who need endurance systems, strategic positioning, and conviction strong enough to lead from character rather than ego.",
    focusAreas: [
      "Faith and leadership integration",
      "Personal endurance systems",
      "Strategic positioning when undervalued",
      "Building influence through character",
      "Stress management and recovery",
      "Leading from conviction, not ego",
    ],
    includes: [
      "Focused advisory session",
      "Decision-pressure review",
      "Leadership rhythm mapping",
      "Direct implementation priorities",
    ],
    contactHref: "/contact?type=Leadership%20training",
    featured: true,
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discovery Call",
    description:
      "We start with a conversation around the room, the audience, the goal, and the actual pressure point.",
  },
  {
    step: "02",
    title: "Custom Tailoring",
    description:
      "Nick shapes the keynote, workshop, or coaching path to the exact moment, audience, and outcome you need.",
  },
  {
    step: "03",
    title: "Delivery and Impact",
    description:
      "The message is delivered with energy, authenticity, and practical direction so it lands deeper than inspiration alone.",
  },
  {
    step: "04",
    title: "Follow-Through",
    description:
      "Resources, reinforcement, and the next right step keep the impact moving after the event is over.",
  },
] as const;

export const metadata: Metadata = {
  title: "Services | Nick Parks",
  description:
    "Explore Loneless Wolf services for student-athletes, teams, executives, and organizations through keynotes, workshops, coaching, and high-accountability mentorship.",
};

function ServiceTierCard({ tier, delayMs = 0 }: { tier: ServiceTier; delayMs?: number }) {
  return (
    <ScrollReveal
      delayMs={delayMs}
      className="h-full"
      contentClassName={`${tier.featured ? "accent-wash" : "surface-card"} h-full rounded-[30px] border border-black/8 px-6 py-7 shadow-card md:px-7`}
    >
      <article className="flex h-full flex-col">
        <div className="flex items-center gap-3">
          <span className="font-heading text-3xl text-primary/28">{tier.label}</span>
          <span className="section-eyebrow">{tier.tier}</span>
        </div>

        <h3 className="mt-5 font-heading text-3xl uppercase tracking-[-0.04em] text-foreground md:text-[2rem]">
          {tier.title}
        </h3>
        <p className="mt-2 text-base leading-7 text-primary">{tier.subtitle}</p>
        <p className="mt-5 text-sm leading-7 text-muted">{tier.summary}</p>

        <div className="mt-6 rounded-[24px] border border-black/8 bg-white/80 px-5 py-4 backdrop-blur">
          <p className="font-heading text-xs uppercase tracking-[0.24em] text-foreground/72">Best For</p>
          <p className="mt-3 text-sm leading-7 text-muted">{tier.bestFor}</p>
        </div>

        <div className="mt-6">
          <p className="font-heading text-xs uppercase tracking-[0.24em] text-foreground/72">Focus Areas</p>
          <div className="mt-4 space-y-3">
            {tier.focusAreas.map((area) => (
              <p key={area} className="flex items-start gap-3 text-sm leading-7 text-muted">
                <span className="mt-[0.55rem] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                <span>{area}</span>
              </p>
            ))}
          </div>
        </div>

        {tier.includes.length > 0 ? (
          <div className="mt-6">
            <p className="font-heading text-xs uppercase tracking-[0.24em] text-foreground/72">Includes</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {tier.includes.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-black/8 bg-white/75 px-3 py-2 text-sm leading-6 text-muted"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ) : null}

        <div className="mt-8 border-t border-black/8 pt-5">
          {tier.outcome ? (
            <p className="text-sm leading-7 text-foreground">
              <span className="font-heading uppercase tracking-[0.22em] text-primary">Outcome</span>
              <span className="ml-3">{tier.outcome}</span>
            </p>
          ) : null}
          <Link href={tier.contactHref} className="btn-small mt-5 w-fit">
            Book this service
          </Link>
        </div>
      </article>
    </ScrollReveal>
  );
}

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero overflow-hidden">
        <div className="site-container grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="max-w-3xl">
            <p className="section-eyebrow">Loneless Wolf services for athletes, leaders, and organizations</p>
            <h1 className="mt-6 font-heading text-5xl uppercase tracking-[-0.06em] text-foreground md:text-7xl">
              What Nick offers.
              <span className="block text-primary">Built for real rooms, real pressure, and real growth.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted md:text-xl">
              Keynote speaking, mental performance coaching, culture workshops, and mentorship tailored to
              your team, organization, or individual assignment.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link href="/contact" className="btn-primary">
                Book a Discovery Call
              </Link>
              <Transparent3DButton href="#student-athletes" label="Explore Services" />
            </div>
            <div className="mt-8 flex flex-wrap gap-3 text-sm text-muted">
              <a href="#student-athletes" className="rounded-full border border-black/8 bg-white/80 px-4 py-2 backdrop-blur">
                Student-athlete tiers
              </a>
              <a href="#leaders" className="rounded-full border border-black/8 bg-white/80 px-4 py-2 backdrop-blur">
                Leadership services
              </a>
              <a href="#process" className="rounded-full border border-black/8 bg-white/80 px-4 py-2 backdrop-blur">
                Process
              </a>
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
              <div className="absolute inset-x-5 bottom-5 rounded-[22px] border border-white/35 bg-black/55 px-5 py-4 text-white backdrop-blur">
                <p className="font-heading text-xs uppercase tracking-[0.28em] text-white/72">Loneless Wolf</p>
                <p className="mt-2 text-base leading-7 text-white/88">
                  Speaking, coaching, and development lanes designed to move people from overlooked to elite.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="student-athletes" className="section-space pt-0">
        <div className="site-container">
          <SectionHeading
            eyebrow="For Student-Athletes"
            title={<>Three tiers to elite.</>}
            description="From team-wide development to high-touch mentorship, these services mirror the strongest parts of the 2.0 offer while staying in the current Loneless Wolf format."
          />
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {athleteTiers.map((tier, index) => (
              <ServiceTierCard key={tier.title} tier={tier} delayMs={index * 80} />
            ))}
          </div>
        </div>
      </section>

      <section id="leaders" className="section-space pt-0">
        <div className="site-container">
          <SectionHeading
            eyebrow="For Corporate Leaders and Executives"
            title={<>Leadership through resilience.</>}
            description="Keynotes, workshops, and executive intensives that bring athletic-level discipline, faith, and performance standards into the boardroom and leadership team."
          />
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {leaderTiers.map((tier, index) => (
              <ServiceTierCard key={tier.title} tier={tier} delayMs={index * 80} />
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="section-space pt-0">
        <div className="site-container">
          <ScrollReveal contentClassName="surface-card px-6 py-8 md:px-8">
            <SectionHeading
              eyebrow="The Process"
              title={<>How it works.</>}
              description="The service flow is simple: clarify the objective, tailor the experience, deliver with weight, and keep the growth moving after the room clears."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {processSteps.map((step, index) => (
                <ScrollReveal key={step.step} delayMs={index * 70} className="h-full">
                  <article className="flex h-full flex-col rounded-[26px] border border-black/8 bg-white/72 px-5 py-6 shadow-card backdrop-blur">
                    <span className="font-heading text-5xl text-primary/26">{step.step}</span>
                    <h3 className="mt-4 font-heading text-2xl uppercase tracking-[-0.04em] text-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-muted">{step.description}</p>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>
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
            title={<>Ready to build the right service lane?</>}
            description="Whether you need a keynote, a student-athlete program, leadership development, or high-accountability mentorship, Loneless Wolf can tailor the room, the message, and the follow-through around the outcome you need."
            href="/contact"
            ctaLabel="Book Nick"
            secondaryHref="/about"
            secondaryLabel="Learn More About Nick"
            badges={[
              "Keynotes that shift the room.",
              "Programs that develop overlooked athletes.",
              "Leadership intensives with staying power.",
            ]}
          />
        </div>
      </section>
    </>
  );
}
