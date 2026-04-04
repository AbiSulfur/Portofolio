"use client"

import { useLanguage } from "@/components/language-provider"

export default function ValueProposition() {
  const { t } = useLanguage()

  const problemsList = [
    {
      problem: t("valueProp", "problem1"),
      solution: t("valueProp", "solution1"),
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      problem: t("valueProp", "problem2"),
      solution: t("valueProp", "solution2"),
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      problem: t("valueProp", "problem3"),
      solution: t("valueProp", "solution3"),
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    }
  ]

  const featuresList = [
    {
      title: t("valueProp", "cleanCode"),
      desc: t("valueProp", "cleanCodeDesc"),
    },
    {
      title: t("valueProp", "modernDesign"),
      desc: t("valueProp", "modernDesignDesc"),
    },
    {
      title: t("valueProp", "businessFocus"),
      desc: t("valueProp", "businessFocusDesc"),
    }
  ]

  return (
    <section className="section-padding bg-background border-t border-border/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">{t("valueProp", "title")}</h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-accent via-accent/70 to-accent/30 rounded-full mx-auto"></div>
          <p className="section-subtitle mt-6 max-w-2xl mx-auto">
            {t("valueProp", "subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column: Problems & Solutions */}
          <div className="space-y-6">
            {problemsList.map((item, index) => (
              <div key={index} className="flex gap-4 p-5 glass-card card-hover border border-border/20">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-accent/10 text-accent">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-1">{item.problem}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.solution}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Why choose me details */}
          <div className="space-y-8">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -inset-4 bg-accent/5 rounded-xl blur-lg z-0"></div>
              
              <div className="relative z-10 space-y-6">
                {featuresList.map((feature, idx) => (
                  <div key={idx} className="border-l-2 border-accent/50 pl-5">
                    <h4 className="text-xl font-bold text-foreground mb-2 flex items-center gap-2">
                       <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                       {feature.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            
            <button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="mt-4 px-6 py-3 bg-accent/10 hover:bg-accent text-accent hover:text-background rounded-lg font-semibold transition-all duration-300 w-full md:w-auto border border-accent/20 hover:border-accent"
            >
              {t("hero", "ctaPrimary")}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
