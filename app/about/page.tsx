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
      "Nick's story is one of relentless transformation through injury, transition, and persistence.",
    body: [
      "Nick's story is one of relentless transformation. He broke a 54-year-old 400m school record at Purdue, endured two hip surgeries, transitioned from track to football with no film, and cold-called agents to earn an invitation to a professional football evaluation with the Calgary Stampeders. He has trained alongside elite NFL athletes and built relationships with NFL ownership-level executives.",
    ],
  },
  {
    eyebrow: "Credibility",
    title: "Why the message carries weight",
    preview:
      "15x All-American, professional Slamball athlete, Purdue captain, Male MVP, and 2x First-Team All-American.",
    body: [
      "Nicholas Parks is a 15x All-American, Professional Slamball Athlete ranked among the Top 3 Highest Flyers in the league, and a performance-driven speaker blending faith, resilience, and an elite sport mindset. He holds a BS in Organizational Leadership from Purdue University, where he served as Team Captain, Male MVP, and a 2x First-Team All-American.",
    ],
  },
  {
    eyebrow: "Identity",
    title: "How he serves athletes",
    preview:
      "He helps athletes identify what is blocking progress and builds strategies that produce real results.",
    body: [
      "He empowers athletes to reach their full potential off and on the field, identifying the impediments to their progress and tailoring strategies to elicit real results. His D-1 coaching experience at Purdue resulted in Big Ten Champions and NCAA finalists, proving he delivers at every level.",
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

