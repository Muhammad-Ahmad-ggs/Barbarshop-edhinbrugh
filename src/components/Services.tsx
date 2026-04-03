// ─── SERVICES SECTION ─────────────────────────────────────────────────────
// Displays service cards with price, description, and a Book CTA.
//
// TO CHANGE:
//   • SERVICES array → add/remove/edit service cards
//     Each entry: { title, price, duration, description, icon }
//   • BOOKING_URL → your Appointedd booking link

import Link from "next/link";

// ─── YOUR BOOKING URL ─────────────────────────────────────────────────────
const BOOKING_URL = "https://massbarber.appointedd.com";

// ─── SERVICES LIST ────────────────────────────────────────────────────────
// Add, remove, or reorder services here.
// price: use "£XX" format or "From £XX" for variable pricing
// duration: shown as a subtle label on the card
const SERVICES = [
  {
    title: "Haircut",
    price: "£20",               // ← Update price
    duration: "30–45 min",      // ← Update duration
    description:
      "A clean, precise cut tailored to your style. Includes consultation, wash, cut, and finish.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" className="w-7 h-7">
        <path d="M6 3v18M18 3v18M6 12h12" strokeLinecap="round"/>
        <circle cx="6" cy="3" r="1.5"/><circle cx="18" cy="3" r="1.5"/>
      </svg>
    ),
  },
  {
    title: "Beard Trim",
    price: "£12",               // ← Update price
    duration: "20 min",         // ← Update duration
    description:
      "Shape, define, and tidy your beard with precision. Hot towel finish available on request.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" className="w-7 h-7">
        <path d="M8 3C8 3 5 7 5 12c0 3.866 3.134 7 7 7s7-3.134 7-7c0-5-3-9-3-9" strokeLinecap="round"/>
        <path d="M9 15c1 1.5 5 1.5 6 0" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Cut & Beard",
    price: "£28",               // ← Update price
    duration: "50–60 min",      // ← Update duration
    description:
      "The full treatment — haircut plus beard shaping in one relaxed session. Best value combo.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" className="w-7 h-7">
        <path d="M12 2l1.5 4.5L18 8l-4.5 1.5L12 14l-1.5-4.5L6 8l4.5-1.5L12 2z" strokeLinejoin="round"/>
        <path d="M5 17l1 3M19 17l-1 3" strokeLinecap="round"/>
      </svg>
    ),
    featured: true, // ← Set to true to add a "Popular" badge
  },
  {
    title: "Kids Haircut",
    price: "£15",               // ← Update price
    duration: "25 min",         // ← Update duration
    description:
      "Patient, friendly service for the little ones. Under 12s welcome any time.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" className="w-7 h-7">
        <circle cx="12" cy="8" r="4"/>
        <path d="M6 20c0-3.314 2.686-6 6-6s6 2.686 6 6" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Hot Towel Shave",
    price: "£22",               // ← Update price
    duration: "40 min",         // ← Update duration
    description:
      "Traditional straight-razor shave with hot towel prep and skin-soothing aftercare.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" className="w-7 h-7">
        <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Full Grooming Package",
    price: "£45",               // ← Update price
    duration: "75 min",         // ← Update duration
    description:
      "Haircut, beard trim, hot towel, and styling — the complete experience for a sharp look.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" className="w-7 h-7">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" strokeLinecap="round"/>
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 sm:py-32 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* ─── SECTION HEADER ─────────────────────────────────────────── */}
        <div className="text-center mb-16 reveal">
          <span className="gold-line" />
          <p className="text-[#c9a84c] text-xs tracking-[0.35em] uppercase mb-4 font-medium">
            What We Offer
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white">
            Our Services
          </h2>
          <p className="text-[#707070] mt-4 max-w-md mx-auto text-base font-light">
            Every cut is carried out with care and precision. No rush, no compromise.
          </p>
        </div>

        {/* ─── SERVICE CARDS GRID ─────────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((service, i) => (
            <div
              key={service.title}
              className={`reveal stagger-${(i % 3) + 1} group relative border rounded-sm p-8 transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_20px_60px_-15px_rgba(201,168,76,0.15)] ${
                service.featured
                  ? "border-[#c9a84c]/40 bg-[#1a1a1a]"
                  : "border-[#2a2a2a] bg-[#141414] hover:border-[#c9a84c]/20"
              }`}
            >
              {/* Popular badge */}
              {service.featured && (
                <span className="absolute top-4 right-4 text-[10px] tracking-[0.2em] uppercase text-[#0f0f0f] bg-[#c9a84c] px-2.5 py-1 font-semibold">
                  Popular
                </span>
              )}

              {/* Icon */}
              <div className="text-[#c9a84c] mb-5 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              {/* Title + price */}
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-display text-2xl font-semibold text-white">
                  {service.title}
                </h3>
                <div className="text-right">
                  <span className="font-display text-2xl text-[#c9a84c] font-bold">
                    {service.price}
                  </span>
                </div>
              </div>

              {/* Duration */}
              <p className="text-[#555] text-xs tracking-widest uppercase mb-4">
                {service.duration}
              </p>

              {/* Description */}
              <p className="text-[#888] text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Book CTA */}
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c9a84c] text-xs tracking-[0.2em] uppercase font-medium flex items-center gap-2 hover:gap-4 transition-all duration-300 group/link"
              >
                Book This
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          ))}
        </div>

        {/* ─── BOTTOM CTA ─────────────────────────────────────────────── */}
        <div className="text-center mt-14 reveal">
          <p className="text-[#666] text-sm mb-6">
            Not sure what you need? Just come in — we&apos;ll sort you out.
          </p>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
          >
            Book an Appointment
          </a>
        </div>
      </div>
    </section>
  );
}
