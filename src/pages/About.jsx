import '../styles/about.css'
import homeAbout from '../assets/home-about.jpg'

const stats = [
  { number: '2003', label: 'Founded' },
  { number: '20+', label: 'Years of Excellence' },
  { number: '3', label: 'Locations' },
]

const mvCards = [
  {
    icon: 'fa-bullseye',
    title: 'Our Mission',
    text: 'At Amo Farm Sieberer Hatchery Ltd, our primary goal is to provide the highest quality day-old chicks that set the foundation for your success. We are committed to producing and delivering chicks that are not only healthy but also exhibit exceptional growth potential and optimal feed conversion rates.',
  },
  {
    icon: 'fa-eye',
    title: 'Our Vision',
    featured: true,
    text: "To be Africa's most trusted and innovative hatchery, transforming food security, rural livelihoods, and the agricultural landscape across the continent through world-class poultry science and production.",
  },
  {
    icon: 'fa-handshake',
    title: 'Our Promise',
    text: 'Every chick we produce is a commitment to quality, to the farmer, and to the communities that depend on healthy, affordable protein. We stand behind every flock, every time.',
  },
]

const values = [
  { icon: 'fa-shield-halved', title: 'Integrity', text: 'We hold ourselves to the highest ethical standards, honest and transparent in everything we do.' },
  { icon: 'fa-star', title: 'Excellence', text: 'From chick quality to customer service, we set high standards and relentlessly work to exceed them.' },
  { icon: 'fa-lightbulb', title: 'Innovation', text: 'Creativity and forward-thinking drive us to deliver groundbreaking solutions in poultry farming.' },
  { icon: 'fa-circle-check', title: 'Accountability', text: 'We take ownership of our actions and commitments, always improving to achieve our goals.' },
  { icon: 'fa-leaf', title: 'Sustainability', text: 'We are committed to responsible farming practices that protect our environment and communities.' },
]

const locations = [
  {
    icon: 'fa-building',
    title: 'Head Office',
    line1: '133A & B Bashiru Shittu Street,',
    line2: 'Magodo Phase II, Lagos State',
  },
  {
    icon: 'fa-egg',
    title: 'Hatchery — Oyo State',
    featured: true,
    line1: '1 Amo Road, Awe,',
    line2: 'Oyo State, Nigeria',
  },
  {
    icon: 'fa-egg',
    title: 'Hatchery — Imo State',
    line1: '190 Wetheral Road,',
    line2: 'Owerri, Imo State, Nigeria',
  },
]

export default function About() {
  return (
    <div className="about-page">
      <div className="page-hero">
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <div
            className="section-tag"
            style={{ color: '#fff', borderColor: '#fff' }}
          >
            Who We Are
          </div>
          <h1>
            The Source You<br />
            <span>Can Trust</span>
          </h1>
          <p>
           At Amo Farm Sieberer Hatchery Ltd. (AFSH), our commitment to excellence is at the core 
           of everything we do. Since our inception in 2003, we have dedicated ourselves to producing 
           Day-Old Chicks and Point of Cage Pullets that set the standard for quality in the poultry 
           industry. 
          </p>
        </div>
      </div>

      <section className="story-section fade-in">
        <div className="section-inner">
          <div className="story-inner">
            <div className="story-text">
              <div className="section-tag">Our Story</div>
              <h2 className="section-title">
                Built on Quality,<br />Driven by Purpose
              </h2>
              <p>
                Welcome to Amo Farm, where excellence in poultry production is our hallmark. 
                Established in 2003, our hatcheries have been at the forefront of delivering superior Day-Old Chicks 
                and Point of Cage Pullets to meet the needs of farmers and poultry enthusiasts alike.
                We are passionate about fostering the growth and health of your poultry from the very start. 
                Our state-of-the-art facilities are equipped with cutting-edge technology and follow the highest standards of biosecurity and care. 
                This ensures that every chick we produce is of the highest quality, ready to thrive and contribute to your farm’s success.
              </p>
              <p>
                Amo Farm Sieberer Hatchery Ltd, founded in 2003, 
                carries a legacy that traces back to 1960. Initially operating as Amo Farm Industries 
                Ltd., the company underwent a significant transformation in 2003 under the leadership of a 
                new management team, led by our Group Managing Director, Dr. Ayoola Oduntan. 
                These changes have shaped the company into the innovative organization it is today.
              </p>
              <div className="story-stats">
                {stats.map((stat) => (
                  <div className="story-stat" key={stat.label}>
                    <span className="stat-n">{stat.number}</span>
                    <span className="stat-l">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="story-image-wrap">
              <img
                src={homeAbout}
                alt="Amo Farm chick"
              />
              <div className="story-badge">
                <i className="fa-solid fa-award"></i>
                <span>Nigeria's Leading Hatchery</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mv-section fade-in">
        <div className="section-inner">
          <div className="mv-grid">
            {mvCards.map((card) => (
              <div
                key={card.title}
                className={card.featured ? 'mv-card featured' : 'mv-card'}
              >
                <div className="mv-icon">
                  <i className={`fa-solid ${card.icon}`}></i>
                </div>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="values-section fade-in">
        <div className="section-inner">
          <div className="section-header" style={{ textAlign: 'center' }}>
            <div className="section-tag" style={{ borderBottom: '2px solid #fff', color: '#fff' }}>
              What Guides Us
            </div>
            <h2 className="section-title" style={{ color: 'var(--white)' }}>
              Our Core Values
            </h2>
            <p
              className="section-sub"
              style={{ color: '#fff', fontWeight: 500, margin: '0 auto' }}
            >
              These principles shape everything we do from how we hatch our
              chicks to how we serve our customers.
            </p>
          </div>
          <div className="values-grid">
            {values.map((value) => (
              <div className="value-card" key={value.title}>
                <div className="value-icon">
                  <i className={`fa-solid ${value.icon}`}></i>
                </div>
                <h4>{value.title}</h4>
                <p>{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="locations-section fade-in">
        <div className="section-inner">
          <div className="section-header" style={{ textAlign: 'center' }}>
            <div className="section-tag">Where We Are</div>
            <h2 className="section-title">Our Locations</h2>
            <p
              className="section-sub"
              style={{ margin: '0 auto', fontWeight: 500, color: '#000' }}
            >
              Strategically positioned across Nigeria to serve farmers
              efficiently and ensure timely delivery of quality chicks.
            </p>
          </div>
          <div className="locations-grid">
            {locations.map((loc) => (
              <div
                key={loc.title}
                className={loc.featured ? 'location-card featured' : 'location-card'}
              >
                <div className="location-icon">
                  <i className={`fa-solid ${loc.icon}`}></i>
                </div>
                <h4>{loc.title}</h4>
                <p>
                  {loc.line1}
                  <br />
                  {loc.line2}
                </p>
                <div className="location-contact">
                  <span><i className="fa-solid fa-phone"></i> +234 700 6000 600</span>
                  <span><i className="fa-solid fa-envelope"></i> info@afshltd.com</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}