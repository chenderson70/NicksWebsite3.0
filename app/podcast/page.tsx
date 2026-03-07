import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/site/SectionHeading";

export const metadata: Metadata = {
  title: "Podcast | Nick Parks",
  description: "Podcast content from Nick Parks is in development.",
};

export default function PodcastPage() {
  return (
    <>
      <section className="page-hero">
        <div className="site-container">
          <SectionHeading
            eyebrow="Podcast"
            title={<>Long-form conversations are coming.</>}
            description="Expect deeper conversations on pressure, preparation, faith, leadership, and the work behind lasting growth."
          />
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="site-container surface-card px-6 py-10 text-center md:px-10">
          <p className="font-heading text-4xl uppercase tracking-[-0.05em] text-primary md:text-6xl">
            Coming Soon
          </p>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-muted md:text-lg">
            The podcast will create more room for the stories and frameworks that do
            not fit inside a short keynote clip.
          </p>
          <Link href="/contact" className="btn-outline mt-8">
            Ask about upcoming releases
          </Link>
        </div>
      </section>
    </>
  );
}
