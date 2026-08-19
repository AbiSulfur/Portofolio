"use client"

import type React from "react"
import { useState } from "react"
import { FiMail, FiGithub, FiLinkedin, FiInstagram, FiArrowRight, FiCheck, FiMapPin } from "react-icons/fi"
import { useLanguage } from "@/components/language-provider"
import { useScrollReveal } from "@/hooks/useScrollReveal"

interface ContactLink {
  platform: string
  icon: React.ReactNode
  url: string
  display: string
  description: string
}

const contactLinks: ContactLink[] = [
  {
    platform: "Email",
    icon: <FiMail className="w-6 h-6" />,
    url: "mailto:mautidur34@gmail.com",
    display: "mautidur34@gmail.com",
    description: "Direct & fastest way to reach me",
  },
  {
    platform: "GitHub",
    icon: <FiGithub className="w-6 h-6" />,
    url: "https://github.com/AbiSulfur",
    display: "AbiSulfur",
    description: "See my projects & contributions",
  },
  {
    platform: "LinkedIn",
    icon: <FiLinkedin className="w-6 h-6" />,
    url: "https://www.linkedin.com/in/abigail-dev/",
    display: "Benedictus Abi",
    description: "Professional network & updates",
  },
  {
    platform: "Instagram",
    icon: <FiInstagram className="w-6 h-6" />,
    url: "https://www.instagram.com/bened_tri/",
    display: "@bened_tri",
    description: "Creative updates & behind-the-scenes",
  },
]

export default function Contact() {
  const { t } = useLanguage()
  useScrollReveal()

  const [copied, setCopied] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("mautidur34@gmail.com")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" className="relative overflow-hidden">
      <div className="section-padding">
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="mb-24 text-center" data-reveal>
            <p className="text-accent font-semibold text-lg mb-4 tracking-wide">{t("contact", "title")}</p>
            <h2 className="section-title mb-8 text-balance">{t("contact", "title")}</h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              {t("contact", "subtitle")}
            </p>
          </div>

          <div className="mb-24" data-reveal>
            <h3 className="text-xl font-semibold text-foreground mb-10 text-center">{t("contact", "directContact")}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {contactLinks.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target={link.platform !== "Email" ? "_blank" : undefined}
                  rel={link.platform !== "Email" ? "noopener noreferrer" : undefined}
                  className="group bg-card/50 backdrop-blur border border-border/30 hover:border-accent/50 rounded-lg p-6 transition-all duration-300 hover:bg-card/70 hover:shadow-lg hover:shadow-accent/10 hover:-translate-y-1"
                >
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="text-accent text-2xl flex-shrink-0">{link.icon}</div>
                    <FiArrowRight className="w-5 h-5 text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-1 text-base">{link.platform}</h4>
                  {/* Animated underline on email display */}
                  <p className={`text-sm text-accent font-medium mb-2 ${link.platform === "Email" ? "animated-underline" : ""}`}>
                    {link.display}
                  </p>
                  <p className="text-xs text-muted-foreground">{link.description}</p>
                </a>
              ))}
            </div>
          </div>



          <div className="flex flex-col items-center text-center bg-card/50 backdrop-blur border border-border/30 rounded-xl p-10 md:p-14 mb-16" data-reveal>
            <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-6 max-w-3xl leading-tight text-balance">
              {t("footer", "closingCta")}
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl">
              {t("footer", "closingContact")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a
                href="https://wa.me/6287725223486"
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-4 bg-accent hover:bg-accent/90 text-accent-foreground rounded-lg font-bold transition-all duration-300 hover:shadow-xl hover:shadow-accent/40 text-lg sm:text-xl flex items-center justify-center gap-2 hover:-translate-y-1"
              >
                WhatsApp
              </a>
              <button
                onClick={handleCopyEmail}
                className="px-10 py-4 bg-card hover:bg-card/80 text-foreground border border-border rounded-lg font-bold transition-all duration-300 hover:border-accent/50 text-lg sm:text-xl shadow-sm flex items-center justify-center gap-2"
              >
                {copied ? <><FiCheck className="w-5 h-5" /> Copied!</> : "Email"}
              </button>
            </div>
          </div>

          <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-left" data-reveal>
            <div className="flex items-center gap-3">
              <div className="available-dot"></div>
              <span className="text-sm text-foreground/70">{t("about", "statusText")}</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-border/30"></div>
            <div className="flex items-center gap-3">
              <FiMapPin className="text-accent" />
              <span className="text-sm text-foreground/70">{t("contact", "locationDetails")}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
