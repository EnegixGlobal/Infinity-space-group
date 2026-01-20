import React from "react";
import Link from "next/link";
// Video is now in public/assets/videos/
const ctaVideo = "/assets/videos/ctavideo.mp4";

export default function Footer() {
  return (
    <section className="bg-black text-gray-400 overflow-hidden">
      {/* ================= CTA SECTION ================= */}
      <div className="relative h-[75vh] min-h-[520px]">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={ctaVideo}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onError={(e) => {
            console.error('Video failed to load:', ctaVideo);
          }}
        >
          <source src={ctaVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <span className="text-xs tracking-widest uppercase text-gray-300 mb-4">
            Join the Journey
          </span>

          <h2 className="text-white text-4xl md:text-6xl font-light max-w-4xl leading-tight">
            Begin Your Journey To <br />
            <span className="font-medium">Timeless Luxury</span>
          </h2>

          <Link
            href="/contact#contact-form"
            className="inline-block mt-10 px-10 py-3 border border-white text-white uppercase tracking-widest text-sm
                       hover:bg-white hover:text-black transition duration-300"
          >
            Experience Luxury
          </Link>
        </div>
      </div>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-white/10">
        <div
          className="max-w-7xl mx-auto px-6 py-20 
                        grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1.2fr_1fr_1fr] 
                        gap-x-20 gap-y-14"
        >
          {/* BRAND */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/logo.png"
                className="h-10 w-auto"
                alt="logo"
                width={40}
                height={40}
              />
              <h3 className="text-white text-lg">Infinity Space</h3>
            </div>

            <p className="text-sm mb-8 max-w-xs">
              Designing purposeful spaces with precision, integrity, and
              innovation.
            </p>

            <div className="flex border border-gray-700 h-[46px] max-w-xs">
              <input
                className="flex-1 bg-transparent px-4 text-sm focus:outline-none"
                placeholder="Your email address"
              />
              <button className="px-6 bg-white text-black text-sm hover:bg-gray-200">
                Notify
              </button>
            </div>
          </div>

          {/* PAGES */}
          <div className="md:pl-6">
            <h4 className="text-white mb-5">Pages</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="/service" className="hover:text-white transition">
                  Service
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* PORTFOLIO */}
          <div>
            <h4 className="text-white mb-5">Portfolio</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/portfolio/exterior/residential"
                  className="hover:text-white transition"
                >
                  Exterior – Residential
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio/exterior/commercial"
                  className="hover:text-white transition"
                >
                  Exterior – Commercial
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio/interior/residential"
                  className="hover:text-white transition"
                >
                  Interior – Residential
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio/interior/commercial"
                  className="hover:text-white transition"
                >
                  Interior – Commercial
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio/floorplan"
                  className="hover:text-white transition"
                >
                  Floor Plan
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio/isometric"
                  className="hover:text-white transition"
                >
                  Isometric
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio/landscape"
                  className="hover:text-white transition"
                >
                  Landscape
                </Link>
              </li>
            </ul>
          </div>

          {/* SOCIAL */}
          <div>
            <h4 className="text-white mb-5">Social</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="https://www.instagram.com/infinity_space_group"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/infinityspaceofgroup"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-white mb-5">Contact</h4>
            <p className="text-sm leading-relaxed">
              +91 9229606900 <br />
              infinityspacegroup@gmail.com
            </p>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="border-t border-white/10 py-6 text-center text-xs">
          © All rights reserved by Infinity Space
        </div>
      </footer>
    </section>
  );
}
