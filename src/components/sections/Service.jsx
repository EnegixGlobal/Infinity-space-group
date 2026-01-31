"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt } from "react-icons/fa";
import { getImageSrc } from "@/lib/imageHelper";

/* IMAGES */
const heroImage = "https://res.cloudinary.com/dit7znqkl/image/upload/v1769855925/infinity-space/service/ushi2zdwssyseqzmjold.jpg";
const planning = "https://res.cloudinary.com/dit7znqkl/image/upload/v1769240917/infinity-space/service/txq6tiushis4n6taa4hi.jpg";
const exterior = "https://res.cloudinary.com/dit7znqkl/image/upload/v1769242788/infinity-space/service/k1w5gp0pt0pdeihlkfvg.jpg";
const interior = "https://res.cloudinary.com/dit7znqkl/image/upload/v1769242788/infinity-space/service/qfmr6iyxo4gwh0nsr6kr.jpg";
const structure = "https://res.cloudinary.com/dit7znqkl/image/upload/v1769241669/infinity-space/service/r1hwkdqayeh7zlwixvet.jpg";
const material = "https://res.cloudinary.com/dit7znqkl/image/upload/v1769242789/infinity-space/service/au1y0onqlwcheyc07qit.jpg";
const costing = "https://res.cloudinary.com/dit7znqkl/image/upload/v1769242789/infinity-space/service/q4xpvoqarhmkfzzakma6.jpg";
const civil = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768637631/infinity-space/service/yj3sf1oxwnbvlx6cjusu.jpg";
const landscape = "https://res.cloudinary.com/dit7znqkl/image/upload/v1769242789/infinity-space/service/yvim2bzkx6wqzewomoka.jpg";
const renovation = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768637672/infinity-space/service/o0xtrqq0vns58jmdvjit.jpg";
const approval = "https://res.cloudinary.com/dit7znqkl/image/upload/v1769855282/infinity-space/service/xec64ulmxnd5ao4irxr1.jpg";
const walkthrough = "https://res.cloudinary.com/dit7znqkl/image/upload/v1768637718/infinity-space/service/xzbzzmah2xxkvwnamtyl.jpg";


/* ================== SERVICES DATA WITH FULL DETAILS ================== */

const services = [
  {
    title: "Planning",
    image: planning,
    details: [
      "A 2D plan is a flat top-down layout showing rooms, walls, doors & windows.",
      "Includes Detailed plan (Foundation, Column, Beam, Electric, Plumbing, Septic tank, Stair).",
      "Scope for revisions & feedback.",
    ],
  },

  {
    title: "Exterior Designing",
    image: exterior,
    details: [
      "3D modelling of your chosen spaces.",
      "Detailed furnishing & material detailing.",
      "Multiple camera angles & views.",
      "Scope for revisions & feedback.",
      "High-resolution final output.",
    ],
  },

  {
    title: "Interior Designing",
    image: interior,
    details: [
      "3D modelling of your chosen spaces.",
      "Detailed furnishing & material detailing.",
      "Multiple camera angles & views.",
      "Scope for revisions & feedback.",
      "High-resolution final output.",
    ],
  },

  {
    title: "Structural Designing",
    image: structure,
    details: [
      "Construction for Building.",
      "High-rise Building.",
      "Iron Structure Building / Warehouse.",
      "All type structural solution.",
    ],
  },

  {
    title: "Turnkey Projects",
    image: material,
    details: [
      "Single Contract",
      "fixed Price",
      "Ready-to-Use Delivery",
      "All type Civil & Interior Solution.",
    ],
  },

  {
    title: "Estimating & Costing",
    image: costing,
    details: [
      "Construction for Building.",
      "Iron Structure Building / Warehouse.",
      "Government Project.",
      "Interior Work.",
    ],
  },

  {
    title: "Civil Works",
    image: civil,
    details: [
      "Residential & Commercial Building.",
      "Iron Structure Building & Warehouse.",
      "Apartment Projects.",
      "School Projects.",
      "Government Projects.",
      "Turnkey Projects.",
    ],
  },

  {
    title: "Landscaping",
    image: landscape,
    details: [
      "Residential & Commercial Building.",
      "Bungalow Projects.",
      "Apartment Projects.",
      "Farmhouse Projects.",
    ],
  },

  {
    title: "Renovation Works",
    image: renovation,
    details: [
      "Residential & Commercial Building.",
      "Apartment Projects.",
      "School Projects.",
      "Interior Work.",
    ],
  },

  {
    title: "Map Approval (Naksha Passing)",
    image: approval,
    details: [
      "RMC & RRDA for Approval.",
      "Residential & Commercial Building.",
      "Apartment.",
    ],
  },

  {
    title: "3D Walkthrough",
    image: walkthrough,
    details: [
      "Virtual animated tour of interior/exterior spaces.",
      "Immersive preview of layout, lighting & textures.",
      "Helps visualize design before construction.",
    ],
  },
];

/* ===== Animation Variants ===== */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function Service() {
  return (
    <section className="bg-black text-white mt-[55px]">

      {/* TOP HERO */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="pt-24 md:pt-32 pb-24 px-6"
      >
        <div className="max-w-7xl mx-auto">
          <p className="text-gray-400 text-sm mb-3">Service</p>
          <h1 className="text-4xl md:text-6xl font-medium leading-tight">
            EXPLORE OUR FINEST <br /> RESIDENCES
          </h1>
        </div>
      </motion.div>

      {/* HERO IMAGE */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="px-6"
      >
        <div className="relative max-w-7xl mx-auto h-[500px] overflow-hidden rounded-2xl">
          <img src={getImageSrc(heroImage)} alt="Hero" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60" />

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6"
          >
            <h2 className="text-2xl md:text-4xl font-medium">
              Designing Spaces. Delivering Excellence.
            </h2>
            <p className="mt-4 max-w-2xl text-gray-300 text-sm">
              From concept to completion, we deliver smart planning,
              elegant design, and flawless execution for every space.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* SERVICES TITLE */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="pt-32 pb-16 text-center px-6"
      >
        <h2 className="text-3xl md:text-4xl font-medium">Our Services</h2>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-sm">
          We design, plan, and build spaces that combine function,
          aesthetics, and long-term value.
        </p>
      </motion.div>

      {/* ZIG-ZAG SERVICES */}
      <section className="bg-[#0f0f0f] text-white px-6">
        <div className="max-w-7xl mx-auto space-y-32">

          {services.map((service, index) => {
            const isReverse = index % 2 !== 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: true }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
              >
                {/* IMAGE */}
                <div className={`${isReverse ? "lg:order-2" : ""}`}>
                  <div className="relative h-[280px] sm:h-[380px] lg:h-[460px] overflow-hidden rounded-xl">
                    <img src={getImageSrc(service.image)} alt={service.title} className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/20" />
                  </div>
                </div>

                {/* CONTENT */}
                <div className={`${isReverse ? "lg:order-1" : ""}`}>
                  <span className="text-xs tracking-widest text-yellow-400">
                    {index + 1 < 10 ? `0${index + 1}` : index + 1}
                  </span>

                  <h3 className="mt-4 text-xl sm:text-2xl font-semibold tracking-wide text-yellow-400 uppercase">
                    {service.title}
                  </h3>

                  <ul className="mt-6 space-y-3 text-gray-300 text-sm leading-relaxed">
                    {service.details.map((d, i) => (
                      <li key={i}>• {d}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="border-t border-white/10"
      >
        <div className="max- mx-auto px-6 py-40 text-center">

          <h2 className="text-3xl md:text-5xl font-semibold leading-tight">
            For Any Architects, Engineers <br className="hidden md:block" />
            & Contractor Works
          </h2>

          <p className="mt-10 text-gray-400 text-sm md:text-base leading-relaxed">
            Reliable architectural, engineering, and construction solutions
            delivered with precision and timely execution.
          </p>

          <div className="mt-12 space-y-6">
            <div className="flex items-center justify-center gap-4 text-lg">
              <FaPhoneAlt className="text-gray-500" />
              <span>9229606900</span>
            </div>

            <div className="flex items-center justify-center gap-4 text-lg">
              <FaPhoneAlt className="text-gray-500" />
              <span>8092409023</span>
            </div>
          </div>

        </div>
      </motion.section>
    </section>
  );
}
