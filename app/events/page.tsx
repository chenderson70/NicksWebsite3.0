import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/site/SectionHeading";

export const metadata: Metadata = {
  title: "Events | Nick Parks",
  description: "See the kinds of stages and rooms Nick Parks is built for.",
};

const eventTypes = [
  "Leadership conferences",
  "Athletic departments and teams",
  "School and university speaker series",
  "Corporate retreats and workshops",
  "Faith-centered gatherings and community events",
];

export default function EventsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="site-container">
          <SectionHeading
            eyebrow="Events"
            title={<>Nick is built for rooms that need more than motivation.</>}
            description="The goal is lasting response, not a temporary emotional lift."
          />
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="site-container grid gap-6 md:grid-cols-2">
          {eventTypes.map((item) => (
            <div key={item} className="surface-card px-6 py-7">
              <p className="font-heading text-lg uppercase tracking-[0.12em] text-foreground">
                {item}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="site-container">
          <div className="ink-panel rounded-[36px] px-6 py-10 md:px-10">
            <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
              <div>
                <p className="section-eyebrow !text-white/70">Availability</p>
                <h2 className="mt-4 font-heading text-3xl uppercase tracking-[-0.04em] text-white md:text-5xl">
                  Reach out for current scheduling.
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-8 text-white/72">
                  Event dates and formats are tailored case by case. Share the city,
                  timing, audience, and objective to start the process.
                </p>
              </div>
              <Link
                href="/contact"
                className="btn-small w-fit !border-white/20 !bg-white/10 !text-white hover:!bg-white hover:!text-foreground"
              >
                Ask about dates
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
