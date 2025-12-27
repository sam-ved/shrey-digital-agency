"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Instagram, Facebook, Youtube, Twitter } from "lucide-react";

export function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-black/40 backdrop-blur-lg border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo - Hard refresh on click */}
        <a href="/">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold tracking-tight cursor-none"
          >
            <span className="gradient-text">
              SHREY DIGITAL
            </span>
          </motion.div>
        </a>

        {/* Social Icons & Button */}
        <div className="flex items-center gap-6">
          {/* Social Media Icons */}
          <div className="flex items-center gap-4">
            {/* Instagram - Pink/Gradient */}
            <a
              href="https://www.instagram.com/_shrey_digital23?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:scale-110 transition-transform"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            {/* Facebook - Blue */}
            <a
              href="https://www.facebook.com/profile.php?id=100089811272122&ref=_ig_profile_ac"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:scale-110 transition-transform"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
            {/* YouTube - Red */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 hover:scale-110 transition-transform"
              aria-label="YouTube"
            >
              <Youtube size={20} />
            </a>
            {/* Twitter - Blue/White */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-500 hover:scale-110 transition-transform"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
          </div>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/917028210478?text=Hello%20Shrey%20Digital,%20I%20want%20to%20enquire%20about%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 font-semibold px-8 border-0"
            >
              Let's Talk
            </Button>
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
