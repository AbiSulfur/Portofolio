"use client"

import { useState, useEffect, useRef } from "react"
import { useLanguage } from "@/components/language-provider"
import { useScrollReveal } from "@/hooks/useScrollReveal"
import Image from "next/image"

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
            // Ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.round(eased * targetValue))
            if (progress < 1) {
              requestAnimationFrame(animate)
            }
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
    <section id="about" className="section-padding bg-card/30">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16 text-center md:text-left" data-reveal>
          <h2 className="section-title mb-4">{t("about", "title")}</h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-accent via-accent/70 to-accent/30 rounded-full mx-auto md:mx-0"></div>
          <p className="section-subtitle mt-6 max-w-2xl mx-auto md:mx-0">
            {t("about", "subtitle")}
          </p>
        </div>

        {/* Layout: Image + Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center" data-reveal>
          
          {/* Left Column - Profile Image */}
          <div className="md:col-span-5 flex justify-center md:justify-start" data-reveal-child>
            <div className="relative w-full max-w-sm aspect-[4/5] md:aspect-square lg:aspect-[3/4] overflow-hidden rounded-2xl glow-accent border border-border/30">
              <Image 
                src="/Abigail.webp" 
                alt="Benedictus Abigail Triwiyatno" 
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="md:col-span-7 space-y-6 text-center md:text-left">
            <div className="space-y-4" data-reveal-child>
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

            {/* Tech Stack as pill tags */}
            <div className="glass-card p-6 card-hover border border-border/20 hover:border-accent/40 bg-accent/5 max-w-xl mx-auto md:mx-0" data-reveal-child>
              <h3 className="text-sm uppercase tracking-wider text-accent font-bold mb-3">{t("about", "techStack")}</h3>
              <p className="text-sm text-muted-foreground mb-4">{t("about", "techStackDesc")}</p>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {techStack.map((tech) => (
                  <span key={tech} className="px-3 py-1.5 bg-accent/10 border border-accent/20 rounded-md text-sm font-semibold text-foreground/80">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stat Counters */}
        <div className="grid grid-cols-3 gap-6 mt-16 pt-16 border-t border-border/30">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              ref={stat.ref}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-extrabold text-accent mb-2">
                {stat.count}{stat.suffix}
              </div>
              <p className="text-sm md:text-base text-muted-foreground font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-border/30" data-reveal>
          <p className="text-lg md:text-xl text-foreground/90 leading-relaxed font-medium text-center md:text-left">
            <span className="highlight">"{t("about", "closingText")}"</span>
          </p>
        </div>
      </div>
    </section>
  )
}
