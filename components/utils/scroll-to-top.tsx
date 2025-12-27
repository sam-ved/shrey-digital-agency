"use client";

import { useEffect } from "react";

export function ScrollToTop() {
  useEffect(() => {
    // Force scroll to top on component mount (page load/refresh)
    window.scrollTo(0, 0);
  }, []);

  return null;
}
