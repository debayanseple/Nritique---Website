import { motion } from "framer-motion";
import { ChevronDown, Play } from "lucide-react";
import { Mandala } from "./Ornament";

export function Hero() {
  const scrollToNext = () => {
    document.getElementById("hero")?.nextElementSibling?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] pt-14 sm:pt-20 flex items-center justify-center overflow-hidden"
    >
      {/* Video placeholder + mandala watermarks */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#fdf8ef] via-[#faf7f2] to-[#f3ebdd]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_60%_at_50%_0%,rgba(201,168,76,0.25),transparent_65%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_55%_at_50%_115%,rgba(107,30,42,0.10),transparent_60%)]" />
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <div className="flex flex-col items-center gap-3 text-charcoal/40">
            <Play size={56} />
            <span className="text-xs uppercase tracking-[0.3em]">Background Video</span>
          </div>
        </div>
        <Mandala
          className="absolute -top-24 -left-24 text-gold/25 max-w-[280px] sm:max-w-none"
          size={520}
        />
        <Mandala
          className="absolute -bottom-32 -right-24 text-gold/20 max-w-[320px] sm:max-w-none"
          size={620}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative z-10 text-center max-w-3xl px-5"
      >
        <motion.img
          src="/images/Full-logo.webp"
          alt="Nritya Dance Academy"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full max-w-[85vw] sm:max-w-xl md:max-w-2xl max-h-[55dvh] mx-auto h-auto object-contain"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        onClick={scrollToNext}
        className="absolute bottom-6 inset-x-0 z-10 flex flex-col items-center gap-2 cursor-pointer"
        role="button"
        aria-label="Scroll to next section"
      >
        <motion.span
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          className="text-charcoal/70 text-[11px] sm:text-xs uppercase tracking-[0.3em]"
        >
          Explore Classes &amp; Workshops
        </motion.span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="text-gold"
        >
          <ChevronDown size={26} />
        </motion.div>
      </motion.div>
    </section>
  );
}
