"use client"

import { useLanguage } from "@/components/language-provider"

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-32 px-6 md:px-12">
      <div className="w-full max-w-6xl mx-auto">
        {/* Grid layout: left section | center photo | right section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          {/* LEFT COLUMN - Name and Introduction */}
          <div className="md:col-span-4 flex flex-col justify-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
              {t("hero", "headlinePart1")}
              <br/>
              <span className="gradient-text">{t("hero", "headlinePart2")}</span>
              <br/>
              {t("hero", "headlinePart3")}
            </h1>
            <div className="w-12 h-1 bg-accent mb-6 rounded-full"></div>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              {t("hero", "subtitle")}
            </p>
          </div>

          {/* CENTER COLUMN - Profile Image (Focal Point) */}
          <div className="md:col-span-4 flex justify-center">
            <div className="w-full max-w-sm">
              <img
                src="/Abigail.webp"
                alt="Benedictus Abigail Triwiyatno"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>

          {/* RIGHT COLUMN - Professional Details and CTA */}
          <div className="md:col-span-4 flex flex-col justify-center">
            <div className="mb-8 hidden md:block">
              <p className="text-lg text-muted-foreground font-semibold uppercase tracking-wide mb-3">
                {t("hero", "introTitle")}
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                {t("hero", "introText")}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-3 mt-4 md:mt-0">
              <button
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                className="px-6 py-3 bg-accent hover:bg-accent/90 text-accent-foreground rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-accent/30 text-base w-full text-center"
              >
                {t("hero", "ctaPrimary")}
              </button>
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="px-6 py-3 bg-card hover:bg-card/80 text-foreground border border-border rounded-lg font-semibold transition-all duration-300 hover:border-accent/50 text-base w-full text-center"
              >
                {t("hero", "ctaSecondary")}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex justify-center animate-bounce hidden md:flex">
        <svg className="w-6 h-6 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
