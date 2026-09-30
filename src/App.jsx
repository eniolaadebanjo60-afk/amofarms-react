import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import SisterCompanies from './components/SisterCompanies'
import Footer from './components/Footer'
import Home from './pages/Home'
import useFadeIn from './hooks/useFadeIn'
import About from './pages/About'
import Products from './pages/Products'
import RD from './pages/RD'
import Blog from './pages/Blog'
import ScrollToTop from './components/ScrollToTop'
import Careers from './pages/Careers'
import Contact from './pages/Contact'
import BlogPost from './pages/BlogPost'

export default function App() {
  useFadeIn()
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/rd" element={<RD />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <SisterCompanies />
      <Footer />
    </>
  )
}