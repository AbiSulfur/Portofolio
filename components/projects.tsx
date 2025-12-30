"use client"

import { useState } from "react"

interface Project {
  id: number
  title: string
  description: string
  longDescription: string
  technologies: string[]
  type: "Full Stack" | "Frontend" | "Backend" | "Learning Project"
  status: "Completed" | "In Progress" | "Planned"
  imageUrl: string
  liveUrl?: string
  githubUrl?: string
  learnings: string[]
}

const projects: Project[] = [
  {
    id: 1,
    title: "Personal Portfolio Website",
    description: "A modern, responsive portfolio to showcase skills and projects.",
    longDescription:
      "Built this portfolio website from scratch using HTML5, CSS3, and JavaScript. Features smooth scrolling, responsive design, and auto-scroll technology showcase. Demonstrates understanding of semantic HTML, CSS Grid/Flexbox, and vanilla JavaScript interactions.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    type: "Full Stack",
    status: "Completed",
    imageUrl: "/placeholder.svg?height=300&width=500",
    liveUrl: "#",
    githubUrl: "https://github.com/AbiSulfur",
    learnings: [
      "Semantic HTML structure",
      "CSS Grid and Flexbox layouts",
      "Smooth scroll behavior",
      "Mobile-first responsive design",
    ],
  },
  {
    id: 2,
    title: "E-Commerce Product Catalog",
    description: "Laravel-based product management system with filtering and search.",
    longDescription:
      "A full-stack e-commerce application built with Laravel framework. Implements MVC architecture, routing, Blade templating, and CRUD operations for products. Features dynamic product filtering, search functionality, and basic user authentication.",
    technologies: ["Laravel", "PHP", "MySQL", "Blade Template"],
    type: "Full Stack",
    status: "Completed",
    imageUrl: "/placeholder.svg?height=300&width=500",
    githubUrl: "https://github.com/AbiSulfur",
    learnings: [
      "Laravel MVC architecture",
      "Database design with MySQL",
      "Blade templating engine",
      "Basic CRUD operations",
      "Form validation",
    ],
  },
  {
    id: 3,
    title: "Task Management Dashboard",
    description: "Interactive todo app with local storage and task categorization.",
    longDescription:
      "A practical JavaScript project that demonstrates DOM manipulation and event handling. Users can create, edit, delete, and categorize tasks. Features persistent data storage using browser localStorage and a clean, intuitive interface.",
    technologies: ["JavaScript", "HTML5", "CSS3", "LocalStorage"],
    type: "Frontend",
    status: "Completed",
    imageUrl: "/placeholder.svg?height=300&width=500",
    githubUrl: "https://github.com/AbiSulfur",
    learnings: [
      "DOM manipulation",
      "Event listeners and handlers",
      "LocalStorage API",
      "Functional programming concepts",
      "User interface design principles",
    ],
  },
  {
    id: 4,
    title: "WordPress Business Website",
    description: "Custom WordPress site built with Elementor for a local business.",
    longDescription:
      "Designed and built a professional business website using WordPress and Elementor page builder. Implemented custom CSS for branding, optimized for SEO, and configured essential plugins. This project demonstrates practical experience with WordPress ecosystem and no-code/low-code tools.",
    technologies: ["WordPress", "Elementor", "PHP", "CSS", "SEO"],
    type: "Frontend",
    status: "Completed",
    imageUrl: "/placeholder.svg?height=300&width=500",
    learnings: [
      "WordPress theming and customization",
      "Elementor page building",
      "Custom CSS in WordPress",
      "Plugin management",
      "SEO optimization basics",
    ],
  },
  {
    id: 5,
    title: "Weather App API Integration",
    description: "JavaScript app fetching real-time data from weather API.",
    longDescription:
      "A practical project demonstrating REST API integration with JavaScript. The app fetches real-time weather data, displays it dynamically, and includes error handling. Built to understand asynchronous programming, fetch API, and data manipulation.",
    technologies: ["JavaScript", "REST API", "Fetch API", "JSON"],
    type: "Frontend",
    status: "Completed",
    imageUrl: "/placeholder.svg?height=300&width=500",
    githubUrl: "https://github.com/AbiSulfur",
    learnings: ["Fetch API and promises", "Asynchronous programming", "Error handling", "JSON parsing", "DOM updates"],
  },
  {
    id: 6,
    title: "Blog Platform with Comments",
    description: "Full-stack Laravel blog with user authentication and comments.",
    longDescription:
      "A complete blogging platform built with Laravel. Features include user registration/login, post creation/editing, comment system, and basic admin functionality. Demonstrates understanding of relational databases, authentication, and user roles.",
    technologies: ["Laravel", "PHP", "MySQL", "Authentication", "Relations"],
    type: "Full Stack",
    status: "In Progress",
    imageUrl: "/placeholder.svg?height=300&width=500",
    githubUrl: "https://github.com/AbiSulfur",
    learnings: [
      "Laravel authentication system",
      "Database relationships",
      "Authorization policies",
      "Pagination",
      "Query optimization",
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
