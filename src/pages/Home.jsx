import React from "react";

import HeroSection from "../Components/herosection";
import FeaturesStrip from "../Components/Featuresstrip";
import Collectionsgrid from "../Components/Collectionsgrid";
import Bridalbanner from "../Components/Bridalbanner";
import Testimonials from "../Components/Testimonials";

const Home = () => {
  return (
    <div
      style={{
        fontFamily: "'Playfair Display', 'Georgia', serif",
        background: "#0a0603",
        color: "#f5e6c8",
        minHeight: "100vh",
        overflowX: "hidden",
      }}>
      <HeroSection />
      <hr className="divider-gold" style={{ margin: "0 5%" }} />
      <FeaturesStrip />
      <hr className="divider-gold" style={{ margin: "0 5%" }} />
      <Collectionsgrid />
      <Bridalbanner />
      <Testimonials />
    </div>
  );
};

export default Home;
