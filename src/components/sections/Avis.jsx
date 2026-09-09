import { avis } from '../../data/site-data'
import Ornament from '../ui/Ornament'
import SectionTitle from '../ui/SectionTitle'
import './Avis.css'

export default function Avis() {
  return (
    <section className="section-avis" id="avis">
      <div className="container">
        <SectionTitle
          title="Ce que disent nos clients"
          subtitle="Leur confiance est notre plus belle récompense"
          light
        />
        <Ornament />
        <div className="avis-grid">
          {avis.map((item) => (
            <div className="avis-card" key={item.author}>
              <div className="avis-quote">&ldquo;</div>
              <div className="avis-stars">{'★'.repeat(item.stars)}</div>
              <p className="avis-text">&ldquo;{item.text}&rdquo;</p>
              <div className="avis-author">{item.author}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
