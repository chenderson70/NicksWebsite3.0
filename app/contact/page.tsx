import type { Metadata } from "next";
import { Suspense } from "react";
import ContactExperience from "@/components/contact/ContactExperience";
import ScrollReveal from "@/components/site/ScrollReveal";
import SectionHeading from "@/components/site/SectionHeading";

export const metadata: Metadata = {
  title: "Contact | Nick Parks",
  description:
    "Contact Nick Parks and the Loneless Wolf brand for speaking, coaching, workshops, and development opportunities.",
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="contact-shell">
          <SectionHeading
            eyebrow="Contact"
            title={<>Bring clarity to the room before the event starts.</>}
            description="Share the audience, the objective, and what the moment requires so the conversation starts with real context."
          />
        </div>
      </section>

      <section className="section-space pt-2 md:pt-4">
        <div className="contact-shell">
          <ScrollReveal>
            <Suspense
              fallback={
                <div className="surface-panel px-6 py-8 text-sm leading-7 text-muted">
                  Loading contact sheet...
                </div>
              }
            >
              <ContactExperience />
            </Suspense>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}