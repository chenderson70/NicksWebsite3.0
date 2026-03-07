"use client";

import Link from "next/link";
import Badge from "@/components/ui/Badge";

export default function AdminLeadsPage() {
  return (
    <>
      <section className="page-banner">
        <h1 className="font-heading text-5xl uppercase tracking-wider">
          Booking <span className="text-primary">Leads</span>
        </h1>
      </section>

      <section className="py-12">
        <div className="w-[90%] max-w-6xl mx-auto">
          <Link href="/admin" className="mb-8 block text-sm text-muted hover:text-primary">
            Back to Dashboard
          </Link>

          <div className="mb-6 flex items-center gap-3 rounded-xl border border-primary/12 bg-primary/8 px-5 py-4">
            <Badge variant="primary">Note</Badge>
            <p className="text-sm leading-7 text-muted">
              Leads can be emailed and stored when the site is running with a server-backed deployment.
            </p>
          </div>

          <div className="overflow-hidden rounded-xl border border-white/10">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-white/10 bg-white/5">
                  <th className="px-6 py-4 text-xs uppercase tracking-wider text-muted">Name</th>
                  <th className="px-6 py-4 text-xs uppercase tracking-wider text-muted">Email</th>
                  <th className="px-6 py-4 text-xs uppercase tracking-wider text-muted">Type</th>
                  <th className="px-6 py-4 text-xs uppercase tracking-wider text-muted">Status</th>
                  <th className="px-6 py-4 text-xs uppercase tracking-wider text-muted">Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-6 py-8 text-center text-muted" colSpan={5}>
                    No leads yet. Leads will appear here once server-backed submissions are enabled.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}