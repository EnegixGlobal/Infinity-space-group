"use client";

import React from "react";
import { getImageSrc } from "@/lib/imageHelper";

/* Sample images – replace anytime */
const img1 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1769856666/infinity-space/landscape/ggzbbns2gi3kixcgzm9k.jpg";
const img2 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1769856666/infinity-space/landscape/wrh9muri9t8wa017zakr.jpg";
const img3 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1769856668/infinity-space/landscape/mx1fpnmg5mpvanhlihmt.jpg";
const img4 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1769856666/infinity-space/landscape/xbzny5pcesghqbzk1om4.jpg";
const img5 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1769856667/infinity-space/landscape/g7s80ywo4579k9rbpb96.jpg";
const img6 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1769856666/infinity-space/landscape/ol74psdhlilp7vulw9sb.jpg";


export default function Landscape() {
  const images = [img1, img2, img3, img4, img5, img6];
  

  return (
    <section className="bg-black text-white pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* ===== HEADING ===== */}
        <span className="block text-sm tracking-widest uppercase text-gray-400 mb-3">
          Portfolio
        </span>

        <h1 className="text-4xl md:text-6xl font-light mb-14">
          Landscape <span className="font-medium">Designs</span>
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
                src={getImageSrc(img)}
                alt="Landscape Design"
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
