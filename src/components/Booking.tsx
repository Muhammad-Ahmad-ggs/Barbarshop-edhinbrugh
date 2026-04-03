// ─── BOOKING SECTION ──────────────────────────────────────────────────────
// Full-width CTA section with strong conversion focus.
//
// TO CHANGE:
//   • BOOKING_URL → your Appointedd (or other) booking page URL
//   • HEADLINE, SUBTEXT → update copy
//   • Background image → replace /booking-bg.jpg in /public/
//     (optional: use a different barber shop photo here)

// ─── BOOKING LINK ─────────────────────────────────────────────────────────
const BOOKING_URL = "https://massbarber.appointedd.com"; // ← Your booking URL

// ─── CONTENT ──────────────────────────────────────────────────────────────
const HEADLINE = "Book your next haircut in seconds.";
const SUBTEXT =
  "Online booking is quick, easy, and you can choose your preferred barber. Walk-ins are always welcome too.";

export default function Booking() {
  return (
    <section
      id="booking"
      className="py-24 sm:py-32 bg-[#111] relative overflow-hidden"
    >
      {/* ─── DECORATIVE BACKGROUND GLOW ─────────────────────────────── */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[400px] rounded-full bg-[#c9a84c]/5 blur-[120px]" />
      </div>

      {/* ─── HORIZONTAL RULES ───────────────────────────────────────── */}
      <div className="absolute top-0 left-0 right-0 section-divider" />
      <div className="absolute bottom-0 left-0 right-0 section-divider" />

      <div className="relative max-w-4xl mx-auto px-5 sm:px-8 text-center">

        {/* Label */}
        <div className="reveal">
          <span className="gold-line" />
          <p className="text-[#c9a84c] text-xs tracking-[0.35em] uppercase mb-6 font-medium">
            Ready to Look Sharp?
          </p>
        </div>

        {/* Headline */}
        <h2 className="reveal font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
          {HEADLINE}
        </h2>

        {/* Subtext */}
        <p className="reveal text-[#777] text-lg font-light max-w-xl mx-auto mb-10 leading-relaxed">
          {SUBTEXT}
        </p>

        {/* Primary CTA */}
        <div className="reveal flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold text-sm"
          >
            Book Online Now
          </a>
          <a
            href="tel:+441234567890" // ← Replace with your real phone number
            className="btn-outline text-sm inline-flex items-center justify-center gap-2"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.7A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.9z" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Call Us
          </a>
        </div>

        {/* ─── WALK-IN NOTE ────────────────────────────────────────────
            Reassures visitors who may not want to book online
            ─────────────────────────────────────────────────────────── */}
        <p className="reveal mt-8 text-[#444] text-sm flex items-center justify-center gap-2">
          <svg viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="1.5" className="w-4 h-4 flex-shrink-0">
            <path d="M9 12l2 2 4-4M22 12a10 10 0 11-20 0 10 10 0 0120 0z" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Walk-ins welcome — booking is recommended during peak hours.
        </p>

        {/* ─── TRUST BADGES ───────────────────────────────────────────
            Reassurance icons below the CTA
            ─────────────────────────────────────────────────────────── */}
        <div className="reveal mt-14 grid grid-cols-3 gap-6 border-t border-[#1e1e1e] pt-12 max-w-lg mx-auto">
          {[
            { label: "5-Star Rated",    icon: "★" },
            { label: "Easy Booking",    icon: "📅" },
            { label: "No Hidden Fees",  icon: "✓"  },
          ].map((badge) => (
            <div key={badge.label} className="text-center">
              <div className="text-2xl mb-2">{badge.icon}</div>
              <p className="text-[#555] text-xs tracking-wide">{badge.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
