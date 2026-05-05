import React from 'react'
import { GiWaterDrop } from "react-icons/gi";
import { PiPlantBold } from "react-icons/pi";
import { GiStrong } from "react-icons/gi";
import { FaRecycle } from "react-icons/fa";
import Image from 'next/image';


const WhyBearBags = () => {
  return (
    <section id="why" className="px-4 sm:px-6 md:px-[5%] py-12 sm:py-16 md:py-20 lg:py-24">
  <div className="mb-10 md:mb-16">
    <div className="section-label text-xs sm:text-sm">Product Philosophy</div>
    <h2 className="section-title text-3xl sm:text-4xl md:text-5xl">Strong. <br />Compostable. </h2>
  </div>

  <div className="why-grid flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
    {/* <div className="why-cards">
      <div className="why-card">
        <div className="why-card-icon">
            <FaRecycle size={24} /> 
        </div>
        <div>
          <h4>Built for real use.</h4>
          <p>Thicker walls and tested durability mean fewer breaks, fewer messes, fewer regrets.</p>
        </div>
      </div>
      <div className="why-card">
        <div className="why-card-icon">
            <PiPlantBold size={24} />
        </div>
        <div>
          <h4>Compostable. Not Compromised.</h4>
          <p>100% compostable materials — no microplastic residue, no greenwashing, just clean decomposition.</p>
        </div>
      </div>
      <div className="why-card">
        <div className="why-card-icon">
            <GiWaterDrop size={24} />
        </div>
        <div>
          <h4>No Leak. No Tear..</h4>
          <p>Packed in 100% plastic-free packaging.</p>
        </div>
      </div>
    </div> */}

<div className="why-aside">
  <div className="image-wrapper">
    <Image
      src="/images/Bag Stretch Image without backgorund 2.png"
      alt="No Leak. No Tear."
      fill
      className="image"
    />
  </div>
</div>
  </div>
</section>

  )
}

export default WhyBearBags
