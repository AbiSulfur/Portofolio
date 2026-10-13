import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ease, dur } from "../../motion/tokens";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardMediaProps {
  image: string;
  title: string;
  number: string;
  category: string;
  accentColor: string;
}

export function ProjectCardMedia({
  image,
  title,
  number,
  category,
}: ProjectCardMediaProps) {
  const [isHovered, setIsHovered] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative aspect-[4/3.4] w-full overflow-hidden rounded-[24px] sm:rounded-[32px] bg-surface-dark border border-line-dark shadow-lg group cursor-pointer"
    >
      <motion.img
        src={image}
        alt={`${title} screenshot`}
        loading="lazy"
        decoding="async"
        className="w-full h-full object-cover object-top"
        animate={{
          scale: !prefersReducedMotion && isHovered ? 1.08 : 1,
        }}
        transition={{
          duration: 1.2,
          ease: ease.outExpo,
        }}
      />

      {/* Top-Right Category Chip */}
      <div className="absolute top-4 right-4 z-10">
        <span className="font-mono text-xs px-3 py-1.5 rounded-full bg-ink/85 backdrop-blur-md text-text-on-dark border border-line-dark">
          {category}
        </span>
      </div>

      {/* Top-Left Project Number */}
      <div className="absolute top-4 left-4 z-10">
        <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded-full bg-accent text-ink">
          {number}
        </span>
      </div>

      {/* Subtle overlay on hover */}
      <motion.div
        className="absolute inset-0 bg-black/20 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* Circular "View" Bubble (DESIGN.md §6.4 & §7.3) */}
      {!prefersReducedMotion && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: isHovered ? 1 : 0,
            opacity: isHovered ? 1 : 0,
          }}
          transition={{
            duration: dur.base,
            ease: ease.outExpo,
          }}
        >
          <div className="w-20 h-20 rounded-full bg-accent text-ink font-display font-bold text-sm flex items-center justify-center gap-1 shadow-2xl select-none">
            <span>View</span>
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </motion.div>
      )}
    </div>
  );
}
