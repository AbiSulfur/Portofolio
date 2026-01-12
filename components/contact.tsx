"use client"

import type React from "react"
import { useState } from "react"
import { FiMail, FiGithub, FiLinkedin, FiInstagram, FiArrowRight, FiCheck } from "react-icons/fi"
import emailjs from "@emailjs/browser"

interface ContactLink {
  platform: string
  icon: React.ReactNode
  url: string
  display: string
  description: string
}

interface ProjectType {
  id: string
  label: string
  description: string
  icon: React.ReactNode
}

const projectTypes: ProjectType[] = [
  {
    id: "internship",
    label: "Internship Opportunity",
    description: "Looking for talented interns",
    icon: "🎓",
  },
  {
    id: "collaboration",
    label: "Project Collaboration",
    description: "Build something together",
    icon: "🚀",
  },
  {
    id: "feedback",
    label: "Feedback & Mentoring",
    description: "Share insights & guidance",
    icon: "💡",
  },
  {
    id: "just-chat",
    label: "Just Want to Chat",
    description: "Coffee talk or networking",
    icon: "☕",
  },
]

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
  const [selectedProjectType, setSelectedProjectType] = useState<string>("")
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
      project_type: selectedProjectType
        ? projectTypes.find((t) => t.id === selectedProjectType)?.label
        : "Not specified",
    }

    try {
      await emailjs.send(
        "service_uqu36nw",
        "template_6c29hfu",
        templateParams,
        "wDezi6aDDl8508CT2"
      )
      setSubmitMessage("Thanks for reaching out! I'll get back to you soon.")
      setFormData({ name: "", email: "", message: "" })
      setSelectedProjectType("")
      setTimeout(() => setSubmitMessage(""), 5000)
    } catch (error) {
      setSubmitMessage(
        "Something went wrong. Please try again or contact me directly via email."
      )
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
            <p className="text-accent font-semibold text-lg mb-4 tracking-wide">GET IN TOUCH</p>
            <h2 className="section-title mb-8 text-balance">Let's build something simple, useful, and done right</h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              Whether you have an internship opportunity, want to collaborate, or just want to chat—I'm here and excited
              to connect. Let me know what's on your mind.
            </p>
          </div>

          <div className="mb-20">
            <h3 className="text-xl font-semibold text-foreground mb-8 text-center">What brings you here?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {projectTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setSelectedProjectType(type.id)}
                  className={`group p-6 rounded-xl border-2 transition-all duration-300 text-left ${
                    selectedProjectType === type.id
                      ? "border-accent bg-accent/10 shadow-lg shadow-accent/20"
                      : "border-border/30 bg-card/40 hover:border-accent/50 hover:bg-card/60"
                  }`}
                >
                  <div className="text-3xl mb-3">{type.icon}</div>
                  <h4 className="font-semibold text-foreground mb-1 text-base">{type.label}</h4>
                  <p className="text-sm text-muted-foreground">{type.description}</p>
                </button>
              ))}
            </div>
          </div>

          <div className="mb-24">
            <h3 className="text-xl font-semibold text-foreground mb-10 text-center">Direct ways to reach me</h3>
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
            <p className="text-sm text-muted-foreground mb-6">Prefer quick action?</p>
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
                  Copy Email Address
                </>
              )}
            </button>
          </div>

          <div className="bg-card/50 backdrop-blur border border-border/30 rounded-xl p-10 md:p-14">
            <h3 className="text-2xl font-semibold text-foreground mb-2 text-center">Send me a message</h3>
            <p className="text-center text-muted-foreground mb-10">
              Or fill out the form below if you prefer a more detailed conversation starter
            </p>

            <form onSubmit={handleFormSubmit} className="max-w-2xl mx-auto space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    placeholder="Abigail"
                    className="w-full px-4 py-3 bg-card border border-border/30 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all duration-300"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 bg-card border border-border/30 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all duration-300"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleFormChange}
                  placeholder="Tell me about your project, opportunity, or just say hi..."
                  rows={6}
                  className="w-full px-4 py-3 bg-card border border-border/30 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all duration-300 resize-none"
                  required
                />
              </div>

              {selectedProjectType && (
                <div className="p-4 bg-accent/5 border border-accent/20 rounded-lg">
                  <p className="text-sm text-foreground">
                    <span className="font-semibold">You selected:</span>{" "}
                    <span className="text-accent">{projectTypes.find((t) => t.id === selectedProjectType)?.label}</span>
                  </p>
                </div>
              )}

              {submitMessage && (
                <div
                  className={`p-4 rounded-lg text-center font-medium transition-all duration-300 ${
                    submitMessage.includes("Thanks")
                      ? "bg-green-500/10 text-green-400 border border-green-500/30"
                      : "bg-destructive/10 text-destructive border border-destructive/30"
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
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-left">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-sm text-foreground/70">Available for opportunities</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-border/30"></div>
            <div className="text-sm text-foreground/70">
              Usually responds within <span className="text-accent font-semibold">24 hours</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
