"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function VideoHero() {
  const [currentWord, setCurrentWord] = useState(0);
  const words = ["PLAN", "PRODUCE", "PERFORM"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="https://assets.mixkit.co/videos/preview/mixkit-abstract-digital-tunnel-with-neon-lights-28116-large.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-6xl md:text-8xl lg:text-9xl font-bold text-center mb-8"
        >
          Powering Bold
          <br />
          <span className="gradient-text">Beginnings</span>
        </motion.h1>

        {/* Animated Words */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="h-20 flex items-center justify-center"
        >
          {words.map((word, index) => (
            <motion.p
              key={word}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: currentWord === index ? 1 : 0,
                y: currentWord === index ? 0 : 20,
              }}
              transition={{ duration: 0.5 }}
              className="absolute text-4xl md:text-6xl font-bold tracking-wider"
              style={{
                color: index === 0 ? "#7c3aed" : index === 1 ? "#3b82f6" : "#a855f7",
              }}
            >
              {word}
            </motion.p>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            opacity: { delay: 1, duration: 0.8 },
            y: { repeat: Infinity, duration: 1.5, ease: "easeInOut" },
          }}
          className="absolute bottom-10 flex flex-col items-center gap-2"
        >
          <span className="text-sm text-white/60 uppercase tracking-widest">Scroll</span>
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="w-1.5 h-1.5 bg-white/60 rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
