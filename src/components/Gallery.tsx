import { motion } from "framer-motion";
import { Ornament } from "./Ornament";

interface GalleryItem {
  workshopName: string;
  color: string;
  rotate: number;
  poster?: string;
}

const baseItems: GalleryItem[] = [
  {
    workshopName: "Abhinaya Intensive",
    color: "#6B1E2A",
    rotate: -6,
    poster: "/images/workshops/abhinaya-intensive.png",
  },
  {
    workshopName: "Monsoon Choreography",
    color: "#C9A84C",
    rotate: 4,
    poster: "/images/workshops/Monsoon Choreography.png",
  },
  {
    workshopName: "Taal Lab",
    color: "#1C1C1E",
    rotate: -3,
    poster: "/images/workshops/Rhythm & Taal Lab.png",
  },
  { workshopName: "Stage Repertoire", color: "#8B2A38", rotate: 5 },
  { workshopName: "Kathak Foundations", color: "#A8893C", rotate: -5 },
  { workshopName: "Bhava Workshop", color: "#4A1520", rotate: 3 },
  { workshopName: "Semi-Classical", color: "#D4B45C", rotate: -4 },
  { workshopName: "Guru Vandana", color: "#6B1E2A", rotate: 6 },
];

// Duplicate for seamless loop
const items = [...baseItems, ...baseItems];

export function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-cream overflow-hidden relative">
      {/* Striped backdrop */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, #C9A84C 0 60px, transparent 60px 140px)",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 85%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 85%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-5 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-gold uppercase tracking-[0.3em] text-xs">In Frame</span>
          <h2 className="font-display text-4xl md:text-5xl text-burgundy mt-3">
            Workshop Moments
          </h2>
          <Ornament className="mt-5" />
        </motion.div>
      </div>

      {/* Auto-scrolling marquee */}
      <div className="relative">
        <div className="flex w-max gap-10 px-10 py-8 animate-marquee hover:[animation-play-state:paused]">
          {items.map((g, i) => (
            <div
              key={i}
              className="shrink-0 w-[220px] sm:w-[260px] aspect-[3/4] rounded-lg shadow-2xl ring-1 ring-charcoal/10 overflow-hidden relative"
              style={{
                backgroundColor: g.color,
                transform: `rotate(${g.rotate}deg)`,
              }}
            >
              {g.poster && (
                <img
                  src={g.poster}
                  alt={g.workshopName}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              )}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                <span className="text-cream/90 text-xs uppercase tracking-[0.25em] font-medium">
                  {g.workshopName}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-cream to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-cream to-transparent" />
      </div>
    </section>
  );
}
