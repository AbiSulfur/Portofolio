import React, { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

interface StickyCardProps {
  children: React.ReactNode;
  index: number;
  total: number;
  topOffset?: number | string;
  bgClass: string;
  className?: string;
}

export function StickyCard({
  children,
  index,
  total,
  topOffset,
  bgClass,
  className = "",
}: StickyCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const isLast = index === total - 1;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, isLast ? 1 : 0.96]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, isLast ? 1 : 0.92]);

  const topValue =
    topOffset !== undefined
      ? typeof topOffset === "number"
        ? `${topOffset}px`
        : topOffset
      : `calc(var(--stack-start) + ${index} * var(--stack-gap))`;

  if (prefersReducedMotion) {
    return (
      <div
        ref={containerRef}
        style={{ top: topValue, zIndex: index + 1 }}
        className={`sticky rounded-[32px] sm:rounded-[36px] border p-6 sm:p-8 md:p-10 min-h-[340px] sm:min-h-[380px] flex flex-col justify-between ${bgClass} ${className}`}
      >
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={containerRef}
      style={{
        top: topValue,
        zIndex: index + 1,
        scale,
        opacity,
      }}
      className={`sticky origin-top rounded-[32px] sm:rounded-[36px] border p-6 sm:p-8 md:p-10 min-h-[340px] sm:min-h-[380px] flex flex-col justify-between shadow-lg ${bgClass} ${className}`}
    >
      {children}
    </motion.div>
  );
}
