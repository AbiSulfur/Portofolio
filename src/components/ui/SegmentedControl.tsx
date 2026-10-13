import React from "react";
import { useI18n, type Locale } from "../../i18n";
import { cn } from "../../lib/utils";

export interface SegmentedControlProps {
  className?: string;
}

export function SegmentedControl({ className }: SegmentedControlProps) {
  const { locale, setLocale } = useI18n();

  const options: { value: Locale; label: string }[] = [
    { value: "en", label: "EN" },
    { value: "id", label: "ID" },
  ];

  return (
    <div
      role="radiogroup"
      aria-label="Language selector"
      className={cn(
        "inline-flex items-center p-1 rounded-full border border-line bg-bg/90 backdrop-blur-sm relative",
        className
      )}
    >
      {options.map((opt) => {
        const isSelected = locale === opt.value;
        return (
          <button
            key={opt.value}
            type="button"
            role="radio"
            aria-checked={isSelected}
            onClick={() => setLocale(opt.value)}
            className={cn(
              "min-w-[44px] min-h-[38px] px-3.5 py-1 text-xs font-mono font-medium rounded-full cursor-pointer select-none",
              "transition-all duration-200 ease-out flex items-center justify-center",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-1",
              isSelected
                ? "bg-ink text-bg shadow-sm"
                : "text-ink-subtle hover:text-ink hover:bg-black/5"
            )}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}
