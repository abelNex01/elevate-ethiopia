import React from "react";
import banner from "../../assets/ethiopia.jpg";
import logo from "../../assets/logo.svg";

const Banner = () => {
  return (
    <section>
      <div
        className="relative flex justify-center mx-auto items-center w-[98%] h-[500px] bg-cover bg-center rounded-2xl shadow-xl  my-16"
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.8), transparent), url(${banner})`,
        }}
      >
        <div className="flex gap-8 items-end justify-between absolute bottom-12 left-12 right-12">
          <div>
            <small className="text-sm text-white font-light">
              www.elevateethiopia.com
            </small>
          </div>
          <div className="text-white">
            <img
              src={logo}
              alt=""
              className="w-20 filter brightness-0 invert"
            />
            <h1 className="text-3xl font-semibold leading-relaxed pt-2">
              Empowering <br />
              Growth, Elevating Impact.
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
