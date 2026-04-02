import React from "react";
import "./index.css";
import { Route, Routes } from "react-router-dom"; // react-router-dom se import karein
import Navbar from "./components/Navbar"; // Navbar ka sahi path de yahan
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import Bridal from "./pages/Bridal";
import Gifts from "./pages/Gifts";
import Footer from "./Components/Footer";

const About = () => (
  <div style={{ paddingTop: "100px", color: "white" }}>About Page</div>
);
const Contact = () => (
  <div style={{ paddingTop: "100px", color: "white" }}>Contact Page</div>
);

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collections" element={<Collection />} />
        <Route path="/bridal" element={<Bridal />} />
        <Route path="/gifts" element={<Gifts />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
