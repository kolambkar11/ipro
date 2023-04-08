import React from 'react'
import HeroSection from '../herosection/HeroSection'
import Contact from '../contact/Contact';
import Featuresection from '../featuresection/FeatureSection';
import CtaSection from '../ctasection/CtaSection';
import Services from '../services/Services';
import ImageSlider from '../imageslider/ImageSlider';



function Home() {
  return (
    <>
      <HeroSection />
      <Featuresection />
      <Services />
      <CtaSection/>
      <Contact />
    </>
    
  )
}

export default Home