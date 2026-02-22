import * as React from "react";
import { cn } from "@dtverse/utils";
import { Button, type ButtonProps } from "./button.js";

export type EmptyStateTone = "neutral" | "info" | "success" | "warning" | "danger";

export interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  tone?: EmptyStateTone;
  primaryAction?: (ButtonProps & { label: string });
  secondaryAction?: (ButtonProps & { label: string });
}

const toneClasses: Record<EmptyStateTone, string> = {
  neutral: "bg-zinc-50 border-zinc-200 dark:bg-zinc-900/40 dark:border-zinc-800",
  info: "bg-blue-50 border-blue-200 dark:bg-blue-950/30 dark:border-blue-900/50",
  success:
    "bg-emerald-50 border-emerald-200 dark:bg-emerald-950/25 dark:border-emerald-900/50",
  warning:
    "bg-amber-50 border-amber-200 dark:bg-amber-950/25 dark:border-amber-900/50",
  danger: "bg-red-50 border-red-200 dark:bg-red-950/25 dark:border-red-900/50",
};

export function EmptyState({
  title,
  description,
  icon,
  tone = "neutral",
  primaryAction,
  secondaryAction,
  className,
  ...props
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        "rounded-xl border p-6 text-center",
        "flex flex-col items-center gap-3",
        toneClasses[tone],
        className
      )}
      {...props}
    >
      {icon ? (
        <div className="grid h-12 w-12 place-items-center rounded-full bg-white/70 ring-1 ring-black/5 dark:bg-zinc-950/50 dark:ring-white/10">
          {icon}
        </div>
      ) : null}

      <div className="space-y-1">
        <h3 className="text-base font-semibold">{title}</h3>
        {description ? (
          <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-md">
            {description}
          </p>
        ) : null}
      </div>

      {(primaryAction || secondaryAction) && (
        <div className="mt-2 flex flex-wrap items-center justify-center gap-2">
          {primaryAction ? (
            <Button {...primaryAction}>{primaryAction.label}</Button>
          ) : null}
          {secondaryAction ? (
            <Button variant="secondary" {...secondaryAction}>
              {secondaryAction.label}
            </Button>
          ) : null}
        </div>
      )}
    </div>
  );
}