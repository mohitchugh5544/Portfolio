"use client";

import React, { useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function SpotlightCard({
  children,
  className = "",
  delay = 0,
}: SpotlightCardProps) {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current || prefersReducedMotion) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      ref={divRef}
      initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: prefersReducedMotion ? 0 : 0.35,
        delay: prefersReducedMotion ? 0 : delay,
        ease: "easeOut",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => !prefersReducedMotion && setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0d0d14] transition-colors duration-200 hover:border-indigo-500/30 ${className}`}
    >
      {/* Subtle Indigo Mouse Spotlight */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(500px circle at ${position.x}px ${position.y}px, rgba(99, 102, 241, 0.12), transparent 45%)`,
        }}
      />

      <div className="relative z-10 h-full">{children}</div>
    </motion.div>
  );
}
