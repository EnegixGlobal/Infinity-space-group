import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import About from "./components/About";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Service from "./components/Service";

/* ===== PORTFOLIO PAGES ===== */
import ExteriorResidential from "./components/ExteriorResidential";
import ExteriorCommercial from "./components/ExteriorCommercial";
import InteriorResidential from "./components/InteriorResidential";
import InteriorCommercial from "./components/InteriorCommercial";
import FloorPlan from "./components/FloorPlan";
import Isometric from "./components/Isometric";
import Landscape from "./components/Landscape";

/* ===== Scroll To Top (GLOBAL) ===== */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Navbar />

      {/* Offset for fixed navbar */}
      <div style={{ marginTop: "2px" }}>
        <Routes>
          {/* MAIN PAGES */}
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />

          {/* ===== PORTFOLIO ROUTES ===== */}
          <Route path="/portfolio/exterior/residential" element={<ExteriorResidential />} />
          <Route path="/portfolio/exterior/commercial" element={<ExteriorCommercial />} />

          <Route path="/portfolio/interior/residential" element={<InteriorResidential />} />
          <Route path="/portfolio/interior/commercial" element={<InteriorCommercial />} />

          <Route path="/portfolio/floorplan" element={<FloorPlan />} />
          <Route path="/portfolio/isometric" element={<Isometric />} />
          <Route path="/portfolio/landscape" element={<Landscape />} />
        </Routes>
      </div>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
