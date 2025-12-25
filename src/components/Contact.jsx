import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

/* ================= ANIMATION VARIANTS ================= */

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Contact() {
  const location = useLocation();

  /* ================= SCROLL TO FORM ================= */
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location]);

  return (
    <motion.section
      className="min-h-screen bg-black text-white pt-32 pb-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20">

        {/* ================= LEFT CONTENT ================= */}
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.span
            variants={item}
            className="text-sm uppercase tracking-widest text-gray-400"
          >
            Contact
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-6 text-4xl md:text-6xl font-medium leading-tight"
          >
            SPEAK WITH OUR <br /> EXPERTS
          </motion.h1>

          <motion.div
            variants={container}
            className="mt-16 space-y-8 text-sm text-gray-300"
          >
            {[
              { label: "Phone", value: "+91 8092409023" },
              { label: "Email", value: "infinityspacegroup@gmail.com" },
              { label: "Careers", value: "career@infinityspacegroup.com" },
              {
                label: "Address",
                value: (
                  <>
                    Kujur Complex, Balalong Chowk, <br />
                    Ring Road, Dhurwa, Ranchi <br />
                    (JH) 834004
                  </>
                ),
              },
            ].map((itemData, i) => (
              <motion.div key={i} variants={item}>
                <p className="uppercase text-xs mb-1 text-gray-500">
                  {itemData.label}
                </p>
                <p>{itemData.value}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* ================= RIGHT FORM ================= */}
        <motion.form
          id="contact-form"
          className="bg-black border border-white/30 p-10 space-y-8"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {["FIRST NAME", "LAST NAME"].map((label, i) => (
              <motion.div key={i} variants={item} initial="hidden" animate="show">
                <label className="block text-xs mb-2 text-gray-400">
                  {label}
                </label>
                <input
                  type="text"
                  placeholder={label === "FIRST NAME" ? "Jane" : "Watson"}
                  className="w-full bg-white/5 border border-white/10 px-4 py-3 focus:outline-none focus:border-white/30"
                />
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {["EMAIL", "PHONE"].map((label, i) => (
              <motion.div key={i} variants={item} initial="hidden" animate="show">
                <label className="block text-xs mb-2 text-gray-400">
                  {label}
                </label>
                <input
                  type={label === "EMAIL" ? "email" : "text"}
                  placeholder={
                    label === "EMAIL"
                      ? "jane@framer.com"
                      : "+40749321767"
                  }
                  className="w-full bg-white/5 border border-white/10 px-4 py-3 focus:outline-none focus:border-white/30"
                />
              </motion.div>
            ))}
          </div>

          <motion.div variants={item} initial="hidden" animate="show">
            <label className="block text-xs mb-2 text-gray-400">
              MESSAGE
            </label>
            <textarea
              rows="5"
              placeholder="Write your message here..."
              className="w-full bg-white/5 border border-white/10 px-4 py-3 focus:outline-none focus:border-white/30 resize-none"
            />
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full bg-white text-black py-3 text-sm tracking-wide hover:bg-gray-200 transition"
          >
            Submit form
          </motion.button>
        </motion.form>
      </div>
    </motion.section>
  );
}
