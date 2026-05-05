'use client';
import React from 'react';

const FAQ = () => {

  const toggleFaq = (e: React.MouseEvent<HTMLDivElement>) => {
    const item = e.currentTarget.parentElement;
    item?.classList.toggle("open");
  };

  return (
<section id="faq" className="px-4 sm:px-6 md:px-[5%] py-12 sm:py-16 md:py-20 lg:py-24">
  <div className="faq-layout grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 md:gap-16">
    <div className="faq-sidebar">
      <div className="section-label text-xs sm:text-sm">FAQ</div>
      <h3 className="text-2xl sm:text-3xl font-bold mb-4">Answers to questions we get most often</h3>
      <p className="text-sm sm:text-base mb-6">Have something else in mind? We&apos;re happy to chat.</p>
      <div className="faq-contact bg-cream-dark rounded-lg p-4 sm:p-6">
        <p className="text-sm font-semibold mb-3">Get in touch directly:</p>
        <div className="flex flex-col gap-2 text-sm">
          <a href="mailto:hello@bearbags.in" className="hover:underline">hello@bearbags.in</a>
          <a href="https://wa.me/919131783440" className="hover:underline">WhatsApp: +91 91317 83440</a>
        </div>
      </div>
    </div>

    <div className="faq-list space-y-3">
      <div className="faq-item open">
        <div className="faq-question" onClick={toggleFaq}>
          Are Bear Bags actually compostable, or is that just marketing&quest;
          <div className="faq-toggle">+</div>
        </div>
        <div className="faq-answer">
          <div className="faq-answer-inner">
            Bear Bags are made from 100&percnt; compostable materials &mdash; no plastic content, no partial blends. They break down naturally in composting conditions without leaving microplastics behind. We don&apos;t use the word &quot;compostable&quot; loosely.
          </div>
        </div>
      </div>

      <div className="faq-item">
        <div className="faq-question" onClick={toggleFaq}>
          How strong are these compared to regular plastic bags?
          <div className="faq-toggle">+</div>
        </div>
        <div className="faq-answer">
          <div className="faq-answer-inner">
            We reinforced Bear Bags specifically because most compostable bags feel flimsy. We tested for tear resistance, leak-proofing, and load bearing before finalizing the product. They hold up in everyday household use &mdash; including wet, heavy waste.
          </div>
        </div>
      </div>

      <div className="faq-item">
        <div className="faq-question" onClick={toggleFaq}>
          Where does the 30% profit donation actually go?
          <div className="faq-toggle">+</div>
        </div>
        <div className="faq-answer">
          <div className="faq-answer-inner">
            Our first ₹15,000 donation has already gone toward programs helping people with disabilities learn, grow, and earn with dignity. As we grow, we&apos;ll publish updates on every contribution. Transparency is core to how we operate.
          </div>
        </div>
      </div>

      <div className="faq-item">
        <div className="faq-question" onClick={toggleFaq}>
          Where can I buy Bear Bags?
          <div className="faq-toggle">+</div>
        </div>
        <div className="faq-answer">
          <div className="faq-answer-inner">
            You can order directly from our website at bearbags.in. We also list on Amazon India. If you&apos;re looking for bulk orders for your business or organization, reach out to us via WhatsApp or email and we&apos;ll sort you out.
          </div>
        </div>
      </div>

      <div className="faq-item">
        <div className="faq-question" onClick={toggleFaq}>
          Do you offer bulk orders for businesses?
          <div className="faq-toggle">+</div>
        </div>
        <div className="faq-answer">
          <div className="faq-answer-inner">
            Yes. We work with restaurants, offices, housing societies, and other organizations. Contact us on WhatsApp (+91 91317 83440) or email to discuss quantities and pricing.
          </div>
        </div>
      </div>

      <div className="faq-item">
        <div className="faq-question" onClick={toggleFaq}>
          What sizes are available?
          <div className="faq-toggle">+</div>
        </div>
        <div className="faq-answer">
          <div className="faq-answer-inner">
            We offer multiple sizes suitable for kitchen bins, larger waste bins, and outdoor use. Visit our product page on bearbags.in for the current size lineup and specifications.
          </div>
        </div>
      </div>

      <div className="faq-item">
        <div className="faq-question" onClick={toggleFaq}>
          Is the price competitive with regular garbage bags?
          <div className="faq-toggle">+</div>
        </div>
        <div className="faq-answer">
          <div className="faq-answer-inner">
            Yes. We priced Bear Bags to be accessible &mdash; because we believe sustainability shouldn&apos;t be a premium feature. You pay slightly more than the cheapest plastic alternatives, but you get a product that performs better and does far less harm.
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  );
};

export default FAQ;
