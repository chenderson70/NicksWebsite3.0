import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Nick Parks",
};

export default function TermsPage() {
  return (
    <>
      <section className="page-banner">
        <div className="site-container max-w-3xl">
          <h1 className="section-title">Terms of Service</h1>
        </div>
      </section>
      <section className="pb-20">
        <div className="site-container max-w-3xl surface-card px-6 py-8 md:px-8">
          <div className="prose-dark">
            <h2>Use of This Site</h2>
            <p>
              By using this website, you agree to use it lawfully and in a way
              that does not interfere with the site's operation or the experience of others.
            </p>
            <h2>Content Ownership</h2>
            <p>
              Unless otherwise noted, content on this site belongs to Nick Parks
              and may not be reused or redistributed without permission.
            </p>
            <h2>Services and Bookings</h2>
            <p>
              Speaking, coaching, and related services are subject to availability
              and may require separate agreements for scope, pricing, and scheduling.
            </p>
            <h2>Liability</h2>
            <p>
              This website is provided as-is. While we aim to keep information
              current and accurate, we do not guarantee uninterrupted access or completeness.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

