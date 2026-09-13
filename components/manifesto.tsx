"use client"

import { useLanguage } from "@/components/language-provider"
import { useScrollReveal } from "@/hooks/useScrollReveal"

export default function Manifesto() {
  const { t } = useLanguage()
  useScrollReveal()

  return (
    <section
      id="manifesto"
      className="relative overflow-hidden border-t border-border/10 bg-card/20 py-16 sm:py-24 md:py-36 px-5 sm:px-6 md:px-12"
    >
      {/* Decorative large quote mark */}
      <span
        className="manifesto-quote absolute top-4 left-6 md:left-12 select-none pointer-events-none"
        aria-hidden="true"
      >
        "
      </span>

      <div className="max-w-4xl mx-auto relative z-10" data-reveal>
        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-snug md:leading-snug text-foreground text-center text-balance">
          {t("valueProp", "subtitle")}
        </p>

        <div className="mt-10 flex justify-center">
          <button
            onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:gap-3 transition-all duration-300 tracking-wide uppercase"
          >
            {t("hero", "ctaSecondary")}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
