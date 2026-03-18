import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import MissionRoadmap, { type MissionMilestone } from "@/components/site/MissionRoadmap";
import MissionVideoSpotlight from "@/components/site/MissionVideoSpotlight";
import ScrollReveal from "@/components/site/ScrollReveal";
import SectionHeading from "@/components/site/SectionHeading";
import Transparent3DButton from "@/components/site/Transparent3DButton";
import { publicAsset } from "@/lib/utils";

const coreValues = [
  {
    index: "01",
    name: "Perseverance",
    summary: "Keep moving when resistance shows up.",
    description:
      "Greatness is forged in struggle. Setbacks are not identity markers. They are invitations to respond with more maturity, more effort, and more belief.",
  },
  {
    index: "02",
    name: "Authenticity",
    summary: "Truth over performance.",
    description:
      "The message works because it is honest. No mask, no script, and no borrowed story. Trust starts when the room can feel that the standard is lived first.",
  },
  {
    index: "03",
    name: "Resilience",
    summary: "Absorb pressure without folding.",
    description:
      "Pressure does not disappear. The goal is to build the kind of belief and adaptability that can take a hit, recover, and stay useful in the fight.",
  },
  {
    index: "04",
    name: "Growth",
    summary: "Stay in motion.",
    description:
      "Every day offers a chance to get sharper. Comfort does not build capacity. Growth comes from choosing progress long before the spotlight notices.",
  },
  {
    index: "05",
    name: "Discipline",
    summary: "Standards that outlast emotion.",
    description:
      "Motivation comes and goes. Discipline stays. Consistency is the bridge between desire and result, especially when nobody is watching the work.",
  },
  {
    index: "06",
    name: "Faith",
    summary: "Obedience before visibility.",
    description:
      "Faith means walking toward the assignment before the full map appears. The mission keeps moving because conviction does not wait for easy conditions.",
  },
] as const;

const operatingPrinciples = [
  {
    title: "Obedience over outcome",
    description:
      "Walk into the room before the door fully exists. Faith under pressure keeps momentum alive when external proof is still catching up.",
  },
  {
    title: "From overlooked to elite",
    description:
      "Athletes and leaders should leave with higher standards, cleaner habits, and a more professional response to adversity.",
  },
  {
    title: "Discipline without applause",
    description:
      "Train in the dark, prepare before validation, and keep the standard when the crowd is gone.",
  },
] as const;

const audienceLanes = [
  {
    name: "Student-Athletes",
    description:
      "Tiered programs that build a Division I mindset, professional-level training standards, and faith-based resilience before the offer arrives.",
    href: "/services",
    cta: "View programs",
  },
  {
    name: "Corporate Leaders",
    description:
      "Keynotes, workshops, and intensives that bring athletic-level discipline, resilience under rejection, and identity-based leadership into business rooms.",
    href: "/services",
    cta: "Explore services",
  },
  {
    name: "Coaches and ADs",
    description:
      "Team culture audits, leadership curriculum, and accountability systems that strengthen entire programs on and off the field.",
    href: "/contact",
    cta: "Book for your team",
  },
  {
    name: "Parents and Families",
    description:
      "Clear guidance for understanding the college athletics process and supporting student-athletes with more confidence and less confusion.",
    href: "/contact",
    cta: "Start the conversation",
  },
] as const;

const roadmap: MissionMilestone[] = [
  {
    year: "Purdue",
    title: "BS in Organizational Leadership",
    description:
      "Earned a Bachelor of Science in Organizational Leadership at Purdue while competing as a Division I track athlete, serving as team captain, and being named Male MVP.",
  },
  {
    year: "Record",
    title: "Broke a 54-year school record",
    description:
      "Reset Purdue's 400m mark after 54 years, moving from the bottom half of the Big Ten to fifth in the conference and twenty-fourth in the nation.",
  },
  {
    year: "Awards",
    title: "15x All-American and leadership honors",
    description:
      "Earned first-team All-American recognition, the John Wooden Leadership Certificate, and a long body of honors across AAU and collegiate competition.",
  },
  {
    year: "Pro",
    title: "Professional Slamball and football evaluation",
    description:
      "Competed professionally in Slamball as one of the league's highest flyers and earned an invitation to professional football evaluation with the Calgary Stampeders.",
  },
  {
    year: "Impact",
    title: "Eric Thomas and community work",
    description:
      "Worked with Eric Thomas and Associates, won an Urban League grant as a trusted Cobb County recipient, and built relationships with high-level leaders across sports and business.",
  },
  {
    year: "Now",
    title: "The Loneless Wolf mission keeps expanding",
    description:
      "Building the You Owe You athlete development division, pursuing strategic partnerships, and equipping the next generation with faith, discipline, and elite preparation.",
  },
] as const;

const impactSignals = [
  {
    title: "Urban League grant winner",
    description:
      "Trusted grant recipient in Cobb County, proving the work can earn support, funding, and real implementation.",
  },
  {
    title: "Student-athlete leadership curriculum",
    description:
      "Built structured curriculum used by schools, athletic directors, and foundations that wanted a stronger leadership standard.",
  },
  {
    title: "Eric Thomas and Associates",
    description:
      "Worked inside one of the most visible motivational brands in the world and contributed in rooms where precision and trust mattered.",
  },
  {
    title: "Division I and pro mentorship",
    description:
      "Mentored Division I prospects and professional athletes while building relationships with ownership-level leaders and decision-makers.",
  },
  {
    title: "Speaking and performance training",
    description:
      "Positioned the message for schools, teams, leadership groups, and corporate rooms that need more than temporary motivation.",
  },
  {
    title: "You Owe You development division",
    description:
      "Actively building a deeper athlete development lane focused on long-term preparation, accountability, and identity.",
  },
] as const;

const missionSignals = [
  "15x All-American",
  "Purdue record holder",
  "Professional athlete",
  "Leadership curriculum builder",
] as const;

const missionTags = ["Faith-led", "Pressure-tested", "Built for response"] as const;

export const metadata: Metadata = {
  title: "Mission | Nick Parks",
  description:
    "See the mission, roadmap, values, and community impact behind Nick Parks and the Loneless Wolf platform.",
};

export default function MissionPage() {
  return (
    <>
      <section className="page-hero mission-hero">
        <div className="site-container">
          <div className="hero-grid gap-10">
            <div className="relative z-10 max-w-3xl">
              <p className="section-eyebrow">Mission</p>
              <h1 className="mt-6 font-heading text-5xl uppercase tracking-[-0.06em] text-foreground md:text-7xl">
                You are not alone.
                <span className="block text-primary">The mission is to help people face pressure feeling prepared, grounded, and supported.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted md:text-xl">
                Loneless Wolf stands for working optimists leaning on faith. The work
                is built to help athletes, students, leaders, and families answer hard
                seasons with preparation, discipline, and conviction.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link href="/contact" className="btn-primary">
                  Book Nick
                </Link>
                <Transparent3DButton href="#roadmap" label="See The Roadmap" />
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {missionSignals.map((signal, index) => (
                  <div
                    key={signal}
                    className="mission-floating-note rounded-[22px] border border-black/8 bg-white/84 px-4 py-4 shadow-card backdrop-blur"
                    style={{ animationDelay: `${index * 1.1}s` }}
                  >
                    <p className="font-heading text-xs uppercase tracking-[0.24em] text-primary">
                      Signal {index + 1}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-foreground">{signal}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mission-highlight-panel relative">
              <div className="surface-panel relative overflow-hidden p-3 md:p-4">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[24px]">
                  <Image
                    src={publicAsset("/images/NickServe.jpg")}
                    alt="Nick Parks mission portrait"
                    fill
                    priority
                    className="object-cover object-[center_24%]"
                    sizes="(min-width: 1024px) 40vw, 92vw"
                  />
                </div>

                <div className="mission-spotlight absolute left-4 top-4 rounded-[24px] border border-white/55 bg-white/88 px-4 py-4 shadow-card backdrop-blur md:left-auto md:right-4 md:top-5 md:max-w-[220px]">
                  <p className="font-heading text-xs uppercase tracking-[0.24em] text-primary">
                    The standard
                  </p>
                  <p className="mt-3 text-sm leading-6 text-foreground">
                    Fear is not an option when people are properly prepared.
                  </p>
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                  {missionTags.map((tag, index) => (
                    <span
                      key={tag}
                      className="mission-floating-note rounded-full border border-white/60 bg-[#101311]/82 px-4 py-2 font-heading text-xs uppercase tracking-[0.22em] text-white shadow-card"
                      style={{ animationDelay: `${index * 1.25 + 0.35}s` }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="mx-auto w-[min(1380px,calc(100%-1.25rem))] space-y-6 md:w-[min(1380px,calc(100%-3rem))]">
          <ScrollReveal>
            <MissionVideoSpotlight />
          </ScrollReveal>

          <ScrollReveal delayMs={120} contentClassName="mission-quote-panel ink-panel rounded-[34px] px-6 py-8 md:px-8 md:py-10 xl:px-10 xl:py-11">
            <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
              <div>
                <p className="section-eyebrow !text-white/72">Mission statement</p>
                <blockquote className="mt-5 max-w-5xl font-heading text-2xl uppercase tracking-[-0.04em] text-white md:text-4xl md:leading-[1.05] xl:text-[3.1rem]">
                  "Loneless Wolf stands for you are not alone in being a working
                  optimist leaning on faith."
                </blockquote>
                <p className="mt-5 max-w-3xl text-base leading-8 text-white/72 md:text-lg">
                  The assignment is bigger than momentary inspiration. The goal is to
                  equip people to face fear, handle rejection, and keep moving because
                  preparation changes how pressure feels.
                </p>
              </div>

              <div className="rounded-[26px] border border-white/12 bg-white/8 px-5 py-5 backdrop-blur md:px-6 md:py-6">
                <p className="font-heading text-sm uppercase tracking-[0.22em] text-white/88">
                  What the mission demands
                </p>
                <p className="mt-4 text-base leading-8 text-white/76">
                  This is not built for momentary hype. It is built for pressure, response,
                  discipline, and the kind of preparation that still works when the room gets hard.
                </p>
              </div>
            </div>

            <div className="mt-8 grid gap-3 md:grid-cols-3">
              {operatingPrinciples.map((principle) => (
                <div
                  key={principle.title}
                  className="rounded-[24px] border border-white/10 bg-white/8 px-4 py-4 backdrop-blur md:px-5 md:py-5"
                >
                  <p className="font-heading text-xs uppercase tracking-[0.22em] text-white">
                    {principle.title}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-white/72">{principle.description}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="site-container">
          <SectionHeading
            eyebrow="Core Values"
            title={<>The principles underneath the mission.</>}
            description="These are the habits, beliefs, and response patterns that shape how the message sounds and how the work is built."
            align="center"
          />

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {coreValues.map((value, index) => (
              <ScrollReveal
                key={value.name}
                delayMs={index * 80}
                className="h-full"
                contentClassName={`mission-value-card h-full px-6 py-6 ${
                  index % 3 === 1 ? "accent-wash" : "surface-card"
                }`}
              >
                <div className="flex flex-col gap-4">
                  <div className="text-center">
                    <p className="section-eyebrow">{value.index}</p>
                    <h2 className="mt-4 font-heading text-3xl uppercase tracking-[-0.04em] text-foreground">
                      {value.name}
                    </h2>
                  </div>
                  <span className="inline-flex min-h-[60px] w-full items-center justify-center rounded-full border border-primary/18 bg-primary/8 px-5 py-2.5 text-center font-heading text-xs uppercase tracking-[0.18em] leading-5 text-primary md:min-h-[64px]">
                    {value.summary}
                  </span>
                </div>
                <p className="mt-6 text-sm leading-7 text-muted">{value.description}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="site-container space-y-6">
          <ScrollReveal contentClassName="surface-card accent-wash px-6 py-8 md:px-8 md:py-10">
            <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
              <div>
                <SectionHeading
                  eyebrow="The Vision"
                  title={<>Building a legacy of impact.</>}
                  description="The aim is not to create a short emotional spike. It is to create a ripple effect where people leave with stronger language, better habits, and a plan for the next pressure moment."
                />
                <div className="mt-6 space-y-4 text-base leading-8 text-muted">
                  <p>
                    Nick serves student-athletes, leaders, teams, and families through
                    structured involvement that creates durable change.
                  </p>
                  <p>
                    From the You Owe You athlete development lane to corporate
                    partnerships and speaking engagements, the mission keeps expanding
                    because the need keeps showing up in new rooms.
                  </p>
                </div>
              </div>

              <div className="grid gap-4">
                {operatingPrinciples.map((principle) => (
                  <article
                    key={principle.title}
                    className="rounded-[26px] border border-black/8 bg-white/84 px-5 py-5 shadow-card backdrop-blur"
                  >
                    <p className="font-heading text-sm uppercase tracking-[0.2em] text-foreground">
                      {principle.title}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-muted">{principle.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {audienceLanes.map((audience, index) => (
              <ScrollReveal
                key={audience.name}
                delayMs={index * 70}
                className="h-full"
                contentClassName="surface-card flex h-full flex-col px-5 py-6"
              >
                <p className="section-eyebrow">Who it serves</p>
                <h2 className="mt-4 font-heading text-2xl uppercase tracking-[-0.04em] text-foreground">
                  {audience.name}
                </h2>
                <p className="mt-4 flex-1 text-sm leading-7 text-muted">{audience.description}</p>
                <Link href={audience.href} className="btn-small mt-6 w-fit">
                  {audience.cta}
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section id="roadmap" className="section-space mission-roadmap-section pt-0">
        <div className="site-container">
          <SectionHeading
            eyebrow="Roadmap"
            title={<>The journey behind the message.</>}
            description="This is the path that gives the mission weight, from Purdue to professional competition to community-building work."
            align="center"
          />
          <MissionRoadmap milestones={roadmap} />
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="site-container">
          <SectionHeading
            eyebrow="Impact"
            title={<>Proof that the mission travels.</>}
            description="The work has already produced trust, partnerships, curriculum, and opportunities that stretch beyond one speech or one season."
            align="center"
          />

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {impactSignals.map((item, index) => (
              <ScrollReveal
                key={item.title}
                delayMs={index * 65}
                className="h-full"
                contentClassName={`h-full rounded-[30px] border border-black/8 px-6 py-6 shadow-card ${
                  index % 3 === 1 ? "accent-wash" : "surface-card"
                }`}
              >
                <p className="font-heading text-xl uppercase tracking-[0.08em] text-foreground">
                  {item.title}
                </p>
                <p className="mt-4 text-sm leading-7 text-muted">{item.description}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="site-container">
          <ScrollReveal contentClassName="mission-quote-panel ink-panel rounded-[38px] px-6 py-10 md:px-10 md:py-12">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p className="section-eyebrow !text-white/72">Next step</p>
                <h2 className="mt-4 font-heading text-3xl uppercase tracking-[-0.04em] text-white md:text-5xl">
                  Bring the mission into the room.
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-8 text-white/72">
                  If the room needs preparation, resilience, and a clear standard for
                  response under pressure, the fastest next step is a direct conversation.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary">
                  Book Nick
                </Link>
                <Link
                  href="/partnerships"
                  className="btn-outline !border-white/18 !bg-white/8 !text-white hover:!border-white hover:!bg-white hover:!text-foreground"
                >
                  Explore partnerships
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
