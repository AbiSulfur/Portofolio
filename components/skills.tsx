"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPhp,
  FaLaravel,
  FaDatabase,
  FaGitAlt,
  FaGithub,
  FaWordpress,
  FaTools,
  FaServer,
  FaCode,
} from "react-icons/fa"

interface SkillCategory {
  title: string
  skills: Array<{
    name: string
    icon: React.ComponentType<{ className?: string }>
  }>
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
      { name: "JavaScript", icon: FaJs },
      { name: "WordPress", icon: FaWordpress },
      { name: "Web Design", icon: FaCode },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "PHP", icon: FaPhp },
      { name: "Laravel", icon: FaLaravel },
      { name: "MySQL", icon: FaDatabase },
      { name: "REST APIs", icon: FaServer },
      { name: "Server Logic", icon: FaTools },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git & GitHub", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "VS Code", icon: FaCode },
      { name: "Web Development", icon: FaServer },
      { name: "CLI Tools", icon: FaTools },
    ],
  },
]

export default function Skills() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current
    if (!scrollContainer) return

    const skills = scrollContainer.querySelectorAll("[data-skill]")
    const firstChildClone = scrollContainer.firstElementChild?.cloneNode(true)
    if (firstChildClone) {
      scrollContainer.appendChild(firstChildClone)
    }
  }, [])

  return (
    <section id="skills" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="section-title mb-4">Skills & Technologies</h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-accent via-accent/70 to-accent/30 rounded-full"></div>
          <p className="section-subtitle mt-6 max-w-2xl">
            Here's what I'm comfortable working with. I focus on practical exposure and familiarity with real-world
            tools rather than claiming mastery—I'm always learning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="glass-card p-8 card-hover border border-border/20 hover:border-accent/40"
            >
              <h3 className="text-xl font-bold text-accent mb-6">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill) => {
                  const Icon = skill.icon
                  return (
                    <div key={skill.name} className="flex items-center gap-4 group cursor-default">
                      <Icon className="text-2xl text-accent group-hover:text-accent/70 group-hover:scale-110 transition-all duration-300" />
                      <span className="text-base md:text-lg font-medium text-foreground/80 group-hover:text-accent transition-colors">
                        {skill.name}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <h3 className="text-sm uppercase tracking-widest text-muted-foreground font-semibold mb-8 text-center">
            Technology Stack Overview
          </h3>

          <div className="relative overflow-hidden bg-gradient-to-r from-card/30 to-card/50 rounded-lg border border-border/30 py-8 shadow-lg shadow-accent/5">
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-background/90 to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-background/90 to-transparent z-10"></div>

            <div
              ref={scrollContainerRef}
              className="flex gap-8 px-8 scroll-animation"
              style={{
                width: "max-content",
              }}
            >
              {[
                { name: "HTML5", icon: FaHtml5 },
                { name: "CSS3", icon: FaCss3Alt },
                { name: "JavaScript", icon: FaJs },
                { name: "PHP", icon: FaPhp },
                { name: "Laravel", icon: FaLaravel },
                { name: "MySQL", icon: FaDatabase },
                { name: "Git", icon: FaGitAlt },
                { name: "WordPress", icon: FaWordpress },
                { name: "GitHub", icon: FaGithub },
                { name: "REST APIs", icon: FaServer },
              ].map((tech, idx) => {
                const Icon = tech.icon
                return (
                  <div
                    key={`${tech.name}-${idx}`}
                    data-skill
                    className="flex items-center gap-3 px-6 py-3 bg-card/60 border border-border/30 rounded-lg whitespace-nowrap hover:border-accent/50 hover:bg-card/80 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300"
                  >
                    <Icon className="text-xl text-accent" />
                    <span className="text-base font-semibold text-foreground">{tech.name}</span>
                  </div>
                )
              })}
            </div>
          </div>

          <p className="text-center text-base text-muted-foreground mt-6">
            Hover over the carousel to pause. New technologies coming soon as I continue learning.
          </p>
        </div>
      </div>
    </section>
  )
}
