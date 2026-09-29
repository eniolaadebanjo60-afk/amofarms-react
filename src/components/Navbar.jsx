import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/AMOfarm-LOGO.png'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const linkClass = ({ isActive }) => (isActive ? 'active' : '')
  const closeMenu = () => setOpen(false)

  return (
    <nav>
      <Link to="/" className="nav-logo" onClick={closeMenu}>
        <img src={logo} alt="AFSH Logo" />
      </Link>

      <button
        className="menu-toggle"
        aria-label="Toggle menu"
        onClick={() => setOpen(!open)}
      >
        <i className={open ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'}></i>
      </button>

      <ul className={open ? 'nav-links open' : 'nav-links'}>
        <li><NavLink to="/about" className={linkClass} onClick={closeMenu}>Who We Are</NavLink></li>
        <li><NavLink to="/products" className={linkClass} onClick={closeMenu}>Products</NavLink></li>
        <li><NavLink to="/rd" className={linkClass} onClick={closeMenu}>Research &amp; Development</NavLink></li>
        <li><NavLink to="/blog" className={linkClass} onClick={closeMenu}>Blog</NavLink></li>
        <li><NavLink to="/contact" className={linkClass} onClick={closeMenu}>Contact</NavLink></li>
        <li><NavLink to="/careers" className={linkClass} onClick={closeMenu}>Careers</NavLink></li>
      </ul>
    </nav>
  )
}