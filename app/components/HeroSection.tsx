import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section id='home' className="bg-[#1c594e] flex flex-col items-center justify-center relative overflow-hidden px-5 py-16 sm:px-8 sm:py-20 md:py-24 lg:grid lg:grid-cols-2 lg:items-center lg:py-20 lg:pb-15 lg:px-[5%]">
  <div className="hero-content w-full max-w-lg">
  
    <h1 className='text-white text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-4'>No Plastic.<br /><em className='hero-text'>All Power.</em></h1>
    <p className="hero-sub text-sm sm:text-base md:text-lg mb-6">Engineered for strength. Fully compostable.</p>
    <div className="hero-actions flex flex-col sm:flex-row gap-3 sm:gap-4">
      <Link href="/shop" className="btn-primary text-center text-sm sm:text-base">Shop Now</Link>
      <Link href="#why" className="btn-ghost text-center text-sm sm:text-base">Our Story</Link>
    </div>
  </div>

  <div className="hero-visual hidden lg:flex justify-center items-center mt-12 lg:mt-0">
    <div className="hero-card-stack">
      <div className="hero-card hero-card-main w-full max-w-sm">
        <Image src="/images/2box_2Roll_White_ 2000 x 2000_px_without BG.png" width={500} height={400} alt="Bear Bags Mockup" className='rounded-[40px] hero-card-image w-full h-auto'/>
      </div>

    </div>
  </div>
</section>
  )
}

export default HeroSection
