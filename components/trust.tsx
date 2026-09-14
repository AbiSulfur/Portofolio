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
        <div className="mb-16 sm:mb-20 text-center" data-reveal>
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-3">
            {t("process", "title")}
          </p>
          <h2 className="section-title mb-4">{t("process", "title")}</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            {t("process", "subtitle")}
          </p>
        </div>

        {/* ── Timeline grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0" data-reveal>
          {steps.map((step, idx) => (
            <div key={idx} className="relative flex flex-col md:items-center" data-reveal-child>

              {/* ── Connector line — only between cards ── */}
              {idx < steps.length - 1 && (
                <>
                  {/* Desktop: horizontal line to the right */}
                  <div
                    className="hidden md:block absolute top-8 left-[calc(50%+2rem)] right-0 h-px"
                    style={{
                      background: "linear-gradient(to right, oklch(0.55 0.18 250 / 0.5), oklch(0.55 0.18 250 / 0.15))",
                    }}
                    aria-hidden="true"
                  />
                  {/* Mobile: vertical line below icon */}
                  <div
                    className="md:hidden absolute top-16 left-8 bottom-0 w-px"
                    style={{
                      background: "linear-gradient(to bottom, oklch(0.55 0.18 250 / 0.5), oklch(0.55 0.18 250 / 0.1))",
                    }}
                    aria-hidden="true"
                  />
                </>
              )}

              {/* Card content */}
              <div className="flex md:flex-col items-start md:items-center gap-5 md:gap-0 px-0 md:px-6 pb-12 md:pb-0 pl-0">

                {/* Icon circle */}
                <div className="flex-shrink-0 relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-accent/10 border border-accent/25 text-accent flex items-center justify-center shadow-lg shadow-accent/5 group-hover:bg-accent/20 transition-colors duration-300">
                    {step.icon}
                  </div>
                </div>

                {/* Text */}
                <div className="flex flex-col md:items-center md:text-center mt-0 md:mt-6">
                  <span className="text-xs font-bold tracking-[0.2em] uppercase text-accent mb-1.5">
                    {step.number}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-foreground/60 leading-relaxed max-w-[260px]">
                    {step.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
