import React from 'react'

const Impact = () => {
  return (
    <section className="impact-section px-4 sm:px-6 md:px-[5%] py-12 sm:py-16 md:py-20 lg:py-24" id="impact">
  <div className="impact-header text-center mb-12 sm:mb-16 md:mb-20">
    <div className="impact-label text-xs sm:text-sm">Our Impact so far</div>
    <h2 className="impact-title text-3xl sm:text-4xl md:text-5xl mb-4 sm:mb-6">Numbers that matter</h2>
    <p className="impact-sub text-sm sm:text-base md:text-lg max-w-2xl mx-auto">Every bag sold is a vote against plastic — and a contribution toward something bigger than just waste management.</p>
  </div>

  <div className="metrics-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white bg-opacity-10 rounded-lg lg:rounded-2xl overflow-hidden mb-12 md:mb-16">
    <div className="metric-card bg-white bg-opacity-5 hover:bg-opacity-15 p-6 sm:p-8 md:p-10 transition-colors">
      <span className="metric-icon text-2xl sm:text-3xl">
      </span>
      <div className="metric-num text-3xl sm:text-4xl md:text-5xl font-bold mb-2">0 <span className="metric-unit text-lg sm:text-2xl">kg</span></div>
      <div className="metric-label text-xs sm:text-sm">Plastic sent to landfill<br />from our bags </div>
    </div>
    <div className="metric-card bg-white bg-opacity-5 hover:bg-opacity-15 p-6 sm:p-8 md:p-10 transition-colors">
      <span className="metric-icon text-2xl sm:text-3xl"></span>
      <div className="metric-num text-3xl sm:text-4xl md:text-5xl font-bold mb-2">₹15 <span className="metric-unit text-lg sm:text-2xl">K</span></div>
      <div className="metric-label text-xs sm:text-sm">First donation made to<br />disability programs</div>
    </div>
    <div className="metric-card bg-white bg-opacity-5 hover:bg-opacity-15 p-6 sm:p-8 md:p-10 transition-colors">
      <span className="metric-icon text-2xl sm:text-3xl"></span>
      <div className="metric-num text-3xl sm:text-4xl md:text-5xl font-bold mb-2">100 <span className="metric-unit text-lg sm:text-2xl">%</span></div>
      <div className="metric-label text-xs sm:text-sm">Compostable materials<br />in every bag</div>
    </div>
    <div className="metric-card bg-white bg-opacity-5 hover:bg-opacity-15 p-6 sm:p-8 md:p-10 transition-colors">
      <span className="metric-icon text-2xl sm:text-3xl"></span>
      <div className="metric-num text-3xl sm:text-4xl md:text-5xl font-bold mb-2">30 <span className="metric-unit text-lg sm:text-2xl">%</span></div>
      <div className="metric-label text-xs sm:text-sm">Of profits committed to<br />community development</div>
    </div>
  </div>

  <div className="impact-cta-row flex justify-center">
    <div className="donation-callout bg-white bg-opacity-8 border border-white border-opacity-15 rounded-lg md:rounded-2xl p-6 sm:p-8 md:p-10 flex flex-col sm:flex-row sm:items-center gap-4 md:gap-6 max-w-2xl w-full">
      <div className="donation-icon text-4xl md:text-5xl flex-shrink-0">❤️</div>
      <div className="donation-text flex-1">
        <h4 className="text-base sm:text-lg font-semibold mb-2">Our first ₹15,000 is already making a difference</h4>
        <p className="text-xs sm:text-sm">Helping people with disabilities learn, grow, and earn with dignity — and this is just the beginning.</p>
      </div>
      <div className="donation-badge font-['Playfair_Display'] bg-earth-light text-forest font-bold px-4 md:px-6 py-3 rounded-full flex-shrink-0 text-sm md:text-base whitespace-nowrap">30% back</div>
    </div>
  </div>
</section>
  )
}

export default Impact
