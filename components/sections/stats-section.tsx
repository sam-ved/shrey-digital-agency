"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

const stats = [
  { label: "Projects", value: 140, suffix: "+" },
  { label: "Clients", value: 150, suffix: "+" },
  { label: "Team", value: 14, suffix: "" },
];

export function StatsSection() {
  return (
    <section className="relative py-20 px-4 bg-zinc-950 border-y border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {stats.map((stat, index) => (
            <StatCounter key={stat.label} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCounter({
  stat,
  index,
}: {
  stat: { label: string; value: number; suffix: string };
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness: 100,
  });
  const displayValue = useMotionValue(0);

  useEffect(() => {
    if (isInView) {
      motionValue.set(stat.value);
    }
  }, [isInView, motionValue, stat.value]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      displayValue.set(Math.round(latest));
    });
  }, [springValue, displayValue]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="text-center"
    >
      {/* Counter */}
      <div className="mb-4">
        <motion.span className="text-6xl md:text-8xl font-bold gradient-text inline-block">
          {isInView && <CountUpAnimation value={stat.value} />}
          <span className="text-purple-500">{stat.suffix}</span>
        </motion.span>
      </div>

      {/* Label */}
      <p className="text-xl md:text-2xl text-white/60 font-medium">{stat.label}</p>
    </motion.div>
  );
}

function CountUpAnimation({ value }: { value: number }) {
  const [count, setCount] = React.useState(0);
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true });

  React.useEffect(() => {
    if (!isInView) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = value / steps;
    const stepDuration = duration / steps;

    let currentCount = 0;
    const timer = setInterval(() => {
      currentCount += increment;
      if (currentCount >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(currentCount));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return <span ref={nodeRef}>{count}</span>;
}

import React from "react";
