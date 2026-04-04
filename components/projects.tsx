"use client"

import { useLanguage } from "@/components/language-provider"
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
  liveUrl2?: string
  githubUrl?: string
  learnings: {
    en: string[]
    id: string[]
  }
}

const projects: ProjectData[] = [
  {
    id: 1,
    title: "Personal Portfolio Website",
    description: {
      en: "A modern, responsive portfolio designed to showcase skills and <strong>convert visitors into clients</strong>. Built with Next.js and Tailwind CSS, it resolves the previous lack of a <strong>clear value proposition</strong> by providing an improved user flow that <strong>builds trust faster</strong> and drives potential engagement.",
      id: "Portfolio modern dan responsif yang dirancang untuk menampilkan keahlian dan <strong>mengkonversi pengunjung menjadi klien</strong>. Dibangun dengan Next.js dan Tailwind CSS, portfolio ini mengatasi ketiadaan <strong>proposisi nilai yang jelas</strong> sebelumnya dengan memberikan alur pengguna yang lebih baik untuk <strong>membangun kepercayaan lebih cepat</strong> dan mendorong keterlibatan."
    },
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    type: "Full Stack",
    imageUrl: "/Porto1.webp",
    liveUrl: "https://abigaildev.vercel.app/",
    githubUrl: "https://github.com/AbiSulfur/Portofolio",
    learnings: {
      en: ["Conversion-focused UI design", "Next.js App Router API", "Responsive fluid layouts", "Component-driven architecture"],
      id: ["Desain UI yang berfokus pada konversi", "Next.js App Router API", "Tata letak responsif yang mulus", "Arsitektur berbasis komponen"]
    }
  },
  {
    id: 2,
    title: "Leafly Tea",
    description: {
      en: "An integrated e-commerce platform developed with PHP and MySQL to manage and sell tea products. The custom platform addresses the brand's need for an <strong>online sales channel outside of physical stores</strong>, featuring an intuitive admin panel that enables <strong>digital inventory management</strong> and opens up a <strong>new consistent revenue stream</strong>.",
      id: "Platform e-commerce terintegrasi yang dikembangkan dengan PHP dan MySQL untuk mengelola dan menjual produk teh. Platform kustom ini menjawab kebutuhan brand akan <strong>saluran penjualan online di luar toko fisik</strong>, dilengkapi panel admin intuitif yang memungkinkan <strong>manajemen inventaris digital</strong> dan membuka <strong>sumber pendapatan baru yang konsisten</strong>."
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
  },
  {
    id: 3,
    title: "Stockwise SaaS",
    description: {
      en: "A professional, fast, and SEO-optimized SaaS landing page built to gather <strong>early signups before product launch</strong>. Using a mobile-first approach with Tailwind CSS, it features clear pricing and benefits to successfully communicate the software's value and <strong>capture visitor interest efficiently</strong>.",
      id: "Landing page SaaS profesional yang cepat dan optimal untuk SEO, dibangun untuk mengumpulkan <strong>pendaftaran awal sebelum peluncuran produk</strong>. Menggunakan pendekatan mobile-first dengan Tailwind CSS, landing page ini menampilkan harga dan manfaat yang jelas untuk mengomunikasikan nilai perangkat lunak dan <strong>menangkap minat pengunjung secara efisien</strong>."
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
    title: "Teacher Activity App",
    description: {
      en: "A web-based activity management system for schools that replaces <strong>manual tracking</strong> with a fully digital role-based system. It allows real-time tracking, data visualization, and automated PDF reporting to <strong>reduce administrative overhead drastically</strong> and provide clear data insights.",
      id: "Sistem manajemen aktivitas berbasis web untuk sekolah yang menggantikan <strong>pelacakan manual</strong> dengan sistem berbasis peran sepenuhnya digital. Sistem ini memungkinkan pelacakan real-time, visualisasi data, dan pelaporan PDF otomatis yang <strong>mengurangi beban administratif secara drastis</strong> dan memberikan wawasan data yang jelas."
    },
    technologies: ["PHP", "MySQL", "Bootstrap 5", "Chart.js"],
    type: "Full Stack",
    imageUrl: "/Porto4.webp",
    githubUrl: "https://github.com/AbiSulfur/Aplikasi-Kegiatan-Guru",
    learnings: {
      en: ["Role-Based Access Control", "PDF generation from code", "Data visualization", "Complex SQL query optimization"],
      id: ["Kontrol Akses Berbasis Peran", "Pembuatan PDF dari kode", "Visualisasi data", "Optimasi query SQL yang kompleks"]
    }
  }
]

export default function Projects() {
  const { language, t } = useLanguage()

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
        <div className="mb-16">
          <h2 className="section-title mb-4">{t("projects", "title")}</h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-accent via-accent/70 to-accent/30 rounded-full"></div>
          <p className="section-subtitle mt-6 max-w-2xl">
            {t("projects", "subtitle")}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="glass-card flex flex-col border border-border/20 hover:border-accent/40 shadow-sm transition-all duration-300 h-full overflow-hidden group"
            >
              {/* Project Image */}
              <div className="relative h-56 overflow-hidden bg-gradient-to-br from-accent/10 to-background border-b border-border/20 relative">
                <Image
                  src={project.imageUrl || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
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
                  className="text-foreground/80 leading-relaxed text-base mb-8"
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
                      className="flex-1 py-3 bg-card hover:bg-card/80 border border-border rounded-lg text-sm font-bold transition-all text-center text-foreground hover:text-accent hover:border-accent/50 group-hover:border-accent/30"
                    >
                      {t("projects", "viewCode")}
                    </a>
                  )}
                  {project.liveUrl && project.liveUrl !== "#" && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-3 bg-accent hover:bg-accent/90 text-accent-foreground rounded-lg text-sm font-bold transition-all text-center shadow-lg hover:-translate-y-0.5 shadow-accent/20 hover:shadow-accent/40"
                    >
                      {t("projects", "liveDemo")}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


