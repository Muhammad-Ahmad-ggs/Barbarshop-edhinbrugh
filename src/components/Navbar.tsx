"use client";
// ─── NAVBAR ───────────────────────────────────────────────────────────────
// Sticky navbar with scroll-aware background and mobile hamburger menu.
//
// TO CHANGE:
//   • BOOKING_URL   → your Appointedd (or any other) booking link
//   • NAV_LINKS     → add/remove navigation items
//   • Logo text     → search "MASS" and update the brand name

import { useState, useEffect } from "react";
import Link from "next/link";

// ─── BOOKING LINK ──────────────────────────────────────────────────────────
// Replace with your actual Appointedd booking URL
const BOOKING_URL = "https://massbarber.appointedd.com";

// ─── NAV LINKS ─────────────────────────────────────────────────────────────
// href values correspond to section id="" attributes
const NAV_LINKS = [
  { label: "Home",     href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Reviews",  href: "#reviews" },
  { label: "Gallery",  href: "#gallery" },
  { label: "Location", href: "#location" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Add/remove solid background when user scrolls past 60px
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#0f0f0f]/95 backdrop-blur-md border-b border-[#c9a84c]/10 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">

          {/* ─── LOGO ──────────────────────────────────────────────────── */}
          {/* Change "MASS" to your brand name. The dot is a gold accent. */}
          <Link href="#home" className="group flex items-center gap-2 no-underline">
            <span className="font-display text-2xl font-bold tracking-[0.15em] text-white uppercase">
              Mass
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] group-hover:scale-150 transition-transform duration-300" />
            <span className="font-display text-2xl font-light tracking-[0.15em] text-[#c9a84c] uppercase">
              Barbers
            </span>
          </Link>

          {/* ─── DESKTOP NAV ───────────────────────────────────────────── */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm tracking-widest uppercase text-[#a0a0a0] hover:text-[#c9a84c] transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#c9a84c] group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </nav>

          {/* ─── BOOK NOW CTA ──────────────────────────────────────────── */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold text-xs"
            >
              Book Now
            </a>
          </div>

          {/* ─── MOBILE HAMBURGER ──────────────────────────────────────── */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 origin-center ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                menuOpen ? "opacity-0 scale-x-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 origin-center ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* ─── MOBILE MENU OVERLAY ─────────────────────────────────────── */}
      <div
        className={`fixed inset-0 z-40 bg-[#0a0a0a] flex flex-col items-center justify-center gap-10 transition-all duration-500 md:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {NAV_LINKS.map((link, i) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            style={{ transitionDelay: menuOpen ? `${i * 60}ms` : "0ms" }}
            className={`font-display text-4xl font-light tracking-widest uppercase transition-all duration-500 ${
              menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            } text-white hover:text-[#c9a84c]`}
          >
            {link.label}
          </Link>
        ))}
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setMenuOpen(false)}
          className="btn-gold mt-4"
        >
          Book Now
        </a>
      </div>
    </>
  );
}
