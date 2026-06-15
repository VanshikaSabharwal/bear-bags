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
    <section id="newsletter" className="bg-[#0f3f30]">
      <div className="max-w-2xl mx-auto text-center px-4">

        {/* Label */}
        <p className="uppercase tracking-[2.5px] text-[11px] sm:text-[12px] font-semibold mb-4 text-[#8ab89a]">
          Stay Connected
        </p>

        {/* Heading */}
        <h2
          className="font-['Playfair_Display'] font-bold tracking-tight mb-4 text-[#f4eee5]"
          style={{ fontSize: 'clamp(28px, 5vw, 52px)' }}
        >
          Join the movement
        </h2>

        {/* Subtext */}
        <p className="text-[15px] sm:text-[17px] leading-relaxed max-w-[520px] mx-auto font-light mb-8 sm:mb-10 text-[#b8d0c4]">
          Get updates on our impact, exclusive offers, and tips for living more sustainably. No spam, just good stuff.
        </p>

        {/* Form / success */}
        {submitted ? (
          <div className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base font-medium bg-[#d4a96a] text-[#0f3f30]">
            ✓ Thank you for subscribing!
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-[500px] mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 rounded-full border-2 outline-none transition-all px-5 py-3 sm:py-3.5 text-sm sm:text-base bg-white text-[#1c1c1a] placeholder:text-[#999] border-transparent focus:border-[#8ab89a]"
            />
            <button
              type="submit"
              className="rounded-full font-semibold text-[14px] sm:text-[15px] transition-all hover:-translate-y-0.5 hover:shadow-lg whitespace-nowrap px-7 py-3 sm:py-3.5 bg-[#d4a96a] text-[#0f3f30] hover:bg-[#e0ba84]"
            >
              Subscribe
            </button>
          </form>
        )}

        {/* Privacy note */}
        <p className="text-xs sm:text-sm mt-5 text-[#7aaa90]">
          We respect your privacy. Unsubscribe anytime.
        </p>

      </div>
    </section>
  );
}
