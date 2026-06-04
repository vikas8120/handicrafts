import { useEffect, useState } from 'react';
import MagneticButton from '../components/MagneticButton';

const faqs = [
  ['Can I request a custom piece?', 'Yes. The form is intended for commissions, collaborations, and collector inquiries.'],
  ['Where are the studio locations?', 'The contact experience includes a map placeholder for future studio expansion.'],
  ['Do you ship globally?', 'This frontend showcases the luxury brand experience and can be extended later if shipping logic is added.'],
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    const saved = localStorage.getItem('kriscel:contactName');
    if (saved) setForm((value) => ({ ...value, name: saved }));
  }, []);

  function submit(e) {
    e.preventDefault();
    localStorage.setItem('kriscel:contactName', form.name);
    setSubmitted(true);
    window.setTimeout(() => setSubmitted(false), 3000);
  }

  return (
    <main className="px-4 pb-20 pt-28 md:px-6">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="space-y-8">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.5em] text-bronze">Contact</p>
            <h1 className="mt-4 font-display text-5xl text-walnut md:text-7xl">A premium contact experience for commissions and inquiries.</h1>
            <p className="mt-4 text-base leading-8 text-walnut/70">
              The form, FAQ, and location panel are framed like a private studio appointment rather than a utility page.
            </p>
          </div>
          <div className="rounded-[2rem] border border-walnut/10 bg-white/65 p-6 shadow-luxury">
            <p className="text-xs uppercase tracking-[0.35em] text-bronze">Studio Locations</p>
            <div className="mt-4 h-64 overflow-hidden rounded-[1.5rem] bg-[linear-gradient(135deg,#e9dfd3_0%,#c5b19d_52%,#8b694f_100%)] p-5 text-ivory">
              <div className="flex h-full items-end justify-between">
                <div>
                  <p className="font-display text-3xl">Interactive map placeholder</p>
                  <p className="mt-2 max-w-sm text-sm leading-6 text-ivory/80">Replace with a real map or studio locator when the backend is ready.</p>
                </div>
                <div className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.35em]">Global</div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <form onSubmit={submit} className="rounded-[2rem] border border-walnut/10 bg-white/65 p-6 shadow-luxury">
            <div className="grid gap-4">
              <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required placeholder="Name" className="rounded-2xl border border-walnut/10 bg-white px-4 py-3 outline-none" />
              <input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required type="email" placeholder="Email" className="rounded-2xl border border-walnut/10 bg-white px-4 py-3 outline-none" />
              <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required rows="6" placeholder="Tell us about your commission, project, or inquiry" className="rounded-[1.5rem] border border-walnut/10 bg-white px-4 py-3 outline-none" />
            </div>
            <div className="mt-6 flex items-center justify-between gap-4">
              <MagneticButton>Send Inquiry</MagneticButton>
              {submitted ? <p className="text-sm text-bronze">Success animation triggered.</p> : <p className="text-sm text-walnut/60">Response within 2 business days.</p>}
            </div>
          </form>

          <div className="grid gap-4">
            {faqs.map(([question, answer]) => (
              <details key={question} className="rounded-[1.5rem] border border-walnut/10 bg-white/65 p-5 shadow-luxury">
                <summary className="cursor-pointer list-none font-display text-2xl text-walnut">{question}</summary>
                <p className="mt-3 text-sm leading-7 text-walnut/70">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
