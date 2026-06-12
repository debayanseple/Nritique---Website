import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { N as Navbar, M as Mandala, O as Ornament, F as Footer, s as submitRegistration } from "./Footer-DhjGh7jU.mjs";
import { M as Modal } from "./Modal-Y_8gPQXx.mjs";
import "../_libs/seroval.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
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
import "./server-BhPU6tED.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "../_libs/lucide-react.mjs";
import "../_libs/zod.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const empty = {
  student: "",
  age: "",
  parent: "",
  email: "",
  phone: "",
  level: "Beginner",
  startDate: ""
};
function ClassRegisterModal({ batch, onClose }) {
  const [form, setForm] = reactExports.useState(empty);
  const [success, setSuccess] = reactExports.useState(false);
  const [isSubmitting, setIsSubmitting] = reactExports.useState(false);
  const [error, setError] = reactExports.useState(null);
  reactExports.useEffect(() => {
    if (batch) {
      setForm(empty);
      setSuccess(false);
      setError(null);
      setIsSubmitting(false);
    }
  }, [batch]);
  const isMinor = Number(form.age) > 0 && Number(form.age) < 18;
  const submit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    try {
      const res = await submitRegistration({
        data: {
          type: "class",
          student: form.student,
          age: form.age,
          parent: isMinor ? form.parent : void 0,
          email: form.email,
          phone: form.phone,
          level: form.level,
          startDate: form.startDate,
          batchName: batch?.name ?? ""
        }
      });
      if (res.success) {
        setSuccess(true);
        setTimeout(onClose, 2e3);
      } else {
        setError(res.error || "Failed to submit registration. Please try again.");
      }
    } catch (err) {
      console.error("Registration error:", err);
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Modal, { open: !!batch, onClose, title: batch ? `Register · ${batch.name}` : "", children: success ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto w-14 h-14 rounded-full bg-gold/20 flex items-center justify-center text-2xl", children: "✓" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 font-display text-xl text-burgundy", children: "We'll contact you within 24 hours!" })
  ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: submit, className: "space-y-3", children: [
    error && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 text-xs bg-red-50 text-red-600 rounded-md border border-red-200 font-medium", children: error }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Input,
      {
        label: "Student Name",
        value: form.student,
        onChange: (v) => setForm({ ...form, student: v }),
        disabled: isSubmitting
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Input,
        {
          label: "Age",
          type: "number",
          value: form.age,
          onChange: (v) => setForm({ ...form, age: v }),
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
      )
    ] }),
    isMinor && /* @__PURE__ */ jsxRuntimeExports.jsx(
      Input,
      {
        label: "Parent Name",
        value: form.parent,
        onChange: (v) => setForm({ ...form, parent: v }),
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
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Lbl, { children: "Batch" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          disabled: true,
          value: batch?.name ?? "",
          className: "w-full rounded-md border border-input bg-muted px-3 py-2 text-sm opacity-70"
        }
      )
    ] }),
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
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Input,
      {
        label: "Preferred Start Date",
        type: "date",
        value: form.startDate,
        onChange: (v) => setForm({ ...form, startDate: v }),
        disabled: isSubmitting
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "submit",
        disabled: isSubmitting,
        className: "w-full mt-2 rounded-md bg-burgundy text-cream py-3 font-semibold hover:bg-burgundy/90 transition disabled:opacity-50 flex items-center justify-center gap-2",
        children: isSubmitting ? "Submitting..." : "Submit Registration"
      }
    )
  ] }) });
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
const batches = [
  {
    id: "little-stars",
    name: "Little Stars",
    ageGroup: "Ages 4–7",
    description: "Introductory movement, rhythm games, basic mudras and stage confidence in a playful environment.",
    schedule: "Sat & Sun · 10:00 – 11:00 AM",
    color: "#C9A84C"
  },
  {
    id: "junior",
    name: "Junior Batch",
    ageGroup: "Ages 8–12",
    description: "Kathak foundations — taal, tukde, basic compositions and posture discipline.",
    schedule: "Mon, Wed, Fri · 5:00 – 6:30 PM",
    color: "#6B1E2A"
  },
  {
    id: "teen",
    name: "Teen Batch",
    ageGroup: "Ages 13–17",
    description: "Kathak plus semi-classical, chakkar training, abhinaya and stage repertoire.",
    schedule: "Tue & Thu · 6:00 – 7:30 PM",
    color: "#1C1C1E"
  },
  {
    id: "adult",
    name: "Adult Batch",
    ageGroup: "Ages 18+",
    description: "Both styles at a self-paced rhythm, technique refinement and stage prep.",
    schedule: "Sat · 7:00 – 8:30 PM",
    color: "#8B5A2B"
  },
  {
    id: "semi",
    name: "Semi-Classical Courses",
    ageGroup: "All Ages",
    description: "Short-format Odissi-influenced choreography and seasonal thematic pieces.",
    schedule: "8-week cohorts · See website",
    color: "#C9A84C"
  }
];
const fade = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.6 } })
};
function Classes() {
  const [selected, setSelected] = reactExports.useState(null);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "classes", className: "py-16 sm:py-24 px-4 sm:px-5 lg:px-10 bg-cream", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.6 },
          className: "text-center mb-16",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold uppercase tracking-[0.3em] text-xs", children: "Curriculum" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl sm:text-4xl md:text-5xl text-burgundy mt-3", children: "Our Classes" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Ornament, { className: "mt-5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-5 max-w-xl mx-auto", children: "Five thoughtfully designed batches that nurture every dancer — from first steps to seasoned stage." })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 gap-6", children: batches.map((b, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.article,
        {
          variants: fade,
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: true },
          custom: i,
          className: "group rounded-xl bg-card border border-border p-7 hover:shadow-lg transition-shadow flex flex-col",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "inline-block rounded-full px-3 py-1 text-xs font-semibold text-cream",
                  style: { backgroundColor: b.color },
                  children: b.ageGroup
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px flex-1 ml-4 bg-border" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl text-charcoal", children: b.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-2 text-sm leading-relaxed flex-1", children: b.description }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-xs text-burgundy uppercase tracking-wider", children: b.schedule }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => setSelected(b),
                className: "mt-6 self-start rounded-md bg-burgundy text-cream px-5 py-2 text-sm font-semibold hover:bg-burgundy/90 transition",
                children: "Register"
              }
            )
          ]
        },
        b.id
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ClassRegisterModal, { batch: selected, onClose: () => setSelected(null) })
  ] });
}
function ClassesPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-cream text-charcoal min-h-screen flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "flex-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "relative pt-24 sm:pt-32 pb-10 sm:pb-12 px-4 sm:px-5 lg:px-10 bg-burgundy text-cream overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Mandala, { className: "absolute -top-20 -right-16 text-gold/20 max-w-[240px] sm:max-w-none", size: 420 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Mandala, { className: "absolute -bottom-32 -left-20 text-gold/10 max-w-[280px] sm:max-w-none", size: 500 }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-4xl mx-auto text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-gold text-xl sm:text-2xl mb-3", style: {
            fontFamily: '"Tiro Bangla", serif'
          }, children: "শিক্ষা · অভ্যাস · অনুভূতি" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold uppercase tracking-[0.4em] text-xs", children: "Curriculum" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl sm:text-4xl md:text-6xl mt-3", children: "Our Classes" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Ornament, { className: "mt-6" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-cream/85 max-w-2xl mx-auto", children: "Five thoughtfully designed batches that nurture every dancer — from first ankle-bells to seasoned stage. The guru-shishya parampara, kept alive with patience and play." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Classes, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  ClassesPage as component
};
