import { heroImage } from '../../data/site-data'
import PlaceholderImage from '../ui/PlaceholderImage'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="accueil">
      <PlaceholderImage
        alt="Boulangerie artisanale"
        className="hero-bg"
        src={heroImage}
      />
      <div className="hero-overlay" />
      <div className="hero-content">
        <div className="hero-badge">
          Boulangerie &bull; Pâtisserie &bull; Confiserie
        </div>
        <h1 className="hero-title">Les Merveilles d&apos;Aulnay</h1>
        <p className="hero-tagline">
          Boulangerie <span>•</span> Pâtisserie <span>•</span> Confiserie
        </p>
        <p className="hero-description">
          Une adresse gourmande au coeur d&apos;Aulnay-sous-Bois
        </p>
        <a href="#produits" className="hero-cta">
          Découvrir nos créations
        </a>
      </div>
      <div className="hero-scroll">
        <span>Défiler</span>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  )
}
