"use client"

import { useEffect, useRef } from "react"
import { useLanguage } from "@/components/language-provider"
import { Smartphone, Zap, Gem } from "lucide-react"

function TypewriterText({ part1, part2, part3 }: { part1: string; part2: string; part3: string }) {
  const p1Ref = useRef<HTMLSpanElement>(null)
  const p2Ref = useRef<HTMLSpanElement>(null)
  const p3Ref = useRef<HTMLSpanElement>(null)
  const cursorRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) {
      if (p1Ref.current) p1Ref.current.textContent = part1 + " "
      if (p2Ref.current) p2Ref.current.textContent = part2 + " "
      if (p3Ref.current) p3Ref.current.textContent = part3
      if (cursorRef.current) cursorRef.current.style.display = "none"
      return
    }

    const fullText = `${part1} ${part2} ${part3}`
    const p1End = part1.length + 1
    const p2End = p1End + part2.length + 1

    let index = 0
    let lastTime = 0
    let animationFrameId: number
    let timeoutId: NodeJS.Timeout

    const renderText = (currentLen: number) => {
      const vPart1 = fullText.slice(0, Math.min(currentLen, part1.length))
      const vPart2 = currentLen > p1End ? fullText.slice(p1End, Math.min(currentLen, p1End + part2.length)) : ""
      const vPart3 = currentLen > p2End ? fullText.slice(p2End, currentLen) : ""
      if (p1Ref.current) p1Ref.current.textContent = vPart1 + (currentLen >= part1.length ? " " : "")
      if (p2Ref.current) p2Ref.current.textContent = vPart2 + (currentLen >= p1End + part2.length ? " " : "")
      if (p3Ref.current) p3Ref.current.textContent = vPart3
      if (currentLen >= fullText.length) {
        setTimeout(() => { if (cursorRef.current) cursorRef.current.style.display = "none" }, 1500)
      }
    }

    const animate = (timestamp: number) => {
      if (timestamp - lastTime >= 55) { lastTime = timestamp; index++; renderText(index) }
      if (index < fullText.length) animationFrameId = requestAnimationFrame(animate)
    }

    if (p1Ref.current) p1Ref.current.textContent = ""
    if (p2Ref.current) p2Ref.current.textContent = ""
    if (p3Ref.current) p3Ref.current.textContent = ""
    if (cursorRef.current) cursorRef.current.style.display = "inline-block"

    timeoutId = setTimeout(() => {
      lastTime = document.timeline ? (document.timeline.currentTime as number) : performance.now()
      animationFrameId = requestAnimationFrame(animate)
    }, 1500)

    return () => { clearTimeout(timeoutId); if (animationFrameId) cancelAnimationFrame(animationFrameId) }
  }, [part1, part2, part3])

  return (
    <div className="w-full text-center">
      <span ref={p1Ref}></span>
      <span ref={p2Ref} className="gradient-text"></span>
      <span ref={p3Ref}></span>
      <span ref={cursorRef} className="typewriter-cursor"></span>
    </div>
  )
}

export default function Hero() {
  const { t } = useLanguage()
  const heroRef = useRef<HTMLElement>(null)

  const part1 = t("hero", "headlinePart1")
  const part2 = t("hero", "headlinePart2")
  const part3 = t("hero", "headlinePart3")

  const badges = [
    { text: t("hero", "badge1"), icon: <Smartphone className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> },
    { text: t("hero", "badge2"), icon: <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> },
    { text: t("hero", "badge3"), icon: <Gem className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> },
  ]

  // Parallax only on pointer (non-touch) devices
  useEffect(() => {
    const section = heroRef.current
    if (!section) return
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) return
    if (window.matchMedia("(pointer: coarse)").matches) return

    const blobA = section.querySelector<HTMLElement>("[data-blob='a']")
    const blobB = section.querySelector<HTMLElement>("[data-blob='b']")

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth: W, innerHeight: H } = window
      const rx = (e.clientX / W - 0.5) * 2
      const ry = (e.clientY / H - 0.5) * 2
      if (blobA) blobA.style.transform = `translate(${rx * -18}px, ${ry * -14}px)`
      if (blobB) blobB.style.transform = `translate(${rx * 14}px, ${ry * 18}px)`
    }

    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section
      ref={heroRef}
      id="hero"
      className="min-h-[100svh] flex flex-col items-center justify-center relative overflow-hidden px-5 sm:px-6 md:px-12 pt-20 pb-10 sm:pt-24 sm:pb-12 md:pt-24 md:pb-14"
    >
      {/* Dot grid */}
      <div className="hero-dot-grid absolute inset-0 pointer-events-none" aria-hidden="true" />

      {/* Blobs — smaller on mobile */}
      <div
        data-blob="a"
        className="hero-blob-a absolute top-[10%] left-[-5%] w-[260px] h-[260px] sm:w-[360px] sm:h-[360px] md:w-[480px] md:h-[480px] rounded-full bg-accent/[0.07] blur-[70px] md:blur-[100px] pointer-events-none transition-transform duration-700 ease-out"
        aria-hidden="true"
      />
      <div
        data-blob="b"
        className="hero-blob-b absolute bottom-[5%] right-[-5%] w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] md:w-[560px] md:h-[560px] rounded-full bg-accent/[0.06] blur-[80px] md:blur-[120px] pointer-events-none transition-transform duration-700 ease-out"
        aria-hidden="true"
      />
      <div
        className="hero-blob-c absolute top-[60%] left-[50%] w-[180px] h-[180px] md:w-[300px] md:h-[300px] rounded-full bg-accent/[0.04] blur-[60px] md:blur-[80px] pointer-events-none"
        aria-hidden="true"
      />

      {/* Main content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center text-center gap-4 sm:gap-5">

        {/* Available badge */}
        <div className="flex items-center gap-2">
          <span className="available-dot" />
          <span className="text-[10px] sm:text-xs font-semibold tracking-[0.18em] uppercase text-foreground/50">
            {t("hero", "available")}
          </span>
        </div>

        {/* Headline — mobile-first sizing */}
        <h1 className="text-[2.35rem] leading-[1.08] sm:text-5xl sm:leading-[1.05] md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-extrabold tracking-tight relative w-full">
          <div className="opacity-0 pointer-events-none select-none" aria-hidden="true">
            {part1} <span className="gradient-text">{part2}</span> {part3}
          </div>
          <div className="absolute inset-0 flex flex-col justify-center items-center">
            <TypewriterText part1={part1} part2={part2} part3={part3} />
          </div>
        </h1>

        {/* Accent line */}
        <div className="w-12 sm:w-20 h-0.5 bg-gradient-to-r from-accent/30 via-accent to-accent/30 rounded-full" />

        {/* Subtitle */}
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-[280px] sm:max-w-lg md:max-w-2xl">
          {t("hero", "subtitle")}
        </p>

        {/* CTA — full-width stacked on mobile */}
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto mt-1">
          <a
            href="https://wa.me/6287725223486"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-7 py-3 md:py-3.5 bg-accent hover:bg-accent/90 text-accent-foreground rounded-lg font-bold transition-all duration-300 hover:shadow-xl hover:shadow-accent/40 text-sm sm:text-base md:text-lg text-center active:scale-[0.97]"
          >
            {t("hero", "ctaPrimary")}
          </a>
          <button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="w-full sm:w-auto px-7 py-3 md:py-3.5 bg-card hover:bg-card/80 text-foreground border border-border rounded-lg font-bold transition-all duration-300 hover:border-accent/50 text-sm sm:text-base md:text-lg text-center shadow-sm active:scale-[0.97]"
          >
            {t("hero", "ctaSecondary")}
          </button>
        </div>

        {/* Trust badges — 3-col grid on mobile, flex row on sm+ */}
        <div className="grid grid-cols-3 sm:flex sm:flex-row gap-x-3 sm:gap-x-6 md:gap-x-8 gap-y-2 opacity-60 w-full sm:w-auto pt-0.5">
          {badges.map((badge, idx) => (
            <div key={idx} className="flex items-center justify-center gap-1 sm:gap-2">
              <span className="text-accent flex-shrink-0">{badge.icon}</span>
              <span className="text-[9px] sm:text-xs font-semibold tracking-wider uppercase text-foreground/70 leading-tight">
                {badge.text}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => document.getElementById("manifesto")?.scrollIntoView({ behavior: "smooth" })}
        className="absolute bottom-3 sm:bottom-5 md:bottom-6 left-1/2 -translate-x-1/2 z-10 scroll-indicator flex flex-col items-center gap-0.5 text-foreground/30 hover:text-accent transition-colors duration-300"
        aria-label="Scroll down"
      >
        <span className="text-[9px] sm:text-xs font-medium tracking-[0.15em] uppercase">Scroll</span>
        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </section>
  )
}
