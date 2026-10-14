import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useI18n } from "../../i18n";
import { site } from "../../data/site";
import { FadeUp } from "../motion/FadeUp";
import { ArrowUpRight } from "lucide-react";

export function Services() {
  const { t } = useI18n();
  const trackRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [viewportHeight, setViewportHeight] = useState(1000);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setViewportHeight(window.innerHeight || 1000);
      const handleResize = () => setViewportHeight(window.innerHeight || 1000);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const servicesData = [
    {
      number: "01",
      title: t("services.service1Title"),
      desc: t("services.service1Desc"),
      bgClass: "bg-accent text-ink border-black/10 shadow-[0_10px_30px_rgba(0,0,0,0.06)]",
      tags: ["Fast Turnaround", "Conversion Focused", "Mobile First"],
      textColor: "text-ink",
      descColor: "text-ink/80",
      tagBorder: "border-ink/20 text-ink bg-black/5",
    },
    {
      number: "02",
      title: t("services.service2Title"),
      desc: t("services.service2Desc"),
      bgClass: "bg-ink text-text-on-dark border-line-dark shadow-[0_-8px_30px_rgba(0,0,0,0.28)]",
      tags: ["Brand Authority", "SEO Ready", "Structured Content"],
      textColor: "text-text-on-dark",
      descColor: "text-text-on-dark-muted",
      tagBorder: "border-line-dark text-text-on-dark-muted bg-white/5",
    },
    {
      number: "03",
      title: t("services.service3Title"),
      desc: t("services.service3Desc"),
      bgClass: "bg-[#5B6BFF] text-white border-white/20 shadow-[0_-8px_32px_rgba(0,0,0,0.32)]",
      tags: ["Clean Architecture", "Scalable Database", "Role Access"],
      textColor: "text-white",
      descColor: "text-white/85",
      tagBorder: "border-white/25 text-white/90 bg-white/10",
    },
  ];

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });

  // Card 1 subtle scale and dimming as cards 2 and 3 stack over it
  const card1Scale = useTransform(scrollYProgress, [0.08, 0.35, 0.40, 0.65], [1, 0.97, 0.97, 0.94]);
  const card1Opacity = useTransform(scrollYProgress, [0.08, 0.35, 0.40, 0.65], [1, 0.94, 0.94, 0.88]);

  // Card 2 slides in from below and locks at top: var(--stack-gap)
  const card2Y = useTransform(scrollYProgress, [0.08, 0.35], [viewportHeight, 0]);
  const card2Scale = useTransform(scrollYProgress, [0.40, 0.65], [1, 0.97]);
  const card2Opacity = useTransform(scrollYProgress, [0.40, 0.65], [1, 0.94]);

  // Card 3 slides in from below and locks at top: calc(var(--stack-gap) * 2)
  const card3Y = useTransform(scrollYProgress, [0.38, 0.65], [viewportHeight, 0]);

  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="pt-24 sm:pt-32 md:pt-40 pb-16 bg-bg border-b border-line/60"
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

        {/* Scroll Runway with Single Sticky Viewport Container */}
        <div
          ref={trackRef}
          className={`relative ${prefersReducedMotion ? "h-auto" : "h-[250vh] sm:h-[280vh]"}`}
        >
          <div className="sticky top-[var(--stack-start)] w-full">
            <div className="relative w-full h-[490px] sm:h-[560px] md:h-[600px]">
              {/* Card 1: Lime */}
              <motion.div
                key={servicesData[0].number}
                style={{
                  top: "0px",
                  zIndex: 1,
                  scale: prefersReducedMotion ? 1 : card1Scale,
                  opacity: prefersReducedMotion ? 1 : card1Opacity,
                }}
                className={`absolute inset-x-0 origin-top rounded-[32px] sm:rounded-[36px] border p-6 sm:p-8 md:p-10 min-h-[340px] sm:min-h-[380px] flex flex-col justify-between ${servicesData[0].bgClass}`}
              >
                {/* Top Row: Mono Index Number & Category */}
                <div className="flex items-center justify-between pb-4 sm:pb-5 border-b border-current/10">
                  <span className="font-mono text-sm sm:text-base font-semibold tracking-wider">
                    [{servicesData[0].number}]
                  </span>
                  <span className="font-mono text-xs uppercase tracking-widest opacity-80">
                    Tailored Solution
                  </span>
                </div>

                {/* Main Card Content */}
                <div className="my-6 sm:my-8 max-w-3xl">
                  <h3 className={`text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-3 sm:mb-4 ${servicesData[0].textColor}`}>
                    {servicesData[0].title}
                  </h3>
                  <p className={`text-sm sm:text-base md:text-lg leading-relaxed ${servicesData[0].descColor}`}>
                    {servicesData[0].desc}
                  </p>
                </div>

                {/* Bottom Row: Tags & CTA */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 pt-5 sm:pt-6 border-t border-current/10">
                  <div className="flex flex-wrap gap-2 sm:gap-2.5">
                    {servicesData[0].tags.map((tag) => (
                      <span
                        key={tag}
                        className={`font-mono text-xs px-2.5 sm:px-3 py-1 rounded-full border ${servicesData[0].tagBorder}`}
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
              </motion.div>

              {/* Card 2: Black */}
              <motion.div
                key={servicesData[1].number}
                style={{
                  top: "var(--stack-gap)",
                  zIndex: 2,
                  y: prefersReducedMotion ? 0 : card2Y,
                  scale: prefersReducedMotion ? 1 : card2Scale,
                  opacity: prefersReducedMotion ? 1 : card2Opacity,
                }}
                className={`absolute inset-x-0 origin-top rounded-[32px] sm:rounded-[36px] border p-6 sm:p-8 md:p-10 min-h-[340px] sm:min-h-[380px] flex flex-col justify-between ${servicesData[1].bgClass}`}
              >
                {/* Top Row: Mono Index Number & Category */}
                <div className="flex items-center justify-between pb-4 sm:pb-5 border-b border-current/10">
                  <span className="font-mono text-sm sm:text-base font-semibold tracking-wider">
                    [{servicesData[1].number}]
                  </span>
                  <span className="font-mono text-xs uppercase tracking-widest opacity-80">
                    Tailored Solution
                  </span>
                </div>

                {/* Main Card Content */}
                <div className="my-6 sm:my-8 max-w-3xl">
                  <h3 className={`text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-3 sm:mb-4 ${servicesData[1].textColor}`}>
                    {servicesData[1].title}
                  </h3>
                  <p className={`text-sm sm:text-base md:text-lg leading-relaxed ${servicesData[1].descColor}`}>
                    {servicesData[1].desc}
                  </p>
                </div>

                {/* Bottom Row: Tags & CTA */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 pt-5 sm:pt-6 border-t border-current/10">
                  <div className="flex flex-wrap gap-2 sm:gap-2.5">
                    {servicesData[1].tags.map((tag) => (
                      <span
                        key={tag}
                        className={`font-mono text-xs px-2.5 sm:px-3 py-1 rounded-full border ${servicesData[1].tagBorder}`}
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
              </motion.div>

              {/* Card 3: Blue */}
              <motion.div
                key={servicesData[2].number}
                style={{
                  top: "calc(var(--stack-gap) * 2)",
                  zIndex: 3,
                  y: prefersReducedMotion ? 0 : card3Y,
                }}
                className={`absolute inset-x-0 origin-top rounded-[32px] sm:rounded-[36px] border p-6 sm:p-8 md:p-10 min-h-[340px] sm:min-h-[380px] flex flex-col justify-between ${servicesData[2].bgClass}`}
              >
                {/* Top Row: Mono Index Number & Category */}
                <div className="flex items-center justify-between pb-4 sm:pb-5 border-b border-current/10">
                  <span className="font-mono text-sm sm:text-base font-semibold tracking-wider">
                    [{servicesData[2].number}]
                  </span>
                  <span className="font-mono text-xs uppercase tracking-widest opacity-80">
                    Tailored Solution
                  </span>
                </div>

                {/* Main Card Content */}
                <div className="my-6 sm:my-8 max-w-3xl">
                  <h3 className={`text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-3 sm:mb-4 ${servicesData[2].textColor}`}>
                    {servicesData[2].title}
                  </h3>
                  <p className={`text-sm sm:text-base md:text-lg leading-relaxed ${servicesData[2].descColor}`}>
                    {servicesData[2].desc}
                  </p>
                </div>

                {/* Bottom Row: Tags & CTA */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 pt-5 sm:pt-6 border-t border-current/10">
                  <div className="flex flex-wrap gap-2 sm:gap-2.5">
                    {servicesData[2].tags.map((tag) => (
                      <span
                        key={tag}
                        className={`font-mono text-xs px-2.5 sm:px-3 py-1 rounded-full border ${servicesData[2].tagBorder}`}
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
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
