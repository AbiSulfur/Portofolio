import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ease, dur } from "../../motion/tokens";
import { cn } from "../../lib/utils";

interface LineRevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export function LineReveal({ children, delay = 0, className }: LineRevealProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <span className={cn("block", className)}>{children}</span>;
  }

  return (
    <span className={cn("block overflow-hidden", className)}>
      <motion.span
        className="block"
        initial={{ y: "112%" }}
        animate={{ y: "0%" }}
        transition={{
          duration: dur.hero,
          ease: ease.inOutExpo,
          delay,
        }}
      >
        {children}
      </motion.span>
    </span>
  );
}
