"use client";

import React, { useState } from "react";
import { getImageSrc } from "@/lib/imageHelper";

/* ===================== HOSPITAL ===================== */
const dr1 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768886504/infinity-space/interior-commercial/tadetmxxqi0usjl23zau.jpg";
const dr2 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768886503/infinity-space/interior-commercial/pfqse9f0eqpdmletmisj.jpg";
const medi = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768886502/infinity-space/interior-commercial/t59ird5voglorvcak2pv.jpg";
const rec1 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768886505/infinity-space/interior-commercial/e7kyve2yjrbkn17g9wab.jpg";
const rec2 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768886505/infinity-space/interior-commercial/lhd4n08wkxewb8mwgmll.jpg";

/* ===================== MS TRUEDENTAL CARE ===================== */
const cabin1 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768886676/infinity-space/interior-commercial/ofxsaw06m3ofczgias5m.jpg";
const cabin2 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768886675/infinity-space/interior-commercial/txbelgzbnojo7undie0i.jpg";
const reception = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768886676/infinity-space/interior-commercial/vxj4iukfgvkrh4qubwhr.jpg";
const reception2 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768886673/infinity-space/interior-commercial/c61daqomgmjubve6glys.jpg";
const surgery1 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768886676/infinity-space/interior-commercial/scp39dznkb1ffo1runoe.jpg";
const surgery2 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768886675/infinity-space/interior-commercial/h4eevnlltech7splpnfj.jpg";

/* ===================== NAMKOM CANTT ===================== */
const nam1 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768886924/infinity-space/interior-commercial/uoj7sow8hzgbepziopxs.jpg";
const nam2 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768886924/infinity-space/interior-commercial/cxm0g0sxjyvfm9nza38o.jpg";
const nam3 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768886923/infinity-space/interior-commercial/xto3z6naquha7s1omykb.jpg";
const nam4 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768886922/infinity-space/interior-commercial/g0k5vmhvjnsrup6wc8t6.jpg";
const nam5 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768886923/infinity-space/interior-commercial/qjk2ivf2oozvgcpvewp3.jpg";

/* ===================== RESTAURANT CUM BAR ===================== */
const count1 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768887152/infinity-space/interior-commercial/ry9jtqn4hqlcyzsqsnae.jpg";
const count2 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768887152/infinity-space/interior-commercial/uclj3hramapxkf8muzqx.jpg";
const count3 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768887153/infinity-space/interior-commercial/z29fkggj3edv7wxml1vd.jpg";
const rest1 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768887149/infinity-space/interior-commercial/upojd3ubtuqawrmlosb3.jpg";
const rest2 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768887151/infinity-space/interior-commercial/yk9kngdvx9nl2wtfgszm.jpg";
const  rest3 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768887152/infinity-space/interior-commercial/qc3m0tz62dxllserkdox.jpg";

/* ===================== BAR PLAN ===================== */
const bar1 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768887387/infinity-space/interior-commercial/d6vyejeswcdf33k06pdl.jpg";
const bar2 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768887387/infinity-space/interior-commercial/vx8gtdppcrgjvexl4lhp.jpg";
const bar3 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768887388/infinity-space/interior-commercial/svmkjps78dkubztrudqm.jpg";
const bar4 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768887387/infinity-space/interior-commercial/xmiyvdkhdwal3mvmgbhg.jpg";
const bar5 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768887387/infinity-space/interior-commercial/o6l0yseg2gqwjgbl7yz6.jpg";
const bar6 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768887388/infinity-space/interior-commercial/weqoamhjf04j16ue2xor.jpg";
const bar7 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768887391/infinity-space/interior-commercial/h1vzrmmxzq5pbmgym6no.jpg";
const bar8 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768887393/infinity-space/interior-commercial/sa9pagtnspgbjbquyvfc.jpg";
const bar9 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768887392/infinity-space/interior-commercial/ktnbx3zsqbpckm4ajuvj.jpg";
const bar10 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768887395/infinity-space/interior-commercial/s6wjyadxyjefwz9ovka4.jpg";
const bar11 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768887393/infinity-space/interior-commercial/qa0akuqmhndpu4qxrftv.jpg";

/* ===================== OFFICE MODEL ===================== */
const off1 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768887862/infinity-space/interior-commercial/sirrditccepfvaujdoqd.jpg";
const off2 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768887861/infinity-space/interior-commercial/c3bdlz3tuorgiby8bnai.jpg";
const off3 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768887869/infinity-space/interior-commercial/huzcm5yoj4mmcgq6r1q5.jpg";
const off4 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768887862/infinity-space/interior-commercial/ae4uxlq9ayu9vx33qcra.jpg";
const off5 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768887863/infinity-space/interior-commercial/oafrsmlhvlct0qksbgid.jpg";
const off6 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768887862/infinity-space/interior-commercial/kaac44hnzpm3juhp6vm5.jpg";

/* ===================== GYM ===================== */
const gym1 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768888250/infinity-space/interior-commercial/ghdk18mczej4bjd2ctk9.jpg";
const gym2 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768888250/infinity-space/interior-commercial/n4a7cu9pjbyspgyca8en.jpg";
const gym3 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768888249/infinity-space/interior-commercial/whx84nhyelgkjcjvuafk.jpg";
const gym4 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768888239/infinity-space/interior-commercial/ezuuanriggdpblicz0gg.jpg";
const gym5 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768888250/infinity-space/interior-commercial/gguaoqxcrnmuzf9ezakd.jpg";
const gym6 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768888240/infinity-space/interior-commercial/h6gbrr3rmdcxcbwq8xpu.jpg";

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
