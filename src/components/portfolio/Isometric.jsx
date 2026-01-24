"use client";

import React from "react";
import { getImageSrc } from "@/lib/imageHelper";

/* ===== ISOMETRIC IMAGES ===== */
const isoView = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768815367/infinity-space/isometric/lcqfdadrgomkwpowktp0.jpg";


const iso6 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768815695/infinity-space/isometric/owsuddu25tbjixyzdlqo.jpg";

const iso8 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768815740/infinity-space/isometric/qb3e4nzgrwdlxghochyj.jpg";
const iso9 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768815754/infinity-space/isometric/ejp0zndbsc6qoi1s1s62.jpg";

const iso11 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768815797/infinity-space/isometric/wgynbtctofskf3j47uii.jpg";
const iso12 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768815811/infinity-space/isometric/ppbbhedwydxzsamxw5wr.jpg";
const iso13 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768815833/infinity-space/isometric/og2inxgkj90plyz9htjs.jpg";
const iso14 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768815850/infinity-space/isometric/f45ie9coye8caewagwtn.jpg";
const iso15 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768815865/infinity-space/isometric/nxgizmlyyueyzdiunxap.jpg";

export default function Isometric() {

  const images = [
    isoView,
    iso6, 
    iso8, iso9, iso11, iso12, iso13, iso14, iso15
  ];

  return (
    <section className="bg-black text-white pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">

        <span className="block text-sm tracking-widest uppercase text-gray-400 mb-3">
          Portfolio
        </span>

        <h1 className="text-4xl md:text-6xl font-light mb-14">
          Isometric <span className="font-medium">Views</span>
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {images.map((img, index) => (
            <div key={index} className="group relative overflow-hidden bg-[#111]">
              <img
                src={getImageSrc(img)}
                alt={`Isometric View ${index + 1}`}
                className="w-full h-[260px] sm:h-[320px] md:h-[360px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/25 group-hover:bg-black/40 transition duration-500" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
