import { useState, useEffect, type FormEvent } from "react";
import { Modal } from "../ui/Modal";
import type { Batch } from "../Classes";

interface Props {
  batch: Batch | null;
  onClose: () => void;
}

const empty = { student: "", age: "", parent: "", email: "", phone: "", level: "Beginner", startDate: "" };

export function ClassRegisterModal({ batch, onClose }: Props) {
  const [form, setForm] = useState(empty);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (batch) { setForm(empty); setSuccess(false); }
  }, [batch]);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(onClose, 2000);
  };

  const isMinor = Number(form.age) > 0 && Number(form.age) < 18;

  return (
    <Modal open={!!batch} onClose={onClose} title={batch ? `Register · ${batch.name}` : ""}>
      {success ? (
        <div className="text-center py-8">
          <div className="mx-auto w-14 h-14 rounded-full bg-gold/20 flex items-center justify-center text-2xl">✓</div>
          <p className="mt-4 font-display text-xl text-burgundy">We'll contact you within 24 hours!</p>
        </div>
      ) : (
        <form onSubmit={submit} className="space-y-3">
          <Input label="Student Name" value={form.student} onChange={(v) => setForm({ ...form, student: v })} />
          <div className="grid grid-cols-2 gap-3">
            <Input label="Age" type="number" value={form.age} onChange={(v) => setForm({ ...form, age: v })} />
            <Input label="Phone" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} />
          </div>
          {isMinor && (
            <Input label="Parent Name" value={form.parent} onChange={(v) => setForm({ ...form, parent: v })} />
          )}
          <Input label="Email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} />
          <div>
            <Lbl>Batch</Lbl>
            <input disabled value={batch?.name ?? ""} className="w-full rounded-md border border-input bg-muted px-3 py-2 text-sm" />
          </div>
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
          <Input label="Preferred Start Date" type="date" value={form.startDate} onChange={(v) => setForm({ ...form, startDate: v })} />
          <button type="submit" className="w-full mt-2 rounded-md bg-burgundy text-cream py-3 font-semibold hover:bg-burgundy/90 transition">
            Submit Registration
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
