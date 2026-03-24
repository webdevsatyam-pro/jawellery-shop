import React from "react";
import { Route, Routes } from "react-router";
import Navbar from "./Components/Navbar";
import CategoryMenu from "./Components/CategoryMenu";
import Footer from "./Components/Footer";
import HeroSection from "./Components/herosection";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/catogary" element={<CategoryMenu />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/herosection" element={<HeroSection />} />
      </Routes>
    </>
  );
};

export default App;
