import React from "react";
import { Route, Routes } from "react-router";
import Navbar from "./Components/Navbar";
import CategoryMenu from "./Components/CategoryMenu";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/catogary" element={<CategoryMenu />} />
      </Routes>
    </>
  );
};

export default App;
