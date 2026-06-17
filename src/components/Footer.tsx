import { Instagram, Youtube, MessageCircle } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useState } from "react";

type ExploreLink =
  | { label: string; to: "/workshops"; hash?: never }
  | { label: string; to: "/"; hash: string };

const exploreLinks: ExploreLink[] = [
  { label: "Workshops", to: "/workshops" },
  { label: "Gallery", to: "/", hash: "gallery" },
  { label: "About", to: "/", hash: "about" },
];

const batches = [
  { label: "Little Stars", age: "4–7" },
  { label: "Junior", age: "8–12" },
  { label: "Teen", age: "13–17" },
  { label: "Adult", age: "18+" },
];

export function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className="bg-[#5c1a1a] text-[#e8d5b0]/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 pt-10 sm:pt-14 pb-8 sm:pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h3 className="font-display text-[#e8d5b0] text-xl tracking-widest flex items-center gap-2 mb-4">
              NUPUR <span className="text-[#c9a84c]">✦</span> KATHAK
            </h3>
            <p className="text-sm leading-relaxed">
              A Kathak &amp; semi-classical academy in Kolkata, WestBengal — teaching the Indian Classical with care since 2009.
            </p>
            <div className="flex gap-3 mt-5">
              <a href="https://www.instagram.com/srijita_baidya/" aria-label="Instagram" className="hover:text-[#c9a84c] transition">
                <Instagram size={18} />
              </a>
              <a href="https://www.youtube.com/@SrijitaBaidya" aria-label="YouTube" className="hover:text-[#c9a84c] transition">
                <Youtube size={18} />
              </a>
              <a href="#" aria-label="WhatsApp" className="hover:text-[#c9a84c] transition">
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-[#e8d5b0] text-xs font-semibold uppercase tracking-widest mb-4">
              Explore
            </h4>
            <ul className="space-y-2 text-sm">
              {exploreLinks.map((l) => (
                <li key={l.label}>
                  {l.to === "/" ? (
                    <Link to={l.to} hash={l.hash} className="hover:text-[#c9a84c] transition">
                      {l.label}
                    </Link>
                  ) : (
                    <Link to={l.to} className="hover:text-[#c9a84c] transition">
                      {l.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Batches */}
          <div>
            <h4 className="text-[#e8d5b0] text-xs font-semibold uppercase tracking-widest mb-4">
              Batches
            </h4>
            <ul className="space-y-2 text-sm">
              {batches.map((b) => (
                <li key={b.label}>
                  {b.label} · {b.age}
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-[#e8d5b0] text-xs font-semibold uppercase tracking-widest mb-4">
              Stay in the Loop
            </h4>
            <p className="text-sm mb-4">
              Workshop dates &amp; recital news, once a month. No spam.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 min-w-0 bg-transparent border border-[#e8d5b0]/30 rounded px-3 py-2.5 sm:py-2 text-sm text-[#e8d5b0] placeholder-[#e8d5b0]/40 focus:outline-none focus:border-[#c9a84c]"
              />
              <button
                type="button"
                className="bg-[#c9a84c] text-[#5c1a1a] text-sm font-semibold px-4 py-2 rounded hover:bg-[#d4b86a] transition whitespace-nowrap"
              >
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[#e8d5b0]/15 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-[#e8d5b0]/50">
          <span>© {new Date().getFullYear()} Nritique Dance Classes. All rights reserved.</span>
          <span>Kolkata, WestBengal · hello@nritique.in</span>
        </div>
      </div>
    </footer>
  );
}
