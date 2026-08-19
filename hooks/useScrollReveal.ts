"use client"

import { useEffect, useRef } from "react"

/**
 * Custom hook for scroll-reveal animations using IntersectionObserver.
 * Elements with [data-reveal] attribute will fade-up into view.
 * Children with [data-reveal-child] get staggered animation-delay (80ms increments).
 * Respects prefers-reduced-motion.
 */
export function useScrollReveal() {
  const initialized = useRef(false)

  useEffect(() => {
    if (initialized.current) return
    initialized.current = true

    // Respect reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) {
      // Make everything visible immediately
      document.querySelectorAll("[data-reveal]").forEach((el) => {
        el.classList.add("is-visible")
      })
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add stagger delays to children
            const children = entry.target.querySelectorAll("[data-reveal-child]")
            children.forEach((child, index) => {
              ;(child as HTMLElement).style.transitionDelay = `${index * 80}ms`
            })

            entry.target.classList.add("is-visible")
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -40px 0px",
      }
    )

    // Observe all [data-reveal] elements
    document.querySelectorAll("[data-reveal]").forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])
}
