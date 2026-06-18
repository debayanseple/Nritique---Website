import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { Ornament } from "./Ornament";
import { fetchLiveWorkshops } from "../lib/api/workshops.functions";

const COLORS = ["#6B1E2A", "#C9A84C", "#1C1C1E", "#8B2A38", "#A8893C", "#4A1520", "#D4B45C", "#6B1E2A"];
const ROTATIONS = [-6, 4, -3, 5, -5, 3, -4, 6];

export function Gallery() {
  const { data: workshops = [] } = useQuery({
    queryKey: ["workshops"],
    queryFn: fetchLiveWorkshops,
    staleTime: 60 * 1000,
  });

  const baseItems = workshops.map((w, i) => ({
    workshopName: w.title,
    color: COLORS[i % COLORS.length],
    rotate: ROTATIONS[i % ROTATIONS.length],
    poster: w.poster,
  }));

  const items = baseItems.length > 0 ? [...baseItems, ...baseItems] : [];

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-cream overflow-hidden relative">
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
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-burgundy mt-3">Workshop Moments</h2>
          <Ornament className="mt-5" />
        </motion.div>
      </div>

      {/* Auto-scrolling marquee */}
      <div className="relative">
        <div className="flex w-max gap-5 sm:gap-10 px-5 sm:px-10 py-8 animate-marquee hover:[animation-play-state:paused]">
          {items.map((g, i) => (
            <div
              key={i}
              className="shrink-0 w-[170px] sm:w-[220px] md:w-[260px] aspect-[3/4] rounded-lg shadow-2xl ring-1 ring-charcoal/10 overflow-hidden relative"
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
        <div className="pointer-events-none absolute inset-y-0 left-0 w-10 sm:w-24 bg-gradient-to-r from-cream to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-10 sm:w-24 bg-gradient-to-l from-cream to-transparent" />
      </div>
    </section>
  );
}
