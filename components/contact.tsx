"use client"

import type React from "react"
import { Mail, Github, Linkedin, Instagram, ArrowRight, MapPin } from "lucide-react"
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
    icon: <Mail className="w-5 h-5" />,
    url: "mailto:mautidur34@gmail.com",
    display: "mautidur34@gmail.com",
    description: "Direct & fastest way to reach me",
  },
  {
    platform: "GitHub",
    icon: <Github className="w-5 h-5" />,
    url: "https://github.com/AbiSulfur",
    display: "AbiSulfur",
    description: "See my projects & contributions",
  },
  {
    platform: "LinkedIn",
    icon: <Linkedin className="w-5 h-5" />,
    url: "https://www.linkedin.com/in/abigail-dev/",
    display: "Benedictus Abi",
    description: "Professional network & updates",
  },
  {
    platform: "Instagram",
    icon: <Instagram className="w-5 h-5" />,
    url: "https://www.instagram.com/bened_tri/",
    display: "@bened_tri",
    description: "Creative updates & behind-the-scenes",
  },
]

export default function Contact() {
  const { t } = useLanguage()
  useScrollReveal()

  return (
    <section id="contact" className="relative overflow-hidden border-t border-border/10">
      {/* Subtle background glow */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/[0.04] rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/[0.04] rounded-full blur-3xl" />
      </div>

      <div className="section-padding">
        <div className="max-w-5xl mx-auto">

          {/* ── Closing statement ── */}
          <div className="mb-14 sm:mb-24 md:mb-32" data-reveal>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-4 sm:mb-6">
              {t("contact", "title")}
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.08] sm:leading-[1.05] tracking-tight text-foreground text-balance mb-5 sm:mb-8">
              {t("footer", "closingCta")}
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-xl leading-relaxed mb-6 sm:mb-10">
              {t("contact", "subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="https://wa.me/6287725223486"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 sm:px-8 sm:py-4 bg-accent hover:bg-accent/90 text-accent-foreground rounded-lg font-bold transition-all duration-300 hover:shadow-xl hover:shadow-accent/40 text-base sm:text-lg active:scale-[0.97]"
              >
                WhatsApp
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=mautidur34@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 sm:px-8 sm:py-4 bg-card hover:bg-card/80 text-foreground border border-border rounded-lg font-bold transition-all duration-300 hover:border-accent/50 text-base sm:text-lg shadow-sm active:scale-[0.97]"
              >
                Email
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* ── Separator ── */}
          <div className="border-t border-border/20 mb-10 sm:mb-16" />

          {/* ── Contact links grid ── */}
          <div className="mb-16" data-reveal>
            <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-foreground/40 mb-8">
              {t("contact", "directContact")}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {contactLinks.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target={link.platform !== "Email" ? "_blank" : undefined}
                  rel={link.platform !== "Email" ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-4 p-5 border border-border/20 hover:border-accent/50 rounded-lg bg-card/30 hover:bg-card/60 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors duration-300">
                    {link.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold text-foreground mb-0.5">{link.platform}</p>
                    <p className="text-sm text-accent font-medium truncate">{link.display}</p>
                  </div>
                  <ArrowRight
                    className="w-4 h-4 text-accent opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0"
                    aria-hidden="true"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* ── Meta info ── */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center" data-reveal>
            <div className="flex items-center gap-2">
              <span className="available-dot" />
              <span className="text-sm text-foreground/60">{t("about", "statusText")}</span>
            </div>
            <div className="hidden md:block w-px h-5 bg-border/30" />
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-accent" aria-hidden="true" />
              <span className="text-sm text-foreground/60">{t("contact", "locationDetails")}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
