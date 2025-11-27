import React from "react";
import elevate from "../../assets/elevate.png";

const Newsletter = () => {
  return (
    <section>
      <div className="w-[70%] py-16 gap-12 shadow-xl rounded-4xl p-8 flex justify-center items-center mx-auto m-8 bg-[#1a1a1a] text-white">
        <div>
          <img src={elevate} alt="" />
        </div>
        <div className="flex flex-col space-y-2">
          <h1 className="text-2xl font-semibold">
            Subscribe to Our Newsletter
          </h1>
          <p className="w-lg text-sm text-[#818181] pt-2">
            Welcome to our newsletter hub, where we bring you the latest
            happenings, and behind the scenes insights.
          </p>
          <div className="flex items-center justify-center m-auto gap-2 pt-8">
            <input
              type="email"
              placeholder="enter your email"
              className="px-6 py-3 rounded-full w-sm bg-[#f3f3f3] placeholder:text-sm placeholder:text-[#818181]"
              required
            />
            <button className="border px-6 py-3 font-semibold rounded-full hover:border-0 bg-white text-[#1a1a1a]">
              Subscribe Now
            </button>
          </div>

          <div className="mt-12 text-center font-light">
            <small className="text-xs text-[#818181]">
              Your information will never be shared with third parties and you
              can unsubscribe at any time.
            </small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
