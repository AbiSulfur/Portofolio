"use client"

import { useRef, useCallback } from "react"
import { useLanguage } from "@/components/language-provider"
import { useScrollReveal } from "@/hooks/useScrollReveal"
import Image from "next/image"
import { ArrowUpRight, Github } from "lucide-react"

interface ProjectData {
  id: number
  title: string
  description: {
    en: string
    id: string
  }
  technologies: string[]
  type: string
  imageUrl: string
  liveUrl?: string
  githubUrl?: string
  isInternal?: boolean
}

const projects: ProjectData[] = [
  {
    id: 1,
    title: "AgriNusa",
    description: {
      en: "Integrated smart farming and agribusiness platform that solves production inefficiency and long supply chains. Combines IoT, AI, and P2P Lending with an Escrow system to <strong>reduce crop failure risks and cut unprofitable distribution chains</strong>.",
      id: "Platform smart farming dan agribisnis terintegrasi yang menyelesaikan masalah inefisiensi produksi dan rantai pasok panjang. Menggabungkan IoT, AI, dan P2P Lending dengan sistem Escrow untuk <strong>mengurangi risiko gagal panen dan memotong rantai distribusi yang merugikan</strong>.",
    },
    technologies: ["Laravel 11", "Livewire 3", "Alpine.js", "Tailwind CSS", "MySQL"],
    type: "Full Stack",
    imageUrl: "/Porto7.webp",
    githubUrl: "https://github.com/SukaMCD/Agrinusa",
  },
  {
    id: 2,
    title: "Aethel",
    description: {
      en: "A futuristic company profile site that solves digital credibility gaps for tech agencies. Applies Human-First Engineering philosophy to <strong>minimize cognitive load</strong> and <strong>increase the conversion rate</strong>.",
      id: "Situs profil perusahaan futuristik yang memecahkan masalah kesenjangan kredibilitas digital. Menerapkan filosofi Human-First Engineering untuk <strong>meminimalisir hambatan kognitif</strong>.",
    },
    technologies: ["HTML5", "Vanilla CSS3", "Vanilla JS"],
    type: "Frontend",
    imageUrl: "/Porto8.webp",
    liveUrl: "https://aethel.site.je/?i=1",
    githubUrl: "https://github.com/AbiSulfur/Web-Design-Competition",
  },
  {
    id: 3,
    title: "Stockwise SaaS",
    description: {
      en: "A professional, fast, and SEO-optimized SaaS landing page built to <strong>gather early signups before product launch</strong>.",
      id: "Landing page SaaS profesional yang cepat dan optimal untuk SEO, dibangun untuk <strong>mengumpulkan pendaftaran awal sebelum peluncuran produk</strong>.",
    },
    technologies: ["HTML5", "Tailwind CSS", "JavaScript"],
    type: "Frontend",
    imageUrl: "/Porto5.webp",
    githubUrl: "https://github.com/AbiSulfur/Stockwise",
  },
  {
    id: 4,
    title: "Leafly Tea",
    description: {
      en: "An integrated e-commerce system that digitizes traditional sales processes to <strong>reduce operational costs</strong> and <strong>open new online revenue channels 24/7</strong>.",
      id: "Sistem e-commerce terintegrasi yang mendigitalisasi proses penjualan tradisional untuk <strong>mengurangi biaya operasional</strong> dan <strong>membuka saluran pendapatan baru secara online 24/7</strong>.",
    },
    technologies: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
    type: "Full Stack",
    imageUrl: "/Porto2.webp",
    liveUrl: "https://budiluhurdigital.com/project/10RPL/LeaflyTea/",
    githubUrl: "https://github.com/AbiSulfur/Leafly",
  },
]

function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) return

    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = ((y - centerY) / centerY) * -5
    const rotateY = ((x - centerX) / centerX) * 5

    cardRef.current.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`

    const img = cardRef.current.querySelector("[data-parallax-img]") as HTMLElement | null
    if (img) {
      img.style.transform = `scale(1.06) translateX(${rotateY * -0.7}px) translateY(${rotateX * 0.7}px)`
    }
  }, [])

  const handleMouseLeave = useCallback(() => {
    if (!cardRef.current) return
    cardRef.current.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg)"
    const img = cardRef.current.querySelector("[data-parallax-img]") as HTMLElement | null
    if (img) img.style.transform = "scale(1) translateX(0px) translateY(0px)"
  }, [])

  return (
    <div
      ref={cardRef}
      className={`tilt-card ${className || ""}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  )
}

function ProjectCard({
  project,
  language,
  t,
  layout = "standard",
}: {
  project: ProjectData
  language: "en" | "id"
  t: (section: string, key: string) => string
  layout?: "featured" | "standard" | "wide"
}) {
  const imageHeight = layout === "featured" ? "h-72 md:h-full" : layout === "wide" ? "h-64" : "h-52"

  return (
    <TiltCard className="group relative overflow-hidden border border-border/20 hover:border-accent/40 bg-card/40 backdrop-blur-sm transition-all duration-500 hover:shadow-2xl hover:shadow-accent/10 flex flex-col">
      {/* Project number */}
      <span className="absolute top-4 right-4 text-xs font-bold tracking-widest text-foreground/20 z-10 select-none">
        {String(project.id).padStart(2, "0")}
      </span>

      {/* Image area */}
      <div className={`relative ${imageHeight} overflow-hidden flex-shrink-0 bg-gradient-to-br from-accent/10 to-background`}>
        <Image
          src={project.imageUrl || "/placeholder.svg"}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          data-parallax-img
        />
        {/* Hover overlay */}
        {project.liveUrl && project.liveUrl !== "#" ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 bg-accent/85 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
          >
            <span className="flex items-center gap-2 text-accent-foreground font-bold text-lg">
              {t("projects", "viewProject")}
              <ArrowUpRight className="w-5 h-5" aria-hidden="true" />
            </span>
          </a>
        ) : (
          <div className="absolute inset-0 bg-accent/85 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
            <span className="flex items-center gap-2 text-accent-foreground font-bold text-lg">
              {project.title}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 md:p-7 flex flex-col flex-grow">
        <div className="flex items-start gap-3 mb-3">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-foreground mb-0.5">{project.title}</h3>
            <p className="text-xs font-bold uppercase tracking-wider text-accent/80">{project.type}</p>
          </div>
        </div>

        <div
          className="text-sm text-foreground/70 leading-relaxed mb-5 flex-grow"
          dangerouslySetInnerHTML={{ __html: project.description[language] }}
        />

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs font-semibold bg-accent/10 text-accent px-2 py-0.5 rounded border border-accent/20"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3 pt-4 border-t border-border/20">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-semibold text-foreground/70 hover:text-accent transition-colors duration-200"
            >
              <Github className="w-4 h-4" aria-hidden="true" />
              {t("projects", "viewCode")}
            </a>
          )}
          {project.liveUrl && project.liveUrl !== "#" && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-semibold text-accent hover:gap-2 transition-all duration-200 ml-auto"
            >
              {t("projects", "liveDemo")}
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </TiltCard>
  )
}

export default function Projects() {
  const { language, t } = useLanguage()
  useScrollReveal()

  const [featured, ...rest] = projects
  const [p2, p3, p4] = rest

  return (
    <section id="projects" className="section-padding bg-card/20 border-t border-border/10">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-4" data-reveal>
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-3">
              {t("projects", "title")}
            </p>
            <h2 className="section-title">{t("projects", "title")}</h2>
          </div>
          <p className="section-subtitle max-w-xs md:text-right">
            {t("projects", "subtitle")}
          </p>
        </div>

        {/* ── Row 1: Featured full-width split layout ── */}
        <div className="mb-4 md:mb-6" data-reveal>
          <div className="project-featured-grid rounded-xl overflow-hidden border border-border/20 hover:border-accent/40 transition-colors duration-300">
            {/* Left: image */}
            <div className="relative h-72 md:h-[420px] overflow-hidden bg-gradient-to-br from-accent/10 to-background group">
              <Image
                src={featured.imageUrl}
                alt={featured.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {featured.liveUrl && (
                <a
                  href={featured.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 bg-accent/85 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                >
                  <span className="flex items-center gap-2 text-accent-foreground font-bold text-lg">
                    {t("projects", "viewProject")}
                    <ArrowUpRight className="w-5 h-5" />
                  </span>
                </a>
              )}
            </div>

            {/* Right: content */}
            <div className="flex flex-col justify-between p-8 md:p-10 bg-card/40">
              <div>
                <span className="text-xs font-bold tracking-widest text-foreground/25 select-none">
                  {String(featured.id).padStart(2, "0")}
                </span>
                <h3 className="text-3xl md:text-4xl font-extrabold text-foreground mt-2 mb-1">
                  {featured.title}
                </h3>
                <p className="text-xs font-bold uppercase tracking-wider text-accent/80 mb-5">
                  {featured.type}
                </p>
                <div
                  className="text-foreground/70 leading-relaxed mb-6"
                  dangerouslySetInnerHTML={{ __html: featured.description[language] }}
                />
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {featured.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-semibold bg-accent/10 text-accent px-2 py-0.5 rounded border border-accent/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-4 pt-5 border-t border-border/20">
                {featured.githubUrl && (
                  <a
                    href={featured.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm font-semibold text-foreground/70 hover:text-accent transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    {t("projects", "viewCode")}
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* ── Row 2: 2-col grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6" data-reveal>
          <ProjectCard project={p2} language={language} t={t} />
          <ProjectCard project={p3} language={language} t={t} />
        </div>

        {/* ── Row 3: Last project wide ── */}
        <div data-reveal>
          <ProjectCard project={p4} language={language} t={t} layout="wide" />
        </div>

        {/* Mid-funnel CTA */}
        <div className="mt-20 relative overflow-hidden rounded-xl border border-accent/20 bg-accent/5 p-10 md:p-16 text-center" data-reveal>
          {/* Decorative grid */}
          <div className="hero-dot-grid absolute inset-0 opacity-50 pointer-events-none" aria-hidden="true" />
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-foreground/90 leading-relaxed max-w-2xl mx-auto">
              {t("projects", "ctaText")}
            </h3>
            <a
              href="https://wa.me/6287725223486"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent/90 text-accent-foreground rounded-lg font-bold transition-all duration-300 hover:shadow-xl hover:shadow-accent/40 text-lg hover:-translate-y-1"
            >
              {t("projects", "ctaButton")}
              <ArrowUpRight className="w-5 h-5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
