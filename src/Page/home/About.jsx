// About.jsx
import React, { useRef, useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";

const About = () => {
  const sectionRef = useRef(null);

  const text =
    "Elevate Ethiopia is a leading consultancy and training firm empowering businesses, non-profits, and individuals nationwide. With 16+ years of experience and 134+ successful partnerships, we deliver tailored solutions in Research, Consultancy, BPO, and Training to drive growth and innovation.";

  const words = text.split(" ");

  // raw scroll progress tied to the section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    // maps the section entering -> leaving to progress 0 -> 1
    offset: ["start end", "end start"],
  });

  // a motion value we will control (only updated while section is inView)
  const controlledProgress = useMotionValue(0);
  // optionally smooth it for nicer motion
  const smoothProgress = useSpring(controlledProgress, {
    stiffness: 100,
    damping: 30,
  });

  const [inView, setInView] = useState(false);

  // IntersectionObserver to detect if section is in the viewport
  useEffect(() => {
    if (!sectionRef.current) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => setInView(entry.isIntersecting));
      },
      { threshold: 0.01 }
    );
    obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  // Subscribe to the raw scroll progress but only set controlledProgress while in view.
  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((v) => {
      if (inView) {
        // limit to 0..1 just in case
        const clamped = Math.max(0, Math.min(1, v ?? 0));
        controlledProgress.set(clamped);
      }
      // when not in view we DO NOTHING — progress stays where it was (frozen)
    });
    return () => unsubscribe();
  }, [inView, scrollYProgress, controlledProgress]);

  return (
    <section ref={sectionRef}>
      <div className="bg-[#1A1A1A] text-white px-32 py-36 mx-24 rounded-[70px]">
        <h1 className="text-[32px] text-center leading-relaxed flex flex-wrap justify-center">
          {words.map((word, i) => {
            // Each word gets its own small window along the progress axis.
            // Increase the window size to slow reveal (use factor > 1)
            const windowFactor = 1.2; // bigger = slower overall reveal
            const start = (i / words.length) * (1 / windowFactor);
            const end = start + (1 / words.length) * windowFactor;

            // Map the smoothProgress to visual properties for each word
            const opacity = useTransform(
              smoothProgress,
              [start, end],
              [0.36, 1],
              {
                clamp: true,
              }
            );
            const y = useTransform(smoothProgress, [start, end], [8, 0], {
              clamp: true,
            });
            const color = useTransform(
              smoothProgress,
              [start, end],
              ["#9B9B9B", "#FFFFFF"],
              {
                clamp: true,
              }
            );

            return (
              <motion.span
                key={i}
                style={{ opacity, y, color }}
                className="inline-block mr-[6px]"
              >
                {word}
              </motion.span>
            );
          })}
        </h1>
      </div>
    </section>
  );
};

export default About;
