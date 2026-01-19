"use client";

import React, { useState } from "react";
import { getImageSrc } from "@/lib/imageHelper";

/* ===================== HOSPITAL ===================== */
import dr1 from "../../assets/Interior-Commercial/hospital/dr chamber.jpg";
import dr2 from "../../assets/Interior-Commercial/hospital/dr chamber1.jpg";
import medi from "../../assets/Interior-Commercial/hospital/medi.jpg";
import rec1 from "../../assets/Interior-Commercial/hospital/rec1.jpg";
import rec2 from "../../assets/Interior-Commercial/hospital/rec2.jpg";

/* ===================== MS TRUEDENTAL CARE ===================== */
import cabin1 from "../../assets/Interior-Commercial/MS TRUEDENTAL CARE/cabin1.jpg";
import cabin2 from "../../assets/Interior-Commercial/MS TRUEDENTAL CARE/cabin.jpg";
import reception from "../../assets/Interior-Commercial/MS TRUEDENTAL CARE/reciption.jpg";
import reception2 from "../../assets/Interior-Commercial/MS TRUEDENTAL CARE/reciption22.jpg";
import surgery1 from "../../assets/Interior-Commercial/MS TRUEDENTAL CARE/surgry area.jpg";
import surgery2 from "../../assets/Interior-Commercial/MS TRUEDENTAL CARE/surgry area1.jpg";

/* ===================== NAMKOM CANTT ===================== */
import nam1 from "../../assets/Interior-Commercial/NAMKOM_CANTT/NAMKOM_CANTT1.jpg";
import nam2 from "../../assets/Interior-Commercial/NAMKOM_CANTT/NAMKOM_CANTT c2.jpg";
import nam3 from "../../assets/Interior-Commercial/NAMKOM_CANTT/NAMKOM_CANTT c3.jpg";
import nam4 from "../../assets/Interior-Commercial/NAMKOM_CANTT/NAMKOM_CANTT2.jpg";
import nam5 from "../../assets/Interior-Commercial/NAMKOM_CANTT/NAMKOM_CANTT.jpg";

/* ===================== RESTAURANT CUM BAR ===================== */
import count1 from "../../assets/Interior-Commercial/RESTAURANT_CUM_BAR/count.jpg";
import count2 from "../../assets/Interior-Commercial/RESTAURANT_CUM_BAR/count1.jpg";
import count3 from "../../assets/Interior-Commercial/RESTAURANT_CUM_BAR/count2.jpg";
import rest1 from "../../assets/Interior-Commercial/RESTAURANT_CUM_BAR/rest.jpg";
import rest2 from "../../assets/Interior-Commercial/RESTAURANT_CUM_BAR/rest2.jpg";
import rest3 from "../../assets/Interior-Commercial/RESTAURANT_CUM_BAR/rest3.jpg";

/* ===================== BAR PLAN ===================== */
import bar1 from "../../assets/Interior-Commercial/BAR PLAN/baar c3.jpg";
import bar2 from "../../assets/Interior-Commercial/BAR PLAN/baar c5.jpg";
import bar3 from "../../assets/Interior-Commercial/BAR PLAN/baar c6.jpg";
import bar4 from "../../assets/Interior-Commercial/BAR PLAN/baar c7.jpg";
import bar5 from "../../assets/Interior-Commercial/BAR PLAN/baar c11.jpg";
import bar6 from "../../assets/Interior-Commercial/BAR PLAN/baar c22.jpg";
import bar7 from "../../assets/Interior-Commercial/BAR PLAN/bar c1.jpg";
import bar8 from "../../assets/Interior-Commercial/BAR PLAN/bar c2.jpg";
import bar9 from "../../assets/Interior-Commercial/BAR PLAN/bar cam8 copy.jpg";
import bar10 from "../../assets/Interior-Commercial/BAR PLAN/bar cam9 copy.jpg";
import bar11 from "../../assets/Interior-Commercial/BAR PLAN/bar cam10 copy.jpg";

/* ===================== OFFICE MODEL ===================== */
import off1 from "../../assets/Interior-Commercial/fanta uncle office-Model/office c1.jpg";
import off2 from "../../assets/Interior-Commercial/fanta uncle office-Model/office c2.jpg";
import off3 from "../../assets/Interior-Commercial/fanta uncle office-Model/office c3.jpg";
import off4 from "../../assets/Interior-Commercial/fanta uncle office-Model/office c4.jpg";
import off5 from "../../assets/Interior-Commercial/fanta uncle office-Model/uncle office c2.jpg";
import off6 from "../../assets/Interior-Commercial/fanta uncle office-Model/uncle office c3.jpg";

/* ===================== GYM ===================== */
import gym1 from "../../assets/Interior-Commercial/gym/THIRD FLOOR PLAN.jpg";
import gym2 from "../../assets/Interior-Commercial/gym/bath c1 copy.jpg";
import gym3 from "../../assets/Interior-Commercial/gym/bath c2 copy.jpg";
import gym4 from "../../assets/Interior-Commercial/gym/gym22.jpg";
import gym5 from "../../assets/Interior-Commercial/gym/gym33.jpg";
import gym6 from "../../assets/Interior-Commercial/gym/gym111.jpg";

export default function InteriorCommercial() {
  const projects = [
    {
      title: "Hospital",
      cover: dr1,
      gallery: [dr1, dr2, medi, rec1, rec2],
    },
    {
      title: "MS Truedental Care",
      cover: cabin1,
      gallery: [cabin1, cabin2, reception, reception2, surgery1, surgery2],
    },
    {
      title: "Namkom Cantt",
      cover: nam1,
      gallery: [nam1, nam2, nam3, nam4, nam5],
    },
    {
      title: "Restaurant Cum Bar",
      cover: count1,
      gallery: [count1, count2, count3, rest1, rest2, rest3],
    },
    {
      title: "Bar Plan",
      cover: bar1,
      gallery: [bar1, bar2, bar3, bar4, bar5, bar6, bar7, bar8, bar9, bar10, bar11],
    },
    {
      title: "Office Model",
      cover: off1,
      gallery: [off1, off2, off3, off4, off5, off6],
    },
    {
      title: "Gym",
      cover: gym1,
      gallery: [gym1, gym2, gym3, gym4, gym5, gym6],
    },
  ];

  const [open, setOpen] = useState(false);
  const [projectIndex, setProjectIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);

  const currentGallery = projects[projectIndex]?.gallery || [];

  return (
    <section className="bg-black text-white pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <span className="block text-sm tracking-widest uppercase text-gray-400 mb-3">
          Portfolio
        </span>

        <h1 className="text-4xl md:text-6xl font-light mb-14">
          Interior — <span className="font-medium">Commercial</span>
        </h1>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((p, i) => (
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
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/45 transition" />
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
              onClick={() => setOpen(false)}
              className="absolute top-6 right-6 text-3xl"
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
              className="absolute left-6 text-4xl"
            >
              ‹
            </button>

            <img
              src={getImageSrc(currentGallery[imageIndex])}
              className="max-h-[85vh] max-w-[90vw] rounded-2xl object-contain"
              alt="project"
            />

            <button
              onClick={() =>
                setImageIndex((imageIndex + 1) % currentGallery.length)
              }
              className="absolute right-6 text-4xl"
            >
              ›
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
