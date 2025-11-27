import React, { useEffect, useState, useRef } from "react";
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
  const [allowNormalScroll, setAllowNormalScroll] = useState(false);
  const sectionRef = useRef(null);

  // AutoAnimate refs (keeps micro-interactions)
  const [counterRef] = useAutoAnimate();
  const [navigationRef] = useAutoAnimate();

  // Wheel throttle guard
  const wheelTimeout = useRef(false);

  // Touch swipe support
  const touchStartY = useRef(null);
  const touchEndY = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleWheel = (e) => {
      const maxIndex = servicesData.length - 1;

      // throttle wheel events so user doesn't skip multiple slides
      if (wheelTimeout.current) {
        e.preventDefault();
        return;
      }
      wheelTimeout.current = true;
      // sensitivity: 600ms. Lower = faster, Higher = slower
      setTimeout(() => (wheelTimeout.current = false), 600);

      // If we're on the last slide and user scrolls down -> release sticky and let page scroll
      if (activeIndex === maxIndex && e.deltaY > 0) {
        // ensure release happens (small delay to allow current animation to finish)
        setAllowNormalScroll(true);
        // small nudge to make browser paint next section (helps on some browsers/devices)
        setTimeout(() => {
          try {
            window.scrollBy({ top: 2, left: 0, behavior: "smooth" });
          } catch {
            window.scrollBy(0, 2);
          }
        }, 60);
        return; // allow native scroll afterwards
      }

      // If at first slide and scrolling up -> allow leaving the section
      if (activeIndex === 0 && e.deltaY < 0) {
        return;
      }

      // If animation in progress, ignore wheel
      if (isAnimating) {
        e.preventDefault();
        return;
      }

      // Normal slide navigation via wheel
      if (e.deltaY > 0 && activeIndex < maxIndex) {
        e.preventDefault();
        setIsAnimating(true);
        setAllowNormalScroll(false);
        setActiveIndex((prev) => prev + 1);
      } else if (e.deltaY < 0 && activeIndex > 0) {
        e.preventDefault();
        setIsAnimating(true);
        setAllowNormalScroll(false);
        setActiveIndex((prev) => prev - 1);
      }
    };

    section.addEventListener("wheel", handleWheel, { passive: false });
    return () => section.removeEventListener("wheel", handleWheel);
  }, [activeIndex, isAnimating]);

  // Touch handlers for mobile swipe
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const onTouchStart = (e) => {
      touchStartY.current = e.touches[0].clientY;
      touchEndY.current = null;
    };

    const onTouchMove = (e) => {
      touchEndY.current = e.touches[0].clientY;
    };

    const onTouchEnd = () => {
      if (touchStartY.current == null || touchEndY.current == null) return;
      const delta = touchStartY.current - touchEndY.current;
      const threshold = 40; // minimum swipe distance to count
      const maxIndex = servicesData.length - 1;

      if (Math.abs(delta) < threshold) {
        touchStartY.current = null;
        touchEndY.current = null;
        return;
      }

      if (delta > 0) {
        // swipe up -> next
        if (activeIndex < maxIndex && !isAnimating) {
          setIsAnimating(true);
          setActiveIndex((prev) => prev + 1);
        } else if (activeIndex === maxIndex) {
          // if on last slide and swiping up, release sticky to allow page scroll
          setAllowNormalScroll(true);
          setTimeout(() => {
            try {
              window.scrollBy({ top: 2, left: 0, behavior: "smooth" });
            } catch {
              window.scrollBy(0, 2);
            }
          }, 60);
        }
      } else {
        // swipe down -> prev or leave
        if (activeIndex > 0 && !isAnimating) {
          setIsAnimating(true);
          setActiveIndex((prev) => prev - 1);
        } else if (activeIndex === 0) {
          // nothing special - allow normal scroll to leave if user keeps swiping down
        }
      }

      touchStartY.current = null;
      touchEndY.current = null;
    };

    section.addEventListener("touchstart", onTouchStart, { passive: true });
    section.addEventListener("touchmove", onTouchMove, { passive: true });
    section.addEventListener("touchend", onTouchEnd, { passive: true });

    return () => {
      section.removeEventListener("touchstart", onTouchStart);
      section.removeEventListener("touchmove", onTouchMove);
      section.removeEventListener("touchend", onTouchEnd);
    };
  }, [activeIndex, isAnimating]);

  // Watch window scroll to reset allowNormalScroll when user scrolls back into the section
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();

      // We'll treat the section as 'in view' if it spans the viewport (with small margin)
      const isInView = rect.top <= 60 && rect.bottom >= window.innerHeight - 60;
      const maxIndex = servicesData.length - 1;

      // If we returned back into the section area and we had previously released,
      // reset the release so user is captured again for full-slider behavior.
      if (isInView && allowNormalScroll && activeIndex === maxIndex) {
        // If user scrolled up slightly into the section, re-lock
        if (rect.top > -10) {
          setAllowNormalScroll(false);
        }
      }

      // If user scrolls far above the section, ensure it's not stuck open
      if (!isInView && allowNormalScroll && rect.top > window.innerHeight) {
        setAllowNormalScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [allowNormalScroll, activeIndex]);

  const handleNavigation = (index) => {
    if (isAnimating || index === activeIndex) return;
    setIsAnimating(true);
    setActiveIndex(index);
  };

  const maxIndex = servicesData.length - 1;

  return (
    <section
      ref={sectionRef}
      // When allowNormalScroll is false we keep it sticky and full viewport height.
      // When true, allow the section to collapse to natural height so the next section becomes visible.
      className="relative bg-white overflow-visible"
      style={{
        height: allowNormalScroll ? "auto" : "100vh",
        position: allowNormalScroll ? "relative" : "sticky",
        top: 0,
        zIndex: 20,
        // ensure children visible and don't clip
        overflow: "visible",
      }}
    >
      {/* Using a normal flow container (not absolute) so it doesn't cover next sections */}
      <div className="flex flex-col min-h-full w-full">
        {/* Main Content */}
        <div className="flex-1 flex items-center justify-center p-4 md:p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: activeIndex > 0 ? -80 : 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: activeIndex > 0 ? 80 : -80 }}
              transition={{
                duration: 0.8,
                ease: "easeInOut",
              }}
              onAnimationComplete={() => setIsAnimating(false)}
              className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-24 w-full"
            >
              {/* Counter */}
              <div
                ref={counterRef}
                className="flex items-center flex-row lg:flex-col gap-4 text-[#A5A5A5] text-lg"
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
                  className="h-0 lg:h-80 w-0.5 bg-black"
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                />
                <span>{servicesData.length}</span>
              </div>

              {/* Text Content */}
              <div className="max-w-xl text-center lg:text-left px-4 md:px-0">
                <motion.h2
                  key={`title-${activeIndex}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="font-semibold text-[#1A1A1A] text-[24px] sm:text-[28px] md:text-[36px] lg:text-[40px] leading-tight"
                >
                  {servicesData[activeIndex].title}
                </motion.h2>
                <motion.p
                  key={`desc-${activeIndex}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-sm md:text-base text-[#A5A5A5] pt-4"
                >
                  {servicesData[activeIndex].description}
                </motion.p>
              </div>

              {/* Image */}
              <motion.div
                key={`image-${activeIndex}`}
                initial={{
                  opacity: 0,
                  scale: 0.88,
                  rotate: activeIndex > 0 ? 10 : -10,
                }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{
                  opacity: 0,
                  scale: 0.88,
                  rotate: activeIndex > 0 ? -10 : 10,
                }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                whileHover={{
                  scale: 1.05,
                  rotate: 0,
                  transition: { duration: 0.3 },
                }}
                className="flex-shrink-0"
              >
                <img
                  src={servicesData[activeIndex].image}
                  alt={servicesData[activeIndex].title}
                  className="w-[220px] sm:w-[260px] md:w-[330px] lg:w-[400px] rounded-3xl shadow-xl object-cover"
                />
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Arrows */}
        <motion.div
          ref={navigationRef}
          className="flex justify-center gap-6 pb-8 px-4"
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

        {/* Animation Lock Overlay (subtle) */}
        <AnimatePresence>
          {isAnimating && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.06 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black pointer-events-none"
              transition={{ duration: 0.15 }}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Services;
