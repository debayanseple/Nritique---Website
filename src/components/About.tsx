import { motion } from "framer-motion";

const stats = [
  { value: "500+", label: "Students Trained" },
  { value: "12", label: "Years of Excellence" },
  { value: "30+", label: "Workshops Conducted" },
];

export function About() {
  return (
    <section id="about" className="py-14 sm:py-24 px-4 sm:px-5 lg:px-10 bg-charcoal text-cream">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-gold uppercase tracking-[0.3em] text-xs">Our Story</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl mt-3">A Lineage in Motion</h2>
          <div className="mt-6 space-y-4 text-cream/80 leading-relaxed">
            <p>
              Founded in 2014, Nritya Dance Academy was born from a quiet conviction: that classical
              Indian dance is not a museum piece, but a living language. Every step we teach is
              rooted in tradition and shaped by the dancer who carries it forward.
            </p>
            <p>
              From four-year-olds finding their first taal to adults rediscovering grace, our
              studios hum with rhythm — disciplined, joyful, and unhurried. We believe in slow
              growth, careful technique, and the courage to perform.
            </p>
            <p className="text-gold italic font-display text-lg">
              — Smt. Anaya Sengupta, Founder & Artistic Director
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-xl bg-burgundy flex items-center justify-center">
            <span className="text-cream/40 text-xs uppercase tracking-[0.3em]">
              Founder Portrait
            </span>
          </div>
          <div className="absolute -bottom-6 -left-6 w-32 h-32 border-2 border-gold rounded-xl -z-0 hidden md:block" />
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto mt-12 sm:mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="text-center border-t border-cream/20 pt-8"
          >
            <div className="font-display text-4xl sm:text-3xl md:text-5xl text-gold">{s.value}</div>
            <div className="mt-2 text-xs sm:text-sm uppercase tracking-wider text-cream/70">
              {s.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
