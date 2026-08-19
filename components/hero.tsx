"use client"

import { useState, useEffect, useRef } from "react"
import { useLanguage } from "@/components/language-provider"

export default function Hero() {
  const { t } = useLanguage()

  // Typewriter state
  const fullText = `${t("hero", "headlinePart1")} ${t("hero", "headlinePart2")} ${t("hero", "headlinePart3")}`
  const [displayedText, setDisplayedText] = useState("")
  const [isTypingDone, setIsTypingDone] = useState(false)
  const [showCursor, setShowCursor] = useState(true)
  const hasTyped = useRef(false)

  useEffect(() => {
    // Respect reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion || hasTyped.current) {
      setDisplayedText(fullText)
      setIsTypingDone(true)
      setShowCursor(false)
      return
    }

    let interval: NodeJS.Timeout
    // Delay typewriter to improve Lighthouse TBT (Time to Interactive)
    const startDelay = setTimeout(() => {
      hasTyped.current = true
      let index = 0
      interval = setInterval(() => {
        setDisplayedText(fullText.slice(0, index + 1))
        index++
        if (index >= fullText.length) {
          clearInterval(interval)
          setIsTypingDone(true)
          // Hide cursor 1.5s after typing finishes
          setTimeout(() => setShowCursor(false), 1500)
        }
      }, 55)
    }, 3500)

    return () => {
      clearTimeout(startDelay)
      if (interval) clearInterval(interval)
    }
  }, [fullText])

  // Split displayed text into parts for gradient styling
  const part1 = t("hero", "headlinePart1")
  const part2 = t("hero", "headlinePart2")
  const part3 = t("hero", "headlinePart3")

  const renderTypedText = () => {
    const p1End = part1.length + 1 // +1 for the space
    const p2End = p1End + part2.length + 1

    const visiblePart1 = displayedText.slice(0, Math.min(displayedText.length, part1.length))
    const visiblePart2 = displayedText.length > p1End
      ? displayedText.slice(p1End, Math.min(displayedText.length, p1End + part2.length))
      : ""
    const visiblePart3 = displayedText.length > p2End
      ? displayedText.slice(p2End)
      : ""

    return (
      <>
        {visiblePart1}
        {displayedText.length >= part1.length && " "}
        {visiblePart2 && <span className="gradient-text">{visiblePart2}</span>}
        {displayedText.length >= p1End + part2.length && " "}
        {visiblePart3}
        {showCursor && <span className="typewriter-cursor" />}
      </>
    )
  }

  const badges = [
    { text: t("hero", "badge1"), icon: "📱" },
    { text: t("hero", "badge2"), icon: "⚡" },
    { text: t("hero", "badge3"), icon: "💎" },
  ]

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-32 pb-16 px-6 md:px-12 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/[0.08] rounded-full blur-[120px] pointer-events-none"></div>

      <div className="w-full max-w-4xl mx-auto flex flex-col items-center text-center relative z-10">
        {/* Available Badge */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <span className="available-dot"></span>
          <span className="text-sm font-medium text-foreground/70 tracking-wide">
            {t("hero", "available")}
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight tracking-tight relative">
          {/* Invisible full text for perfect CLS layout */}
          <div className="opacity-0 pointer-events-none select-none" aria-hidden="true">
            {part1} <span className="gradient-text">{part2}</span> {part3}
          </div>
          {/* Visible typing text overlaid exactly on top */}
          <div className="absolute inset-0 flex flex-col justify-center items-center">
            <div className="w-full text-center">
              {renderTypedText()}
            </div>
          </div>
        </h1>

        <div className="w-16 h-1 bg-gradient-to-r from-accent via-accent/70 to-accent/30 rounded-full mx-auto mb-6"></div>

        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10">
          {t("hero", "subtitle")}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12 w-full sm:w-auto">
          <a
            href="https://wa.me/6287725223486"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-accent hover:bg-accent/90 text-accent-foreground rounded-lg font-bold transition-all duration-300 hover:shadow-xl hover:shadow-accent/40 text-base sm:text-lg text-center hover:-translate-y-1"
          >
            {t("hero", "ctaPrimary")}
          </a>
          <button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-4 bg-card hover:bg-card/80 text-foreground border border-border rounded-lg font-bold transition-all duration-300 hover:border-accent/50 text-base sm:text-lg text-center shadow-sm"
          >
            {t("hero", "ctaSecondary")}
          </button>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 opacity-70">
          {badges.map((badge, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <span className="text-lg">{badge.icon}</span>
              <span className="text-sm font-semibold text-foreground/70 tracking-wide">
                {badge.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
