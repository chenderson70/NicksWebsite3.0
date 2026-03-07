import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy | Nick Parks",
};

export default function RefundPolicyPage() {
  return (
    <>
      <section className="page-banner">
        <div className="site-container max-w-3xl">
          <h1 className="section-title">Refund Policy</h1>
        </div>
      </section>
      <section className="pb-20">
        <div className="site-container max-w-3xl surface-card px-6 py-8 md:px-8">
          <div className="prose-dark">
            <h2>Speaking and Coaching Engagements</h2>
            <p>
              Refund and rescheduling terms for speaking, workshop, and coaching
              engagements are handled through the specific service agreement tied to that booking.
            </p>
            <h2>Deposits</h2>
            <p>
              Deposits may be non-refundable once time has been reserved. Exact
              terms will be outlined before any agreement is finalized.
            </p>
            <h2>Questions</h2>
            <p>
              For policy questions related to a booking, contact
              nparks@lonelesswolf.com directly.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

