import React from "react";
import Navbar from "./Components/Navbar";

import Footer from "./Components/Footer";
import HeroSection from "./Components/herosection";
import Topbar from "./Components/TopBar";
import Featuresstrip from "./Components/Featuresstrip";
import Collectionsgrid from "./Components/Collectionsgrid";
import Bridalbanner from "./Components/Bridalbanner";
import Testimonials from "./Components/Testimonials";
import "./index.css";

const App = () => {
  return (
    <>
      <div
        style={{
          fontFamily: "'Playfair Display', 'Georgia', serif",
          background: "#0a0603",
          color: "#f5e6c8",
          minHeight: "100vh",
          overflowX: "hidden",
        }}>
        <Topbar />
        <Navbar />
        <HeroSection />
        <hr className="divider-gold" style={{ margin: "0 5%" }} />
        <Featuresstrip />
        <hr className="divider-gold" style={{ margin: "0 5%" }} />
        <Collectionsgrid />
        <Bridalbanner />
        <Testimonials />
        <Footer />
      </div>
    </>
  );
};

export default App;
