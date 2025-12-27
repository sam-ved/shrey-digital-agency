"use client";

import { motion } from "framer-motion";

const recentWorks = [
  {
    id: 1,
    title: "UI Design",
    subtitle: "Modern Interface",
    image: "/assets/images/recent-works/project-1.svg",
  },
  {
    id: 2,
    title: "Brand",
    subtitle: "Identity System",
    image: "/assets/images/recent-works/project-2.svg",
  },
  {
    id: 3,
    title: "Web Design",
    subtitle: "Interactive Platform",
    image: "/assets/images/recent-works/project-3.svg",
  },
  {
    id: 4,
    title: "Marketing",
    subtitle: "Campaign Design",
    image: "/assets/images/recent-works/project-4.svg",
  },
  {
    id: 5,
    title: "Mobile App",
    subtitle: "Interface Design",
    image: "/assets/images/recent-works/project-5.svg",
  },
  {
    id: 6,
    title: "Content",
    subtitle: "Creation Suite",
    image: "/assets/images/recent-works/project-6.svg",
  },
];

export function RecentWorks() {
  return (
    <section className="relative py-32 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            Recent <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Works</span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Showcase of our latest digital projects and creative solutions
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentWorks.map((work, index) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl cursor-none"
            >
              {/* Image Container */}
              <div className="relative aspect-square overflow-hidden rounded-xl bg-zinc-900">
                <motion.img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                  >
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                      {work.title}
                    </h3>
                    <p className="text-white/70 text-sm md:text-base">{work.subtitle}</p>
                  </motion.div>
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 via-transparent to-blue-600/0 group-hover:from-purple-600/20 group-hover:to-blue-600/20 transition-all duration-500 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
