"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export function MagneticButton({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;

      const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);
      const maxDistance = 150;

      if (distance < maxDistance) {
        const strength = 1 - distance / maxDistance;
        x.set(distanceX * strength * 0.3);
        y.set(distanceY * strength * 0.3);
      } else {
        x.set(0);
        y.set(0);
      }
    };

    const handleMouseLeave = () => {
      x.set(0);
      y.set(0);
    };

    window.addEventListener("mousemove", handleMouseMove);
    ref.current?.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      ref.current?.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [x, y]);

  return (
    <motion.button
      ref={ref}
      style={{ x: springX, y: springY }}
      className="relative px-12 py-6 text-lg font-bold bg-white text-black rounded-full overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:shadow-white/20"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="relative z-10">{children}</span>
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-zinc-100 to-white"
        initial={{ x: "-100%" }}
        whileHover={{ x: "0%" }}
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  );
}
