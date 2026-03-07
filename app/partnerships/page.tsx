import type { Metadata } from "next";
import Link from "next/link";
import LonelessWolfBanner from "@/components/site/LonelessWolfBanner";
import ScrollReveal from "@/components/site/ScrollReveal";
import SectionHeading from "@/components/site/SectionHeading";

export const metadata: Metadata = {
  title: "Partnerships | Nick Parks",
  description:
    "Explore Loneless Wolf partnership and collaboration opportunities with Nick Parks.",
};

const partnershipLanes = [
  "Corporate sponsorship and aligned brand support",
  "Event collaboration and audience crossover",
  "Strategic content partnerships",
  "Mission-aligned community or athlete development work",
] as const;

export default function PartnershipsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="site-container">
          <SectionHeading
            eyebrow="Partnerships"
            title={<>Partnerships should strengthen the mission, not distract from it.</>}
            description="The best collaborations are aligned in message, audience, and long-term value."
          />
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="site-container grid gap-6 md:grid-cols-2">
          {partnershipLanes.map((item, index) => (
            <ScrollReveal
              key={item}
              delayMs={index * 80}
              className="h-full"
              contentClassName="surface-card h-full px-6 py-7"
            >
              <p className="text-sm leading-7 text-muted">{item}</p>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="site-container">
          <LonelessWolfBanner
            title={<>The Loneless Wolf symbol should mean alignment.</>}
            description="The strongest partnerships amplify the message, serve the audience well, and create long-term value without diluting the mission."
            href="/contact"
            ctaLabel="Start the Conversation"
            secondaryHref="/mission"
            secondaryLabel="See the Mission"
            badges={[
              "Audience fit matters.",
              "Message alignment matters.",
              "Long-term value matters.",
            ]}
          />
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="site-container">
          <div className="ink-panel rounded-[36px] px-6 py-10 md:px-10">
            <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
              <div>
                <p className="section-eyebrow !text-white/70">Partnership Inquiry</p>
                <h2 className="mt-4 font-heading text-3xl uppercase tracking-[-0.04em] text-white md:text-5xl">
                  Start with a direct conversation.
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-8 text-white/72">
                  If there is a real strategic fit, use the contact page and include the
                  partnership idea, timeline, and what success should look like.
                </p>
              </div>
              <Link
                href="/contact"
                className="btn-small w-fit !border-white/20 !bg-white/10 !text-white hover:!bg-white hover:!text-foreground"
              >
                Contact Nick
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}