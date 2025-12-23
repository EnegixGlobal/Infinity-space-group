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

export default function Service() {
  return (
    <section className="bg-black text-white mt-[80px]">

      {/* ================= TOP HERO ================= */}
      <div className="pt-24 md:pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-gray-400 text-sm mb-3">Service</p>
          <h1 className="text-4xl md:text-6xl font-medium leading-tight">
            EXPLORE OUR FINEST <br /> RESIDENCES
          </h1>
        </div>
      </div>

      {/* ================= HERO IMAGE ================= */}
      <div className="px-6">
        <div className="relative max-w-7xl mx-auto h-[500px] overflow-hidden rounded-2xl">
          <img
            src={planning}
            alt="Hero"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6">
            <h2 className="text-2xl md:text-4xl font-medium">
              Designing Spaces. Delivering Excellence.
            </h2>
            <p className="mt-4 max-w-2xl text-gray-300 text-sm">
              From concept to completion, we deliver smart planning,
              elegant design, and flawless execution for every space.
            </p>
          </div>
        </div>
      </div>

      {/* ================= SERVICES TITLE ================= */}
      <div className="pt-32 pb-16 text-center px-6">
        <h2 className="text-3xl md:text-4xl font-medium">Our Services</h2>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-sm">
          We design, plan, and build spaces that combine function,
          aesthetics, and long-term value.
        </p>
      </div>

      {/* ================= SERVICE GRID ================= */}
      <div className="pb-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="relative h-[260px] rounded-xl overflow-hidden group shadow-lg"
            >
              {/* Image */}
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-all duration-500" />

              {/* Text */}
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-5">
                <span className="text-sm text-gray-300 mb-1 tracking-widest drop-shadow">
                  {index + 1 < 10 ? `0${index + 1}` : index + 1}
                </span>

                <h3 className="text-lg font-semibold text-white drop-shadow-md">
                  {service.title}
                </h3>

                <p className="mt-2 text-xs md:text-sm text-gray-200 leading-relaxed drop-shadow">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}

        </div>
      </div>


      {/* ================= CTA ================= */}
      {/* ================= CTA ================= */}
      <section className="border-t border-white/10">
        <div className="max-w-xl mx-auto px-6 py-40 text-center">

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
      </section>


    </section>
  );
}
