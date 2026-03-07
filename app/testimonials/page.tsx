"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ClientLogoGrid from "@/components/site/ClientLogoGrid";
import ClientLogoMarquee from "@/components/site/ClientLogoMarquee";
import LonelessWolfBanner from "@/components/site/LonelessWolfBanner";
import ScrollReveal from "@/components/site/ScrollReveal";
import SectionHeading from "@/components/site/SectionHeading";
import { CLIENTS } from "@/lib/constants";

const testimonials = [
  {
    short:
      "Nick understood how to make every student feel included and create a sense of identity and belonging.",
    full:
      "Nick understood how to make every student feel included. He worked with students from various socioeconomic, racial, and other demographic backgrounds to create a sense of identity and belonging in his wing of the dorm and throughout the campus. As a servant leader, he was never too busy to help anyone who needed his assistance.",
    name: "John Weaver",
    title: "Dean of Students, Montverde Academy",
  },
  {
    short:
      "You motivated all of us to keep going and brought a positive energy to the dorm that everybody felt.",
    full:
      "You motivated all of us to keep going and you were such a positive energy around the dorm. Most importantly, you supported each and every one of us and I appreciate that greatly. You were the kind of mentor and friend we needed while we were away from home.",
    name: "Victor",
    title: "Soccer Player, Tulsa University",
  },
  {
    short:
      "He taught me things I did not know about being a professional athlete in America and always taught life lessons.",
    full:
      "It was really great having him as a dorm parent. He taught me things I did not know about being a professional athlete in America and he always taught me life lessons. He is one of the best role models ever and I am glad I got to know him.",
    name: "Kierro Stubbs",
    title: "Champion Swimmer, Rollins College commit",
  },
  {
    short:
      "He was not only my favorite dorm parent, but more like a big brother I could always go to.",
    full:
      "If I was having trouble with sports and school, I could go to him and ask for advice because he had been in my shoes before. Even when things were heavy, his energy made the dorm feel lighter and more connected.",
    name: "Hunter Outerbridge",
    title: "Soccer Player, Jacksonville University",
  },
] as const;

const trustedPhotos = [
  { src: "/images/NickET.jpg", alt: "Nick Parks with Eric Thomas" },
  { src: "/images/NickWarrick.JPG", alt: "Nick Parks with Warrick Dunn" },
  { src: "/images/NickHouseofHighlight.jpg", alt: "Nick Parks at House of Highlights" },
  { src: "/images/NickKarl.JPEG", alt: "Nick Parks with leadership partners" },
] as const;

export default function TestimonialsPage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [expandedPhoto, setExpandedPhoto] = useState<number | null>(null);

  return (
    <>
      <section className="page-hero">
        <div className="site-container">
          <SectionHeading
            eyebrow="Trusted By"
            title={<>Trust is earned long before the stage.</>}
            description="These relationships reflect the kind of impact Nick brings across athletics, education, leadership, and community work."
          />
        </div>
      </section>

      <section className="pb-16 md:pb-20">
        <div className="site-container">
          <div className="ink-panel overflow-hidden rounded-[38px] border border-white/10 px-6 py-8 md:px-8">
            <ClientLogoMarquee
              clients={CLIENTS}
              title="Collaborations connected to the Loneless Wolf brand"
              theme="dark"
            />
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="site-container grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {trustedPhotos.map((photo, index) => (
            <ScrollReveal
              key={photo.src}
              delayMs={index * 70}
              className="h-full"
              contentClassName="h-full"
            >
              <button
                type="button"
                onClick={() => setExpandedPhoto(index)}
                className="relative aspect-[5/4] w-full overflow-hidden rounded-[28px] shadow-card"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 23vw, 44vw"
                />
              </button>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="site-container">
          <SectionHeading
            eyebrow="Testimonials"
            title={<>What people remember is how they felt in the room.</>}
            description="These reflections come from students and athletes who experienced Nick's leadership and presence up close."
            align="center"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {testimonials.map((item, index) => (
              <ScrollReveal
                key={item.name}
                delayMs={index * 75}
                className="h-full"
                contentClassName="h-full"
              >
                <button
                  type="button"
                  onClick={() => setSelectedIndex(index)}
                  className="surface-card card-hover h-full w-full px-6 py-7 text-left"
                >
                  <p className="text-base leading-8 text-foreground/78">"{item.short}"</p>
                  <p className="mt-6 font-heading text-xs uppercase tracking-[0.24em] text-primary">
                    {item.name}
                  </p>
                  <p className="mt-2 text-xs uppercase tracking-[0.18em] text-muted">
                    {item.title}
                  </p>
                  <span className="btn-ghost mt-6">Read full testimonial</span>
                </button>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="site-container surface-card px-6 py-8 md:px-10">
          <SectionHeading
            eyebrow="Trusted Relationships"
            title={<>Recognizable brands. Real trust. Lasting credibility.</>}
            description="The work travels because the trust behind it is real."
          />
          <ClientLogoGrid
            clients={CLIENTS}
            className="mt-8 sm:grid-cols-2 lg:grid-cols-4"
            showNames
          />
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="site-container">
          <LonelessWolfBanner
            title={<>The Loneless Wolf name carries because the trust is real.</>}
            description="If your audience needs resilient leadership, practical conviction, and a message that carries after the event, start the conversation here."
            href="/contact"
            ctaLabel="Book Nick"
            secondaryHref="/mission"
            secondaryLabel="See the Mission"
            badges={[
              "Schools and teams.",
              "Leadership rooms.",
              "Community impact work.",
            ]}
            tone="dark"
          />
        </div>
      </section>

      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/55 p-4 backdrop-blur-sm"
          onClick={() => setSelectedIndex(null)}
        >
          <div
            className="surface-card relative w-full max-w-2xl px-6 py-8 md:px-8"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedIndex(null)}
              className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-foreground"
              aria-label="Close testimonial"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <p className="text-lg leading-8 text-foreground/78">"{testimonials[selectedIndex].full}"</p>
            <p className="mt-6 font-heading text-xs uppercase tracking-[0.24em] text-primary">
              {testimonials[selectedIndex].name}
            </p>
            <p className="mt-2 text-xs uppercase tracking-[0.18em] text-muted">
              {testimonials[selectedIndex].title}
            </p>
          </div>
        </div>
      )}

      {expandedPhoto !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          onClick={() => setExpandedPhoto(null)}
        >
          <div
            className="relative w-full max-w-5xl overflow-hidden rounded-[28px] bg-white p-3 shadow-card"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setExpandedPhoto(null)}
              className="absolute right-5 top-5 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/90 text-foreground"
              aria-label="Close photo"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="relative aspect-[16/10] overflow-hidden rounded-[22px]">
              <Image
                src={trustedPhotos[expandedPhoto].src}
                alt={trustedPhotos[expandedPhoto].alt}
                fill
                className="object-cover"
                sizes="90vw"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}