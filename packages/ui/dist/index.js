// src/components/button.tsx
import * as React from "react";
import { cn } from "@dtverse/utils";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { jsx, jsxs } from "react/jsx-runtime";
var buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap",
    "rounded-md text-sm font-medium transition-[transform,box-shadow,background-color,color,border-color,opacity]",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    "disabled:pointer-events-none disabled:opacity-50",
    "active:scale-[0.98]"
  ].join(" "),
  {
    variants: {
      variant: {
        primary: "bg-black text-white hover:opacity-90 focus-visible:ring-black",
        secondary: "bg-zinc-100 text-zinc-900 hover:bg-zinc-200 focus-visible:ring-zinc-400",
        outline: "border border-zinc-200 bg-transparent hover:bg-zinc-50 focus-visible:ring-zinc-400",
        ghost: "bg-transparent hover:bg-zinc-100 focus-visible:ring-zinc-400",
        destructive: "bg-red-600 text-white hover:opacity-90 focus-visible:ring-red-600"
      },
      size: {
        sm: "h-8 px-3",
        md: "h-10 px-4",
        lg: "h-12 px-5 text-base",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "md"
    }
  }
);
var Button = React.forwardRef(
  ({
    className,
    variant,
    size,
    asChild,
    isLoading,
    leftIcon,
    rightIcon,
    disabled,
    children,
    ...props
  }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsxs(
      Comp,
      {
        ref,
        className: cn(buttonVariants({ variant, size }), className),
        disabled: disabled || isLoading,
        "aria-busy": isLoading ? true : void 0,
        ...props,
        children: [
          isLoading ? /* @__PURE__ */ jsx(
            "span",
            {
              "aria-hidden": "true",
              className: "h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"
            }
          ) : leftIcon,
          /* @__PURE__ */ jsx("span", { className: "inline-flex items-center", children }),
          rightIcon ? /* @__PURE__ */ jsx("span", { className: "inline-flex", children: rightIcon }) : null
        ]
      }
    );
  }
);
Button.displayName = "Button";

// src/components/card.tsx
import "react";
import { cn as cn2 } from "@dtverse/utils";
import { jsx as jsx2 } from "react/jsx-runtime";
function Card({ className, ...props }) {
  return /* @__PURE__ */ jsx2(
    "div",
    {
      className: cn2(
        "rounded-xl border border-zinc-200 bg-white p-4 shadow-sm",
        "dark:border-zinc-800 dark:bg-zinc-950",
        className
      ),
      ...props
    }
  );
}
function CardHeader({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx2("div", { className: cn2("mb-3 space-y-1", className), ...props });
}
function CardTitle({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx2("h3", { className: cn2("text-base font-semibold leading-none", className), ...props });
}
function CardDescription({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx2(
    "p",
    {
      className: cn2("text-sm text-zinc-600 dark:text-zinc-400", className),
      ...props
    }
  );
}
function CardContent({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx2("div", { className: cn2("mt-3", className), ...props });
}

// src/components/empty-state.tsx
import "react";
import { cn as cn3 } from "@dtverse/utils";
import { jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
var toneClasses = {
  neutral: "bg-zinc-50 border-zinc-200 dark:bg-zinc-900/40 dark:border-zinc-800",
  info: "bg-blue-50 border-blue-200 dark:bg-blue-950/30 dark:border-blue-900/50",
  success: "bg-emerald-50 border-emerald-200 dark:bg-emerald-950/25 dark:border-emerald-900/50",
  warning: "bg-amber-50 border-amber-200 dark:bg-amber-950/25 dark:border-amber-900/50",
  danger: "bg-red-50 border-red-200 dark:bg-red-950/25 dark:border-red-900/50"
};
function EmptyState({
  title,
  description,
  icon,
  tone = "neutral",
  primaryAction,
  secondaryAction,
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxs2(
    "div",
    {
      className: cn3(
        "rounded-xl border p-6 text-center",
        "flex flex-col items-center gap-3",
        toneClasses[tone],
        className
      ),
      ...props,
      children: [
        icon ? /* @__PURE__ */ jsx3("div", { className: "grid h-12 w-12 place-items-center rounded-full bg-white/70 ring-1 ring-black/5 dark:bg-zinc-950/50 dark:ring-white/10", children: icon }) : null,
        /* @__PURE__ */ jsxs2("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsx3("h3", { className: "text-base font-semibold", children: title }),
          description ? /* @__PURE__ */ jsx3("p", { className: "text-sm text-zinc-600 dark:text-zinc-400 max-w-md", children: description }) : null
        ] }),
        (primaryAction || secondaryAction) && /* @__PURE__ */ jsxs2("div", { className: "mt-2 flex flex-wrap items-center justify-center gap-2", children: [
          primaryAction ? /* @__PURE__ */ jsx3(Button, { ...primaryAction, children: primaryAction.label }) : null,
          secondaryAction ? /* @__PURE__ */ jsx3(Button, { variant: "secondary", ...secondaryAction, children: secondaryAction.label }) : null
        ] })
      ]
    }
  );
}

// src/components/auth-card.tsx
import "react";
import { cn as cn4 } from "@dtverse/utils";
import { jsx as jsx4, jsxs as jsxs3 } from "react/jsx-runtime";
var defaultCopy = {
  login: { title: "Welcome back", description: "Sign in to continue.", primary: "Sign in" },
  register: { title: "Create your account", description: "Start building in minutes.", primary: "Create account" },
  forgot: { title: "Reset password", description: "We\u2019ll send you a reset link.", primary: "Send reset link" }
};
function AuthCard({
  mode = "login",
  brand,
  title,
  description,
  providers,
  children,
  primaryAction,
  secondaryAction,
  footer,
  className,
  ...props
}) {
  const copy = defaultCopy[mode];
  return /* @__PURE__ */ jsx4("div", { className: cn4("w-full max-w-md", className), ...props, children: /* @__PURE__ */ jsx4(Card, { className: "p-0 overflow-hidden", children: /* @__PURE__ */ jsxs3("div", { className: "p-6", children: [
    /* @__PURE__ */ jsxs3(CardHeader, { className: "mb-4", children: [
      brand ? /* @__PURE__ */ jsx4("div", { className: "mb-3", children: brand }) : null,
      /* @__PURE__ */ jsx4(CardTitle, { className: "text-xl", children: title ?? copy.title }),
      /* @__PURE__ */ jsx4(CardDescription, { children: description ?? copy.description })
    ] }),
    providers?.length ? /* @__PURE__ */ jsx4("div", { className: "space-y-2", children: providers.map((p) => /* @__PURE__ */ jsx4(
      Button,
      {
        variant: p.variant ?? "outline",
        className: "w-full justify-center",
        onClick: p.onClick,
        leftIcon: p.leftIcon,
        type: "button",
        children: p.label
      },
      p.id
    )) }) : null,
    providers?.length ? /* @__PURE__ */ jsxs3("div", { className: "my-4 flex items-center gap-3", children: [
      /* @__PURE__ */ jsx4("div", { className: "h-px flex-1 bg-zinc-200 dark:bg-zinc-800" }),
      /* @__PURE__ */ jsx4("span", { className: "text-xs text-zinc-500", children: "OR" }),
      /* @__PURE__ */ jsx4("div", { className: "h-px flex-1 bg-zinc-200 dark:bg-zinc-800" })
    ] }) : null,
    /* @__PURE__ */ jsxs3(CardContent, { className: "mt-0 p-0", children: [
      children ? /* @__PURE__ */ jsx4("div", { className: "space-y-3", children }) : null,
      /* @__PURE__ */ jsxs3("div", { className: "mt-4 space-y-2", children: [
        primaryAction ? /* @__PURE__ */ jsx4(Button, { className: "w-full", ...primaryAction, children: primaryAction.label }) : /* @__PURE__ */ jsx4(Button, { className: "w-full", type: "button", children: copy.primary }),
        secondaryAction ? /* @__PURE__ */ jsx4(Button, { className: "w-full", variant: "secondary", ...secondaryAction, children: secondaryAction.label }) : null
      ] }),
      footer ? /* @__PURE__ */ jsx4("div", { className: "mt-4 text-sm text-zinc-600 dark:text-zinc-400", children: footer }) : null
    ] })
  ] }) }) });
}

// src/components/pricing-table.tsx
import "react";
import { cn as cn5 } from "@dtverse/utils";
import { jsx as jsx5, jsxs as jsxs4 } from "react/jsx-runtime";
function CheckIcon() {
  return /* @__PURE__ */ jsx5("svg", { viewBox: "0 0 20 20", "aria-hidden": "true", className: "h-4 w-4", children: /* @__PURE__ */ jsx5(
    "path",
    {
      fill: "currentColor",
      d: "M7.7 13.6 4.4 10.3a1 1 0 0 1 1.4-1.4l1.9 1.9 6-6a1 1 0 1 1 1.4 1.4l-6.7 6.7a1 1 0 0 1-1.4 0Z"
    }
  ) });
}
function MinusIcon() {
  return /* @__PURE__ */ jsx5("svg", { viewBox: "0 0 20 20", "aria-hidden": "true", className: "h-4 w-4", children: /* @__PURE__ */ jsx5("path", { fill: "currentColor", d: "M4 10a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Z" }) });
}
function PricingTable({
  title = "Pricing",
  subtitle = "Choose a plan that fits your needs.",
  plans,
  columns,
  className,
  ...props
}) {
  const cols = columns ?? (plans.length >= 3 ? 3 : plans.length);
  return /* @__PURE__ */ jsxs4("div", { className: cn5("w-full", className), ...props, children: [
    /* @__PURE__ */ jsxs4("div", { className: "mb-6 text-center", children: [
      /* @__PURE__ */ jsx5("h2", { className: "text-2xl font-semibold", children: title }),
      subtitle ? /* @__PURE__ */ jsx5("p", { className: "mt-1 text-sm text-zinc-600 dark:text-zinc-400", children: subtitle }) : null
    ] }),
    /* @__PURE__ */ jsx5(
      "div",
      {
        className: cn5(
          "grid gap-4",
          cols === 1 && "grid-cols-1",
          cols === 2 && "grid-cols-1 md:grid-cols-2",
          cols === 3 && "grid-cols-1 md:grid-cols-3",
          cols === 4 && "grid-cols-1 md:grid-cols-2 xl:grid-cols-4"
        ),
        children: plans.map((p) => /* @__PURE__ */ jsxs4(
          Card,
          {
            className: cn5(
              "relative p-6",
              p.highlight && "ring-2 ring-black dark:ring-white"
            ),
            children: [
              p.badge ? /* @__PURE__ */ jsx5("div", { className: "absolute right-4 top-4 rounded-full bg-black px-3 py-1 text-xs font-medium text-white dark:bg-white dark:text-black", children: p.badge }) : null,
              /* @__PURE__ */ jsxs4("div", { className: "space-y-1", children: [
                /* @__PURE__ */ jsx5("h3", { className: "text-lg font-semibold", children: p.name }),
                p.description ? /* @__PURE__ */ jsx5("p", { className: "text-sm text-zinc-600 dark:text-zinc-400", children: p.description }) : null
              ] }),
              /* @__PURE__ */ jsxs4("div", { className: "mt-4 flex items-end gap-1", children: [
                /* @__PURE__ */ jsx5("div", { className: "text-3xl font-semibold leading-none", children: p.price }),
                p.period ? /* @__PURE__ */ jsx5("div", { className: "pb-0.5 text-sm text-zinc-500", children: p.period }) : null
              ] }),
              /* @__PURE__ */ jsx5("div", { className: "mt-4", children: /* @__PURE__ */ jsx5(Button, { className: "w-full", ...p.cta, children: p.cta.label }) }),
              /* @__PURE__ */ jsx5("ul", { className: "mt-5 space-y-3 text-sm", children: p.features.map((f, idx) => {
                const ok = f.included !== false;
                return /* @__PURE__ */ jsxs4("li", { className: "flex gap-3", children: [
                  /* @__PURE__ */ jsx5(
                    "span",
                    {
                      className: cn5(
                        "mt-0.5",
                        ok ? "text-black dark:text-white" : "text-zinc-400"
                      ),
                      children: ok ? /* @__PURE__ */ jsx5(CheckIcon, {}) : /* @__PURE__ */ jsx5(MinusIcon, {})
                    }
                  ),
                  /* @__PURE__ */ jsxs4("span", { className: cn5(ok ? "" : "text-zinc-500 line-through"), children: [
                    f.label,
                    f.hint ? /* @__PURE__ */ jsxs4("span", { className: "ml-2 text-xs text-zinc-500", children: [
                      "(",
                      f.hint,
                      ")"
                    ] }) : null
                  ] })
                ] }, idx);
              }) })
            ]
          },
          p.id
        ))
      }
    )
  ] });
}

// src/components/input.tsx
import * as React6 from "react";
import { cn as cn6 } from "@dtverse/utils";
import { jsx as jsx6 } from "react/jsx-runtime";
var Input = React6.forwardRef(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ jsx6(
      "input",
      {
        ref,
        className: cn6(
          "flex h-10 w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm",
          "placeholder:text-zinc-500",
          "focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2",
          "disabled:cursor-not-allowed disabled:opacity-50",
          "dark:border-zinc-800 dark:bg-zinc-950 dark:ring-offset-zinc-950",
          className
        ),
        ...props
      }
    );
  }
);
Input.displayName = "Input";

// src/components/label.tsx
import "react";
import { cn as cn7 } from "@dtverse/utils";
import { jsx as jsx7 } from "react/jsx-runtime";
function Label({ className, ...props }) {
  return /* @__PURE__ */ jsx7(
    "label",
    {
      className: cn7(
        "text-sm font-medium leading-none",
        "peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
        className
      ),
      ...props
    }
  );
}
export {
  AuthCard,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  EmptyState,
  Input,
  Label,
  PricingTable
};
