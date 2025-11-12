import React from "react";
import logo1 from "../assets/companies/logo(1).svg";
import logo2 from "../assets/companies/logo(2).svg";
import logo3 from "../assets/companies/logo(3).svg";
import logo4 from "../assets/companies/logo(4).svg";
import logo5 from "../assets/companies/logo(5).svg";
import logo6 from "../assets/companies/logo(6).svg";
import logo7 from "../assets/companies/logo(7).svg";
import logo8 from "../assets/companies/logo(8).svg";
import logo9 from "../assets/companies/logo(9).svg";
import logo10 from "../assets/companies/logo(10).svg";

const CompaniesScroll = () => {
  const logos = [
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo6,
    logo7,
    logo8,
    logo9,
    logo10,
  ];

  // Duplicate the logos for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className="max-w-xl mx-auto px-4">
      <div
        className="relative overflow-hidden"
        onMouseEnter={(e) => {
          e.currentTarget.querySelector(
            ".scroll-container"
          ).style.animationPlayState = "paused";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.querySelector(
            ".scroll-container"
          ).style.animationPlayState = "running";
        }}
      >
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 w-24 h-full"></div>
        <div className="absolute right-0 top-0 w-24 h-full "></div>

        {/* Scrolling container */}
        <div className="scroll-container flex space-x-4 animate-infinite-scroll">
          {duplicatedLogos.map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-32 h-16 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110"
            >
              <img
                src={logo}
                alt={`Company logo ${(index % logos.length) + 1}`}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes infinite-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(
              calc(-32 * 12px - 128px)
            ); /* -(logo-width + gap) * number-of-logos */
          }
        }

        .animate-infinite-scroll {
          animation: infinite-scroll 30s linear infinite;
          animation-play-state: running;
        }

        @media (max-width: 768px) {
          .animate-infinite-scroll {
            animation-duration: 20s;
          }
        }
      `}</style>
    </div>
  );
};

export default CompaniesScroll;
