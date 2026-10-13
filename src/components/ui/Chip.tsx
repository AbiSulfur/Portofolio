import React from "react";
import { cn } from "../../lib/utils";

export interface ChipProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "light" | "dark" | "accent";
  children: React.ReactNode;
  className?: string;
}

export function Chip({
  variant = "light",
  children,
  className,
  ...props
}: ChipProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center font-mono text-[13px] tracking-tight rounded-full px-3.5 py-1.5 transition-colors",
        variant === "light" &&
          "bg-transparent text-ink border border-line",
        variant === "dark" &&
          "bg-white/5 text-text-on-dark-muted border border-line-dark",
        variant === "accent" &&
          "bg-accent/15 text-ink border border-accent/40",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
