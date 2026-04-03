// ─── REVIEWS SECTION ──────────────────────────────────────────────────────
// Displays customer review cards in a responsive grid.
//
// TO CHANGE:
//   • REVIEWS array → add/remove/edit reviews
//     Each entry: { name, date, rating (1–5), text, initials }
//   • You can also embed a Google Reviews widget here instead

// ─── REVIEWS DATA ─────────────────────────────────────────────────────────
// Add real reviews from Google Maps / social media here
const REVIEWS = [
  {
    name: "Jamie M.",
    date: "March 2024",
    rating: 5,
    text: "Best barber I've come across in Edinburgh — always consistent and the attention to detail is genuinely impressive. Never left disappointed.",
    initials: "JM",
  },
  {
    name: "Ryan T.",
    date: "February 2024",
    rating: 5,
    text: "Friendly crowd and a really talented team. The atmosphere is relaxed, no rushing, and they actually listen to what you want.",
    initials: "RT",
  },
  {
    name: "Scott A.",
    date: "January 2024",
    rating: 5,
    text: "Great value for the quality you get. Walked out looking sharp every single time. Wouldn't go anywhere else now.",
    initials: "SA",
  },
  {
    name: "Lewis D.",
    date: "December 2023",
    rating: 5,
    text: "Chilled vibe, easy to book online, and the results speak for themselves. Highly recommended if you're in the Ferry Road area.",
    initials: "LD",
  },
  {
    name: "Chris W.",
    date: "November 2023",
    rating: 5,
    text: "Took my son in for the first time and the guys were brilliant with him. Patient, friendly, and a great result. We'll be back.",
    initials: "CW",
  },
  {
    name: "Mark P.",
    date: "October 2023",
    rating: 5,
    text: "Professional service every time. The hot towel shave is exceptional — proper traditional technique with a modern finish.",
    initials: "MP",
  },
];

// ─── STAR COMPONENT ───────────────────────────────────────────────────────
function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          fill={i < count ? "#C9A84C" : "none"}
          stroke="#C9A84C"
          className="w-4 h-4"
          strokeWidth="1"
        >
          <path d="M10 1l2.39 4.84 5.34.78-3.86 3.76.91 5.32L10 13.27l-4.78 2.51.91-5.32L2.27 6.62l5.34-.78L10 1z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 sm:py-32 bg-[#0c0c0c]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* ─── SECTION HEADER ─────────────────────────────────────────── */}
        <div className="text-center mb-16 reveal">
          <span className="gold-line" />
          <p className="text-[#c9a84c] text-xs tracking-[0.35em] uppercase mb-4 font-medium">
            What Clients Say
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white">
            Real Reviews
          </h2>
          <p className="text-[#606060] mt-4 max-w-sm mx-auto text-sm font-light">
            Don&apos;t take our word for it — here&apos;s what our regulars say.
          </p>
        </div>

        {/* ─── AGGREGATE RATING STRIP ─────────────────────────────────── */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-14 reveal">
          <div className="flex items-end gap-3">
            <span className="font-display text-7xl font-bold text-white leading-none">5.0</span>
            <div className="pb-2">
              <Stars count={5} />
              <p className="text-[#555] text-xs mt-1 tracking-wide">
                {REVIEWS.length} verified reviews {/* ← Update count */}
              </p>
            </div>
          </div>
          <div className="hidden sm:block w-px h-16 bg-[#2a2a2a]" />
          <div className="text-center sm:text-left">
            <p className="text-[#c9a84c] text-sm tracking-wide font-medium">
              Google & Facebook Reviews
            </p>
            <p className="text-[#555] text-xs mt-1">
              Consistently rated 5 stars by our community
            </p>
          </div>
        </div>

        {/* ─── REVIEW CARDS GRID ──────────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {REVIEWS.map((review, i) => (
            <div
              key={review.name}
              className={`reveal stagger-${(i % 3) + 1} group border border-[#1e1e1e] bg-[#141414] p-7 rounded-sm hover:border-[#c9a84c]/20 transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.6)]`}
            >
              {/* Quote mark */}
              <div className="font-display text-6xl leading-none text-[#c9a84c]/15 mb-2 select-none">
                &ldquo;
              </div>

              {/* Review text */}
              <p className="text-[#909090] text-sm leading-relaxed mb-6">
                {review.text}
              </p>

              {/* Stars */}
              <Stars count={review.rating} />

              {/* Reviewer info */}
              <div className="flex items-center gap-3 mt-4 pt-4 border-t border-[#1e1e1e]">
                {/* Avatar circle with initials */}
                <div className="w-9 h-9 rounded-full bg-[#c9a84c]/10 border border-[#c9a84c]/20 flex items-center justify-center">
                  <span className="font-display text-sm font-bold text-[#c9a84c]">
                    {review.initials}
                  </span>
                </div>
                <div>
                  <p className="text-white text-sm font-medium">{review.name}</p>
                  <p className="text-[#555] text-xs mt-0.5">{review.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ─── LEAVE A REVIEW CTA ─────────────────────────────────────── */}
        {/* Replace href with your actual Google Maps review link */}
        <div className="text-center mt-12 reveal">
          <a
            href="https://g.page/r/REPLACE-WITH-GOOGLE-MAPS-REVIEW-LINK" // ← Add your Google review link
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-block"
          >
            Leave Us a Review
          </a>
        </div>
      </div>
    </section>
  );
}
