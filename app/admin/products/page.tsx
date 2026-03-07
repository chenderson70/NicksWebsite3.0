"use client";

import Link from "next/link";
import Button from "@/components/ui/Button";

export default function AdminProductsPage() {
  return (
    <>
      <section className="page-banner">
        <h1 className="font-heading text-5xl uppercase tracking-wider">
          Manage <span className="text-primary">Products</span>
        </h1>
      </section>

      <section className="py-12">
        <div className="w-[90%] max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <Link href="/admin" className="text-muted text-sm hover:text-primary">← Dashboard</Link>
            <Button>+ Add Product</Button>
          </div>

          {/* Products Table */}
          <div className="border border-white/10 rounded-xl overflow-hidden">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-white/10 bg-white/5">
                  <th className="px-6 py-4 text-xs uppercase tracking-wider text-muted">Product</th>
                  <th className="px-6 py-4 text-xs uppercase tracking-wider text-muted">Category</th>
                  <th className="px-6 py-4 text-xs uppercase tracking-wider text-muted">Price</th>
                  <th className="px-6 py-4 text-xs uppercase tracking-wider text-muted">Status</th>
                  <th className="px-6 py-4 text-xs uppercase tracking-wider text-muted">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5">
                  <td className="px-6 py-4 text-sm text-white" colSpan={5}>
                    <span className="text-muted">Connect database to view products. Run `npx prisma db seed` to populate.</span>
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
