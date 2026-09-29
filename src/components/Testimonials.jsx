import { useState, useEffect } from 'react'

const testimonials = [
  {
    initials: 'CO',
    name: 'Chidi Onu',
    role: 'Poultry Farmer, Anambra',
    text: `"Amo Farm is not just about good birds; their customer service is also very good. From the time I order to when I receive my chicks, their team is always ready to help. I trust Amo Farm, and I will continue to buy from them."`,
  },
  {
    initials: 'SI',
    name: 'Salisu Ibrahim',
    role: 'Poultry Farmer, Kano',
    text: `"Amo Farm's Noiler chickens have really helped my business. They are strong, grow fast, and bring good profit. Their chicks are always healthy, and I don't have issues with them. I will always recommend Amo Farm to other farmers."`,
  },
  {
    initials: 'GO',
    name: 'Grace Olorunda',
    role: 'Poultry Farmer, Ogun',
    text: `"I have been buying chicks from Amo Farm for years, and they are always strong and healthy. They grow well, and I don't lose many of them. That's why I keep buying from Amo Farm. If you want good birds for your farm, they are the best choice."`,
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  function goTo(index) {
    setCurrent((index + testimonials.length) % testimonials.length)
  }

  // Auto-advance every 6 seconds (restarts after any change)
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrent((c) => (c + 1) % testimonials.length)
    }, 6000)
    return () => clearTimeout(timer)
  }, [current])

  return (
    <section className="testimonials-section fade-in">
      <div className="section-inner">
        <div className="section-header" style={{ textAlign: 'center' }}>
          <div className="section-tag">Customer Stories</div>
          <h2 className="section-title" style={{ color: 'var(--orange)' }}>
            Customers Feedback
          </h2>
        </div>

        <div className="testimonials-slider">
          <div
            className="testimonials-track"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {testimonials.map((item) => (
              <div className="testimonial-card" key={item.name}>
                <div className="testimonial-quote">
                  <i className="fa-solid fa-quote-left"></i>
                </div>
                <p>{item.text}</p>
                <div className="testimonial-author">
                  <div className="author-avatar">{item.initials}</div>
                  <div>
                    <strong>{item.name}</strong>
                    <span>{item.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="t-btn t-prev" aria-label="Previous" onClick={() => goTo(current - 1)}>
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <button className="t-btn t-next" aria-label="Next" onClick={() => goTo(current + 1)}>
            <i className="fa-solid fa-chevron-right"></i>
          </button>

          <div className="t-dots">
            {testimonials.map((item, index) => (
              <button
                key={item.name}
                className={index === current ? 'slider-dot active' : 'slider-dot'}
                aria-label={`Go to testimonial ${index + 1}`}
                onClick={() => goTo(index)}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}