import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { ClassRegisterModal } from "./modals/ClassRegisterModal";
import { Mandala, Ornament } from "./Ornament";

export interface Batch {
  id: string;
  name: string;
  ageGroup: string;
  description: string;
  schedule: string;
  color: string;
}

const batches: Batch[] = [
  {
    id: "little-stars",
    name: "Little Stars",
    ageGroup: "Ages 4–7",
    description:
      "Introductory movement, rhythm games, basic mudras and stage confidence in a playful environment.",
    schedule: "Sat & Sun · 10:00 – 11:00 AM",
    color: "#C9A84C",
  },
  {
    id: "junior",
    name: "Junior Batch",
    ageGroup: "Ages 8–12",
    description: "Kathak foundations — taal, tukde, basic compositions and posture discipline.",
    schedule: "Mon, Wed, Fri · 5:00 – 6:30 PM",
    color: "#6B1E2A",
  },
  {
    id: "teen",
    name: "Teen Batch",
    ageGroup: "Ages 13–17",
    description: "Kathak plus semi-classical, chakkar training, abhinaya and stage repertoire.",
    schedule: "Tue & Thu · 6:00 – 7:30 PM",
    color: "#1C1C1E",
  },
  {
    id: "adult",
    name: "Adult Batch",
    ageGroup: "Ages 18+",
    description: "Both styles at a self-paced rhythm, technique refinement and stage prep.",
    schedule: "Sat · 7:00 – 8:30 PM",
    color: "#8B5A2B",
  },
  {
    id: "semi",
    name: "Semi-Classical Courses",
    ageGroup: "All Ages",
    description: "Short-format Odissi-influenced choreography and seasonal thematic pieces.",
    schedule: "8-week cohorts · See website",
    color: "#C9A84C",
  },
];

const fade = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.6 } }),
};

function readableOn(bg: string): string {
  const hex = bg.replace("#", "");
  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);
  const luminance = 0.299 * r + 0.587 * g + 0.114 * b;
  return luminance > 150 ? "#1c1c1e" : "#faf7f2";
}

export function Classes() {
  const [selected, setSelected] = useState<Batch | null>(null);

  return (
    <section id="classes" className="py-16 sm:py-24 px-4 sm:px-5 lg:px-10 bg-cream">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold uppercase tracking-[0.3em] text-xs">Curriculum</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-burgundy mt-3">
            Our Classes
          </h2>
          <Ornament className="mt-5" />
          <p className="text-muted-foreground mt-5 max-w-xl mx-auto">
            Five thoughtfully designed batches that nurture every dancer — from first steps to
            seasoned stage.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {batches.map((b, i) => (
            <motion.article
              key={b.id}
              variants={fade}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              className="group relative overflow-hidden rounded-2xl bg-card border border-border shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <div
                className="relative px-6 sm:px-7 py-5 flex items-center justify-between overflow-hidden"
                style={{ backgroundColor: b.color }}
              >
                <span
                  className="text-xs font-bold uppercase tracking-[0.25em]"
                  style={{ color: readableOn(b.color) }}
                >
                  {b.ageGroup}
                </span>
                <span
                  className="font-display text-2xl leading-none"
                  style={{ color: readableOn(b.color), opacity: 0.5 }}
                >
                  ✦
                </span>
              </div>
              <div className="relative flex-1 flex flex-col p-6 sm:p-7 pt-6">
                <Mandala className="absolute -top-8 -right-8 text-gold/10" size={170} />
                <h3 className="relative font-display text-2xl sm:text-[1.75rem] text-charcoal leading-tight">
                  {b.name}
                </h3>
                <p className="relative text-muted-foreground mt-2 text-sm leading-relaxed flex-1">
                  {b.description}
                </p>
                <div className="relative mt-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-burgundy">
                  <Calendar size={15} />
                  {b.schedule}
                </div>
                <button
                  onClick={() => setSelected(b)}
                  className="relative mt-6 w-full rounded-md bg-burgundy px-5 py-3 text-sm font-semibold text-cream transition-colors hover:bg-gold hover:text-charcoal"
                >
                  Register for this batch
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <ClassRegisterModal batch={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
