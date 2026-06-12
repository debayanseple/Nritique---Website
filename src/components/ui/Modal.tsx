import { useEffect, type ReactNode } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
}

export function Modal({ open, onClose, title, children }: ModalProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-charcoal/70 backdrop-blur-sm sm:p-4"
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ type: "spring", damping: 28, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full sm:max-w-lg max-h-[95vh] sm:max-h-[90vh] overflow-y-auto rounded-t-2xl sm:rounded-xl bg-card shadow-2xl"
          >
            {/* Drag indicator for mobile (mimics bottom sheet) */}
            <div className="sm:hidden flex justify-center pt-2 pb-0">
              <div className="w-10 h-1 rounded-full bg-charcoal/20" />
            </div>
            <div className="flex items-start justify-between border-b border-border px-4 sm:px-6 py-3 sm:py-4">
              <h3 className="text-lg sm:text-xl text-burgundy">{title}</h3>
              <button
                onClick={onClose}
                aria-label="Close"
                className="min-w-[44px] min-h-[44px] flex items-center justify-center text-muted-foreground hover:text-foreground -mr-2"
              >
                <X size={22} />
              </button>
            </div>
            <div className="p-4 sm:p-6">{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
