"use client";

import Link from "next/link";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

export default function AdminSettingsPage() {
  return (
    <>
      <section className="page-banner">
        <h1 className="font-heading text-5xl uppercase tracking-wider">
          Site <span className="text-primary">Settings</span>
        </h1>
      </section>

      <section className="py-12">
        <div className="w-[90%] max-w-3xl mx-auto">
          <Link href="/admin" className="text-muted text-sm hover:text-primary mb-8 block">← Dashboard</Link>

          <div className="space-y-8">
            <div className="border border-white/10 rounded-xl p-8">
              <h2 className="font-heading text-xl uppercase tracking-wider mb-6">General</h2>
              <div className="space-y-4">
                <Input label="Site Name" name="siteName" defaultValue="Nick Parks" />
                <Input label="Tagline" name="tagline" defaultValue="Motivational Speaker, Coach & Entrepreneur" />
                <Input label="Contact Email" name="email" defaultValue="nparks@lonelesswolf.com" />
                <Input label="Phone" name="phone" defaultValue="678-468-1604" />
              </div>
            </div>

            <div className="border border-white/10 rounded-xl p-8">
              <h2 className="font-heading text-xl uppercase tracking-wider mb-6">Social Links</h2>
              <div className="space-y-4">
                <Input label="Instagram" name="instagram" placeholder="https://instagram.com/..." />
                <Input label="Facebook" name="facebook" placeholder="https://facebook.com/..." />
                <Input label="Twitter / X" name="twitter" placeholder="https://x.com/..." />
                <Input label="LinkedIn" name="linkedin" placeholder="https://linkedin.com/in/..." />
                <Input label="YouTube" name="youtube" placeholder="https://youtube.com/..." />
              </div>
            </div>

            <div className="border border-white/10 rounded-xl p-8">
              <h2 className="font-heading text-xl uppercase tracking-wider mb-6">Commerce</h2>
              <div className="space-y-4">
                <Input label="Free Shipping Threshold ($)" name="freeShipping" defaultValue="50" />
                <Input label="Tax Rate (%)" name="taxRate" defaultValue="0" />
              </div>
            </div>

            <Button className="w-full md:w-auto">Save Settings</Button>
          </div>
        </div>
      </section>
    </>
  );
}
