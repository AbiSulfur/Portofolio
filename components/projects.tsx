"use client"

import { useRef, useCallback } from "react"
import { useLanguage } from "@/components/language-provider"
import { useScrollReveal } from "@/hooks/useScrollReveal"
import Image from "next/image"

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
  learnings: {
    en: string[]
    id: string[]
  }
}

const projects: ProjectData[] = [
  {
    id: 1,
    title: "AgriNusa",
    description: {
      en: "Integrated smart farming and agribusiness platform that solves production inefficiency and long supply chains. Combines IoT, AI, and P2P Lending with an Escrow system to <strong>reduce crop failure risks and cut unprofitable distribution chains</strong>.",
      id: "Platform smart farming dan agribisnis terintegrasi yang menyelesaikan masalah inefisiensi produksi dan rantai pasok panjang. Menggabungkan IoT, AI, dan P2P Lending dengan sistem Escrow untuk <strong>mengurangi risiko gagal panen dan memotong rantai distribusi yang merugikan</strong>."
    },
    technologies: ["Laravel 11", "Livewire 3", "Alpine.js", "Tailwind CSS", "MySQL"],
    type: "Full Stack",
    imageUrl: "/Porto7.webp",
    githubUrl: "https://github.com/SukaMCD/Agrinusa",
    learnings: {
      en: ["Dynamic Multi-Role Architecture (RBAC)", "Escrow Financial System", "Async Background Processing", "IoT Data Automation"],
      id: ["Arsitektur Multi-Role Dinamis (RBAC)", "Sistem Finansial Escrow pada Bursa Lelang", "Pemrosesan Asinkron dengan Job Queues", "Pengolahan Data IoT & Automasi Logbook"]
    }
  },
  {
    id: 2,
    title: "Aethel",
    description: {
      en: "A futuristic company profile site that solves digital credibility gaps for tech agencies. Applies Human-First Engineering philosophy to <strong>minimize cognitive load</strong> and <strong>increase the conversion rate of prospects into high-value clients</strong>.",
      id: "Situs profil perusahaan futuristik yang memecahkan masalah kesenjangan kredibilitas digital. Menerapkan filosofi Human-First Engineering untuk <strong>meminimalisir hambatan kognitif</strong> dan <strong>meningkatkan tingkat konversi prospek menjadi klien bernilai tinggi</strong>."
    },
    technologies: ["HTML5", "Vanilla CSS3", "Vanilla JS"],
    type: "Frontend",
    imageUrl: "/Porto8.webp",
    liveUrl: "https://aethel.site.je/?i=1",
    githubUrl: "https://github.com/AbiSulfur/Web-Design-Competition",
    learnings: {
      en: ["Advanced CSS Animations", "Custom Interactivity with JS", "Human-First UI/UX Design", "Framework-less Responsive Layout"],
      id: ["Penerapan Animasi CSS Skala Lanjut", "Manajemen Interaktivitas Kustom dengan Vanilla JS", "Pendekatan Desain 'Human-First'", "Arsitektur Web Responsif Tanpa Framework"]
    }
  },
  {
    id: 3,
    title: "Stockwise SaaS",
    description: {
      en: "A professional, fast, and SEO-optimized SaaS landing page built to <strong>gather early signups before product launch</strong>. Features clear pricing and benefits to successfully communicate the software's value and <strong>capture visitor interest efficiently</strong>.",
      id: "Landing page SaaS profesional yang cepat dan optimal untuk SEO, dibangun untuk <strong>mengumpulkan pendaftaran awal sebelum peluncuran produk</strong>. Menampilkan harga dan manfaat yang jelas untuk <strong>menangkap minat pengunjung secara efisien</strong>."
    },
    technologies: ["HTML5", "Tailwind CSS", "JavaScript"],
    type: "Frontend",
    imageUrl: "/Porto5.webp",
    githubUrl: "https://github.com/AbiSulfur/Stockwise",
    learnings: {
      en: ["Tailwind utility optimizations", "SaaS design frameworks", "SEO structure best practices", "Performance metrics enhancement"],
      id: ["Optimalisasi utilitas Tailwind", "Kerangka desain SaaS", "Praktik terbaik struktur SEO", "Peningkatan metrik performa"]
    }
  },
  {
    id: 4,
    title: "Leafly Tea",
    description: {
      en: "An integrated e-commerce system that digitizes traditional sales processes. Helps businesses <strong>reduce operational costs</strong> and <strong>open new online revenue channels 24/7</strong> through automated inventory management.",
      id: "Sistem e-commerce terintegrasi yang mendigitalisasi proses penjualan tradisional. Membantu bisnis <strong>mengurangi biaya operasional</strong> dan <strong>membuka saluran pendapatan baru secara online 24/7</strong> melalui manajemen inventaris otomatis."
    },
    technologies: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
    type: "Full Stack",
    imageUrl: "/Porto2.webp",
    liveUrl: "https://budiluhurdigital.com/project/10RPL/LeaflyTea/",
    githubUrl: "https://github.com/AbiSulfur/Leafly",
    learnings: {
      en: ["Database relationship modeling", "Secure authentication processing", "E-commerce cart logic", "Responsive dashboard design"],
      id: ["Pemodelan relasi database", "Pemrosesan autentikasi yang aman", "Logika keranjang e-commerce", "Desain dashboard responsif"]
    }
  }
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
    const rotateX = ((y - centerY) / centerY) * -6 // max ±6deg
    const rotateY = ((x - centerX) / centerX) * 6

    cardRef.current.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
    
    // Parallax shift for image (opposite direction)
    const img = cardRef.current.querySelector("[data-parallax-img]") as HTMLElement | null
    if (img) {
      img.style.transform = `scale(1.05) translateX(${rotateY * -0.8}px) translateY(${rotateX * 0.8}px)`
    }
  }, [])

  const handleMouseLeave = useCallback(() => {
    if (!cardRef.current) return
    cardRef.current.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg)"
    const img = cardRef.current.querySelector("[data-parallax-img]") as HTMLElement | null
    if (img) {
      img.style.transform = "scale(1) translateX(0px) translateY(0px)"
    }
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

export default function Projects() {
  const { language, t } = useLanguage()
  useScrollReveal()

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Full Stack":
        return "text-accent"
      case "Frontend":
        return "text-blue-300"
      default:
        return "text-foreground/60"
    }
  }

  return (
    <section id="projects" className="section-padding bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16" data-reveal>
          <h2 className="section-title mb-4">{t("projects", "title")}</h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-accent via-accent/70 to-accent/30 rounded-full"></div>
          <p className="section-subtitle mt-6 max-w-2xl">
            {t("projects", "subtitle")}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" data-reveal>
          {projects.map((project) => (
            <TiltCard
              key={project.id}
              className="glass-card flex flex-col border border-border/20 hover:border-accent/40 shadow-sm transition-all duration-300 h-full overflow-hidden group"
            >
              {/* Project Image with hover overlay */}
              <div className="relative h-56 overflow-hidden bg-gradient-to-br from-accent/10 to-background border-b border-border/20">
                <Image
                  src={project.imageUrl || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500"
                  data-parallax-img
                />
                {/* "View Project →" overlay that slides up on hover */}
                {project.liveUrl && project.liveUrl !== "#" ? (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="absolute inset-0 bg-accent/80 flex items-center justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out cursor-pointer z-20">
                    <span className="text-accent-foreground font-bold text-lg flex items-center gap-2">
                      {t("projects", "viewProject")} →
                    </span>
                  </a>
                ) : (
                   <div className="absolute inset-0 bg-accent/80 flex items-center justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-20">
                    <span className="text-accent-foreground font-bold text-lg flex items-center gap-2">
                      {project.isInternal ? t("projects", "internalSystem") : project.title}
                    </span>
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-1">{project.title}</h3>
                    <p className={`text-sm font-bold uppercase tracking-wider ${getTypeColor(project.type)}`}>
                      {project.type}
                    </p>
                  </div>
                </div>

                <div 
                  className="text-foreground/80 leading-relaxed text-base mb-6"
                  dangerouslySetInnerHTML={{ __html: project.description[language] }}
                />

                {/* Technologies */}
                <div className="mb-8 mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-semibold bg-accent/10 text-accent px-2.5 py-1 rounded border border-accent/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-4 mt-auto pt-4 border-t border-border/20">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-3 bg-card hover:bg-card/80 border border-border rounded-lg text-sm font-bold transition-all text-center text-foreground hover:text-accent hover:border-accent/50"
                    >
                      {t("projects", "viewCode")}
                    </a>
                  )}
                  {project.isInternal ? (
                    <div className="flex-1 py-3 bg-background border border-border/40 text-foreground/50 rounded-lg text-sm font-bold text-center cursor-not-allowed">
                      {t("projects", "internalSystem")}
                    </div>
                  ) : project.liveUrl && project.liveUrl !== "#" ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-3 bg-accent hover:bg-accent/90 text-accent-foreground rounded-lg text-sm font-bold transition-all text-center shadow-lg hover:-translate-y-0.5 shadow-accent/20 hover:shadow-accent/40"
                    >
                      {t("projects", "liveDemo")}
                    </a>
                  ) : null}
                </div>
              </div>
            </TiltCard>
          ))}
        </div>

        {/* Mid-Funnel CTA */}
        <div className="mt-20 text-center glass-card p-10 md:p-16 border border-accent/20 bg-accent/5 card-hover" data-reveal>
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-foreground/90 leading-relaxed max-w-2xl mx-auto">
            {t("projects", "ctaText")}
          </h3>
          <a
            href="https://wa.me/6287725223486"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-accent hover:bg-accent/90 text-accent-foreground rounded-lg font-bold transition-all duration-300 hover:shadow-xl hover:shadow-accent/40 text-lg hover:-translate-y-1"
          >
            {t("projects", "ctaButton")}
          </a>
        </div>
      </div>
    </section>
  )
}
