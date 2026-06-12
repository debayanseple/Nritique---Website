import { useState } from "react";
import { motion } from "framer-motion";
import { ClassRegisterModal } from "./modals/ClassRegisterModal";
import { Ornament } from "./Ornament";

export interface Batch {
  id: string;
  name: string;
  ageGroup: string;
  description: string;
  schedule: string;
  color: string;
}

const batches: Batch[] = [
  { id: "little-stars", name: "Little Stars", ageGroup: "Ages 4–7", description: "Introductory movement, rhythm games, basic mudras and stage confidence in a playful environment.", schedule: "Sat & Sun · 10:00 – 11:00 AM", color: "#C9A84C" },
  { id: "junior", name: "Junior Batch", ageGroup: "Ages 8–12", description: "Kathak foundations — taal, tukde, basic compositions and posture discipline.", schedule: "Mon, Wed, Fri · 5:00 – 6:30 PM", color: "#6B1E2A" },
  { id: "teen", name: "Teen Batch", ageGroup: "Ages 13–17", description: "Kathak plus semi-classical, chakkar training, abhinaya and stage repertoire.", schedule: "Tue & Thu · 6:00 – 7:30 PM", color: "#1C1C1E" },
  { id: "adult", name: "Adult Batch", ageGroup: "Ages 18+", description: "Both styles at a self-paced rhythm, technique refinement and stage prep.", schedule: "Sat · 7:00 – 8:30 PM", color: "#8B5A2B" },
  { id: "semi", name: "Semi-Classical Courses", ageGroup: "All Ages", description: "Short-format Odissi-influenced choreography and seasonal thematic pieces.", schedule: "8-week cohorts · See website", color: "#C9A84C" },
];

const fade = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.6 } }),
};

export function Classes() {
  const [selected, setSelected] = useState<Batch | null>(null);

  return (
    <section id="classes" className="py-24 px-5 lg:px-10 bg-cream">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold uppercase tracking-[0.3em] text-xs">Curriculum</span>
          <h2 className="font-display text-4xl md:text-5xl text-burgundy mt-3">Our Classes</h2>
          <Ornament className="mt-5" />
          <p className="text-muted-foreground mt-5 max-w-xl mx-auto">
            Five thoughtfully designed batches that nurture every dancer — from first steps to seasoned stage.
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
              className="group rounded-xl bg-card border border-border p-7 hover:shadow-lg transition-shadow flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <span
                  className="inline-block rounded-full px-3 py-1 text-xs font-semibold text-cream"
                  style={{ backgroundColor: b.color }}
                >
                  {b.ageGroup}
                </span>
                <span className="h-px flex-1 ml-4 bg-border" />
              </div>
              <h3 className="font-display text-2xl text-charcoal">{b.name}</h3>
              <p className="text-muted-foreground mt-2 text-sm leading-relaxed flex-1">{b.description}</p>
              <p className="mt-4 text-xs text-burgundy uppercase tracking-wider">{b.schedule}</p>
              <button
                onClick={() => setSelected(b)}
                className="mt-6 self-start rounded-md bg-burgundy text-cream px-5 py-2 text-sm font-semibold hover:bg-burgundy/90 transition"
              >
                Register
              </button>
            </motion.article>
          ))}
        </div>
      </div>

      <ClassRegisterModal batch={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
