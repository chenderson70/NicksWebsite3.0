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
          <Link href="/admin" className="text-muted text-sm hover:text-primary mb-8 block">← Dashboard</Link>

          <div className="border border-white/10 rounded-xl overflow-hidden">
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
                    No leads yet. Leads will appear when visitors submit the contact form.
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
