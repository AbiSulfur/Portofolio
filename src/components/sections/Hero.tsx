import React from "react";
import { useI18n } from "../../i18n";
import { site } from "../../data/site";
import { Button } from "../ui/Button";
import { Chip } from "../ui/Chip";
import { LineReveal } from "../motion/LineReveal";
import { FadeUp } from "../motion/FadeUp";
import { Magnetic } from "../motion/Magnetic";
import { ArrowDown, MessageSquare } from "lucide-react";

export function Hero() {
  const { t } = useI18n();

  const fullHeading = `${t("hero.headlineLine1")} ${t("hero.headlineLine2")} ${t("hero.headlineLine3")}`;

  return (
    <section
      id="top"
      className="relative pt-32 sm:pt-40 md:pt-48 pb-16 md:pb-24 overflow-hidden border-b border-line/60"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-14">
        {/* Main Editorial Headline with Line-Masked Reveal */}
        <div className="max-w-6xl">
          <h1
            aria-label={fullHeading}
            className="text-[clamp(44px,8.5vw,132px)] font-extrabold tracking-[-0.045em] leading-[0.96] text-ink select-none"
          >
            <LineReveal delay={0}>
              <span aria-hidden="true" className="block">
                {t("hero.headlineLine1")}
              </span>
            </LineReveal>
            <LineReveal delay={0.12}>
              <span aria-hidden="true" className="block text-ink/90">
                {t("hero.headlineLine2")}
              </span>
            </LineReveal>
            <LineReveal delay={0.24}>
              <span aria-hidden="true" className="block text-ink">
                {t("hero.headlineLine3")}
              </span>
            </LineReveal>
          </h1>

          {/* Subtitle & Value Proposition with FadeUp */}
          <FadeUp delay={0.4} duration={0.8} className="mt-8 sm:mt-12 md:mt-14 max-w-2xl">
            <p className="text-lg sm:text-xl md:text-2xl text-ink-muted leading-relaxed font-normal">
              {t("hero.subtitle")}
            </p>
          </FadeUp>

          {/* Action Buttons with FadeUp */}
          <FadeUp delay={0.55} duration={0.8} className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6">
            <Magnetic>
              <Button
                href={site.whatsapp}
                external
                variant="primary"
                className="gap-2.5 shadow-sm"
              >
                <span>{t("hero.ctaPrimary")}</span>
                <MessageSquare className="w-4 h-4" />
              </Button>
            </Magnetic>

            <Magnetic>
              <Button
                href="#projects"
                variant="secondary"
                className="gap-2"
              >
                <span>{t("hero.ctaSecondary")}</span>
                <ArrowDown className="w-4 h-4" />
              </Button>
            </Magnetic>
          </FadeUp>

          {/* Feature Badges with FadeUp */}
          <FadeUp delay={0.7} duration={0.8} className="mt-10 sm:mt-14 flex flex-wrap items-center gap-2.5 sm:gap-3">
            <Chip>{t("hero.badge1")}</Chip>
            <Chip>{t("hero.badge2")}</Chip>
            <Chip>{t("hero.badge3")}</Chip>
          </FadeUp>
        </div>

        {/* Scroll Cue Indicator with FadeUp */}
        <FadeUp delay={0.85} duration={0.8} className="mt-16 sm:mt-20 flex items-center justify-between pt-8 border-t border-line/40 text-ink-subtle">
          <a
            href="#intro"
            className="inline-flex items-center gap-2 text-xs font-mono tracking-wider uppercase hover:text-ink transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 rounded-xs"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span>{t("hero.scrollCue")}</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
          </a>

          <span className="hidden sm:inline font-mono text-xs text-ink-subtle tracking-widest uppercase">
            {site.location}
          </span>
        </FadeUp>
      </div>

      {/* Marquee Strip: Tech Stack Bar */}
      <div className="mt-12 sm:mt-16 py-4 bg-bg border-y border-line overflow-hidden select-none">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-10">
          {[...site.marqueeStack, ...site.marqueeStack, ...site.marqueeStack].map((tech, index) => (
            <div key={`${tech}-${index}`} className="flex items-center gap-10">
              <span className="font-mono text-sm uppercase tracking-widest text-ink font-semibold">
                {tech}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
