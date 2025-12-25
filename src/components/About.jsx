import { motion } from "framer-motion";
import section1 from "../assets/aboutimg.avif";
import work1 from "../assets/work.avif";

/* NEW IMAGES (add these in assets) */
import value1 from "../assets/value1.avif";
import value2 from "../assets/value2.avif";
import value3 from "../assets/value3.avif";

import team1 from "../assets/team1.avif";
import team2 from "../assets/team2.jpg";
import team3 from "../assets/team3.avif";
import team4 from "../assets/team4.jpg";

/* ===== Reusable Animations ===== */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0 },
};

const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0 },
};

export default function About() {
  return (
    <main className="bg-black text-white overflow-hidden">

      <section className="pt-40 md:pt-47 pb-24 md:pb-40">
  <div className="max-w-[1400px] mx-auto px-6 md:px-10">

    <motion.p
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      className="text-xs uppercase tracking-[0.3em] text-gray-400"
    >
      About us
    </motion.p>

    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.8 }}
      className="text-[32px] md:text-[44px] lg:text-[56px] font-semibold leading-tight mt-6 md:mt-8 max-w-3xl"
    >
      CRAFTING SPACES <br />
      WITH PURPOSE & <br />
      PRECISION
    </motion.h2>

    <motion.div
      initial={{ opacity: 0, scale: 1.05 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1 }}
      className="mt-12 md:mt-24 overflow-hidden"
    >
      <img
        src={work1}
        className="w-full h-[260px] md:h-[460px] object-cover"
      />
    </motion.div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 mt-14 md:mt-24">

      <motion.div
        variants={fadeLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        className="flex gap-10 md:gap-20 flex-wrap"
      >
        {[
          ["100+", "Projects Delivered"],
          ["12+", "Years of Experience"],
          ["98%", "Client Satisfaction"],
        ].map(([v, l], i) => (
          <div key={i}>
            <h3 className="text-[30px] md:text-[42px] font-semibold">{v}</h3>
            <p className="text-gray-400 mt-1 text-sm">{l}</p>
          </div>
        ))}
      </motion.div>

      <motion.div
        variants={fadeRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        className="text-gray-400 text-[14px] md:text-[15px] leading-relaxed max-w-lg"
      >
        <p>
          At Infinity Space Group, we design more than buildings — we create
          experiences guided by clarity and craftsmanship.
        </p>
        <p className="mt-4 md:mt-6">
          Every project is handled with care, creativity, and commitment.
        </p>
      </motion.div>

    </div>
  </div>
</section>


      {/* ================= SECTION 2 ================= */}
      <section className="min-h-screen flex items-center pt-32 pb-24">
        <div className="max-w-[1400px] mx-auto px-10 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeLeft}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
              Our story
            </p>

            <h1 className="text-[42px] lg:text-[54px] font-semibold leading-tight mt-6">
              ONE VISION. <br /> BIG DREAMS.
            </h1>

            <p className="text-gray-400 mt-8 leading-relaxed text-[15px]">
              Today, Infinity Space Group is known for delivering more than buildings — we deliver experiences.  Backed by a skilled team of architects, engineers, and designers, we bring together Vastu principles, modern aesthetics, and technical excellence to create spaces that truly reflect the people who live and work in them.  Every project tells a story. This is ours — and we’d be proud to be part of yours.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeRight}
          >
            <img
              src={section1}
              alt="About vision"
              className="w-full h-[520px] object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* ================= OUR VALUES ================= */}
<section className="py-40">
  <div className="max-w-[1400px] mx-auto px-10">

    <motion.h2
      className="text-[36px] font-semibold mb-20"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      OUR VALUES
    </motion.h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
      {[
        ["Integrity in Every Detail", value1],
        ["Design with Purpose", value2],
        ["People Before Projects", value3],
      ].map(([title, img], i) => (
        <motion.div
          key={i}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="group relative overflow-hidden cursor-pointer"
        >
          {/* IMAGE */}
          <img
            src={img}
            alt={title}
            className="w-full h-[420px] object-cover 
                       transform transition duration-700 
                       group-hover:scale-110"
          />

          {/* OVERLAY */}
          <div
            className="absolute inset-0 bg-black/70 
                       opacity-0 group-hover:opacity-100 
                       transition duration-500"
          />

          {/* TEXT */}
          <div
            className="absolute inset-0 p-8 flex items-end 
                       transform translate-y-6 
                       group-hover:translate-y-0 
                       transition duration-500"
          >
            <h3 className="text-xl font-semibold">{title}</h3>
          </div>
        </motion.div>
      ))}
    </div>

  </div>
</section>


      {/* ================= OUR TEAM ================= */}
      <section className="pb-40">
        <div className="max-w-[1400px] mx-auto px-10">

          <motion.h2
            className="text-[36px] font-semibold mb-20"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            OUR TEAM
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14">
            {[
              ["Ethan Rhodes", "Co-founder", team1],
              ["Lia Carter", "Lead Realtor", team2],
              ["Noah West", "Investment Specialist", team3],
              ["Ava Sinclair", "Client Relations", team4],
            ].map(([name, role, img], i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <img
                  src={img}
                  alt={name}
                  className="w-full h-[360px] object-cover hover:scale-105 transition duration-700"
                />
                <h4 className="mt-6 font-semibold">{name}</h4>
                <p className="text-gray-400 text-sm">{role}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

    </main>
  );
}
