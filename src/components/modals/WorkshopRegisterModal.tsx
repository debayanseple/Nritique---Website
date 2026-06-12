import { useState, useEffect, type FormEvent } from "react";
import { Modal } from "../ui/Modal";
import type { Workshop } from "../Workshops";

interface Props {
  workshop: Workshop | null;
  onClose: () => void;
  onReserve: (id: string) => void;
}

const empty = { name: "", email: "", phone: "", level: "Beginner" };

export function WorkshopRegisterModal({ workshop, onClose, onReserve }: Props) {
  const [form, setForm] = useState(empty);
  const [toast, setToast] = useState(false);

  useEffect(() => {
    if (workshop) { setForm(empty); setToast(false); }
  }, [workshop]);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!workshop) return;
    onReserve(workshop.id);
    setToast(true);
    setTimeout(onClose, 2000);
  };

  return (
    <Modal open={!!workshop} onClose={onClose} title={workshop ? `Reserve · ${workshop.title}` : ""}>
      {toast ? (
        <div className="text-center py-8">
          <div className="mx-auto w-14 h-14 rounded-full bg-gold/20 flex items-center justify-center text-2xl">✓</div>
          <p className="mt-4 font-display text-xl text-burgundy">Spot reserved!</p>
          <p className="text-sm text-muted-foreground mt-1">Check your email for confirmation details.</p>
        </div>
      ) : (
        <form onSubmit={submit} className="space-y-3">
          <div className="rounded-md bg-muted px-4 py-3 flex items-center justify-between text-sm">
            <span className="text-charcoal/70">Seats remaining</span>
            <span className="font-display text-xl text-burgundy">{workshop?.seatsLeft}</span>
          </div>
          <Input label="Name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} />
          <Input label="Email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} />
          <Input label="Phone" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} />
          <div>
            <Lbl>Experience Level</Lbl>
            <select
              value={form.level}
              onChange={(e) => setForm({ ...form, level: e.target.value })}
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gold"
            >
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>
          </div>
          <div>
            <Lbl>Workshop</Lbl>
            <input disabled value={workshop?.title ?? ""} className="w-full rounded-md border border-input bg-muted px-3 py-2 text-sm" />
          </div>
          <button type="submit" className="w-full mt-2 rounded-md bg-burgundy text-cream py-3 font-semibold hover:bg-burgundy/90 transition">
            Reserve My Spot
          </button>
        </form>
      )}
    </Modal>
  );
}

function Lbl({ children }: { children: React.ReactNode }) {
  return <label className="block text-xs uppercase tracking-wider text-charcoal/70 mb-1">{children}</label>;
}
function Input({ label, value, onChange, type = "text" }: { label: string; value: string; onChange: (v: string) => void; type?: string }) {
  return (
    <div>
      <Lbl>{label}</Lbl>
      <input
        required
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gold"
      />
    </div>
  );
}
