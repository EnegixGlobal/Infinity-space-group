import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Desktop portfolio
  const [showPortfolio, setShowPortfolio] = useState(false);
  const [activeTab, setActiveTab] = useState("Exterior");

  // Mobile portfolio
  const [mobilePortfolio, setMobilePortfolio] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  const linkStyle =
    "relative text-sm tracking-widest uppercase after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full";

  const portfolioItems = [
    { name: "Exterior", link: "/portfolio/exterior/residential" },
    { name: "Interior", link: "/portfolio/interior/residential" },
    { name: "Floor Plan", link: "/portfolio/floorplan" },
    { name: "Isometric", link: "/portfolio/isometric" },
    { name: "Landscape", link: "/portfolio/landscape" },
  ];

  return (
    <>
      {/* ================= HEADER ================= */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* LOGO */}
          <Link to="/">
            <img src={logo} alt="logo" className="h-10 md:h-14" />
          </Link>

          {/* ================= DESKTOP MENU ================= */}
          <nav className="hidden md:flex items-center gap-10 text-white">
            <NavLink to="/about" className={linkStyle}>About</NavLink>
            <NavLink to="/service" className={linkStyle}>Services</NavLink>

            {/* PORTFOLIO MEGA MENU */}
            <div
              className="relative flex flex-col"
              onMouseEnter={() => setShowPortfolio(true)}
              onMouseLeave={() => setShowPortfolio(false)}
            >
              <span className={`${linkStyle} cursor-pointer`}>
                Portfolio
              </span>

              {showPortfolio && (
                <div className="absolute top-full left-0 mt-1 w-[560px] bg-[#111] border border-white/10 flex z-50">
                  
                  {/* LEFT COLUMN */}
                  <div className="w-1/2 bg-[#161616]">
                    {portfolioItems.map((item, i) => (
                      <div
                        key={i}
                        onMouseEnter={() => setActiveTab(item.name)}
                        className={`block px-6 py-4 text-sm tracking-widest uppercase
                          ${activeTab === item.name ? "bg-yellow-400 text-black" : "text-gray-300 hover:bg-[#222] cursor-pointer"}
                        `}
                      >
                        {item.name}
                      </div>
                    ))}
                  </div>

                  {/* RIGHT COLUMN */}
                  <div className="w-1/2 px-6 py-6 space-y-4 text-sm tracking-widest uppercase">
                    {activeTab === "Exterior" && (
                      <>
                        <Link
                          to="/portfolio/exterior/residential"
                          className="block text-gray-300 hover:text-yellow-400"
                          onClick={() => setShowPortfolio(false)}
                        >
                          Residential
                        </Link>
                        <Link
                          to="/portfolio/exterior/commercial"
                          className="block text-gray-300 hover:text-yellow-400"
                          onClick={() => setShowPortfolio(false)}
                        >
                          Commercial
                        </Link>
                      </>
                    )}

                    {activeTab === "Interior" && (
                      <>
                        <Link
                          to="/portfolio/interior/residential"
                          className="block text-gray-300 hover:text-yellow-400"
                          onClick={() => setShowPortfolio(false)}
                        >
                          Residential
                        </Link>
                        <Link
                          to="/portfolio/interior/commercial"
                          className="block text-gray-300 hover:text-yellow-400"
                          onClick={() => setShowPortfolio(false)}
                        >
                          Commercial
                        </Link>
                      </>
                    )}

                    {activeTab === "Floor Plan" && (
                      <Link
                        to="/portfolio/floorplan"
                        className="block text-gray-300 hover:text-yellow-400"
                        onClick={() => setShowPortfolio(false)}
                      >
                        Floor Plan
                      </Link>
                    )}

                    {activeTab === "Isometric" && (
                      <Link
                        to="/portfolio/isometric"
                        className="block text-gray-300 hover:text-yellow-400"
                        onClick={() => setShowPortfolio(false)}
                      >
                        Isometric
                      </Link>
                    )}

                    {activeTab === "Landscape" && (
                      <Link
                        to="/portfolio/landscape"
                        className="block text-gray-300 hover:text-yellow-400"
                        onClick={() => setShowPortfolio(false)}
                      >
                        Landscape
                      </Link>
                    )}
                  </div>
                </div>
              )}
            </div>

            <NavLink to="/blog" className={linkStyle}>Blog</NavLink>
            <NavLink to="/contact" className={linkStyle}>Contact</NavLink>
          </nav>

          {/* CTA */}
          <Link
            to="/contact"
            className="hidden md:block px-6 py-2 border border-white text-white text-sm hover:bg-white hover:text-black transition"
          >
            Get Started
          </Link>

          {/* MOBILE TOGGLE */}
          <button
            className="md:hidden text-white text-xl z-50"
            onClick={() => setOpen(!open)}
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </header>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`fixed inset-0 z-40 bg-black pt-28 px-6 text-white transition-transform duration-500 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav className="flex flex-col gap-6 text-lg">

          <NavLink onClick={() => setOpen(false)} to="/about">ABOUT</NavLink>
          <NavLink onClick={() => setOpen(false)} to="/service">SERVICES</NavLink>

          {/* MOBILE PORTFOLIO */}
          <button
            onClick={() => setMobilePortfolio(!mobilePortfolio)}
            className="flex items-center justify-between uppercase tracking-widest"
          >
            Portfolio
            <FaChevronDown
              className={`transition-transform ${mobilePortfolio ? "rotate-180" : ""}`}
            />
          </button>

          {mobilePortfolio && (
            <div className="ml-4 flex flex-col gap-4 text-sm uppercase tracking-widest text-gray-300">
              <Link onClick={() => setOpen(false)} to="/portfolio/exterior/residential">Exterior – Residential</Link>
              <Link onClick={() => setOpen(false)} to="/portfolio/exterior/commercial">Exterior – Commercial</Link>
              <Link onClick={() => setOpen(false)} to="/portfolio/interior/residential">Interior – Residential</Link>
              <Link onClick={() => setOpen(false)} to="/portfolio/interior/commercial">Interior – Commercial</Link>
              <Link onClick={() => setOpen(false)} to="/portfolio/floorplan">Floor Plan</Link>
              <Link onClick={() => setOpen(false)} to="/portfolio/isometric">Isometric</Link>
              <Link onClick={() => setOpen(false)} to="/portfolio/landscape">Landscape</Link>
            </div>
          )}

          <NavLink onClick={() => setOpen(false)} to="/blog">BLOG</NavLink>
          <NavLink onClick={() => setOpen(false)} to="/contact">CONTACT</NavLink>

          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-8 px-8 py-3 border border-white text-sm tracking-wide hover:bg-white hover:text-black transition"
          >
            Get Started
          </Link>
        </nav>
      </div>
    </>
  );
}
