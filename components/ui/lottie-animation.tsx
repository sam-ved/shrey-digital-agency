"use client";

import { useEffect, useRef, useState } from "react";
import type { AnimationItem } from "lottie-web";

interface LottieAnimationProps {
  src: string;
  className?: string;
}

export function LottieAnimation({ src, className }: LottieAnimationProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const animationRef = useRef<AnimationItem | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  // no-op state removed to satisfy linting

  // Observe visibility to lazy load and play only when in viewport
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.target === el) {
            setIsVisible(entry.isIntersecting);
          }
        }
      },
      { root: null, threshold: 0.1 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
    };
  }, []);

  // Load animation on visibility using lottie-web with canvas renderer
  useEffect(() => {
    let cancelled = false;

    async function loadAndPlay() {
      if (!isVisible || !containerRef.current) return;

      // If already instantiated, just resume playing
      if (animationRef.current) {
        try {
          animationRef.current.play();
        } catch {}
        return;
      }

      try {
        const { default: lottie } = await import("lottie-web");
        const data = await fetch(src).then((r) => r.json());
        if (cancelled || !containerRef.current) return;
        const anim = lottie.loadAnimation({
          container: containerRef.current,
          renderer: "canvas", // GPU-accelerated canvas renderer
          loop: true,
          autoplay: true,
          animationData: data,
          rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
            clearCanvas: true,
          },
        });

        // Respect original AE fps to reduce CPU load
        try {
          anim.setSubframe(false);
        } catch {}

        animationRef.current = anim;
      } catch (error) {
        console.error("Error loading animation:", error);
      }
    }

    loadAndPlay();

    return () => {
      cancelled = true;
    };
  }, [isVisible, src]);

  // Pause when out of viewport to save resources
  useEffect(() => {
    const anim = animationRef.current;
    if (!anim) return;
    try {
      if (isVisible) anim.play();
      else anim.pause();
    } catch {}
  }, [isVisible]);

  // Cleanup on unmount or src change
  useEffect(() => {
    return () => {
      if (animationRef.current) {
        try {
          animationRef.current.destroy();
        } catch {}
        animationRef.current = null;
      }
    };
  }, [src]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full overflow-hidden ${className ?? ""}`}
    />
  );
}