"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export function CursorEffect() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  
  const mouseX = useRef(0);
  const mouseY = useRef(0);
  const dotX = useRef(0);
  const dotY = useRef(0);
  const ringX = useRef(0);
  const ringY = useRef(0);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mouseX.current = event.clientX;
      mouseY.current = event.clientY;
    };

    const handleMouseOver = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);

    const animate = () => {
      // Smooth trailing effect - dot follows closely
      dotX.current += (mouseX.current - dotX.current) * 0.2;
      dotY.current += (mouseY.current - dotY.current) * 0.2;

      // Ring follows with more lag
      ringX.current += (mouseX.current - ringX.current) * 0.1;
      ringY.current += (mouseY.current - ringY.current) * 0.1;

      if (dotRef.current) {
        dotRef.current.style.left = `${dotX.current}px`;
        dotRef.current.style.top = `${dotY.current}px`;
      }

      if (ringRef.current) {
        ringRef.current.style.left = `${ringX.current}px`;
        ringRef.current.style.top = `${ringY.current}px`;
      }

      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <>
      {/* Small white dot that trails the mouse */}
      <motion.div
        ref={dotRef}
        className="fixed w-2 h-2 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{ transform: "translate(-50%, -50%)" }}
      />

      {/* Expanding ring on hover */}
      <motion.div
        ref={ringRef}
        className="fixed rounded-full pointer-events-none z-[9998] border-2 border-white/40"
        style={{ 
          transform: "translate(-50%, -50%)",
          backdropFilter: "blur(2px)",
        }}
        animate={{
          width: isHovering ? 60 : 30,
          height: isHovering ? 60 : 30,
          opacity: isHovering ? 0.6 : 0.3,
        }}
        transition={{
          duration: 0.3,
          ease: "easeOut",
        }}
      />
    </>
  );
}
