"use client"

import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"
import Link from "next/link"
import { useLanguage } from "@/components/language-provider"

const currentYear = new Date().getFullYear()

export default function Footer() {
  const { t } = useLanguage()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-card/30 border-t border-border/20 text-foreground/70 py-12">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-2">
              Abigail<span className="text-accent">.</span>
            </h3>
            <p className="text-sm leading-relaxed">
              {t("footer", "description")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-accent mb-4">{t("footer", "quickLinks")}</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: t("nav", "about"), id: "about" },
                { label: t("nav", "services"), id: "services" },
                { label: t("nav", "projects"), id: "projects" },
                { label: t("nav", "contact"), id: "contact" },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => document.getElementById(link.id)?.scrollIntoView({ behavior: "smooth" })}
                    className="hover:text-accent transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-accent mb-4">{t("footer", "connect")}</h4>
            <div className="flex gap-4">
              {[
                { name: "GitHub", url: "https://github.com/AbiSulfur", icon: FaGithub },
                { name: "LinkedIn", url: "https://www.linkedin.com/in/abigail-dev/", icon: FaLinkedin },
                { name: "Instagram", url: "https://www.instagram.com/bened_tri/", icon: FaInstagram },
              ].map((social) => {
                const IconComponent = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/60 hover:text-accent hover:scale-110 transition-all duration-300"
                    title={social.name}
                  >
                    <IconComponent size={20} />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border/20 pt-8">
          {/* Bottom Info */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-foreground/60">
            <p>© {currentYear} Benedictus Abigail Triwiyatno. {t("footer", "copyright")}</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-accent transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-accent transition-colors">
                Terms
              </Link>
              <button onClick={scrollToTop} className="hover:text-accent transition-colors">
                Back to Top
              </button>
            </div>
          </div>

          {/* Building Info */}
          <div className="mt-6 pt-6 border-t border-border/20 text-center text-xs text-foreground/50">
            <p>
              Built with <span className="text-accent">Next.js</span>, <span className="text-accent">Tailwind CSS</span>,{" "}
              and <span className="text-accent">React</span>.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
