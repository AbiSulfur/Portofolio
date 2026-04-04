"use client"

import { useLanguage } from "@/components/language-provider"

export default function About() {
  const { t } = useLanguage()

  const techStack = [
    { title: "Frontend", desc: "React, Next.js, HTML, CSS, JavaScript, Tailwind" },
    { title: "Backend", desc: "PHP, Laravel, Node.js" },
    { title: "Database & CMS", desc: "MySQL, WordPress" },
    { title: "Tools", desc: "Git, VS Code, Figma" },
  ]

  return (
    <section id="about" className="section-padding bg-card/30">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <h2 className="section-title mb-4">{t("about", "title")}</h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-accent via-accent/70 to-accent/30 rounded-full"></div>
          <p className="section-subtitle mt-6 max-w-2xl">
            {t("about", "subtitle")}
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div className="space-y-6">
            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed font-medium">
              {t("about", "p1")}
            </p>

            <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
              {t("about", "p2")}
            </p>

            <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
              {t("about", "p3")}
            </p>
          </div>

          <div className="space-y-4">
            <div className="glass-card p-6 card-hover border border-border/20 hover:border-accent/40">
              <h3 className="text-sm uppercase tracking-wider text-accent font-bold mb-4">{t("about", "techStack")}</h3>
              <ul className="space-y-4 text-base text-foreground/80">
                {techStack.map((item, idx) => (
                  <li key={idx}>
                    <div className="flex items-center gap-2 font-semibold text-foreground mb-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                      {item.title}
                    </div>
                    <div className="text-sm pl-4 text-muted-foreground">{item.desc}</div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-card p-6 card-hover border border-border/20 hover:border-accent/40 bg-accent/5">
              <h3 className="text-sm uppercase tracking-wider text-accent font-bold mb-4">{t("about", "currentStatus")}</h3>
              <p className="text-base text-foreground/80 leading-relaxed">
                {t("about", "statusText")}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-12 border-t border-border/30">
          <p className="text-xl md:text-2xl text-foreground/90 leading-relaxed max-w-3xl font-medium">
            <span className="highlight">"{t("about", "closingText")}"</span>
          </p>
        </div>
      </div>
    </section>
  )
}
