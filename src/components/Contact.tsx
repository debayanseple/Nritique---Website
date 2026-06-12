import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", phone: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="py-24 px-5 lg:px-10 bg-cream">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-gold uppercase tracking-[0.3em] text-xs">Get In Touch</span>
          <h2 className="font-display text-4xl md:text-5xl text-burgundy mt-3">Visit Our Studio</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex gap-4">
              <MapPin className="text-gold shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-charcoal">Studio Address</h4>
                <p className="text-muted-foreground text-sm mt-1">
                  142, Rabindra Sarani, Hindustan Park<br />Kolkata, West Bengal 700029
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Phone className="text-gold shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-charcoal">Phone</h4>
                <p className="text-muted-foreground text-sm mt-1">+91 98300 12345</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Mail className="text-gold shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-charcoal">Email</h4>
                <p className="text-muted-foreground text-sm mt-1">hello@nrityaacademy.in</p>
              </div>
            </div>
            <a
              href="https://wa.me/919830012345"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-burgundy text-cream px-5 py-3 font-semibold hover:bg-burgundy/90 transition"
            >
              <MessageCircle size={18} /> WhatsApp Us
            </a>
          </motion.div>

          <motion.form
            onSubmit={submit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card border border-border rounded-xl p-7 space-y-4"
          >
            <Field label="Name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} />
            <Field label="Email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} />
            <Field label="Phone" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} />
            <div>
              <label className="block text-xs uppercase tracking-wider text-charcoal/70 mb-1">Message</label>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gold"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-md bg-burgundy text-cream py-3 font-semibold hover:bg-burgundy/90 transition"
            >
              Send Enquiry
            </button>
            {sent && <p className="text-sm text-burgundy text-center">Thank you — we'll reply within 24 hours.</p>}
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, value, onChange, type = "text" }: { label: string; value: string; onChange: (v: string) => void; type?: string }) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-wider text-charcoal/70 mb-1">{label}</label>
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
