import React from "react";
import social1 from "../assets/social/social(1).svg";
import social2 from "../assets/social/social(2).svg";
import social3 from "../assets/social/social(3).svg";
import social4 from "../assets/social/social(4).svg";
import elevate from "../assets/logo.svg";

const Navbar = () => {
  return (
    <section className="mx-8">
      <div>
        <div className=" flex justify-between bg-[#1A1A1A] py-2 px-4 text-white rounded-sm">
          <span className="flex gap-8 text-sm">
            <small>Call us: +251 911 09 07 01</small>
            <small>Email: elevateethiopia@email.com</small>
          </span>
          <span className="flex gap-4 cursor-pointer">
            <img src={social1} alt="" />
            <img src={social2} alt="" />
            <img src={social3} alt="" />
            <img src={social4} alt="" />
          </span>
        </div>
        <div className="flex items-center justify-between bg-[#ececec] py-2 px-12 rounded-sm">
          <span>
            <img src={elevate} alt="" className="w-24" />
          </span>
          <span className="space-x-8 text-sm">
            <a href="#" className="px-4 py-1 rounded-full bg-black text-white">
              About
            </a>
            <a href="#">FAQ</a>
            <a href="#">Blog</a>
          </span>
          <span className="space-x-2 text-xs rounded-sm">
            <button className="px-8 py-2 bg-transparent text-black rounded-full cursor-pointer  shadow-[inset_0_0_0_2px_#1A1A1A] hover:shadow-[inset_0_0_0_0_#1A1A1A] transition-all duration-200 ease-in-out">
              Get a Consultation
            </button>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
