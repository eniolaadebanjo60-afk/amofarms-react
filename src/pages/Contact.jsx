import { useState } from 'react'
import '../styles/contact.css'

const contactCards = [
  {
    icon: 'fa-solid fa-phone',
    title: 'Call Us',
    text: 'Our team is available Monday to Friday, 8am – 5pm.',
    linkText: '+234 700 6000 600',
    href: 'tel:+2347006000600',
  },
  {
    icon: 'fa-solid fa-envelope',
    title: 'Email Us',
    text: "Send us a message and we'll get back to you within 24 hours.",
    linkText: 'info@afshltd.com',
    href: 'mailto:info@afshltd.com',
    featured: true,
  },
  {
    icon: 'fa-solid fa-location-dot',
    title: 'Visit Us',
    text: '133A & B Bashiru Shittu Street, Magodo Phase II, Lagos.',
    linkText: 'Get Directions',
    href: 'https://maps.google.com',
    external: true,
  },
  {
    icon: 'fa-brands fa-whatsapp',
    title: 'WhatsApp',
    text: 'Prefer to chat? Reach us directly on WhatsApp.',
    linkText: 'Chat With Us',
    href: 'https://wa.me/2347006000600',
    external: true,
  },
]

const locations = [
  {
    key: 'lagos',
    tab: 'Head Office',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.0!2d3.3792!3d6.6018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMzYnMDYuNSJOIDPCsDIyJzQ1LjEiRQ!5e0!3m2!1sen!2sng!4v1234567890',
    address: '133A & B Bashiru Shittu Street, Magodo Phase II, Lagos State',
    hours: 'Monday – Friday: 8:00am – 5:00pm',
  },
  {
    key: 'oyo',
    tab: 'Oyo Hatchery',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.0!2d3.9!3d7.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwNTQnMDAuMCJOIDPCsDU0JzAwLjAiRQ!5e0!3m2!1sen!2sng!4v1234567890',
    address: '1 Amo Road, Awe, Oyo State, Nigeria',
    hours: 'Monday – Saturday: 7:00am – 5:00pm',
  },
  {
    key: 'imo',
    tab: 'Imo Hatchery',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.0!2d7.03!3d5.48!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwMjgnNDguMCJOIDfCsDAyJzA2LjAiRQ!5e0!3m2!1sen!2sng!4v1234567890',
    address: '190 Wetheral Road, Owerri, Imo State, Nigeria',
    hours: 'Monday – Saturday: 7:00am – 5:00pm',
  },
]

const socials = [
  { icon: 'fa-brands fa-facebook-f', label: 'Facebook', href: 'https://www.facebook.com/OfficialAFSH' },
  { icon: 'fa-brands fa-instagram', label: 'Instagram', href: 'https://www.instagram.com/officialafsh' },
  {
    icon: 'fa-brands fa-linkedin-in',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/amo-farm-sieberer-hatchery-limited/',
  },
  { icon: 'fa-brands fa-x-twitter', label: 'Twitter / X', href: '#' },
]

const subjects = [
  'Product Enquiry',
  'Place an Order',
  'Technical Support',
  'Partnership / Distribution',
  'General Enquiry',
]

export default function Contact() {
  const [activeLocation, setActiveLocation] = useState('lagos')
  const [sent, setSent] = useState(false)

  const current = locations.find((loc) => loc.key === activeLocation)

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.currentTarget

    // ─────────────────────────────────────────────────────────────
    // BACKEND GOES HERE (for the IT team):
    // const data = Object.fromEntries(new FormData(form))
    // -> data = { firstName, lastName, email, phone, subject, message }
    // Send `data` to the server here, and only continue if it succeeds.
    // ─────────────────────────────────────────────────────────────

    setSent(true)
    form.reset()
  }

  return (
    <div className="contact-page">
      <div className="page-hero">
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <div
            className="section-tag"
            style={{ color: '#fff', borderColor: '#fff' }}
          >
            Get In Touch
          </div>
          <h1>
            Contact <span>Us</span>
          </h1>
          <p style={{ color: '#fff', fontWeight: 500 }}>
            Have a question, want to place an order, or need expert advice? Our
            team is ready to help you every step of the way.
          </p>
        </div>
      </div>

      <section className="contact-cards-section fade-in">
        <div className="section-inner">
          <div className="contact-cards">
            {contactCards.map((card) => (
              <div
                key={card.title}
                className={card.featured ? 'contact-card featured' : 'contact-card'}
              >
                <div className="contact-card-icon">
                  <i className={card.icon}></i>
                </div>
                <h4>{card.title}</h4>
                <p>{card.text}</p>
                <a
                  href={card.href}
                  target={card.external ? '_blank' : undefined}
                  rel={card.external ? 'noreferrer' : undefined}
                >
                  {card.linkText}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-main fade-in">
        <div className="section-inner">
          <div className="contact-main-inner">
            {/* FORM */}
            <div className="contact-form-wrap">
              <div className="section-tag">Send a Message</div>
              <h2 className="section-title">
                We'd Love to<br />Hear From You
              </h2>
              <p className="section-sub" style={{ color: '#000', fontWeight: 500 }}>
                Fill in the form below and one of our team members will get back
                to you as soon as possible.
              </p>

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      placeholder="e.g. Emeka"
                      className="form-input"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      placeholder="e.g. Okonkwo"
                      className="form-input"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    className="form-input"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+234 000 000 0000"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <select
                    id="subject"
                    name="subject"
                    className="form-input form-select"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select a subject
                    </option>
                    {subjects.map((subject) => (
                      <option key={subject}>{subject}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-input form-textarea"
                    placeholder="Tell us how we can help you..."
                    rows={5}
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn-primary"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  Send Message &nbsp;<i className="fa-solid fa-paper-plane"></i>
                </button>

                {sent && (
                  <div className="form-success" style={{ display: 'flex' }}>
                    <i className="fa-solid fa-circle-check"></i>
                    Your message has been sent! We'll get back to you within 24
                    hours.
                  </div>
                )}
              </form>
            </div>

            <div className="contact-info-wrap">
              <div className="section-tag">Our Locations</div>
              <h2 className="section-title">Find Us</h2>

              <div className="location-tabs">
                {locations.map((loc) => (
                  <button
                    key={loc.key}
                    className={activeLocation === loc.key ? 'loc-tab active' : 'loc-tab'}
                    onClick={() => setActiveLocation(loc.key)}
                  >
                    {loc.tab}
                  </button>
                ))}
              </div>

              <div className="location-detail active">
                <div className="loc-map">
                  <iframe
                    key={current.key}
                    title={current.tab}
                    src={current.map}
                    width="100%"
                    height="220"
                    style={{ border: 0, borderRadius: 10 }}
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
                <div className="loc-details">
                  <div className="loc-detail-item">
                    <i className="fa-solid fa-location-dot"></i>
                    <span>{current.address}</span>
                  </div>
                  <div className="loc-detail-item">
                    <i className="fa-solid fa-phone"></i>
                    <span>+234 700 6000 600</span>
                  </div>
                  <div className="loc-detail-item">
                    <i className="fa-solid fa-envelope"></i>
                    <span>info@afshltd.com</span>
                  </div>
                  <div className="loc-detail-item">
                    <i className="fa-solid fa-clock"></i>
                    <span>{current.hours}</span>
                  </div>
                </div>
              </div>

              <div className="contact-socials">
                <h4>Follow Us</h4>
                <div className="social-links">
                  {socials.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className={social.icon}></i> {social.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}