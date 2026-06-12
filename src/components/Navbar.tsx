import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useRouterState, useNavigate } from "@tanstack/react-router";

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
      <nav className="max-w-7xl mx-auto px-5 lg:px-10 h-16 flex items-center justify-between">
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

        <div className="flex items-center gap-3">
          <Link
            to="/workshops"
            className="hidden sm:inline-flex items-center rounded-md bg-gold px-4 py-2 text-sm font-semibold text-charcoal hover:bg-gold/90 transition border border-gold/60"
          >
            Register Now
          </Link>
          <button
            className={`md:hidden ${transparent ? "text-cream" : "text-burgundy"}`}
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden bg-cream border-t border-gold/20">
          <ul className="px-5 py-4 space-y-3">
            {items.map((l) => (
              <li key={l.label}>
                {l.to ? (
                  <Link
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className="block w-full text-left py-1 text-charcoal"
                  >
                    {l.label}
                  </Link>
                ) : (
                  <button
                    onClick={() => goHash(l.hash!)}
                    className="block w-full text-left py-1 text-charcoal"
                  >
                    {l.label}
                  </button>
                )}
              </li>
            ))}
            <li>
              <Link
                to="/classes"
                onClick={() => setOpen(false)}
                className="block w-full rounded-md bg-gold px-4 py-2 text-sm font-semibold text-charcoal text-center"
              >
                Register Now
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
