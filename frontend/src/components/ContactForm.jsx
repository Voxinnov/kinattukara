import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { useToast } from '../hooks/use-toast';

const ContactForm = ({ compact = false }) => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);
  const { toast } = useToast();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Persist mock "inquiry" to localStorage
    const stored = JSON.parse(localStorage.getItem('kn_inquiries') || '[]');
    stored.push({ ...form, ts: new Date().toISOString() });
    localStorage.setItem('kn_inquiries', JSON.stringify(stored));
    setSent(true);
    toast({ title: 'Message sent!', description: "We'll get back to you within 24 hours." });
    setTimeout(() => { setSent(false); setForm({ name: '', email: '', phone: '', message: '' }); }, 2500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className={compact ? '' : 'grid md:grid-cols-2 gap-5'}>
        <div>
          <Label htmlFor="name" className="text-brand-900 mb-1.5 block text-sm">Full Name *</Label>
          <Input id="name" name="name" required value={form.name} onChange={handleChange}
            className="bg-cream border-earth-200 focus-visible:ring-brand-500 rounded-lg h-11"
            placeholder="Rajesh Menon"
          />
        </div>
        <div>
          <Label htmlFor="phone" className="text-brand-900 mb-1.5 block text-sm">Phone *</Label>
          <Input id="phone" name="phone" required value={form.phone} onChange={handleChange}
            className="bg-cream border-earth-200 focus-visible:ring-brand-500 rounded-lg h-11"
            placeholder="+91 98765 43210"
          />
        </div>
      </div>
      <div>
        <Label htmlFor="email" className="text-brand-900 mb-1.5 block text-sm">Email Address</Label>
        <Input id="email" name="email" type="email" value={form.email} onChange={handleChange}
          className="bg-cream border-earth-200 focus-visible:ring-brand-500 rounded-lg h-11"
          placeholder="you@email.com"
        />
      </div>
      <div>
        <Label htmlFor="message" className="text-brand-900 mb-1.5 block text-sm">Your Message *</Label>
        <Textarea id="message" name="message" required value={form.message} onChange={handleChange}
          rows={5}
          className="bg-cream border-earth-200 focus-visible:ring-brand-500 rounded-lg resize-none"
          placeholder="Tell us what you're looking for..."
        />
      </div>
      <Button
        type="submit"
        disabled={sent}
        className="w-full bg-brand-600 hover:bg-brand-700 text-cream rounded-full h-12 text-base"
      >
        {sent ? (
          <><CheckCircle2 size={18} className="mr-2" /> Message Sent!</>
        ) : (
          <>Send Message <Send size={16} className="ml-2" /></>
        )}
      </Button>
    </form>
  );
};

export default ContactForm;
