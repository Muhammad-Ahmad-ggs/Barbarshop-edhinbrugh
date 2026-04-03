// ─── PAGE ENTRY POINT ─────────────────────────────────────────────────────
// This file assembles all section components into the final page.
// The order here controls the visual order on the page.
// To reorder sections, simply move the component lines around.

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Reviews from "@/components/Reviews";
import Gallery from "@/components/Gallery";
import Booking from "@/components/Booking";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      {/* ScrollReveal injects the Intersection Observer JS once on mount */}
      <ScrollReveal />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Reviews />
        <Gallery />
        <Booking />
        <Location />
      </main>
      <Footer />
    </>
  );
}
