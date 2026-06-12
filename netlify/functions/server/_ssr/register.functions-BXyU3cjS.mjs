import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { b as createServerFn, T as TSS_SERVER_FUNCTION, g as getServerFnById } from "./server-6s0Q7v3u.mjs";
import { A as AnimatePresence, m as motion } from "../_libs/framer-motion.mjs";
import { X } from "../_libs/lucide-react.mjs";
import { d as discriminatedUnionType, o as objectType, s as stringType, l as literalType, n as numberType } from "../_libs/zod.mjs";
function Modal({ open, onClose, title, children }) {
  reactExports.useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      onClick: onClose,
      className: "fixed inset-0 z-50 flex items-center justify-center bg-charcoal/70 backdrop-blur-sm p-4",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20, scale: 0.97 },
          animate: { opacity: 1, y: 0, scale: 1 },
          exit: { opacity: 0, y: 20, scale: 0.97 },
          onClick: (e) => e.stopPropagation(),
          className: "relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-xl bg-card shadow-2xl",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between border-b border-border px-6 py-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl text-burgundy", children: title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: onClose,
                  "aria-label": "Close",
                  className: "text-muted-foreground hover:text-foreground",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 20 })
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-6", children })
          ]
        }
      )
    }
  ) });
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
})]);
const submitRegistration = createServerFn({
  method: "POST"
}).validator(registerSchema).handler(createSsrRpc("9e58baf11c8faa90393eacafd0c351424b17bf15083f49b1a489e8b5e2d5e371"));
export {
  Modal as M,
  submitRegistration as s
};
