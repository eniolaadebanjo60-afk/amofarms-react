import { Link } from 'react-router-dom'
import '../styles/blog.css'

const post = {
  category: 'Events',
  date: 'May 12, 2026',
  read: '4 min read',
  titleLine1: 'Amo Farm Sieberer Hatchery',
  titleLine2: 'at NIPOLI EXPO 2026',
  author: 'AFSH Editorial Team',
  image: 'https://images.unsplash.com/photo-1585384090194-f7d42ccb2429?w=1200&q=80',
  tags: ['Events', 'NIPOLI', 'Poultry', 'Nigeria'],
}

const shareIcons = ['fa-facebook-f', 'fa-x-twitter', 'fa-linkedin-in', 'fa-whatsapp']

const recentPosts = [
  {
    id: 'getting-started',
    image: 'https://images.unsplash.com/photo-1569880153113-76e33fc52d5f?w=200&q=80',
    title: 'Getting Started in Poultry Farming',
    date: 'April 28, 2026',
  },
  {
    id: 'rising-feed-costs',
    image: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=200&q=80',
    title: 'Maximise Profits Despite Rising Feed Costs',
    date: 'March 15, 2026',
  },
  {
    id: 'why-noiler',
    image: 'https://images.unsplash.com/photo-1612170153139-6f881ff067e0?w=200&q=80',
    title: 'Why the Noiler is Best for Smallholder Farmers',
    date: 'February 20, 2026',
  },
]

const categories = [
  { name: 'Farming Tips', count: 4 },
  { name: 'Health & Biosecurity', count: 3 },
  { name: 'Products', count: 2 },
  { name: 'Business', count: 2 },
  { name: 'Events', count: 1 },
]

const relatedPosts = [
  {
    id: 'getting-started',
    image: 'https://images.unsplash.com/photo-1569880153113-76e33fc52d5f?w=600&q=80',
    category: 'Farming Tips',
    date: 'April 28, 2026',
    title: 'Getting Started in Poultry Farming',
    excerpt:
      'Everything you need to know before you invest in your first flock of day-old chicks.',
  },
  {
    id: 'why-noiler',
    image: 'https://images.unsplash.com/photo-1612170153139-6f881ff067e0?w=600&q=80',
    category: 'Products',
    date: 'February 20, 2026',
    title: 'Why the Noiler is Best for Smallholder Farmers',
    excerpt:
      "The Noiler's dual-purpose nature makes it a game-changer for smallholder farmers.",
  },
  {
    id: 'biosecurity-101',
    image: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=600&q=80',
    category: 'Health & Biosecurity',
    date: 'January 10, 2026',
    title: 'Biosecurity 101: Protect Your Flock from Disease',
    excerpt: 'A practical guide to setting up effective biosecurity on your poultry farm.',
  },
]

export default function BlogPost() {
  return (
    <div className="blog-page">
      {/* POST HERO */}
      <div className="post-hero">
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
            <h1>
              {post.titleLine1}
              <br />
              {post.titleLine2}
            </h1>
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
                <img src={post.image} alt={post.titleLine2} />
              </div>

              <div className="post-body">
                <p>
                  This year's NIPOLI EXPO brought together Nigeria's leading
                  names in poultry and livestock farming under one roof — and
                  Amo Farm Sieberer Hatchery Ltd. (AFSH) was proud to be among
                  them. Our team represented AFSH at this prestigious annual
                  event, showcasing our products, sharing our expertise, and
                  connecting with farmers, industry partners, and government
                  stakeholders from across the country.
                </p>

                <h2>Why NIPOLI EXPO Matters</h2>
                <p>
                  The Nigeria Poultry and Livestock Exhibition (NIPOLI) is the
                  nation's premier gathering for everyone in the agricultural
                  value chain — from feed manufacturers and veterinary suppliers
                  to commercial farmers and policy makers. For AFSH, it is a
                  critical platform to demonstrate our commitment to advancing
                  Nigeria's poultry industry and to hear directly from the
                  farmers we serve.
                </p>

                <h2>What We Showcased</h2>
                <p>
                  At our booth, visitors had the opportunity to learn about our
                  full range of day-old chick varieties — Pullets, Noilers,
                  Cockerels, and Broilers — as well as our ongoing Research and
                  Development work. Our team of agronomists and hatchery
                  specialists were on hand to answer technical questions and
                  offer practical advice on flock management, biosecurity, and
                  feeding programmes.
                </p>

                <blockquote>
                  &quot;The response from farmers at this year's expo was
                  incredible. People are hungry for reliable, quality chicks and
                  the kind of expert support AFSH provides. It reminded us why
                  we do what we do.&quot;
                  — AFSH Representative, NIPOLI EXPO 2026
                </blockquote>

                <h2>Key Highlights from the Event</h2>
                <p>
                  The three-day event was packed with panel discussions, product
                  demonstrations, and networking sessions. Some of the key
                  highlights for our team included:
                </p>
                <ul>
                  <li>
                    A live demonstration of our Noiler breed's performance data,
                    comparing growth rates and egg production against
                    conventional breeds
                  </li>
                  <li>
                    A Q&amp;A session with smallholder farmers on best practices
                    for raising Noilers in semi-intensive systems
                  </li>
                  <li>
                    Meetings with potential distribution partners to expand our
                    reach in the North-Central and North-West regions
                  </li>
                  <li>
                    Recognition from the event organisers for AFSH's
                    contribution to breed innovation in Nigeria
                  </li>
                </ul>

                <h2>Looking Ahead</h2>
                <p>
                  Events like NIPOLI EXPO remind us that the future of Nigerian
                  agriculture is bright — but it requires continued investment
                  in quality genetics, farmer education, and industry
                  collaboration. AFSH remains committed to being a driving force
                  in that future.
                </p>
                <p>
                  We look forward to returning next year with even more
                  innovations to share. In the meantime, if you have questions
                  about our products or want to place an order, our team is
                  always ready to help.
                </p>
              </div>

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
                      <img src={item.image} alt={item.title} />
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
                  <img src={item.image} alt={item.title} />
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