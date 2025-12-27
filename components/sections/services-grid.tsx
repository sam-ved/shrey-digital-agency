"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { LottieAnimation } from "@/components/ui/lottie-animation";

const services = [
  {
    title: "Brand Strategy",
    description: "Craft compelling brand narratives that resonate with your audience",
    animationSrc: "/assets/animations/brand-strategy.json",
  },
  {
    title: "Content Production",
    description: "Cinematic visuals and engaging content that captivates",
    animationSrc: "/assets/animations/content-production.json",
  },
  {
    title: "Growth Marketing",
    description: "Data-driven campaigns that scale your business exponentially",
    animationSrc: "/assets/animations/growth-marketing.json",
  },
  {
    title: "Social Media",
    description: "Build communities and drive engagement across all platforms",
    animationSrc: "/assets/animations/social-media.json",
  },
  {
    title: "SEO & Analytics",
    description: "Dominate search rankings with strategic optimization",
    animationSrc: "/assets/animations/seo-analytics.json",
  },
  {
    title: "Design & UX",
    description: "Create stunning experiences that convert visitors to customers",
    animationSrc: "/assets/animations/design-ux.json",
  },
];

export function ServicesGrid() {
  return (
    <section id="services" className="relative py-32 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            What We <span className="gradient-text">Create</span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Full-spectrum digital solutions for ambitious brands
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  index,
}: {
  service: { animationSrc: string; title: string; description: string };
  index: number;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group"
    >
      <div className="relative h-full bg-zinc-950 border border-white/10 rounded-2xl p-8 overflow-hidden transition-all duration-500">
        {/* Animated Gradient Border */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: "linear-gradient(90deg, #7c3aed, #3b82f6, #7c3aed)",
            backgroundSize: "200% 200%",
          }}
          animate={
            isHovered
              ? {
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }
              : {}
          }
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Card Content */}
        <div className="relative z-10 bg-zinc-950 rounded-xl p-6 h-full flex flex-col overflow-hidden">
          {/* Animation as cover */}
          <motion.div
            animate={isHovered ? { scale: 1.02 } : { scale: 1 }}
            transition={{ duration: 0.3 }}
            className="-mx-6 -mt-6 mb-6 h-56 md:h-64 overflow-hidden rounded-t-xl bg-zinc-900/40"
          >
            <LottieAnimation src={service.animationSrc} className="w-full h-full" />
          </motion.div>

          {/* Title */}
          <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-400 transition-colors">
            {service.title}
          </h3>

          {/* Description */}
          <p className="text-white/60 mb-6 flex-grow">{service.description}</p>

          {/* WhatsApp Button that slides up */}
          <motion.a
            initial={{ y: 20, opacity: 0 }}
            animate={isHovered ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            href="https://wa.me/917028210478?text=Hello%20Shrey%20Digital,%20I%20want%20to%20enquire%20about%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full py-3 px-6 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-shadow text-center"
          >
            Enquire Now
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}
