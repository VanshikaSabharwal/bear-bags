import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-[#1c1c1a] text-white/60 px-[5%] pt-14 pb-8">

      {/* Top grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr] gap-10 lg:gap-14 mb-12 pb-10 border-b border-white/[0.08]">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 relative shrink-0">
              <Image
                src="/images/BearBagsLogo.png"
                alt="Bear Bags Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="font-['Playfair_Display'] text-xl font-bold text-white">Bear Bags</span>
          </div>

          <p className="text-sm leading-7 mb-4 max-w-[320px]">
            100% compostable garbage bags engineered for strength. No plastic. All power. Built to give back.
          </p>

          <p className="text-sm leading-7">
            📧{' '}
            <a href="mailto:hello@bearbags.in" className="hover:text-white transition-colors">
              hello@bearbags.in
            </a>
            &nbsp;·&nbsp;
            📱{' '}
            <a href="tel:+919131783440" className="hover:text-white transition-colors">
              +91 91317 83440
            </a>
          </p>
        </div>

        {/* Company links */}
        <div>
          <h5 className="text-[11px] font-semibold tracking-[2px] uppercase text-white/35 mb-4">
            Company
          </h5>
          <ul className="space-y-2.5">
            {[
              { label: 'About Us', href: 'https://bearbags.in/about/' },
              { label: 'Our Impact', href: 'https://bearbags.in/our-impact/' },
              { label: 'Projects', href: 'https://bearbags.in/projects/' },
              { label: 'Services', href: 'https://bearbags.in/services/' },
            ].map(({ label, href }) => (
              <li key={label}>
                <Link href={href} className="text-sm text-white/55 hover:text-white transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick links */}
        <div>
          <h5 className="text-[11px] font-semibold tracking-[2px] uppercase text-white/35 mb-4">
            Quick Links
          </h5>
          <ul className="space-y-2.5">
            {[
              { label: 'Shop Now', href: '/medium-size-bag' },
              { label: 'Contact Us', href: 'mailto:hello@bearbags.in' },
              { label: 'WhatsApp', href: 'https://wa.me/919131783440' },
            ].map(({ label, href }) => (
              <li key={label}>
                <Link href={href} className="text-sm text-white/55 hover:text-white transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-[13px] text-white/40">
        <span>© 2026 Bear Bags. All rights reserved.</span>
        <span className="font-['Playfair_Display'] italic text-white/30">No Plastic. All Power.</span>
      </div>

    </footer>
  );
};

export default Footer;
