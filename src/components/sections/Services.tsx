import React from "react";
import { useI18n } from "../../i18n";
import { site } from "../../data/site";
import { StickyCard } from "../motion/StickyCard";
import { FadeUp } from "../motion/FadeUp";
import { ArrowUpRight } from "lucide-react";

export function Services() {
  const { t } = useI18n();

  const servicesData = [
    {
      number: "01",
      title: t("services.service1Title"),
      desc: t("services.service1Desc"),
      bgClass: "bg-accent text-ink border-black/10",
      tags: ["Fast Turnaround", "Conversion Focused", "Mobile First"],
      textColor: "text-ink",
      descColor: "text-ink/80",
      tagBorder: "border-ink/20 text-ink bg-black/5",
    },
    {
      number: "02",
      title: t("services.service2Title"),
      desc: t("services.service2Desc"),
      bgClass: "bg-ink text-text-on-dark border-line-dark",
      tags: ["Brand Authority", "SEO Ready", "Structured Content"],
      textColor: "text-text-on-dark",
      descColor: "text-text-on-dark-muted",
      tagBorder: "border-line-dark text-text-on-dark-muted bg-white/5",
    },
    {
      number: "03",
      title: t("services.service3Title"),
      desc: t("services.service3Desc"),
      bgClass: "bg-[#5B6BFF] text-white border-white/20",
      tags: ["Clean Architecture", "Scalable Database", "Role Access"],
      textColor: "text-white",
      descColor: "text-white/85",
      tagBorder: "border-white/25 text-white/90 bg-white/10",
    },
  ];

  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="py-24 sm:py-32 md:py-40 bg-bg border-b border-line/60"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-14">
        {/* Section Header with FadeUp */}
        <FadeUp className="max-w-3xl mb-16 sm:mb-20">
          <span className="font-mono text-xs uppercase tracking-widest text-ink-subtle block mb-4">
            02 / Services
          </span>
          <h2
            id="services-title"
            className="text-[clamp(36px,5vw,72px)] font-extrabold tracking-tight text-ink leading-tight"
          >
            {t("services.title")}
          </h2>
          <p className="mt-4 sm:mt-6 text-lg sm:text-xl text-ink-muted leading-relaxed">
            {t("services.subtitle")}
          </p>
        </FadeUp>

        {/* Stacking Service Cards with Scroll-Linked Scale, Dimming, and Sticky Pause Runway */}
        <div className="flex flex-col gap-8 sm:gap-12 relative pb-[75vh]">
          {servicesData.map((service, index) => (
            <StickyCard
              key={service.number}
              index={index}
              total={servicesData.length}
              bgClass={service.bgClass}
            >
              {/* Top Row: Mono Index Number & Category */}
              <div className="flex items-center justify-between pb-4 sm:pb-5 border-b border-current/10">
                <span className="font-mono text-sm sm:text-base font-semibold tracking-wider">
                  [{service.number}]
                </span>
                <span className="font-mono text-xs uppercase tracking-widest opacity-80">
                  Tailored Solution
                </span>
              </div>

              {/* Main Card Content */}
              <div className="my-6 sm:my-8 max-w-3xl">
                <h3 className={`text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-3 sm:mb-4 ${service.textColor}`}>
                  {service.title}
                </h3>
                <p className={`text-sm sm:text-base md:text-lg leading-relaxed ${service.descColor}`}>
                  {service.desc}
                </p>
              </div>

              {/* Bottom Row: Tags & CTA */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 pt-5 sm:pt-6 border-t border-current/10">
                <div className="flex flex-wrap gap-2 sm:gap-2.5">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`font-mono text-xs px-2.5 sm:px-3 py-1 rounded-full border ${service.tagBorder}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 font-display font-medium text-sm sm:text-base hover:opacity-80 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-current rounded-xs"
                >
                  <span>Start Consultation</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </StickyCard>
          ))}
        </div>
      </div>
    </section>
  );
}
