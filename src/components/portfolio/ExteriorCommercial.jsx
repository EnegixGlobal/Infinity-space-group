"use client";

import React, { useState } from "react";
import { getImageSrc } from "@/lib/imageHelper";

/* 1️⃣ ANUJ COMPLEX */
const anuj1 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768811827/infinity-space/exterior-commercial/ftsdhaa4afsf8b9ttljw.jpg";
const anuj2 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768811864/infinity-space/exterior-commercial/thyf1qrzh37vptk2mpsp.jpg";

/* 2️⃣ BHAIYA JI */
const bhaiyaji = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768811943/infinity-space/exterior-commercial/b1zwk4llhvhknpc0di2u.jpg";

/* 3️⃣ MARRIAGE HALL RING ROAD */
const hall1 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768812000/infinity-space/exterior-commercial/mplarofotpvfa94a6h0f.jpg";
const hall2 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768812033/infinity-space/exterior-commercial/vxs7zksalaegsctxb4ae.jpg";

/* 4️⃣ MR. SHAIKH FAHIM */
const fahim = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768812136/infinity-space/exterior-commercial/qzmov1owhrd0z2reu7t7.jpg";

/* 5️⃣ MR. AJAY */
const ajay1 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768812222/infinity-space/exterior-commercial/ei8itbkiue02m5zl9vfy.jpg";
const ajay2 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768812264/infinity-space/exterior-commercial/of85p6yqaqgcheogr3yj.jpg";
const ajay3 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768812309/infinity-space/exterior-commercial/yg9jp6ojt42wygbhlfnj.jpg";

/* 6️⃣ MR. SAKENDRA */
const sakendra = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768812419/infinity-space/exterior-commercial/egdlxrqin0a8oyxa6s6n.jpg";

/* 7️⃣ NAVNIT */
const nav1 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768812604/infinity-space/exterior-commercial/ak3oxoyox3lqo1ulvcrc.jpg";
const nav2 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768812654/infinity-space/exterior-commercial/badhfbwf8zhgtiyvppcb.jpg";

/* 8️⃣ RESTAURANT */
const res1 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768812735/infinity-space/exterior-commercial/ef7zipyzqxyjx15nhkp9.jpg";
const res2 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768812749/infinity-space/exterior-commercial/c0a15vfivk9lymznjokn.jpg";
const res3 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768812768/infinity-space/exterior-commercial/w5z6vggwy3tjkbobsym7.jpg";

/* 9️⃣ SCHOOL */
const sch1 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768812887/infinity-space/exterior-commercial/lmfvwyxxj11vrlall1cs.jpg";
const sch2 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768812936/infinity-space/exterior-commercial/m3mjlik9i6bwqfiejomp.jpg";

/* 🔟 ST. FRANCIS */
const st1 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768813015/infinity-space/exterior-commercial/aimwlx6al7vgvro41pst.jpg";
const st2 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768813059/infinity-space/exterior-commercial/bhz5brjc31ytncejvls3.jpg";
const st3 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768813122/infinity-space/exterior-commercial/gysbij0ioikr3dy5vbq1.jpg";
const st4 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768813182/infinity-space/exterior-commercial/jat7x0cmtru6rdqfqizd.jpg";

/* 1️⃣1️⃣ VIKI JI RAMGHAR */
const viki1 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768813330/infinity-space/exterior-commercial/hizrn2brsb7xi2rf59nk.jpg";
const viki2 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768813397/infinity-space/exterior-commercial/jqzm0kzzyoycrukby2ig.jpg";
const viki3 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768813438/infinity-space/exterior-commercial/c5tpoum2lllaw9e2f8uj.jpg";

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
                src={getImageSrc(p.cover)}
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
              src={getImageSrc(currentGallery[imageIndex])}
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
