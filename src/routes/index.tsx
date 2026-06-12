import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Gallery } from "@/components/Gallery";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Ornament } from "@/components/Ornament";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nritya Dance Academy — Kathak & Semi-Classical, Kolkata" },
      {
        name: "description",
        content:
          "Kathak & Semi-Classical dance classes for all ages in Kolkata. Workshops, batches, and stage training rooted in tradition.",
      },
      { property: "og:title", content: "Nritya Dance Academy" },
      {
        property: "og:description",
        content: "Where tradition meets expression — classes & workshops for every age.",
      },
    ],
  }),
  component: Index,
});

const teasers = [
  {
    to: "/classes" as const,
    eyebrow: "Curriculum",
    title: "Our Classes",
    devanagari: "শিক্ষা",
    body: "Five batches across all ages — Kathak foundations, semi-classical, and stage repertoire.",
    cta: "Explore Classes",
    bg: "bg-burgundy",
    tint: "text-cream",
  },
  {
    to: "/workshops" as const,
    eyebrow: "This Season",
    title: "Upcoming Workshops",
    devanagari: "অভ্যাস",
    body: "Abhinaya, taal, and choreography intensives — online and in our Kolkata studio.",
    cta: "View Workshops",
    bg: "bg-gold",
    tint: "text-charcoal",
  },
];

function Index() {
  return (
    <div className="bg-cream text-charcoal">
      <Navbar />
      <main>
        <Hero />

        {/* Teasers replacing inline Classes/Workshops sections */}
        <section className="py-24 px-5 lg:px-10 bg-cream">
          <div className="max-w-6xl mx-auto text-center mb-12">
            <span className="text-gold uppercase tracking-[0.3em] text-xs">What We Offer</span>
            <h2 className="font-display text-4xl md:text-5xl text-burgundy mt-3">
              A Practice for Every Dancer
            </h2>
            <Ornament className="mt-5" />
          </div>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
            {teasers.map((t, i) => (
              <motion.div
                key={t.to}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className={`relative ${t.bg} ${t.tint} rounded-xl p-10 overflow-hidden border border-gold/30`}
              >
                <span
                  className="absolute top-4 right-5 text-5xl opacity-25"
                  style={{ fontFamily: '"Tiro Bangla", serif' }}
                >
                  {t.devanagari}
                </span>
                <span className="text-xs uppercase tracking-[0.3em] opacity-80">{t.eyebrow}</span>
                <h3 className="font-display text-3xl md:text-4xl mt-2">{t.title}</h3>
                <p className="mt-4 opacity-85 max-w-md">{t.body}</p>
                <Link
                  to={t.to}
                  className={`mt-6 inline-flex items-center gap-2 font-semibold border-b ${
                    t.tint === "text-cream"
                      ? "border-gold text-gold"
                      : "border-burgundy text-burgundy"
                  } pb-0.5 hover:gap-3 transition-all`}
                >
                  {t.cta} <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        <Gallery />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
