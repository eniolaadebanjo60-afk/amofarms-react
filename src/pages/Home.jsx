import { Link } from 'react-router-dom'
import '../styles/home.css'
import HeroSlider from '../components/HeroSlider'
import Testimonials from '../components/Testimonials'
import expo from '../assets/nipoli-expo.jpg'
import gettingStarted from '../assets/getting-started.jpg'
import feedCosts from '../assets/feed-costs.jpg'
import pullets from '../assets/pullets.jpg'
import noilers from '../assets/noilers.jpg'
import cockerels from '../assets/cockerels.jpg'
import broilers from '../assets/broilers.jpg'
import homeAbout from '../assets/home-about.jpg'
import research from '../assets/research.jpg'
import team from '../assets/team.jpg'


const stats = [
  { number: '2003', label: 'Established' },
  { number: '20+', label: 'Years of Excellence' },
  { number: '4', label: 'Chick Varieties' },
  { number: '3', label: 'Locations Nationwide' },
]

const features = [
  {
    icon: 'fa-medal',
    title: 'Premium Quality',
    text: 'Our commitment to premium quality sets us apart, making Amo chicks the top choice for exceptional performance and reliability.',
    to: '/about',
  },
  {
    icon: 'fa-flask',
    title: 'Innovative Production',
    text: 'We take pride in our innovative chick production techniques, which are unmatched in the industry.',
    to: '/rd',
    featured: true,
  },
  {
    icon: 'fa-headset',
    title: '24/7 Support',
    text: 'We are committed to providing comprehensive support at every stage of your journey with us.',
    to: '/contact',
  },
]

const products = [
  {
    title: 'Day-Old Pullets',
    text: 'High-laying potential layer chicks for commercial egg production.',
    image: pullets,
  },
  {
    title: 'Day-Old Noilers',
    text: 'Hardy dual-purpose breed for both egg and meat production.',
    image: noilers,
  },
  {
    title: 'Day-Old Cockerels',
    text: 'Fast-growing cockerels ideal for the free-range meat market.',
    image: cockerels,
  },
  {
    title: 'Day-Old Broilers',
    text: 'High-performance broiler chicks for commercial meat farming.',
    image: broilers,
  },
]

const posts = [
  {
    date: 'May 2026',
    title: 'Amo Farm at NIPOLI EXPO 2026',
    text: "Driving innovation in Nigeria's poultry and livestock sector at the nation's premier expo.",
    image: expo,
  },
  {
    date: 'April 2026',
    title: 'Getting Started in Poultry Farming',
    text: 'What every first-time farmer should know before investing in day-old chick production.',
    image: gettingStarted,
  },
  {
    date: 'March 2026',
    title: 'Maximise Profits Despite Rising Feed Costs',
    text: 'Practical strategies for Nigerian poultry farmers navigating a challenging economic climate.',
    image: feedCosts,
  },
]

export default function Home() {
  return (
    <div className="home-page">
      <HeroSlider />
      <div className="stats-strip fade-in">
        <div className="section-inner">
          <div className="stats-grid">
            {stats.map((stat) => (
              <div className="stat-item" key={stat.label}>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="features-section fade-in">
        <div className="section-inner">
          <div className="features-grid">
            {features.map((feature) => (
              <div
                key={feature.title}
                className={feature.featured ? 'feature-card featured' : 'feature-card'}
              >
                <div className="feature-icon">
                  <i className={`fa-solid ${feature.icon}`}></i>
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
                <Link to={feature.to} className="feature-link">
                  Learn More <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-section fade-in">
        <div className="section-inner">
          <div className="about-inner">
            <div className="about-image-wrap">
              <img
                src={homeAbout}
                alt="Day-old chick"
              />
              <div className="about-badge">
                <span className="badge-number">20+</span>
                <span className="badge-label">Years of Trust</span>
              </div>
            </div>
            <div className="about-text">
              <div className="section-tag">Who We Are</div>
              <h2 className="section-title">
                Quality You Can<br />Count On
              </h2>
              <p style={{ color: '#000', fontWeight: 500 }}>
                At Amo Farm Sieberer Hatchery Ltd. (AFSH), 
                we are committed to delivering the highest quality Day-Old Chicks in the industry. 
                Since our inception in 2003, 
                we have set the standard in poultry farming by combining innovative production techniques
                with state-of-the-art technology, ensuring superior quality and reliability for our customers.
              </p>
              <p style={{ marginTop: 9, fontWeight: 500, color: '#000' }}>
                We ensure superior quality and reliability for our customers
                farmers who trust us to give their flocks the best possible
                start.
              </p>
              <Link to="/about" className="btn-primary" style={{ marginTop: 28 }}>
                Read More &nbsp;<i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="products-section fade-in">
        <div className="section-inner">
          <div className="section-header" style={{ textAlign: 'center' }}>
            <div className="section-tag">What We Offer</div>
            <h2 className="section-title" style={{ color: 'var(--orange)' }}>
              Best Selling Products
            </h2>
          </div>
          <div className="products-grid">
            {products.map((product) => (
              <Link to="/products" className="product-card" key={product.title}>
                <div className="product-img">
                  <img src={product.image} alt={product.title} />
                  <div className="product-overlay">
                    <i className="fa-solid fa-arrow-right"></i>
                  </div>
                </div>
                <div className="product-info">
                  <h3>{product.title}</h3>
                  <p>{product.text}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="rd-section fade-in">
        <div className="section-inner">
          <div className="rd-inner">
            <div className="rd-text">
              <div
                className="section-tag"
                style={{ color: '#fff', borderColor: '#fff' }}
              >
                Research &amp; Development
              </div>
              <h2 className="section-title" style={{ color: 'var(--white)' }}>
                Advancing Poultry<br />Science in Africa
              </h2>
              <p style={{ color: '#fff', fontWeight: 500, fontSize: 15, lineHeight: '25px' }}>
                At Amo Farm Sieberer Hatchery Ltd., innovation and excellence drive our Research and Development (R&D) 
                efforts to advance poultry farming and meet evolving customer needs. 
                A key milestone is the development of Noiler, a hardy, 
                dual-purpose breed for both egg and meat production.
              </p>
              <p
                style={{
                  color: '#fff',
                  fontWeight: 500,
                  fontSize: 15,
                  lineHeight: '25px',
                  marginTop: 14,
                }}
              >
                Noiler birds bridge the gap between backyard and commercial farming, 
                providing smallholder farmers with sustainable income, improved nutrition, 
                and enhanced food security. 
                Through continuous innovation, we remain committed to transforming the agricultural landscape 
                with practical and impactful solutions.
              </p>
              <Link to="/rd" className="btn-white" style={{ marginTop: 28 }}>
                Read More &nbsp;<i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
            <div className="rd-image-wrap">
              <img
                src={research}
                alt="Research"
              />
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      <section className="join-section fade-in">
        <div className="section-inner">
          <div className="join-inner">
            <img
              src={team}
              alt="AFSH Team"
              className="join-image"
            />
            <div className="join-text">
              <div
                className="section-tag"
                style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.4)' }}
              >
                Careers
              </div>
              <h2 className="section-title" style={{ color: 'var(--white)' }}>
                Join Our Team
              </h2>
              <p style={{ color: '#fff', fontSize: 15, fontWeight: 500, lineHeight: '25px' }}>
                At Amo Farm, we regard our people as our greatest asset. 
                We are dedicated to fostering a safe, motivating, 
                and innovative work environment that helps our team thrive.
              </p>
              <Link to="/careers" className="btn-white" style={{ marginTop: 28 }}>
                Discover More &nbsp;<i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-section fade-in">
        <div className="section-inner">
          <div className="section-header" style={{ textAlign: 'center' }}>
            <div className="section-tag">Latest Updates</div>
            <h2 className="section-title">
              Get the Latest News<br />&amp; Industry Updates
            </h2>
          </div>
          <div className="blog-grid">
            {posts.map((post) => (
              <Link to="/blog" className="blog-card" key={post.title}>
                <div className="blog-img">
                  <img src={post.image} alt={post.title} />
                </div>
                <div className="blog-info">
                  <span className="blog-date">{post.date}</span>
                  <h3>{post.title}</h3>
                  <p>{post.text}</p>
                  <span className="blog-link">
                    Read More <i className="fa-solid fa-arrow-right"></i>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-strip fade-in">
        <div className="section-inner">
          <div className="contact-strip-inner">
            <div className="contact-strip-text">
              <h2>
                Have a Question? <span>Let's Talk.</span>
              </h2>
              <p>
                Whether you need product information, expert advice, or want to
                partner with us — our team is ready to help.
              </p>
            </div>
            <Link to="/contact" className="btn-home">
              Contact Us &nbsp;<i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}