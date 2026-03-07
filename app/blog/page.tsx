import type { Metadata } from "next";
import Link from "next/link";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import LonelessWolfBanner from "@/components/site/LonelessWolfBanner";
import ScrollReveal from "@/components/site/ScrollReveal";
import SectionHeading from "@/components/site/SectionHeading";
import { BLOG_CATEGORIES } from "@/lib/constants";
import { BLOG_POSTS } from "@/lib/blog-posts";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Blog | Nick Parks",
  description:
    "Read Nick Parks and the Loneless Wolf brand on mindset, leadership, faith, and performance.",
};

export default function BlogPage() {
  return (
    <>
      <section className="page-hero">
        <div className="site-container">
          <SectionHeading
            eyebrow="Blog"
            title={<>Lessons on preparation, leadership, and response under pressure.</>}
            description="Short reads built from the same Loneless Wolf principles Nick brings to the stage, the locker room, and coaching conversations."
          />
        </div>
      </section>

      <section className="pb-10">
        <div className="site-container flex flex-wrap gap-3">
          {BLOG_CATEGORIES.map((category, index) => (
            <ScrollReveal key={category} delayMs={index * 45}>
              <button
                type="button"
                className="rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-heading uppercase tracking-[0.22em] text-foreground/70 transition-colors hover:border-primary hover:text-primary"
              >
                {category}
              </button>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="site-container grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {BLOG_POSTS.map((post, index) => (
            <ScrollReveal
              key={post.slug}
              delayMs={index * 65}
              className="h-full"
              contentClassName="h-full"
            >
              <Link href={`/blog/${post.slug}`} className="block h-full">
                <Card className="h-full p-6">
                  <Badge variant="primary">{post.category}</Badge>
                  <h2 className="mt-5 font-heading text-2xl uppercase tracking-[-0.03em] text-foreground">
                    {post.title}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-muted">{post.excerpt}</p>
                  <div className="mt-6 flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-muted">
                    <span>{formatDate(post.date)}</span>
                    <span>*</span>
                    <span>{post.readTime}</span>
                  </div>
                </Card>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="site-container">
          <LonelessWolfBanner
            title={<>The Loneless Wolf blog exists to keep the standard active.</>}
            description="These posts are built to reinforce preparation, faith, resilience, and leadership between the larger moments on stage or in the room."
            href="/mission"
            ctaLabel="See the Mission"
            secondaryHref="/contact"
            secondaryLabel="Book Nick"
            badges={[
              "Preparation.",
              "Leadership.",
              "Faith.",
            ]}
          />
        </div>
      </section>
    </>
  );
}