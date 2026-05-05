import React from 'react';
import Image from 'next/image';

const ProductIntroduction = () => {
  return (
    <section className="bg-[#f5f5f5] py-12 sm:py-16 md:py-20 px-4 sm:px-6 flex justify-center">
      
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        
        {/* LEFT: IMAGE */}
        <div className="flex justify-center md:justify-start">
          <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-sm w-full max-w-md">
            <div className="relative w-full h-[220px] sm:h-[260px] md:h-[300px]">
              <Image
                src="/images/Box_Roll_Edited_White.jpg"
                alt="Bear Bags Medium"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* RIGHT: CONTENT */}
        <div className="max-w-md text-center md:text-left mx-auto md:mx-0">
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#1c594e] mb-2">
            Bear Bags — Medium
          </h2>

          <p className="text-gray-600 text-sm sm:text-base mb-2 sm:mb-3">
            30 compostable garbage bags
          </p>

          <p className="text-lg sm:text-xl font-semibold text-[#1c594e] mb-2 sm:mb-3">
            ₹279
          </p>

          <p className="text-gray-700 text-sm sm:text-base mb-3 sm:mb-4">
            Strong. Compostable. Designed for everyday use without harming the planet.
          </p>

          <p className="text-xs sm:text-sm text-gray-500 mb-4 sm:mb-5">
            CPCB Certified&nbsp;&nbsp; TÜV Austria Certified
          </p>

          {/* BUTTON */}
          <button className="bg-[#1c594e] text-white px-5 py-2 rounded-full text-sm font-medium hover:opacity-90 transition">
            Buy Now
          </button>
        </div>

      </div>
    </section>
  );
};

export default ProductIntroduction;