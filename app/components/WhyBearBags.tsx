import React from 'react'
import { GiWaterDrop } from "react-icons/gi";
import { PiPlantBold } from "react-icons/pi";
import { GiStrong } from "react-icons/gi";
import { FaRecycle } from "react-icons/fa";
import Image from 'next/image';


const WhyBearBags = () => {
  return (
    <section id="why">
  <div className="section-label">Product Philosophy</div>
  <h2 className="section-title">Strong. <br />Compostable. </h2>
  {/* <p className="section-sub">We are the strongest compostable garbage bag. Period.</p> */}

  <div className="why-grid">
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