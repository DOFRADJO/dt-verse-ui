"use client";

import { AuthCard, PricingTable } from "@dtverse/ui";

export default function Page() {
  return (
    <div className="p-10 space-y-10 max-w-5xl mx-auto">
      <AuthCard
        mode="login"
        title="Sign in"
        description="Access your DTVerse dashboard."
        providers={[
          { id: "google", label: "Continue with Google", onClick: () => alert("Google") },
          { id: "github", label: "Continue with GitHub", onClick: () => alert("GitHub"), variant: "outline" },
        ]}
        primaryAction={{ label: "Sign in", onClick: () => alert("Sign in") }}
        footer={
          <div className="flex items-center justify-between">
            <a className="underline" href="#">Create account</a>
            <a className="underline" href="#">Forgot password?</a>
          </div>
        }
      >
        <input className="w-full rounded-md border px-3 py-2" placeholder="Email" />
        <input className="w-full rounded-md border px-3 py-2" placeholder="Password" type="password" />
      </AuthCard>

      <PricingTable
        title="DTVerse UI — Plans"
        subtitle="For open-source today, pro tomorrow."
        plans={[
          {
            id: "free",
            name: "Free",
            description: "For personal projects",
            price: "0",
            period: "",
            features: [
              { label: "Core components" },
              { label: "Basic motion presets" },
              { label: "Community support" },
              { label: "Premium blocks", included: false },
            ],
            cta: { label: "Get started", onClick: () => alert("Free") },
          },
          {
            id: "pro",
            name: "Pro",
            description: "For startups & teams",
            price: "12,000 FCFA",
            period: "/month",
            badge: "Popular",
            highlight: true,
            features: [
              { label: "Everything in Free" },
              { label: "Business blocks pack" },
              { label: "Advanced motion presets" },
              { label: "Priority support", hint: "Email" },
            ],
            cta: { label: "Go Pro", onClick: () => alert("Pro") },
          },
          {
            id: "enterprise",
            name: "Enterprise",
            description: "For companies",
            price: "Custom",
            period: "",
            features: [
              { label: "Everything in Pro" },
              { label: "Design system help" },
              { label: "SLA support" },
              { label: "Private components" },
            ],
            cta: { label: "Contact sales", variant: "secondary", onClick: () => alert("Sales") },
          },
        ]}
      />
    </div>
  );
}