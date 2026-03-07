import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import DisclosureCard from "@/components/site/DisclosureCard";
import LonelessWolfBanner from "@/components/site/LonelessWolfBanner";
import ScrollReveal from "@/components/site/ScrollReveal";
import SectionHeading from "@/components/site/SectionHeading";
import { BRAND } from "@/lib/constants";
import { publicAsset } from "@/lib/utils";

const disclosures = [
  {
    eyebrow: "Story",
    title: "What shaped the message",
    preview:
      "Purdue, elite competition, injuries, transition, and the unseen work behind the visible result.",
    body: [
      "Nick's path includes Purdue track, elite competition, hip surgeries, a transition toward football with no film, and the type of persistence most people never see when they only watch the polished result.",
      "That is why the message carries weight. It is built from response under pressure, not from abstract motivation.",
    ],
  },
  {
    eyebrow: "Credibility",
    title: "Why the message carries weight",
    preview:
      "15x All-American, Purdue captain and record holder, professional Slamball athlete, and Division I coaching experience.",
    body: [
      "2x First-Team All-American at Purdue University.",
      "54-year-old school record broken in the 400m.",
      "Professional Slamball competition and broad athletic development work.",
      "Division I coaching experience producing Big Ten champions and NCAA finalists.",
    ],
  },
  {
    eyebrow: "Identity",
    title: "Why Loneless Wolf matters",
    preview:
      "The brand gives language to people carrying pressure with faith and discipline.",
    body: [
      `${BRAND.name} is not a side label. It is the identity framework behind the message: you are not alone in being a working optimist leaning on faith.`,
      "That framing helps athletes, leaders, and families understand that resilience and belief can coexist with real pressure, long timelines, and unseen work.",
    ],
  },
] as const;

const athleticAchievements = [
  "15x All-American (AAU and collegiate combined)",
  "2x First-Team All-American - Purdue University",
  "Purdue Team Male MVP and team captain",
  "2x school record holder - Purdue University",
  "Broke the 400m school record that stood for 54 years",
  "Professional Slamball athlete - ranked Top 3 highest flyer in the league",
  "25+ years of competitive athletic experience",
  "Trained with elite and pro-level athletes including Vernon Adams Jr.",
  "Invited to professional football evaluation with the Calgary Stampeders",
] as const;

const leadershipHonors = [
  "John Wooden Leadership Award recipient",
  "Recognized team leader at Purdue University",
  "Mentored high school and collegiate student-athletes",
  "Faith-based athlete development program founder",
  "Chaplain and character-development influence within athletic circles",
] as const;

const mediaRecognition = [
  { outlet: "ESPN", type: "Featured" },
  { outlet: "Big Ten Network", type: "Featured" },
  { outlet: "Marietta Daily Journal", type: "Featured" },
  { outlet: "Urban League - Trusted Cobb County Grant Recipient", type: "Recognized" },
] as const;

export const metadata: Metadata = {
  title: "About | Nick Parks",
  description:
    "Learn more about Nick Parks, the Loneless Wolf brand, and the body of work behind the message.",
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="site-container">
          <div className="hero-grid gap-10">
            <div>
              <SectionHeading
                eyebrow="About Nick"
                title={<>The message is built from a lived body of work.</>}
                description="Professional athlete, coach, speaker, and the voice behind Loneless Wolf."
              />
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary">
                  Book Nick
                </Link>
                <Link href="/services" className="btn-outline">
                  View Services
                </Link>
              </div>
            </div>

            <div className="surface-panel p-3 md:p-4">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[24px]">
                <Image
                  src={publicAsset("/images/aboutsectionphoto.PNG")}
                  alt="Nick Parks portrait"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 40vw, 92vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="site-container space-y-4">
          {disclosures.map((item, index) => (
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
      </section>

      <section className="section-space pt-0">
        <div className="site-container">
          <div className="relative overflow-hidden rounded-[40px] border border-black/8 bg-[#070b09]">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 h-full w-full object-cover opacity-90" preload="auto"
            >
              <source src={publicAsset("/images/trackvid.mp4")} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-b from-[#080808]/44 via-[#080808]/26 to-[#080808]/74" />
            <div className="relative z-10 px-6 py-10 md:px-10 md:py-14">
              <SectionHeading
                eyebrow="Athletic Achievements"
                title={<>Over 25 years of competitive excellence.</>}
                description="The results, recognition, and performance timeline behind the message."
                align="center"
                titleClassName="!text-white [text-shadow:0_8px_24px_rgba(0,0,0,0.42)]"
                descriptionClassName="!text-white text-lg md:text-xl [text-shadow:0_6px_18px_rgba(0,0,0,0.42)]"
              />

              <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {athleticAchievements.map((item, index) => (
                  <ScrollReveal
                    key={item}
                    delayMs={index * 65}
                    className="h-full"
                    contentClassName="h-full rounded-[24px] border border-white/14 bg-[#060808]/42 px-5 py-5 backdrop-blur"
                  >
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 text-lg text-primary">+</span>
                      <p className="text-base font-medium leading-8 text-white [text-shadow:0_4px_14px_rgba(0,0,0,0.48)] md:text-[1.08rem]">{item}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
                <ScrollReveal contentClassName="rounded-[28px] border border-white/14 bg-[#060808]/46 px-6 py-7 backdrop-blur md:px-7">
                  <div className="flex items-center gap-4">
                    <div className="h-14 w-[2px] bg-primary" />
                    <div>
                      <p className="font-heading text-xs uppercase tracking-[0.28em] text-primary">
                        Leadership & Character
                      </p>
                      <h2 className="mt-3 font-heading text-3xl uppercase tracking-[-0.04em] text-white md:text-4xl">
                        Honors & Recognition
                      </h2>
                    </div>
                  </div>
                  <div className="mt-8 space-y-4">
                    {leadershipHonors.map((honor, index) => (
                      <div key={honor} className="flex items-start gap-3">
                        <span className="mt-0.5 text-primary">+</span>
                        <p className="text-lg font-medium leading-8 text-white [text-shadow:0_4px_14px_rgba(0,0,0,0.52)] md:text-[1.08rem]">{honor}</p>
                      </div>
                    ))}
                  </div>
                </ScrollReveal>

                <ScrollReveal delayMs={120} contentClassName="rounded-[28px] border border-white/14 bg-[#060808]/52 px-6 py-7 backdrop-blur md:px-7">
                  <p className="font-heading text-xs uppercase tracking-[0.28em] text-primary">
                    As Seen On
                  </p>
                  <div className="mt-6 space-y-4">
                    {mediaRecognition.map((item) => (
                      <div
                        key={item.outlet}
                        className="border-b border-white/10 pb-4 last:border-0 last:pb-0"
                      >
                        <p className="font-heading text-xs uppercase tracking-[0.24em] text-primary">
                          {item.type}
                        </p>
                        <p className="mt-2 text-lg font-medium leading-8 text-white [text-shadow:0_4px_14px_rgba(0,0,0,0.52)] md:text-[1.08rem]">{item.outlet}</p>
                      </div>
                    ))}
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="site-container">
          <LonelessWolfBanner
            title={<>Nicholas Parks is the Loneless Wolf.</>}
            description="The brand exists to serve athletes, teams, leaders, and families who need faith-led preparation and language for carrying pressure well."
            href="/mission"
            ctaLabel="See the Mission"
            secondaryHref="/contact"
            secondaryLabel="Book Nick"
            badges={[
              "Professional athlete.",
              "Mental performance coach.",
              "Culture enhancer and mentor.",
            ]}
          />
        </div>
      </section>
    </>
  );
}