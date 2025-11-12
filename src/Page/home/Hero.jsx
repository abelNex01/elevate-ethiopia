import React from "react";
import bg from "../../assets/herobg.jpg";
import rocket from "../../assets/rocket.png";
import girl from "../../assets/girl.png";
import CompaniesScroll from "../../Components/CompaniesScroll.jsx";

const Hero = () => {
  return (
    <section
      className="bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="flex container mx-auto px-36 p-4">
        <div className="flex flex-col justify-center items-start mx-auto">
          <div className="space-y-4">
            <h1 className="font-bold text-[40px] text-[#1A1A1A] leading-tight">
              Empowering Ethiopian <br /> organization.
            </h1>
            <p className="text-sm w-md text-[#989898]">
              Practical consulting and hands-on training that strengthens teams,
              improves services, and delivers long-term impact.
            </p>
            <div className="space-x-2 pt-6">
              <button className="px-8 py-2 bg-[#1A1A1A] rounded-full text-white hover:bg-transparent hover:text-black transition-all duration-200 ease-in-out">
                Get a Consultation
              </button>

              <button className="px-8 py-2 bg-transparent text-black rounded-full  shadow-[inset_0_0_0_2px_#1A1A1A] hover:shadow-[inset_0_0_0_0_#1A1A1A] transition-all duration-200 ease-in-out">
                View Services
              </button>
            </div>
          </div>
          <div className="flex flex-col pt-12">
            <div className="flex items-center">
              <div className="pb-12">
                <img src={rocket} alt="" className="w-32" />
              </div>
              <div>
                <div className="text-[#1A1A1A]">
                  <h4 className="font-semibold text-lg">
                    Integrity is our birthmark!
                  </h4>
                  <div className="flex gap-4 pt-2">
                    <span>
                      <h2 className="text-xl font-bold">10+</h2>
                      <small className="text-gray-500 text-xs">
                        Year in Business
                      </small>
                    </span>
                    <span>
                      <h2 className="text-xl font-bold">130+</h2>
                      <small className="text-gray-500 text-xs">
                        Organizations
                      </small>
                    </span>
                    <span>
                      <h2 className="text-xl font-bold">1,500+</h2>
                      <small className="text-gray-500 text-xs">Projects</small>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <CompaniesScroll />
          </div>
        </div>
        <div className="flex justify-center items-center mx-auto">
          <img src={girl} alt="" className="scale-90" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
