import React from "react";

/* ===== FLOORPLAN IMAGES ===== */
import floor1 from "../assets/floorplan/floor1.png";
import floor2 from "../assets/floorplan/floor2.png";
import floor3 from "../assets/floorplan/floor3.jpg";
import floor4 from "../assets/floorplan/floor4.png";
import floor5 from "../assets/floorplan/floor5.png";
import floor6 from "../assets/floorplan/floor6.png";
import floor7 from "../assets/floorplan/floor7.png";
import floor8 from "../assets/floorplan/floor8.png";
import floor9 from "../assets/floorplan/floor9.jpg";
import floor10 from "../assets/floorplan/floor10.png";
import floor11 from "../assets/floorplan/floor11.png";
import floor12 from "../assets/floorplan/floor12.png";
import floor13 from "../assets/floorplan/floor13.png";
import floor14 from "../assets/floorplan/floor14.png";
import floor15 from "../assets/floorplan/floor15.png";
import floor16 from "../assets/floorplan/floor16.jpg";
import floor17 from "../assets/floorplan/floor17.png";

export default function FloorPlan() {

  const images = [
    floor1, floor2, floor3, floor4, floor5, floor6, floor7, floor8,
    floor9, floor10, floor11, floor12, floor13, floor14, floor15,
    floor16, floor17
  ];

  return (
    <section className="bg-black text-white pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">

        <span className="block text-sm tracking-widest uppercase text-gray-400 mb-3">
          Portfolio
        </span>

        <h1 className="text-4xl md:text-6xl font-light mb-14">
          <span className="font-medium">Floor Plan</span>
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {images.map((img, index) => (
            <div key={index} className="group relative overflow-hidden bg-[#111]">
              <img
                src={img}
                alt={`Floor Plan ${index + 1}`}
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
