import { histoireImage } from '../../data/site-data'
import PlaceholderImage from '../ui/PlaceholderImage'
import './Histoire.css'

export default function Histoire() {
  return (
    <section className="section-histoire" id="histoire">
      <div className="container">
        <div className="histoire-grid">
          <div className="histoire-image">
            <PlaceholderImage
              alt="Façade de la boulangerie"
              src={histoireImage}
              style={{ height: '400px', borderRadius: '4px' }}
            />
          </div>
          <div className="histoire-text">
            <h2>
              Notre <span>histoire</span>
            </h2>
            <p>
              Depuis des années, Les Merveilles d&apos;Aulnay perpétue la
              tradition de la boulangerie artisanale au coeur
              d&apos;Aulnay-sous-Bois. Chaque matin, nos artisans
              boulanger-pâtissier se lèvent avant l&apos;aube pour vous offrir
              le meilleur de leur savoir-faire.
            </p>
            <p>
              Notre engagement est simple : des ingrédients de qualité, des
              recettes traditionnelles, et cette touche d&apos;originalité qui
              fait la différence. Car chez nous, chaque sortie de four est une
              petite célébration.
            </p>
            <p>
              De la pâte à pain au levain naturel aux créations pâtissières les
              plus audacieuses, nous mettons notre passion au service de vos
              moments de bonheur.
            </p>
            <div className="histoire-signature">
              — La famille des Merveilles
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
