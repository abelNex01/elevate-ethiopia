import React from "react";
import company1 from "../../assets/companies/companies1.png";
import company2 from "../../assets/companies/companies2.png";
import logo from "../../assets/logosmall.svg";

const Customers = () => {
  return (
    <section>
      <div className="flex flex-col justify-center items-center mx-auto p-12">
        <div className="flex flex-col items-center justify-center space-y-4">
          <h1 className="text-3xl font-semibold">
            Loved by Businesses, Trusted by Professionals
          </h1>
          <p className="text-sm w-2xl text-center text-[#818181] leading-relaxed">
            At Elevate Ethiopia, we’re proud to partner with over 134
            organizations, earning their trust through excellence, personalized
            service, and innovative solutions.
          </p>
        </div>
        <div className="flex pt-8">
          <img src={company1} alt="" className="h-60" />
          <img src={company2} alt="" className="h-60" />
        </div>
        <div className="scale-75 mt-4">
          <div className="flex gap-4 justify-center items-center">
            <div className="w-md h-[1.2px] bg-[#818181]" />
            <img src={logo} alt="" className="w-16" />
            <div className="w-md h-[1.2px] bg-[#818181]" />
          </div>
          <div className="flex flex-col justify-center items-center mt-4 space-y-1">
            <h1 className="text-xl font-semibold text-[#1A1A1A]">
              Elevate Ethiopia
            </h1>
            <p className="text-xs font-light text-[#818181]">
              Consultancy and Training PLC
            </p>
            <button className="px-8 py-2 bg-[#1A1A1A] text-white rounded-full cursor-none mt-2 hover:bg-transparent hover:border hover:text-[#1A1A1A]">
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customers;
