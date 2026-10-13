import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

export function CustomCursor() {
  const prefersReducedMotion = useReducedMotion();
  const [isVisible, setIsVisible] = useState(false);
  const [cursorType, setCursorType] = useState<"default" | "hover" | "project">("default");
  const [isPointerFine, setIsPointerFine] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { stiffness: 450, damping: 28, mass: 0.1 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Only enable custom cursor for desktop pointer (DESIGN.md §7.3)
    const media = window.matchMedia("(pointer: fine)");
    setIsPointerFine(media.matches);

    if (!media.matches || prefersReducedMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      // Check what element the mouse is hovering over
      const target = e.target as HTMLElement | null;
      if (target) {
        if (target.closest("#projects") && target.closest("article")) {
          setCursorType("project");
        } else if (target.closest("button") || target.closest("a") || target.closest("[role='button']")) {
          setCursorType("hover");
        } else {
          setCursorType("default");
        }
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible, mouseX, mouseY, prefersReducedMotion]);

  if (prefersReducedMotion || !isPointerFine || !isVisible) {
    return null;
  }

  const variants = {
    default: {
      width: 14,
      height: 14,
      backgroundColor: "rgba(11, 11, 12, 0.15)",
      borderColor: "rgba(11, 11, 12, 0.45)",
      scale: 1,
    },
    hover: {
      width: 32,
      height: 32,
      backgroundColor: "rgba(200, 255, 61, 0.3)",
      borderColor: "rgba(11, 11, 12, 0.6)",
      scale: 1.2,
    },
    project: {
      width: 48,
      height: 48,
      backgroundColor: "rgba(200, 255, 61, 0.75)",
      borderColor: "rgba(200, 255, 61, 1)",
      scale: 1.4,
    },
  };

  return (
    <motion.div
      style={{
        x: cursorX,
        y: cursorY,
        translateX: "-50%",
        translateY: "-50%",
      }}
      variants={variants}
      animate={cursorType}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="fixed top-0 left-0 rounded-full border pointer-events-none z-50 shadow-xs"
    />
  );
}
