// ─── ABOUT SECTION ────────────────────────────────────────────────────────
// Two-column layout: text story left, stats + image right.
//
// TO CHANGE:
//   • ABOUT_COPY → update the paragraph text
//   • STATS array → update the numbers/labels
//   • About image → replace /about-bg.jpg in /public/
//     (recommended: interior shop shot or barber working, portrait crop)

import Image from "next/image";

// ─── ABOUT COPY ───────────────────────────────────────────────────────────
// Feel free to rewrite this to match your shop's actual story
const ABOUT_COPY = [
  "Mass Barber Shop has been part of Edinburgh's Ferry Road community for years. What started as a passion for clean cuts and real craftsmanship has grown into a space where locals come to look sharp and feel at ease.",
  "Our barbers are skilled, experienced, and genuinely care about the result. Whether you're after a classic cut or something more tailored, we take the time to understand what you want — and deliver it consistently.",
  "No rushing. No attitude. Just good barbering in a relaxed atmosphere where you're always welcome.",
];

// ─── STATS ────────────────────────────────────────────────────────────────
// Update these numbers to reflect your actual stats
const STATS = [
  { value: "5★",   label: "Average Rating"    },
  { value: "500+", label: "Happy Customers"   },
  { value: "3+",   label: "Years in Edinburgh" },
  { value: "100%", label: "Satisfaction Focus" },
];

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-[#111111] overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* ─── LEFT COLUMN — TEXT ────────────────────────────────────── */}
          <div>
            <div className="reveal">
              <span className="gold-line-left" />
              <p className="text-[#c9a84c] text-xs tracking-[0.35em] uppercase mb-4 font-medium">
                Our Story
              </p>
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-white leading-tight mb-8">
                More Than a Haircut —<br />
                <span className="gold-text">A Local Institution.</span>
              </h2>
            </div>

            <div className="space-y-5">
              {ABOUT_COPY.map((para, i) => (
                <p
                  key={i}
                  className={`reveal stagger-${i + 1} text-[#888] leading-relaxed text-base font-light`}
                >
                  {para}
                </p>
              ))}
            </div>

            {/* Signature quality marks */}
            <div className="mt-10 space-y-4 reveal">
              {[
                "Experienced, passionate barbers",
                "Consistent results every visit",
                "Walk-ins welcome, booking recommended",
              ].map((point) => (
                <div key={point} className="flex items-center gap-3">
                  <span className="w-4 h-px bg-[#c9a84c]" />
                  <span className="text-[#aaa] text-sm tracking-wide">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ─── RIGHT COLUMN — IMAGE + STATS ──────────────────────────── */}
          <div className="relative reveal-scale">
            {/* Decorative gold border frame */}
            <div className="absolute -top-4 -right-4 w-full h-full border border-[#c9a84c]/15 rounded-sm pointer-events-none z-0" />

            {/* ─── ABOUT IMAGE ────────────────────────────────────────────
                Replace /about-bg.jpg in /public/ with your interior shop shot.
                Good options: barber working on a client, shop interior, tools.
                Recommended: portrait orientation ~600×750px.
                ─────────────────────────────────────────────────────────── */}
            <div className="relative z-10 rounded-sm overflow-hidden aspect-[4/5]">
              <Image
                src="/about-bg.jpg"
                alt="Inside Mass Barber Shop Edinburgh — skilled barber at work"
                fill
                quality={85}
                className="object-cover object-center grayscale-[20%]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Inner vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>

            {/* Stats card overlay */}
            <div className="absolute -bottom-8 -left-8 z-20 bg-[#0f0f0f] border border-[#2a2a2a] p-6 grid grid-cols-2 gap-5 shadow-xl">
              {STATS.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-display text-3xl font-bold text-[#c9a84c]">
                    {stat.value}
                  </div>
                  <div className="text-[#555] text-[11px] tracking-wide uppercase mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
