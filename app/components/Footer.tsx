import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
// TO DO:- Add real image of bear bag logo 
const footer = () => {
  return (
    <footer className="px-4 sm:px-6 md:px-[5%] py-12 sm:py-16 md:py-20">
  <div className="footer-top grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12 mb-10 sm:mb-12 pb-10 sm:pb-12 border-b border-white border-opacity-10">
    <div className="footer-brand">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 sm:w-12 sm:h-12 relative">
          <Image
            src="/images/BearBagsLogo.png"
            alt="Bear Bags Logo"
            fill
            className="object-contain"
          />
        </div>
        <h4 className="font-bold text-lg">Bear Bags</h4>
      </div>
      <p className="text-sm mb-4 font-light leading-relaxed">100% compostable garbage bags engineered for strength. No plastic. All power. Built to give back.</p>
      <div className="space-y-1 text-sm">
        <p>📧 hello@bearbags.in</p>
        <p>📱 +91 91317 83440</p>
      </div>
    </div>
    <div className="footer-link-group">
      <h5 className="text-xs sm:text-sm font-semibold tracking-widest uppercase mb-4">Company</h5>
      <ul className="space-y-2">
        <li><Link href="https://bearbags.in/about/" className="text-sm hover:underline">About Us</Link></li>
        <li><Link href="https://bearbags.in/our-impact/" className="text-sm hover:underline">Our Impact</Link></li>
        <li><Link href="https://bearbags.in/projects/" className="text-sm hover:underline">Projects</Link></li>
        <li><Link href="https://bearbags.in/services/" className="text-sm hover:underline">Services</Link></li>
      </ul>
    </div>
    <div className="footer-link-group">
      <h5 className="text-xs sm:text-sm font-semibold tracking-widest uppercase mb-4">Quick links</h5>
      <ul className="space-y-2">
        <li><Link href="/shop" className="text-sm hover:underline">Shop Now</Link></li>
        <li><Link href="mailto:hello@bearbags.in" className="text-sm hover:underline">Contact Us</Link></li>
        <li><Link href="https://wa.me/919131783440" className="text-sm hover:underline">WhatsApp</Link></li>
      </ul>
    </div>
  </div>
  <div className="footer-bottom flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 text-xs sm:text-sm">
    <span>© 2026 Bear Bags. All rights reserved.</span>
    <span className="footer-tagline">No Plastic. All Power.</span>
  </div>
</footer>
  )
}

export default footer
