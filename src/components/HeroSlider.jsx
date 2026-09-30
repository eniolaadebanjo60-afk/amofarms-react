import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import hero1 from '../assets/hero1.jpg'
import hero2 from '../assets/hero2.jpg'
import hero3 from '../assets/hero3.jpg'

const slides = [
  {
    image: hero1,
    tag: "Nigeria's #1 Hatchery",
    line1: 'Quality Chicks,',
    line2: 'Thriving Farms.',
    text: "Amo Farm is Nigeria's trusted name in day-old chick production, delivering top-quality chicks to support successful poultry farming across Africa.",
    primary: { label: 'Explore Products', to: '/products' },
    secondary: { label: 'Who We Are', to: '/about' },
  },
  {
    image: hero2,
    tag: 'Cutting-Edge Technology',
    line1: 'Innovation at',
    line2: 'Every Stage.',
    text: 'With precision-controlled incubation and rigorous biosecurity measures, we ensure high hatch rates and disease-free chicks for your farm.',
    primary: { label: 'Our R&D', to: '/rd' },
    secondary: { label: 'Contact Us', to: '/contact' },
  },
  {
    image: hero3,
    tag: 'Expanding Across Africa',
    line1: 'Growing Together',
    line2: 'Across Africa.',
    text: 'From Nigeria to the continent — Amo Farm is committed to transforming agriculture and food security across Africa, one flock at a time.',
    primary: { label: 'Learn More', to: '/about' },
    secondary: { label: 'Join Our Team', to: '/careers' },
  },
]

export default function HeroSlider() {
  const [current, setCurrent] = useState(0)

  function goTo(index) {
    setCurrent((index + slides.length) % slides.length)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrent((c) => (c + 1) % slides.length)
    }, 5000)
    return () => clearTimeout(timer)
  }, [current])

  return (
    <div className="hero-slider">
      <div className="hero-slides">
        {slides.map((slide, index) => (
          <div
            key={slide.tag}
            className={index === current ? 'hero-slide active' : 'hero-slide'}
            style={{ backgroundImage: `url('${slide.image}')` }}
          >
            <div className="hero-overlay"></div>
            <div className="hero-content">
              <div className="hero-tag">{slide.tag}</div>
              <h1>
                {slide.line1}
                <br />
                <span>{slide.line2}</span>
              </h1>
              <p>{slide.text}</p>
              <div className="hero-btns">
                <Link to={slide.primary.to} className="btn-primary">
                  {slide.primary.label} &nbsp;<i className="fa-solid fa-arrow-right"></i>
                </Link>
                <Link to={slide.secondary.to} className="btn-outline">
                  {slide.secondary.label}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        className="slider-btn slider-prev"
        aria-label="Previous slide"
        onClick={() => goTo(current - 1)}
      >
        <i className="fa-solid fa-chevron-left"></i>
      </button>
      <button
        className="slider-btn slider-next"
        aria-label="Next slide"
        onClick={() => goTo(current + 1)}
      >
        <i className="fa-solid fa-chevron-right"></i>
      </button>

      <div className="slider-dots">
        {slides.map((slide, index) => (
          <button
            key={slide.tag}
            className={index === current ? 'slider-dot active' : 'slider-dot'}
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => goTo(index)}
          ></button>
        ))}
      </div>
    </div>
  )
}