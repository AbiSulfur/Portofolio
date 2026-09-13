"use client"

import { useState, useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import Link from "next/link"
import { useLanguage } from "@/components/language-provider"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isClosing, setIsClosing] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const [scrollProgress, setScrollProgress] = useState(0)
  const router = useRouter()
  const pathname = usePathname()
  const { language, setLanguage, t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Scroll progress calculation
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = scrollHeight > 0 ? (window.scrollY / scrollHeight) * 100 : 0
      setScrollProgress(progress)

      // Active section tracking via scroll position
      const sections = ["hero", "services", "projects", "about", "contact"]
      let current = "hero"
      for (const id of sections) {
        const element = document.getElementById(id)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= window.innerHeight / 3) current = id
        }
      }
      setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Lock body scroll when menu is open (keep locked during closing animation too)
  useEffect(() => {
    document.body.style.overflow = (isMenuOpen || isClosing) ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [isMenuOpen, isClosing])

  // Trigger fade-out animation, then actually close
  const closeMenu = () => {
    setIsClosing(true)
    setTimeout(() => {
      setIsMenuOpen(false)
      setIsClosing(false)
    }, 280) // matches animation duration
  }

  const scrollToSection = (id: string) => {
    if (pathname !== "/") {
      router.push(`/#${id}`)
      closeMenu()
      return
    }
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      closeMenu()
    }
  }

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'id' : 'en');
  }

  const navItems = [
    { label: t("nav", "about"), id: "about" },
    { label: t("nav", "services"), id: "services" },
    { label: t("nav", "projects"), id: "projects" },
    { label: t("nav", "contact"), id: "contact" },
  ]

  return (
    <>
      {/* Scroll Progress Bar */}
      <div
        className="scroll-progress-bar"
        style={{ width: `${scrollProgress}%` }}
      />

      <header
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled
          ? "bg-background/40 backdrop-blur-xl border-b border-white/10 shadow-xl shadow-black/20"
          : "bg-transparent backdrop-blur-md border-b border-white/5"
          }`}
      >
        <nav className="max-w-6xl mx-auto px-5 sm:px-6 md:px-12 py-4 md:py-5 flex items-center justify-between">
          <Link
            href="/"
            className="text-xl md:text-2xl font-bold hover:text-accent transition-colors cursor-pointer"
          >
            <span className="text-foreground">Abigail</span>
            <span className="text-accent">.</span>
          </Link>

          <div className="hidden md:flex gap-8 items-center">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`transition-colors text-sm font-medium relative group ${
                  activeSection === item.id
                    ? "text-accent font-bold"
                    : "text-foreground/70 hover:text-accent"
                }`}
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-accent to-accent/50 transition-all duration-300 ${
                    activeSection === item.id ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </button>
            ))}
            <button 
              onClick={toggleLanguage}
              className="text-xs font-bold px-3 py-1 bg-accent/10 text-accent rounded-full border border-accent/20 hover:bg-accent hover:text-background transition-colors"
              aria-label={language === 'en' ? 'Switch to Indonesian' : 'Switch to English'}
            >
              {language === 'en' ? 'ID' : 'EN'}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            <button 
              onClick={toggleLanguage}
              className="text-xs font-bold px-2 py-1 bg-accent/10 text-accent rounded-full border border-accent/20"
              aria-label={language === 'en' ? 'ID - Switch to Indonesian' : 'EN - Switch to English'}
            >
              {language === 'en' ? 'ID' : 'EN'}
            </button>
            <button
              onClick={() => setIsMenuOpen(isMenuOpen ? false : true)}
              className="p-2 -mr-1 text-foreground hover:text-accent transition-colors"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {/* Animated hamburger icon */}
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {/* ── Mobile Menu: full-screen overlay ── */}
      {(isMenuOpen || isClosing) && (
        <div
          className={`fixed inset-0 z-[9999] bg-background flex flex-col md:hidden ${
            isClosing
              ? "animate-out fade-out slide-out-to-top-4 duration-[280ms] ease-in fill-mode-forwards"
              : "animate-in fade-in slide-in-from-top-4 duration-300 ease-out"
          }`}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          {/* Top bar */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-border/20 flex-shrink-0">
            <span className="text-xl font-bold text-foreground">
              Abigail<span className="text-accent">.</span>
            </span>
            <button
              onClick={closeMenu}
              className="p-2 -mr-1 text-foreground/60 hover:text-accent transition-colors rounded-lg"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Nav links — vertically centered */}
          <div className="flex flex-col justify-center flex-1 px-6 gap-0 overflow-y-auto">
            {navItems.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                style={{ animationDelay: isClosing ? "0ms" : `${idx * 50}ms` }}
                className={`text-left py-5 px-2 text-4xl font-extrabold tracking-tight border-b border-border/15 transition-colors duration-200 ${
                  isClosing ? "" : "animate-in fade-in slide-in-from-bottom-2"
                } ${
                  activeSection === item.id
                    ? "text-accent"
                    : "text-foreground hover:text-accent"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Bottom: lang switcher + CTA */}
          <div className="px-6 pb-10 pt-5 border-t border-border/20 flex-shrink-0 space-y-3">
            <button
              onClick={() => { toggleLanguage(); closeMenu() }}
              className="w-full py-3 border border-accent/30 text-accent rounded-xl font-bold text-base hover:bg-accent/10 transition-colors"
            >
              {language === 'en' ? 'Bahasa Indonesia' : 'English'}
            </button>
            <a
              href="https://wa.me/6287725223486"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="block w-full text-center py-4 bg-accent text-accent-foreground rounded-xl font-bold text-lg active:scale-[0.97] transition-transform duration-150"
            >
              Free Consultation
            </a>
          </div>
        </div>
      )}
    </>
  )
}
