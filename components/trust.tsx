"use client"

import { useLanguage } from "@/components/language-provider"
import { useScrollReveal } from "@/hooks/useScrollReveal"
import { Search, Code2, Rocket } from "lucide-react"

export default function Trust() {
  const { t } = useLanguage()
  useScrollReveal()

  const steps = [
    {
      number: "01",
      title: t("process", "step1Title").replace(/^\d+\.\s*/, ""),
      desc: t("process", "step1Desc"),
      icon: <Search className="w-6 h-6" aria-hidden="true" />,
    },
    {
      number: "02",
      title: t("process", "step2Title").replace(/^\d+\.\s*/, ""),
      desc: t("process", "step2Desc"),
      icon: <Code2 className="w-6 h-6" aria-hidden="true" />,
    },
    {
      number: "03",
      title: t("process", "step3Title").replace(/^\d+\.\s*/, ""),
      desc: t("process", "step3Desc"),
      icon: <Rocket className="w-6 h-6" aria-hidden="true" />,
    },
  ]

  return (
    <section className="section-padding border-t border-border/10 bg-card/10">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="mb-20 text-center" data-reveal>
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-3">
            {t("process", "title")}
          </p>
          <h2 className="section-title mb-4">{t("process", "title")}</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            {t("process", "subtitle")}
          </p>
        </div>

        {/* Horizontal timeline */}
        <div className="process-timeline gap-8 md:gap-0" data-reveal>
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center md:items-start text-center md:text-left px-0 md:px-8 relative" data-reveal-child>
              {/* Step dot / icon marker */}
              <div className="relative mb-8">
                <div className="w-16 h-16 rounded-2xl bg-accent/10 border border-accent/20 text-accent flex items-center justify-center relative z-10">
                  {step.icon}
                </div>
              </div>

              {/* Number */}
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-accent mb-2">
                {step.number}
              </span>

              {/* Title */}
              <h3 className="text-xl font-bold text-foreground mb-3">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-foreground/65 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
