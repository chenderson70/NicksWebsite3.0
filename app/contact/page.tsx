import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import ContactExperience from "@/components/contact/ContactExperience";
import LonelessWolfBanner from "@/components/site/LonelessWolfBanner";
import ScrollReveal from "@/components/site/ScrollReveal";
import SectionHeading from "@/components/site/SectionHeading";
import { BRAND } from "@/lib/constants";

const contactLanes = [
  {
    title: "Keynotes",
    copy: "For conferences, schools, teams, retreats, and stages that need conviction with practical relevance.",
  },
  {
    title: "Workshops",
    copy: "For groups that need stronger language, clearer leadership habits, and practical next steps.",
  },
  {
    title: "Mentorship",
    copy: "For leaders and athletes navigating pressure, transition, identity, or a major next step.",
  },
] as const;

export const metadata: Metadata = {
  title: "Contact | Nick Parks",
  description:
    "Contact Nick Parks and the Loneless Wolf brand for speaking, coaching, workshops, and development opportunities.",
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="site-container">
          <SectionHeading
            eyebrow="Contact"
            title={<>Bring clarity to the room before the event starts.</>}
            description="Share the audience, the objective, and what the moment requires so the conversation starts with real context."
          />
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="site-container">
          <ScrollReveal>
            <Suspense fallback={<div className="surface-card px-6 py-8 text-sm leading-7 text-muted">Loading contact options...</div>}>
              <ContactExperience />
            </Suspense>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="site-container grid gap-6 md:grid-cols-3">
          {contactLanes.map((item, index) => (
            <ScrollReveal
              key={item.title}
              delayMs={index * 80}
              className="h-full"
              contentClassName="surface-card h-full px-6 py-7"
            >
              <p className="font-heading text-lg uppercase tracking-[0.12em] text-foreground">
                {item.title}
              </p>
              <p className="mt-4 text-sm leading-7 text-muted">{item.copy}</p>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="site-container">
          <LonelessWolfBanner
            title={<>The Loneless Wolf message starts before the stage does.</>}
            description={`${BRAND.statement} Send the room, the timing, and the objective so the conversation starts with real direction.`}
            href="mailto:nparks@lonelesswolf.com"
            ctaLabel="Email Nick"
            secondaryHref="/mission"
            secondaryLabel="See the Mission"
            badges={[
              "Book keynotes and workshops.",
              "Request mentorship or strategy support.",
              "Start with the audience and outcome.",
            ]}
            tone="dark"
          />
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="site-container">
          <div className="ink-panel rounded-[36px] px-6 py-10 md:px-10">
            <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
              <div>
                <p className="section-eyebrow !text-white/70">Need a faster path?</p>
                <h2 className="mt-4 font-heading text-3xl uppercase tracking-[-0.04em] text-white md:text-5xl">
                  Use the form or email the brief directly.
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-8 text-white/72">
                  If you already know the room, the dates, and the objective, send the brief and move the conversation forward.
                </p>
              </div>
              <Link
                href="mailto:nparks@lonelesswolf.com"
                className="btn-small w-fit !border-white/20 !bg-white/10 !text-white hover:!bg-white hover:!text-foreground"
              >
                Email Nick
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}