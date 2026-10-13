import React from "react";
import { cn } from "../../lib/utils";

export interface BadgeProps {
  label: string;
  isAvailable?: boolean;
  className?: string;
}

export function Badge({ label, isAvailable = true, className }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-line bg-bg/80 backdrop-blur-sm text-ink",
        className
      )}
      role="status"
      aria-label={label}
    >
      <span className="relative flex h-2 w-2">
        {isAvailable && (
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
        )}
        <span
          className={cn(
            "relative inline-flex rounded-full h-2 w-2",
            isAvailable ? "bg-emerald-500" : "bg-neutral-400"
          )}
        />
      </span>
      <span className="font-mono text-xs text-ink-muted uppercase tracking-wider font-medium">
        {label}
      </span>
    </div>
  );
}
