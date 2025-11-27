import React from "react";
import member1 from "../../assets/team/team(1).png";
import member2 from "../../assets/team/team(2).png";
import member3 from "../../assets/team/team(3).png";
import member4 from "../../assets/team/team(4).png";
import member5 from "../../assets/team/team(5).png";
import social1 from "../../assets/social/social(1).svg";
import social2 from "../../assets/social/social(2).svg";
import social3 from "../../assets/social/social(3).svg";
import social4 from "../../assets/social/social(4).svg";
import { motion } from "framer-motion";

const Team = () => {
  return (
    <section>
      <div className="flex flex-col space-y-12 p-12">
        <div className="space-y-4 relative">
          <motion.div
            className="flex flex-col p-6 lg:p-8 lg:px-12 pt-12 lg:pt-20"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-medium text-[60px] md:text-[90px] lg:text-[128px] text-[#1A1A1A] leading-none">
              Meet Our
            </h1>
            <span
              className="font-medium mt-[-10px] md:mt-[-20px] text-[60px] px-32
             md:text-[90px] lg:text-[128px] text-[#1A1A1A]"
            >
              Beautiful Team
            </span>
          </motion.div>
          <p className="absolute top-36 right-[150px] w-xl text-sm text-[#818181] leading-relaxed">
            Our philosophy is simple, hire great people and give them the
            resources and support to do there best work.
          </p>
        </div>
        <div className="flex gap-4 justify-center">
          <div className="w-[280px] h-96 bg-gray-100 rounded-3xl shadow-md">
            <img src={member3} alt="" className="w-full" />
            <div className="flex gap-2 items-center px-4 space-y-1">
              <div>
                <h4 className="text-[#1a1a1a] text-lg font-semibold">
                  Tinsae Mengistu
                </h4>
                <p className="text-sm text-[#818181]">Admin & Finance</p>
              </div>
              <div className="flex invert-50 gap-3 w-8 pt-16">
                <img src={social1} alt="" />
                <img src={social2} alt="" />
                <img src={social3} alt="" />
                <img src={social4} alt="" />
              </div>
            </div>
          </div>
          <div className="w-[280px] h-96 bg-gray-100 rounded-3xl shadow-md">
            <img src={member4} alt="" className="w-full" />
            <div className="flex gap-2 items-center px-4 space-y-1">
              <div>
                <h4 className="text-[#1a1a1a] text-lg font-semibold">
                  Tinsae Mengistu
                </h4>
                <p className="text-sm text-[#818181]">Admin & Finance</p>
              </div>
              <div className="flex invert-50 gap-3 w-8 pt-16">
                <img src={social1} alt="" />
                <img src={social2} alt="" />
                <img src={social3} alt="" />
                <img src={social4} alt="" />
              </div>
            </div>
          </div>
          <div className="w-[280px] h-96 bg-gray-100 rounded-3xl shadow-md">
            <img src={member2} alt="" className="w-full" />
            <div className="flex gap-2 items-center px-4 space-y-1">
              <div>
                <h4 className="text-[#1a1a1a] text-lg font-semibold">
                  Tinsae Mengistu
                </h4>
                <p className="text-sm text-[#818181]">Admin & Finance</p>
              </div>
              <div className="flex invert-50 gap-3 w-8 pt-16">
                <img src={social1} alt="" />
                <img src={social2} alt="" />
                <img src={social3} alt="" />
                <img src={social4} alt="" />
              </div>
            </div>
          </div>
          <div className="w-[280px] h-96 bg-gray-100 rounded-3xl shadow-md">
            <img src={member1} alt="" className="w-full" />
            <div className="flex gap-2 items-center px-4 space-y-1">
              <div>
                <h4 className="text-[#1a1a1a] text-lg font-semibold">
                  Tinsae Mengistu
                </h4>
                <p className="text-sm text-[#818181]">Admin & Finance</p>
              </div>
              <div className="flex invert-50 gap-3 w-8 pt-16">
                <img src={social1} alt="" />
                <img src={social2} alt="" />
                <img src={social3} alt="" />
                <img src={social4} alt="" />
              </div>
            </div>
          </div>
          <div className="w-[280px] h-96 bg-gray-100 rounded-3xl shadow-md">
            <img src={member5} alt="" className="w-full" />
            <div className="flex gap-2 items-center px-4 space-y-1">
              <div>
                <h4 className="text-[#1a1a1a] text-lg font-semibold">
                  Tinsae Mengistu
                </h4>
                <p className="text-sm text-[#818181]">Admin & Finance</p>
              </div>
              <div className="flex invert-50 gap-3 w-8 pt-16">
                <img src={social1} alt="" />
                <img src={social2} alt="" />
                <img src={social3} alt="" />
                <img src={social4} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
