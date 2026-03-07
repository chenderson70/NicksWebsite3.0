"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import { SITE } from "@/lib/constants";

const inquiryTypes = [
  "Keynote speaking",
  "Team workshop",
  "Coaching or mentorship",
  "Leadership training",
  "General inquiry",
] as const;

type InquiryType = (typeof inquiryTypes)[number];

export default function ContactExperience() {
  const searchParams = useSearchParams();
  const [form, setForm] = useState<{
    name: string;
    email: string;
    organization: string;
    type: InquiryType;
    eventDate: string;
    message: string;
  }>({
    name: "",
    email: "",
    organization: "",
    type: inquiryTypes[0],
    eventDate: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "ready">("idle");

  useEffect(() => {
    const requestedType = searchParams.get("type");
    const matchedType = inquiryTypes.find((option) => option === requestedType);

    if (matchedType) {
      setForm((current) =>
        current.type === matchedType ? current : { ...current, type: matchedType }
      );
    }
  }, [searchParams]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const subject = encodeURIComponent(`Inquiry for Nick Parks: ${form.type}`);
    const body = encodeURIComponent(
      [
        `Name: ${form.name}`,
        `Email: ${form.email}`,
        `Organization: ${form.organization || "Not provided"}`,
        `Inquiry Type: ${form.type}`,
        `Preferred Date: ${form.eventDate || "Not provided"}`,
        "",
        form.message,
      ].join("\n")
    );

    setStatus("ready");
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="surface-panel overflow-hidden lg:min-h-[72vh]">
      <div className="grid items-start gap-0 lg:grid-cols-[0.68fr_1.32fr] xl:grid-cols-[0.64fr_1.36fr]">
        <div className="px-6 py-7 md:px-8 md:py-8 lg:px-10 lg:py-10">
          <p className="section-eyebrow">Contact Sheet</p>
          <h2 className="mt-4 font-heading text-3xl uppercase tracking-[-0.04em] text-foreground md:text-5xl">
            Start with the room, the audience, and the outcome.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-8 text-muted">
            Share the core details up front so the Loneless Wolf message can be shaped to the right room,
            the right pressure point, and the right result.
          </p>

          <div className="mt-8 space-y-4 text-sm leading-7 text-muted">
            <p>
              <span className="font-heading uppercase tracking-[0.22em] text-foreground">Email</span>
              <span className="ml-3">{SITE.email}</span>
            </p>
            <p>
              <span className="font-heading uppercase tracking-[0.22em] text-foreground">Phone</span>
              <span className="ml-3">{SITE.phone}</span>
            </p>
            <p>
              <span className="font-heading uppercase tracking-[0.22em] text-foreground">Based In</span>
              <span className="ml-3">{SITE.location}</span>
            </p>
          </div>

          <div className="my-7 soft-rule" />

          <div className="space-y-3 text-sm leading-7 text-muted">
            <p>Best for keynote speaking, workshops, team development, and strategic mentorship.</p>
            <p>Include the date, city, audience size, and primary goal when you can.</p>
            <p>Submitting the form opens your email client with the full brief prefilled.</p>
          </div>
        </div>

        <div className="accent-wash border-t border-card-border px-6 py-7 md:px-8 md:py-8 lg:border-l lg:border-t-0 lg:px-10 lg:py-10">
          <div className="max-w-3xl">
            <p className="section-eyebrow">Booking Form</p>
            <h3 className="mt-4 font-heading text-3xl uppercase tracking-[-0.04em] text-foreground md:text-4xl">
              Send the brief.
            </h3>
            <p className="mt-4 text-base leading-8 text-muted">
              This form is built for fast screening. Give the basics, the timing, and the objective so the next step can be clear.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div className="grid gap-5 md:grid-cols-2">
              <Input
                label="Full Name"
                name="name"
                required
                value={form.name}
                onChange={(event) => setForm({ ...form, name: event.target.value })}
                placeholder="Your full name"
              />
              <Input
                label="Email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={(event) => setForm({ ...form, email: event.target.value })}
                placeholder="you@example.com"
              />
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <Input
                label="Organization"
                name="organization"
                value={form.organization}
                onChange={(event) =>
                  setForm({ ...form, organization: event.target.value })
                }
                placeholder="Company, school, or team"
              />
              <div>
                <label htmlFor="type" className="label-dark">
                  Inquiry Type
                </label>
                <select
                  id="type"
                  name="type"
                  value={form.type}
                  onChange={(event) => setForm({ ...form, type: event.target.value as InquiryType })}
                  className="input-dark"
                >
                  {inquiryTypes.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <Input
              label="Preferred Date"
              name="eventDate"
              type="date"
              value={form.eventDate}
              onChange={(event) => setForm({ ...form, eventDate: event.target.value })}
            />

            <Textarea
              label="Message"
              name="message"
              required
              value={form.message}
              onChange={(event) => setForm({ ...form, message: event.target.value })}
              placeholder="Tell us about the audience, goals, timeline, and the kind of impact you need."
              rows={8}
            />

            <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
              {status === "ready" ? (
                <p className="text-sm leading-7 text-muted sm:max-w-xl">
                  Your email client should open with the message prefilled. If it does not, email {SITE.email} directly.
                </p>
              ) : (
                <p className="text-sm leading-7 text-muted sm:max-w-xl">
                  For the fastest reply, include the event date, city, audience size, and the result you want from the room.
                </p>
              )}

              <Button type="submit" className="w-full sm:min-w-[220px] sm:w-auto">
                Send Inquiry
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}