import Ornament from '../ui/Ornament'
import SectionTitle from '../ui/SectionTitle'
import './Contact.css'

const horaires = [
  { jour: 'Lundi - Samedi', heures: '6h30 — 20h30' },
  { jour: 'Dimanche', heures: 'Fermeture hebdomadaire' },
]

export default function Contact() {
  return (
    <section className="section-contact" id="contact">
      <div className="container">
        <SectionTitle
          title="Nous Trouver"
          subtitle="Au coeur d'Aulnay-sous-Bois"
        />
        <Ornament />
        <div className="contact-grid">
          <div className="contact-info">
            <h3>
              Retrouvez-<span>nous</span>
            </h3>
            <div className="contact-item">
              <div className="contact-item-icon">📍</div>
              <div className="contact-item-text">
                <h4>Adresse</h4>
                <p>
                  3 Pl. Jean-Claude Abrioux
                  <br />
                  93600 Aulnay-sous-Bois
                </p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-item-icon">📞</div>
              <div className="contact-item-text">
                <h4>Téléphone</h4>
                <p>01 48 45 XX XX</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-item-icon">✉️</div>
              <div className="contact-item-text">
                <h4>Email</h4>
                <p>contact@merveillesaulnay.fr</p>
              </div>
            </div>
            <div className="contact-hours">
              <h4>Horaires d&apos;ouverture</h4>
              {horaires.map((h) => (
                <div className="contact-hours-row" key={h.jour}>
                  <span>{h.jour}</span>
                  <span>{h.heures}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="contact-map">
            <iframe
              src="https://www.openstreetmap.org/export/embed.html?bbox=2.493%2C48.953%2C2.507%2C48.960&layer=mapnik&marker=48.9565%2C2.5000"
              title="Localisation Les Merveilles d'Aulnay"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
