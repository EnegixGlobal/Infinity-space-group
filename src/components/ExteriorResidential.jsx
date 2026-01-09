import React, { useState } from "react";

/* Replace these images with your real assets */
/* ================= Krishna Khalkho ================= */
import kk1 from "../assets/exterior- residential/(Krishna Khalkho)/(Krishna Khalkho) c1.jpg";
import kk2 from "../assets/exterior- residential/(Krishna Khalkho)/(Krishna Khalkho) c2.jpg";
import kk3 from "../assets/exterior- residential/(Krishna Khalkho)/(Krishna Khalkho) c3.jpg";
import kk4 from "../assets/exterior- residential/(Krishna Khalkho)/(Krishna Khalkho) c5.jpg";
import kk5 from "../assets/exterior- residential/(Krishna Khalkho)/(Krishna Khalkho) c55.jpg";

/* ================= 3d ================= */
import d3_1 from "../assets/exterior- residential/3d/3d c1 copy.jpg";
import d3_2 from "../assets/exterior- residential/3d/3d c1.jpg";
import d3_3 from "../assets/exterior- residential/3d/3d c2.jpg";
import d3_4 from "../assets/exterior- residential/3d/3d c2 copy.jpg";

/* ================= 3Dd ================= */
import d3d1 from "../assets/exterior- residential/3Dd/3D c1.jpg";
import d3d2 from "../assets/exterior- residential/3Dd/3D c2.jpg";

/* ================= anil ================= */
import anil1 from "../assets/exterior- residential/anil/front cngs.jpg";

/* ================= anill ================= */
import anill1 from "../assets/exterior- residential/anill/anil.jpg";

/* ================= ANUJ JI ================= */
import anuj1 from "../assets/exterior- residential/ANUJ JI/ANUJ JI c1.jpg";
import anuj2 from "../assets/exterior- residential/ANUJ JI/ANUJ JI c2.jpg";
import anuj3 from "../assets/exterior- residential/ANUJ JI/ANUJ JI c3.jpg";

/* ================= BABLU ================= */
import bablu1 from "../assets/exterior- residential/BABLU/BABLU c1.jpg";
import bablu2 from "../assets/exterior- residential/BABLU/BABLU c2.jpg";

/* ================= BADAL NEW ================= */
import badal1 from "../assets/exterior- residential/BADAL NEW/BADAL NEW c11.jpg";

/* ================= BAHERA ================= */
import bahera1 from "../assets/exterior- residential/BAHERA/BAHERA c1.jpg";

/* ================= BEDO ================= */
import bedo1 from "../assets/exterior- residential/BEDO/bedo c1.jpg";
import bedo2 from "../assets/exterior- residential/BEDO/bedo c2.jpg";

/* ================= bero jaamrtoli n1 ================= */
import bero1 from "../assets/exterior- residential/bero jaamrtoli n1/amit kerketta 1.jpg";

/* ================= DESIGN - Copy ================= */
import design1 from "../assets/exterior- residential/DESIGN - Copy/DESIGN - Copy c1 cc.jpg";

/* ================= DESIGN - Copy (3) ================= */
import design3_1 from "../assets/exterior- residential/DESIGN - Copy (3)/DESIGN - c1 copy.jpg";


/* ================= Eric_Bhaiya-FF-OPT-2 ================= */
import eric1 from "../assets/exterior- residential/Eric_Bhaiya-FF-OPT-2/Eric_Bhaiya c1.jpg";
import eric2 from "../assets/exterior- residential/Eric_Bhaiya-FF-OPT-2/Eric_Bhaiya c2.jpg";
import eric3 from "../assets/exterior- residential/Eric_Bhaiya-FF-OPT-2/Eric_Bhaiya c3.jpg";
import eric4 from "../assets/exterior- residential/Eric_Bhaiya-FF-OPT-2/Eric_Bhaiya c4.jpg";

/* ================= G +2 ================= */
import g2 from "../assets/exterior- residential/G +2/G +2.jpg";

/* ================= ganesh ji ================= */
import ganesh1 from "../assets/exterior- residential/ganesh ji/ganesh ji.jpg";
import ganesh2 from "../assets/exterior- residential/ganesh ji/ganesh ji copy.jpg";

/* ================= jitendra prasad ================= */
import jit1 from "../assets/exterior- residential/jitendra prasad/jitendar c1.jpg";
import jit2 from "../assets/exterior- residential/jitendra prasad/jitendar c2.jpg";


/* ================= lowadih 02 ================= */
import low1 from "../assets/exterior- residential/lowadih 02/lowadih 02 c1 copy.png";


/* ================= MM_Harmu_friend ================= */
import mm1 from "../assets/exterior- residential/MM_Harmu_friend/MM_Harmu_friend c1 .jpg";
import mm2 from "../assets/exterior- residential/MM_Harmu_friend/MM_Harmu_friend c2.jpg";
import mm3 from "../assets/exterior- residential/MM_Harmu_friend/MM_Harmu_friend c3.jpg";

/* ================= MR.ISTEKHAR 3D ================= */
import is1 from "../assets/exterior- residential/MR.ISTEKHAR 3D/MR.ISTEKHAR 3D c1.jpg";


/* ================= MR.RAJIV ================= */
import rajiv1 from "../assets/exterior- residential/MR.RAJIV/MR.RAJIV -c2.jpg";


/* ================= MR.RAMESH ================= */
import ramesh1 from "../assets/exterior- residential/MR.RAMESH/MR.RAMESH c1.jpg";


/* ================= MY HOME PLAN ================= */
import myhome1 from "../assets/exterior- residential/MY HOME PLAN/c1.jpg";

/* ================= My House ================= */
import house1 from "../assets/exterior- residential/My House/c1.jpg";
import house2 from "../assets/exterior- residential/My House/c2.jpg";
import house3 from "../assets/exterior- residential/My House/c3.jpg";
import house4 from "../assets/exterior- residential/My House/cc1.jpg";


/* ================= NIRAJ NAMKUN ================= */
import niraj1 from "../assets/exterior- residential/NIRAJ NAMKUN/NIRAJ NAMKUN c1 copy 2.jpg";

/* ================= PANKAJ JI ================= */
import pankaj1 from "../assets/exterior- residential/PANKAJ JI/PANKAJ JI c1.jpg";

/* ================= pawan ji kanke ================= */
import pawan1 from "../assets/exterior- residential/pawan ji kanke/pawan ji kanke c1 copy.jpg";


/* ================= pramod fufa FINAL ================= */
import pramod1 from "../assets/exterior- residential/pramod fufa FINAL/pramod fufa FINAL c1.jpg";


/* ================= RAJIV SIR plan 3d ================= */
import plan1 from "../assets/exterior- residential/RAJIV SIR plan 3d/RAJIV SIR plan 3d c3.jpg";


/* ================= RAM JI ================= */
import ram1 from "../assets/exterior- residential/RAM JI/RAM JI c 2.jpg";
import ram2 from "../assets/exterior- residential/RAM JI/RAM JI c1.jpg";


/* ================= Satender ================= */
import sat1 from "../assets/exterior- residential/Satender/ren c1 copy.jpg";
import sat2 from "../assets/exterior- residential/Satender/ren c2.jpg";

/* ================= shiv_oraon_chiraundi ================= */
import shiv1 from "../assets/exterior- residential/shiv_oraon_chiraundi/shiv_oraon_chiraundi c1.jpg";


/* ================= SUBODH JI ================= */
import subodh1 from "../assets/exterior- residential/SUBODH JI/SUBODH JI c1.jpg";


/* ================= surendar_mama ================= */
import sur1 from "../assets/exterior- residential/surendar_mama/cam 1.jpg";


/* ================= TAIGAR ================= */
import taigar1 from "../assets/exterior- residential/TAIGAR/TAIGAR c1.jpg";
import taigar2 from "../assets/exterior- residential/TAIGAR/TAIGAR c2.jpg";


/* ================= tanish ji first and second floor ================= */
import tanish1 from "../assets/exterior- residential/tanish ji first and second floor/tanish ji first and second floor c1 copy.jpg";
import tanish2 from "../assets/exterior- residential/tanish ji first and second floor/tanish ji first and second floor c2.jpg";

/* ================= Tikeshwar_ji ================= */
import tik1 from "../assets/exterior- residential/Tikeshwar_ji/Tikeshwar_ji c1.jpg";

/* ================= Vk Veerma ================= */
import vk1 from "../assets/exterior- residential/Vk Veerma/vk verma sir C11.jpg";
import vk2 from "../assets/exterior- residential/Vk Veerma/vk verma sir C22.jpg";
import { i } from "framer-motion/client";


export default function ExteriorResidential() {
  const images = [
  {
    title: "Krishna Khalkho",
    cover: kk1,
    gallery: [kk1, kk2, kk3, kk4, kk5],
  },
  {
    title: "3D",
    cover: d3_1,
    gallery: [d3_1, d3_2, d3_3, d3_4],
  },
  {
    title: "3Dd",
    cover: d3d1,
    gallery: [d3d1, d3d2],
  },
  {
    title: "Anil",
    cover: anil1,
    gallery: [anil1],
  },
  {
    title: "Anill",
    cover: anill1,
    gallery: [anill1],
  },
  {
    title: "Anuj Ji",
    cover: anuj1,
    gallery: [anuj1, anuj2, anuj3],
  },
  {
    title: "Bablu",
    cover: bablu1,
    gallery: [bablu1, bablu2],
  },
  {
    title: "Badal New",
    cover: badal1,
    gallery: [badal1],
  },
  {
    title: "Bahera",
    cover: bahera1,
    gallery: [bahera1],
  },
  {
    title: "Bedo",
    cover: bedo1,
    gallery: [bedo1, bedo2],
  },
  {
    title: "Bero Jaamrtoli N1",
    cover: bero1,
    gallery: [bero1],
  },
  {
    title: "Design Copy",
    cover: design1,
    gallery: [design1],
  },
  {
    title: "Design Copy (3)",
    cover: design3_1,
    gallery: [design3_1],
  },
  {
    title: "Eric Bhaiya",
    cover: eric1,
    gallery: [eric1, eric2, eric3, eric4],
  },
  {
    title: "G +2",
    cover: g2,
    gallery: [g2],
  },
  {
    title: "Ganesh Ji",
    cover: ganesh1,
    gallery: [ganesh1, ganesh2],
  },
  {
    title: "Jitendra Prasad",
    cover: jit1,
    gallery: [jit1, jit2],
  },
  {
    title: "Lowadih 02",
    cover: low1,
    gallery: [low1],
  },
  {
    title: "MM Harmu Friend",
    cover: mm1,
    gallery: [mm1, mm2, mm3],
  },
  {
    title: "Mr. Istekhar 3D",
    cover: is1,
    gallery: [is1],
  },
  {
    title: "Mr. Rajiv",
    cover: rajiv1,
    gallery: [rajiv1],
  },
  {
    title: "Mr. Ramesh",
    cover: ramesh1,
    gallery: [ramesh1],
  },
  {
    title: "My Home Plan",
    cover: myhome1,
    gallery: [myhome1],
  },
  {
    title: "My House",
    cover: house1,
    gallery: [
      house1,
      house2,
      house3,
      house4,
    ],
  },
  {
    title: "Niraj Namkun",
    cover: niraj1,
    gallery: [niraj1],
  },

  {
    title: "Pankaj Ji",
    cover: pankaj1,
    gallery: [pankaj1],
  },
  {
    title: "Pawan Ji Kanke",
    cover: pawan1,
    gallery: [pawan1],
  },
  {
    title: "Pramod Fufa Final",
    cover: pramod1,
    gallery: [pramod1],
  },
  {
    title: "Rajiv Sir Plan 3D",
    cover: plan1,
    gallery: [plan1],
  },
  {
    title: "Ram Ji",
    cover: ram1,
    gallery: [ram1, ram2],
  },
  {
    title: "Satender",
    cover: sat1,
    gallery: [sat1, sat2],
  },
  {
    title: "Shiv Oraon Chiraundi",
    cover: shiv1,
    gallery: [shiv1, ],
  },
  {
    title: "Subodh Ji",
    cover: subodh1,
    gallery: [subodh1],
  },
  {
    title: "Surendar Mama",
    cover: sur1,
    gallery: [sur1],
  },
  {
    title: "Taigar",
    cover: taigar1,
    gallery: [taigar1, taigar2],
  },
  {
    title: "Tanish Ji First & Second Floor",
    cover: tanish1,
    gallery: [tanish1, tanish2],
  },
  {
    title: "Tikeshwar Ji",
    cover: tik1,
    gallery: [tik1],
  },
  {
    title: "Vk Veerma",
    cover: vk1,
    gallery: [vk1, vk2],
  },
];

// 🔹 popup state
  const [open, setOpen] = useState(false);
  const [projectIndex, setProjectIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);

  // 🔹 FIX: use images (not projects)
  const currentGallery = images[projectIndex]?.gallery || [];

  const nextImage = () =>
    setImageIndex((i) => (i + 1) % currentGallery.length);

  const prevImage = () =>
    setImageIndex(
      (i) => (i - 1 + currentGallery.length) % currentGallery.length
    );

  return (
    <section className="bg-black text-white pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <span className="block text-sm tracking-widest uppercase text-gray-400 mb-3">
          Portfolio
        </span>

        <h1 className="text-4xl md:text-6xl font-light mb-14">
          Exterior — <span className="font-medium">Residential</span>
        </h1>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {images.map((p, i) => (
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