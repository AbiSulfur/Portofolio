"use client"

import { useState } from "react"

interface Project {
  id: number
  title: string
  description: string
  longDescription: string
  technologies: string[]
  type: "Full Stack" | "Frontend" | "Backend" | "Learning Project" | "CMS Development"
  status: "Completed" | "In Progress" | "Planned"
  imageUrl: string
  liveUrl?: string
  liveUrl2?: string
  githubUrl?: string
  learnings: string[]
}

const projects: Project[] = [
  {
    id: 1,
    title: "Personal Portfolio Website",
    description: "A modern, responsive portfolio designed to showcase skills, projects, and personal growth as a web developer.",
    longDescription:
      "This portfolio website was built using React and Next.js, focusing on clean component structure, reusable UI elements, and performance-oriented rendering. It features smooth scrolling interactions, responsive layouts across devices, and an auto-scrolling technology showcase. The project demonstrates an understanding of component-based architecture, modern styling practices, and client-side interactions within a Next.js environment, with attention to maintainability and scalability.",
    technologies: ["React", "Next.js", "JavaScript", "TypeScript"],
    type: "Full Stack",
    status: "Completed",
    imageUrl: "/Porto1.png",
    liveUrl: "https://abigail-dev.vercel.app/",
    githubUrl: "https://github.com/AbiSulfur/Portofolio",
    learnings: [
      "Component-based architecture with React",
      "Building reusable and maintainable UI components",
      "Client-side interactions and smooth scrolling in Next.js",
      "Responsive layouts and modern styling practices",
    ],    
  },
  {
    id: 2,
    title: "Leafly Tea",
    description: "Leafly Tea is an e-commerce website developed to showcase and sell products from the Leafly Tea brand.",
    longDescription:
      "The website is built using PHP, HTML, CSS, and JavaScript, with MySQL as the database for managing product data. It implements core e-commerce features such as product listing, basic data management, and dynamic interactions on the frontend. For visual styling and layout, the project utilizes Bootstrap, while AOS (Animate On Scroll) is used to enhance user experience through subtle animations and smooth visual transitions. This project demonstrates an understanding of fundamental web development concepts, frontend–backend integration, and building visually engaging websites using commonly adopted web technologies.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Bootstrap"],
    type: "Full Stack",
    status: "Completed",
    imageUrl: "/Porto2.png",
    liveUrl: "https://budiluhurdigital.com/project/10RPL/LeaflyTea/",
    githubUrl: "https://github.com/AbiSulfur/Leafly",
    learnings: [
      "Building an e-commerce website using PHP and MySQL",
      "Integrating frontend and backend logic",
      "Managing product data with a relational database",
      "Responsive layout and styling with Bootstrap",
      "Enhancing user experience with AOS animations",
    ],    
  },
  {
    id: 3,
    title: "Focusly",
    description: "Modern landing page for a productivity application.",
    longDescription:
      "A responsive web design project showcasing a clean UI for a Pomodoro and habit-tracking app. Features scroll-triggered animations using Intersection Observer, interactive 3D product mockups, and a mobile-first layout built with pure HTML, CSS, and JavaScript.",
    technologies: ["JavaScript", "HTML5", "CSS3",],
    type: "Frontend",
    status: "Completed",
    imageUrl: "/Porto3.png",
    githubUrl: "https://github.com/AbiSulfur/Focusly",
    learnings: [
      "Intersection Observer API",
      "CSS Grid & Flexbox layouts",
      "Mobile-first responsive design",
      "CSS Animations & 3D Transforms",
      "Touch events & Haptic Feedback",
    ],
  },
  {
    id: 4,
    title: "Web-Based Teacher Activity Application",
    description: "Teacher Activity Management System built with PHP and MySQL for managing and reporting school activities.",
    longDescription:
      "Designed and developed a web-based system to manage teacher activities with role-based access control (admin, teacher, student). Features include activity tracking and reporting, teacher and class management, data filtering, and export to Excel and PDF. Built with Bootstrap 5 for modern UI, Chart.js for data visualization, and FPDF for document generation. This project showcases hands-on experience in full-stack web development, database design, and admin dashboard implementation.",
    technologies: ["PHP", "MySQL", "Bootstrap 5", "Chart.js", "FPDF", "JavaScript",],      
    type: "Full Stack",
    status: "In Progress",
    imageUrl: "/Porto4.png",
    githubUrl: "https://github.com/AbiSulfur/Aplikasi-Kegiatan-Guru",
    learnings: [
      "PHP backend development",
      "MySQL database design and relationships",
      "Role-based access control (RBAC)",
      "CRUD operations and data validation",
      "Admin dashboard and data visualization",
      "Exporting data to PDF and Excel",
      "Responsive UI with Bootstrap 5",
    ],    
  },
  {
    id: 5,
    title: "Stockwise - Smart Inventory System",
    description: "Modern SaaS landing page for an inventory & order management platform.",
    longDescription:
      "A fully responsive landing page designed for 'Stockwise', a smart inventory management solution. It features a clean, professional SaaS aesthetic with a hero section showcasing a dashboard mockup, a statistical impact grid, an interactive 3-step guide, and optimized CTA sections. Built with a mobile-first approach using Tailwind CSS for rapid, consistent styling.",
    technologies: ["HTML5", "Tailwind CSS", "JavaScript",],
    type: "Frontend",
    status: "Completed",
    imageUrl: "/Porto5.png",
    githubUrl: "https://github.com/AbiSulfur/Stockwise",
    learnings: [
      "Tailwind CSS utility classes",
      "SaaS UI/UX design patterns",
      "Responsive Grid & Flexbox layouts",
      "Visual hierarchy optimization",
      "Semantic HTML structure"
    ],
  },
  {
    id: 6,
    title: "Budi Luhur School Website",
    description: "Official education portal built with WordPress and Ciuss theme.",
    longDescription:
      "A comprehensive official website network for Budi Luhur Schools (SMK, SD, KB/TK). Built on the WordPress CMS to ensure easy content management for administrators. The site utilizes a specialized education theme from Ciuss.com, customized to feature a dynamic news portal, academic curriculum details, student galleries, and admission (PPDB) information integration.",
    technologies: ["WordPress", "PHP", "CSS", "MySQL"],
    type: "CMS Development",
    status: "In Progress",
    imageUrl: "/Porto6.png", 
    liveUrl: "https://sdpa.sekolahbudiluhur.sch.id/",
    liveUrl2: "https://sdkt.sekolahbudiluhur.sch.id/",
    learnings: [
      "WordPress CMS Management",
      "Theme customization & configuration",
      "Information Architecture for schools",
      "Plugin integration",
      "Content strategy & layouting"
    ],
  },
]

export default function Projects() {
  const [expandedId, setExpandedId] = useState<number | null>(null)

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-accent/20 text-accent"
      case "In Progress":
        return "bg-blue-500/20 text-blue-300"
      case "Planned":
        return "bg-muted/20 text-muted-foreground"
      default:
        return "bg-muted/20 text-muted-foreground"
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Full Stack":
        return "text-accent"
      case "Frontend":
        return "text-blue-300"
      case "Backend":
        return "text-purple-300"
      default:
        return "text-foreground/60"
    }
  }

  return (
    <section id="projects" className="section-padding bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="section-title mb-4">Featured Projects</h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-accent via-accent/70 to-accent/30 rounded-full"></div>
          <p className="section-subtitle mt-6 max-w-2xl">
            A selection of projects I've built to learn and demonstrate skills. Each project is designed to address real
            problems and showcase practical web development abilities.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setExpandedId(expandedId === project.id ? null : project.id)}
              className="glass-card overflow-hidden card-hover group flex flex-col cursor-pointer md:cursor-default border border-border/20 hover:border-accent/50"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-accent/10 to-background">
                <img
                  src={project.imageUrl || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Project Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-2">{project.title}</h3>
                    <p className={`text-sm font-bold uppercase tracking-wider ${getTypeColor(project.type)}`}>
                      {project.type}
                    </p>
                  </div>
                  <span
                    className={`text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap ml-2 ${getStatusColor(project.status)}`}
                  >
                    {project.status}
                  </span>
                </div>

                <p className="text-foreground/70 text-base mb-4 line-clamp-2">{project.description}</p>

                {/* Full Description - Show on expand or always on desktop */}
                {expandedId === project.id && (
                  <p className="text-foreground/60 text-base mb-4 leading-relaxed animate-in fade-in duration-200">
                    {project.longDescription}
                  </p>
                )}

                {/* Technologies */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-sm bg-accent/10 text-accent px-3 py-1 rounded border border-accent/30 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Learnings */}
                <div className="mb-6 mt-auto pt-4 border-t border-border/20">
                  <p className="text-xs font-bold text-muted-foreground uppercase mb-3">Key Learnings</p>
                  <ul className="space-y-2">
                    {project.learnings.slice(0, 2).map((learning, idx) => (
                      <li key={idx} className="text-sm text-foreground/60 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                        {learning}
                      </li>
                    ))}
                    {project.learnings.length > 2 && (
                      <li className="text-sm text-foreground/60 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>+{project.learnings.length - 2} more
                      </li>
                    )}
                  </ul>
                </div>

                {/* Links */}
                <div className="flex gap-3 mt-auto">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex-1 py-2 bg-card hover:bg-card/80 border border-border rounded text-base font-semibold transition-colors text-center text-foreground hover:text-accent hover:border-accent/50"
                    >
                      View Code
                    </a>
                  )}
                  {project.liveUrl && project.liveUrl !== "#" && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex-1 py-2 bg-accent hover:bg-accent/90 rounded text-base font-semibold transition-colors text-center text-accent-foreground"
                    >
                      Live Demo
                    </a>
                  )}
                  {project.liveUrl2 && project.liveUrl2 !== "#" && (
                    <a
                      href={project.liveUrl2}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex-1 py-2 bg-accent hover:bg-accent/90 rounded text-base font-semibold transition-colors text-center text-accent-foreground"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg md:text-xl text-muted-foreground mb-4">
            Want to see more projects? Check out my GitHub.
          </p>
          <a
            href="https://github.com/AbiSulfur"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-accent hover:bg-accent/90 text-accent-foreground rounded-lg font-bold transition-all duration-300 hover:shadow-lg hover:shadow-accent/30 text-base md:text-lg"
          >
            Explore GitHub Profile
          </a>
        </div>
      </div>
    </section>
  )
}
