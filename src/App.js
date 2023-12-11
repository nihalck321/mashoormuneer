import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Photography from "./routes/Photography";
import Contact from "./routes/Contact";
import PortraitesPageTwo from "./routes/PortraitesPage";
import Films from "./routes/Films";
import TravelsPage1 from "./routes/TravelsPage";
import Street from "./routes/Street";
import Abouts from "./routes/Abouts";
import Navbar from "./components/Navbar/Navbar";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <>
      <Navbar />
      <AnimatePresence initial={true} mode="wait">
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/photography" element={<Photography />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portraitesPageTwo" element={<PortraitesPageTwo />} />
          <Route path="/abouts" element={<Abouts />} />
          <Route path="/films" element={<Films />} />
          <Route path="/travelspage1" element={<TravelsPage1 />} />
          <Route path="/street" element={<Street />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
