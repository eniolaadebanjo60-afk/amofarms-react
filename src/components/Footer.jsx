import { Link } from 'react-router-dom'

export default function Footer() {
    const year = new Date().getFullYear()
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo-text">
              <strong>Amo Farm Sieberer Hatchery Ltd.</strong>
              <small>The Source You Can Trust</small>
            </div>
            <p>
              Established in 2003, AFSH is dedicated to providing the finest
              Day-Old Chicks in the industry. Innovation, quality, and
              reliability — every flock, every time.
            </p>
            <div className="footer-socials">
              <a href="https://www.facebook.com/OfficialAFSH" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="https://www.instagram.com/officialafsh" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/company/amo-farm-sieberer-hatchery-limited/" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">Who We Are</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/rd">Research &amp; Development</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Our Products</h4>
            <ul>
              <li><Link to="/products#pullets">Day-Old Pullets</Link></li>
              <li><Link to="/products#noilers">Day-Old Noilers</Link></li>
              <li><Link to="/products#cockerels">Day-Old Cockerels</Link></li>
              <li><Link to="/products#broilers">Day-Old Broilers</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact Info</h4>
            <address>
              <strong>Phone</strong>
              +234 700 6000 600
              <strong>Email</strong>
              info@afshltd.com
              <strong>Head Office</strong>
              133A &amp; B Bashiru Shittu Street,<br />Magodo Phase II, Lagos
              <strong>Hatchery — Oyo</strong>
              1 Amo Road, Awe, Oyo State
              <strong>Hatchery — Imo</strong>
              190 Wetheral Road, Owerri, Imo State
            </address>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {year} Amo Farm Sieberer Hatchery Ltd. All rights reserved.</span>
        </div>
      </div>
    </footer>
  )
}