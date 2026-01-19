"use client";

import React from "react";
import { getImageSrc } from "@/lib/imageHelper";

/* ===== FLOORPLAN IMAGES ===== */
const floor1 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768816231/infinity-space/floorplan/poza7qqpjlmafz9qswcp.png";
const floor2 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768816258/infinity-space/floorplan/hzcc3hdinzgyipk1xqzs.jpg";
const floor3 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768816289/infinity-space/floorplan/vzpfa2nrpha1fde6l2om.jpg";
const floor4 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768816305/infinity-space/floorplan/uthdzvzfvl5scdqbbgva.jpg";
const floor5 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768816318/infinity-space/floorplan/jto3axlx3t82vzcsfvxa.jpg";
const floor6 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768816356/infinity-space/floorplan/gz8vcsuboxrl3solf7do.jpg";
const floor7 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768816370/infinity-space/floorplan/rla523idvybgbmxmkyoj.jpg";
const floor8 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768816383/infinity-space/floorplan/qkgt6idqmbd0lvszz5po.png";
const floor9 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768816416/infinity-space/floorplan/qmxrzrnkduaztcdztkih.jpg";
const floor10 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768816479/infinity-space/floorplan/ezcwdtgwixth6xz0hoyl.png";
const floor11 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768816518/infinity-space/floorplan/rifx8xnpuhemdlgcb1g6.jpg";
const floor12 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768816552/infinity-space/floorplan/sqoi4xwhby1xsrjcti2h.jpg";
const floor13 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768816572/infinity-space/floorplan/rqebflgmc85fex0seqwa.jpg";
const floor14 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768816592/infinity-space/floorplan/ygndqxjtljvqzl0uhcv5.jpg";
const floor15 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768816605/infinity-space/floorplan/v5gfdqcs8erph44cja4v.jpg";
const floor16 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768816619/infinity-space/floorplan/wxvwa5ccxulkkfyitcgx.jpg";
const floor17 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768816632/infinity-space/floorplan/lohppayvr9vt52yxnrdd.png";

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
                src={getImageSrc(img)}
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
