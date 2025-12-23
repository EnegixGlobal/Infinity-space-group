import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  const linkStyle =
    "relative text-sm tracking-widest after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full";

  return (
    <>
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* LOGO */}
          <Link to="/" className="z-50">
            <img src={logo} className="h-8 md:h-14" alt="Logo" />
          </Link>

          {/* DESKTOP MENU */}
          <nav className="hidden md:flex items-center gap-10 text-white uppercase">
            <NavLink to="/about" className={linkStyle}>About</NavLink>
            <NavLink to="/service" className={linkStyle}>Service</NavLink>
            <NavLink to="/blog" className={linkStyle}>Blog</NavLink>
            <NavLink to="/contact" className={linkStyle}>Contact</NavLink>
          </nav>

          {/* CTA */}
          <button className="hidden md:block px-6 py-2 border border-white text-white text-sm tracking-wide hover:bg-white hover:text-black transition">
            Get Started
          </button>

          {/* MOBILE TOGGLE */}
          <button
            className="md:hidden text-white text-xl z-50"
            onClick={() => setOpen(!open)}
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 z-40 bg-black flex flex-col items-center justify-center gap-8 text-white text-lg transition-transform duration-500 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <NavLink onClick={() => setOpen(false)} to="/about">ABOUT</NavLink>
        <NavLink onClick={() => setOpen(false)} to="/service">SERVICE</NavLink>
        <NavLink onClick={() => setOpen(false)} to="/blog">BLOG</NavLink>
        <NavLink onClick={() => setOpen(false)} to="/contact">CONTACT</NavLink>


        <button className="mt-8 px-8 py-3 bg-white text-black text-sm">
          Get Started
        </button>
      </div>
    </>
  );
}
