"use client";

import React, { useState } from "react";
import { getImageSrc } from "@/lib/imageHelper";

/* ===================== ASHISH FRIEND ===================== */
import ash1 from "../../assets/Interior-Residential/ashish friend/ashish friend m bed.jpg";
import ash2 from "../../assets/Interior-Residential/ashish friend/ashish friend m bed11.jpg";

/* ===================== BEDROOM ===================== */
import bed1 from "../../assets/Interior-Residential/bedroom/bedroom c1 copy.jpg";
import bed2 from "../../assets/Interior-Residential/bedroom/bedroom c2 copy.jpg";
import bed3 from "../../assets/Interior-Residential/bedroom/bedroom c3 copy.jpg";
import bed4 from "../../assets/Interior-Residential/bedroom/toilet  copy.jpg";

/* ===================== DSP SIR ===================== */
import dsp1 from "../../assets/Interior-Residential/DSP_SIR_-_27.06.23/bedroom c1.jpg";
import dsp2 from "../../assets/Interior-Residential/DSP_SIR_-_27.06.23/bedroom c2.jpg";
import dsp3 from "../../assets/Interior-Residential/DSP_SIR_-_27.06.23/living c1.jpg";
import dsp4 from "../../assets/Interior-Residential/DSP_SIR_-_27.06.23/living c2.jpg";
import dsp5 from "../../assets/Interior-Residential/DSP_SIR_-_27.06.23/living c11.jpg";

/* ===================== KIDS ===================== */
import kid1 from "../../assets/Interior-Residential/kids/kids c1 copy.jpg";
import kid2 from "../../assets/Interior-Residential/kids/kids c2 copy.jpg";
import kid3 from "../../assets/Interior-Residential/kids/kids c111.jpg";
import kid4 from "../../assets/Interior-Residential/kids/kids c1111.jpg";

/* ===================== MR RAM RATAN ===================== */
import ram1 from "../../assets/Interior-Residential/MR._RAM_RATAN_BARNWAL_C.O._SAHAB/1st living c1 p.jpg";
import ram2 from "../../assets/Interior-Residential/MR._RAM_RATAN_BARNWAL_C.O._SAHAB/1st living c2 p.jpg";

/* ===================== MANISH KUMAR ===================== */
import mk1 from "../../assets/Interior-Residential/25_wd_MANISH_KUMAR__HOUSING_COLONY_BARIYATU/1st F Bedroom 2.1.jpg";
import mk2 from "../../assets/Interior-Residential/25_wd_MANISH_KUMAR__HOUSING_COLONY_BARIYATU/1st F Bedroom 2.jpg";

import mk3 from "../../assets/Interior-Residential/25_wd_MANISH_KUMAR__HOUSING_COLONY_BARIYATU/1st F Living & Dining c2.jpg";
import mk4 from "../../assets/Interior-Residential/25_wd_MANISH_KUMAR__HOUSING_COLONY_BARIYATU/1st F Living & Dining c3.jpg";
import mk5 from "../../assets/Interior-Residential/25_wd_MANISH_KUMAR__HOUSING_COLONY_BARIYATU/1st F Living & Dining c4.jpg";
import mk6 from "../../assets/Interior-Residential/25_wd_MANISH_KUMAR__HOUSING_COLONY_BARIYATU/1st F Living & Dining c5.jpg";
import mk7 from "../../assets/Interior-Residential/25_wd_MANISH_KUMAR__HOUSING_COLONY_BARIYATU/1st F Living & Dining c6.jpg";
import mk8 from "../../assets/Interior-Residential/25_wd_MANISH_KUMAR__HOUSING_COLONY_BARIYATU/1st F Living & Dining c8.jpg";

import mk9 from "../../assets/Interior-Residential/25_wd_MANISH_KUMAR__HOUSING_COLONY_BARIYATU/1st F Living & Dining.jpg";
import mk10 from "../../assets/Interior-Residential/25_wd_MANISH_KUMAR__HOUSING_COLONY_BARIYATU/1st F Living & Dining1.jpg";

import mk11 from "../../assets/Interior-Residential/25_wd_MANISH_KUMAR__HOUSING_COLONY_BARIYATU/2nd f bedroom 2.jpg";
import mk12 from "../../assets/Interior-Residential/25_wd_MANISH_KUMAR__HOUSING_COLONY_BARIYATU/2nd f bedroom 21.jpg";
import mk13 from "../../assets/Interior-Residential/25_wd_MANISH_KUMAR__HOUSING_COLONY_BARIYATU/2nd f bedroom.jpg";
import mk14 from "../../assets/Interior-Residential/25_wd_MANISH_KUMAR__HOUSING_COLONY_BARIYATU/2nd f bedrooms.jpg";

import mk15 from "../../assets/Interior-Residential/25_wd_MANISH_KUMAR__HOUSING_COLONY_BARIYATU/cam 1.jpg";
import mk16 from "../../assets/Interior-Residential/25_wd_MANISH_KUMAR__HOUSING_COLONY_BARIYATU/cam 2.jpg";

import mk17 from "../../assets/Interior-Residential/25_wd_MANISH_KUMAR__HOUSING_COLONY_BARIYATU/ENTERTAINMENT ROOM.jpg";
import mk18 from "../../assets/Interior-Residential/25_wd_MANISH_KUMAR__HOUSING_COLONY_BARIYATU/ENTERTAINMENT ROOM1.jpg";

import mk19 from "../../assets/Interior-Residential/25_wd_MANISH_KUMAR__HOUSING_COLONY_BARIYATU/G Bed room.jpg";
import mk20 from "../../assets/Interior-Residential/25_wd_MANISH_KUMAR__HOUSING_COLONY_BARIYATU/G Bed rooom.jpg";
import mk21 from "../../assets/Interior-Residential/25_wd_MANISH_KUMAR__HOUSING_COLONY_BARIYATU/G bedroom 2.2.jpg";
import mk22 from "../../assets/Interior-Residential/25_wd_MANISH_KUMAR__HOUSING_COLONY_BARIYATU/G bedroom 2.jpg";

import mk23 from "../../assets/Interior-Residential/25_wd_MANISH_KUMAR__HOUSING_COLONY_BARIYATU/kitchen.jpg";
import mk24 from "../../assets/Interior-Residential/25_wd_MANISH_KUMAR__HOUSING_COLONY_BARIYATU/kitchen1.jpg";

import mk25 from "../../assets/Interior-Residential/25_wd_MANISH_KUMAR__HOUSING_COLONY_BARIYATU/liv.jpg";
import mk26 from "../../assets/Interior-Residential/25_wd_MANISH_KUMAR__HOUSING_COLONY_BARIYATU/living.jpg";

import mk27 from "../../assets/Interior-Residential/25_wd_MANISH_KUMAR__HOUSING_COLONY_BARIYATU/M Bedrom 1.jpg";
import mk28 from "../../assets/Interior-Residential/25_wd_MANISH_KUMAR__HOUSING_COLONY_BARIYATU/M Bedrom 2.jpg";
import mk29 from "../../assets/Interior-Residential/25_wd_MANISH_KUMAR__HOUSING_COLONY_BARIYATU/M Bedrom dressing.jpg";
import mk30 from "../../assets/Interior-Residential/25_wd_MANISH_KUMAR__HOUSING_COLONY_BARIYATU/M Bedrom toilet 2.jpg";
import mk31 from "../../assets/Interior-Residential/25_wd_MANISH_KUMAR__HOUSING_COLONY_BARIYATU/M Bedrom toilet.jpg";

import mk32 from "../../assets/Interior-Residential/25_wd_MANISH_KUMAR__HOUSING_COLONY_BARIYATU/Puja room c1.jpg";
import mk33 from "../../assets/Interior-Residential/25_wd_MANISH_KUMAR__HOUSING_COLONY_BARIYATU/Puja room c2.jpg";
import mk34 from "../../assets/Interior-Residential/25_wd_MANISH_KUMAR__HOUSING_COLONY_BARIYATU/Puja room c22.jpg";
import mk35 from "../../assets/Interior-Residential/25_wd_MANISH_KUMAR__HOUSING_COLONY_BARIYATU/Puja room cc.jpg";

import mk36 from "../../assets/Interior-Residential/25_wd_MANISH_KUMAR__HOUSING_COLONY_BARIYATU/study room 1.jpg";
import mk37 from "../../assets/Interior-Residential/25_wd_MANISH_KUMAR__HOUSING_COLONY_BARIYATU/study room 2.jpg";


/* ===================== SONU ===================== */
import sonu1 from "../../assets/Interior-Residential/Sonu/kit 1.jpg";
import sonu2 from "../../assets/Interior-Residential/Sonu/kit111.jpg";
import sonu3 from "../../assets/Interior-Residential/Sonu/we2e.jpg";

/* ===================== ZR HALL ===================== */
import zr1 from "../../assets/Interior-Residential/Z R -  HALL 1/cam 11.jpg";

/* ===================== ZAFAR IQBAL ===================== */
import far1 from "../../assets/Interior-Residential/Zafar Iqbal For 3d in/1.png";
import far2 from "../../assets/Interior-Residential/Zafar Iqbal For 3d in/2.png";

/* ===================== UTTAM PRASAD ===================== */
import up1 from "../../assets/Interior-Residential/UTTAM_PRASAD___B.D.O._SAHAB/Daughter 1.jpg";
import up2 from "../../assets/Interior-Residential/UTTAM_PRASAD___B.D.O._SAHAB/Daughter 11.jpg";

import up3 from "../../assets/Interior-Residential/UTTAM_PRASAD___B.D.O._SAHAB/dining.jpg";
import up4 from "../../assets/Interior-Residential/UTTAM_PRASAD___B.D.O._SAHAB/dining11.jpg";

import up5 from "../../assets/Interior-Residential/UTTAM_PRASAD___B.D.O._SAHAB/kit cam fd.jpg";
import up6 from "../../assets/Interior-Residential/UTTAM_PRASAD___B.D.O._SAHAB/kit cam.jpg";

import up7 from "../../assets/Interior-Residential/UTTAM_PRASAD___B.D.O._SAHAB/kitchen .jpg";

import up8 from "../../assets/Interior-Residential/UTTAM_PRASAD___B.D.O._SAHAB/M bed 1.jpg";
import up9 from "../../assets/Interior-Residential/UTTAM_PRASAD___B.D.O._SAHAB/M bed 11.jpg";


import up11 from "../../assets/Interior-Residential/UTTAM_PRASAD___B.D.O._SAHAB/Master 1st cam 1.jpg";
import up12 from "../../assets/Interior-Residential/UTTAM_PRASAD___B.D.O._SAHAB/Master 1st cam 2.jpg";
import up13 from "../../assets/Interior-Residential/UTTAM_PRASAD___B.D.O._SAHAB/Master 1st cam 3.jpg";

import up14 from "../../assets/Interior-Residential/UTTAM_PRASAD___B.D.O._SAHAB/master.jpg";
import up15 from "../../assets/Interior-Residential/UTTAM_PRASAD___B.D.O._SAHAB/master2.jpg";

import up16 from "../../assets/Interior-Residential/UTTAM_PRASAD___B.D.O._SAHAB/off cam 2.jpg";
import up17 from "../../assets/Interior-Residential/UTTAM_PRASAD___B.D.O._SAHAB/off cam 3.jpg";
import up18 from "../../assets/Interior-Residential/UTTAM_PRASAD___B.D.O._SAHAB/off cam 4.jpg";
import up19 from "../../assets/Interior-Residential/UTTAM_PRASAD___B.D.O._SAHAB/off cam 5.jpg";

import up20 from "../../assets/Interior-Residential/UTTAM_PRASAD___B.D.O._SAHAB/son 11.jpg";
import up21 from "../../assets/Interior-Residential/UTTAM_PRASAD___B.D.O._SAHAB/son 12.jpg";

import up22 from "../../assets/Interior-Residential/UTTAM_PRASAD___B.D.O._SAHAB/study.jpg";
import up23 from "../../assets/Interior-Residential/UTTAM_PRASAD___B.D.O._SAHAB/study1.jpg";


/* ===================== SATENDER ===================== */
import sat1 from "../../assets/Interior-Residential/Satender/Bedromm 1.1.jpg";
import sat2 from "../../assets/Interior-Residential/Satender/Bedromm 1.jpg";
import sat3 from "../../assets/Interior-Residential/Satender/Bedromm 2.1.jpg";
import sat4 from "../../assets/Interior-Residential/Satender/Bedromm 2.jpg";
import sat5 from "../../assets/Interior-Residential/Satender/dining.jpg";
import sat6 from "../../assets/Interior-Residential/Satender/kitchen 12.jpg";
import sat7 from "../../assets/Interior-Residential/Satender/kitchen11.jpg";
import sat8 from "../../assets/Interior-Residential/Satender/living 2.jpg";
import sat9 from "../../assets/Interior-Residential/Satender/living21.jpg";
import sat10 from "../../assets/Interior-Residential/Satender/m bed  copy.jpg";
import sat11 from "../../assets/Interior-Residential/Satender/m bed 2 copy.jpg";
import sat12 from "../../assets/Interior-Residential/Satender/m bed 22 copy.jpg";
import sat13 from "../../assets/Interior-Residential/Satender/walking closet copy.jpg";

export default function InteriorResidential() {
  const projects = [
    { title: "Ashish Friend", cover: ash1, gallery: [ash1, ash2] },
    { title: "Bedroom", cover: bed1, gallery: [bed1, bed2, bed3, bed4] },
    { title: "DSP Sir", cover: dsp1, gallery: [dsp1, dsp2, dsp3, dsp4, dsp5] },
    { title: "Kids Room", cover: kid1, gallery: [kid1, kid2, kid3, kid4] },
    { title: "Mr. Ram Ratan", cover: ram1, gallery: [ram1, ram2] },
    {
      title: "Manish Kumar",
      cover: mk1,
      gallery: [
        mk1, mk2, mk3, mk4, mk5, mk6, mk7, mk8, mk9, mk10,
        mk11, mk12, mk13, mk14, mk15, mk16, mk17, mk18,
        mk19, mk20, mk21, mk22, mk23, mk24, mk25, mk26,
        mk27, mk28, mk29, mk30, mk31, mk32, mk33, mk34,
        mk35, mk36, mk37,
      ],
    },
    { title: "Sonu", cover: sonu1, gallery: [sonu1, sonu2, sonu3] },
    { title: "ZR Hall", cover: zr1, gallery: [zr1] },
    { title: "Zafar Iqbal", cover: far1, gallery: [far1, far2] },

    /* NEW PROJECTS ADDED */
    {
      title: "Uttam Prasad",
      cover: up1,
      gallery: [
        up1, up2, up3, up4, up5, up6, up7, up8, up9,
        up11, up12, up13, up14, up15, up16, up17, up18,
        up19, up20, up21, up22, up23,
      ],
    },
    {
      title: "Satender",
      cover: sat1,
      gallery: [
        sat1, sat2, sat3, sat4, sat5, sat6, sat7,
        sat8, sat9, sat10, sat11, sat12, sat13,
      ],
    },
  ];

  const [open, setOpen] = useState(false);
  const [projectIndex, setProjectIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? projects : projects.slice(0, 6);
  const currentGallery = projects[projectIndex]?.gallery || [];

  return (
    <section className="bg-black text-white pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <span className="block text-sm tracking-widest uppercase text-gray-400 mb-3">
          Portfolio
        </span>

        <h1 className="text-4xl md:text-6xl font-light mb-14">
          Interior — <span className="font-medium">Residential</span>
        </h1>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {visibleProjects.map((p, i) => (
            <div
              key={i}
              onClick={() => {
                setProjectIndex(i);
                setImageIndex(0);
                setOpen(true);
              }}
              className="relative cursor-pointer group overflow-hidden bg-[#111] rounded-xl"
            >
              <img
                src={getImageSrc(p.cover)}
                alt={p.title}
                className="w-full h-[340px] object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition" />

              <p className="absolute bottom-4 right-4 text-sm bg-white/10 px-3 py-1 rounded-full">
                View Project
              </p>
            </div>
          ))}
        </div>

        {/* VIEW MORE */}
        {projects.length > 6 && (
          <div className="text-center mt-14">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3 bg-white text-black rounded-full hover:bg-gray-200 transition"
            >
              {showAll ? "View Less" : "View More"}
            </button>
          </div>
        )}

        {/* POPUP */}
        {open && (
          <div className="fixed inset-0 bg-black/90 z-[999] flex items-center justify-center">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-6 right-6 text-4xl"
            >
              ✕
            </button>

            <button
              onClick={() =>
                setImageIndex(
                  (imageIndex - 1 + currentGallery.length) %
                    currentGallery.length
                )
              }
              className="absolute left-6 text-5xl"
            >
              ‹
            </button>

            <img
              src={getImageSrc(currentGallery[imageIndex])}
              alt=""
              className="max-h-[85vh] max-w-[90vw] rounded-2xl object-contain"
            />

            <button
              onClick={() =>
                setImageIndex((imageIndex + 1) % currentGallery.length)
              }
              className="absolute right-6 text-5xl"
            >
              ›
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
