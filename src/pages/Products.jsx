import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../styles/products.css'
import pullets from '../assets/pullets.jpg'
import noilers from '../assets/noilers.jpg'
import broilers from '../assets/broilers.jpg'
import whyNoiler from '../assets/why-noiler.jpg'
import hero1 from '../assets/hero1.jpg'

const introPoints = [
  {
    icon: 'fa-shield-halved',
    title: 'Strict Biosecurity',
    text: 'All chicks are produced under the highest biosecurity standards to ensure they are disease-free on arrival.',
  },
  {
    icon: 'fa-dna',
    title: 'Superior Genetics',
    text: 'We own and manage our parent stock, carefully selecting only the highest-performing breeding birds to produce healthy, high-quality day-old chicks.',
  },
  {
    icon: 'fa-truck-fast',
    title: 'Nationwide Delivery',
    text: 'With hatcheries in Oyo and Imo states, we ensure timely delivery of healthy chicks to farmers across Nigeria and even outside Nigeria.',
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
      'Amo Day-Old Chick Pullets Our pullets are bred from meticulously selected parent stock, which is reared in controlled cage environments from day one until culling. This method significantly reduces the risk of transmissible infections, ensuring the health and vitality of our pullets. Utilizing advanced Special Insemination Techniques, we guarantee the production of healthy, disease-free chicks that are primed for optimal growth and performance. Under Ideal Management system guarantees that:'
    ],
    features: [
      'Livability during rearing stage (0-17weeks) is 97%',
      'Birds start dropping eggs at their 16th-18th week',
      'Livability during laying stage (18-80week) is 94%',
      'Peak production is above 90%',
      'Hen-housed eggs per bird is 350 in 80 weeks',
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
      "Amo Day-Old Noilers Noiler was developed over several years through a pedigree breeding and selection program. Our Noilers are a unique breed offering a blend of characteristics from both broilers and layers. They are ideal for farmers looking for birds that can provide both meat and egg production. Noilers are developed to deliver balanced performance, with a focus on health and productivity",
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
    image: hero1,
    paragraphs: [
      'Amo day-old chick cockerels We provide high-quality cockerels that are bred for their superior genetic traits. These birds are ideal for those seeking strong, healthy males that can contribute to the next generation of poultry with enhanced performance and vitality. Under ideal management system guarantees:',
    ],
    features: [
      'Fast growth rate',
      'Average FCR of 1.69 to 1.70'
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
      'Amo Day-Old Broilers Our broilers are known for their exceptional growth rates, making them an ideal choice for efficient poultry farming. Parent stock is carefully managed in cage systems from day one through to culling, which minimizes disease risk. The chicks are produced using aseptic Artificial Insemination techniques, ensuring they are robust and high-performing. Under ideal management/rearing system guarantees:'
    ],
    features: [
      'Fast growth',
      'Over 2kg body weight in 37 to 38 days under open system',
      'Average Feed conversion ratio (FCR) of 1.69 to 1.70 implying 1kg flesh for every 1.69 to 1.70 feed taken',
      'Livability of above 97% to 98% in 37 to 38 days',
      'The average mortality up to 42 days is less than 3%',
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
            From high-laying pullets to hardy dual-purpose Noilers, every chick
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
                expertise. We don't just hatch chicks, we deliver the foundation
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