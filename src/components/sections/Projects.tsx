import React from "react";
import { useI18n } from "../../i18n";
import { projects } from "../../data/projects";
import { site } from "../../data/site";
import { Button } from "../ui/Button";
import { Chip } from "../ui/Chip";
import { ProjectCardMedia } from "../motion/ProjectCardMedia";
import { FadeUp } from "../motion/FadeUp";
import { Magnetic } from "../motion/Magnetic";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";

export function Projects() {
  const { locale, t } = useI18n();

  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="py-24 sm:py-32 md:py-40 bg-ink text-text-on-dark rounded-[36px] sm:rounded-[56px] mx-2 sm:mx-4 md:mx-6 my-12 overflow-hidden shadow-2xl"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-14">
        {/* Section Header with FadeUp */}
        <FadeUp className="max-w-3xl mb-16 sm:mb-24">
          <span className="font-mono text-xs uppercase tracking-widest text-accent block mb-4">
            03 / Selected Works
          </span>
          <h2
            id="projects-title"
            className="text-[clamp(36px,5vw,72px)] font-extrabold tracking-tight text-text-on-dark leading-tight"
          >
            {t("projects.title")}
          </h2>
          <p className="mt-4 sm:mt-6 text-lg sm:text-xl text-text-on-dark-muted leading-relaxed">
            {t("projects.subtitle")}
          </p>
        </FadeUp>

        {/* 2-Column Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14 md:gap-x-12 md:gap-y-24 items-start">
          {projects.map((project, index) => {
            const isEven = index % 2 === 1;
            const desc = project.description[locale] || project.description.en;
            const phrase = project.highlightPhrase[locale] || project.highlightPhrase.en;
            const parts = phrase && desc.includes(phrase) ? desc.split(phrase) : null;

            return (
              <FadeUp
                key={project.id}
                delay={index * 0.1}
                className={`group flex flex-col gap-6 ${isEven ? "md:translate-y-20" : ""}`}
              >
                {/* Media Container with Hover Zoom & View Bubble */}
                <ProjectCardMedia
                  image={project.image}
                  title={project.title}
                  number={project.number}
                  category={project.category}
                  accentColor={project.accentColor}
                />

                {/* Project Metadata & Description */}
                <div className="flex flex-col gap-4">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-text-on-dark group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  {/* Outcome Highlight Description */}
                  <p className="text-sm sm:text-base text-text-on-dark-muted leading-relaxed">
                    {parts ? (
                      <>
                        {parts[0]}
                        <strong className="text-text-on-dark font-semibold">
                          {phrase}
                        </strong>
                        {parts[1]}
                      </>
                    ) : (
                      desc
                    )}
                  </p>

                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.stack.map((tech) => (
                      <Chip key={tech} variant="dark">
                        {tech}
                      </Chip>
                    ))}
                  </div>

                  {/* Action Links */}
                  <div className="flex items-center gap-4 pt-3 border-t border-line-dark/60">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono text-text-on-dark-muted hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-xs"
                      >
                        <Github className="w-4 h-4" />
                        <span>{t("projects.viewCode")}</span>
                      </a>
                    )}

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono text-accent hover:underline transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-xs"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>{t("projects.liveDemo")}</span>
                      </a>
                    )}
                  </div>
                </div>
              </FadeUp>
            );
          })}
        </div>

        {/* Closing CTA with FadeUp */}
        <FadeUp className="mt-28 sm:mt-40 pt-16 border-t border-line-dark flex flex-col sm:flex-row items-center justify-between gap-8 text-center sm:text-left">
          <div>
            <h4 className="text-2xl sm:text-3xl font-bold text-text-on-dark tracking-tight">
              {t("projects.ctaText")}
            </h4>
            <p className="text-text-on-dark-muted mt-2 text-sm sm:text-base">
              Let us build something scalable and effective for your business.
            </p>
          </div>

          <Magnetic className="shrink-0">
            <Button
              href={site.whatsapp}
              external
              variant="accent"
              className="gap-2"
            >
              <span>{t("projects.ctaButton")}</span>
              <ArrowUpRight className="w-4 h-4" />
            </Button>
          </Magnetic>
        </FadeUp>
      </div>
    </section>
  );
}
