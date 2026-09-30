import { Link, useParams } from 'react-router-dom'
import '../styles/blog.css'
import posts from '../data/posts'

const shareIcons = ['fa-facebook-f', 'fa-x-twitter', 'fa-linkedin-in', 'fa-whatsapp']

const categories = [
  { name: 'Farming Tips', count: 4 },
  { name: 'Health & Biosecurity', count: 3 },
  { name: 'Products', count: 2 },
  { name: 'Business', count: 2 },
  { name: 'Events', count: 1 },
]

function renderBlock(block, index) {
  switch (block.type) {
    case 'h2':
      return <h2 key={index}>{block.text}</h2>
    case 'quote':
      return (
        <blockquote key={index}>
          &quot;{block.text}&quot;
          — {block.cite}
        </blockquote>
      )
    case 'list':
      return (
        <ul key={index}>
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )
    default:
      return <p key={index}>{block.text}</p>
  }
}

export default function Blogpost() {
  const { id } = useParams()
  const post = posts.find((item) => item.id === id)

  if (!post) {
    return (
      <div className="blog-page">
        <div className="section-inner" style={{ padding: '120px 48px', textAlign: 'center' }}>
          <h2 className="section-title">Article not found</h2>
          <p className="section-sub" style={{ margin: '0 auto 28px' }}>
            Sorry, we couldn't find the article you were looking for.
          </p>
          <Link to="/blog" className="btn-primary">
            Back to Blog
          </Link>
        </div>
      </div>
    )
  }

  const otherPosts = posts.filter((item) => item.id !== post.id)
  const recentPosts = otherPosts.slice(0, 3)
  const relatedPosts = otherPosts.slice(3, 6)

  return (
    <div className="blog-page">
      <div
        className="post-hero"
        style={{ backgroundImage: `url('${post.image}')` }}
      >
        <div className="post-hero-overlay"></div>
        <div className="section-inner">
          <div className="post-hero-content">
            <div className="post-breadcrumb">
              <Link to="/blog">Blog</Link>
              <i className="fa-solid fa-chevron-right"></i>
              <span>{post.category}</span>
            </div>
            <div className="post-meta" style={{ margin: '16px 0' }}>
              <span className="post-category">{post.category}</span>
              <span className="post-date" style={{ color: 'rgba(255,255,255,0.7)' }}>
                <i className="fa-regular fa-calendar"></i> {post.date}
              </span>
              <span className="post-read" style={{ color: 'rgba(255,255,255,0.7)' }}>
                <i className="fa-regular fa-clock"></i> {post.read}
              </span>
            </div>
            <h1>{post.title}</h1>
            <div className="post-author">
              <div className="author-avatar-sm">AF</div>
              <span>
                By <strong>{post.author}</strong>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="post-body-wrap">
        <div className="section-inner">
          <div className="post-layout">
            <article className="post-content fade-in">
              <div className="post-featured-img">
                <img src={post.image} alt={post.alt} />
              </div>

              <div className="post-body">{post.body.map(renderBlock)}</div>

              <div className="post-tags">
                <span>Tags:</span>
                {post.tags.map((tag) => (
                  <a href="#" key={tag}>
                    {tag}
                  </a>
                ))}
              </div>

              <div className="post-share">
                <span>Share this article:</span>
                <div className="share-btns">
                  {shareIcons.map((icon) => (
                    <a href="#" className="share-btn" key={icon}>
                      <i className={`fa-brands ${icon}`}></i>
                    </a>
                  ))}
                </div>
              </div>

              <Link to="/blog" className="back-link">
                <i className="fa-solid fa-arrow-left"></i> Back to Blog
              </Link>
            </article>

            <aside className="post-sidebar fade-in">
              <div className="sidebar-card">
                <h4>Recent Posts</h4>
                <div className="sidebar-posts">
                  {recentPosts.map((item) => (
                    <Link to={`/blog/${item.id}`} className="sidebar-post" key={item.id}>
                      <img src={item.image} alt={item.alt} />
                      <div>
                        <p>{item.title}</p>
                        <span>{item.date}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="sidebar-card sidebar-categories">
                <h4>Categories</h4>
                <ul>
                  {categories.map((cat) => (
                    <li key={cat.name}>
                      <a href="#">
                        {cat.name} <span>{cat.count}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="sidebar-card sidebar-cta">
                <h4>Ready to Order?</h4>
                <p>
                  Get in touch with our sales team to place your order or get
                  expert advice on the best chick variety for your farm.
                </p>
                <Link
                  to="/contact"
                  className="btn-primary"
                  style={{ width: '100%', justifyContent: 'center', marginTop: 16 }}
                >
                  Contact Us
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </div>

      <section className="related-posts fade-in">
        <div className="section-inner">
          <div className="section-header">
            <div className="section-tag">Keep Reading</div>
            <h2 className="section-title">Related Articles</h2>
          </div>
          <div className="related-grid">
            {relatedPosts.map((item) => (
              <Link to={`/blog/${item.id}`} className="blog-card" key={item.id}>
                <div className="blog-card-img">
                  <img src={item.image} alt={item.alt} />
                  <span className="card-category">{item.category}</span>
                </div>
                <div className="blog-card-body">
                  <div className="post-meta">
                    <span className="post-date">
                      <i className="fa-regular fa-calendar"></i> {item.date}
                    </span>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.excerpt}</p>
                  <span className="post-link">
                    Read More <i className="fa-solid fa-arrow-right"></i>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}