import React from 'react'

const Impact = () => {
  return (
    <section className="impact-section" id="impact">
  <div className="impact-header">
    <div className="impact-label">Our Impact so far</div>
    <h2 className="impact-title">Numbers that matter</h2>
    <p className="impact-sub">Every bag sold is a vote against plastic — and a contribution toward something bigger than just waste management.</p>
  </div>

  <div className="metrics-grid">
    <div className="metric-card">
      <span className="metric-icon">
      </span>
      <div className="metric-num">0 <span className="metric-unit">kg</span></div>
      <div className="metric-label">Plastic sent to landfill<br />from our bags </div>
    </div>
    <div className="metric-card">
      <span className="metric-icon"></span>
      <div className="metric-num">₹15 <span className="metric-unit">K</span></div>
      <div className="metric-label">First donation made to<br />disability programs</div>
    </div>
    <div className="metric-card">
      <span className="metric-icon"></span>
      <div className="metric-num">100 <span className="metric-unit">%</span></div>
      <div className="metric-label">Compostable materials<br />in every bag</div>
    </div>
    <div className="metric-card">
      <span className="metric-icon"></span>
      <div className="metric-num">30 <span className="metric-unit">%</span></div>
      <div className="metric-label">Of profits committed to<br />community development</div>
    </div>
  </div>

  <div className="impact-cta-row">
    <div className="donation-callout">
      <div className="donation-icon">❤️</div>
      <div className="donation-text">
        <h4>Our first ₹15,000 is already making a difference</h4>
        <p>Helping people with disabilities learn, grow, and earn with dignity — and this is just the beginning.</p>
      </div>
      <div className="donation-badge">30% back</div>
    </div>
  </div>
</section>
  )
}

export default Impact