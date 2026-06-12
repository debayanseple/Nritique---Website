import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useRouterState, useNavigate } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";

type Item = { label: string; to?: string; hash?: string };

const items: Item[] = [
  { label: "Classes", to: "/classes" },
  { label: "Workshops", to: "/workshops" },
  { label: "Gallery", hash: "gallery" },
  { label: "About", hash: "about" },
  { label: "Contact", hash: "contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const navigate = useNavigate();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const goHash = (hash: string) => {
    setOpen(false);
    if (isHome) {
      document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate({ to: "/", hash });
    }
  };

  // Solid background unless we're on the home page hero
  const transparent = isHome && !scrolled;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all ${
        transparent ? "bg-transparent" : "bg-cream/85 backdrop-blur-md border-b border-gold/20"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-10 h-16 flex items-center justify-between">
        <Link
          to="/"
          className={`font-display text-xl tracking-wide flex items-baseline gap-1.5 ${
            transparent ? "text-cream" : "text-burgundy"
          }`}
        >
          <span style={{ fontFamily: '"Tiro Bangla", serif' }} className="text-gold text-base">
            নৃত্য
          </span>
          <span>
            Nritya<span className="text-gold">.</span>
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-7">
          {items.map((l) => {
            const base = transparent
              ? "text-cream/85 hover:text-gold"
              : "text-charcoal/75 hover:text-burgundy";
            return (
              <li key={l.label}>
                {l.to ? (
                  <Link
                    to={l.to}
                    className={`text-sm font-medium tracking-wide transition-colors ${base}`}
                    activeProps={{ className: "text-gold" }}
                  >
                    {l.label}
                  </Link>
                ) : (
                  <button
                    onClick={() => goHash(l.hash!)}
                    className={`text-sm font-medium tracking-wide transition-colors ${base}`}
                  >
                    {l.label}
                  </button>
                )}
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            to="/workshops"
            className={`inline-flex items-center rounded-md bg-gold px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-semibold text-charcoal hover:bg-gold/90 transition border border-gold/60 ${
              open ? "hidden" : ""
            }`}
          >
            Register
          </Link>
          <button
            className={`md:hidden min-w-[44px] min-h-[44px] flex items-center justify-center ${transparent ? "text-cream" : "text-burgundy"}`}
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer with backdrop and slide animation */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden fixed inset-0 top-16 bg-charcoal/40 backdrop-blur-sm z-30"
              onClick={() => setOpen(false)}
            />
            {/* Slide-down drawer */}
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="md:hidden bg-cream border-t border-gold/20 relative z-40 shadow-xl"
            >
              <ul className="px-5 py-4 space-y-1">
                {items.map((l) => (
                  <li key={l.label}>
                    {l.to ? (
                      <Link
                        to={l.to}
                        onClick={() => setOpen(false)}
                        className="block w-full text-left py-3 px-2 text-charcoal text-base font-medium rounded-md hover:bg-gold/10 transition-colors active:bg-gold/20"
                        activeProps={{ className: "text-burgundy bg-burgundy/5" }}
                      >
                        {l.label}
                      </Link>
                    ) : (
                      <button
                        onClick={() => goHash(l.hash!)}
                        className="block w-full text-left py-3 px-2 text-charcoal text-base font-medium rounded-md hover:bg-gold/10 transition-colors active:bg-gold/20"
                      >
                        {l.label}
                      </button>
                    )}
                  </li>
                ))}
                <li className="pt-2">
                  <Link
                    to="/classes"
                    onClick={() => setOpen(false)}
                    className="block w-full rounded-md bg-gold px-4 py-3 text-sm font-semibold text-charcoal text-center active:bg-gold/80"
                  >
                    Register Now
                  </Link>
                </li>
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
