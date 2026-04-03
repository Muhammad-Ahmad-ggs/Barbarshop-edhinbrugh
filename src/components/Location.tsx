// ─── LOCATION SECTION ─────────────────────────────────────────────────────
// Embedded Google Map + contact details + opening hours.
//
// TO CHANGE:
//   • MAP_EMBED_URL → get from Google Maps → Share → Embed a map → copy src
//   • PHONE → your real phone number
//   • EMAIL → your real email address
//   • OPENING_HOURS → update days and times
//   • ADDRESS → if your address changes

// ─── SHOP DETAILS ─────────────────────────────────────────────────────────
// Update all of these with your real information
const ADDRESS_LINE1 = "182A Ferry Rd.";
const ADDRESS_LINE2 = "Edinburgh, United Kingdom";
const PHONE = "+44 131 000 0000";           // ← Replace with real number
const EMAIL = "hello@massbarbershop.co.uk"; // ← Replace with real email

// ─── OPENING HOURS ────────────────────────────────────────────────────────
// Update days and times to match your actual schedule
const OPENING_HOURS = [
  { day: "Monday",    hours: "9:00am – 6:00pm"  },
  { day: "Tuesday",   hours: "9:00am – 6:00pm"  },
  { day: "Wednesday", hours: "9:00am – 6:00pm"  },
  { day: "Thursday",  hours: "9:00am – 7:00pm"  },
  { day: "Friday",    hours: "9:00am – 7:00pm"  },
  { day: "Saturday",  hours: "8:30am – 5:00pm"  },
  { day: "Sunday",    hours: "Closed"             },
];

// ─── GOOGLE MAPS EMBED URL ────────────────────────────────────────────────
// How to get your map URL:
//   1. Go to maps.google.com
//   2. Search for your address
//   3. Click Share → Embed a map
//   4. Copy the src="..." value from the <iframe> code
//   5. Paste it below, replacing the placeholder URL
const MAP_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2233.8!2d-3.21!3d55.97!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s182A%20Ferry%20Rd%2C%20Edinburgh!5e0!3m2!1sen!2suk!4v1700000000000"; // ← Replace with real embed URL

export default function Location() {
  // Determine current day for "open today" highlighting
  const TODAY = new Date().toLocaleDateString("en-GB", { weekday: "long" });

  return (
    <section id="location" className="py-24 sm:py-32 bg-[#0c0c0c]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* ─── SECTION HEADER ─────────────────────────────────────────── */}
        <div className="text-center mb-16 reveal">
          <span className="gold-line" />
          <p className="text-[#c9a84c] text-xs tracking-[0.35em] uppercase mb-4 font-medium">
            Come Visit Us
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white">
            Find Us
          </h2>
        </div>

        {/* ─── TWO COLUMN LAYOUT ──────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

          {/* ─── LEFT: DETAILS ──────────────────────────────────────── */}
          <div className="lg:col-span-2 space-y-8">

            {/* Address */}
            <div className="reveal border border-[#1e1e1e] bg-[#141414] p-6 rounded-sm">
              <div className="flex items-start gap-4">
                <div className="text-[#c9a84c] mt-1 flex-shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <p className="text-[#c9a84c] text-xs tracking-widest uppercase mb-2 font-medium">Address</p>
                  <p className="text-white font-medium">{ADDRESS_LINE1}</p>
                  <p className="text-[#777] text-sm mt-0.5">{ADDRESS_LINE2}</p>
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(ADDRESS_LINE1 + " " + ADDRESS_LINE2)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#c9a84c] text-xs tracking-wide mt-3 inline-flex items-center gap-1 hover:gap-2 transition-all duration-200"
                  >
                    Get Directions
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Phone & Email */}
            <div className="reveal stagger-1 border border-[#1e1e1e] bg-[#141414] p-6 rounded-sm space-y-4">
              <a
                href={`tel:${PHONE.replace(/\s/g, "")}`}
                className="flex items-center gap-4 group"
              >
                <div className="text-[#c9a84c] flex-shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.7A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.9z" strokeLinecap="round"/>
                  </svg>
                </div>
                <div>
                  <p className="text-[#c9a84c] text-xs tracking-widest uppercase font-medium">Phone</p>
                  <p className="text-white group-hover:text-[#c9a84c] transition-colors duration-200 text-sm mt-0.5">
                    {PHONE}
                  </p>
                </div>
              </a>

              <div className="w-full h-px bg-[#1e1e1e]" />

              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-4 group"
              >
                <div className="text-[#c9a84c] flex-shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" strokeLinecap="round"/>
                    <polyline points="22,6 12,13 2,6" strokeLinecap="round"/>
                  </svg>
                </div>
                <div>
                  <p className="text-[#c9a84c] text-xs tracking-widest uppercase font-medium">Email</p>
                  <p className="text-white group-hover:text-[#c9a84c] transition-colors duration-200 text-sm mt-0.5 break-all">
                    {EMAIL}
                  </p>
                </div>
              </a>
            </div>

            {/* Opening hours */}
            <div className="reveal stagger-2 border border-[#1e1e1e] bg-[#141414] p-6 rounded-sm">
              <p className="text-[#c9a84c] text-xs tracking-widest uppercase font-medium mb-5">
                Opening Hours
              </p>
              <div className="space-y-2.5">
                {OPENING_HOURS.map((slot) => {
                  const isToday = slot.day === TODAY;
                  const isClosed = slot.hours === "Closed";
                  return (
                    <div
                      key={slot.day}
                      className={`flex justify-between items-center text-sm py-1.5 border-b border-[#1a1a1a] last:border-0 ${
                        isToday ? "text-[#c9a84c]" : ""
                      }`}
                    >
                      <span className={`${isToday ? "text-[#c9a84c] font-medium" : "text-[#888]"}`}>
                        {slot.day}
                        {isToday && (
                          <span className="ml-2 text-[9px] tracking-widest uppercase bg-[#c9a84c]/15 text-[#c9a84c] px-1.5 py-0.5 rounded-full">
                            Today
                          </span>
                        )}
                      </span>
                      <span className={isClosed ? "text-[#444]" : isToday ? "text-[#c9a84c]" : "text-[#bbb]"}>
                        {slot.hours}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ─── RIGHT: MAP EMBED ────────────────────────────────────── */}
          <div className="lg:col-span-3 reveal-scale">
            <div className="relative rounded-sm overflow-hidden border border-[#1e1e1e] h-full min-h-[400px] lg:min-h-full">
              {/* ─── GOOGLE MAPS IFRAME ──────────────────────────────────
                  Update MAP_EMBED_URL at the top of this file with your
                  own embed URL from Google Maps.
                  ─────────────────────────────────────────────────────── */}
              <iframe
                src={MAP_EMBED_URL}
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  filter: "invert(90%) hue-rotate(180deg) brightness(0.9) contrast(1.1)", // Dark mode map filter
                  minHeight: "400px",
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mass Barber Shop location map — 182A Ferry Rd Edinburgh"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
