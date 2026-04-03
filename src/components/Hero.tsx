// ─── HERO SECTION ─────────────────────────────────────────────────────────
// Full-screen hero with background image, gradient overlay, and CTAs.
//
// TO CHANGE:
//   • Background image → replace /hero-bg.jpg in /public/ with your own image
//     (recommended: 1920×1080 or larger, dark/moody barber shop photo)
//   • HEADLINE, SUBTEXT → update the text strings below
//   • BOOKING_URL → your Appointedd booking link
//   • The scroll indicator arrow at the bottom auto-scrolls to #services

import Image from "next/image";
import Link from "next/link";

// ─── CONTENT ──────────────────────────────────────────────────────────────
// Edit these strings to change the hero copy
const HEADLINE = "Precision Cuts.\nClean Style.";
const SUBHEADLINE = "Edinburgh's Local Barber.";
const SUBTEXT =
  "Premium grooming, relaxed atmosphere, and consistent quality — every visit.";
const BOOKING_URL = "https://massbarber.appointedd.com"; // ← Your booking URL

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero"
    >
      {/* ─── BACKGROUND IMAGE ──────────────────────────────────────────
          Replace /hero-bg.jpg with your own hero image.
          The image should be placed at: /public/hero-bg.jpg
          Ideal dimensions: 1920×1080px minimum. Dark, atmospheric works best.
          ─────────────────────────────────────────────────────────────── */}
      <div className="absolute inset-0">
        <Image
          src="/hero-bg.jpg"
          alt="Mass Barber Shop Edinburgh — premium barber chair"
          fill
          priority                  // loads immediately (above the fold)
          quality={90}
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      {/* ─── GRADIENT OVERLAY ──────────────────────────────────────────
          Multi-layer gradient: dark at top (for navbar), very dark at bottom.
          Adjust the opacity values to suit your photo's brightness.
          ─────────────────────────────────────────────────────────────── */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/20" />

      {/* ─── DECORATIVE GRID LINES ─────────────────────────────────────
          Subtle background texture. Remove this div to disable it.
          ─────────────────────────────────────────────────────────────── */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#c9a84c 1px, transparent 1px), linear-gradient(90deg, #c9a84c 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* ─── HERO CONTENT ──────────────────────────────────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 pt-20 pb-32">
        <div className="max-w-3xl">

          {/* Eyebrow label */}
          <div className="flex items-center gap-3 mb-8 animate-fadeIn">
            <span className="block w-8 h-px bg-[#c9a84c]" />
            <span className="text-[#c9a84c] text-xs tracking-[0.3em] uppercase font-body font-medium">
              Edinburgh, Scotland {/* ← Change city/location */}
            </span>
          </div>

          {/* Main headline */}
          <h1 className="font-display font-bold leading-[1.05] mb-4 animate-fadeUp"
            style={{ animationDelay: "0.1s", opacity: 0 }}>
            <span className="block text-5xl sm:text-7xl lg:text-8xl text-white whitespace-pre-line">
              {HEADLINE}
            </span>
            <span className="block text-5xl sm:text-7xl lg:text-8xl gold-text mt-1">
              {SUBHEADLINE}
            </span>
          </h1>

          {/* Subtext */}
          <p
            className="text-[#b0b0b0] text-lg sm:text-xl font-body font-light max-w-xl leading-relaxed mb-12 animate-fadeUp"
            style={{ animationDelay: "0.3s", opacity: 0 }}
          >
            {SUBTEXT}
          </p>

          {/* CTA buttons */}
          <div
            className="flex flex-wrap gap-4 animate-fadeUp"
            style={{ animationDelay: "0.5s", opacity: 0 }}
          >
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
            >
              Book Appointment
            </a>
            <Link href="#services" className="btn-outline">
              View Services
            </Link>
          </div>

          {/* Social proof strip */}
          <div
            className="mt-16 flex items-center gap-6 animate-fadeUp"
            style={{ animationDelay: "0.7s", opacity: 0 }}
          >
            <div className="flex -space-x-2">
              {/* Placeholder avatar circles — replace with real customer photos */}
              {["#555", "#666", "#777"].map((bg, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-[#c9a84c]/30 bg-[#2a2a2a]"
                  style={{ backgroundColor: bg }}
                />
              ))}
            </div>
            <div>
              <div className="flex text-[#c9a84c] text-sm gap-0.5">
                {"★★★★★".split("").map((s, i) => <span key={i}>{s}</span>)}
              </div>
              <p className="text-[#707070] text-xs mt-0.5 tracking-wide">
                Trusted by 500+ Edinburgh locals {/* ← Update if you want */}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ─── SCROLL ARROW ──────────────────────────────────────────────── */}
      <Link
        href="#services"
        aria-label="Scroll to services"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#c9a84c]/60 hover:text-[#c9a84c] transition-colors duration-300 animate-bounce"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase">Explore</span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 5v14M5 12l7 7 7-7"/>
        </svg>
      </Link>
    </section>
  );
}
