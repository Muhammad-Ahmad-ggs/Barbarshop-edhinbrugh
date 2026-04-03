// ─── FOOTER ───────────────────────────────────────────────────────────────
// Site footer with brand info, nav links, social links, and copyright.
//
// TO CHANGE:
//   • SOCIAL_LINKS → add your real social media URLs
//   • BOOKING_URL → your Appointedd booking link
//   • YEAR is auto-generated
//   • Phone and email constants at top of file

import Link from "next/link";

const BOOKING_URL = "https://massbarber.appointedd.com"; // ← Your booking URL
const PHONE       = "+44 131 000 0000";                  // ← Your real phone number
const EMAIL       = "hello@massbarbershop.co.uk";        // ← Your real email

// ─── SOCIAL LINKS ─────────────────────────────────────────────────────────
// Replace # with your real social media profile URLs
const SOCIAL_LINKS = [
  {
    name: "Instagram",
    href: "https://instagram.com/REPLACE",   // ← Add real Instagram URL
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://facebook.com/REPLACE",    // ← Add real Facebook URL
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: "Google",
    href: "https://g.page/REPLACE",          // ← Add real Google Maps URL
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 2a10 10 0 000 20M12 2c2.76 0 5.27 1.12 7.09 2.93M12 22c2.76 0 5.27-1.12 7.09-2.93M2 12h20M12 2c-2.76 0-5.27 1.12-7.09 2.93M12 22c-2.76 0-5.27-1.12-7.09-2.93" strokeLinecap="round"/>
      </svg>
    ),
  },
];

// ─── FOOTER NAV LINKS ─────────────────────────────────────────────────────
const FOOTER_LINKS = [
  { label: "Home",     href: "#home"     },
  { label: "Services", href: "#services" },
  { label: "About",    href: "#about"    },
  { label: "Reviews",  href: "#reviews"  },
  { label: "Gallery",  href: "#gallery"  },
  { label: "Location", href: "#location" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#080808] border-t border-[#1a1a1a]">
      {/* ─── MAIN FOOTER CONTENT ────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand column */}
        <div className="lg:col-span-2">
          {/* Logo */}
          <Link href="#home" className="inline-flex items-center gap-2 mb-5 no-underline">
            <span className="font-display text-xl font-bold tracking-[0.15em] text-white uppercase">Mass</span>
            <span className="w-1 h-1 rounded-full bg-[#c9a84c]" />
            <span className="font-display text-xl font-light tracking-[0.15em] text-[#c9a84c] uppercase">Barbers</span>
          </Link>

          <p className="text-[#555] text-sm leading-relaxed max-w-xs mb-6">
            Premium barbering at 182A Ferry Rd, Edinburgh. Precision cuts, clean style, friendly atmosphere — every visit.
          </p>

          {/* Social links */}
          <div className="flex items-center gap-3">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Follow Mass Barber Shop on ${social.name}`}
                className="w-10 h-10 border border-[#2a2a2a] flex items-center justify-center text-[#555] hover:text-[#c9a84c] hover:border-[#c9a84c]/40 transition-all duration-300 rounded-sm"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Navigation column */}
        <div>
          <p className="text-white text-xs tracking-[0.25em] uppercase font-semibold mb-5">
            Navigation
          </p>
          <ul className="space-y-3">
            {FOOTER_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-[#555] text-sm hover:text-[#c9a84c] transition-colors duration-200 flex items-center gap-2 group"
                >
                  <span className="w-3 h-px bg-[#333] group-hover:bg-[#c9a84c] group-hover:w-5 transition-all duration-300" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact column */}
        <div>
          <p className="text-white text-xs tracking-[0.25em] uppercase font-semibold mb-5">
            Contact
          </p>
          <ul className="space-y-4 text-sm text-[#555]">
            <li>
              <p className="text-[#333] text-xs uppercase tracking-wider mb-1">Address</p>
              <address className="not-italic text-[#777]">
                182A Ferry Rd.<br />Edinburgh, United Kingdom
              </address>
            </li>
            <li>
              <p className="text-[#333] text-xs uppercase tracking-wider mb-1">Phone</p>
              <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="text-[#777] hover:text-[#c9a84c] transition-colors duration-200">
                {PHONE}
              </a>
            </li>
            <li>
              <p className="text-[#333] text-xs uppercase tracking-wider mb-1">Email</p>
              <a href={`mailto:${EMAIL}`} className="text-[#777] hover:text-[#c9a84c] transition-colors duration-200 break-all">
                {EMAIL}
              </a>
            </li>
          </ul>

          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold mt-7 inline-block text-xs"
          >
            Book Now
          </a>
        </div>
      </div>

      {/* ─── BOTTOM BAR ─────────────────────────────────────────────── */}
      <div className="border-t border-[#111] max-w-7xl mx-auto px-5 sm:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-[#333] text-xs">
          © {year} Mass Barber Shop. All rights reserved.
        </p>
        <p className="text-[#222] text-xs">
          182A Ferry Rd, Edinburgh, UK
        </p>
      </div>
    </footer>
  );
}
