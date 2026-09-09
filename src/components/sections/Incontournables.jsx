import { incontournables } from '../../data/site-data'
import Ornament from '../ui/Ornament'
import SectionTitle from '../ui/SectionTitle'
import PlaceholderImage from '../ui/PlaceholderImage'
import './Incontournables.css'

export default function Incontournables() {
  return (
    <section className="section-incontournables" id="incontournables">
      <div className="container">
        <SectionTitle
          title="Nos Incontournables"
          subtitle="Les créations que nos clients adorent"
          light
        />
        <Ornament />
        <div className="incontournables-grid">
          {incontournables.map((item) => (
            <div className="incontournable-card" key={item.titre}>
              <div className="incontournable-card-image">
                <PlaceholderImage
                  alt={item.titre}
                  src={item.image}
                  style={{ height: '100%' }}
                />
              </div>
              <div className="incontournable-card-content">
                <h3>{item.titre}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
