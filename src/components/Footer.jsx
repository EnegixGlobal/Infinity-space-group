import React from "react";
import logo from "../assets/logo.png";
import ctaVideo from "../assets/ctavideo.mp4";

export default function Footer() {
  return (
    <section className="bg-black text-gray-400 overflow-hidden">

      {/* CTA */}
      <div className="relative h-[75vh] min-h-[520px]">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={ctaVideo}
          autoPlay
          muted
          loop
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <span className="text-xs tracking-widest uppercase text-gray-300 mb-4">
            Join the Journey
          </span>

          <h2 className="text-white text-4xl md:text-6xl font-light max-w-4xl leading-tight">
            Begin Your Journey To <br />
            <span className="font-medium">Timeless Luxury</span>
          </h2>

          <button className="mt-10 px-10 py-3 border border-white text-white hover:bg-white hover:text-black transition">
            Experience Luxury
          </button>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-4 gap-16">

          {/* BRAND */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img src={logo} className="h-10" alt="logo" />
              <h3 className="text-white text-lg">Infinity Space</h3>
            </div>
            <p className="text-sm mb-6">
              Designing purposeful spaces with precision, integrity, and innovation.
            </p>

            <div className="flex border border-gray-700 h-[46px]">
              <input
                className="flex-1 bg-transparent px-4 text-sm focus:outline-none"
                placeholder="Your email address"
              />
              <button className="px-6 bg-white text-black text-sm hover:bg-gray-200">
                Notify
              </button>
            </div>
          </div>

          {/* LINKS */}
          <div>
            <h4 className="text-white mb-4">Pages</h4>
            <ul className="space-y-2 text-sm">
              <li>Home</li>
              <li>About</li>
              <li>Service</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* SOCIAL */}
          <div>
            <h4 className="text-white mb-4">Social</h4>
            <ul className="space-y-2 text-sm">
              <li>Instagram</li>
              <li>LinkedIn</li>
              <li>Twitter</li>
              <li>Facebook</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-white mb-4">Contact</h4>
            <p className="text-sm">
              +91 9229606900 <br />
              infinityspacegroup@gmail.com
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 py-6 text-center text-xs">
          © All rights reserved by Infinity Space
        </div>
      </footer>
    </section>
  );
}
