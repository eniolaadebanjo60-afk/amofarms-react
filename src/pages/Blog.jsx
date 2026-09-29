import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/blog.css'
import farm from '../assets/farm.jpg'
import broiler from '../assets/broiler.jpg'

const featuredPost = {
  id: 'nipoli-expo-2026',
  image: farm,
  category: 'Events',
  date: 'May 12, 2026',
  read: '4 min read',
  title: 'Amo Farm Sieberer Hatchery at NIPOLI EXPO 2026',
  excerpt:
    "Our team represented AFSH at this year's NIPOLI EXPO, Nigeria's premier poultry and livestock exhibition. Here's a full recap of our participation, the conversations we had, and what it means for the future of poultry farming in Nigeria.",
}

const posts = [
  {
    id: 'getting-started',
    image: 'https://images.unsplash.com/photo-1569880153113-76e33fc52d5f?w=600&q=80',
    alt: 'Poultry Farming',
    category: 'Farming Tips',
    date: 'April 28, 2026',
    read: '5 min read',
    title: 'Getting Started in Poultry Farming: What Every First-Time Farmer Should Know',
    excerpt:
      "Thinking about starting a poultry farm? Here's everything you need to know before you invest in your first flock of day-old chicks.",
  },
  {
    id: 'rising-feed-costs',
    image: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=600&q=80',
    alt: 'Feed Costs',
    category: 'Business',
    date: 'March 15, 2026',
    read: '6 min read',
    title: 'How to Maximise Profits Despite Rising Feed Costs in Nigeria',
    excerpt:
      'Practical strategies for Nigerian poultry farmers navigating a challenging economic climate without sacrificing flock performance.',
  },
  {
    id: 'why-noiler',
    image: 'https://images.unsplash.com/photo-1612170153139-6f881ff067e0?w=600&q=80',
    alt: 'Noiler',
    category: 'Products',
    date: 'February 20, 2026',
    read: '4 min read',
    title: 'Why the Noiler is the Best Bird for Smallholder Farmers in Nigeria',
    excerpt:
      "The Noiler's unique dual-purpose nature makes it a game-changer for farmers looking to maximise income from both eggs and meat.",
  },
  {
    id: 'biosecurity-101',
    image: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=600&q=80',
    alt: 'Biosecurity',
    category: 'Health & Biosecurity',
    date: 'January 10, 2026',
    read: '7 min read',
    title: 'Biosecurity 101: How to Protect Your Flock from Disease Outbreaks',
    excerpt:
      "Disease outbreaks are one of the biggest risks in poultry farming. Here's a practical guide to setting up effective biosecurity on your farm.",
  },
  {
    id: 'vaccination-schedules',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&q=80',
    alt: 'Vaccination',
    category: 'Health & Biosecurity',
    date: 'December 5, 2025',
    read: '5 min read',
    title: 'Vaccination Schedules for Day-Old Chicks: A Complete Guide',
    excerpt:
      'Getting your vaccination programme right from day one is critical to flock health and productivity. Our experts break it all down.',
  },
  {
    id: 'broiler-farming',
    image: broiler,
    alt: 'Broiler farming',
    category: 'Farming Tips',
    date: 'November 18, 2025',
    read: '6 min read',
    title: 'Broiler Farming in Nigeria: From Day-Old Chick to Market in 6 Weeks',
    excerpt:
      'A step-by-step guide to raising broilers profitably — from housing and feeding to managing weight gain and planning for market day.',
  },
]

export default function Blog() {
  const [page, setPage] = useState(1)
  const totalPages = 3

  return (
    <div className="blog-page">
      <div className="page-hero">
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <div
            className="section-tag"
            style={{ color: '#fff', borderColor: '#fff' }}
          >
            Latest Updates
          </div>
          <h1>
            News &amp; <span>Insights</span>
          </h1>
          <p style={{ color: '#fff', fontWeight: 500 }}>
            Stay up to date with the latest news, farming tips, industry
            insights, and updates from Amo Farm Sieberer Hatchery.
          </p>
        </div>
      </div>

      <section className="featured-post fade-in">
        <div className="section-inner">
          <Link to={`/blog/${featuredPost.id}`} className="featured-card">
            <div className="featured-image">
              <img src={featuredPost.image} alt="NIPOLI EXPO" />
              <div className="featured-badge">Featured</div>
            </div>
            <div className="featured-content">
              <div className="post-meta">
                <span className="post-category">{featuredPost.category}</span>
                <span className="post-date">
                  <i className="fa-regular fa-calendar"></i> {featuredPost.date}
                </span>
                <span className="post-read">
                  <i className="fa-regular fa-clock"></i> {featuredPost.read}
                </span>
              </div>
              <h2>{featuredPost.title}</h2>
              <p style={{ color: '#000', fontWeight: 500 }}>
                {featuredPost.excerpt}
              </p>
              <span className="post-link">
                Read Full Article <i className="fa-solid fa-arrow-right"></i>
              </span>
            </div>
          </Link>
        </div>
      </section>

      <section className="blog-listing fade-in">
        <div className="section-inner">
          <div className="section-header">
            <div className="section-tag">All Articles</div>
            <h2 className="section-title">Latest from the Blog</h2>
          </div>

          <div className="blog-grid">
            {posts.map((post) => (
              <Link to={`/blog/${post.id}`} className="blog-card" key={post.id}>
                <div className="blog-card-img">
                  <img src={post.image} alt={post.alt} />
                  <span className="card-category">{post.category}</span>
                </div>
                <div className="blog-card-body">
                  <div className="post-meta">
                    <span className="post-date">
                      <i className="fa-regular fa-calendar"></i> {post.date}
                    </span>
                    <span className="post-read">
                      <i className="fa-regular fa-clock"></i> {post.read}
                    </span>
                  </div>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <span className="post-link">
                    Read More <i className="fa-solid fa-arrow-right"></i>
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="pagination">
            {[1, 2, 3].map((number) => (
              <button
                key={number}
                className={page === number ? 'page-btn active' : 'page-btn'}
                onClick={() => setPage(number)}
              >
                {number}
              </button>
            ))}
            <button
              className="page-btn page-next"
              onClick={() => setPage(Math.min(page + 1, totalPages))}
            >
              Next <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </section>

      <section className="newsletter-section fade-in">
        <div className="section-inner">
          <div className="newsletter-inner">
            <div className="newsletter-text">
              <div
                className="section-tag"
                style={{ color: '#fff', borderColor: '#fff' }}
              >
                Stay Informed
              </div>
              <h2 className="section-title" style={{ color: 'var(--white)' }}>
                Get Farm Tips &amp;<br />Updates in Your Inbox
              </h2>
              <p style={{ color: '#fff', fontSize: 15, fontWeight: 500, lineHeight: '25px' }}>
                Subscribe to the AFSH newsletter and receive expert farming
                advice, product updates, and industry news — delivered straight
                to your email.
              </p>
            </div>
            <div className="newsletter-form">
              <div className="form-group">
                <input type="text" placeholder="Your full name" className="form-input" />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your email address" className="form-input" />
              </div>
              <button
                className="btn-white"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                Subscribe Now &nbsp;<i className="fa-solid fa-arrow-right"></i>
              </button>
              <p className="form-note" style={{ color: '#fff', fontWeight: 400 }}>
                We respect your privacy. No spam, ever.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}