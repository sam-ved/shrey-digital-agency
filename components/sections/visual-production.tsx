"use client";

import Image from "next/image";

const services = [
  { id: 1, title: "Film Editing", desc: "Seamless storytelling with precise cuts and professional flow.", img: "/assets/production/film-editing.jpg" },
  { id: 2, title: "Color Grading", desc: "Enhance every frame with rich, cinematic color tones.", img: "/assets/production/color-grading.jpg" },
  { id: 3, title: "Video Editing", desc: "From raw footage to stunning final output, crafted to engage.", img: "/assets/production/video-editing.jpg" },
  { id: 4, title: "Product Shoot", desc: "Capture your products with creative lighting and aesthetic precision.", img: "/assets/production/product-shoot.jpg" },
];

export function VisualProduction() {
  return (
    <section id="visual-production" className="relative bg-[#050505] py-20 px-4">
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="text-center space-y-3">
          <h2 className="text-4xl font-bold text-white">Visual Production Excellence</h2>
          <div className="mx-auto h-1.5 w-24 rounded-full bg-gradient-to-r from-purple-600 to-blue-600" aria-hidden />
          <p className="text-base md:text-lg text-zinc-400">
            We bring stories to life through powerful visuals and cinematic creativity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.slice(0, 3).map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <div className="flex justify-center">
          <div className="w-full md:w-2/3 lg:w-1/3">
            <ServiceCard service={services[3]} />
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
}: {
  service: { id?: number; title: string; desc: string; img: string };
}) {
  return (
    <article className="relative h-[400px] rounded-2xl overflow-hidden group cursor-pointer border border-white/5 transition duration-500 hover:ring-2 hover:ring-purple-500/50">
      <Image
        src={service.img}
        alt=""
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
        loading="lazy"
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        priority={false}
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"
        aria-hidden
      />

      <div className="relative z-10 h-full flex flex-col justify-end p-8 space-y-3">
        <div className="space-y-2 transform transition duration-300 group-hover:-translate-y-1">
          <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
          <p className="text-sm text-zinc-300 leading-relaxed">{service.desc}</p>
        </div>

        <div className="pt-2">
          <a
            href="https://wa.me/917028210478?text=Hello%20Shrey%20Digital,%20I%20want%20to%20enquire%20about%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-white/10 backdrop-blur-md text-sm font-semibold text-white border border-white/20 transition-colors duration-300 hover:bg-purple-600 hover:border-purple-600"
          >
            Enquire Now
          </a>
        </div>
      </div>
    </article>
  );
}
