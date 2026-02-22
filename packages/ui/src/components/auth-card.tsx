import * as React from "react";
import { cn } from "@dtverse/utils";
import { Button, type ButtonProps } from "./button.js";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./card.js";

export type AuthCardMode = "login" | "register" | "forgot";

export interface AuthCardProps extends React.HTMLAttributes<HTMLDivElement> {
  mode?: AuthCardMode;
  brand?: React.ReactNode; // logo
  title?: string;
  description?: string;

  // Optional OAuth buttons (Google, GitHub...)
  providers?: Array<{
    id: string;
    label: string;
    onClick: () => void;
    leftIcon?: React.ReactNode;
    variant?: ButtonProps["variant"];
  }>;

  // Form area (inputs etc.)
  children?: React.ReactNode;

  primaryAction?: ButtonProps & { label: string };
  secondaryAction?: (ButtonProps & { label: string }) | null;

  footer?: React.ReactNode; // links like "Create account", "Back to login"
}

const defaultCopy: Record<AuthCardMode, { title: string; description: string; primary: string }> = {
  login: { title: "Welcome back", description: "Sign in to continue.", primary: "Sign in" },
  register: { title: "Create your account", description: "Start building in minutes.", primary: "Create account" },
  forgot: { title: "Reset password", description: "We’ll send you a reset link.", primary: "Send reset link" },
};

export function AuthCard({
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
}: AuthCardProps) {
  const copy = defaultCopy[mode];

  return (
    <div className={cn("w-full max-w-md", className)} {...props}>
      <Card className="p-0 overflow-hidden">
        <div className="p-6">
          <CardHeader className="mb-4">
            {brand ? <div className="mb-3">{brand}</div> : null}
            <CardTitle className="text-xl">{title ?? copy.title}</CardTitle>
            <CardDescription>{description ?? copy.description}</CardDescription>
          </CardHeader>

          {providers?.length ? (
            <div className="space-y-2">
              {providers.map((p) => (
                <Button
                  key={p.id}
                  variant={p.variant ?? "outline"}
                  className="w-full justify-center"
                  onClick={p.onClick}
                  leftIcon={p.leftIcon}
                  type="button"
                >
                  {p.label}
                </Button>
              ))}
            </div>
          ) : null}

          {providers?.length ? (
            <div className="my-4 flex items-center gap-3">
              <div className="h-px flex-1 bg-zinc-200 dark:bg-zinc-800" />
              <span className="text-xs text-zinc-500">OR</span>
              <div className="h-px flex-1 bg-zinc-200 dark:bg-zinc-800" />
            </div>
          ) : null}

          <CardContent className="mt-0 p-0">
            {children ? <div className="space-y-3">{children}</div> : null}

            <div className="mt-4 space-y-2">
              {primaryAction ? (
                <Button className="w-full" {...primaryAction}>
                  {primaryAction.label}
                </Button>
              ) : (
                <Button className="w-full" type="button">
                  {copy.primary}
                </Button>
              )}

              {secondaryAction ? (
                <Button className="w-full" variant="secondary" {...secondaryAction}>
                  {secondaryAction.label}
                </Button>
              ) : null}
            </div>

            {footer ? <div className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">{footer}</div> : null}
          </CardContent>
        </div>
      </Card>
    </div>
  );
}