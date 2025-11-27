import React from "react";
import team from "../../assets/team1.jpg";

const Company = () => {
  return (
    <section>
      <div className="bg-white text-[#1a1a1a] m-4 rounded-2xl p-8">
        <div>
          <div className="flex justify-between px-4">
            <div className="space-x-2">
              <span className="px-4 py-1 bg-gray-100 text-sm rounded-full">
                Virtual Challenges
              </span>
              <span className="px-4 py-1 bg-gray-100 text-sm rounded-full">
                Virtual Challenges
              </span>
            </div>
            <div>
              <div className=""></div>
              <h4>THE PROGRAM</h4>
            </div>
          </div>
          <div className="flex justify-between items-end px-4 pt-4">
            <h1 className="text-[52px] w-4xl leading-[62px]">
              Elevate your experiance with handpicked featured.
            </h1>
            <p className="font-light text-[#8a8a8a] text-xl w-xs">
              Your sports jorney starts right here with us and the crew.
            </p>
          </div>
          <div className="flex justify-center items-center gap-3 mt-8">
            <div className="p-4 w-sm h-[500px] leading-none rounded-2xl">
              <h1 className="text-[84px]">
                01 <span className="text-[#8a8a8a] text-2xl">/8</span>
              </h1>
              <p className="text-light text-sm text-[#8a8a8a]">
                Upcoming <br /> Event
              </p>
            </div>
            <div class="flex flex-col relative p-8 w-full max-w-xl h-[500px] leading-none rounded-3xl bg-black text-white">
              <h1 class="text-4xl leading-normal">
                The coach experts and simple software for better sportainment.
              </h1>

              <div class="flex justify-between items-center absolute bottom-8 left-8 right-8">
                <h4 class="text-2xl">Live</h4>
                <button class="px-4 py-2 rounded-full bg-transparent border border-white hover:bg-white hover:text-black transition-colors">
                  Elevateethiopia.com
                </button>
              </div>
            </div>
            <div
              className="flex flex-col relative p-8 w-full max-w-xl h-[500px] leading-none rounded-3xl text-white"
              style={{
                backgroundImage: `url(${team})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Company;
