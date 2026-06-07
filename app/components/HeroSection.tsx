import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section id='home' className=" bg-[#173d36] flex flex-col items-center justify-center relative overflow-hidden lg:grid lg:grid-cols-2 lg:items-center lg:px-[5%]">
  <div className="hero-content">
  
    <h1 className='text-[#b4b4b4] text-[3rem] font-bold md:text-[4rem]'>No Plastic.<br /><em className='hero-text'>All Power.</em></h1>
    <p className="hero-sub">Engineered for strength. Fully compostable.</p>
    <div className="hero-actions">
      <Link href="/medium-size-bag" className="btn-primary">Shop Now</Link>
      {/* <Link href="#why" className="btn-ghost">Our Story</Link> */}
    </div>
  </div>

  <div className="hero-visual">
    <div className="hero-card-stack">
      <div className="hero-card hero-card-main">
        <Image src="/images/2box_2Roll_White_ 2000 x 2000_px_without BG.png" width={500} height={400} alt="Bear Bags Mockup" className='rounded-[40px] hero-card-image'/>
      </div>

    </div>
  </div>
</section>
  )
}

export default HeroSection