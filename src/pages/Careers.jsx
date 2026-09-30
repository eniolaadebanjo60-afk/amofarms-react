import { useState } from 'react'
import '../styles/careers.css'
import jobs from '../data/jobs'
import whywork from '../assets/why-work.jpg'
import team from '../assets/team.jpg'

const whyPoints = [
  {
    title: 'Inspiring Team',
    text: 'Join a passionate and committed team where enthusiasm and innovation drive success every day.',
  },
  {
    title: 'Supportive Environment',
    text: 'We provide a safe, inclusive workplace with opportunities for growth, learning, and recognition.',
  },
  {
    title: 'Equal Opportunity',
    text: 'We are committed to equal employment and do not discriminate based on race, religion, gender, or any protected characteristic.',
  },
  {
    title: 'Competitive Compensation',
    text: 'Attractive salary packages, performance bonuses, and benefits that recognise your contribution.',
  },
]

const talentTags = [
  { icon: 'fa-handshake', label: 'Trustworthiness' },
  { icon: 'fa-rocket', label: 'Dedication' },
  { icon: 'fa-comments', label: 'Honesty' },
  { icon: 'fa-paintbrush', label: 'Creativity' },
  { icon: 'fa-dumbbell', label: 'Diligence' },
  { icon: 'fa-chart-line', label: 'Productivity' },
  { icon: 'fa-people-group', label: 'Teamwork' },
  { icon: 'fa-lock', label: 'Confidentiality' },
  { icon: 'fa-bullseye', label: 'Goal-Oriented' },
]

export default function Careers() {
  const [openIndex, setOpenIndex] = useState(null)

  function toggleJob(index, event) {
    const card = event.currentTarget.parentElement
    const opening = openIndex !== index
    setOpenIndex(opening ? index : null)

    if (opening) {
      setTimeout(() => {
        card.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
      }, 60)
    }
  }

  return (
    <div className="careers-page">
      <div className="page-hero">
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <div className="hero-tag">We're Hiring</div>
          <h1>
            Careers at<br />
            <span>Amo Farm</span>
          </h1>
          <p>
            Join Nigeria's leading poultry hatchery and be part of a team
            transforming agriculture across Africa. Your talent matters here.
          </p>
          <a href="#opportunities" className="btn-primary">
            View Open Roles &nbsp;<i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>

      <section className="why-section fade-in">
        <div className="section-inner">
          <div className="why-inner">
            <div className="why-left">
              <div className="section-tag">Why AFSH</div>
              <h2 className="section-title" style={{ color: 'var(--text)' }}>
                Why Work With Us?
              </h2>
              <p className="section-sub">
                We are always on the lookout for passionate and talented
                individuals to join our growing team. We continuously seek new
                talent and advertise job opportunities across all our
                locations.
              </p>
              <p className="sec-note">
                When you join us, you become part of a workplace that offers:
              </p>

              <div className="why-points">
                {whyPoints.map((point) => (
                  <div className="why-point" key={point.title}>
                    <div className="why-point-timeline">
                      <div className="why-dot">
                        <i className="fa-solid fa-check"></i>
                      </div>
                      <div className="why-line"></div>
                    </div>
                    <div className="why-body">
                      <h4>{point.title}</h4>
                      <p>{point.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="why-right">
              <img
                src={whywork}
                alt="AFSH team"
                className="why-image"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="join-section fade-in">
        <div className="section-inner">
          <div className="join-inner">
            <img
              src={team}
              alt="Professional at AFSH"
              className="join-image"
            />
            <div className="join-text">
              <div className="section-tag">Our People</div>
              <h2 className="section-title">Join Our Team</h2>
              <p>
                At Amo Farm Sieberer Hatchery, we regard our people as our
                greatest asset. We are dedicated to fostering a safe,
                motivating, and innovative work environment that helps our team
                thrive.
              </p>
              <p style={{ marginTop: 14 }}>
                From hatchery operations to research, sales, and administration
                — every role at AFSH contributes to a mission that feeds
                millions across Africa. We believe great teams are built on
                trust, purpose, and a shared commitment to excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="jobs-section fade-in" id="opportunities">
        <div className="section-inner">
          <div className="section-header">
            <div className="section-tag">Open Roles</div>
            <h2 className="section-title">Current Opportunities</h2>
            <p className="section-sub" style={{ color: '#000', fontWeight: 500 }}>
              Explore our open positions and find your next career opportunity
              with Amo Farm. Click any role to see the full description and
              requirements.
            </p>
          </div>

          <div className="jobs-list">
            {jobs.map((job, index) => {
              const isOpen = openIndex === index

              return (
                <div
                  className={isOpen ? 'job-card active' : 'job-card'}
                  key={job.title}
                >
                  <div className="job-header" onClick={(e) => toggleJob(index, e)}>
                    <div className="job-left">
                      <div className="job-title">{job.title}</div>
                      <p className="job-about">{job.about}</p>
                      <div className="job-purpose-label">Job Purpose</div>
                      <p className="job-summary">{job.summary}</p>
                      <div className="job-meta">
                        <div className="job-meta-item">
                          <i className="fa-solid fa-location-dot"></i> {job.location}
                        </div>
                        <div className="job-meta-item">
                          <i className="fa-solid fa-calendar-days"></i> Deadline:{' '}
                          {job.deadline}
                        </div>
                        <span className={`job-badge ${job.badge}`}>{job.type}</span>
                      </div>
                    </div>
                    <div
                      className={
                        isOpen ? 'job-toggle-icon rotated' : 'job-toggle-icon'
                      }
                    >
                      <i className="fa-solid fa-chevron-down"></i>
                    </div>
                  </div>

                  <div className={isOpen ? 'job-dropdown open' : 'job-dropdown'}>
                    <div className="job-desc-inner">
                      <div className="job-desc-block">
                        <h4>Roles &amp; Responsibilities</h4>
                        <ul>
                          {job.responsibilities.map((item) => (
                            <li key={item} dangerouslySetInnerHTML={{ __html: item }} />
                          ))}
                        </ul>
                      </div>
                      <div className="job-desc-block">
                        <h4>Requirements</h4>
                        <ul>
                          {job.requirements.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="job-desc-block how-to-apply">
                        <h4>How to Apply</h4>
                        <p dangerouslySetInnerHTML={{ __html: job.howToApply }} />
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {jobs.length === 0 && (
            <div className="no-jobs-msg" style={{ display: 'block' }}>
              <i className="fa-regular fa-folder-open"></i>
              No openings at the moment. Please check back soon.
            </div>
          )}
        </div>
      </section>

      <section className="apply-banner fade-in">
        <div className="section-inner">
          <div className="apply-banner-inner">
            <div className="apply-banner-text">
              <div
                className="section-tag"
                style={{ color: '#fff', borderColor: '#fff' }}
              >
                Get In Touch
              </div>
              <h2 className="section-title" style={{ color: 'var(--white)' }}>
                Ready to Join Us?
              </h2>
              <p
                style={{
                  color: '#fff',
                  fontSize: 15,
                  fontWeight: 350,
                  lineHeight: '25px',
                }}
              >
                If you are interested in advancing your career with Amo Farm
                Sieberer Hatchery Ltd, please submit your CV and a cover letter
                to our recruitment team. We look forward to welcoming you.
              </p>
            </div>
            <div className="apply-email-btn static">
              <i className="fa-solid fa-envelope"></i>
              recruitment@rmandc.com
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}