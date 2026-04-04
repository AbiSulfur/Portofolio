"use client"

import { useState, useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import Link from "next/link"
import { useLanguage } from "@/components/language-provider"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const router = useRouter()
  const pathname = usePathname()
  const { language, setLanguage, t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    if (pathname !== "/") {
      router.push(`/#${id}`)
      setIsMenuOpen(false)
      return
    }
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
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
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled
        ? "bg-background/40 backdrop-blur-xl border-b border-white/10 shadow-xl shadow-black/20"
        : "bg-transparent backdrop-blur-md border-b border-white/5"
        }`}
    >
      <nav className="max-w-6xl mx-auto px-6 md:px-12 py-4 md:py-5 flex items-center justify-between">
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
              className="text-foreground/70 hover:text-accent transition-colors text-sm font-medium relative group"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent to-accent/50 group-hover:w-full transition-all duration-300"></span>
            </button>
          ))}
          <button 
            onClick={toggleLanguage}
            className="text-xs font-bold px-3 py-1 bg-accent/10 text-accent rounded-full border border-accent/20 hover:bg-accent hover:text-background transition-colors"
          >
            {language === 'en' ? 'ID' : 'EN'}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4 md:hidden">
          <button 
            onClick={toggleLanguage}
            className="text-xs font-bold px-2 py-1 bg-accent/10 text-accent rounded-full border border-accent/20"
          >
            {language === 'en' ? 'ID' : 'EN'}
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-foreground hover:text-accent transition-colors"
            aria-label="Toggle menu"
          >
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

      {isMenuOpen && (
        <div className="md:hidden bg-card/30 backdrop-blur-xl border-b border-white/10 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-4 px-6 py-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground/70 hover:text-accent transition-colors text-sm font-medium text-left"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
