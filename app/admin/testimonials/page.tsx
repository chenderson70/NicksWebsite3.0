"use client";

import Link from "next/link";
import Button from "@/components/ui/Button";

export default function AdminTestimonialsPage() {
  return (
    <>
      <section className="page-banner">
        <h1 className="font-heading text-5xl uppercase tracking-wider">
          Manage <span className="text-primary">Testimonials</span>
        </h1>
      </section>

      <section className="py-12">
        <div className="w-[90%] max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <Link href="/admin" className="text-muted text-sm hover:text-primary">← Dashboard</Link>
            <Button>+ Add Testimonial</Button>
          </div>

          <div className="border border-white/10 rounded-xl overflow-hidden">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-white/10 bg-white/5">
                  <th className="px-6 py-4 text-xs uppercase tracking-wider text-muted">Author</th>
                  <th className="px-6 py-4 text-xs uppercase tracking-wider text-muted">Company</th>
                  <th className="px-6 py-4 text-xs uppercase tracking-wider text-muted">Featured</th>
                  <th className="px-6 py-4 text-xs uppercase tracking-wider text-muted">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-6 py-8 text-center text-muted" colSpan={4}>
                    Connect database and run seed to populate testimonials.
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
