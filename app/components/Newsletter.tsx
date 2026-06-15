'use client';
import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      try {
        await fetch('/api/newsletter', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email }),
        });
      } catch {
        // Non-blocking: show success to user even if CRM save fails
      }
      setSubmitted(true);
      setTimeout(() => {
        setEmail('');
        setSubmitted(false);
      }, 3000);
    }
  };

  return (
    <section id="newsletter" className="py-24 px-[5%]" style={{ background: 'var(--sage)' }}>
      <div className="max-w-[800px] mx-auto text-center">
        <div className="text-[11px] font-semibold tracking-[2.5px] uppercase mb-4"
             style={{ color: '#1c594e' }}>
          Stay Connected
        </div>
        <h2 className="font-['Playfair_Display'] font-bold tracking-tight mb-5"
            style={{ fontSize: 'clamp(32px, 4vw, 52px)', color: '#1c594e' }}>
          Join the movement
        </h2>
        <p className="text-[17px] leading-relaxed max-w-[560px] mx-auto font-light mb-10"
           style={{ color: 'var(--forest-mid)' }}>
          Get updates on our impact, exclusive offers, and tips for living more sustainably. No spam, just good stuff.
        </p>

        {submitted ? (
          <div className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-medium"
               style={{ background: '#1c594e', color: 'white' }}>
            ✓ Thank you for subscribing!
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-3 max-w-[500px] mx-auto newsletter-form">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 rounded-full border-2 outline-none transition-all p-[.8rem] mt-4"
              style={{
                background: 'white',
                borderColor: 'rgba(26, 58, 42, 0.2)',
                color: 'var(--charcoal)'
              }}
              onFocus={(e) => e.currentTarget.style.borderColor = '#1c594e'}
              onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(26, 58, 42, 0.2)'}
            />
            <button
              type="submit"
              className="px-8 py-4 rounded-full font-medium text-[15px] transition-all hover:-translate-y-0.5 hover:shadow-lg whitespace-nowrap w-[6rem] h-[2rem] flex items-center justify-center"
              style={{ background: '#1c594e', color: 'white' }}>
              Subscribe
            </button>
          </form>
        )}

        <p className="text-sm mt-6 opacity-70" style={{ color: 'var(--forest-mid)' }}>
          We respect your privacy. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
