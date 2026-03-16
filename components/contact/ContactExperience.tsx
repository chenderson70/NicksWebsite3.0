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

type SubmissionStatus = "idle" | "submitting" | "success" | "error" | "fallback";

type InquiryForm = {
  name: string;
  email: string;
  organization: string;
  type: InquiryType;
  eventDate: string;
  message: string;
};

const initialForm: InquiryForm = {
  name: "",
  email: "",
  organization: "",
  type: inquiryTypes[0],
  eventDate: "",
  message: "",
};

function buildMailtoHref(form: InquiryForm) {
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

  return `mailto:${SITE.email}?subject=${subject}&body=${body}`;
}

export default function ContactExperience() {
  const searchParams = useSearchParams();
  const [form, setForm] = useState<InquiryForm>(initialForm);
  const [status, setStatus] = useState<SubmissionStatus>("idle");
  const [feedback, setFeedback] = useState<string | null>(null);
  const [fallbackMailto, setFallbackMailto] = useState<string | null>(null);

  useEffect(() => {
    const requestedType = searchParams.get("type");
    const matchedType = inquiryTypes.find((option) => option === requestedType);

    if (matchedType) {
      setForm((current) =>
        current.type === matchedType ? current : { ...current, type: matchedType }
      );
    }
  }, [searchParams]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setStatus("submitting");
    setFeedback(null);
    setFallbackMailto(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const result = (await response.json().catch(() => null)) as
        | { message?: string; fallbackMailto?: string }
        | null;



      if (response.status === 202 && result?.fallbackMailto) {
        setStatus("fallback");
        setFallbackMailto(result.fallbackMailto);
        setFeedback(
          result.message ||
            `Automatic delivery is unavailable right now. Use the email fallback below to send this inquiry to ${SITE.email}.`
        );
        return;
      }

      if (response.ok) {
        setStatus("success");
        setFeedback(result?.message || `Your inquiry was sent to ${SITE.email}.`);
        setFallbackMailto(null);
        setForm(initialForm);
        return;
      }



      throw new Error(result?.message || "Unable to send the inquiry right now.");
    } catch (error) {
      console.error("Contact submit fallback", error);
      setStatus("fallback");
      setFallbackMailto(buildMailtoHref(form));
      setFeedback(
        `Automatic delivery was unavailable. Use the email fallback below, or email ${SITE.email} directly.`
      );
    }
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
            <p>When email delivery is configured, the form sends directly to your inbox. If not, the form offers a prefilled fallback email link instead.</p>
          </div>
        </div>

        <div className="accent-wash border-t border-card-border px-6 py-7 md:px-8 md:py-8 lg:border-l lg:border-t-0 lg:px-10 lg:py-10">
          <div className="max-w-3xl">
            <p className="section-eyebrow">Booking Form</p>
            <h3 className="mt-4 font-heading text-3xl uppercase tracking-[-0.04em] text-foreground md:text-4xl">
              Let's build something meaningful.
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
              <p
                className={`text-sm leading-7 sm:max-w-xl ${
                  status === "error"
                    ? "text-red-600"
                    : status === "success"
                      ? "text-primary"
                      : status === "fallback"
                        ? "text-amber-700"
                      : "text-muted"
                }`}
              >
                {feedback ||
                  "For the fastest reply, include the event date, city, audience size, and the result you want from the room."}
              </p>

              <Button
                type="submit"
                isLoading={status === "submitting"}
                className="w-full sm:min-w-[220px] sm:w-auto"
              >
                Send Inquiry
              </Button>
            </div>

            {fallbackMailto ? (
              <div className="rounded-[1.5rem] border border-amber-300/80 bg-amber-50 px-5 py-4 text-sm leading-7 text-amber-900">
                <p>
                  Resend is not configured or the delivery request failed, so the form could not send server-side.
                  Use the link below if you want to send the prefilled email manually.
                </p>
                <a
                  href={fallbackMailto}
                  className="mt-3 inline-flex items-center text-sm font-semibold uppercase tracking-[0.18em] text-amber-900 underline decoration-amber-500 underline-offset-4 transition hover:text-amber-700"
                >
                  Open email fallback
                </a>
              </div>
            ) : null}
          </form>
        </div>
      </div>
    </div>
  );
}