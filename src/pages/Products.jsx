import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../styles/products.css'
import pullets from '../assets/pullets.jpg'
import noilers from '../assets/noilers.jpg'
import cockerels from '../assets/cockerels.jpg'
import broilers from '../assets/broilers.jpg'
import whyNoiler from '../assets/why-noiler.jpg'

const introPoints = [
  {
    icon: 'fa-shield-halved',
    title: 'Strict Biosecurity',
    text: 'All chicks are produced under the highest biosecurity standards to ensure they are disease-free on arrival.',
  },
  {
    icon: 'fa-dna',
    title: 'Superior Genetics',
    text: 'We source parent stock from world-class genetic suppliers to guarantee consistent performance across every flock.',
  },
  {
    icon: 'fa-truck-fast',
    title: 'Nationwide Delivery',
    text: 'With hatcheries in Oyo and Imo states, we ensure timely delivery of healthy chicks to farmers across Nigeria.',
  },
]

const products = [
  {
    id: 'pullets',
    number: '01',
    tag: 'Layer Chicks',
    title: 'Day-Old Pullets',
    image: pullets,
    paragraphs: [
      'Our Day-Old Pullets are high-performance layer chicks bred for exceptional egg production. Sourced from premium genetic lines, these birds are known for their early maturity, consistent laying cycles, and strong feed-to-egg conversion ratios.',
      'Whether you are running a small backyard farm or a large commercial layer operation, our pullets give you the reliable foundation you need for a profitable poultry business.',
    ],
    features: [
      'High egg production potential',
      'Early sexual maturity',
      'Excellent feed conversion',
      'Strong disease resistance',
      'Suitable for all farm sizes',
    ],
  },
  {
    id: 'noilers',
    number: '02',
    tag: 'Dual-Purpose Breed',
    title: 'Day-Old Noilers',
    image: noilers,
    reverse: true,
    paragraphs: [
      "The Noiler is Amo Farm's flagship innovation — a hardy dual-purpose breed developed specifically for the Nigerian and African market. Designed for both egg and meat production, Noilers bridge the gap between backyard and commercial farming.",
      'With superior adaptability to local conditions, strong disease resistance, and excellent growth rates, Noilers are the preferred choice for smallholder farmers looking to maximise income with minimal input costs.',
    ],
    features: [
      'Dual-purpose: eggs and meat',
      'Thrives in local conditions',
      'Low input cost, high returns',
      'Excellent foraging ability',
      'Ideal for smallholder farmers',
    ],
  },
  {
    id: 'cockerels',
    number: '03',
    tag: 'Free-Range Meat',
    title: 'Day-Old Cockerels',
    image: cockerels,
    paragraphs: [
      'Our Day-Old Cockerels are fast-growing birds ideal for the free-range and indigenous chicken meat market. Known for their robust build, rich flavour, and adaptability to semi-intensive systems, they are a top choice for farmers targeting the premium live-bird market.',
      'AFSH cockerels perform consistently well under Nigerian climate conditions, with strong immunity and a natural ability to forage — reducing overall feed costs for the farmer.',
    ],
    features: [
      'Fast growth rate',
      'Rich meat flavour',
      'Strong foraging ability',
      'Adapts to semi-intensive systems',
      'High market demand',
    ],
  },
  {
    id: 'broilers',
    number: '04',
    tag: 'Commercial Meat',
    title: 'Day-Old Broilers',
    image: broilers,
    reverse: true,
    paragraphs: [
      'Our Day-Old Broilers are high-performance commercial meat birds bred for rapid growth, efficient feed conversion, and excellent carcass yield. Perfect for intensive broiler production systems, these birds are the go-to choice for commercial poultry farmers.',
      'AFSH broilers are vaccinated and prepared to the highest standards before leaving our hatchery, ensuring your birds arrive healthy, active, and ready to perform from day one.',
    ],
    features: [
      'Rapid weight gain',
      'Excellent feed-to-meat conversion',
      'High carcass yield',
      'Vaccinated before dispatch',
      'Ideal for intensive systems',
    ],
  },
]

export default function Products() {
  const { hash } = useLocation()

  useEffect(() => {
    if (hash) {
      document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [hash])

  return (
    <div className="products-page">
      <div className="page-hero">
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <div
            className="section-tag"
            style={{ color: '#fff', borderColor: '#fff' }}
          >
            What We Offer
          </div>
          <h1>
            Our <span>Products</span>
          </h1>
          <p style={{ color: '#fff', fontWeight: 500 }}>
            From high-laying pullets to hardy dual-purpose Noilers — every chick
            we produce is raised to give your farm the best possible start.
          </p>
        </div>
      </div>

      <section className="intro-section fade-in">
        <div className="section-inner">
          <div className="intro-inner">
            <div className="intro-text">
              <div className="section-tag">Why Choose AFSH Chicks</div>
              <h2 className="section-title">
                Built for Performance,<br />Bred for Your Farm
              </h2>
              <p style={{ color: '#000', fontWeight: 500 }}>
                At Amo Farm Sieberer Hatchery, every day-old chick is the result
                of precision genetics, strict biosecurity, and decades of
                expertise. We don't just hatch chicks — we deliver the foundation
                of a thriving poultry business.
              </p>
            </div>
            <div className="intro-points">
              {introPoints.map((point) => (
                <div className="intro-point" key={point.title}>
                  <div className="point-icon">
                    <i className={`fa-solid ${point.icon}`}></i>
                  </div>
                  <div>
                    <h4>{point.title}</h4>
                    <p>{point.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {products.map((product, index) => {
        const image = (
          <div className="product-image-wrap">
            <img src={product.image} alt={product.title} />
            <div className="product-label">{product.title}</div>
          </div>
        )

        const text = (
          <div className="product-text">
            <div className="product-number">{product.number}</div>
            <div className="section-tag">{product.tag}</div>
            <h2 className="section-title">{product.title}</h2>
            {product.paragraphs.map((para) => (
              <p key={para}>{para}</p>
            ))}
            <div className="product-features">
              {product.features.map((feature) => (
                <div className="product-feature" key={feature}>
                  <i className="fa-solid fa-check"></i>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <Link to="/contact" className="btn-primary" style={{ marginTop: 28 }}>
              Order Now &nbsp;<i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
        )

        return (
          <section
            key={product.id}
            id={product.id}
            className={
              index % 2 === 1
                ? 'product-section alt-bg fade-in'
                : 'product-section fade-in'
            }
          >
            <div className="section-inner">
              <div className="product-inner">
                {image}
                {text}
              </div>
            </div>
          </section>
        )
      })}

      <section className="order-cta fade-in">
        <div className="section-inner">
          <div className="order-cta-inner">
            <div className="order-cta-text">
              <div
                className="section-tag"
                style={{ color: '#fff', borderColor: '#fff' }}
              >
                Place an Order
              </div>
              <h2 className="section-title" style={{ color: 'var(--white)' }}>
                Ready to Stock<br />Your Farm?
              </h2>
              <p style={{ color: '#fff', fontSize: 15, fontWeight: 400, lineHeight: '25px' }}>
                Contact our sales team today to place your order or get expert
                advice on the best chick variety for your farm type and location.
              </p>
              <div className="order-cta-btns">
                <Link to="/contact" className="btn-white">
                  Contact Sales &nbsp;<i className="fa-solid fa-arrow-right"></i>
                </Link>
                <a href="tel:+2347006000600" className="btn-outline">
                  <i className="fa-solid fa-phone"></i>&nbsp; +234 700 6000 600
                </a>
              </div>
            </div>
            <div className="order-cta-image">
              <img
                src={whyNoiler}
                alt="Order chicks"
              />
            </div>
          </div>
        </div>
        </section>
    </div>
  )
}