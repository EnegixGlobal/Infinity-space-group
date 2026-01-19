"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import Image from "next/image";
import logo from "../../assets/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [showPortfolio, setShowPortfolio] = useState(false);
  const [activeTab, setActiveTab] = useState(null);
  const [mobilePortfolio, setMobilePortfolio] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  const linkStyle =
    "relative text-sm md:text-base tracking-widest uppercase after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full";

  const activeLinkStyle = (path) => {
    return pathname === path ? `${linkStyle} after:w-full` : linkStyle;
  };

  const portfolioItems = [
    { name: "Exterior", hasSub: true },
    { name: "Interior", hasSub: true },
    { name: "Floor Plan", link: "/portfolio/floorplan", hasSub: false },
    { name: "Isometric", link: "/portfolio/isometric", hasSub: false },
    { name: "Landscape", link: "/portfolio/landscape", hasSub: false },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link href="/">
          <Image
            src={logo}
            alt="logo"
            className="h-10 sm:h-12 md:h-14"
            width={56}
            height={56}
            unoptimized
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-10 text-white">
          <Link href="/about" className={activeLinkStyle("/about")}>
            About
          </Link>
          <Link href="/service" className={activeLinkStyle("/service")}>
            Services
          </Link>

          {/* PORTFOLIO */}
          <div
            className="relative flex flex-col"
            onMouseEnter={() => setShowPortfolio(true)}
            onMouseLeave={() => {
              setShowPortfolio(false);
              setActiveTab(null);
            }}
          >
            <span className={`${linkStyle} cursor-pointer`}>Portfolio</span>

            {showPortfolio && (
              <div className="absolute top-full left-0 mt-1 w-full lg:w-[560px] max-h-[80vh] overflow-auto bg-[#111] border border-white/10 flex z-50">
                {/* LEFT LIST */}
                <div className="w-1/2 bg-[#161616]">
                  {portfolioItems.map((item, i) =>
                    item.hasSub ? (
                      <div
                        key={i}
                        onMouseEnter={() => setActiveTab(item.name)}
                        className={`px-4 sm:px-6 py-3 text-sm sm:text-base tracking-widest uppercase cursor-pointer transition
                          ${
                            activeTab === item.name
                              ? "bg-yellow-400 text-black"
                              : "text-gray-300 hover:bg-yellow-400 hover:text-black"
                          }`}
                      >
                        {item.name}
                      </div>
                    ) : (
                      <Link
                        key={i}
                        href={item.link}
                        onMouseEnter={() => setActiveTab(null)}
                        onClick={() => setShowPortfolio(false)}
                        className="block px-4 sm:px-6 py-3 text-sm sm:text-base tracking-widest uppercase text-gray-300 hover:bg-yellow-400 hover:text-black transition"
                      >
                        {item.name}
                      </Link>
                    )
                  )}
                </div>

                {/* RIGHT PANEL */}
                {activeTab &&
                  (activeTab === "Exterior" || activeTab === "Interior") && (
                    <div className="w-1/2 px-4 sm:px-6 py-6 space-y-3 sm:space-y-4 text-sm sm:text-base tracking-widest uppercase">
                      {activeTab === "Exterior" && (
                        <>
                          <Link
                            href="/portfolio/exterior/residential"
                            className="block px-3 py-2 text-gray-300 hover:bg-yellow-400 hover:text-black transition"
                            onClick={() => setShowPortfolio(false)}
                          >
                            Residential
                          </Link>
                          <Link
                            href="/portfolio/exterior/commercial"
                            className="block px-3 py-2 text-gray-300 hover:bg-yellow-400 hover:text-black transition"
                            onClick={() => setShowPortfolio(false)}
                          >
                            Commercial
                          </Link>
                        </>
                      )}
                      {activeTab === "Interior" && (
                        <>
                          <Link
                            href="/portfolio/interior/residential"
                            className="block px-3 py-2 text-gray-300 hover:bg-yellow-400 hover:text-black transition"
                            onClick={() => setShowPortfolio(false)}
                          >
                            Residential
                          </Link>
                          <Link
                            href="/portfolio/interior/commercial"
                            className="block px-3 py-2 text-gray-300 hover:bg-yellow-400 hover:text-black transition"
                            onClick={() => setShowPortfolio(false)}
                          >
                            Commercial
                          </Link>
                        </>
                      )}
                    </div>
                  )}
              </div>
            )}
          </div>

          <Link href="/blog" className={activeLinkStyle("/blog")}>
            Blog
          </Link>
          <Link href="/contact" className={activeLinkStyle("/contact")}>
            Contact
          </Link>
        </nav>

        {/* DESKTOP CTA */}
        <Link
          href="/contact"
          className="hidden md:block px-4 sm:px-6 py-2 border border-white text-white text-sm sm:text-base hover:bg-white hover:text-black transition"
        >
          Get Started
        </Link>

        {/* MOBILE HAMBURGER */}
        <button
          className="md:hidden text-white text-2xl z-50"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden fixed inset-0 bg-black text-white pt-28 px-4 sm:px-6 overflow-auto">
          <div className="space-y-6 text-lg sm:text-xl tracking-widest uppercase">
            <Link href="/about" onClick={() => setOpen(false)}>
              About
            </Link>
            <Link href="/service" onClick={() => setOpen(false)}>
              Services
            </Link>

            {/* MOBILE PORTFOLIO */}
            <div>
              <button
                className="w-full flex items-center justify-between py-2"
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
                <div className="mt-2 ml-4 space-y-2 text-sm sm:text-base">
                  <p className="text-gray-400">Exterior</p>
                  <Link
                    href="/portfolio/exterior/residential"
                    onClick={() => setOpen(false)}
                  >
                    Residential
                  </Link>
                  <Link
                    href="/portfolio/exterior/commercial"
                    onClick={() => setOpen(false)}
                  >
                    Commercial
                  </Link>

                  <p className="text-gray-400 mt-2">Interior</p>
                  <Link
                    href="/portfolio/interior/residential"
                    onClick={() => setOpen(false)}
                  >
                    Residential
                  </Link>
                  <Link
                    href="/portfolio/interior/commercial"
                    onClick={() => setOpen(false)}
                  >
                    Commercial
                  </Link>

                  <Link
                    href="/portfolio/floorplan"
                    onClick={() => setOpen(false)}
                  >
                    Floor Plan
                  </Link>
                  <Link
                    href="/portfolio/isometric"
                    onClick={() => setOpen(false)}
                  >
                    Isometric
                  </Link>
                  <Link
                    href="/portfolio/landscape"
                    onClick={() => setOpen(false)}
                  >
                    Landscape
                  </Link>
                </div>
              )}
            </div>

            <Link href="/blog" onClick={() => setOpen(false)}>
              Blog
            </Link>
            <Link href="/contact" onClick={() => setOpen(false)}>
              Contact
            </Link>

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="block border border-white text-center py-3 mt-6"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
