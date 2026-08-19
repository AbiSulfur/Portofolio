"use client"

import { useLanguage } from "@/components/language-provider"
import { useScrollReveal } from "@/hooks/useScrollReveal"

export default function ValueProposition() {
  const { t } = useLanguage()
  useScrollReveal()

  const valueProps = [
    {
      problem: t("valueProp", "problem1"),
      solution: t("valueProp", "solution1"),
      featureTitle: t("valueProp", "cleanCode"),
      featureDesc: t("valueProp", "cleanCodeDesc"),
    },
    {
      problem: t("valueProp", "problem2"),
      solution: t("valueProp", "solution2"),
      featureTitle: t("valueProp", "modernDesign"),
      featureDesc: t("valueProp", "modernDesignDesc"),
    },
    {
      problem: t("valueProp", "problem3"),
      solution: t("valueProp", "solution3"),
      featureTitle: t("valueProp", "businessFocus"),
      featureDesc: t("valueProp", "businessFocusDesc"),
    }
  ]

  return (
    <section className="section-padding bg-background border-t border-border/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16" data-reveal>
          <h2 className="section-title mb-4">{t("valueProp", "title")}</h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-accent via-accent/70 to-accent/30 rounded-full mx-auto"></div>
          <p className="section-subtitle mt-6 max-w-2xl mx-auto">
            {t("valueProp", "subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-reveal>
          {valueProps.map((item, index) => (
            <div
              key={index}
              data-reveal-child
              className="glass-card flex flex-col overflow-hidden border border-border/20 group hover:border-accent/40 hover:shadow-xl hover:shadow-accent/10 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Problem State */}
              <div className="p-6 bg-red-500/5 border-b border-red-500/10 flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-red-500/10 text-red-500 flex items-center justify-center shrink-0">
                  <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-red-500/70 uppercase tracking-wider mb-1">Problem</h3>
                  <p className="text-foreground font-semibold text-lg">{item.problem}</p>
                </div>
              </div>

              {/* Solution State */}
              <div className="p-6 bg-accent/5 flex-grow flex items-start gap-4 relative overflow-hidden">
                <div className="absolute -right-4 -bottom-4 opacity-5 pointer-events-none text-accent">
                  <svg aria-hidden="true" className="w-32 h-32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="w-10 h-10 rounded-full bg-accent/20 text-accent flex items-center justify-center shrink-0 relative z-10">
                  <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="relative z-10">
                  <h3 className="text-sm font-bold text-accent uppercase tracking-wider mb-1">Solution</h3>
                  <h4 className="font-bold text-foreground text-lg mb-2">{item.featureTitle}</h4>
                  <p className="text-foreground/80 text-sm leading-relaxed mb-3">{item.featureDesc}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed border-t border-accent/20 pt-3">{item.solution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
