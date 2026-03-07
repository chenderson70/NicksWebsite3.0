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
    <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="surface-card px-6 py-8 md:px-8">
        <p className="section-eyebrow">Contact</p>
        <h2 className="mt-4 font-heading text-3xl uppercase tracking-[-0.04em] text-foreground md:text-5xl">
          Start the conversation with context, not guesswork.
        </h2>
        <p className="mt-5 text-base leading-8 text-muted">
          Share the audience, the moment, and the kind of outcome you want. The
          more specific the context, the better the fit can be shaped.
        </p>
        <div className="mt-8 space-y-4 text-sm leading-7 text-muted">
          <p>Email: {SITE.email}</p>
          <p>Phone: {SITE.phone}</p>
          <p>Based in {SITE.location}</p>
        </div>
        <div className="my-8 soft-rule" />
        <div className="space-y-4 text-sm leading-7 text-muted">
          <p>Best for keynote speaking, workshops, team development, and strategic mentorship.</p>
          <p>If you already have event details, include the date, city, audience size, and primary goal.</p>
          <p>Submitting the form will open your email client with the details prefilled.</p>
        </div>
      </div>

      <div className="surface-card px-6 py-8 md:px-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
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

          <div className="grid gap-6 md:grid-cols-2">
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
            placeholder="Tell us about the audience, goals, timeline, and what kind of impact you need."
            rows={7}
          />

          {status === "ready" ? (
            <p className="text-sm leading-7 text-muted">
              Your email client should open with the message prefilled. If it does not,
              email {SITE.email} directly.
            </p>
          ) : null}

          <Button type="submit">Send Inquiry</Button>
        </form>
      </div>
    </div>
  );
}


