import './index.css'
import './styles/base.css'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import Histoire from './components/sections/Histoire'
import Produits from './components/sections/Produits'
import Incontournables from './components/sections/Incontournables'
import Galerie from './components/sections/Galerie'
import Avis from './components/sections/Avis'
import Contact from './components/sections/Contact'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Histoire />
        <Produits />
        <Incontournables />
        <Galerie />
        <Avis />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
