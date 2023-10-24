import { useRef } from 'react'
import BrandsSlider from './components/BrandsSlider'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import {Home} from './components/Home'
import {Packages} from './components/Packages'
import {Services} from './components/Services'
import {Gallery} from './components/Gallery'


function App() {
  const homeRef = useRef(null);
  const locationsRef = useRef(null);
  const servicesRef = useRef(null);
  const galleryRef = useRef(null);

  const refs = {
    home: homeRef,
    locations: locationsRef,
    services: servicesRef,
    gallery: galleryRef
  }

  const scrollToSection = (referenceName) => {
    refs[referenceName].current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Header onScrollTo={scrollToSection} />
      <Home onScrollTo={scrollToSection} ref={homeRef} />
      <BrandsSlider />
      <Packages ref={locationsRef} />
      <Services ref={servicesRef} />
      <Gallery ref={galleryRef} />
      <Contact />
      <Footer onScrollTo={scrollToSection} />
    </>
  )
}

export default App