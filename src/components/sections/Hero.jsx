"use client";

// Hero.jsx
import React from "react";
import { motion } from "framer-motion";
import { getImageSrc } from "@/lib/imageHelper";
// Image URLs - update these with URLs copied from admin panel
const imgRight = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768632721/infinity-space/hero/pslwby4vdlzu7lkze2rs.jpg";
const imgCenter = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768633202/infinity-space/hero/egzoous4vf4drcedoijf.jpg";

// RECENT WORK IMAGES
const work1 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768634221/infinity-space/hero/jz6juh0vdzvswt21xnqh.jpg";
const work2 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768634331/infinity-space/hero/vt4gitk8oz8c4nao1sfs.jpg";
const work3 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768634361/infinity-space/hero/z7pye3dt5piiwbwbyvjc.jpg";
const work4 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768634404/infinity-space/hero/oaexodjxaezhejlqcdst.jpg";

// import work1 from "../../assets/work1.avif";
// import work2 from "../../assets/work2.avif";
// import work3 from "../../assets/work3.avif";
// import work4 from "../../assets/work4.jpg";

// TESTIMONIAL AVATARS
const avatar1 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768634566/infinity-space/hero/wl4svzpsiplsrgbacsct.jpg";
const avatar2 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768634596/infinity-space/hero/kngb8tsdcqefmyjiarmb.jpg";
const avatar3 = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768634629/infinity-space/hero/g3stvblgnj5jtebdx2jm.jpg";
// import avatar1 from "../../assets/avatar1.avif";
// import avatar2 from "../../assets/avatar2.avif";
// import avatar3 from "../../assets/avatar3.avif";

import {
  FaDraftingCompass,
  FaBuilding,
  FaCouch,
  FaTools,
  FaVrCardboard,
  FaFileSignature,
  FaStar,
} from "react-icons/fa";

const testimonials = [
  {
    text: "The team delivered exactly what we needed — on time and with amazing quality. Truly professional!",
    name: "Aman Verma",
  },
  {
    text: "Very smooth experience. They explained everything clearly and the final result exceeded expectations.",
    name: "Neha Sharma",
  },
  {
    text: "Great attention to detail. You can easily see how much effort they put into their work.",
    name: "Rohan Patel",
  },
  {
    text: "Reliable service and quick response. Our project improved faster than we expected.",
    name: "Priya Mehta",
  },
  {
    text: "Great value for money and premium service. I will definitely work with them again.",
    name: "Abhishek Singh",
  },
  {
    text: "From planning to delivery everything was handled professionally. Highly recommended.",
    name: "Kavita Desai",
  },
];

// Update this URL with URL copied from admin panel
const heroVideo = "/assets/videos/herovideobg.mp4"; // Replace with URL from admin panel

export default function Hero() {

  // Use the manually set image URLs (update these with URLs from admin panel)
  const imgRightSrc = getImageSrc(imgRight);
  const imgCenterSrc = getImageSrc(imgCenter);

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative bg-black overflow-hidden pt-[64px] sm:pt-[80px]">
        <video
          className="
      w-full
      aspect-[9/6] sm:aspect-video
      object-contain sm:object-cover
    "
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          onError={(e) => {
            console.error('Video failed to load:', heroVideo);
          }}
        >
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Optional dark overlay */}
        <div className="absolute inset-0 bg-black/20 pointer-events-none" />
      </section>

      {/* ================= SECTION 2 ================= */}
      <section className="relative bg-[#1f1f1f] overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-20 py-20 lg:py-36 grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] items-center gap-12 lg:gap-16">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative z-10 lg:pl-10"
          >
            <h2 className="text-3xl sm:text-4xl md:text-[40px] font-light text-white leading-tight mb-6">
              Signature Spaces <br /> We Create
            </h2>
            <p className="text-gray-400 max-w-md sm:max-w-lg leading-relaxed text-sm sm:text-[15px]">
              Experience thoughtfully designed spaces where planning meets
              perfection. From concept to completion, we craft architectural,
              interior, and turnkey solutions that reflect quality, balance, and
              modern living.
              <br />
              <br />
              Luxury in design. Strength in structure. Purpose in every detail.
            </p>
            <button className="mt-8 sm:mt-10 px-8 py-3 border border-yellow-400 text-yellow-400 rounded-full hover:bg-yellow-400 hover:text-black transition">
              Learn More
            </button>
          </motion.div>

          {/* RIGHT IMAGE STACK */}
          <div className="relative w-full h-[500px] sm:h-[600px] lg:h-[640px]">
            {/* BACK IMAGE */}
            <motion.img
              src={imgRightSrc}
              alt="Hero background image"
              className="absolute top-[-40px] sm:top-[-60px] right-0 h-[300px] sm:h-[500px] lg:h-[650px] w-[70%] sm:w-[72%] object-cover"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            />
            {/* FRONT IMAGE */}
            <motion.img
              src={imgCenterSrc}
              alt="Hero center image"
              className="absolute left-[8%] sm:left-[12%] top-1/2 -translate-y-1/2 w-[250px] sm:w-[350px] lg:w-[420px] h-[250px] sm:h-[350px] lg:h-[420px] object-cover shadow-xl z-20"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              viewport={{ once: true }}
            />
          </div>
        </div>
      </section>

      {/* ================= SECTION 3 (WHAT WE DO) ================= */}
      <section className="relative z-20 bg-black py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-medium text-white">
              What We Do
            </h2>
            <p className="mt-3 sm:mt-4 text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
              We design, plan, and build spaces that combine function,
              aesthetics, and long-term value.
            </p>
          </div>

          <div className="bg-[#1f1f1f] p-8 sm:p-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">
              {[
                {
                  title: "Architectural Planning & Design",
                  icon: (
                    <FaDraftingCompass className="mx-auto text-yellow-400 text-4xl sm:text-5xl mb-4 sm:mb-6" />
                  ),
                },
                {
                  title: "Structural & Civil Engineering",
                  icon: (
                    <FaBuilding className="mx-auto text-yellow-400 text-4xl sm:text-5xl mb-4 sm:mb-6" />
                  ),
                },
                {
                  title: "Interior & Landscape Design",
                  icon: (
                    <FaCouch className="mx-auto text-yellow-400 text-4xl sm:text-5xl mb-4 sm:mb-6" />
                  ),
                },
                {
                  title: "Turnkey Construction Solutions",
                  icon: (
                    <FaTools className="mx-auto text-yellow-400 text-4xl sm:text-5xl mb-4 sm:mb-6" />
                  ),
                },
                {
                  title: "3D Visualization & VR Experience",
                  icon: (
                    <FaVrCardboard className="mx-auto text-yellow-400 text-4xl sm:text-5xl mb-4 sm:mb-6" />
                  ),
                },
                {
                  title: "Renovation & Legal Approvals",
                  icon: (
                    <FaFileSignature className="mx-auto text-yellow-400 text-4xl sm:text-5xl mb-4 sm:mb-6" />
                  ),
                },
              ].map((item, i) => (
                <div key={i} className="text-center text-white">
                  {item.icon}
                  <h4 className="text-base sm:text-lg font-medium">
                    {item.title}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 4 (RECENT WORK SLIDER) ================= */}
      <section className="relative bg-black py-20 sm:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-medium text-white">
              Our Recent Work
            </h2>
          </div>

          <div className="relative overflow-x-hidden">
            <motion.div
              className="flex gap-6 sm:gap-8"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                repeat: Infinity,
                duration: 28,
                ease: "linear",
              }}
            >
              {[work1, work2, work3, work4, work1, work2, work3, work4].map(
                (img, index) => (
                  <div
                    key={index}
                    className="relative min-w-[220px] sm:min-w-[300px] md:min-w-[380px] h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden group rounded-lg"
                  >
                    <img
                      src={getImageSrc(img)}
                      alt={`work-${index}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/30 rounded-lg" />
                  </div>
                )
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 5 (TESTIMONIALS SLIDER) ================= */}
      <section className="relative bg-black py-20 sm:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white">
              Hear What Our Customers <br /> Are Saying
            </h2>
            <p className="mt-3 sm:mt-6 text-gray-400 text-sm sm:text-base">
              Our testimonials reflect genuine experiences from customers.
            </p>
          </div>

          <div className="relative overflow-x-hidden">
            <motion.div
              className="flex gap-4 sm:gap-10"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                repeat: Infinity,
                duration: 25,
                ease: "linear",
              }}
            >
              {[avatar1, avatar2, avatar3, avatar1, avatar2, avatar3].map(
                (img, index) => (
                  <div
                    key={index}
                    className="min-w-[260px] sm:min-w-[320px] md:min-w-[380px] bg-white rounded-2xl p-6 sm:p-10 text-gray-700"
                  >
                    <img
                      src={getImageSrc(img)}
                      alt={`avatar-${index}`}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mb-4 sm:mb-6"
                    />

                    {/* Review text */}
                    <p className="leading-relaxed mb-4 sm:mb-8 text-sm sm:text-base">
                      “{testimonials[index % testimonials.length].text}”
                    </p>

                    {/* Stars */}
                    <div className="flex items-center gap-1 mb-2">
                      <FaStar className="text-black text-sm sm:text-base" />
                      <FaStar className="text-black text-sm sm:text-base" />
                      <FaStar className="text-black text-sm sm:text-base" />
                      <FaStar className="text-black text-sm sm:text-base" />
                      <FaStar className="text-gray-300 text-sm sm:text-base" />
                    </div>

                    {/* Name */}
                    <div className="font-medium text-black text-sm sm:text-base">
                      {testimonials[index % testimonials.length].name}
                    </div>
                  </div>
                )
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
