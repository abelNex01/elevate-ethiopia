import React, { useEffect, useState } from "react";
import onTop from "../assets/onTop.png";

const ScrollButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Standard scroll handler (works with normal scroll AND Lenis)
  const toggleVisibility = () => {
    // Lenis injects itself on window if it exists
    if (window.lenis) {
      setIsVisible(window.lenis.scroll > 300);
    } else {
      setIsVisible(window.pageYOffset > 300);
    }
  };

  const scrollToTop = () => {
    if (window.lenis) {
      window.lenis.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => toggleVisibility();

    // Lenis case
    if (window.lenis) {
      window.lenis.on("scroll", toggleVisibility);
      toggleVisibility(); // initial check
      return () => window.lenis.off("scroll", toggleVisibility);
    }

    // Normal browser scroll
    window.addEventListener("scroll", handleScroll);
    toggleVisibility(); // initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed z-50 right-8 bottom-8 max-sm:hidden md:block group">
      <button
        onClick={scrollToTop}
        className={`transform transition-all duration-500 ease-out ${
          isVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-12 opacity-0 pointer-events-none"
        }`}
        aria-label="Scroll to top"
      >
        <img
          src={onTop}
          alt="Back to top"
          className="w-8 h-8 transition-transform duration-200 group-hover:scale-110 group-active:scale-95 hover:invert-50"
        />
      </button>
    </div>
  );
};

export default ScrollButton;
