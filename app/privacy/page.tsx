import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Nick Parks",
};

export default function PrivacyPage() {
  return (
    <>
      <section className="page-banner">
        <div className="site-container max-w-3xl">
          <h1 className="section-title">Privacy Policy</h1>
        </div>
      </section>
      <section className="pb-20">
        <div className="site-container max-w-3xl surface-card px-6 py-8 md:px-8">
          <div className="prose-dark">
            <h2>Information We Collect</h2>
            <p>
              We collect information you choose to share, such as your name,
              email address, organization details, and message when you contact
              us about speaking, coaching, or partnership opportunities.
            </p>
            <h2>How We Use Information</h2>
            <p>
              That information is used to respond to inquiries, discuss bookings,
              improve communication, and understand how people interact with the site.
            </p>
            <h2>Third-Party Services</h2>
            <p>
              We may use email, analytics, and hosting providers that process
              information on our behalf. Those providers operate under their own policies.
            </p>
            <h2>Your Rights</h2>
            <p>
              If you want to request access, correction, or deletion of personal
              information you have shared, contact nparks@lonelesswolf.com.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

