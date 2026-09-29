import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import '../styles/rd.css'

const stats = [
  { icon: 'fa-flask', number: '20+', label: 'Years of Research' },
  { icon: 'fa-dna', number: '4+', label: 'Breeds Developed', featured: true },
  { icon: 'fa-microscope', number: '100%', label: 'Biosecurity Compliance' },
]

const highlights = [
  'Dual-purpose: eggs and meat production',
  'Adapted to Nigerian climate and conditions',
  'Superior disease resistance',
  'Excellent foraging ability — lowers feed costs',
  'Ideal for smallholder and commercial farmers',
]

const focusAreas = [
  {
    icon: 'fa-dna',
    title: 'Genetics & Breeding',
    text: 'We continuously evaluate and improve our parent stock genetics to enhance productivity, disease resistance, and adaptability to local conditions.',
  },
  {
    icon: 'fa-shield-virus',
    title: 'Biosecurity & Disease Control',
    text: 'Our biosecurity protocols are benchmarked against international standards, ensuring our hatcheries remain free from disease and our chicks are healthy at dispatch.',
  },
  {
    icon: 'fa-egg',
    title: 'Hatchery Technology',
    text: 'We invest in state-of-the-art incubation and hatching technology, continuously optimising settings to improve hatch rates and chick quality.',
  },
  {
    icon: 'fa-wheat-awn',
    title: 'Nutrition & Feed Science',
    text: 'We research optimal feeding programmes for each breed at every growth stage — helping farmers maximise performance while minimising feed costs.',
  },
  {
    icon: 'fa-temperature-half',
    title: 'Climate Adaptation',
    text: 'Our breeds are developed and tested to thrive in tropical climates, reducing mortality rates and improving productivity for farmers across Nigeria and Africa.',
  },
  {
    icon: 'fa-chart-line',
    title: 'Performance Monitoring',
    text: 'We track field performance data from our farmer network to continuously improve our products and provide better technical support and advisory services.',
  },
]

const steps = [
  {
    number: '01',
    title: 'Parent Stock Selection',
    text: 'We source parent flocks from world-class genetic suppliers, selecting only the highest-performing breeding stock for our hatcheries.',
  },
  {
    number: '02',
    title: 'Egg Collection & Grading',
    text: 'Fertile eggs are collected, graded, and sanitised under strict hygiene protocols before being set in our precision-controlled incubators.',
  },
  {
    number: '03',
    title: 'Incubation & Monitoring',
    text: 'Eggs are incubated under optimised temperature, humidity, and ventilation conditions, with daily candling and breakout analysis to track embryo development.',
  },
  {
    number: '04',
    title: 'Hatching & Vaccination',
    text: 'Chicks are hatched, processed, vaccinated, and quality-checked before being packed for delivery — ensuring every bird arrives healthy and active.',
  },
]

export default function RD() {
  return (
    <div className="rd-page">
      <div className="page-hero">
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <div
            className="section-tag"
            style={{ color: '#fff', borderColor: '#fff' }}
          >
            Innovation &amp; Science
          </div>
          <h1>
            Research &amp;<br />
            <span>Development</span>
          </h1>
          <p style={{ color: '#fff', fontWeight: 500 }}>
            At AFSH, innovation is not an afterthought — it is the engine that
            drives everything we do. Our R&amp;D work is transforming poultry
            farming across Africa.
          </p>
        </div>
      </div>

      <section className="rd-intro-section fade-in">
        <div className="section-inner">
          <div className="rd-intro-inner">
            <div className="rd-intro-text">
              <div className="section-tag">Our Approach</div>
              <h2 className="section-title">
                Science-Driven,<br />Farmer-Focused
              </h2>
              <p style={{ color: '#000', fontWeight: 500 }}>
                At Amo Farm Sieberer Hatchery Ltd., innovation and excellence
                drive our Research and Development efforts to advance poultry
                farming and meet evolving customer needs. We combine world-class
                genetics, veterinary science, and practical field experience to
                develop solutions that work for Nigerian and African farmers.
              </p>
              <p style={{ marginTop: 14, color: '#000', fontWeight: 500 }}>
                Our R&amp;D team works continuously to improve hatch rates, bird
                performance, disease resistance, and feed efficiency — ensuring
                that every chick we produce is better than the last.
              </p>
            </div>
            <div className="rd-intro-stats">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className={stat.featured ? 'rd-stat-card featured' : 'rd-stat-card'}
                >
                  <div className="rd-stat-icon">
                    <i className={`fa-solid ${stat.icon}`}></i>
                  </div>
                  <div className="rd-stat-number">{stat.number}</div>
                  <div className="rd-stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="noiler-section fade-in">
        <div className="section-inner">
          <div className="noiler-inner">
            <div className="noiler-image-wrap">
              <img
                src="https://images.unsplash.com/photo-1612170153139-6f881ff067e0?w=800&q=80"
                alt="Noiler chickens"
              />
              <div className="noiler-badge">
                <i className="fa-solid fa-award"></i>
                <span>Our Flagship Innovation</span>
              </div>
            </div>
            <div className="noiler-text">
              <div className="section-tag">Flagship Innovation</div>
              <h2 className="section-title">The Noiler Bird</h2>
              <p style={{ color: '#000', fontWeight: 500 }}>
                A key milestone in AFSH's R&amp;D journey is the development of
                the <strong>Noiler</strong> — a hardy, dual-purpose breed
                designed specifically for the Nigerian and African market.
                Noiler birds are bred to perform in both backyard and commercial
                farming environments.
              </p>
              <p style={{ marginTop: 14, color: '#000', fontWeight: 500 }}>
                Noiler birds bridge the gap between backyard and commercial
                farming, providing smallholder farmers with sustainable income,
                improved nutrition, and enhanced food security. Through
                continuous innovation, we remain committed to transforming the
                agricultural landscape with practical and impactful solutions.
              </p>
              <div className="noiler-highlights">
                {highlights.map((item) => (
                  <div className="noiler-highlight" key={item}>
                    <i className="fa-solid fa-circle-check"></i>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <Link to="/products" className="btn-primary" style={{ marginTop: 28 }}>
                Learn About Our Products &nbsp;
                <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="focus-section fade-in">
        <div className="section-inner">
          <div className="section-header" style={{ textAlign: 'center' }}>
            <div className="section-tag">What We Work On</div>
            <h2 className="section-title" style={{ color: 'var(--white)' }}>
              Our R&amp;D Focus Areas
            </h2>
            <p
              className="section-sub"
              style={{ color: 'rgba(255,255,255,0.65)', margin: '0 auto' }}
            >
              Every area of our research is driven by one goal — to give African
              farmers better birds and better outcomes.
            </p>
          </div>
          <div className="focus-grid">
            {focusAreas.map((area) => (
              <div className="focus-card" key={area.title}>
                <div className="focus-icon">
                  <i className={`fa-solid ${area.icon}`}></i>
                </div>
                <h3>{area.title}</h3>
                <p>{area.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="process-section fade-in">
        <div className="section-inner">
          <div className="section-header" style={{ textAlign: 'center' }}>
            <div className="section-tag">How We Do It</div>
            <h2 className="section-title">From Egg to Farm</h2>
            <p
              className="section-sub"
              style={{ margin: '0 auto', color: '#000', fontWeight: 400 }}
            >
              Every chick that leaves our hatchery goes through a rigorous,
              science-backed process designed to maximise quality and
              performance.
            </p>
          </div>
          <div className="process-steps">
            {steps.map((step, index) => (
              <Fragment key={step.number}>
                <div className="process-step">
                  <div className="step-number">{step.number}</div>
                  <div className="step-content">
                    <h4>{step.title}</h4>
                    <p>{step.text}</p>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="process-connector">
                    <i className="fa-solid fa-arrow-right"></i>
                  </div>
                )}
              </Fragment>
            ))}
          </div>
        </div>
      </section>

      <section className="rd-cta fade-in">
        <div className="section-inner">
          <div className="rd-cta-inner">
            <h2 className="section-title" style={{ color: 'var(--white)' }}>
              Want to Know More<br />About Our Research?
            </h2>
            <p
              style={{
                color: '#fff',
                fontSize: 15,
                fontWeight: 500,
                lineHeight: '25px',
                maxWidth: 520,
                margin: '0 auto 32px',
              }}
            >
              Our team is always happy to share insights on our breeds,
              technology, and farming best practices. Get in touch with us
              today.
            </p>
            <Link to="/contact" className="btn-white">
              Contact Us &nbsp;<i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}