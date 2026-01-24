"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";

const logo =
  "https://res.cloudinary.com/dit7znqkl/image/upload/v1768892316/infinity-space/logos/hero/z5v9nctt0mpsxl3lc67v.png";

export default function Navbar() {
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);
  const [showPortfolio, setShowPortfolio] = useState(false);
  const [activeTab, setActiveTab] = useState(null);
  const [mobilePortfolio, setMobilePortfolio] = useState(false);

  /* Lock scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [menuOpen]);

  /* Close menu on route change */
  useEffect(() => {
    setMenuOpen(false);
    setMobilePortfolio(false);
    setShowPortfolio(false);
  }, [pathname]);

  const linkStyle =
    "relative uppercase tracking-widest text-sm after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-white after:transition-all hover:after:w-full";

  const activeLink = (path) =>
    pathname === path ? `${linkStyle} after:w-full` : linkStyle;

  return (
    <header className="fixed top-0 left-0 w-full bg-black z-50">
      {/* TOP BAR */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" aria-label="Home">
          <img src={logo} alt="Infinity Space Group" className="h-10 sm:h-12" />
        </Link>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex items-center gap-8 text-white">
          <Link href="/about" className={activeLink("/about")}>
            About
          </Link>

          <Link href="/service" className={activeLink("/service")}>
            Services
          </Link>

          {/* PORTFOLIO DESKTOP */}
          <div
            className="relative"
            onMouseEnter={() => setShowPortfolio(true)}
            onMouseLeave={() => {
              setShowPortfolio(false);
              setActiveTab(null);
            }}
          >
            <span className={`${linkStyle} cursor-pointer`}>
              Portfolio
            </span>

            {showPortfolio && (
              <div className="absolute top-full left-0 mt-2 w-[560px] bg-[#111] border border-white/10 flex">
                {/* LEFT */}
                <div className="w-1/2 bg-[#161616]">
                  {["Exterior", "Interior"].map((item) => (
                    <div
                      key={item}
                      onMouseEnter={() => setActiveTab(item)}
                      className={`px-6 py-3 cursor-pointer uppercase transition ${
                        activeTab === item
                          ? "bg-yellow-400 text-black"
                          : "text-gray-300 hover:bg-yellow-400 hover:text-black"
                      }`}
                    >
                      {item}
                    </div>
                  ))}

                  <Link
                    href="/portfolio/floorplan"
                    className="block px-6 py-3 uppercase text-gray-300 hover:bg-yellow-400 hover:text-black"
                  >
                    Floor Plan
                  </Link>

                  <Link
                    href="/portfolio/isometric"
                    className="block px-6 py-3 uppercase text-gray-300 hover:bg-yellow-400 hover:text-black"
                  >
                    Isometric
                  </Link>

                  <Link
                    href="/portfolio/landscape"
                    className="block px-6 py-3 uppercase text-gray-300 hover:bg-yellow-400 hover:text-black"
                  >
                    Landscape
                  </Link>
                </div>

                {/* RIGHT */}
                {activeTab && (
                  <div className="w-1/2 px-6 py-4 uppercase">
                    <Link
                      href={`/portfolio/${activeTab.toLowerCase()}/residential`}
                      className="block py-2 text-gray-300 hover:bg-yellow-400 hover:text-black"
                    >
                      Residential
                    </Link>
                    <Link
                      href={`/portfolio/${activeTab.toLowerCase()}/commercial`}
                      className="block py-2 text-gray-300 hover:bg-yellow-400 hover:text-black"
                    >
                      Commercial
                    </Link>
                  </div>
                )}
              </div>
            )}
          </div>

          <Link href="/blog" className={activeLink("/blog")}>
            Blog
          </Link>

          <Link href="/contact" className={activeLink("/contact")}>
            Contact
          </Link>
        </nav>

        {/* DESKTOP CTA */}
        <Link
          href="/contact"
          className="hidden md:block border border-white px-6 py-2 text-white hover:bg-white hover:text-black transition"
        >
          Get Started
        </Link>

        {/* MOBILE TOGGLE */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 bg-black text-white pt-24 px-6 overflow-y-auto">
          {/* LOGO */}
          <div className="flex justify-center mb-10">
            <img src={logo} alt="Infinity Space Group" className="h-12" />
          </div>

          <div className="flex flex-col space-y-6 uppercase tracking-widest text-base">
            <Link href="/about">About</Link>
            <Link href="/service">Services</Link>

            {/* MOBILE PORTFOLIO */}
            <div>
              <button
                className="flex w-full justify-between items-center"
                onClick={() => setMobilePortfolio(!mobilePortfolio)}
              >
                <span>Portfolio</span>
                <FaChevronDown
                  className={`transition ${
                    mobilePortfolio ? "rotate-180" : ""
                  }`}
                />
              </button>

              {mobilePortfolio && (
                <div className="ml-4 mt-4 flex flex-col space-y-3 text-sm">
                  <Link href="/portfolio/exterior/residential">
                    Exterior – Residential
                  </Link>
                  <Link href="/portfolio/exterior/commercial">
                    Exterior – Commercial
                  </Link>
                  <Link href="/portfolio/interior/residential">
                    Interior – Residential
                  </Link>
                  <Link href="/portfolio/interior/commercial">
                    Interior – Commercial
                  </Link>
                  <Link href="/portfolio/floorplan">Floor Plan</Link>
                  <Link href="/portfolio/isometric">Isometric</Link>
                  <Link href="/portfolio/landscape">Landscape</Link>
                </div>
              )}
            </div>

            <Link href="/blog">Blog</Link>
            <Link href="/contact">Contact</Link>

            <Link
              href="/contact"
              className="mt-10 border border-white py-4 text-center"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
