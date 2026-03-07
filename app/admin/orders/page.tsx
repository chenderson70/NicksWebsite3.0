"use client";

import Link from "next/link";

export default function AdminOrdersPage() {
  return (
    <>
      <section className="page-banner">
        <h1 className="font-heading text-5xl uppercase tracking-wider">
          Manage <span className="text-primary">Orders</span>
        </h1>
      </section>

      <section className="py-12">
        <div className="w-[90%] max-w-6xl mx-auto">
          <Link href="/admin" className="text-muted text-sm hover:text-primary mb-8 block">← Dashboard</Link>

          <div className="border border-white/10 rounded-xl overflow-hidden">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-white/10 bg-white/5">
                  <th className="px-6 py-4 text-xs uppercase tracking-wider text-muted">Order ID</th>
                  <th className="px-6 py-4 text-xs uppercase tracking-wider text-muted">Customer</th>
                  <th className="px-6 py-4 text-xs uppercase tracking-wider text-muted">Total</th>
                  <th className="px-6 py-4 text-xs uppercase tracking-wider text-muted">Status</th>
                  <th className="px-6 py-4 text-xs uppercase tracking-wider text-muted">Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-6 py-8 text-center text-muted" colSpan={5}>
                    No orders yet. Orders will appear here after customers purchase through Stripe.
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
