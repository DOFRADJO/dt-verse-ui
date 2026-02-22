import * as React from "react";
import { cn } from "@dtverse/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          "flex h-10 w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm",
          "placeholder:text-zinc-500",
          "focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2",
          "disabled:cursor-not-allowed disabled:opacity-50",
          "dark:border-zinc-800 dark:bg-zinc-950 dark:ring-offset-zinc-950",
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";