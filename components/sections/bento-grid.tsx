"use client";

import { motion } from "framer-motion";
import { Search, Palette, TrendingUp, Video } from "lucide-react";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  delay?: number;
}

function ServiceCard({ title, description, icon, className, delay = 0 }: ServiceCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.02, y: -5 }}
      className={`group relative p-8 bg-zinc-900/50 border border-zinc-800/50 rounded-3xl overflow-hidden transition-all duration-500 hover:border-zinc-700 hover:shadow-2xl hover:shadow-zinc-900/50 ${className}`}
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-800/0 via-zinc-700/0 to-zinc-600/0 opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
      <div className="absolute -inset-1 bg-gradient-to-r from-zinc-600/20 to-zinc-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

      {/* Icon */}
      <div className="relative mb-6 inline-flex">
        <motion.div
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6 }}
          className="p-4 bg-zinc-800/50 rounded-2xl border border-zinc-700/50 group-hover:border-zinc-600"
        >
          {icon}
        </motion.div>
      </div>

      {/* Content */}
      <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-zinc-100 transition-colors">
        {title}
      </h3>
      <p className="text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">
        {description}
      </p>

      {/* Decorative corner */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-zinc-700/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
}

export function BentoGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-32 px-6 bg-zinc-950 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900/20 via-zinc-950 to-zinc-950" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-zinc-100 to-zinc-400 bg-clip-text text-transparent">
            What We Do
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            We transform brands into movements through strategic design and performance-driven marketing.
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Large card spanning 2 columns */}
          <ServiceCard
            title="SEO & Authority"
            description="Dominate search rankings and build unshakeable brand authority. We craft content strategies that convert visitors into devoted customers."
            icon={<Search className="w-8 h-8 text-zinc-300" />}
            className="lg:col-span-2"
            delay={0.1}
          />

          {/* Regular card */}
          <ServiceCard
            title="Brand Identity"
            description="From naming to visual systems, we create identities that resonate and endure in the minds of your audience."
            icon={<Palette className="w-8 h-8 text-zinc-300" />}
            delay={0.2}
          />

          {/* Regular card */}
          <ServiceCard
            title="Performance Marketing"
            description="Data-obsessed campaigns that maximize ROI. Every dollar spent is a strategic investment in your growth."
            icon={<TrendingUp className="w-8 h-8 text-zinc-300" />}
            delay={0.3}
          />

          {/* Large card spanning 2 columns */}
          <ServiceCard
            title="Content Production"
            description="Cinematic storytelling meets strategic messaging. We produce video, photography, and motion design that stops scrolls and starts conversations."
            icon={<Video className="w-8 h-8 text-zinc-300" />}
            className="lg:col-span-2"
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
}
