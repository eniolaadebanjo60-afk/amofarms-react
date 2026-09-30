import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/blog.css'
import posts from '../data/posts'

const featuredPost = posts.find((post) => post.featured)
const listPosts = posts.filter((post) => !post.featured)

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
            {listPosts.map((post) => (
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