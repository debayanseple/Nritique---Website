import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Mandala, Ornament } from "./Ornament";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Video placeholder + mandala watermarks */}
      <div className="absolute inset-0 bg-charcoal">
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <div className="flex flex-col items-center gap-3 text-cream/40">
            <Play size={56} />
            <span className="text-xs uppercase tracking-[0.3em]">Background Video</span>
          </div>
        </div>
        <Mandala className="absolute -top-24 -left-24 text-gold/15" size={520} />
        <Mandala className="absolute -bottom-32 -right-24 text-gold/10" size={620} />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/75 to-charcoal/95" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative z-10 text-center max-w-3xl px-5"
      >
        <span
          className="block text-gold text-2xl sm:text-3xl mb-3"
          style={{ fontFamily: '"Tiro Bangla", serif' }}
        >
          নৃত্যং ভাবস্য ভাষা
        </span>
        <span className="inline-block text-gold uppercase tracking-[0.4em] text-xs mb-6">
          Kathak · Semi-Classical
        </span>
        <h1 className="font-display text-4xl sm:text-5xl md:text-7xl text-cream leading-tight">
          Where Tradition <br className="hidden sm:block" />
          <span className="text-gold italic">Meets Expression</span>
        </h1>
        <Ornament className="my-7" />
        <p className="text-cream/80 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
          A gurukul-rooted academy of Kathak &amp; Semi-Classical dance — taught with reverence for
          the tradition and the freedom of every dancer's voice.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/classes"
            className="rounded-md bg-gold px-6 py-3 text-charcoal font-semibold hover:bg-gold/90 transition border border-gold/70"
          >
            Explore Classes
          </Link>
          <Link
            to="/workshops"
            className="rounded-md border border-cream/30 px-6 py-3 text-cream font-semibold hover:bg-cream/10 transition"
          >
            View Workshops
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
