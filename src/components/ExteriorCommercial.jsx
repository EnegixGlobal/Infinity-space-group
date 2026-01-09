import React, { useState } from "react";

/* 1️⃣ ANUJ COMPLEX */
import anuj1 from "../assets/exterior- commercial/anuj lrg/anuj lrg c1 copy.jpg";
import anuj2 from "../assets/exterior- commercial/anuj lrg/anuj lrg c1.jpg";

/* 2️⃣ BHAIYA JI */
import bhaiyaji from "../assets/exterior- commercial/bhaiya ji/bhaiya ji.jpg";

/* 3️⃣ MARRIAGE HALL RING ROAD */
import hall1 from "../assets/exterior- commercial/Marrage_hall_ring_road/Marrage_hall_ring_road c2 copy.jpg";
import hall2 from "../assets/exterior- commercial/Marrage_hall_ring_road/Marrage_hall_ring_road c3 copy.jpg";

/* 4️⃣ MR. SHAIKH FAHIM */
import fahim from "../assets/exterior- commercial/Mr. shaikh fahim/MR. SHAIKH FAHIM .jpg";

/* 5️⃣ MR. AJAY */
import ajay1 from "../assets/exterior- commercial/MR.AJAY/MR.AJAY-c1.jpg";
import ajay2 from "../assets/exterior- commercial/MR.AJAY/MR.AJAY-c2.jpg";
import ajay3 from "../assets/exterior- commercial/MR.AJAY/MR.AJAY-c3.jpg";

/* 6️⃣ MR. SAKENDRA */
import sakendra from "../assets/exterior- commercial/MR.SAKENDRA/MR.SAKENDRA.jpg";

/* 7️⃣ NAVNIT */
import nav1 from "../assets/exterior- commercial/NAVNIT/navnit.jpg";
import nav2 from "../assets/exterior- commercial/NAVNIT/navnit C1.jpg";

/* 8️⃣ RESTAURANT */
import res1 from "../assets/exterior- commercial/RESTAURANT/RESTAURANT c1 copy.jpg";
import res2 from "../assets/exterior- commercial/RESTAURANT/RESTAURANT c2 copy.jpg";
import res3 from "../assets/exterior- commercial/RESTAURANT/RESTAURANT c3 copy.jpg";

/* 9️⃣ SCHOOL */
import sch1 from "../assets/exterior- commercial/school/school c1.jpg";
import sch2 from "../assets/exterior- commercial/school/school c2.jpg";

/* 🔟 ST. FRANCIS */
import st1 from "../assets/exterior- commercial/ST.FRANCIS NILAY O.S.F.SISTER UKRID VILLAGE 05 A-1/ST.FRANCIS NILAY O.S.F.SISTER UKRID VILLAGE 05 A-1 c1.jpg";
import st2 from "../assets/exterior- commercial/ST.FRANCIS NILAY O.S.F.SISTER UKRID VILLAGE 05 A-1/ST.FRANCIS NILAY O.S.F.SISTER UKRID VILLAGE 05 A-1 c2.jpg";
import st3 from "../assets/exterior- commercial/ST.FRANCIS NILAY O.S.F.SISTER UKRID VILLAGE 05 A-1/ST.FRANCIS NILAY O.S.F.SISTER UKRID VILLAGE 05 A-1 c3.jpg";
import st4 from "../assets/exterior- commercial/ST.FRANCIS NILAY O.S.F.SISTER UKRID VILLAGE 05 A-1/ST.FRANCIS NILAY O.S.F.SISTER UKRID VILLAGE 05 A-1 c4.jpg";

/* 1️⃣1️⃣ VIKI JI RAMGHAR */
import viki1 from "../assets/exterior- commercial/Viki Ji Ramghar/cam 11.jpg";
import viki2 from "../assets/exterior- commercial/Viki Ji Ramghar/vijai ji2 cop.jpg";
import viki3 from "../assets/exterior- commercial/Viki Ji Ramghar/vijai ji2 copy.jpg";

export default function ExteriorCommercial() {
  const projects = [
    { title: "Anuj Complex", cover: anuj1, gallery: [anuj1, anuj2] },
    { title: "Bhaiya Ji", cover: bhaiyaji, gallery: [bhaiyaji] },
    {
      title: "Marriage Hall Ring Road",
      cover: hall1,
      gallery: [hall1, hall2],
    },
    { title: "Mr. Shaikh Fahim", cover: fahim, gallery: [fahim] },
    {
      title: "Mr. Ajay",
      cover: ajay1,
      gallery: [ajay1, ajay2, ajay3],
    },
    { title: "Mr. Sakendra", cover: sakendra, gallery: [sakendra] },
    { title: "Navnit", cover: nav1, gallery: [nav1, nav2] },
    {
      title: "Restaurant",
      cover: res1,
      gallery: [res1, res2, res3],
    },
    { title: "School", cover: sch1, gallery: [sch1, sch2] },
    {
      title: "St. Francis",
      cover: st1,
      gallery: [st1, st2, st3, st4],
    },
    {
      title: "Viki Ji Ramghar",
      cover: viki1,
      gallery: [viki1, viki2, viki3],
    },
  ];

  const [open, setOpen] = useState(false);
  const [projectIndex, setProjectIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);

  const currentGallery = projects[projectIndex]?.gallery || [];

  const nextImage = () =>
    setImageIndex((i) => (i + 1) % currentGallery.length);

  const prevImage = () =>
    setImageIndex((i) => (i - 1 + currentGallery.length) % currentGallery.length);

  return (
    <section className="bg-black text-white pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <span className="block text-sm tracking-widest uppercase text-gray-400 mb-3">
          Portfolio
        </span>

        <h1 className="text-4xl md:text-6xl font-light mb-14">
          Exterior — <span className="font-medium">Commercial</span>
        </h1>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((p, i) => (
            <div
              key={i}
              className="relative cursor-pointer group overflow-hidden bg-[#111] rounded-xl"
              onClick={() => {
                setProjectIndex(i);
                setImageIndex(0);
                setOpen(true);
              }}
            >
              <img
                src={p.cover}
                className="w-full h-[340px] object-cover transition-transform duration-700 group-hover:scale-105"
                alt={p.title}
              />
              <div className="absolute inset-0 bg-black/25 group-hover:bg-black/40 transition" />
              <p className="absolute bottom-4 right-4 text-sm bg-white/10 px-3 py-1 rounded-full">
                View Project
              </p>
            </div>
          ))}
        </div>

        {/* POPUP */}
        {open && (
          <div className="fixed inset-0 bg-black/90 z-[999] flex items-center justify-center">
            <button
              className="absolute top-6 right-6 text-white text-3xl"
              onClick={() => setOpen(false)}
            >
              ✕
            </button>

            <button
              className="absolute left-6 text-4xl text-white"
              onClick={prevImage}
            >
              ‹
            </button>

            <img
              src={currentGallery[imageIndex]}
              className="max-h-[85vh] max-w-[90vw] rounded-2xl object-contain shadow-lg"
              alt="project"
            />

            <button
              className="absolute right-6 text-4xl text-white"
              onClick={nextImage}
            >
              ›
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
