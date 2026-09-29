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

export default function SisterCompanies() {
  return (
    <div className="sister-section">
      <div className="section-inner">
        <h3>Our Sister Companies</h3>
        <div className="sister-logos">
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
      </div>
    </div>
  )
}