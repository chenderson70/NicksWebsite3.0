import type { Metadata } from "next";
import Link from "next/link";
import LonelessWolfBanner from "@/components/site/LonelessWolfBanner";
import ScrollReveal from "@/components/site/ScrollReveal";
import SectionHeading from "@/components/site/SectionHeading";

export const metadata: Metadata = {
  title: "Coming Soon | Nick Parks",
  description:
    "See what is next for Nick Parks and the Loneless Wolf platform, including upcoming content and new offerings.",
};

const upcoming = [
  {
    title: "Podcast",
    copy:
      "Long-form conversations on pressure, performance, leadership, and the inner work required to hold your standard.",
  },
  {
    title: "New Resources",
    copy:
      "Fresh tools, offers, and content shaped around the same ideas driving Nick's speaking and coaching work.",
  },
] as const;

export default function ComingSoonPage() {
  return (
    <>
      <section className="page-hero">
        <div className="site-container">
          <SectionHeading
            eyebrow="Coming Soon"
            title={<>The next layer of the platform is on the way.</>}
            description="New conversations, tools, and touchpoints are in development. The standard stays the same: useful, direct, and built for real pressure."
          />
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="site-container grid gap-6 md:grid-cols-2">
          {upcoming.map((item, index) => (
            <ScrollReveal
              key={item.title}
              delayMs={index * 90}
              className="h-full"
              contentClassName="surface-card h-full px-6 py-8 md:px-8"
            >
              <p className="font-heading text-2xl uppercase tracking-[0.12em] text-foreground">
                {item.title}
              </p>
              <p className="mt-4 text-sm leading-7 text-muted">{item.copy}</p>
              <span className="btn-small mt-6">In development</span>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="site-container">
          <LonelessWolfBanner
            title={<>The Loneless Wolf platform is still expanding.</>}
            description="New content is coming, but the work is already active. Reach out if you want to discuss a booking, a workshop, or a strategic fit before the public release catches up."
            href="/contact"
            ctaLabel="Contact Nick"
            secondaryHref="/mission"
            secondaryLabel="See the Mission"
            badges={[
              "Podcast conversations.",
              "Fresh digital resources.",
              "More ways to go deeper.",
            ]}
          />
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="site-container">
          <div className="ink-panel rounded-[36px] px-6 py-10 md:px-10">
            <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
              <div>
                <p className="section-eyebrow !text-white/70">Stay Connected</p>
                <h2 className="mt-4 font-heading text-3xl uppercase tracking-[-0.04em] text-white md:text-5xl">
                  Need something sooner?
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-8 text-white/72">
                  The public site is growing, but the work is already active.
                  Reach out if you want to discuss a booking, a workshop, or a strategic fit.
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