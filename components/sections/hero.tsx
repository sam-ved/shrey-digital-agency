"use client";

import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

// 1. Text to animate
const sentence = "SHREY DIGITAL";
const characters = sentence.split("");

// 2. Fixed TypeScript Error: Explicitly type this as 'Variants'
const charVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.5,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  }),
};

export function Hero() {
  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-zinc-950">
      
      {/* --- BACKGROUND LAYERS --- */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 via-zinc-950 to-zinc-950 pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20 pointer-events-none" />

      {/* --- ANIMATED BLOBS (Fixed Syntax) --- */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* --- CENTER GLOW --- */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[800px] md:h-[800px] pointer-events-none"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-800/20 via-zinc-700/10 to-transparent rounded-full blur-3xl" />
      </motion.div>

      {/* --- CONTENT --- */}
      <div className="relative z-10 max-w-6xl mx-auto text-center px-6">
        
        {/* Main Title with Staggered Reveal */}
        <div className="mb-8 overflow-hidden">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-none text-white">
            {characters.map((char, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={charVariants}
                initial="hidden"
                animate="visible"
                className="inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </h1>
        </div>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-xl md:text-2xl text-zinc-400 mb-12 max-w-3xl mx-auto font-light tracking-wide"
        >
          We architect desire.{" "}
          <span className="text-zinc-100 font-medium">
            The growth partner for modern brands.
          </span>
        </motion.p>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <Button 
            onClick={handleScrollToContact}
            size="lg" 
            className="rounded-full px-8 py-6 text-lg bg-white text-black hover:bg-zinc-200 transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
          >
            Start the Project
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-zinc-950 to-transparent pointer-events-none" />
    </section>
  );
}