import type { Meta, StoryObj } from "@storybook/react-vite";
import { PricingTable } from "@dtverse/ui";

const meta: Meta<typeof PricingTable> = {
  title: "DTVerse/Blocks/PricingTable",
  component: PricingTable,
};

export default meta;
type Story = StoryObj<typeof PricingTable>;

export const Default: Story = {
  args: {
    title: "DTVerse UI — Plans",
    subtitle: "Open-source today, pro tomorrow.",
    plans: [
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
    ],
  },
};

export const TwoPlans: Story = {
  args: {
    title: "Simple pricing",
    subtitle: "Two-plan layout for landing pages.",
    plans: [
      {
        id: "starter",
        name: "Starter",
        description: "Launch fast",
        price: "$19",
        period: "/month",
        features: [{ label: "Core components" }, { label: "Basic support" }],
        cta: { label: "Start", onClick: () => alert("Starter") },
      },
      {
        id: "team",
        name: "Team",
        description: "For teams",
        price: "$49",
        period: "/month",
        badge: "Best value",
        highlight: true,
        features: [
          { label: "Everything in Starter" },
          { label: "Team collaboration" },
          { label: "Priority support" },
        ],
        cta: { label: "Choose Team", onClick: () => alert("Team") },
      },
    ],
  },
};