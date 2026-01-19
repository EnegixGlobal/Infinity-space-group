"use client";

import React, { useState } from "react";
import { getImageSrc } from "@/lib/imageHelper";

/* Replace these images with your real assets */
/* ================= Krishna Khalkho ================= */
const kk1 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768643280/infinity-space/exterior-residential/l4ugzpmz1t67din34lpx.jpg";
const kk2 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768643324/infinity-space/exterior-residential/i5fk0gkaiinuy5sj4dg3.jpg";
const kk3 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768643360/infinity-space/exterior-residential/wuurl8ntppp6m0ysvbl0.jpg";
const kk4 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768644001/infinity-space/exterior-residential/qzkzqscwm7ki2ozskyfq.jpg";
const kk5 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768644026/infinity-space/exterior-residential/gigglsstwkiyoxqyqmlw.jpg";

/* ================= 3d ================= */
const d3_1 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768644707/infinity-space/exterior-residential/f1bbosywudqqj0pokftw.jpg";
const d3_2 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768644794/infinity-space/exterior-residential/y8mlasqnuiiocg7vafqq.jpg";
const d3_3 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768644843/infinity-space/exterior-residential/p4aamwqakaujf0zgkvvu.jpg";
const d3_4 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768644973/infinity-space/exterior-residential/tepppyrewq3wthq5gpz8.jpg";

/* ================= 3Dd ================= */
const d3d1 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768645215/infinity-space/exterior-residential/y96t7oh0vcosixxatabo.jpg";
const d3d2 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768645307/infinity-space/exterior-residential/k6lvtm2kezubnwe6xf1n.jpg";

/* ================= anil ================= */
const anil1 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768645450/infinity-space/exterior-residential/abczmnyknfksu9s7tzue.jpg";

/* ================= anill ================= */
const anill1 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768645516/infinity-space/exterior-residential/fhegygyt7fuvx6kbz6y6.jpg";

/* ================= ANUJ JI ================= */
const anuj1 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768645626/infinity-space/exterior-residential/lqfpwv9l2qs1jwremzcx.jpg";
const anuj2 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768645717/infinity-space/exterior-residential/ok4amkbwz3rxtwaunubv.jpg";
const anuj3 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768645770/infinity-space/exterior-residential/jzc45i6xjdeyqinj3b9v.jpg";

/* ================= BABLU ================= */
const bablu1 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768645881/infinity-space/exterior-residential/wdgad2o731b1fo2sqx2v.jpg";
const bablu2 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768645970/infinity-space/exterior-residential/o0yiqsatbgszb8zffxvn.jpg";

/* ================= BADAL NEW ================= */
const badal1 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768646131/infinity-space/exterior-residential/ruzfc1ahjdjoaffw2hmn.jpg";

/* ================= BAHERA ================= */
const bahera1 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768646224/infinity-space/exterior-residential/omauxg3ew2carvb706rp.jpg";

/* ================= BEDO ================= */
const bedo1 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768646317/infinity-space/exterior-residential/x7rpqiozvhpxuoo0dy5h.jpg";
const bedo2 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768646329/infinity-space/exterior-residential/ncm8xuvmjdlwnukmvz4n.jpg";

/* ================= bero jaamrtoli n1 ================= */
const bero1 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768646744/infinity-space/exterior-residential/pqaeywggtjd24n8u5fcq.jpg";

/* ================= DESIGN - Copy ================= */
const design1 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768647105/infinity-space/exterior-residential/mcgyuemm1qwysf9n1cb7.jpg";

/* ================= DESIGN - Copy (3) ================= */
const design3_1 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768647319/infinity-space/exterior-residential/obclhhsb8gzmsc7l3ygr.jpg";


/* ================= Eric_Bhaiya-FF-OPT-2 ================= */
const eric1 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768647519/infinity-space/exterior-residential/dzow3dpgzolu66co6sxh.jpg";
const eric2 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768647555/infinity-space/exterior-residential/dyzorodyrftsbj8m2pmh.jpg";
const eric3 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768647599/infinity-space/exterior-residential/n8oe3gxagumybqknqhd1.jpg";
const eric4 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768647618/infinity-space/exterior-residential/nzkyvnjiotvsqinuhmlb.jpg";

/* ================= G +2 ================= */
const g2 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768647761/infinity-space/exterior-residential/rk0ewmtopofhbfr4tvnq.jpg";

/* ================= ganesh ji ================= */
const ganesh1 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768647911/infinity-space/exterior-residential/bveeo0ihudhuvftq1qyt.jpg";
const ganesh2 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768647954/infinity-space/exterior-residential/yzwwgvbcx4jcgrpbr5h5.jpg";

/* ================= jitendra prasad ================= */
const jit1 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768648094/infinity-space/exterior-residential/cpkstbkvpdq31hfjv14g.jpg";
const jit2 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768648133/infinity-space/exterior-residential/vmfhhopwkw3et5nn3txu.jpg";


/* ================= lowadih 02 ================= */
const low1 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768648294/infinity-space/exterior-residential/bwedfkvufsz2rvpabbxt.png";


/* ================= MM_Harmu_friend ================= */
const mm1 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768648506/infinity-space/exterior-residential/bekh06qc14dtooypczam.jpg";
const mm2 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768648545/infinity-space/exterior-residential/ny3vbygwadb1ynf6okmg.jpg";
const mm3 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768648581/infinity-space/exterior-residential/wob9wkp8cpyris0qjrwj.jpg";

/* ================= MR.ISTEKHAR 3D ================= */
const is1 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768648701/infinity-space/exterior-residential/x93delup2unhlkxipias.jpg";


/* ================= MR.RAJIV ================= */
const rajiv1 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768648929/infinity-space/exterior-residential/ar920knirpxbgnxrtbuc.jpg";


/* ================= MR.RAMESH ================= */
const ramesh1 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768649122/infinity-space/exterior-residential/p0thzgkf8h3hrstypfie.jpg";


/* ================= MY HOME PLAN ================= */
const myhome1 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768649267/infinity-space/exterior-residential/vyo5huxqvsxkkff4qgwr.jpg";

/* ================= My House ================= */
const house1 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768649449/infinity-space/exterior-residential/edrycykaorvpptdvi7r3.jpg";
const house2 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768649515/infinity-space/exterior-residential/f3evm0bob9p5yy2bfzju.jpg";
const house3 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768649587/infinity-space/exterior-residential/chfrqjsmuzsen5x1y6pj.jpg";
const house4 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768649627/infinity-space/exterior-residential/oeahbgs5xuvxsbhpxqfq.jpg";


/* ================= NIRAJ NAMKUN ================= */
const niraj1 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768649726/infinity-space/exterior-residential/u1jhpkyyuljdwsyuwl45.jpg";

/* ================= PANKAJ JI ================= */
const pankaj1 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768649854/infinity-space/exterior-residential/xywlrclaet9gpoe8zurf.jpg";

/* ================= pawan ji kanke ================= */
const pawan1 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768649926/infinity-space/exterior-residential/dajc8azf0bconmyqhrl6.jpg";


/* ================= pramod fufa FINAL ================= */
const pramod1 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768650004/infinity-space/exterior-residential/oeoj27eui2f5ub6vae1m.jpg";


/* ================= RAJIV SIR plan 3d ================= */
const plan1 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768650146/infinity-space/exterior-residential/rw3gt2hva9sixrwdtbmp.jpg";


/* ================= RAM JI ================= */
const ram1 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768650301/infinity-space/exterior-residential/wygds25ii7gaisdoco4q.jpg";
const ram2 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768650351/infinity-space/exterior-residential/ckmumvzkxrgpfkq92u9u.jpg";


/* ================= Satender ================= */
const sat1 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768650654/infinity-space/exterior-residential/utfyg4j9gvlcorvaao99.jpg";
const sat2 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768650731/infinity-space/exterior-residential/kpbg2vqodonhdbhyskib.jpg";

/* ================= shiv_oraon_chiraundi ================= */
const shiv1 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768650895/infinity-space/exterior-residential/hjvkmzipvtovwmahr6xt.jpg";


/* ================= SUBODH JI ================= */
const subodh1 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768650966/infinity-space/exterior-residential/kffoes6j7bxhbxnty4ku.jpg";


/* ================= surendar_mama ================= */
const sur1 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768651211/infinity-space/exterior-residential/pm7utjcvhuvocxfmdm87.jpg";


/* ================= TAIGAR ================= */
const taigar1 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768651306/infinity-space/exterior-residential/dalyo93c7rqgstd1koip.jpg";
const taigar2 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768651348/infinity-space/exterior-residential/jnyzrsf8muhin8fkvdfn.jpg";


/* ================= tanish ji first and second floor ================= */
const tanish1 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768651470/infinity-space/exterior-residential/tah8usojpbgngc7su6cr.jpg";
const tanish2 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768651506/infinity-space/exterior-residential/cogazpxhsvgru9jlmbd9.jpg";

/* ================= Tikeshwar_ji ================= */
const tik1 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768651580/infinity-space/exterior-residential/uhivh9xr5kpyxgfzw7xe.jpg";

/* ================= Vk Veerma ================= */
const vk1 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768651644/infinity-space/exterior-residential/lbft5cxhg3bgpn7k54nl.jpg";
const vk2 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768651652/infinity-space/exterior-residential/ne0x7lex7wnlli9yog5f.jpg";


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