"use client"

import { useState, useEffect } from "react"
import { Github, Linkedin, Instagram, ChevronUp } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/components/language-provider"

const currentYear = new Date().getFullYear()

export default function Footer() {
  const { t } = useLanguage()
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 300)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" })

  const navLinks = [
    { label: t("nav", "about"), id: "about" },
    { label: t("nav", "services"), id: "services" },
    { label: t("nav", "projects"), id: "projects" },
    { label: t("nav", "contact"), id: "contact" },
  ]

  const socialLinks = [
    { name: "GitHub", url: "https://github.com/AbiSulfur", icon: <Github className="w-5 h-5" aria-hidden="true" /> },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/abigail-dev/", icon: <Linkedin className="w-5 h-5" aria-hidden="true" /> },
    { name: "Instagram", url: "https://www.instagram.com/bened_tri/", icon: <Instagram className="w-5 h-5" aria-hidden="true" /> },
  ]

  return (
    <>
      <footer className="border-t border-border/20 bg-card/20 pt-16 pb-10">
        <div className="max-w-5xl mx-auto px-6 md:px-12">

          {/* Top row: brand + nav */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10 mb-12">
            {/* Brand */}
            <div className="flex-shrink-0">
              <h3 className="text-xl font-extrabold text-foreground mb-2 tracking-tight">
                Abigail<span className="text-accent">.</span>
              </h3>
              <p className="text-sm text-foreground/50 max-w-xs leading-relaxed">
                {t("footer", "description")}
              </p>
            </div>

            {/* Nav + Social — 2-col grid on mobile */}
            <div className="grid grid-cols-2 sm:flex sm:flex-row gap-8 sm:gap-10">
              {/* Quick links */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-4">
                  {t("footer", "quickLinks")}
                </h4>
                <ul className="space-y-2">
                  {navLinks.map((link) => (
                    <li key={link.id}>
                      <button
                        onClick={() => document.getElementById(link.id)?.scrollIntoView({ behavior: "smooth" })}
                        className="text-sm text-foreground/55 hover:text-accent transition-colors duration-200"
                      >
                        {link.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Social */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-4">
                  {t("footer", "connect")}
                </h4>
                <div className="flex flex-col gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      className="flex items-center gap-2 text-sm text-foreground/55 hover:text-accent transition-colors duration-200"
                    >
                      {social.icon}
                      {social.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom row */}
          <div className="border-t border-border/20 pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs text-foreground/40">
            <p>© {currentYear} Benedictus Abigail Triwiyatno. {t("footer", "copyright")}</p>
            <div className="flex items-center gap-5">
              <Link href="/privacy" className="hover:text-accent transition-colors">Privacy</Link>
              <Link href="/terms" className="hover:text-accent transition-colors">Terms</Link>
              <span>
                Built with{" "}
                <span className="text-accent">Next.js</span> ·{" "}
                <span className="text-accent">Tailwind</span>
              </span>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to top */}
      <button
        onClick={scrollToTop}
        className={`back-to-top ${showBackToTop ? "is-visible" : ""}`}
        aria-label="Back to top"
      >
        <ChevronUp className="w-5 h-5" aria-hidden="true" />
      </button>
    </>
  )
}
