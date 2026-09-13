"use client"

import { useLanguage } from "@/components/language-provider"
import { useScrollReveal } from "@/hooks/useScrollReveal"
import { Monitor, Building2, Code2 } from "lucide-react"

export default function Services() {
  const { t } = useLanguage()
  useScrollReveal()

  const servicesList = [
    {
      number: "01",
      title: t("services", "service1Title"),
      desc: t("services", "service1Desc"),
      icon: <Monitor className="w-6 h-6" aria-hidden="true" />,
    },
    {
      number: "02",
      title: t("services", "service2Title"),
      desc: t("services", "service2Desc"),
      icon: <Building2 className="w-6 h-6" aria-hidden="true" />,
    },
    {
      number: "03",
      title: t("services", "service3Title"),
      desc: t("services", "service3Desc"),
      icon: <Code2 className="w-6 h-6" aria-hidden="true" />,
    },
  ]

  return (
    <section id="services" className="section-padding border-t border-border/10">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="mb-10 sm:mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-3 md:gap-4" data-reveal>
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-2 sm:mb-3">
              {t("services", "title")}
            </p>
            <h2 className="section-title">{t("services", "title")}</h2>
          </div>
          <p className="section-subtitle max-w-full md:max-w-xs md:text-right">
            {t("services", "subtitle")}
          </p>
        </div>

        {/* Editorial list */}
        <div data-reveal>
          {servicesList.map((service, idx) => (
            <div key={idx} className="service-row group" data-reveal-child>
              {/* Number */}
              <span className="text-xs font-bold tracking-widest text-muted-foreground/60 pt-1 self-start md:self-center">
                {service.number}
              </span>

              {/* Content */}
              <div className="flex flex-col">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground group-hover:text-accent transition-colors duration-300 mb-1">
                  {service.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {service.desc}
                </p>
              </div>

              {/* Arrow — hidden on touch devices via CSS pointer check */}
              <div className="service-arrow text-accent flex-shrink-0 hidden md:flex">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
