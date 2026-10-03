import { useEffect, useRef } from 'react'
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

// the list twice, so the row can loop without a visible jump
const loopList = [...companies, ...companies]

const GAP = 24
const SPEED = 1 // pixels per frame, raise it to go faster

// exact width of one full set of logos
function getPeriod(track) {
  return track.children[companies.length].offsetLeft - track.children[0].offsetLeft
}

export default function SisterCompanies() {
  const trackRef = useRef(null)
  const pausedRef = useRef(false)
  const manualUntil = useRef(0)

  useEffect(() => {
    const track = trackRef.current
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let frameId

    const tick = () => {
      const period = getPeriod(track)

      if (!pausedRef.current && !reduceMotion && Date.now() > manualUntil.current) {
        track.scrollLeft += SPEED
      }

      // passed the first set? silently move back by one set
      if (track.scrollLeft >= period) {
        track.scrollLeft -= period
      }

      frameId = requestAnimationFrame(tick)
    }

    frameId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frameId)
  }, [])

  function slide(direction) {
    const track = trackRef.current
    const period = getPeriod(track)
    const step = track.children[0].offsetWidth + GAP

    // stop the auto-movement while the smooth scroll finishes
    manualUntil.current = Date.now() + 700

    // going back from the start: jump forward one set first, then slide back
    if (direction === -1 && track.scrollLeft < step) {
      track.scrollTo({ left: track.scrollLeft + period, behavior: 'auto' })
    }

    track.scrollBy({ left: direction * step, behavior: 'smooth' })
  }

  return (
    <div className="sister-section">
      <div className="section-inner">
        <h3>Our Sister Companies</h3>

        <div
          className="sister-slider"
          onMouseEnter={() => (pausedRef.current = true)}
          onMouseLeave={() => (pausedRef.current = false)}
        >
          <button
            className="sister-btn sister-prev"
            aria-label="Previous companies"
            onClick={() => slide(-1)}
          >
            <i className="fa-solid fa-chevron-left"></i>
          </button>

          <div className="sister-track" ref={trackRef}>
            {loopList.map((company, index) => (
              <a
                key={index}
                href={company.url}
                target="_blank"
                rel="noreferrer"
                className="sister-logo-box"
                aria-hidden={index >= companies.length}
                tabIndex={index >= companies.length ? -1 : 0}
              >
                <img src={company.logo} alt={company.name} />
              </a>
            ))}
          </div>

          <button
            className="sister-btn sister-next"
            aria-label="Next companies"
            onClick={() => slide(1)}
          >
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </div>
  )
}