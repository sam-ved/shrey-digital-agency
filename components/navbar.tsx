"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-zinc-950/80 backdrop-blur-lg border-b border-zinc-800/50"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold tracking-tight"
        >
          <span className="bg-gradient-to-r from-white via-zinc-100 to-zinc-400 bg-clip-text text-transparent">
            SHREY
          </span>
        </motion.div>

        {/* Book Button */}
        <Button
          size="lg"
          className="bg-white text-black hover:bg-zinc-200 transition-all duration-300 font-semibold px-8"
        >
          Book
        </Button>
      </div>
    </motion.nav>
  );
}
