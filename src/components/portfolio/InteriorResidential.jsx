"use client";

import React, { useState } from "react";
import { getImageSrc } from "@/lib/imageHelper";

/* ===================== ASHISH FRIEND ===================== */
const ash1 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768823385/infinity-space/interior-residential/ewqrjtyrgorrgmts83ej.jpg";
const ash2 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768823426/infinity-space/interior-residential/ycslxjilvrcpisz66oii.jpg";

/* ===================== BEDROOM ===================== */
const bed1 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768823487/infinity-space/interior-residential/boc0zcocitbxkvir4il8.jpg";
const bed2 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768823491/infinity-space/interior-residential/ronfh1gq8ssgmqudajot.jpg";
const bed3 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768823489/infinity-space/interior-residential/jx6lbnbgqmqnxkwrk6dt.jpg";
const bed4 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768823480/infinity-space/interior-residential/avzdnsyob5megxsudbvg.jpg";

/* ===================== DSP SIR ===================== */
const dsp1 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768823699/infinity-space/interior-residential/vty8agcswazzfcfsrenn.jpg";
const dsp2 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768823694/infinity-space/interior-residential/vnxzw0fmct3ti50jvolh.jpg";
const dsp3 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768823700/infinity-space/interior-residential/b8ykodh2hihem96jyqfx.jpg";
const dsp4 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768823701/infinity-space/interior-residential/hbnppomouxujmukouv2b.jpg";
const dsp5 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768823704/infinity-space/interior-residential/llp9lwjoy3qjvqax7qj3.jpg";

/* ===================== KIDS ===================== */
const kid1 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768824006/infinity-space/interior-residential/m7kp9c7qdmtyfff8khfv.jpg";
const kid2 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768824006/infinity-space/interior-residential/wcngv0btmnld5glelzan.jpg";
const kid3 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768824005/infinity-space/interior-residential/ak2bvxz3ptq7kgxwiln1.jpg";
const kid4 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768824006/infinity-space/interior-residential/tk0xmfs0a9i9ek5rprmh.jpg";

/* ===================== MR RAM RATAN ===================== */
const ram1 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768824168/infinity-space/interior-residential/sg4m2bwdkjxxgypsnrlf.jpg";
const ram2 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768824171/infinity-space/interior-residential/j2nfew1lmdduvssqo1pq.jpg";

/* ===================== MANISH KUMAR ===================== */
const mk1 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768824370/infinity-space/interior-residential/hgoyo7e7eqy8lw0cxjdc.jpg";
const mk2 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768824377/infinity-space/interior-residential/ikedwqnm1wocljimwl21.jpg";

const mk3 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768824358/infinity-space/interior-residential/k0hwe1q4usaufojswcj0.jpg";
const mk4 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768824358/infinity-space/interior-residential/zkldfy6ovd43ajfhrwck.jpg";
const mk5 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768824358/infinity-space/interior-residential/n04idrckk2cuvwcmclws.jpg";
const mk6 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768824375/infinity-space/interior-residential/danlqnbzxdk50iczjk5g.jpg";
const mk7 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768824354/infinity-space/interior-residential/awucjhx6oe2k3afbz5ev.jpg";
const mk8 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768824344/infinity-space/interior-residential/quwsxmcxvju09x67zhrf.jpg";

const mk9 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768824375/infinity-space/interior-residential/ron540joeiopdowycdz6.jpg";
const mk10 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768824379/infinity-space/interior-residential/qvgtzznrcxew0xcmu9xy.jpg";

const mk11 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768824414/infinity-space/interior-residential/ognq3t0emua8hgmicvaq.jpg";
const mk12 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768824394/infinity-space/interior-residential/km6n16njrtsrbloiteqd.jpg";
const mk13 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768824414/infinity-space/interior-residential/nkzepaloktyxifeqmiq2.jpg";
const mk14 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768824387/infinity-space/interior-residential/cejfjzmupwi69d3myzj9.jpg";

const mk15 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768824398/infinity-space/interior-residential/gm61llecso7jdnyenhlj.jpg";
const mk16 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768824412/infinity-space/interior-residential/ovbib8zhh9lncjgihidf.jpg";

const mk17 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768824374/infinity-space/interior-residential/fghgr45jmftwt8nhrneq.jpg";
const mk18 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768824365/infinity-space/interior-residential/cg2jmp40osfzdtbrs1ws.jpg";

const mk19 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768824399/infinity-space/interior-residential/zdqhjczethejev9t8uup.jpg";
const mk20 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768824413/infinity-space/interior-residential/pzx5ghgeikmbf7xk5ycw.jpg";
const mk21 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768824357/infinity-space/interior-residential/ebhkhs4w9ay90cpia5jq.jpg";
const mk22 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768824343/infinity-space/interior-residential/e1i03iqfks6tcleucaoz.jpg";

const mk23 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768824379/infinity-space/interior-residential/bvwmthfejzalrxoxeyux.jpg";
const mk24 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768824384/infinity-space/interior-residential/i0wd7ff1ybmsn9mb3aec.jpg";

const mk25 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768824415/infinity-space/interior-residential/abqmnjirck8m9jt6blig.jpg";
const mk26 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768824435/infinity-space/interior-residential/xugnd19gbgdp6jy5brft.jpg";

const mk27 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768824385/infinity-space/interior-residential/bwh38oll7pmntnrxu9wl.jpg";
const mk28 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768824436/infinity-space/interior-residential/lsapyxqcesopagrzuu3l.jpg";
const mk29 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768824365/infinity-space/interior-residential/wf8dv7nuxjqtp8fkqpj5.jpg";
const mk30 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768824375/infinity-space/interior-residential/drvpgmmj3frl3k75k4sb.jpg";
const mk31 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768824353/infinity-space/interior-residential/dspl5kvbwngqy1iwrcsv.jpg";

const mk32 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768824437/infinity-space/interior-residential/lxgqziialweclbs5llkf.jpg";
const mk33 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768824427/infinity-space/interior-residential/cbesuwb90x6dvwsmweoz.jpg";
const mk34 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768824437/infinity-space/interior-residential/lyxgbelhnydutqvfy6zn.jpg";
const mk35 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768824398/infinity-space/interior-residential/r6gfstpijnv1uyzfhgsp.jpg";

const mk36 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768824433/infinity-space/interior-residential/xwb1wagofestdcz4a9ga.jpg";
const mk37 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768824422/infinity-space/interior-residential/theljcuttmvjlpfblfis.jpg";


/* ===================== SONU ===================== */
const sonu1 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768826422/infinity-space/interior-residential/s3nvcdrwxnaa89n6mhjj.jpg";
const sonu2 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768826421/infinity-space/interior-residential/odier2go5aaglmqvibu8.jpg";
const sonu3 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768826422/infinity-space/interior-residential/b2fvdd4oed4jwn8w3oxm.jpg";

/* ===================== ZR HALL ===================== */
const zr1 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768826520/infinity-space/interior-residential/eadpakjmhbp6dgmkvj7q.jpg";

/* ===================== ZAFAR IQBAL ===================== */
const far1 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768826616/infinity-space/interior-residential/vhxloe2fvpk1mwmtdlmb.png";
const far2 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768826614/infinity-space/interior-residential/tpvyziyzjgr6mmn2obd8.png";

/* ===================== UTTAM PRASAD ===================== */
const up1 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768882234/infinity-space/interior-residential/uqdoqzuhi21vqtlapjwv.jpg";
const up2 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768882279/infinity-space/interior-residential/vfxbntbg445hefvnpqix.jpg";

const up3 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768882327/infinity-space/interior-residential/jsutpwjvakjnzg9vjax9.jpg";
const up4 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768882325/infinity-space/interior-residential/ctxufg52hewkaqwaubfg.jpg";

const up5 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768882409/infinity-space/interior-residential/inaihjwycfkj6ri96rub.jpg";
const up6 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768882409/infinity-space/interior-residential/ramr3ce3rf5dwk6svngr.jpg";

const up7 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768882474/infinity-space/interior-residential/lqsaapc1syshbmwsdgqb.jpg";

const up8 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768882546/infinity-space/interior-residential/dbfr02pet62uvguwqdeg.jpg";
const up9 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768882546/infinity-space/interior-residential/mlyrxfzpahvetr55vroj.jpg";


const up11 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768882544/infinity-space/interior-residential/rghxk4jdcrayhwxwejoy.jpg";
const up12 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768882544/infinity-space/interior-residential/mu58vlbdgmhb16t6apkt.jpg";
const up13 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768882546/infinity-space/interior-residential/lstfkizztivwfcwo2yth.jpg";

const up14 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768883846/infinity-space/interior-residential/jweby8j1p2qcqscbior8.jpg";
const up15 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768883844/infinity-space/interior-residential/gr0s4bstyf3urvnfn1xj.jpg";

const up16 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768883942/infinity-space/interior-residential/yonfpg5dhnsrhhhmrath.jpg";
const up17 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768883940/infinity-space/interior-residential/mxcaglzui9sgsedjw3cf.jpg";
const up18 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768883941/infinity-space/interior-residential/frgpmpmc8bpspiiengsr.jpg";
const up19 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768883941/infinity-space/interior-residential/ridvqgrsnvjrv6dtd7cf.jpg";

const up20 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768884078/infinity-space/interior-residential/nsrdpn9sdh4zlksjnbt3.jpg";
const up21 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768884076/infinity-space/interior-residential/hybxtlzcwsv8x6zgz91s.jpg";

const up22 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768884166/infinity-space/interior-residential/ccrjk4aemfiis1msgaf6.jpg";
const up23 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768884166/infinity-space/interior-residential/en2ko2kbahgm8fciylai.jpg";


/* ===================== SATENDER ===================== */
const sat1 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768885727/infinity-space/interior-residential/ob8itp090xhqhxuur54z.jpg";
const sat2 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768885722/infinity-space/interior-residential/nhcqn1qwfaxskue5kyo9.jpg";
const sat3 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768885726/infinity-space/interior-residential/vnwdqtltjdz0lplj0eqc.jpg";
const sat4 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768885725/infinity-space/interior-residential/axr0ltpvz9kosy0uissp.jpg";
const sat5 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768885719/infinity-space/interior-residential/kexndivuengzh8p2vec8.jpg";
const sat6 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768885725/infinity-space/interior-residential/nugtawrpiqen9eoiliz5.jpg";
const sat7 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768885726/infinity-space/interior-residential/ostlv0mjhyfu6lgqs5es.jpg";
const sat8 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768885719/infinity-space/interior-residential/aop2baywgvristilozpw.jpg";
const sat9 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768885720/infinity-space/interior-residential/m82cizzsfaoy4esx2j2n.jpg";
const sat10 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768885720/infinity-space/interior-residential/mkahvvrba95jriq3uyfz.jpg";
const sat11 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768885725/infinity-space/interior-residential/vytoeyrps8xufsnppjdu.jpg";
const sat12 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768885720/infinity-space/interior-residential/s7hvfzjzktabsd0vlgiv.jpg";
const sat13 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768885719/infinity-space/interior-residential/jea36gbvibzzihst4qvs.jpg";

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
