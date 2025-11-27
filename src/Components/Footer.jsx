import React from "react";
import logo from "../assets/logo.svg";
import social1 from "../assets/social/social(1).svg";
import social2 from "../assets/social/social(2).svg";
import social3 from "../assets/social/social(3).svg";
import social4 from "../assets/social/social(4).svg";

const Footer = () => {
  return (
    <section>
      <div className=" bg-[#1a1a1a] text-white p-8 py-24 pb-28 m-4 rounded-3xl">
        <div className="flex justify-evenly">
          <div className="space-y-4">
            <img
              src={logo}
              alt=""
              className="w-72 filter brightness-0 invert"
            />
            <p className="text-sm text-[#818181] w-xs leading-relaxed pt-2">
              Founded in 2015, Elevate Ethiopia is premier consultancy and
              training firm in Ethiopia.
            </p>
          </div>
          <div className="flex flex-col">
            <h4 className="font-semibold text-xl pb-6">Quick Links</h4>
            <div className="flex flex-col text-sm space-y-3 font-light text-[#818181]">
              <a href="#">Home</a>
              <a href="#">Services</a>
              <a href="#">Pricing</a>
              <a href="#">FAQs</a>
              <a href="#">Newsletter</a>
            </div>
          </div>
          <div className="flex flex-col">
            <h4 className="font-semibold text-xl pb-6">Resources</h4>
            <div className="flex flex-col text-sm space-y-3 font-light text-[#818181] cursor-none">
              <a href="#">Blog</a>
              <a href="#">Productivity Tips</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookies Policy</a>
            </div>
          </div>
          <div className="flex flex-col">
            <h4 className="font-semibold text-xl pb-6">Follow Us</h4>
            <div className="flex gap-4">
              <img src={social2} alt="" />
              <img src={social3} alt="" />
              <img src={social1} alt="" />
              <img src={social4} alt="" />
            </div>

            <div className="mt-2 space-x-1">
              <h4 className="text-[#818181] text-sm font-light pt-6">
                Subscribe to our Newsletter
              </h4>
              <input
                type="email"
                className="px-4 py-2 rounded-full bg-transparent text-white placeholder:text-[#818181] placeholder:text-xs border border-[#818181] w-[280px]  "
                placeholder="Enter your email"
              />
              <button className="px-4 py-2 w-[160px] mt-4 bg-white rounded-full text-[#1A1A1A] hover:bg-transparent hover:text-white border border-[#1A1A1A] transition-all duration-200 ease-in-out">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-4 mt-16 px-12">
          <div className="w-full h-0.5 bg-[#818181]" />
          <div className="flex justify-between text-[#818181] text-sm">
            <h4 className="text-xl font-semibold">Elevate Ethiopia.</h4>
            <p>Made by Pixelbet.</p>
          </div>
          <div className="flex flex-col mt-8 space-y-4">
            <div className="w-full h-0.5 bg-[#818181]" />
            <div className="flex justify-between text-[#818181] text-sm">
              <div className="flex gap-4">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
                <a href="#">Cookies Policy</a>
              </div>
              <p>
                c 2025 Elevate Ethiopia Consultancy and Training PLC. All right
                reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
