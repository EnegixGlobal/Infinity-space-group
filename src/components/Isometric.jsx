import React from "react";

/* ===== ISOMETRIC IMAGES ===== */
import isoView from "../assets/isometric/isometric view.jpg";
import iso1 from "../assets/isometric/isometric1.jpeg";
import iso2 from "../assets/isometric/isometric2.jpeg";
import iso3 from "../assets/isometric/isometric3.jpeg";
import iso4 from "../assets/isometric/isometric4.jpeg";
import iso5 from "../assets/isometric/isometric5.jpeg";
import iso6 from "../assets/isometric/isometric6.jpeg";
import iso7 from "../assets/isometric/isometric7.jpeg";
import iso8 from "../assets/isometric/isometric8.jpeg";
import iso9 from "../assets/isometric/isometric9.jpeg";
import iso10 from "../assets/isometric/isometric10.jpeg";
import iso11 from "../assets/isometric/isometric11.jpeg";
import iso12 from "../assets/isometric/isometric12.jpeg";
import iso13 from "../assets/isometric/isometric13.jpeg";
import iso14 from "../assets/isometric/isometric14.jpeg";
import iso15 from "../assets/isometric/isomteric15.jpeg";

export default function Isometric() {

  const images = [
    isoView,
    iso1, iso2, iso3, iso4, iso5, iso6, iso7,
    iso8, iso9, iso10, iso11, iso12, iso13, iso14, iso15
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
                src={img}
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
