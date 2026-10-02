import { useEffect, useRef, useState } from 'react'
import amobyng from '../assets/AMOBYNG-LOGO.png'
import natnudo from '../assets/Natnudo-LOGO.png'
import diversay from '../assets/Diversay-Sol.png'
import dslp from '../assets/DSLP-Logo.png'
import noiler from '../assets/Noiler-Logo.png'

const companies = [
  { name: 'AmoBY', logo: amobyng, url: 'https://amobyng.com.ng/' },
  { name: 'Natnudo Foods', logo: natnudo, url: 'https://natnudofoods.com/' },
  { name: 'Diversay Solutions', logo: diversay, url: 'https://diversaysolutions.com/' },
  { name: 'DSL Pharma', logo: dslp, url: 'https://dslpharma.com/' },
  { name: 'Noiler', logo: noiler, url: 'https://noiler.net/' },
]

const GAP = 24 
function slideTrack(track, direction) {
  if (!track || !track.firstElementChild) return

  const step = track.firstElementChild.offsetWidth + GAP
  const atStart = track.scrollLeft <= 5
  const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 5

  if (direction === 1 && atEnd) {
    track.scrollTo({ left: 0, behavior: 'smooth' })
  } else if (direction === -1 && atStart) {
    track.scrollTo({ left: track.scrollWidth, behavior: 'smooth' })
  } else {
    track.scrollBy({ left: direction * step, behavior: 'smooth' })
  }
}

export default function SisterCompanies() {
  const trackRef = useRef(null)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (paused || reduceMotion) return

    const timer = setInterval(() => slideTrack(trackRef.current, 1), 3500)
    return () => clearInterval(timer)
  }, [paused])

  return (
    <div className="sister-section">
      <div className="section-inner">
        <h3>Our Sister Companies</h3>

        <div
          className="sister-slider"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          <button
            className="sister-btn sister-prev"
            aria-label="Previous companies"
            onClick={() => slideTrack(trackRef.current, -1)}
          >
            <i className="fa-solid fa-chevron-left"></i>
          </button>

          <div className="sister-track" ref={trackRef}>
            {companies.map((company) => (
              <a
                key={company.name}
                href={company.url}
                target="_blank"
                rel="noreferrer"
                className="sister-logo-box"
              >
                <img src={company.logo} alt={company.name} />
              </a>
            ))}
          </div>

          <button
            className="sister-btn sister-next"
            aria-label="Next companies"
            onClick={() => slideTrack(trackRef.current, 1)}
          >
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </div>
  )
}