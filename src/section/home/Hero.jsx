import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import bg from "../../assets/herobg.jpg";
import rocket from "../../assets/rocket.png";
import girl from "../../assets/girl.png";
import CompaniesScroll from "../../components/CompaniesScroll.jsx";

// Animation Variants
// This creates the "staggered" effect where items load one by one
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Time between each item appearing
      delayChildren: 0.3,
    },
  },
};

// The specific animation for text/buttons (Fade Up)
const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.25, 0, 1], // "Award-winning" smooth ease curve
    },
  },
};

// Animation for the image (Fade in + slight scale)
const imageVariants = {
  hidden: { opacity: 0, scale: 0.95, x: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-white pointer-events-none z-10"></div>

      {/* RESPONSIVE UPDATE: 
         - Added 'flex-col lg:flex-row' to stack on mobile, row on desktop.
         - Changed 'px-36' to 'px-6 lg:px-36' to prevent squishing on mobile.
      */}
      <div className="flex flex-col-reverse lg:flex-row container mx-auto px-6 lg:px-36 p-4 min-h-[90vh] lg:min-h-0 py-12 lg:py-4">
        {/* LEFT CONTENT */}
        <motion.div
          className="flex flex-col justify-center items-start mx-auto w-full lg:w-1/2 z-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="space-y-4">
            <motion.h1
              variants={itemVariants}
              className="font-bold text-[32px] lg:text-[40px] text-[#1A1A1A] leading-tight"
            >
              Empowering Ethiopian <br className="hidden lg:block" />{" "}
              organization.
            </motion.h1>

            {/* Fixed 'w-md' to 'max-w-md' as 'w-md' doesn't exist in standard Tailwind */}
            <motion.p
              variants={itemVariants}
              className="text-sm max-w-md text-[#989898]"
            >
              Practical consulting and hands-on training that strengthens teams,
              improves services, and delivers long-term impact.
            </motion.p>

            <motion.div variants={itemVariants} className="space-x-2 pt-6">
              <button className="px-8 py-2 bg-[#1A1A1A] rounded-full text-white hover:bg-transparent hover:text-black border border-[#1A1A1A] transition-all duration-200 ease-in-out">
                Get a Consultation
              </button>

              <button className="px-8 py-2 bg-transparent text-black rounded-full shadow-[inset_0_0_0_2px_#1A1A1A] hover:shadow-[inset_0_0_0_0_#1A1A1A] transition-all duration-200 ease-in-out">
                View Services
              </button>
            </motion.div>
          </div>

          {/* STATS SECTION */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col pt-12 w-full"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center">
              <motion.div
                className="pb-6 sm:pb-0 sm:pr-8"
                whileHover={{ scale: 1.1, rotate: 5 }} // Subtle interaction
              >
                <img src={rocket} alt="Rocket Icon" className="w-24 lg:w-32" />
              </motion.div>

              <div>
                <div className="text-[#1A1A1A]">
                  <h4 className="font-semibold text-lg">
                    Integrity is our birthmark!
                  </h4>
                  <div className="flex flex-wrap gap-4 pt-2">
                    <span>
                      <h2 className="text-xl font-bold">10+</h2>
                      <small className="text-gray-500 text-xs block">
                        Year in <br className="hidden lg:block" /> Business
                      </small>
                    </span>
                    <span>
                      <h2 className="text-xl font-bold">130+</h2>
                      <small className="text-gray-500 text-xs block">
                        Organizations
                      </small>
                    </span>
                    <span>
                      <h2 className="text-xl font-bold">1,500+</h2>
                      <small className="text-gray-500 text-xs block">
                        Projects
                      </small>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 w-full">
              <CompaniesScroll />
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          className="flex justify-center items-center mx-auto w-full lg:w-1/2 mb-10 lg:mb-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={imageVariants}
        >
          {/* Added a subtle floating animation to the girl image */}
          <motion.img
            src={girl}
            alt="Protected"
            className="scale-90 w-3/4 lg:w-auto object-contain"
            animate={{ y: [0, -15, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
