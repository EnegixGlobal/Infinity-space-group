import React from "react";
import { motion } from "framer-motion";

import work1 from "../assets/work1.avif";
import work2 from "../assets/work2.avif";
import work3 from "../assets/work3.avif";
import work4 from "../assets/work4.jpg";
import work from "../assets/work.avif";

/* ===== Animation ===== */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6 },
  }),
};

/* ===== Blog Data ===== */
const blogs = [
  { img: work1, title: "Architectural Planning", subtitle: "Designing spaces with precision" },
  { img: work2, title: "Interior Excellence", subtitle: "Creating elegant interiors" },
  { img: work3, title: "Modern Living Spaces", subtitle: "Innovative modern designs" },
  { img: work4, title: "Luxury Design Ideas", subtitle: "Ideas for premium lifestyles" },
  { img: work, title: "Urban Architecture", subtitle: "Shaping cityscapes creatively" },
];

/* ===== Blog Component ===== */
export default function Blog() {
  return (
    <section className="bg-black text-white py-40 lg:px-20">

      {/* Section Header */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        custom={0}
        className="mb-16 text-center"
      >
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Our Blog Insights
        </h2>
        {/* Section Subtitle */}
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
          Explore our latest articles on architecture, interior design, and urban living.
        </p>
      </motion.div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 py-4">
        {blogs.map((item, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-xl cursor-pointer"
          >
            {/* Image */}
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-[420px] object-cover transform group-hover:scale-110 transition-transform duration-700"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-0" />

            {/* Title & Subtitle */}
            <div className="absolute bottom-6 left-6 z-10">
              <h3 className="text-xl font-bold text-white">{item.title}</h3>
              <p className="text-sm text-gray-300 mt-1">{item.subtitle}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
