import React from "react";
import { useI18n } from "../../i18n";
import { site } from "../../data/site";
import { Chip } from "../ui/Chip";
import { Counter } from "../motion/Counter";
import { FadeUp } from "../motion/FadeUp";

export function About() {
  const { t } = useI18n();

  const expertise = [
    "Next.js",
    "React",
    "TypeScript",
    "Laravel",
    "Tailwind CSS",
    "MySQL",
    "RESTful API",
    "Astro",
  ];

  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="py-24 sm:py-32 md:py-40 bg-bg border-b border-line/60"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-14">
        {/* Section Header with FadeUp */}
        <FadeUp className="max-w-3xl mb-16 sm:mb-20">
          <span className="font-mono text-xs uppercase tracking-widest text-ink-subtle block mb-4">
            05 / Background
          </span>
          <h2
            id="about-title"
            className="text-[clamp(36px,5vw,72px)] font-extrabold tracking-tight text-ink leading-tight"
          >
            {t("about.title")}
          </h2>
          <p className="mt-4 sm:mt-6 text-lg sm:text-xl text-ink-muted leading-relaxed">
            {t("about.subtitle")}
          </p>
        </FadeUp>

        {/* 2-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Bio Paragraphs & Closing Quote (7 cols) with FadeUp */}
          <FadeUp className="lg:col-span-7 flex flex-col gap-6 text-base sm:text-lg text-ink-muted leading-relaxed">
            <p className="text-ink font-medium text-lg sm:text-xl">
              {t("about.p1")}
            </p>
            <p>{t("about.p2")}</p>
            <p>{t("about.p3")}</p>

            <div className="mt-6 pt-6 border-t border-line/60">
              <blockquote className="font-display italic text-lg sm:text-xl text-ink font-semibold border-l-2 border-accent pl-4">
                "{t("about.closingQuote")}"
              </blockquote>
            </div>
          </FadeUp>

          {/* Right Column: Animated Stats & Core Expertise (5 cols) with FadeUp */}
          <FadeUp delay={0.2} className="lg:col-span-5 flex flex-col gap-10">
            {/* Animated Stat Counters Block */}
            <div className="grid grid-cols-2 gap-6 p-6 sm:p-8 rounded-[28px] border border-line bg-white/40 shadow-2xs">
              <div className="flex flex-col gap-2">
                <span className="text-4xl sm:text-5xl font-extrabold tracking-tight text-ink font-display">
                  <Counter value={site.stats.projects} suffix="+" />
                </span>
                <span className="font-mono text-xs text-ink-subtle uppercase tracking-wider">
                  {t("about.stat1Label")}
                </span>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-4xl sm:text-5xl font-extrabold tracking-tight text-ink font-display">
                  <Counter value={site.stats.years} suffix="+" />
                </span>
                <span className="font-mono text-xs text-ink-subtle uppercase tracking-wider">
                  {t("about.stat2Label")}
                </span>
              </div>
            </div>

            {/* Core Expertise Chips */}
            <div className="p-6 sm:p-8 rounded-[28px] border border-line bg-white/40 shadow-2xs flex flex-col gap-4">
              <div>
                <h3 className="text-xl font-bold text-ink tracking-tight">
                  {t("about.coreExpertise")}
                </h3>
                <p className="text-sm text-ink-muted mt-1">
                  {t("about.coreExpertiseDesc")}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {expertise.map((skill) => (
                  <Chip key={skill} variant="light">
                    {skill}
                  </Chip>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
