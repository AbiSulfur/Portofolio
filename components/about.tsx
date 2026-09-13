"use client"

import { useState, useEffect, useRef } from "react"
import { useLanguage } from "@/components/language-provider"
import { useScrollReveal } from "@/hooks/useScrollReveal"

function useCountUp(targetValue: number, duration: number = 1500) {
  const [count, setCount] = useState(0)
  const [hasTriggered, setHasTriggered] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTriggered) {
          setHasTriggered(true)
          observer.unobserve(el)

          if (prefersReducedMotion) {
            setCount(targetValue)
            return
          }

          const startTime = performance.now()
          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.round(eased * targetValue))
            if (progress < 1) requestAnimationFrame(animate)
          }
          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.5 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [targetValue, duration, hasTriggered])

  return { count, ref }
}

export default function About() {
  const { t } = useLanguage()
  useScrollReveal()

  const techStack = ["Next.js", "React", "TypeScript", "Laravel", "Tailwind CSS", "MySQL"]

  const stat1 = useCountUp(Number(t("about", "stat1Value")))
  const stat2 = useCountUp(Number(t("about", "stat2Value")))
  const stat3 = useCountUp(Number(t("about", "stat3Value")))

  const stats = [
    { ref: stat1.ref, count: stat1.count, suffix: "+", label: t("about", "stat1Label") },
    { ref: stat2.ref, count: stat2.count, suffix: "+", label: t("about", "stat2Label") },
    { ref: stat3.ref, count: stat3.count, suffix: "%", label: t("about", "stat3Label") },
  ]

  return (
    <section id="about" className="section-padding border-t border-border/10">
      <div className="max-w-5xl mx-auto">

        {/* Section label */}
        <div className="mb-16" data-reveal>
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-3">
            {t("about", "title")}
          </p>
          <h2 className="section-title max-w-xl">{t("about", "title")}</h2>
        </div>

        {/* Main layout: Stats top/left | Bio right */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-12 md:gap-16 items-start mb-12 sm:mb-16" data-reveal>

          {/* Stats — 3-col row on mobile, vertical stack on desktop */}
          <div className="md:col-span-4 grid grid-cols-3 md:grid-cols-1 gap-4 md:gap-10">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                ref={stat.ref}
                className="flex flex-col items-center md:items-start"
                data-reveal-child
              >
                <span className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold text-accent leading-none tabular-nums">
                  {stat.count}{stat.suffix}
                </span>
                <span className="text-[10px] sm:text-xs font-semibold text-foreground/50 uppercase tracking-widest mt-1 md:mt-2 text-center md:text-left">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* Right column — bio + tech */}
          <div className="md:col-span-8 space-y-6">
            <div className="space-y-4" data-reveal-child>
              <p className="text-lg md:text-xl text-foreground/90 leading-relaxed font-medium">
                {t("about", "p1")}
              </p>
              <p className="text-base md:text-lg text-foreground/75 leading-relaxed">
                {t("about", "p2")}
              </p>
              <p className="text-base md:text-lg text-foreground/75 leading-relaxed">
                {t("about", "p3")}
              </p>
            </div>

            {/* Tech stack */}
            <div className="glass-card p-6 border border-border/20 hover:border-accent/40 bg-accent/5 transition-colors duration-300" data-reveal-child>
              <h3 className="text-xs font-bold text-accent uppercase tracking-[0.2em] mb-1">
                {t("about", "techStack")}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {t("about", "techStackDesc")}
              </p>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 bg-accent/10 border border-accent/20 rounded-md text-sm font-semibold text-foreground/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Closing quote */}
        <div className="border-t border-border/20 pt-12" data-reveal>
          <p className="text-xl md:text-2xl font-semibold text-foreground/80 leading-relaxed text-center italic">
            <span className="text-accent not-italic font-bold">"{t("about", "closingText")}"</span>
          </p>
        </div>
      </div>
    </section>
  )
}
