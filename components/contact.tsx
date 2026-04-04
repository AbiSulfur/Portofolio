"use client"

import type React from "react"
import { useState } from "react"
import { FiMail, FiGithub, FiLinkedin, FiInstagram, FiArrowRight, FiCheck, FiMapPin } from "react-icons/fi"
import emailjs from "@emailjs/browser"
import { useLanguage } from "@/components/language-provider"

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
  const [copied, setCopied] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("mautidur34@gmail.com")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage("")

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      time: new Date().toLocaleString(),
    }

    try {
      await emailjs.send(
        "service_uqu36nw",
        "template_6c29hfu",
        templateParams,
        "wDezi6aDDl8508CT2"
      )
      setSubmitMessage(t("contact", "successMessage"))
      setFormData({ name: "", email: "", message: "" })
      setTimeout(() => setSubmitMessage(""), 5000)
    } catch (error) {
      setSubmitMessage(t("contact", "errorMessage"))
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden">
      <div className="section-padding">
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="mb-24 text-center">
            <p className="text-accent font-semibold text-lg mb-4 tracking-wide text-uppercase">{t("contact", "title")}</p>
            <h2 className="section-title mb-8 text-balance">{t("contact", "title")}</h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              {t("contact", "subtitle")}
            </p>
          </div>

          <div className="mb-24">
            <h3 className="text-xl font-semibold text-foreground mb-10 text-center">{t("contact", "directContact")}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {contactLinks.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target={link.platform !== "Email" ? "_blank" : undefined}
                  rel={link.platform !== "Email" ? "noopener noreferrer" : undefined}
                  className="group bg-card/50 backdrop-blur border border-border/30 hover:border-accent/50 rounded-lg p-6 transition-all duration-300 hover:bg-card/70 hover:shadow-lg hover:shadow-accent/10"
                >
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="text-accent text-2xl flex-shrink-0">{link.icon}</div>
                    <FiArrowRight className="w-5 h-5 text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-1 text-base">{link.platform}</h4>
                  <p className="text-sm text-accent font-medium mb-2">{link.display}</p>
                  <p className="text-xs text-muted-foreground">{link.description}</p>
                </a>
              ))}
            </div>
          </div>

          <div className="mb-24 text-center">
            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent/90 text-accent-foreground rounded-lg font-semibold transition-all duration-300 shadow-lg shadow-accent/30 hover:shadow-accent/40 hover:-translate-y-1 text-base"
            >
              {copied ? (
                <>
                  <FiCheck className="w-5 h-5" />
                  Email Copied!
                </>
              ) : (
                <>
                  <FiMail className="w-5 h-5" />
                  {t("contact", "emailMe")}
                </>
              )}
            </button>
          </div>

          <div className="bg-card/50 backdrop-blur border border-border/30 rounded-xl p-10 md:p-14">
            <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">{t("contact", "title")}</h3>

            <form onSubmit={handleFormSubmit} className="max-w-2xl mx-auto space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    {t("contact", "nameLabel")}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    placeholder={t("contact", "namePlaceholder")}
                    className="w-full px-4 py-3 bg-card border border-border/30 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all duration-300"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    {t("contact", "emailLabel")}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    placeholder={t("contact", "emailPlaceholder")}
                    className="w-full px-4 py-3 bg-card border border-border/30 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all duration-300"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  {t("contact", "messageLabel")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleFormChange}
                  placeholder={t("contact", "messagePlaceholder")}
                  rows={6}
                  className="w-full px-4 py-3 bg-card border border-border/30 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all duration-300 resize-none"
                  required
                />
              </div>

              {submitMessage && (
                <div
                  className={`p-4 rounded-lg text-center font-medium transition-all duration-300 ${
                    submitMessage.includes("wrong")
                      ? "bg-destructive/10 text-destructive border border-destructive/30"
                      : "bg-green-500/10 text-green-400 border border-green-500/30"
                  }`}
                >
                  {submitMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-accent hover:bg-accent/90 disabled:bg-accent/50 text-accent-foreground rounded-lg font-semibold transition-all duration-300 shadow-lg shadow-accent/30 hover:shadow-accent/40 disabled:cursor-not-allowed"
              >
                {isSubmitting ? t("contact", "sendingButton") : t("contact", "submitButton")}
              </button>
            </form>
          </div>

          <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-left">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
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
