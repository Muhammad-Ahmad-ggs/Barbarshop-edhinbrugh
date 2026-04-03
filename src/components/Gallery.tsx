// ─── GALLERY SECTION ──────────────────────────────────────────────────────
// Masonry-style image grid with hover zoom effect.
//
// TO CHANGE:
//   • GALLERY_IMAGES array → update src paths and alt text
//   • Add real photos to /public/gallery/ directory
//   • Naming convention: /gallery/g1.jpg, /gallery/g2.jpg, etc.
//   • Recommended: mix portrait and landscape for a dynamic grid
//   • Image sizes: portrait ~600×800px, landscape ~800×600px

import Image from "next/image";

// ─── GALLERY IMAGES ───────────────────────────────────────────────────────
// Add your real image paths here. alt="" should describe the image.
// The `span` field controls grid column span on larger screens:
//   span: 1 = normal card, span: 2 = wider card
const GALLERY_IMAGES = [
  {
    src: "/gallery/g1.jpg",
    alt: "Precision fade haircut at Mass Barber Shop Edinburgh",
    span: 1,
    tall: true,
  },
  {
    src: "/gallery/g2.jpg",
    alt: "Classic taper cut — Mass Barber Shop",
    span: 1,
    tall: false,
  },
  {
    src: "/gallery/g3.jpg",
    alt: "Beard shaping and trim at Mass Barbers",
    span: 1,
    tall: false,
  },
  {
    src: "/gallery/g4.jpg",
    alt: "Shop interior — Mass Barber Shop Edinburgh",
    span: 2,
    tall: false,
  },
  {
    src: "/gallery/g5.jpg",
    alt: "Textured crop cut result",
    span: 1,
    tall: true,
  },
  {
    src: "/gallery/g6.jpg",
    alt: "Hot towel shave preparation",
    span: 1,
    tall: false,
  },
  {
    src: "/gallery/g7.jpg",
    alt: "Scissor cut and styling",
    span: 1,
    tall: false,
  },
  {
    src: "/gallery/g8.jpg",
    alt: "Before and after transformation",
    span: 1,
    tall: true,
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 sm:py-32 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* ─── SECTION HEADER ─────────────────────────────────────────── */}
        <div className="text-center mb-16 reveal">
          <span className="gold-line" />
          <p className="text-[#c9a84c] text-xs tracking-[0.35em] uppercase mb-4 font-medium">
            Our Work
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white">
            The Gallery
          </h2>
          <p className="text-[#606060] mt-4 max-w-sm mx-auto text-sm font-light">
            Every cut tells a story. Here&apos;s some of ours.
          </p>
        </div>

        {/* ─── GALLERY GRID ───────────────────────────────────────────── */}
        {/* CSS grid with auto-rows for varied heights */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 auto-rows-[200px]">
          {GALLERY_IMAGES.map((img, i) => (
            <div
              key={img.src}
              className={`reveal reveal-scale stagger-${(i % 4) + 1} relative overflow-hidden rounded-sm bg-[#1a1a1a] group cursor-pointer ${
                img.span === 2 ? "col-span-2" : ""
              } ${img.tall ? "row-span-2" : ""}`}
            >
              {/* ─── GALLERY IMAGE ────────────────────────────────────────
                  Replace placeholder gradient with real Image component.
                  Uncomment the <Image> block and remove the placeholder div
                  once you have real photos in /public/gallery/.
                  ──────────────────────────────────────────────────────── */}

              {/* PLACEHOLDER — remove this div once you have real images */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1e1e1e] to-[#2a2a2a] flex items-center justify-center">
                <div className="text-center opacity-30">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="1" className="w-8 h-8 mx-auto mb-2">
                    <rect x="3" y="3" width="18" height="18" rx="2"/>
                    <circle cx="8.5" cy="8.5" r="1.5"/>
                    <path d="M21 15l-5-5L5 21"/>
                  </svg>
                  <p className="text-[#c9a84c] text-[10px] tracking-widest uppercase">
                    Photo {i + 1}
                  </p>
                </div>
              </div>

              {/* REAL IMAGE — uncomment this once you have photos */}
              {/*
              <Image
                src={img.src}
                alt={img.alt}
                fill
                quality={80}
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              */}

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white text-xs tracking-wide opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 translate-y-2 group-hover:translate-y-0">
                  {img.alt}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ─── INSTAGRAM CTA ──────────────────────────────────────────── */}
        {/* Replace href with your actual Instagram profile URL */}
        <div className="text-center mt-12 reveal">
          <p className="text-[#555] text-sm mb-5">
            Follow us for daily cuts, transformations, and behind-the-scenes.
          </p>
          <a
            href="https://instagram.com/REPLACE-WITH-YOUR-HANDLE" // ← Add Instagram handle
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-2"
          >
            {/* Instagram icon */}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
            </svg>
            Follow on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
