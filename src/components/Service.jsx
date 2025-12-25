import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt } from "react-icons/fa";

/* IMAGES */
import planning from "../assets/planning.avif";
import interior from "../assets/interior.webp";
import structure from "../assets/structure.webp";
import material from "../assets/material.webp";
import costing from "../assets/costing.jpg";
import civil from "../assets/civil.jpg";
import landscape from "../assets/landscape.avif";
import renovation from "../assets/renovation.jpg";
import approval from "../assets/approval.jpg";
import walkthrough from "../assets/walkthrough.jpg";

/* SERVICES DATA */
const services = [
  { title: "Planning", desc: "Smart space planning tailored to your needs", image: planning },
  { title: "Interior Designing", desc: "Functional, elegant, and modern interiors", image: interior },
  { title: "Structural Designing", desc: "Safe, strong, and efficient structures", image: structure },
  { title: "Material Works", desc: "Quality materials with skilled execution", image: material },
  { title: "Estimating & Costing", desc: "Accurate budgeting and cost planning", image: costing },
  { title: "2D & 3D Civil Works", desc: "Complete drafting & visualization services", image: civil },
  { title: "Landscaping", desc: "Beautiful outdoor environments", image: landscape },
  { title: "Renovation Works", desc: "Modern upgrades & restorations", image: renovation },
  { title: "Map Approval", desc: "Fast & reliable approvals", image: approval },
  { title: "3D Walkthrough", desc: "Realistic project visualization", image: walkthrough },
];

/* ===== Animation Variants ===== */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const stagger = {
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

export default function Service() {
  return (
    <section className="bg-black text-white mt-[55px]">

      {/* ================= TOP HERO ================= */}
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

      {/* ================= HERO IMAGE ================= */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="px-6"
      >
        <div className="relative max-w-7xl mx-auto h-[500px] overflow-hidden rounded-2xl">
          <img
            src={planning}
            alt="Hero"
            className="absolute inset-0 w-full h-full object-cover"
          />
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

      {/* ================= SERVICES TITLE ================= */}
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

      {/* ================= ZIG ZAG SERVICES ================= */}
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
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
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
              <li>• 3D modeling of your chosen spaces</li>
              <li>• Detailed furnishing & material detailing</li>
              <li>• Multiple camera angles & views</li>
              <li>• Scope for revisions & feedback</li>
              <li>• High-resolution final output</li>
            </ul>
          </div>
        </motion.div>
      );
    })}

  </div>
</section>


      {/* ================= CTA ================= */}
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
