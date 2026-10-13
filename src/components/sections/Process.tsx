import React from "react";
import { useI18n } from "../../i18n";
import { ProcessTimeline } from "../motion/ProcessTimeline";
import { FadeUp } from "../motion/FadeUp";

export function Process() {
  const { t } = useI18n();

  return (
    <section
      id="process"
      aria-labelledby="process-title"
      className="py-24 sm:py-32 md:py-40 bg-bg border-b border-line/60"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-14">
        {/* Section Header with FadeUp */}
        <FadeUp className="max-w-3xl mb-16 sm:mb-24">
          <span className="font-mono text-xs uppercase tracking-widest text-ink-subtle block mb-4">
            04 / Work Process
          </span>
          <h2
            id="process-title"
            className="text-[clamp(36px,5vw,72px)] font-extrabold tracking-tight text-ink leading-tight"
          >
            {t("process.title")}
          </h2>
          <p className="mt-4 sm:mt-6 text-lg sm:text-xl text-ink-muted leading-relaxed">
            {t("process.subtitle")}
          </p>
        </FadeUp>

        {/* Scroll-Linked Drawing Timeline */}
        <ProcessTimeline />
      </div>
    </section>
  );
}
