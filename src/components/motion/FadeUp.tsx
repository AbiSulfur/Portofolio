import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ease, dur } from "../../motion/tokens";
import { cn } from "../../lib/utils";

interface FadeUpProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
  className?: string;
}

export function FadeUp({
  children,
  delay = 0,
  duration = dur.slow,
  yOffset = 24,
  className,
}: FadeUpProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration,
        ease: ease.outExpo,
        delay,
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
