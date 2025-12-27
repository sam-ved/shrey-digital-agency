"use client";

import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail, ArrowUp } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const quickLinks = [
  { name: "Home", href: "#" },
  { name: "Services", href: "#services" },
  { name: "Contact Us", href: "#contact" },
];

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/profile.php?id=100089811272122&ref=_ig_profile_ac", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/_shrey_digital23?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", label: "Instagram" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
];

export function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer className="relative bg-[#0a0a0a] text-white border-t border-white/10 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-transparent to-blue-600/20" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-20">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-12">
            {/* Column 1: Brand */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* Logo - Clickable */}
              <button
                onClick={scrollToTop}
                className="text-left hover:opacity-80 transition-opacity cursor-none"
                aria-label="Scroll to top"
              >
                <h3 className="text-3xl font-bold mb-3 text-white">
                  Shrey Digital
                </h3>
              </button>
              <p className="text-white/60 leading-relaxed text-sm">
                Crafting exceptional digital experiences through thoughtful design and innovative solutions.
              </p>

              {/* Social Icons */}
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:border-purple-500 hover:bg-purple-500/10 transition-colors group"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-zinc-400 group-hover:text-purple-500 transition-all group-hover:scale-110" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Column 2: Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-6"
            >
              <h4 className="text-xl font-bold mb-4 text-white">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-white/60 hover:text-purple-500 transition-colors inline-flex items-center group"
                    >
                      <span className="w-0 h-0.5 bg-purple-500 group-hover:w-6 transition-all duration-300 mr-0 group-hover:mr-2" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Column 3: Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <h4 className="text-xl font-bold mb-4 text-white">
                Get in Touch
              </h4>
              <div className="space-y-4">
                {/* Address */}
                <div className="flex items-start gap-3 group">
                  <MapPin className="w-5 h-5 text-white flex-shrink-0 mt-0.5 group-hover:text-purple-500 group-hover:scale-110 transition-all" />
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=19.8761953,75.3365746"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 text-sm leading-relaxed hover:text-white hover:underline cursor-pointer transition-colors"
                  >
                    63 Neeldeep residency opposite Krishna hospital, Rokda Hanuman Colony, Jalna Road, Chhatrapati Sambhajinagar, 431001
                  </a>
                </div>

                {/* Phone */}
                <a
                  href="tel:+917028210478"
                  className="flex items-center gap-3 text-white/60 hover:text-purple-500 transition-colors group"
                >
                  <Phone className="w-5 h-5 text-white flex-shrink-0 group-hover:text-purple-500 group-hover:scale-110 transition-all" />
                  <span className="text-sm">+91 70282 10478</span>
                </a>

                {/* Email */}
                <a
                  href="mailto:shreydigital23@gmail.com"
                  className="flex items-center gap-3 text-white/60 hover:text-purple-500 transition-colors group"
                >
                  <Mail className="w-5 h-5 text-white flex-shrink-0 group-hover:text-purple-500 group-hover:scale-110 transition-all" />
                  <span className="text-sm break-all">shreydigital23@gmail.com</span>
                </a>
              </div>

              {/* Embedded Map */}
              <div className="mt-6 rounded-lg overflow-hidden border border-white/10">
                <iframe
                  title="Shrey Digital Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d943.1239584167644!2d75.3365746!3d19.8761953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sShrey%20Digital!5e0!3m2!1sen!2sin!4v1703671234567!5m2!1sen!2sin"
                  width="100%"
                  height="200"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  className="border-0"
                />
              </div>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-white/40 text-sm">
                © {new Date().getFullYear()} Shrey Digital. All rights reserved.
              </p>
              <div className="flex gap-6 text-sm">
                <Link href="#" className="text-white/40 hover:text-purple-500 transition-colors">
                  Privacy Policy
                </Link>
                <Link href="#" className="text-white/40 hover:text-purple-500 transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button - Glassmorphism */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: showScrollTop ? 1 : 0,
          scale: showScrollTop ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 hover:border-transparent transition-all duration-300 group"
        style={{
          boxShadow: showScrollTop ? '0 0 0 rgba(124, 58, 237, 0)' : undefined,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = '0 0 20px rgba(124, 58, 237, 0.5)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = '0 0 0 rgba(124, 58, 237, 0)';
        }}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5 text-white font-bold" strokeWidth={2.5} />
      </motion.button>
    </>
  );
}
