'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FaCartShopping } from "react-icons/fa6";
import { useCart } from '../context/CartContext';
import Image from 'next/image';

const Header = () => {
  const [open, setOpen] = useState(false);
  const { cart } = useCart();

  return (
    <>
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 flex justify-between items-center px-4 sm:px-6 py-3 sm:py-4 bg-white shadow-sm relative">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-9 h-9 sm:w-10 sm:h-10 relative">
            <Image
              src="/images/BearBagsLogo.png"
              alt="Bear Bags Logo"
              fill
              className="object-contain"
            />
          </div>
          <span className="font-semibold text-[#1f3a2f] text-sm sm:text-base">Bear Bags</span>
        </Link>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-4 lg:gap-6 text-sm lg:text-base">
          <li><Link href="/#home" className="hover:text-[#1a3a2a]">Home</Link></li>
          <li><Link href="/#why" className="hover:text-[#1a3a2a]">Why</Link></li>
          <li><Link href="/#impact" className="hover:text-[#1a3a2a]">Impact</Link></li>
          <li><Link href="/#testimonials" className="hover:text-[#1a3a2a]">Reviews</Link></li>
          <li><Link href="/#faq" className="hover:text-[#1a3a2a]">FAQ</Link></li>
          <li><Link href="/shop" className="hover:text-[#1a3a2a]">Shop</Link></li>

          {/* CART */}
          <li>
            <Link href="/checkout" className="relative cursor-pointer hover:text-[#1a3a2a]">
              <FaCartShopping size={20} />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#1f3a2f] text-white text-xs h-5 w-5 flex items-center justify-center rounded-full text-xs">
                  {cart.length}
                </span>
              )}
            </Link>
          </li>
        </ul>

        {/* HAMBURGER */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col justify-center items-center gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } bg-white shadow-md w-full`}
      >
        <ul className="flex flex-col items-center gap-4 py-6 px-4 text-sm">
          <li><Link href="/#home" onClick={() => setOpen(false)} className="hover:text-[#1a3a2a]">Home</Link></li>
          <li><Link href="/#why" onClick={() => setOpen(false)} className="hover:text-[#1a3a2a]">Why</Link></li>
          <li><Link href="/#impact" onClick={() => setOpen(false)} className="hover:text-[#1a3a2a]">Impact</Link></li>
          <li><Link href="/#testimonials" onClick={() => setOpen(false)} className="hover:text-[#1a3a2a]">Reviews</Link></li>
          <li><Link href="/#faq" onClick={() => setOpen(false)} className="hover:text-[#1a3a2a]">FAQ</Link></li>
          <li><Link href="/shop" onClick={() => setOpen(false)} className="hover:text-[#1a3a2a]">Shop</Link></li>

          {/* CART */}
          <li className="border-t border-gray-200 pt-4 w-full">
            <Link href="/checkout" onClick={() => setOpen(false)} className="flex items-center justify-center gap-2 hover:text-[#1a3a2a]">
              <FaCartShopping size={18} />
              Cart ({cart.length})
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
