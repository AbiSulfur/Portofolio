"use client"

import { useLanguage } from "@/components/language-provider"
import { useScrollReveal } from "@/hooks/useScrollReveal"

export default function Services() {
  const { t } = useLanguage()
  useScrollReveal()

  const servicesList = [
    {
      number: "01",
      title: t("services", "service1Title"),
      desc: t("services", "service1Desc"),
      icon: (
        <svg aria-hidden="true" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      number: "02",
      title: t("services", "service2Title"),
      desc: t("services", "service2Desc"),
      icon: (
        <svg aria-hidden="true" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      number: "03",
      title: t("services", "service3Title"),
      desc: t("services", "service3Desc"),
      icon: (
        <svg aria-hidden="true" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    }
  ]

  return (
    <section id="services" className="section-padding bg-card/10 border-t border-border/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16" data-reveal>
          <h2 className="section-title mb-4">{t("services", "title")}</h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-accent via-accent/70 to-accent/30 rounded-full mx-auto"></div>
          <p className="section-subtitle mt-6 max-w-2xl mx-auto">
            {t("services", "subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-reveal>
          {servicesList.map((service, idx) => (
            <div
              key={idx}
              data-reveal-child
              className="glass-card card-hover p-8 text-center flex flex-col items-center relative overflow-hidden"
            >
              {/* Large faint background number */}
              <span className="absolute top-4 right-4 text-[80px] font-extrabold leading-none text-foreground/[0.04] select-none pointer-events-none">
                {service.number}
              </span>

              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-6 relative z-10">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4 relative z-10">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed relative z-10">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
