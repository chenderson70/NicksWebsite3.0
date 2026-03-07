import { LeadType } from "@prisma/client";
import { NextResponse } from "next/server";
import { z } from "zod";
import { SITE } from "@/lib/constants";
import { db } from "@/lib/db";

const inquiryTypes = [
  "Keynote speaking",
  "Team workshop",
  "Coaching or mentorship",
  "Leadership training",
  "General inquiry",
] as const;

const inquirySchema = z.object({
  name: z.string().trim().min(1, "Full name is required."),
  email: z.string().trim().email("A valid email is required."),
  organization: z.string().trim().optional().default(""),
  type: z.enum(inquiryTypes),
  eventDate: z.string().trim().optional().default(""),
  message: z.string().trim().min(1, "A message is required."),
});

type Inquiry = z.infer<typeof inquirySchema>;

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function mapLeadType(type: Inquiry["type"]): LeadType {
  if (type === "Keynote speaking" || type === "Team workshop") {
    return LeadType.SPEAKING;
  }

  if (type === "Coaching or mentorship") {
    return LeadType.COACHING;
  }

  return LeadType.CONTACT;
}

function buildMailtoHref(inquiry: Inquiry, targetEmail: string) {
  const subject = encodeURIComponent(`Inquiry for Nick Parks: ${inquiry.type}`);
  const body = encodeURIComponent(
    [
      `Name: ${inquiry.name}`,
      `Email: ${inquiry.email}`,
      `Organization: ${inquiry.organization || "Not provided"}`,
      `Inquiry Type: ${inquiry.type}`,
      `Preferred Date: ${inquiry.eventDate || "Not provided"}`,
      "",
      inquiry.message,
    ].join("\n")
  );

  return `mailto:${targetEmail}?subject=${subject}&body=${body}`;
}

function buildTextEmail(inquiry: Inquiry) {
  return [
    "New Loneless Wolf booking inquiry",
    "",
    `Name: ${inquiry.name}`,
    `Email: ${inquiry.email}`,
    `Organization: ${inquiry.organization || "Not provided"}`,
    `Inquiry Type: ${inquiry.type}`,
    `Preferred Date: ${inquiry.eventDate || "Not provided"}`,
    "",
    "Message:",
    inquiry.message,
  ].join("\n");
}

function buildHtmlEmail(inquiry: Inquiry) {
  const fields = [
    ["Name", inquiry.name],
    ["Email", inquiry.email],
    ["Organization", inquiry.organization || "Not provided"],
    ["Inquiry Type", inquiry.type],
    ["Preferred Date", inquiry.eventDate || "Not provided"],
  ] as const;

  const fieldRows = fields
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding:10px 12px;border-bottom:1px solid #e6ebe7;font-weight:700;color:#101311;width:180px;vertical-align:top;">${escapeHtml(label)}</td>
          <td style="padding:10px 12px;border-bottom:1px solid #e6ebe7;color:#304038;">${escapeHtml(value)}</td>
        </tr>`
    )
    .join("");

  return `
    <div style="background:#f4f0e8;padding:32px 16px;font-family:Arial,sans-serif;color:#101311;">
      <div style="max-width:760px;margin:0 auto;background:#ffffff;border-radius:24px;border:1px solid rgba(16,19,17,0.1);overflow:hidden;box-shadow:0 24px 60px -36px rgba(15,24,21,0.28);">
        <div style="padding:24px 28px;background:linear-gradient(135deg,#0f1713 0%,#17352d 100%);color:#ffffff;">
          <p style="margin:0 0 10px;font-size:12px;letter-spacing:0.32em;text-transform:uppercase;color:rgba(255,255,255,0.68);">Loneless Wolf</p>
          <h1 style="margin:0;font-size:30px;line-height:1.1;text-transform:uppercase;">New booking inquiry</h1>
          <p style="margin:14px 0 0;font-size:16px;line-height:1.7;color:rgba(255,255,255,0.82);">A new contact form submission came in from the website.</p>
        </div>
        <div style="padding:24px 28px;">
          <table style="width:100%;border-collapse:collapse;border-spacing:0;">
            <tbody>${fieldRows}
            </tbody>
          </table>
          <div style="margin-top:22px;padding:18px 20px;border-radius:20px;background:#f7faf8;border:1px solid #e6ebe7;">
            <p style="margin:0 0 10px;font-size:12px;letter-spacing:0.24em;text-transform:uppercase;color:#1e6450;font-weight:700;">Message</p>
            <p style="margin:0;font-size:16px;line-height:1.8;color:#304038;white-space:pre-wrap;">${escapeHtml(inquiry.message)}</p>
          </div>
        </div>
      </div>
    </div>`;
}

async function saveLead(inquiry: Inquiry) {
  if (!db) {
    return false;
  }

  try {
    await db.lead.create({
      data: {
        type: mapLeadType(inquiry.type),
        payload: JSON.stringify({
          ...inquiry,
          submittedAt: new Date().toISOString(),
        }),
      },
    });

    return true;
  } catch (error) {
    console.error("Failed to save lead", error);
    return false;
  }
}

async function sendBookingEmail(inquiry: Inquiry, targetEmail: string) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.EMAIL_FROM;

  if (!apiKey || !from) {
    return {
      sent: false as const,
      reason: "config" as const,
    };
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "Idempotency-Key": crypto.randomUUID(),
      },
      body: JSON.stringify({
        from,
        to: [targetEmail],
        reply_to: inquiry.email,
        subject: `New booking inquiry: ${inquiry.type} - ${inquiry.name}`,
        html: buildHtmlEmail(inquiry),
        text: buildTextEmail(inquiry),
      }),
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.error("Resend send failed", errorBody);
      return {
        sent: false as const,
        reason: "delivery" as const,
      };
    }

    return {
      sent: true as const,
    };
  } catch (error) {
    console.error("Resend request failed", error);
    return {
      sent: false as const,
      reason: "delivery" as const,
    };
  }
}

export async function POST(request: Request) {
  const targetEmail = process.env.BOOKING_EMAIL_TO || SITE.email;

  try {
    const rawBody = await request.json();
    const parsed = inquirySchema.safeParse(rawBody);

    if (!parsed.success) {
      return NextResponse.json(
        {
          message: parsed.error.issues[0]?.message || "Invalid inquiry payload.",
        },
        { status: 400 }
      );
    }

    const inquiry = parsed.data;
    const fallbackMailto = buildMailtoHref(inquiry, targetEmail);

    const [leadSaved, emailResult] = await Promise.all([
      saveLead(inquiry),
      sendBookingEmail(inquiry, targetEmail),
    ]);

    if (emailResult.sent) {
      return NextResponse.json({
        message: `Your inquiry was sent to ${targetEmail}.`,
        leadSaved,
      });
    }

    return NextResponse.json(
      {
        message:
          emailResult.reason === "config"
            ? "Automatic email delivery is not configured yet. Your email app will open with the inquiry prefilled instead."
            : "Automatic email delivery was unavailable. Your email app will open with the inquiry prefilled instead.",
        fallbackMailto,
        leadSaved,
      },
      { status: 202 }
    );
  } catch (error) {
    console.error("Contact submission failed", error);

    return NextResponse.json(
      {
        message: "Something went wrong while sending the inquiry.",
      },
      { status: 500 }
    );
  }
}
