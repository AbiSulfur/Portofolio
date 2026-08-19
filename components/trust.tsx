"use client"

import { useLanguage } from "@/components/language-provider"
import { useScrollReveal } from "@/hooks/useScrollReveal"

export default function Trust() {
  const { t } = useLanguage()
  useScrollReveal()

  const steps = [
    {
      title: t("process", "step1Title"),
      desc: t("process", "step1Desc"),
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      )
    },
    {
      title: t("process", "step2Title"),
      desc: t("process", "step2Desc"),
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      title: t("process", "step3Title"),
      desc: t("process", "step3Desc"),
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    }
  ]

  return (
    <section className="section-padding bg-background border-t border-border/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16" data-reveal>
          <h2 className="section-title mb-4">{t("process", "title")}</h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-accent via-accent/70 to-accent/30 rounded-full mx-auto"></div>
          <p className="section-subtitle mt-6 max-w-2xl mx-auto">
            {t("process", "subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-reveal>
          {steps.map((step, idx) => (
            <div
              key={idx}
              data-reveal-child
              className="glass-card p-8 border border-border/20 relative hover:border-accent/40 hover:shadow-lg hover:shadow-accent/10 hover:-translate-y-1 transition-all duration-[250ms] ease-out flex flex-col"
            >
              <div className="w-16 h-16 rounded-2xl bg-accent/10 text-accent flex items-center justify-center mb-6">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">{step.title}</h3>
              <p className="text-foreground/70 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
