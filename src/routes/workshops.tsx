import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Workshops } from "@/components/Workshops";
import { Footer } from "@/components/Footer";
import { Ornament, Mandala } from "@/components/Ornament";

export const Route = createFileRoute("/workshops")({
  head: () => ({
    meta: [
      { title: "Workshops — Nritya Dance Academy | Kathak Intensives & Online" },
      {
        name: "description",
        content:
          "Seasonal Kathak & Semi-Classical workshops — abhinaya, taal labs, and choreography intensives. Online and in-studio in Kolkata.",
      },
      { property: "og:title", content: "Workshops at Nritya Dance Academy" },
      {
        property: "og:description",
        content: "Reserve your spot in our upcoming Kathak workshops — both online and in-studio.",
      },
    ],
  }),
  component: WorkshopsPage,
});

function WorkshopsPage() {
  return (
    <div className="bg-cream text-charcoal min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <header className="relative pt-32 pb-12 px-5 lg:px-10 bg-charcoal text-cream overflow-hidden">
          <Mandala className="absolute -top-24 -left-20 text-gold/15" size={460} />
          <Mandala className="absolute -bottom-28 -right-16 text-gold/10" size={520} />
          <div className="relative max-w-4xl mx-auto text-center">
            <span
              className="block text-gold text-xl sm:text-2xl mb-3"
              style={{ fontFamily: '"Tiro Bangla", serif' }}
            >
              তাল · লয় · ভাব
            </span>
            <span className="text-gold uppercase tracking-[0.4em] text-xs">This Season</span>
            <h1 className="font-display text-4xl md:text-6xl mt-3">Workshops</h1>
            <Ornament className="mt-6" />
            <p className="mt-5 text-cream/80 max-w-2xl mx-auto">
              Short, immersive cohorts — taal, abhinaya, and choreography intensives — held in our
              Kolkata studio and online for dancers everywhere.
            </p>
          </div>
        </header>
        <Workshops />
      </main>
      <Footer />
    </div>
  );
}
