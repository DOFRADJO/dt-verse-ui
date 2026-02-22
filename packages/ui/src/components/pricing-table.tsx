import * as React from "react";
import { cn } from "@dtverse/utils";
import { Button, type ButtonProps } from "./button.js";
import { Card } from "./card.js";

export interface PricingFeature {
  label: string;
  included?: boolean; // default true
  hint?: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  description?: string;

  price: string;     // "12,000 FCFA" or "$19"
  period?: string;   // "/month", "/year"
  badge?: string;    // "Popular", "Best value"

  highlight?: boolean; // visually emphasized
  features: PricingFeature[];

  cta: ButtonProps & { label: string };
}

export interface PricingTableProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  subtitle?: string;
  plans: PricingPlan[];
  columns?: 1 | 2 | 3 | 4;
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" className="h-4 w-4">
      <path
        fill="currentColor"
        d="M7.7 13.6 4.4 10.3a1 1 0 0 1 1.4-1.4l1.9 1.9 6-6a1 1 0 1 1 1.4 1.4l-6.7 6.7a1 1 0 0 1-1.4 0Z"
      />
    </svg>
  );
}

function MinusIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" className="h-4 w-4">
      <path fill="currentColor" d="M4 10a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Z" />
    </svg>
  );
}

export function PricingTable({
  title = "Pricing",
  subtitle = "Choose a plan that fits your needs.",
  plans,
  columns,
  className,
  ...props
}: PricingTableProps) {
  const cols = columns ?? (plans.length >= 3 ? 3 : (plans.length as 1 | 2 | 3 | 4));

  return (
    <div className={cn("w-full", className)} {...props}>
      <div className="mb-6 text-center">
        <h2 className="text-2xl font-semibold">{title}</h2>
        {subtitle ? <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{subtitle}</p> : null}
      </div>

      <div
        className={cn(
          "grid gap-4",
          cols === 1 && "grid-cols-1",
          cols === 2 && "grid-cols-1 md:grid-cols-2",
          cols === 3 && "grid-cols-1 md:grid-cols-3",
          cols === 4 && "grid-cols-1 md:grid-cols-2 xl:grid-cols-4"
        )}
      >
        {plans.map((p) => (
          <Card
            key={p.id}
            className={cn(
              "relative p-6",
              p.highlight && "ring-2 ring-black dark:ring-white"
            )}
          >
            {p.badge ? (
              <div className="absolute right-4 top-4 rounded-full bg-black px-3 py-1 text-xs font-medium text-white dark:bg-white dark:text-black">
                {p.badge}
              </div>
            ) : null}

            <div className="space-y-1">
              <h3 className="text-lg font-semibold">{p.name}</h3>
              {p.description ? (
                <p className="text-sm text-zinc-600 dark:text-zinc-400">{p.description}</p>
              ) : null}
            </div>

            <div className="mt-4 flex items-end gap-1">
              <div className="text-3xl font-semibold leading-none">{p.price}</div>
              {p.period ? <div className="pb-0.5 text-sm text-zinc-500">{p.period}</div> : null}
            </div>

            <div className="mt-4">
              <Button className="w-full" {...p.cta}>
                {p.cta.label}
              </Button>
            </div>

            <ul className="mt-5 space-y-3 text-sm">
              {p.features.map((f, idx) => {
                const ok = f.included !== false;
                return (
                  <li key={idx} className="flex gap-3">
                    <span
                      className={cn(
                        "mt-0.5",
                        ok ? "text-black dark:text-white" : "text-zinc-400"
                      )}
                    >
                      {ok ? <CheckIcon /> : <MinusIcon />}
                    </span>
                    <span className={cn(ok ? "" : "text-zinc-500 line-through")}>
                      {f.label}
                      {f.hint ? (
                        <span className="ml-2 text-xs text-zinc-500">({f.hint})</span>
                      ) : null}
                    </span>
                  </li>
                );
              })}
            </ul>
          </Card>
        ))}
      </div>
    </div>
  );
}