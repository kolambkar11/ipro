import React from "react";
import HeroSection from "../herosection/HeroSection";
import Contact from "../contact/Contact";
import Featuresection from "../featuresection/FeatureSection";
import CtaSection from "../ctasection/CtaSection";
import Services from "../services/Services";
import Workwithus from "../workwitus/Workwithus";

import ImageSlider from "../imageslider/ImageSlider";
import HomeServicesBlock from "../allservices/homeservices/Homeservicesblock";
import Testimonial from "../testimonial/Testimonial";
import Cstimeline from "../cstimeline/Cstimeline";

function Home() {
  return (
    <>
      <HeroSection />
      <Featuresection />
      <HomeServicesBlock />
      {/* <Services /> */}
      <Workwithus />
      <Testimonial />
      <CtaSection />
    </>
  );
}

export default Home;
