import React from "react";

/* Same images used */
import img1 from "../assets/interior.webp";
import img2 from "../assets/landscape.avif";
import img3 from "../assets/planning.avif";
import img4 from "../assets/material.webp";

export default function InteriorResidential() {
  const images = [img1, img2, img3, img4];

  return (
    <section className="bg-black text-white pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* ===== HEADING ===== */}
        <span className="block text-sm tracking-widest uppercase text-gray-400 mb-3">
          Portfolio
        </span>

        <h1 className="text-4xl md:text-6xl font-light mb-14">
          Interior — <span className="font-medium">Residential</span>
        </h1>

        {/* ===== IMAGE GRID ===== */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {images.map((img, index) => (
            <div
              key={index}
              className="group relative overflow-hidden bg-[#111]"
            >
              {/* IMAGE */}
              <img
                src={img}
                alt="Interior Residential"
                className="w-full h-[260px] sm:h-[320px] md:h-[360px] object-cover
                           transition-transform duration-700 group-hover:scale-105"
              />

              {/* DARK OVERLAY */}
              <div className="absolute inset-0 bg-black/25 group-hover:bg-black/40 transition duration-500" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
