import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { N as Navbar, O as Ornament, F as Footer, M as Mandala, s as submitRegistration } from "./Footer-BO-rUDIe.mjs";
import "../_libs/seroval.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { A as ArrowRight, P as Play, M as MapPin, a as Phone, b as Mail, c as MessageCircle } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "./server-uYNHDmd8.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "../_libs/zod.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function Hero() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      id: "hero",
      className: "relative min-h-screen flex items-center justify-center overflow-hidden",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 bg-charcoal", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center justify-center opacity-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-3 text-cream/40", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { size: 56 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-[0.3em]", children: "Background Video" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Mandala, { className: "absolute -top-24 -left-24 text-gold/15 max-w-[280px] sm:max-w-none", size: 520 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Mandala, { className: "absolute -bottom-32 -right-24 text-gold/10 max-w-[320px] sm:max-w-none", size: 620 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/75 to-charcoal/95" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 30 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.9, ease: "easeOut" },
            className: "relative z-10 text-center max-w-3xl px-5",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "block text-gold text-xl sm:text-2xl md:text-3xl mb-3",
                  style: { fontFamily: '"Tiro Bangla", serif' },
                  children: "নৃত্যং ভাবস্য ভাষা"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block text-gold uppercase tracking-[0.4em] text-xs mb-6", children: "Kathak · Semi-Classical" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-3xl sm:text-5xl md:text-7xl text-cream leading-tight", children: [
                "Where Tradition ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", { className: "hidden sm:block" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold italic", children: "Meets Expression" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Ornament, { className: "my-7" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-cream/80 text-base sm:text-lg max-w-xl mx-auto leading-relaxed", children: "A gurukul-rooted academy of Kathak & Semi-Classical dance — taught with reverence for the tradition and the freedom of every dancer's voice." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 sm:mt-10 pb-4 sm:pb-0 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Link,
                  {
                    to: "/classes",
                    className: "rounded-md bg-gold px-6 py-3 text-charcoal font-semibold hover:bg-gold/90 transition border border-gold/70",
                    children: "Explore Classes"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Link,
                  {
                    to: "/workshops",
                    className: "rounded-md border border-cream/30 px-6 py-3 text-cream font-semibold hover:bg-cream/10 transition",
                    children: "View Workshops"
                  }
                )
              ] })
            ]
          }
        )
      ]
    }
  );
}
const baseItems = [
  {
    workshopName: "Abhinaya Intensive",
    color: "#6B1E2A",
    rotate: -6,
    poster: "/images/workshops/abhinaya-intensive.png"
  },
  {
    workshopName: "Monsoon Choreography",
    color: "#C9A84C",
    rotate: 4,
    poster: "/images/workshops/Monsoon Choreography.png"
  },
  {
    workshopName: "Taal Lab",
    color: "#1C1C1E",
    rotate: -3,
    poster: "/images/workshops/Rhythm & Taal Lab.png"
  },
  { workshopName: "Stage Repertoire", color: "#8B2A38", rotate: 5 },
  { workshopName: "Kathak Foundations", color: "#A8893C", rotate: -5 },
  { workshopName: "Bhava Workshop", color: "#4A1520", rotate: 3 },
  { workshopName: "Semi-Classical", color: "#D4B45C", rotate: -4 },
  { workshopName: "Guru Vandana", color: "#6B1E2A", rotate: 6 }
];
const items = [...baseItems, ...baseItems];
function Gallery() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "gallery", className: "py-16 sm:py-24 bg-cream overflow-hidden relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        "aria-hidden": true,
        className: "absolute inset-0 opacity-40",
        style: {
          backgroundImage: "repeating-linear-gradient(90deg, #C9A84C 0 60px, transparent 60px 140px)",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 85%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 85%)"
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative max-w-6xl mx-auto px-5 lg:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 },
        className: "text-center mb-14",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold uppercase tracking-[0.3em] text-xs", children: "In Frame" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl sm:text-4xl md:text-5xl text-burgundy mt-3", children: "Workshop Moments" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Ornament, { className: "mt-5" })
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex w-max gap-5 sm:gap-10 px-5 sm:px-10 py-8 animate-marquee hover:[animation-play-state:paused]", children: items.map((g, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "shrink-0 w-[170px] sm:w-[220px] md:w-[260px] aspect-[3/4] rounded-lg shadow-2xl ring-1 ring-charcoal/10 overflow-hidden relative",
          style: {
            backgroundColor: g.color,
            transform: `rotate(${g.rotate}deg)`
          },
          children: [
            g.poster && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: g.poster,
                alt: g.workshopName,
                className: "absolute inset-0 w-full h-full object-cover"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-cream/90 text-xs uppercase tracking-[0.25em] font-medium", children: g.workshopName }) })
          ]
        },
        i
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-y-0 left-0 w-10 sm:w-24 bg-gradient-to-r from-cream to-transparent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-y-0 right-0 w-10 sm:w-24 bg-gradient-to-l from-cream to-transparent" })
    ] })
  ] });
}
const stats = [
  { value: "500+", label: "Students Trained" },
  { value: "12", label: "Years of Excellence" },
  { value: "30+", label: "Workshops Conducted" }
];
function About() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "about", className: "py-14 sm:py-24 px-4 sm:px-5 lg:px-10 bg-charcoal text-cream", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: -30 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          transition: { duration: 0.7 },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold uppercase tracking-[0.3em] text-xs", children: "Our Story" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl sm:text-4xl md:text-5xl mt-3", children: "A Lineage in Motion" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 space-y-4 text-cream/80 leading-relaxed", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Founded in 2014, Nritya Dance Academy was born from a quiet conviction: that classical Indian dance is not a museum piece, but a living language. Every step we teach is rooted in tradition and shaped by the dancer who carries it forward." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "From four-year-olds finding their first taal to adults rediscovering grace, our studios hum with rhythm — disciplined, joyful, and unhurried. We believe in slow growth, careful technique, and the courage to perform." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gold italic font-display text-lg", children: "— Smt. Anaya Sengupta, Founder & Artistic Director" })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: 30 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          transition: { duration: 0.7 },
          className: "relative",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[4/5] rounded-xl bg-burgundy flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-cream/40 text-xs uppercase tracking-[0.3em]", children: "Founder Portrait" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-6 -left-6 w-32 h-32 border-2 border-gold rounded-xl -z-0 hidden md:block" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-6xl mx-auto mt-12 sm:mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6", children: stats.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { delay: i * 0.1, duration: 0.6 },
        className: "text-center border-t border-cream/20 pt-8",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-4xl sm:text-3xl md:text-5xl text-gold", children: s.value }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-xs sm:text-sm uppercase tracking-wider text-cream/70", children: s.label })
        ]
      },
      s.label
    )) })
  ] });
}
function Contact() {
  const [form, setForm] = reactExports.useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = reactExports.useState(false);
  const [isSubmitting, setIsSubmitting] = reactExports.useState(false);
  const [error, setError] = reactExports.useState(null);
  const submit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    try {
      const res = await submitRegistration({
        data: {
          type: "enquiry",
          name: form.name,
          email: form.email,
          phone: form.phone,
          message: form.message
        }
      });
      if (res.success) {
        setSent(true);
        setForm({ name: "", email: "", phone: "", message: "" });
        setTimeout(() => setSent(false), 4e3);
      } else {
        setError(res.error || "Failed to send enquiry. Please try again.");
      }
    } catch (err) {
      console.error("Enquiry submission error:", err);
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "contact", className: "py-16 sm:py-24 px-4 sm:px-5 lg:px-10 bg-cream", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 },
        className: "text-center mb-14",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold uppercase tracking-[0.3em] text-xs", children: "Get In Touch" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl sm:text-4xl md:text-5xl text-burgundy mt-3", children: "Visit Our Studio" })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: -20 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          transition: { duration: 0.6 },
          className: "space-y-6",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "text-gold shrink-0 mt-1" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-charcoal", children: "Studio Address" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground text-sm mt-1", children: [
                  "142, Rabindra Sarani, Hindustan Park",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                  "Kolkata, West Bengal 700029"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "text-gold shrink-0 mt-1" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-charcoal", children: "Phone" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mt-1", children: "+91 98300 12345" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "text-gold shrink-0 mt-1" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-charcoal", children: "Email" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mt-1", children: "hello@nrityaacademy.in" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: "https://wa.me/919830012345",
                target: "_blank",
                rel: "noreferrer",
                className: "inline-flex sm:inline-flex w-full sm:w-auto justify-center items-center gap-2 rounded-md bg-burgundy text-cream px-5 py-3 font-semibold hover:bg-burgundy/90 transition",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { size: 18 }),
                  " WhatsApp Us"
                ]
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.form,
        {
          onSubmit: submit,
          initial: { opacity: 0, x: 20 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          transition: { duration: 0.6 },
          className: "bg-card border border-border rounded-xl p-7 space-y-4",
          children: [
            error && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 text-xs bg-red-50 text-red-600 rounded-md border border-red-200 font-medium", children: error }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Field,
              {
                label: "Name",
                value: form.name,
                onChange: (v) => setForm({ ...form, name: v }),
                disabled: isSubmitting
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Field,
              {
                label: "Email",
                type: "email",
                value: form.email,
                onChange: (v) => setForm({ ...form, email: v }),
                disabled: isSubmitting
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Field,
              {
                label: "Phone",
                value: form.phone,
                onChange: (v) => setForm({ ...form, phone: v }),
                disabled: isSubmitting
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs uppercase tracking-wider text-charcoal/70 mb-1", children: "Message" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "textarea",
                {
                  required: true,
                  rows: 4,
                  value: form.message,
                  disabled: isSubmitting,
                  onChange: (e) => setForm({ ...form, message: e.target.value }),
                  className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gold disabled:opacity-50"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "submit",
                disabled: isSubmitting,
                className: "w-full rounded-md bg-burgundy text-cream py-3 font-semibold hover:bg-burgundy/90 transition disabled:opacity-50 flex items-center justify-center gap-2",
                children: isSubmitting ? "Sending..." : "Send Enquiry"
              }
            ),
            sent && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-burgundy text-center", children: "Thank you — we'll reply within 24 hours." })
          ]
        }
      )
    ] })
  ] }) });
}
function Field({
  label,
  value,
  onChange,
  type = "text",
  disabled = false
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs uppercase tracking-wider text-charcoal/70 mb-1", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        required: true,
        type,
        value,
        disabled,
        onChange: (e) => onChange(e.target.value),
        className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gold disabled:opacity-50"
      }
    )
  ] });
}
const teasers = [{
  to: "/classes",
  eyebrow: "Curriculum",
  title: "Our Classes",
  devanagari: "শিক্ষা",
  body: "Five batches across all ages — Kathak foundations, semi-classical, and stage repertoire.",
  cta: "Explore Classes",
  bg: "bg-burgundy",
  tint: "text-cream"
}, {
  to: "/workshops",
  eyebrow: "This Season",
  title: "Upcoming Workshops",
  devanagari: "অভ্যাস",
  body: "Abhinaya, taal, and choreography intensives — online and in our Kolkata studio.",
  cta: "View Workshops",
  bg: "bg-gold",
  tint: "text-charcoal"
}];
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-cream text-charcoal", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-16 sm:py-24 px-4 sm:px-5 lg:px-10 bg-cream", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto text-center mb-12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold uppercase tracking-[0.3em] text-xs", children: "What We Offer" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl sm:text-4xl md:text-5xl text-burgundy mt-3", children: "A Practice for Every Dancer" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Ornament, { className: "mt-5" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-6xl mx-auto grid md:grid-cols-2 gap-6", children: teasers.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          y: 30
        }, whileInView: {
          opacity: 1,
          y: 0
        }, viewport: {
          once: true
        }, transition: {
          delay: i * 0.1,
          duration: 0.6
        }, className: `relative ${t.bg} ${t.tint} rounded-xl p-6 sm:p-10 overflow-hidden border border-gold/30`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-4 right-5 text-3xl sm:text-5xl opacity-25", style: {
            fontFamily: '"Tiro Bangla", serif'
          }, children: t.devanagari }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-[0.3em] opacity-80", children: t.eyebrow }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl sm:text-3xl md:text-4xl mt-2", children: t.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 opacity-85 max-w-md", children: t.body }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: t.to, className: `mt-6 inline-flex items-center gap-2 font-semibold border-b ${t.tint === "text-cream" ? "border-gold text-gold" : "border-burgundy text-burgundy"} pb-0.5 hover:gap-3 transition-all`, children: [
            t.cta,
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16 })
          ] })
        ] }, t.to)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Gallery, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(About, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Contact, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  Index as component
};
