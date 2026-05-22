import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Send } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { Checkbox } from '../components/ui/checkbox';
import { useToast } from '../hooks/use-toast';
import { products, productCategories } from '../data/mock';

const Inquiry = () => {
  const [form, setForm] = useState({ name: '', phone: '', email: '', location: '', quantity: '', notes: '' });
  const [selected, setSelected] = useState([]);
  const [sent, setSent] = useState(false);
  const { toast } = useToast();

  const toggle = (id) => setSelected((prev) => prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]);
  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const stored = JSON.parse(localStorage.getItem('kn_quotes') || '[]');
    stored.push({ ...form, products: selected, ts: new Date().toISOString() });
    localStorage.setItem('kn_quotes', JSON.stringify(stored));
    setSent(true);
    toast({ title: 'Quote request received!', description: "We'll call you back within 24 hours." });
    setTimeout(() => {
      setSent(false);
      setForm({ name: '', phone: '', email: '', location: '', quantity: '', notes: '' });
      setSelected([]);
    }, 3000);
  };

  return (
    <div>
      <section className="pt-14 pb-10 md:pt-20 md:pb-14 px-5 md:px-8 bg-beige">
        <div className="max-w-4xl mx-auto">
          <SectionTitle
            eyebrow="Request a Quote"
            title="Tell us what you need — we'll do the rest"
            subtitle="Fill the form below and our team will get back to you with pricing, availability, and a tailored proposal for your plantation."
          />
        </div>
      </section>

      <section className="py-14 md:py-20 px-5 md:px-8">
        <div className="max-w-4xl mx-auto">
          <form onSubmit={submit} className="bg-cream rounded-3xl p-6 md:p-10 border border-earth-200/70 space-y-8">
            {/* Personal */}
            <div>
              <h3 className="font-display text-xl text-brand-900 mb-5">Your Details</h3>
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <Label className="text-sm mb-1.5 block">Full Name *</Label>
                  <Input name="name" required value={form.name} onChange={change} className="h-11 rounded-lg" />
                </div>
                <div>
                  <Label className="text-sm mb-1.5 block">Phone *</Label>
                  <Input name="phone" required value={form.phone} onChange={change} className="h-11 rounded-lg" placeholder="+91 ..." />
                </div>
                <div>
                  <Label className="text-sm mb-1.5 block">Email</Label>
                  <Input name="email" type="email" value={form.email} onChange={change} className="h-11 rounded-lg" />
                </div>
                <div>
                  <Label className="text-sm mb-1.5 block">Location (City, State) *</Label>
                  <Input name="location" required value={form.location} onChange={change} className="h-11 rounded-lg" placeholder="Thrissur, Kerala" />
                </div>
              </div>
            </div>

            {/* Product selection */}
            <div>
              <h3 className="font-display text-xl text-brand-900 mb-2">Select Products</h3>
              <p className="text-sm text-earth-600 mb-5">Tick all plants you're interested in. You can add more details below.</p>
              {productCategories.map((cat) => {
                const catProducts = products.filter((p) => p.category === cat.id);
                if (!catProducts.length) return null;
                return (
                  <div key={cat.id} className="mb-5">
                    <div className="text-xs uppercase tracking-wider text-brand-600 font-semibold mb-3">{cat.name}</div>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {catProducts.map((p) => (
                        <label
                          key={p.id}
                          className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-colors ${
                            selected.includes(p.id)
                              ? 'border-brand-500 bg-brand-50'
                              : 'border-earth-200 hover:border-brand-300 bg-beige/40'
                          }`}
                        >
                          <Checkbox
                            checked={selected.includes(p.id)}
                            onCheckedChange={() => toggle(p.id)}
                            className="border-earth-400 data-[state=checked]:bg-brand-600 data-[state=checked]:border-brand-600"
                          />
                          <div className="flex-1">
                            <div className="text-sm font-medium text-brand-900">{p.name}</div>
                            <div className="text-xs text-earth-600">{p.price}</div>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <Label className="text-sm mb-1.5 block">Approximate Quantity</Label>
                <Input name="quantity" value={form.quantity} onChange={change} className="h-11 rounded-lg" placeholder="e.g. 200 plants" />
              </div>
              <div>
                <Label className="text-sm mb-1.5 block">Timeline</Label>
                <Input name="notes" value={form.notes} onChange={change} className="h-11 rounded-lg" placeholder="e.g. Delivery by Aug 2025" />
              </div>
            </div>

            <div>
              <Label className="text-sm mb-1.5 block">Additional Notes</Label>
              <Textarea
                rows={4}
                onChange={(e) => setForm({ ...form, notes: e.target.value })}
                value={form.notes}
                className="rounded-lg resize-none"
                placeholder="Tell us about your plantation, soil type, or any special requirements..."
              />
            </div>

            <motion.div whileTap={{ scale: 0.98 }}>
              <Button
                type="submit"
                disabled={sent}
                className="w-full bg-brand-600 hover:bg-brand-700 text-cream rounded-full h-12 text-base"
              >
                {sent ? (
                  <><CheckCircle2 size={18} className="mr-2" /> Quote Request Sent!</>
                ) : (
                  <>Submit Quote Request <Send size={16} className="ml-2" /></>
                )}
              </Button>
            </motion.div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Inquiry;
