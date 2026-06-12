import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { A as AnimatePresence, m as motion } from "../_libs/framer-motion.mjs";
import { X } from "../_libs/lucide-react.mjs";
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
      className: "fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-charcoal/70 backdrop-blur-sm sm:p-4",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 40 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: 40 },
          transition: { type: "spring", damping: 28, stiffness: 300 },
          onClick: (e) => e.stopPropagation(),
          className: "relative w-full sm:max-w-lg max-h-[95vh] sm:max-h-[90vh] overflow-y-auto rounded-t-2xl sm:rounded-xl bg-card shadow-2xl",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sm:hidden flex justify-center pt-2 pb-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-1 rounded-full bg-charcoal/20" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between border-b border-border px-4 sm:px-6 py-3 sm:py-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg sm:text-xl text-burgundy", children: title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: onClose,
                  "aria-label": "Close",
                  className: "min-w-[44px] min-h-[44px] flex items-center justify-center text-muted-foreground hover:text-foreground -mr-2",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 22 })
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 sm:p-6", children })
          ]
        }
      )
    }
  ) });
}
export {
  Modal as M
};
