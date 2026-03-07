"use client";

import Link from "next/link";

const adminLinks = [
  { label: "Dashboard", href: "/admin", icon: "📊", desc: "Overview and analytics" },
  { label: "Products", href: "/admin/products", icon: "🛍️", desc: "Manage products and inventory" },
  { label: "Orders", href: "/admin/orders", icon: "📦", desc: "View and manage orders" },
  { label: "Blog Posts", href: "/admin/blog", icon: "📝", desc: "Create and edit blog posts" },
  { label: "Leads", href: "/admin/leads", icon: "📋", desc: "Booking and contact inquiries" },
  { label: "Testimonials", href: "/admin/testimonials", icon: "💬", desc: "Manage testimonials" },
  { label: "Settings", href: "/admin/settings", icon: "⚙️", desc: "Site configuration" },
];

export default function AdminDashboard() {
  return (
    <>
      <section className="page-banner">
        <h1 className="font-heading text-5xl md:text-7xl uppercase tracking-wider">
          Admin <span className="text-primary">Dashboard</span>
        </h1>
      </section>

      <section className="py-16">
        <div className="w-[90%] max-w-6xl mx-auto">
          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { label: "Total Orders", value: "—", color: "text-primary" },
              { label: "Revenue", value: "—", color: "text-green-400" },
              { label: "Leads", value: "—", color: "text-yellow-400" },
              { label: "Subscribers", value: "—", color: "text-blue-400" },
            ].map((stat) => (
              <div key={stat.label} className="border border-white/10 rounded-xl p-6 text-center">
                <p className={`font-heading text-3xl ${stat.color}`}>{stat.value}</p>
                <p className="text-muted text-xs uppercase tracking-wider mt-1">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {adminLinks.slice(1).map((link) => (
              <Link key={link.href} href={link.href}>
                <div className="border border-white/10 rounded-xl p-8 hover:border-primary/50 transition-colors h-full">
                  <span className="text-3xl mb-4 block">{link.icon}</span>
                  <h3 className="font-heading text-lg uppercase tracking-wider text-white mb-2">
                    {link.label}
                  </h3>
                  <p className="text-muted text-sm">{link.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
