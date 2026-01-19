"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { getImageSrc } from "@/lib/imageHelper";

const work1 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768634221/infinity-space/hero/jz6juh0vdzvswt21xnqh.jpg";
const work2 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768634331/infinity-space/hero/vt4gitk8oz8c4nao1sfs.jpg";
const work3 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768634361/infinity-space/hero/z7pye3dt5piiwbwbyvjc.jpg";
const work4 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768634404/infinity-space/hero/oaexodjxaezhejlqcdst.jpg";
const work = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768636645/infinity-space/about/s5u8wb1wgqxr7ak0fz2b.jpg";
// import work from "../../assets/work.avif";

/* ===== Animation ===== */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" },
  }),
};

/* ===== Blog Data ===== */
const blogs = [
  {
    img: work1,
    title: "Architectural Planning",
    subtitle: "Designing spaces with precision",
    date: "10 Feb 2025",
    content:
      "This blog explains how architectural planning shapes modern living spaces, improves functionality, and enhances aesthetics.",
  },
  {
    img: work2,
    title: "Interior Excellence",
    subtitle: "Creating elegant interiors",
    date: "15 Feb 2025",
    content:
      "Discover how interior design blends creativity and comfort to transform homes into beautiful living environments.",
  },
  {
    img: work3,
    title: "Modern Living Spaces",
    subtitle: "Innovative modern designs",
    date: "20 Feb 2025",
    content:
      "Modern architecture focuses on minimalism, smart layouts, and sustainability for future-ready homes.",
  },
  {
    img: work4,
    title: "Luxury Design Ideas",
    subtitle: "Ideas for premium lifestyles",
    date: "22 Feb 2025",
    content:
      "Luxury design is about premium finishes, thoughtful lighting, and unique personalized experiences.",
  },
  {
    img: work,
    title: "Urban Architecture",
    subtitle: "Shaping cityscapes creatively",
    date: "25 Feb 2025",
    content:
      "Urban architecture brings innovation to crowded cities through efficient, aesthetic structures.",
  },
];

export default function Blog() {
  const [openBlog, setOpenBlog] = useState(null);

  return (
    <section className="bg-black text-white pt-32 pb-20 px-4 sm:px-8 lg:px-16">

      {/* HEADER */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        custom={0}
        className="mb-12 text-center"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">
          Our Blog Insights
        </h2>
        <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-xl mx-auto">
          Explore our latest articles on architecture, interior design, and urban living.
        </p>
      </motion.div>

      {/* BLOG GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {blogs.map((item, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-xl bg-[#111] cursor-pointer"
            onClick={() => setOpenBlog(item)}
          >
            <img
              src={getImageSrc(item.img)}
              alt={item.title}
              className="w-full h-[180px] sm:h-[260px] md:h-[320px] lg:h-[380px] object-cover transition-transform duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

            <div className="absolute bottom-3 sm:bottom-6 left-3 sm:left-6 right-3 z-10">
              <p className="text-gray-400 text-xs mb-1">{item.date}</p>
              <h3 className="text-sm sm:text-lg md:text-xl font-semibold">
                {item.title}
              </h3>
              <p className="text-[11px] sm:text-sm text-gray-300 mt-1">
                {item.subtitle}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* POPUP BLOG VIEW */}
      {openBlog && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[999]"
          onClick={() => setOpenBlog(null)}
        >
          <div
            className="bg-[#0f0f0f] rounded-xl max-w-3xl w-[92%] p-5 sm:p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-3 text-white text-xl"
              onClick={() => setOpenBlog(null)}
            >
              ✕
            </button>

            <img
              src={getImageSrc(openBlog.img)}
              alt={openBlog.title}
              className="w-full h-[220px] sm:h-[300px] object-cover rounded-lg mb-5"
            />

            <p className="text-gray-400 text-sm mb-2">{openBlog.date}</p>

            <h3 className="text-2xl font-semibold mb-3">
              {openBlog.title}
            </h3>

            <p className="text-gray-300 leading-relaxed">
              {openBlog.content}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
