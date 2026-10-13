import React, { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useI18n } from "../../i18n";
import { processSteps } from "../../data/process";

function StepCircle({
  number,
  threshold,
  progress,
  isReduced,
}: {
  number: string;
  threshold: number;
  progress: any;
  isReduced: boolean | null;
}) {
  // If reduced motion, show accent background
  const bg = useTransform(
    progress,
    [threshold - 0.05, threshold],
    ["#FAFAF7", "#C8FF3D"]
  );

  if (isReduced) {
    return (
      <div className="w-14 h-14 rounded-full bg-accent text-ink border-2 border-ink flex items-center justify-center font-mono font-bold text-base shadow-xs select-none">
        {number}
      </div>
    );
  }

  return (
    <motion.div
      style={{ backgroundColor: bg }}
      className="w-14 h-14 rounded-full border-2 border-ink text-ink flex items-center justify-center font-mono font-bold text-base shadow-xs select-none transition-colors duration-200"
    >
      {number}
    </motion.div>
  );
}

export function ProcessTimeline() {
  const { t } = useI18n();
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "center 0.4"],
  });

  const lineScaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const thresholds = [0.1, 0.5, 0.9];

  return (
    <div ref={containerRef} className="relative">
      {/* Background Track Line (Desktop) */}
      <div className="hidden lg:block absolute top-[28px] left-0 right-0 h-[2px] bg-line z-0" />

      {/* Animated Drawing Accent Line (Desktop) */}
      {!prefersReducedMotion && (
        <motion.div
          style={{ scaleX: lineScaleX, transformOrigin: "left" }}
          className="hidden lg:block absolute top-[28px] left-0 right-0 h-[2px] bg-ink z-0"
        />
      )}

      {/* 3 Step Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10 relative z-10">
        {processSteps.map((step, idx) => (
          <div key={step.number} className="flex flex-col gap-6">
            {/* Step Circle & Number */}
            <div className="flex items-center gap-4">
              <StepCircle
                number={step.number}
                threshold={thresholds[idx]}
                progress={scrollYProgress}
                isReduced={prefersReducedMotion}
              />
              <div className="lg:hidden h-[1px] flex-1 bg-line" />
            </div>

            {/* Step Title & Description */}
            <div className="flex flex-col gap-3">
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-ink">
                {t(step.titleKey)}
              </h3>
              <p className="text-base text-ink-muted leading-relaxed">
                {t(step.descKey)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
