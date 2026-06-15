"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  // Mouse positions
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth spring-lagged position for outer ring
  const ringX = useSpring(mouseX, { stiffness: 220, damping: 25, mass: 0.3 });
  const ringY = useSpring(mouseY, { stiffness: 220, damping: 25, mass: 0.3 });

  // Direct fast position for inner dot
  const dotX = useSpring(mouseX, { stiffness: 1000, damping: 50, mass: 0.1 });
  const dotY = useSpring(mouseY, { stiffness: 1000, damping: 50, mass: 0.1 });

  useEffect(() => {
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    if (isTouchDevice || prefersReducedMotion) {
      return;
    }

    setMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      const interactive =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.tagName === "SELECT" ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest("[role='button']") ||
        target.style.cursor === "pointer";

      setIsHovered(!!interactive);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mouseover", handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY, isVisible, prefersReducedMotion]);

  if (!mounted || prefersReducedMotion) {
    return null;
  }

  return (
    <>
      <motion.div
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          backgroundColor: "#3b82f6",
          pointerEvents: "none",
          zIndex: 99999,
          x: dotX,
          y: dotY,
          transform: "translate(-50%, -50%)",
          opacity: isVisible ? 1 : 0,
        }}
        animate={{
          scale: isHovered ? 0.6 : 1,
        }}
        transition={{ duration: 0.15 }}
      />
      <motion.div
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          width: "28px",
          height: "28px",
          borderRadius: "50%",
          border: "1.5px solid rgba(59, 130, 246, 0.45)",
          pointerEvents: "none",
          zIndex: 99998,
          x: ringX,
          y: ringY,
          transform: "translate(-50%, -50%)",
          opacity: isVisible ? 1 : 0,
        }}
        animate={{
          scale: isHovered ? 1.6 : 1,
          backgroundColor: isHovered ? "rgba(59, 130, 246, 0.08)" : "rgba(59, 130, 246, 0)",
          borderColor: isHovered ? "rgba(59, 130, 246, 0.7)" : "rgba(59, 130, 246, 0.45)",
        }}
        transition={{ duration: 0.2 }}
      />
    </>
  );
}
