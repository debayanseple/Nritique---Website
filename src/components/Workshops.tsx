import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Users } from "lucide-react";
import { WorkshopRegisterModal } from "./modals/WorkshopRegisterModal";
import { Ornament } from "./Ornament";

export interface Workshop {
  id: string;
  title: string;
  style: string;
  date: string;
  format: "Online" | "Offline";
  fee: number;
  seatsTotal: number;
  seatsLeft: number;
  color: string;
  poster?: string;
}

const initial: Workshop[] = [
  { id: "w1", title: "Abhinaya Intensive", style: "Kathak", date: "July 12, 2026", format: "Offline", fee: 1800, seatsTotal: 25, seatsLeft: 7, color: "#6B1E2A", poster: "/images/workshops/abhinaya-intensive.png" },
  { id: "w2", title: "Rhythm & Taal Lab", style: "Semi-Classical", date: "July 26, 2026", format: "Online", fee: 900, seatsTotal: 40, seatsLeft: 18, color: "#C9A84C", poster: "/images/workshops/Rhythm & Taal Lab.png" },
  { id: "w3", title: "Monsoon Choreography", style: "Odissi-influenced", date: "August 09, 2026", format: "Offline", fee: 2200, seatsTotal: 20, seatsLeft: 4, color: "#1C1C1E", poster: "/images/workshops/Monsoon Choreography.png" },
];

const tabs = ["All", "Upcoming", "Online", "Offline"] as const;

export function Workshops() {
  const [workshops, setWorkshops] = useState<Workshop[]>(initial);
  const [tab, setTab] = useState<(typeof tabs)[number]>("All");
  const [selected, setSelected] = useState<Workshop | null>(null);

  const filtered = useMemo(() => {
    if (tab === "All" || tab === "Upcoming") return workshops;
    return workshops.filter((w) => w.format === tab);
  }, [tab, workshops]);

  const reserve = (id: string) => {
    setWorkshops((ws) => ws.map((w) => (w.id === id && w.seatsLeft > 0 ? { ...w, seatsLeft: w.seatsLeft - 1 } : w)));
  };

  return (
    <section id="workshops" className="py-24 px-5 lg:px-10 bg-muted/40">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-gold uppercase tracking-[0.3em] text-xs">This Season</span>
          <h2 className="font-display text-4xl md:text-5xl text-burgundy mt-3">Upcoming Workshops</h2>
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
              <div
                className="aspect-[4/3] overflow-hidden"
                style={{ backgroundColor: w.color }}
              >
                {w.poster ? (
                  <img
                    src={w.poster}
                    alt={`${w.title} poster`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-cream">
                    <span className="opacity-70 text-sm uppercase tracking-[0.3em]">Poster</span>
                  </div>
                )}
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs uppercase tracking-wider text-burgundy font-semibold">{w.style}</span>
                  <span
                    className={`text-xs rounded-full px-2 py-0.5 ${
                      w.format === "Online" ? "bg-gold/20 text-charcoal" : "bg-burgundy/10 text-burgundy"
                    }`}
                  >
                    {w.format}
                  </span>
                </div>
                <h3 className="font-display text-xl text-charcoal">{w.title}</h3>
                <div className="mt-3 space-y-1 text-sm text-muted-foreground">
                  <p className="flex items-center gap-2"><Calendar size={14} /> {w.date}</p>
                  <p className="flex items-center gap-2"><MapPin size={14} /> {w.format === "Online" ? "Zoom" : "Studio · Kolkata"}</p>
                  <p className="flex items-center gap-2"><Users size={14} /> {w.seatsLeft} seats left</p>
                </div>
                <div className="mt-5 flex items-center justify-between">
                  <span className="font-display text-2xl text-burgundy">₹{w.fee}</span>
                  <button
                    disabled={w.seatsLeft === 0}
                    onClick={() => setSelected(w)}
                    className="rounded-md bg-burgundy text-cream px-4 py-2 text-sm font-semibold hover:bg-burgundy/90 transition disabled:opacity-50"
                  >
                    {w.seatsLeft === 0 ? "Sold Out" : "Register"}
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="#" className="text-burgundy underline-offset-4 hover:underline text-sm font-medium">
            View Past Workshops →
          </a>
        </div>
      </div>

      <WorkshopRegisterModal workshop={selected} onClose={() => setSelected(null)} onReserve={reserve} />
    </section>
  );
}
