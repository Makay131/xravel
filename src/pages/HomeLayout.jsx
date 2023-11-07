import { useRef, useState } from 'react';

import BrandsSlider from '../components/BrandsSlider'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Header from '../components/Header'
import {Home} from '../components/Home'
import {Packages} from '../components/Packages'
import {Services} from '../components/Services'
import {Gallery} from '../components/Gallery'
import { Navigate, useLoaderData } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

function HomeLayout() {
    const [showModal, setShowModal] = useState(false);

    const {packages, gallery} = useLoaderData();

    const {onlineUser} = useAuth();

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

    if(onlineUser !== null) return <Navigate to="/app/locations" replace={true} />

    return (
        <>
            <Header onScrollTo={scrollToSection} showModal={showModal} onShowModal={setShowModal} />
            <Home onScrollTo={scrollToSection} ref={homeRef} />
            <BrandsSlider />
            <Packages ref={locationsRef} onShowModal={setShowModal} data={packages} />
            <Services ref={servicesRef} />
            <Gallery ref={galleryRef} data={gallery} />
            <Contact />
            <Footer onScrollTo={scrollToSection} />
        </>
    )
}
export default HomeLayout
