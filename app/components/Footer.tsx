import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
// TO DO:- Add real image of bear bag logo 
const footer = () => {
  return (
    <footer>
  <div className="footer-top">
    <div className="footer-brand">
      <div className="">
<div className="w-12 h-12 relative">
  <Image
    src="/images/BearBagsLogo.png"
    alt="Bear Bags Logo"
    fill
    className="object-contain"
  />
</div>
      <h4>Bear Bags</h4>
      </div>
      <p>100% compostable garbage bags engineered for strength. No plastic. All power. Built to give back.</p>
      <p>📧 hello@bearbags.in &nbsp;·&nbsp; 📱 +91 91317 83440</p>
    </div>
    <div className="footer-link-group">
      <h5>Company</h5>
      <ul>
        <li><Link href="https://bearbags.in/about/">About Us</Link></li>
        <li><Link href="https://bearbags.in/our-impact/">Our Impact</Link></li>
        <li><Link href="https://bearbags.in/projects/">Projects</Link></li>
        <li><Link href="https://bearbags.in/services/">Services</Link></li>
      </ul>
    </div>
    <div className="footer-link-group">
      <h5>Quick links</h5>
      <ul>
        <li><Link href="/medium-size-bag">Shop Now</Link></li>
        <li><Link href="mailto:hello@bearbags.in">Contact Us</Link></li>
        <li><Link href="https://wa.me/919131783440">WhatsApp</Link></li>
      </ul>
    </div>
  </div>
  <div className="footer-bottom">
    <span>© 2026 Bear Bags. All rights reserved.</span>
    <span className="footer-tagline">No Plastic. All Power.</span>
  </div>
</footer>
  )
}

export default footer