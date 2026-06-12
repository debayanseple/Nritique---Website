import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useRouterState, e as useNavigate, L as Link } from "../_libs/tanstack__react-router.mjs";
import { b as createServerFn, T as TSS_SERVER_FUNCTION, g as getServerFnById } from "./server-DZmASGXn.mjs";
import { X, d as Menu, I as Instagram, Y as Youtube, c as MessageCircle } from "../_libs/lucide-react.mjs";
import { d as discriminatedUnionType, o as objectType, s as stringType, l as literalType, n as numberType } from "../_libs/zod.mjs";
const items = [
  { label: "Classes", to: "/classes" },
  { label: "Workshops", to: "/workshops" },
  { label: "Gallery", hash: "gallery" },
  { label: "About", hash: "about" },
  { label: "Contact", hash: "contact" }
];
function Navbar() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [open, setOpen] = reactExports.useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const navigate = useNavigate();
  const isHome = pathname === "/";
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const goHash = (hash) => {
    setOpen(false);
    if (isHome) {
      document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate({ to: "/", hash });
    }
  };
  const transparent = isHome && !scrolled;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "header",
    {
      className: `fixed top-0 inset-x-0 z-40 transition-all ${transparent ? "bg-transparent" : "bg-cream/85 backdrop-blur-md border-b border-gold/20"}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "max-w-7xl mx-auto px-5 lg:px-10 h-16 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/",
              className: `font-display text-xl tracking-wide flex items-baseline gap-1.5 ${transparent ? "text-cream" : "text-burgundy"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontFamily: '"Tiro Bangla", serif' }, className: "text-gold text-base", children: "নৃত্য" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  "Nritya",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold", children: "." })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "hidden md:flex items-center gap-7", children: items.map((l) => {
            const base = transparent ? "text-cream/85 hover:text-gold" : "text-charcoal/75 hover:text-burgundy";
            return /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: l.to ? /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: l.to,
                className: `text-sm font-medium tracking-wide transition-colors ${base}`,
                activeProps: { className: "text-gold" },
                children: l.label
              }
            ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => goHash(l.hash),
                className: `text-sm font-medium tracking-wide transition-colors ${base}`,
                children: l.label
              }
            ) }, l.label);
          }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/workshops",
                className: "hidden sm:inline-flex items-center rounded-md bg-gold px-4 py-2 text-sm font-semibold text-charcoal hover:bg-gold/90 transition border border-gold/60",
                children: "Register Now"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                className: `md:hidden ${transparent ? "text-cream" : "text-burgundy"}`,
                onClick: () => setOpen(!open),
                "aria-label": "Menu",
                children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, {})
              }
            )
          ] })
        ] }),
        open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:hidden bg-cream border-t border-gold/20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "px-5 py-4 space-y-3", children: [
          items.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: l.to ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: l.to,
              onClick: () => setOpen(false),
              className: "block w-full text-left py-1 text-charcoal",
              children: l.label
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => goHash(l.hash),
              className: "block w-full text-left py-1 text-charcoal",
              children: l.label
            }
          ) }, l.label)),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/classes",
              onClick: () => setOpen(false),
              className: "block w-full rounded-md bg-gold px-4 py-2 text-sm font-semibold text-charcoal text-center",
              children: "Register Now"
            }
          ) })
        ] }) })
      ]
    }
  );
}
var createSsrRpc = (functionId) => {
  const url = "/_serverFn/" + functionId;
  const serverFnMeta = { id: functionId };
  const fn = async (...args) => {
    return (await getServerFnById(functionId))(...args);
  };
  return Object.assign(fn, {
    url,
    serverFnMeta,
    [TSS_SERVER_FUNCTION]: true
  });
};
const registerSchema = discriminatedUnionType("type", [objectType({
  type: literalType("class"),
  student: stringType().min(1, "Student name is required"),
  age: stringType().min(1, "Age is required"),
  parent: stringType().optional(),
  email: stringType().email("Invalid email address"),
  phone: stringType().min(1, "Phone number is required"),
  level: stringType().min(1, "Experience level is required"),
  startDate: stringType().min(1, "Start date is required"),
  batchName: stringType().min(1, "Batch name is required")
}), objectType({
  type: literalType("workshop"),
  name: stringType().min(1, "Name is required"),
  email: stringType().email("Invalid email address"),
  phone: stringType().min(1, "Phone number is required"),
  level: stringType().min(1, "Experience level is required"),
  workshopTitle: stringType().min(1, "Workshop title is required"),
  fee: numberType().optional(),
  date: stringType().optional(),
  format: stringType().optional()
}), objectType({
  type: literalType("enquiry"),
  name: stringType().min(1, "Name is required"),
  email: stringType().email("Invalid email address"),
  phone: stringType().min(1, "Phone number is required"),
  message: stringType().min(1, "Message is required")
})]);
const submitRegistration = createServerFn({
  method: "POST"
}).validator(registerSchema).handler(createSsrRpc("9e58baf11c8faa90393eacafd0c351424b17bf15083f49b1a489e8b5e2d5e371"));
function Ornament({ className = "", color = "currentColor" }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex items-center justify-center gap-4 text-gold ${className}`, "aria-hidden": true, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-16 sm:w-24 bg-current opacity-40" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: "56", height: "20", viewBox: "0 0 56 20", fill: "none", stroke: color, strokeWidth: "1.2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M2 10 Q 10 2, 18 10 T 34 10 T 50 10", strokeLinecap: "round" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "28", cy: "10", r: "2.5", fill: color, stroke: "none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "6", cy: "10", r: "1", fill: color, stroke: "none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "50", cy: "10", r: "1", fill: color, stroke: "none" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-16 sm:w-24 bg-current opacity-40" })
  ] });
}
function Mandala({ className = "", size = 320 }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "svg",
    {
      className,
      width: size,
      height: size,
      viewBox: "0 0 200 200",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "0.6",
      "aria-hidden": true,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { transform: "translate(100 100)", children: [
        Array.from({ length: 16 }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { transform: `rotate(${i * 22.5})`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0 -80 Q 8 -50, 0 -20 Q -8 -50, 0 -80 Z" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "0", cy: "-60", r: "2" })
        ] }, i)),
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { r: "40" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { r: "28" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { r: "14" }),
        Array.from({ length: 8 }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("g", { transform: `rotate(${i * 45})`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0 -14 Q 6 -7, 0 0 Q -6 -7, 0 -14 Z" }) }, i))
      ] })
    }
  );
}
const exploreLinks = [
  { label: "Workshops", to: "/workshops" },
  { label: "Gallery", to: "/", hash: "gallery" },
  { label: "About", to: "/", hash: "about" }
];
const batches = [
  { label: "Little Stars", age: "4–7" },
  { label: "Junior", age: "8–12" },
  { label: "Teen", age: "13–17" },
  { label: "Adult", age: "18+" }
];
function Footer() {
  const [email, setEmail] = reactExports.useState("");
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "bg-[#5c1a1a] text-[#e8d5b0]/80", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-6 lg:px-10 pt-14 pb-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-display text-[#e8d5b0] text-xl tracking-widest flex items-center gap-2 mb-4", children: [
          "NUPUR ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#c9a84c]", children: "✦" }),
          " KATHAK"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm leading-relaxed", children: "A Kathak & semi-classical academy in Andheri West, Mumbai — teaching the Lucknow gharana with care since 2009." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 mt-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", "aria-label": "Instagram", className: "hover:text-[#c9a84c] transition", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { size: 18 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", "aria-label": "YouTube", className: "hover:text-[#c9a84c] transition", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Youtube, { size: 18 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", "aria-label": "WhatsApp", className: "hover:text-[#c9a84c] transition", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { size: 18 }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-[#e8d5b0] text-xs font-semibold uppercase tracking-widest mb-4", children: "Explore" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2 text-sm", children: exploreLinks.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: l.to, hash: l.hash, className: "hover:text-[#c9a84c] transition", children: l.label }) }, l.label)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-[#e8d5b0] text-xs font-semibold uppercase tracking-widest mb-4", children: "Batches" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2 text-sm", children: batches.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          b.label,
          " · ",
          b.age
        ] }, b.label)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-[#e8d5b0] text-xs font-semibold uppercase tracking-widest mb-4", children: "Stay in the Loop" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm mb-4", children: "Workshop dates & recital news, once a month. No spam." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "email",
              placeholder: "Your email",
              value: email,
              onChange: (e) => setEmail(e.target.value),
              className: "flex-1 min-w-0 bg-transparent border border-[#e8d5b0]/30 rounded px-3 py-2 text-sm text-[#e8d5b0] placeholder-[#e8d5b0]/40 focus:outline-none focus:border-[#c9a84c]"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              className: "bg-[#c9a84c] text-[#5c1a1a] text-sm font-semibold px-4 py-2 rounded hover:bg-[#d4b86a] transition whitespace-nowrap",
              children: "Join"
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 pt-6 border-t border-[#e8d5b0]/15 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-[#e8d5b0]/50", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Nupur Kathak Academy. All rights reserved."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Andheri West, Mumbai · hello@nupurkathak.in" })
    ] })
  ] }) });
}
export {
  Footer as F,
  Mandala as M,
  Navbar as N,
  Ornament as O,
  submitRegistration as s
};
