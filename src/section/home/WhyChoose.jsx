import React from "react";
import { motion } from "framer-motion";
import icon1 from "../../assets/social/social(1).svg"; // Ensure this path is correct
import lion from "../../assets/lion.jpg";
import Paragraph from "../home/Paragraph";

// --- DATA ---
// We separate data to make the code cleaner and easier to map
const cardsLeft = [
  {
    id: 1,
    title: "Hands on delivery",
    desc: "We don’t just advise — we train, implement and measure.",
    theme: "light", // The first card was light in your original code
  },
  {
    id: 2,
    title: "Hands on delivery",
    desc: "We don’t just advise — we train, implement and measure.",
    theme: "dark",
  },
  {
    id: 3,
    title: "Hands on delivery",
    desc: "We don’t just advise — we train, implement and measure.",
    theme: "dark",
  },
];

const cardsRight = [
  {
    id: 4,
    title: "Hands on delivery",
    desc: "We don’t just advise — we train, implement and measure.",
    theme: "dark",
  },
  {
    id: 5,
    title: "Hands on delivery",
    desc: "We don’t just advise — we train, implement and measure.",
    theme: "dark",
  },
  {
    id: 6,
    title: "Hands on delivery",
    desc: "We don’t just advise — we train, implement and measure.",
    theme: "light", // The last card was light in your original code
  },
];

// --- ANIMATION VARIANTS ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Staggers the cards one by one
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.25, 0, 1] },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
  },
};

// --- SUB-COMPONENT: CARD ---
const FeatureCard = ({ item }) => {
  const isLight = item.theme === "light";

  return (
    <motion.div
      variants={cardVariants}
      // Initial Colors based on "theme" prop
      initial={{
        backgroundColor: isLight ? "#EFEEF3" : "#1A1A1A",
        color: isLight ? "#1A1A1A" : "#FFFFFF",
      }}
      // Hover Animation: Always turn White, Big, and Black Text
      whileHover={{
        scale: 1.05,
        backgroundColor: "#FFFFFF",
        color: "#1A1A1A",
        boxShadow: "0px 20px 40px rgba(0,0,0,0.1)",
        zIndex: 10,
        transition: { duration: 0.3 },
      }}
      className="px-8 py-10 md:px-12 md:py-10 flex flex-col justify-center items-center text-center space-y-3 rounded-3xl w-full cursor-pointer border border-transparent hover:border-gray-100"
    >
      {/* We use a CSS filter on the icon to ensure it contrasts well.
         On dark cards, we might invert it, but on hover (white bg) it should look normal.
         For simplicity here, we assume the SVG is visible on both or handle via CSS filter if needed.
      */}
      <motion.img
        src={icon1}
        alt=""
        className="w-12 mb-2"
        whileHover={{ rotate: 15, scale: 1.1 }} // Cute rotation on hover
      />

      <h1 className="text-xl font-semibold group-hover:text-[#1A1A1A]">
        {item.title}
      </h1>

      {/* Description text color logic:
          Default: #A5A5A5. 
          Hover: Darker gray/black for readability on white bg. 
      */}
      <motion.p
        className="text-sm transition-colors duration-300"
        style={{ color: "#A5A5A5" }} // Start gray
        whileHover={{ color: "#4a4a4a" }} // Turn darker on hover
      >
        {item.desc}
      </motion.p>
    </motion.div>
  );
};

const WhyChoose = () => {
  return (
    <section className="overflow-hidden">
      <div className="container mx-auto">
        {/* HEADING SECTION */}
        <motion.div
          className="flex flex-col p-6 lg:p-8 lg:px-32 pt-12 lg:pt-20"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-medium text-[60px] md:text-[90px] lg:text-[128px] text-[#1A1A1A] leading-none">
            Why Choose
          </h1>
          <span className="font-medium mt-[-10px] md:mt-[-20px] text-[60px] md:text-[90px] lg:text-[128px] text-[#1A1A1A]">
            Us
          </span>
        </motion.div>

        {/* CONTENT GRID */}
        <motion.div
          className="flex flex-col lg:flex-row justify-center items-start gap-6 lg:gap-2 px-4 lg:px-0 pb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-4 w-full lg:w-1/3">
            {cardsLeft.map((card, index) => (
              <FeatureCard key={card.id} item={card} />
            ))}
          </div>

          {/* CENTER IMAGE */}
          {/* Responsive: Fixed height on mobile, tall on desktop */}
          <motion.div
            className="flex items-center w-full lg:w-[405px] h-[400px] lg:h-[780px] flex-shrink-0"
            variants={imageVariants}
          >
            <img
              src={lion}
              alt="Lion"
              className="w-full h-full object-cover rounded-3xl shadow-lg"
            />
          </motion.div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-4 w-full lg:w-1/3">
            {cardsRight.map((card, index) => (
              <FeatureCard key={card.id} item={card} />
            ))}
          </div>
        </motion.div>
      </div>

      <Paragraph />
    </section>
  );
};

export default WhyChoose;
