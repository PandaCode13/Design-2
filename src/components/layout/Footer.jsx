import './Footer.css'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-brand">
          <div className="logo-main">Les Merveilles d&apos;Aulnay</div>
          <div className="logo-sub">Aux Délices de la Place</div>
          <p>
            Boulangerie, pâtisserie et confiserie artisanale au coeur
            d&apos;Aulnay-sous-Bois. Le goût du vrai depuis toujours.
          </p>
        </div>
        <div className="footer-col">
          <h4>Navigation</h4>
          <a href="#accueil">Accueil</a>
          <a href="#histoire">Notre histoire</a>
          <a href="#produits">Nos produits</a>
          <a href="#galerie">Galerie</a>
          <a href="#avis">Avis clients</a>
          <a href="#contact">Nous trouver</a>
        </div>
        <div className="footer-col">
          <h4>Contact</h4>
          <a href="tel:+0148450000">01 48 45 XX XX</a>
          <a href="mailto:contact@merveillesaulnay.fr">
            contact@merveillesaulnay.fr
          </a>
          <a href="#contact">3 Pl. Jean-Claude Abrioux</a>
          <a href="#contact">93600 Aulnay-sous-Bois</a>
        </div>
      </div>
      <a href="#accueil" className="footer-back-top" aria-label="Retour à l'accueil">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 19V5M5 12l7-7 7 7" />
        </svg>
      </a>
      <div className="footer-bottom">
        <span>
          &copy; {new Date().getFullYear()} Les Merveilles d&apos;Aulnay —
          Tous droits réservés
        </span>
        <span>Fait avec amour et artisanat</span>
      </div>
    </footer>
  )
}
