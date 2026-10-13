import React, { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { cn } from "../../lib/utils";

interface WordRevealProps {
  text: string;
  className?: string;
}

function Word({
  children,
  progress,
  range,
}: {
  children: string;
  progress: any;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.2, 1]);

  return (
    <span className="inline-block relative mr-[0.28em] my-[0.05em]">
      <motion.span style={{ opacity }}>
        {children}
      </motion.span>
    </span>
  );
}

export function WordReveal({ text, className }: WordRevealProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.85", "center 0.45"],
  });

  const words = text.split(" ");

  if (prefersReducedMotion) {
    return <p className={cn(className)}>{text}</p>;
  }

  return (
    <p
      ref={containerRef}
      className={cn("flex flex-wrap text-balance", className)}
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word
            key={`${word}-${i}`}
            progress={scrollYProgress}
            range={[start, end]}
          >
            {word}
          </Word>
        );
      })}
    </p>
  );
}
