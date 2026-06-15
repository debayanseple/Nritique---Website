import { useState, useMemo } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { MapPin, Users } from "lucide-react";
import { WorkshopRegisterModal } from "./modals/WorkshopRegisterModal";
import { Ornament } from "./Ornament";
import { fetchLiveWorkshops } from "../lib/api/workshops.functions";
import type { Workshop } from "../lib/api/workshops.functions";

export type { Workshop };

const tabs = ["All", "Online", "Offline"] as const;

export function Workshops() {
  const queryClient = useQueryClient();
  const {
    data: workshops = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["workshops"],
    queryFn: () => fetchLiveWorkshops(),
    staleTime: 60 * 1000,
    refetchInterval: 60 * 1000,
  });

  const [tab, setTab] = useState<(typeof tabs)[number]>("All");
  const [selected, setSelected] = useState<Workshop | null>(null);

  const filtered = useMemo(() => {
    if (tab === "All") return workshops;
    return workshops.filter((w) => w.mode === tab);
  }, [tab, workshops]);

  const reserve = (id: string) => {
    queryClient.setQueryData<Workshop[]>(["workshops"], (prev = []) =>
      prev.map((w) => (w.id === id && w.seatsLeft > 0 ? { ...w, seatsLeft: w.seatsLeft - 1 } : w)),
    );
  };

  return (
    <section id="workshops" className="py-16 sm:py-24 px-4 sm:px-5 lg:px-10 bg-muted/40">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-gold uppercase tracking-[0.3em] text-xs">This Season</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-burgundy mt-3">
            Upcoming Workshops
          </h2>
          <Ornament className="mt-5" />
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition ${
                tab === t ? "bg-burgundy text-cream" : "bg-card text-charcoal hover:bg-cream"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {isLoading && (
          <div className="flex justify-center py-16">
            <div className="w-8 h-8 border-2 border-gold border-t-transparent rounded-full animate-spin" />
          </div>
        )}

        {isError && !isLoading && (
          <p className="text-center py-16 text-charcoal/50">
            Could not load workshops. Please try again later.
          </p>
        )}

        {!isLoading && !isError && filtered.length === 0 && (
          <p className="text-center py-16 text-charcoal/50">
            No workshops available at the moment. Check back soon.
          </p>
        )}

        {!isLoading && filtered.length > 0 && (
          <div className="grid md:grid-cols-3 gap-6">
            {filtered.map((w, i) => (
              <motion.article
                key={w.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                className="rounded-xl bg-card border border-border overflow-hidden flex flex-col"
              >
                <div className="aspect-[4/3] overflow-hidden bg-burgundy/20 relative">
                  {w.poster ? (
                    <img
                      src={w.poster}
                      alt={`${w.title} poster`}
                      className={`w-full h-full object-cover ${w.status === "upcoming" ? "opacity-50" : ""}`}
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).style.display = "none";
                        e.currentTarget.nextElementSibling?.classList.remove("hidden");
                      }}
                    />
                  ) : null}
                  <div className={`w-full h-full flex items-center justify-center ${w.poster ? "hidden" : ""}`}>
                    <span className="text-burgundy/40 text-sm uppercase tracking-[0.3em]">
                      Poster
                    </span>
                  </div>
                  {w.status === "upcoming" && (
                    <div className="absolute inset-0 flex items-center justify-center bg-charcoal/30">
                      <span className="bg-gold text-charcoal text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                        Coming Soon
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs uppercase tracking-wider text-burgundy font-semibold">
                      {w.category}
                    </span>
                    <span
                      className={`text-xs rounded-full px-2 py-0.5 ${
                        w.mode === "Online"
                          ? "bg-gold/20 text-charcoal"
                          : "bg-burgundy/10 text-burgundy"
                      }`}
                    >
                      {w.mode}
                    </span>
                  </div>
                  <h3 className="font-display text-xl text-charcoal">{w.title}</h3>
                  <div className="mt-3 space-y-1 text-sm text-muted-foreground">
                    {w.location && (
                      <p className="flex items-center gap-2">
                        <MapPin size={14} /> {w.location}
                      </p>
                    )}
                    <p className="flex items-center gap-2">
                      <Users size={14} /> {w.seatsLeft} seats left
                    </p>
                  </div>
                  <div className="mt-5 flex items-center justify-between">
                    <span className="font-display text-2xl text-burgundy">
                      {w.fee > 0 ? `₹${w.fee}` : "Free"}
                    </span>
                    {w.status === "upcoming" ? (
                      <span className="rounded-md bg-charcoal/10 text-charcoal/50 px-4 py-2 text-sm font-semibold">
                        Coming Soon
                      </span>
                    ) : w.registrationLink ? (
                      <a
                        href={w.registrationLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`rounded-md bg-burgundy text-cream px-4 py-2 text-sm font-semibold hover:bg-burgundy/90 transition ${w.seatsLeft === 0 ? "pointer-events-none opacity-50" : ""}`}
                      >
                        {w.seatsLeft === 0 ? "Sold Out" : "Register"}
                      </a>
                    ) : (
                      <button
                        disabled={w.seatsLeft === 0}
                        onClick={() => setSelected(w)}
                        className="rounded-md bg-burgundy text-cream px-4 py-2 text-sm font-semibold hover:bg-burgundy/90 transition disabled:opacity-50"
                      >
                        {w.seatsLeft === 0 ? "Sold Out" : "Register"}
                      </button>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        )}

        <div className="text-center mt-10">
          <a
            href="#"
            className="text-burgundy underline-offset-4 hover:underline text-sm font-medium"
          >
            View Past Workshops →
          </a>
        </div>
      </div>

      <WorkshopRegisterModal
        workshop={selected}
        onClose={() => setSelected(null)}
        onReserve={reserve}
      />
    </section>
  );
}
