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