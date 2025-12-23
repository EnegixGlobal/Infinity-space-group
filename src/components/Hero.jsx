// Hero.jsx
import React from "react";
import { motion } from "framer-motion";
import heroVideo from "../assets/herovideobg.mp4";
import imgRight from "../assets/section1.jpg";
import imgCenter from "../assets/section2.avif";

// RECENT WORK IMAGES
import work1 from "../assets/work1.avif";
import work2 from "../assets/work2.avif";
import work3 from "../assets/work3.avif";
import work4 from "../assets/work4.jpg";

// TESTIMONIAL AVATARS
import avatar1 from "../assets/avatar1.avif";
import avatar2 from "../assets/avatar2.avif";
import avatar3 from "../assets/avatar3.avif";

import {
  FaDraftingCompass,
  FaBuilding,
  FaCouch,
  FaTools,
  FaVrCardboard,
  FaFileSignature,
  FaStar,
} from "react-icons/fa";

export default function Hero() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative h-screen w-full overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black/28" />

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
              interior, and turnkey solutions that reflect quality, balance,
              and modern living.
              <br />
              <br />
              Luxury in design. Strength in structure.
              Purpose in every detail.
            </p>

            <button className="mt-8 sm:mt-10 px-8 py-3 border border-yellow-400 text-yellow-400 rounded-full hover:bg-yellow-400 hover:text-black transition">
              Learn More
            </button>
          </motion.div>

          {/* RIGHT IMAGE STACK */}
          <div className="relative w-full h-[500px] sm:h-[600px] lg:h-[640px]">
            {/* BACK IMAGE */}
            <motion.img
              src={imgRight}
              alt=""
              className="absolute top-[-40px] sm:top-[-60px] right-0 h-[300px] sm:h-[500px] lg:h-[650px] w-[70%] sm:w-[72%] object-cover"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            />

            {/* FRONT IMAGE */}
            <motion.img
              src={imgCenter}
              alt=""
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
                  icon: <FaDraftingCompass className="mx-auto text-yellow-400 text-4xl sm:text-5xl mb-4 sm:mb-6" />,
                },
                {
                  title: "Structural & Civil Engineering",
                  icon: <FaBuilding className="mx-auto text-yellow-400 text-4xl sm:text-5xl mb-4 sm:mb-6" />,
                },
                {
                  title: "Interior & Landscape Design",
                  icon: <FaCouch className="mx-auto text-yellow-400 text-4xl sm:text-5xl mb-4 sm:mb-6" />,
                },
                {
                  title: "Turnkey Construction Solutions",
                  icon: <FaTools className="mx-auto text-yellow-400 text-4xl sm:text-5xl mb-4 sm:mb-6" />,
                },
                {
                  title: "3D Visualization & VR Experience",
                  icon: <FaVrCardboard className="mx-auto text-yellow-400 text-4xl sm:text-5xl mb-4 sm:mb-6" />,
                },
                {
                  title: "Renovation & Legal Approvals",
                  icon: <FaFileSignature className="mx-auto text-yellow-400 text-4xl sm:text-5xl mb-4 sm:mb-6" />,
                },
              ].map((item, i) => (
                <div key={i} className="text-center text-white">
                  {item.icon}
                  <h4 className="text-base sm:text-lg font-medium">{item.title}</h4>
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
                      src={img}
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
                      src={img}
                      alt={`avatar-${index}`}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mb-4 sm:mb-6"
                    />
                    <p className="leading-relaxed mb-4 sm:mb-8 text-sm sm:text-base">
                      “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Pellentesque euismod.”
                    </p>
                    <div className="flex items-center gap-1 mb-2">
                      <FaStar className="text-black text-sm sm:text-base" />
                      <FaStar className="text-black text-sm sm:text-base" />
                      <FaStar className="text-black text-sm sm:text-base" />
                      <FaStar className="text-black text-sm sm:text-base" />
                      <FaStar className="text-gray-300 text-sm sm:text-base" />
                    </div>
                    <div className="font-medium text-black text-sm sm:text-base">
                      Customer Name
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
