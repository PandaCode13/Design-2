import { galerie } from '../../data/site-data'
import Ornament from '../ui/Ornament'
import SectionTitle from '../ui/SectionTitle'
import PlaceholderImage from '../ui/PlaceholderImage'
import './Galerie.css'

export default function Galerie() {
  return (
    <section className="section-galerie" id="galerie">
      <div className="container">
        <SectionTitle
          title="Galerie"
          subtitle="Un aperçu de nos créations"
        />
        <Ornament />
        <div className="galerie-grid">
          {galerie.map((item) => (
            <div className="galerie-item" key={item.label}>
              <PlaceholderImage
                alt={item.label}
                src={item.image}
                style={{ height: '100%' }}
              />
              <div className="galerie-item-overlay">
                <span>{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
