import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import girl from "../../assets/girl.jpg";
import office from "../../assets/girl.jpg";
import team from "../../assets/girl.jpg";

const servicesData = [
  {
    id: 1,
    title: "Property Management Service",
    description:
      "We provide comprehensive administrative and HR solutions, including documentation, editing, liaison work, compliance, and manpower outsourcing.",
    image: girl,
  },
  {
    id: 2,
    title: "Creative Design & Branding",
    description:
      "Our design team creates unique brand identities, from logo design to full digital experiences, ensuring your business stands out.",
    image: office,
  },
  {
    id: 3,
    title: "Marketing & Strategy",
    description:
      "We craft smart, data-driven marketing strategies that connect your brand with your audience across multiple digital platforms.",
    image: team,
  },
  {
    id: 4,
    title: "Web Development",
    description:
      "Custom web applications and responsive websites built with modern technologies for optimal performance and user experience.",
    image: girl,
  },
  {
    id: 5,
    title: "Digital Consulting",
    description:
      "Strategic digital transformation consulting to help your business leverage technology for growth and efficiency.",
    image: office,
  },
];

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // AutoAnimate for automatic micro-interactions
  const [counterRef] = useAutoAnimate();
  const [navigationRef] = useAutoAnimate();

  // Handle wheel scroll with animation lock and boundary handling
  useEffect(() => {
    const handleWheel = (e) => {
      // Prevent scrolling during animation
      if (isAnimating) {
        e.preventDefault();
        return;
      }

      const maxIndex = servicesData.length - 1;

      if (e.deltaY > 0) {
        // Scroll down - next service
        if (activeIndex < maxIndex) {
          e.preventDefault();
          setIsAnimating(true);
          setActiveIndex((prev) => prev + 1);
          // Animation onComplete will handle setIsAnimating(false)
        }
        // If at last index, allow natural page scroll down
      } else {
        // Scroll up - previous service
        if (activeIndex > 0) {
          e.preventDefault();
          setIsAnimating(true);
          setActiveIndex((prev) => prev - 1);
          // Animation onComplete will handle setIsAnimating(false)
        }
        // If at first index, allow natural page scroll up
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [activeIndex, isAnimating]);

  // Manual navigation with animation lock
  const handleNavigation = (index) => {
    if (isAnimating || index === activeIndex) return;

    setIsAnimating(true);
    setActiveIndex(index);
    // Animation onComplete will handle setIsAnimating(false)
  };

  const maxIndex = servicesData.length - 1;

  return (
    <section className="relative h-screen bg-white overflow-hidden">
      <div className="absolute inset-0 flex flex-col">
        {/* Header */}
        <motion.div
          className="flex flex-col p-8 px-32"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="font-medium text-[72px] text-[#1A1A1A] leading-none">
            Our Services
          </h1>
          <span className="font-medium mt-[-15px] px-48 text-[72px] text-[#1A1A1A]">
            and Works
          </span>
        </motion.div>

        {/* Main Content */}
        <div className="flex-1 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: activeIndex > 0 ? -100 : 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: activeIndex > 0 ? 100 : -100 }}
              transition={{
                duration: 0.8,
                ease: "easeInOut",
                onComplete: () => setIsAnimating(false),
              }}
              className="flex items-center justify-center gap-24 w-full"
            >
              {/* Counter */}
              <div
                ref={counterRef}
                className="flex items-center flex-col gap-4 text-[#A5A5A5] text-lg"
              >
                <motion.span
                  key={`counter-${activeIndex}`}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  className="text-black font-semibold text-xl"
                >
                  {activeIndex + 1}
                </motion.span>
                <motion.div
                  className="h-80 w-0.5 bg-black"
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                />
                <span>{servicesData.length}</span>
              </div>

              {/* Text Content */}
              <div className="max-w-xl text-left">
                <motion.h2
                  key={`title-${activeIndex}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="font-semibold text-[#1A1A1A] text-[40px] leading-tight"
                >
                  {servicesData[activeIndex].title}
                </motion.h2>
                <motion.p
                  key={`desc-${activeIndex}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-sm text-[#A5A5A5] pt-4"
                >
                  {servicesData[activeIndex].description}
                </motion.p>
              </div>

              {/* Image */}
              <motion.div
                key={`image-${activeIndex}`}
                initial={{
                  opacity: 0,
                  scale: 0.8,
                  rotate: activeIndex > 0 ? 10 : -10,
                }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{
                  opacity: 0,
                  scale: 0.8,
                  rotate: activeIndex > 0 ? -10 : 10,
                }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                whileHover={{
                  scale: 1.05,
                  rotate: 0,
                  transition: { duration: 0.3 },
                }}
              >
                <img
                  src={servicesData[activeIndex].image}
                  alt={servicesData[activeIndex].title}
                  className="w-[400px] rounded-3xl shadow-xl"
                />
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Arrows */}
        <motion.div
          ref={navigationRef}
          className="flex justify-center gap-8 pb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <motion.button
            onClick={() => activeIndex > 0 && handleNavigation(activeIndex - 1)}
            disabled={activeIndex === 0 || isAnimating}
            className={`p-3 px-6 rounded-full border transition-all ${
              activeIndex === 0 || isAnimating
                ? "opacity-30 cursor-not-allowed border-gray-300"
                : "border-black hover:bg-black hover:text-white cursor-pointer"
            }`}
            whileHover={!isAnimating && activeIndex > 0 ? { scale: 1.05 } : {}}
            whileTap={!isAnimating && activeIndex > 0 ? { scale: 0.95 } : {}}
          >
            ← Previous
          </motion.button>

          <motion.button
            onClick={() =>
              activeIndex < maxIndex && handleNavigation(activeIndex + 1)
            }
            disabled={activeIndex === maxIndex || isAnimating}
            className={`p-3 px-6 rounded-full border transition-all ${
              activeIndex === maxIndex || isAnimating
                ? "opacity-30 cursor-not-allowed border-gray-300"
                : "border-black hover:bg-black hover:text-white cursor-pointer"
            }`}
            whileHover={
              !isAnimating && activeIndex < maxIndex ? { scale: 1.05 } : {}
            }
            whileTap={
              !isAnimating && activeIndex < maxIndex ? { scale: 0.95 } : {}
            }
          >
            Next →
          </motion.button>
        </motion.div>

        {/* Animation Lock Overlay (Subtle Visual Feedback) */}
        <AnimatePresence>
          {isAnimating && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black pointer-events-none"
              transition={{ duration: 0.2 }}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Services;
