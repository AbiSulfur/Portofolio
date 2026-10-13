import React from "react";
import { useI18n } from "../../i18n";
import { WordReveal } from "../motion/WordReveal";
import { FadeUp } from "../motion/FadeUp";
import { ArrowUpRight } from "lucide-react";

export function Intro() {
  const { t } = useI18n();

  return (
    <section
      id="intro"
      aria-label="Philosophy & Approach"
      className="py-24 sm:py-32 md:py-44 border-b border-line/60 bg-bg"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-14">
        <div className="max-w-5xl">
          <FadeUp duration={0.6}>
            <span className="font-mono text-xs uppercase tracking-widest text-ink-subtle block mb-6 sm:mb-8">
              01 / Philosophy
            </span>
          </FadeUp>

          {/* Word-by-Word Scroll Reveal Statement */}
          <div className="text-[clamp(28px,4.2vw,60px)] font-bold tracking-tight leading-[1.18] text-ink">
            <WordReveal text={`"${t("intro.quote")}"`} />
          </div>

          <FadeUp delay={0.2} className="mt-10 sm:mt-14">
            <a
              href="#projects"
              className="group inline-flex items-center gap-3 text-base sm:text-lg font-semibold text-ink hover:text-ink/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 rounded-xs"
            >
              <span className="underline decoration-line group-hover:decoration-ink underline-offset-8 transition-colors">
                {t("intro.cta")}
              </span>
              <span className="w-10 h-10 rounded-full border border-line flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-300">
                <ArrowUpRight className="w-4 h-4 text-ink transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </a>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
