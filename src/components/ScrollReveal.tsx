"use client";
// ─── SCROLL REVEAL ────────────────────────────────────────────────────────
// This component runs once on mount and sets up an IntersectionObserver.
// Any element with class "reveal" or "reveal-scale" will animate in
// when it enters the viewport.
// No changes needed unless you want to tweak threshold or rootMargin.

import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.12,       // % of element visible before triggering
        rootMargin: "0px 0px -40px 0px", // trigger slightly before bottom edge
      }
    );

    // Observe all elements marked for animation
    const elements = document.querySelectorAll(".reveal, .reveal-scale");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null; // renders nothing, just runs the effect
}
