import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { N as Navbar, M as Mandala, O as Ornament, F as Footer, s as submitRegistration } from "./Footer-DvB6QNmc.mjs";
import { u as useQueryClient, a as useQuery } from "../_libs/tanstack__react-query.mjs";
import { M as Modal } from "./Modal-Y_8gPQXx.mjs";
import "../_libs/seroval.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { M as MapPin, U as Users } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__react-router.mjs";
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
import "./server-BrLu54HF.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "../_libs/zod.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const empty = { name: "", email: "", phone: "", level: "Beginner" };
function WorkshopRegisterModal({ workshop, onClose, onReserve }) {
  const [form, setForm] = reactExports.useState(empty);
  const [toast, setToast] = reactExports.useState(false);
  const [isSubmitting, setIsSubmitting] = reactExports.useState(false);
  const [error, setError] = reactExports.useState(null);
  reactExports.useEffect(() => {
    if (workshop) {
      setForm(empty);
      setToast(false);
      setError(null);
      setIsSubmitting(false);
    }
  }, [workshop]);
  const submit = async (e) => {
    e.preventDefault();
    if (!workshop) return;
    setIsSubmitting(true);
    setError(null);
    try {
      const res = await submitRegistration({
        data: {
          type: "workshop",
          name: form.name,
          email: form.email,
          phone: form.phone,
          level: form.level,
          workshopTitle: workshop.title,
          fee: workshop.fee,
          format: workshop.mode
        }
      });
      if (res.success) {
        onReserve(workshop.id);
        setToast(true);
        setTimeout(onClose, 2e3);
      } else {
        setError(res.error || "Failed to reserve spot. Please try again.");
      }
    } catch (err) {
      console.error("Workshop reservation error:", err);
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Modal,
    {
      open: !!workshop,
      onClose,
      title: workshop ? `Reserve · ${workshop.title}` : "",
      children: toast ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto w-14 h-14 rounded-full bg-gold/20 flex items-center justify-center text-2xl", children: "✓" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 font-display text-xl text-burgundy", children: "Spot reserved!" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Check your email for confirmation details." })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: submit, className: "space-y-3", children: [
        error && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 text-xs bg-red-50 text-red-600 rounded-md border border-red-200 font-medium", children: error }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md bg-muted px-4 py-3 flex items-center justify-between text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-charcoal/70", children: "Seats remaining" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-xl text-burgundy", children: workshop?.seatsLeft })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            label: "Name",
            value: form.name,
            onChange: (v) => setForm({ ...form, name: v }),
            disabled: isSubmitting
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            label: "Email",
            type: "email",
            value: form.email,
            onChange: (v) => setForm({ ...form, email: v }),
            disabled: isSubmitting
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            label: "Phone",
            value: form.phone,
            onChange: (v) => setForm({ ...form, phone: v }),
            disabled: isSubmitting
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Lbl, { children: "Experience Level" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "select",
            {
              value: form.level,
              disabled: isSubmitting,
              onChange: (e) => setForm({ ...form, level: e.target.value }),
              className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gold disabled:opacity-50",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Beginner" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Intermediate" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Advanced" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Lbl, { children: "Workshop" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              disabled: true,
              value: workshop?.title ?? "",
              className: "w-full rounded-md border border-input bg-muted px-3 py-2 text-sm opacity-70"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "submit",
            disabled: isSubmitting,
            className: "w-full mt-2 rounded-md bg-burgundy text-cream py-3 font-semibold hover:bg-burgundy/90 transition disabled:opacity-50 flex items-center justify-center gap-2",
            children: isSubmitting ? "Submitting..." : "Reserve My Spot"
          }
        )
      ] })
    }
  );
}
function Lbl({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs uppercase tracking-wider text-charcoal/70 mb-1", children });
}
function Input({
  label,
  value,
  onChange,
  type = "text",
  disabled = false
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Lbl, { children: label }),
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
const SHEET_ID = "1M4XNi6tMzFiYHyp4j5Dw56DAmLEEIFMPA-s-SJzwelA";
const REGISTRATION_SHEET_ID = "1r6Zwhf1hBpF2qD25r2SC-vGs58mhZh1ZewjIpaXVSDI";
const CSV_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:csv`;
const WORKSHOP_REG_CSV_URL = `https://docs.google.com/spreadsheets/d/${REGISTRATION_SHEET_ID}/gviz/tq?tqx=out:csv&sheet=Workshops`;
function col(row, key) {
  const found = Object.keys(row).find((k) => k.trim().toLowerCase() === key.toLowerCase());
  return found !== void 0 ? row[found].trim() : "";
}
function toDirectUrl(url) {
  const byPath = url.match(/\/file\/d\/([^/?]+)/);
  if (byPath) return `https://drive.google.com/thumbnail?id=${byPath[1]}&sz=w800`;
  const byParam = url.match(/[?&]id=([^&]+)/);
  if (byParam) return `https://drive.google.com/thumbnail?id=${byParam[1]}&sz=w800`;
  return url;
}
function parseCSV(text) {
  const lines = [];
  let cur = "", inQ = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (c === '"') {
      inQ = !inQ;
    } else if (c === "\n" && !inQ) {
      lines.push(cur);
      cur = "";
      continue;
    }
    cur += c;
  }
  if (cur.trim()) lines.push(cur);
  if (lines.length < 2) return [];
  const splitRow = (line) => {
    const vals = [];
    let v = "", q = false;
    for (let i = 0; i < line.length; i++) {
      const c = line[i];
      if (c === '"') {
        q = !q;
      } else if (c === "," && !q) {
        vals.push(v.replace(/^"|"$/g, "").trim());
        v = "";
        continue;
      } else {
        v += c;
      }
    }
    vals.push(v.replace(/^"|"$/g, "").trim());
    return vals;
  };
  const headers = splitRow(lines[0]);
  return lines.slice(1).filter((l) => l.trim()).map((line) => {
    const vals = splitRow(line);
    const result = {};
    headers.forEach((h, i) => {
      const key = h.trim();
      if (!(key in result)) result[key] = vals[i] ?? "";
    });
    return result;
  });
}
async function fetchWorkshopRegistrationCounts() {
  try {
    const res = await fetch(WORKSHOP_REG_CSV_URL);
    if (!res.ok) return /* @__PURE__ */ new Map();
    const rows = parseCSV(await res.text());
    const counts = /* @__PURE__ */ new Map();
    for (const row of rows) {
      const title = col(row, "Workshop Title").toLowerCase().trim();
      if (title) counts.set(title, (counts.get(title) ?? 0) + 1);
    }
    return counts;
  } catch {
    return /* @__PURE__ */ new Map();
  }
}
async function fetchLiveWorkshops() {
  const [workshopsRes, regCounts] = await Promise.all([
    fetch(CSV_URL),
    fetchWorkshopRegistrationCounts()
  ]);
  if (!workshopsRes.ok) throw new Error(`Sheet fetch failed: ${workshopsRes.status}`);
  const rows = parseCSV(await workshopsRes.text());
  return rows.filter((r) => {
    const s = col(r, "Status?").toLowerCase();
    return s === "live" || s === "upcoming";
  }).map((r, i) => {
    const imageRaw = col(r, "Cover Photo");
    const regLink = col(r, "Registration link");
    const statusRaw = col(r, "Status?").toLowerCase();
    const title = col(r, "Workshop title");
    const totalSeats = parseInt(col(r, "Seats left").replace(/[^\d]/g, "") || "0", 10);
    const registered = regCounts.get(title.toLowerCase().trim()) ?? 0;
    return {
      id: `ws-${i}`,
      title,
      category: col(r, "Category"),
      mode: col(r, "Mode").toLowerCase() === "online" ? "Online" : "Offline",
      location: col(r, "Location"),
      seatsLeft: Math.max(0, totalSeats - registered),
      fee: parseInt(col(r, "Price (INR)").replace(/[^\d]/g, "") || "0", 10),
      poster: imageRaw ? toDirectUrl(imageRaw) : void 0,
      registrationLink: regLink || void 0,
      status: statusRaw === "live" ? "live" : "upcoming"
    };
  });
}
const tabs = ["All", "Online", "Offline"];
function Workshops() {
  const queryClient = useQueryClient();
  const {
    data: workshops = [],
    isLoading,
    isError
  } = useQuery({
    queryKey: ["workshops"],
    queryFn: () => fetchLiveWorkshops(),
    staleTime: 60 * 1e3,
    refetchInterval: 60 * 1e3
  });
  const [tab, setTab] = reactExports.useState("All");
  const [selected, setSelected] = reactExports.useState(null);
  const filtered = reactExports.useMemo(() => {
    if (tab === "All") return workshops;
    return workshops.filter((w) => w.mode === tab);
  }, [tab, workshops]);
  const reserve = (id) => {
    queryClient.setQueryData(
      ["workshops"],
      (prev = []) => prev.map((w) => w.id === id && w.seatsLeft > 0 ? { ...w, seatsLeft: w.seatsLeft - 1 } : w)
    );
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "workshops", className: "py-16 sm:py-24 px-4 sm:px-5 lg:px-10 bg-muted/40", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.6 },
          className: "text-center mb-12",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold uppercase tracking-[0.3em] text-xs", children: "This Season" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl sm:text-4xl md:text-5xl text-burgundy mt-3", children: "Upcoming Workshops" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Ornament, { className: "mt-5" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap justify-center gap-2 mb-10", children: tabs.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => setTab(t),
          className: `rounded-full px-5 py-2 text-sm font-medium transition ${tab === t ? "bg-burgundy text-cream" : "bg-card text-charcoal hover:bg-cream"}`,
          children: t
        },
        t
      )) }),
      isLoading && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 border-2 border-gold border-t-transparent rounded-full animate-spin" }) }),
      isError && !isLoading && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center py-16 text-charcoal/50", children: "Could not load workshops. Please try again later." }),
      !isLoading && !isError && filtered.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center py-16 text-charcoal/50", children: "No workshops available at the moment. Check back soon." }),
      !isLoading && filtered.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-6", children: filtered.map((w, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.article,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: i * 0.08, duration: 0.6 },
          className: "rounded-xl bg-card border border-border overflow-hidden flex flex-col",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "aspect-[4/3] overflow-hidden bg-burgundy/20 relative", children: [
              w.poster ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: w.poster,
                  alt: `${w.title} poster`,
                  className: `w-full h-full object-cover ${w.status === "upcoming" ? "opacity-50" : ""}`,
                  onError: (e) => {
                    e.currentTarget.style.display = "none";
                    e.currentTarget.nextElementSibling?.classList.remove("hidden");
                  }
                }
              ) : null,
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-full h-full flex items-center justify-center ${w.poster ? "hidden" : ""}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-burgundy/40 text-sm uppercase tracking-[0.3em]", children: "Poster" }) }),
              w.status === "upcoming" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center justify-center bg-charcoal/30", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-gold text-charcoal text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full", children: "Coming Soon" }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 flex flex-col flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-wider text-burgundy font-semibold", children: w.category }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: `text-xs rounded-full px-2 py-0.5 ${w.mode === "Online" ? "bg-gold/20 text-charcoal" : "bg-burgundy/10 text-burgundy"}`,
                    children: w.mode
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl text-charcoal", children: w.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 space-y-1 text-sm text-muted-foreground", children: [
                w.location && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 14 }),
                  " ",
                  w.location
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { size: 14 }),
                  " ",
                  w.seatsLeft,
                  " seats left"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-2xl text-burgundy", children: w.fee > 0 ? `₹${w.fee}` : "Free" }),
                w.status === "upcoming" ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-md bg-charcoal/10 text-charcoal/50 px-4 py-2 text-sm font-semibold", children: "Coming Soon" }) : w.registrationLink ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "a",
                  {
                    href: w.registrationLink,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: `rounded-md bg-burgundy text-cream px-4 py-2 text-sm font-semibold hover:bg-burgundy/90 transition ${w.seatsLeft === 0 ? "pointer-events-none opacity-50" : ""}`,
                    children: w.seatsLeft === 0 ? "Sold Out" : "Register"
                  }
                ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    disabled: w.seatsLeft === 0,
                    onClick: () => setSelected(w),
                    className: "rounded-md bg-burgundy text-cream px-4 py-2 text-sm font-semibold hover:bg-burgundy/90 transition disabled:opacity-50",
                    children: w.seatsLeft === 0 ? "Sold Out" : "Register"
                  }
                )
              ] })
            ] })
          ]
        },
        w.id
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mt-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "#",
          className: "text-burgundy underline-offset-4 hover:underline text-sm font-medium",
          children: "View Past Workshops →"
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      WorkshopRegisterModal,
      {
        workshop: selected,
        onClose: () => setSelected(null),
        onReserve: reserve
      }
    )
  ] });
}
function WorkshopsPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-cream text-charcoal min-h-screen flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "flex-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "relative pt-24 sm:pt-32 pb-10 sm:pb-12 px-4 sm:px-5 lg:px-10 bg-charcoal text-cream overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Mandala, { className: "absolute -top-24 -left-20 text-gold/15 max-w-[260px] sm:max-w-none", size: 460 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Mandala, { className: "absolute -bottom-28 -right-16 text-gold/10 max-w-[280px] sm:max-w-none", size: 520 }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-4xl mx-auto text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-gold text-xl sm:text-2xl mb-3", style: {
            fontFamily: '"Tiro Bangla", serif'
          }, children: "তাল · লয় · ভাব" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold uppercase tracking-[0.4em] text-xs", children: "This Season" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl sm:text-4xl md:text-6xl mt-3", children: "Workshops" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Ornament, { className: "mt-6" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-cream/80 max-w-2xl mx-auto", children: "Short, immersive cohorts — taal, abhinaya, and choreography intensives — held in our Kolkata studio and online for dancers everywhere." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Workshops, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  WorkshopsPage as component
};
