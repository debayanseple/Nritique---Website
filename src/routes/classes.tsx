import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Classes } from "@/components/Classes";
import { Footer } from "@/components/Footer";
import { Ornament, Mandala } from "@/components/Ornament";

export const Route = createFileRoute("/classes")({
  head: () => ({
    meta: [
      { title: "Classes — Nritya Dance Academy | Kathak & Semi-Classical, Kolkata" },
      { name: "description", content: "Weekly batches in Kathak and Semi-Classical dance for ages 4 through adult. Find the right class for your dancer at Nritya, Kolkata." },
      { property: "og:title", content: "Classes at Nritya Dance Academy" },
      { property: "og:description", content: "From Little Stars to Adult batches — disciplined, joyful Kathak training rooted in tradition." },
    ],
  }),
  component: ClassesPage,
});

function ClassesPage() {
  return (
    <div className="bg-cream text-charcoal min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <header className="relative pt-32 pb-12 px-5 lg:px-10 bg-burgundy text-cream overflow-hidden">
          <Mandala className="absolute -top-20 -right-16 text-gold/20" size={420} />
          <Mandala className="absolute -bottom-32 -left-20 text-gold/10" size={500} />
          <div className="relative max-w-4xl mx-auto text-center">
            <span
              className="block text-gold text-xl sm:text-2xl mb-3"
              style={{ fontFamily: '"Tiro Bangla", serif' }}
            >
              শিক্ষা · অভ্যাস · অনুভূতি
            </span>
            <span className="text-gold uppercase tracking-[0.4em] text-xs">Curriculum</span>
            <h1 className="font-display text-4xl md:text-6xl mt-3">Our Classes</h1>
            <Ornament className="mt-6" />
            <p className="mt-5 text-cream/85 max-w-2xl mx-auto">
              Five thoughtfully designed batches that nurture every dancer — from first ankle-bells
              to seasoned stage. The guru-shishya parampara, kept alive with patience and play.
            </p>
          </div>
        </header>
        <Classes />
      </main>
      <Footer />
    </div>
  );
}
