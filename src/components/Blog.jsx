import React from "react";
import { motion } from "framer-motion";

import work1 from "../assets/work1.avif";
import work2 from "../assets/work2.avif";
import work3 from "../assets/work3.avif";
import work4 from "../assets/work4.jpg";
import work from "../assets/work.avif";

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
  { img: work1, title: "Architectural Planning", subtitle: "Designing spaces with precision" },
  { img: work2, title: "Interior Excellence", subtitle: "Creating elegant interiors" },
  { img: work3, title: "Modern Living Spaces", subtitle: "Innovative modern designs" },
  { img: work4, title: "Luxury Design Ideas", subtitle: "Ideas for premium lifestyles" },
  { img: work, title: "Urban Architecture", subtitle: "Shaping cityscapes creatively" },
];

export default function Blog() {
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
            className="group relative overflow-hidden rounded-xl bg-[#111]"
          >
            <img
              src={item.img}
              alt={item.title}
              className="
                w-full 
                h-[180px] 
                sm:h-[260px] 
                md:h-[320px] 
                lg:h-[380px]
                object-cover 
                transition-transform duration-700 
                group-hover:scale-110
              "
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

            <div className="absolute bottom-3 sm:bottom-6 left-3 sm:left-6 right-3 z-10">
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
    </section>
  );
}
