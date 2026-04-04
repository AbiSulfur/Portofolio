"use client"

import { useLanguage } from "@/components/language-provider"

export default function Trust() {
  const { t } = useLanguage()

  const testimonials = [
    {
      quote: t("trust", "testi1Quote"),
      author: t("trust", "testi1Author"),
      role: t("trust", "testi1Role"),
      initial: "S"
    },
    {
      quote: t("trust", "testi2Quote"),
      author: t("trust", "testi2Author"),
      role: t("trust", "testi2Role"),
      initial: "M"
    },
    {
      quote: t("trust", "testi3Quote"),
      author: t("trust", "testi3Author"),
      role: t("trust", "testi3Role"),
      initial: "A"
    }
  ]

  return (
    <section className="section-padding bg-background border-t border-border/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">{t("trust", "title")}</h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-accent via-accent/70 to-accent/30 rounded-full mx-auto"></div>
          <p className="section-subtitle mt-6 max-w-2xl mx-auto">
            {t("trust", "subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testi, idx) => (
            <div key={idx} className="glass-card p-8 border border-border/20 relative">
              <div className="absolute top-6 left-6 text-accent/20">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-foreground/80 italic relative z-10 pt-6 mb-8 min-h-[5rem] leading-relaxed">
                "{testi.quote}"
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-lg">
                  {testi.initial}
                </div>
                <div>
                  <h4 className="font-bold text-foreground">{testi.author}</h4>
                  <p className="text-sm text-muted-foreground">{testi.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
