"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

interface CaseStudyProps {
  client: string;
  category: string;
  description: string;
  image: string;
  delay?: number;
}

function CaseStudyCard({ client, category, description, delay = 0 }: CaseStudyProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.7, delay }}
      className="group relative overflow-hidden rounded-3xl bg-zinc-900/50 border border-zinc-800/50"
    >
      {/* Image/Video Placeholder - 16:9 aspect ratio */}
      <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-zinc-800 to-zinc-900">
        {/* Placeholder gradient background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-zinc-700 via-zinc-800 to-zinc-900"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />

        {/* Animated overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

        {/* Video play indicator */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          whileHover={{ scale: 1.1 }}
        >
          <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
            <div className="w-0 h-0 border-l-[12px] border-l-white border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1" />
          </div>
        </motion.div>
      </div>

      {/* Content overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-zinc-950 via-zinc-950/95 to-transparent">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm text-zinc-400 mb-2 uppercase tracking-wider">
              {category}
            </p>
            <h3 className="text-3xl font-bold mb-2 text-white group-hover:text-zinc-100 transition-colors">
              {client}
            </h3>
            <p className="text-zinc-400 leading-relaxed max-w-xl">
              {description}
            </p>
          </div>

          {/* Arrow icon */}
          <motion.div
            whileHover={{ x: 5, y: -5 }}
            className="flex-shrink-0 p-3 bg-zinc-800/50 rounded-full border border-zinc-700/50 group-hover:border-zinc-600 group-hover:bg-zinc-800 transition-all"
          >
            <ArrowUpRight className="w-5 h-5 text-zinc-300" />
          </motion.div>
        </div>
      </div>

      {/* Glow effect on hover */}
      <div className="absolute -inset-1 bg-gradient-to-r from-zinc-600/20 to-zinc-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
    </motion.div>
  );
}

export function WorkSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const caseStudies = [
    {
      client: "TechVision AI",
      category: "Brand Identity & Web",
      description: "A complete rebrand for an AI startup disrupting the enterprise software space. Created a visual system that communicates trust and innovation.",
      image: "/placeholder-1.jpg",
    },
    {
      client: "Luxe Skincare",
      category: "Performance Marketing",
      description: "Scaled from $50k to $2M in monthly revenue through strategic paid media and conversion optimization.",
      image: "/placeholder-2.jpg",
    },
    {
      client: "Metro Eats",
      category: "Content Production",
      description: "A full-scale video campaign featuring 12 cinematic spots showcasing local restaurants and food culture.",
      image: "/placeholder-3.jpg",
    },
    {
      client: "Quantum Finance",
      category: "SEO & Authority",
      description: "Dominated search rankings for high-value keywords in the fintech space, driving 400% organic traffic growth.",
      image: "/placeholder-4.jpg",
    },
  ];

  return (
    <section ref={ref} className="relative py-32 px-6 bg-zinc-950">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-zinc-900/20 via-zinc-950 to-zinc-950" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-zinc-100 to-zinc-400 bg-clip-text text-transparent">
            Selected Work
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Transformative projects that pushed boundaries and delivered exceptional results.
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <CaseStudyCard
              key={study.client}
              {...study}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
