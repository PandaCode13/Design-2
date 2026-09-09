import { produits } from '../../data/site-data'
import Ornament from '../ui/Ornament'
import SectionTitle from '../ui/SectionTitle'
import PlaceholderImage from '../ui/PlaceholderImage'
import './Produits.css'

export default function Produits() {
  return (
    <section className="section-produits" id="produits">
      <div className="container">
        <SectionTitle
          title="Nos Métiers"
          subtitle="Trois passions, une seule exigence"
          light
        />
        <Ornament />
        <div className="produits-grid">
          {produits.map((produit) => (
            <div className="produit-card" key={produit.titre}>
              <div className="produit-card-image">
                <PlaceholderImage
                  alt={produit.placeholder}
                  src={produit.image}
                  style={{ height: '100%' }}
                />
              </div>
              <div className="produit-card-content">
                <h3>{produit.titre}</h3>
                <p>{produit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
